/**
 * This class simulates a single cycle cpu.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

import {RegisterFile} from "./registerFile.js"
import {Multiplexer} from "./mux.js"
import {Alu} from "./alu.js"
import {OpCodeDecoder} from "./opCodeDecoder.js"
import {Control} from "./control.js"
import {PC} from "./pc.js"

export class CPU {
    constructor() {
        // The constructor will create a processor object with all needed subcomponents
        this.pc = new PC(32);  // Matches the iMem size.
        this.iMem = new RegisterFile(16, 32);
        this.ocd = new OpCodeDecoder();
        this.control = new Control();
        this.registers = new RegisterFile(8, 4);
        this.dMem = new RegisterFile(8, 32);  // Unsure if this is the total size (but I think so)
        this.flags = new RegisterFile(1, 4);

        this.regMux0 = new Multiplexer(4);
        this.regMux1 = new Multiplexer(4);

        this.aluSourceMux = new Multiplexer(2);

        this.alu = new Alu();

        this.aluResultMux = new Multiplexer(2);

        this.dmemInputMux = new Multiplexer(2);

        this.regWritebackMux = new Multiplexer(2);

        this.switchInput;  // TODO these are not defined should come from Jacob.
        
        this.instructions; // These will be the instructions, just make it an array, indexed at 0. That will make them line up with the iMem.
    }

    setup() {
        // Initialize the register files
        // TODO this may be unneeded for the iMem after we get code from Eric
        this.iMem.initialize();
        this.dMem.initialize();
        this.registers.initialize();
        this.flags.initialize();

        this.alu.setControl(this.control.get, 'c12c13');
    }

    /**
     * This function simulates the processor running for one cycle
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    singleCycle() {
        // ====================
        // FETCH
        // ====================

        // Get the pc
        let pc = this.pc.getPC();

        // Fetch the opcode from iMem
        let opcode = this.iMem.getRegister(pc);

        // ====================
        // DECODE
        // ====================

        // Decode the opcode
        let decodedOpcode = this.ocd.getDecodedOpCode(opcode);

        // Process the control signals
        this.control.setControl(decodedOpcode, this.flags.getRegister(3), this.flags.getRegister(2), this.flags.getRegister(1));
        let controlSignals = this.control.getControl();
        
        // Set the muxes in the correct state (These won't really be used in the sim, they are just for display)
        let c4c5 = parseInt(this.control.get('c4c5'),2);
        let c6c7 = parseInt(this.control.get('c6c7'),2);
        this.regMux0.setState(c4c5);
        this.regMux1.setState(c6c7);

        // Setup the registers' mux sources
        // Idea, these values are never uses. This might be needed for the display, but if not, cut here.
        for(var i=0; i < 4; i++) {
            this.regMux0.setSource(i, this.registers.getRegister(i));
            this.regMux1.setSource(i, this.registers.getRegister(i));
        }

        // ====================
        // Execute
        // ====================

        // Update the mux for the alu (I purposely avoided using the muxes which frees them)
        this.aluSourceMux.setSource(0, this.registers.getRegister(c6c7));
        this.aluSourceMux.setSource(1, opcode.substring(8,17));

        // Set the state of the multiplexer before the alu.
        this.aluSourceMux.setState(controlSignals[11]);

        // Setup the alu inputs and get the result
        let aluOpA = this.registers.getRegister(c4c5);
        let aluOpB = this.aluSourceMux.getOutput();
        this.alu.setOps(aluOpA, aluOpB);
        this.alu.process(this.control.get('c12c13'));
        
        // Update flags
        this.flags.setWriteEnable(controlSignals[14]);
        this.flags.setRegister(0, this.alu.carry);
        this.flags.setRegister(1, this.alu.overflow);
        this.flags.setRegister(2, this.alu.negative);
        this.flags.setRegister(3, this.alu.zero);

        // Handle post mux alu
        this.aluResultMux.setSource(0, this.alu.result);
        this.aluResultMux.setSource(1, opcode.substring(8,17));
        this.aluResultMux.setState(controlSignals[15]);
        let aluResultMuxOutput = this.aluResultMux.getOutput();

        // ====================
        // MEMORY
        // ====================

        // Calculate dmem address
        let dmemAddr = parseInt(aluResultMuxOutput.substring(4,8),2);

        // Update dmem input mux
        this.dmemInputMux.setSource(0, this.registers.getRegister(c6c7));
        this.dmemInputMux.setSource(1, this.switchInput);
        this.dmemInputMux.setState(controlSignals[16]);

        // Update dmem
        this.dMem.setWriteEnable(controlSignals[17]);
        this.dMem.setRegister(dmemAddr, this.dmemInputMux.getOutput());     

        // ====================
        // WRITEBACK
        // ====================

        // Update the final mux
        this.regWritebackMux.setSource(0, aluResultMuxOutput);
        this.regWritebackMux.setSource(1, this.dMem.getRegister(dmemAddr));
        this.regWritebackMux.setState(controlSignals[18]);
        let writebackResult = this.regWritebackMux.getOutput();

        // Update registers
        this.registers.setWriteEnable(controlSignals[10]);
        let targetRegister = parseInt(this.control.get('c8c9'), 2);
        this.registers.setRegister(targetRegister, writebackResult);
        
        // Update pc
        this.pc.process(opcode, controlSignals[2]);
    }
};

window.cpu = new CPU();