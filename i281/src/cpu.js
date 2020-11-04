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

export class cpu {
    constructor() {
        // The constructor will create a processor object with all needed subcomponents
        this.pc = new PC();
        this.iMem = new RegisterFile(8, 4);
        this.ocd = new OpCodeDecoder();
        this.control = new Control();
        this.registers = new RegisterFile(8, 4);
        this.dMem = new RegisterFile(8, 8);  // Unsure if this is the total size (but I think so)
        this.flags = new RegisterFile(4, 1);

        this.regMux0 = new Multiplexer(4);
        this.regMux1 = new Multiplexer(4);

        this.aluSourceMux = new Multiplexer(2);

        this.alu = new Alu();

        this.aluResultMux = new Multiplexer(2);

        this.dmemInputMux = new Multiplexer(2);

        this.regWritebackMux = new Multiplexer(2);
    }

    setup() {
        // Setup the registers' mux sources

        for(var i=0; i < 4; i++) {
            this.regMux0.setSource(i, this.registers.getRegister(i))
            this.regMux1.setSource(i, this.registers.getRegister(i))
        }

        this.alu.setControl(this.control.get, 'c12c13');

        this.aluResultMux.setSource(0, this.alu.getResult);
    }

    /**
     * This function simulates the processor running for one cycle
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    singleCycle() {
        // Get the pc
        let pc = this.pc.getPC();

        // Fetch the opcode from iMem
        let opcode = this.iMem.getRegister(0);  // TODO this might need to not be zero later..., haha, yeah, that should be the pc. 

        // Decode the opcode
        let decodedOpcode = this.ocd.getDecodedOpCode(opcode);
        
        // TODO set the flags.

        // TODO make sure this works, this should be rewritten with the flag calculator possibly. We'll see. 
        let zeroFlag = this.flags.getRegister(0).charAt(0);
        let negativeFlag = this.flags.getRegister(0).charAt(2);
        let overflowFlag = this.flags.getRegister(0).charAt(3); 

        // Process the control signals
        let controlSignals = this.control.setControl(decodedOpcode, zeroFlag, negativeFlag, overflowFlag);
        
        // Set the muxes in the correct state (These won't really be used in the sim, they are just for display)
        regMux0.setState(this.control.get('c4c5'));
        regMux1.setState(this.control.get('c6c7'));


        // Set the state of the multiplexer before the alu.
        this.aluSourceMux.setState(controlSignals[11]);

        // Update the mux for the alu
        aluSourceMux.setSource(0, this.regMux1.getOutput);
        aluSourceMux.setSource(1, opcode.substring(0,8)); // TODO. This will be a massive headache. What endian are we using? This should be right.

        // Setup the alu inputs and get the result
        this.alu.setOps(this.registers.getRegister(this.control.get('c4c5')), this.aluSourceMux.getOutput());
        this.alu.process()

        // Handle post mux alu
        this.aluResultMux.setSource(1, opcode.substring(0,8));
        this.aluResultMux.setState(controlSignals[15]);
        let aluSourceMuxOutput = this.aluResultMux.getOutput();

        // Update the final mux
        this.regWritebackMux.setSource(0, aluSourceMuxOutput);
        this.regWritebackMux.setSource(1, this.dMem.getRegister(aluSourceMuxOutput.substring(0,4))); // TODO, I think that source is right...
        let writebackResult = this.regWritebackMux.getOutput();

        // Update registers
        this.registers.setWriteEnable(controlSignals[10]);
        this.registers.setRegister(this.control.getControl('C8C9'), writebackResult);

        // Update pc
        this.pc.process(this.iMem.getRegister(pc), controlSignals[2]);
    }
};