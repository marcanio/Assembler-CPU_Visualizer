/**
 * This class simulates a single cycle cpu.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

import {RegisterFile} from "./registerFile.js"
import {Multiplexer} from "./mux.js"
import {alu} from "./alu.js"
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
        
    }



    /**
     * This function simulates the processor running for one cycle
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    singleCycle() {
        let opcode = this.iMem.getRegister(0);

        let decodedOpcode = this.ocd.getDecodedOpCode(opcode);

        // TODO make sure this works
        let zeroFlag = this.flags.getRegister(0).charAt(0);
        let negativeFlag = this.flags.getRegister(0).charAt(2);
        let overflowFlag = this.flags.getRegister(0).charAt(3); 

        // Process the control signals
        let controlSignals = this.control.setControl(decodedOpcode, zeroFlag, negativeFlag, overflowFlag);

        // Create these muxes
        let regMux0 = new Multiplexer(4);
        let regMux1 = new Multiplexer(4);
        
        // Set them in the right state
        regMux0.setState(this.control.get('c4c5'));
        regMux1.setState(this.control.get('c6c7'));

        // Update all of the values
        for(let i=0; i<regMux0.size; i++) {
            regMux0.setSource(i, this.registers.getRegister(i));
            regMux1.setSource(i, this.registers.getRegister(i));
        }

    }
};