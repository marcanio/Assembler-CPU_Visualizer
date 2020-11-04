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

export class cpu {
    constructor() {
        // The constructor will create a processor object with all needed subcomponents

        this.iMem = new RegisterFile(16, 16);  // Unsure on size
        this.ocd = new OpCodeDecoder();
        this.control = new Control();
        this.registers = new RegisterFile(8, 4);
        this.dMem = new RegisterFile(8, 8);  // Unsure if this is the total size
        this.flags = new RegisterFile(4, 1);

        this.regMux0 = new Multiplexer(4);
        this.regMux1 = new Multiplexer(4);
        
    }

    setup() {
        // Setup the registers' mux sources

        for(var i=0; i < 4; i++) {
            this.regMux0.setSource(i, this.registers.getRegister(i))
            this.regMux1.setSource(i, this.registers.getRegister(i))
        }
        
    }

    /**
     * This function simulates the processor running for one cycle
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    singleCycle() {
        let opcode = this.iMem.getRegister(0);  // TODO this might need to not be zero later...

        let decodedOpcode = this.ocd.getDecodedOpCode(opcode);

        // TODO make sure this works
        let zeroFlag = this.flags.getRegister(0).charAt(0);
        let negativeFlag = this.flags.getRegister(0).charAt(2);
        let overflowFlag = this.flags.getRegister(0).charAt(3); 

        // Process the control signals
        let controlSignals = this.control.setControl(decodedOpcode, zeroFlag, negativeFlag, overflowFlag);
        
        // Set them in the right state
        regMux0.setState(this.control.get('c4c5'));
        regMux1.setState(this.control.get('c6c7'));

        let aluMux = new Multiplexer(2);
        aluMux.setState(controlSignals[11]);

        // Update the mux for the alu
        aluMux.setSource(0, this.regMux1.getOutput);
        aluMux.setSource(1, opcode.substring(0,8)); // TODO. This will be a massive headache. What endian are we using? This should be right.




    }
};