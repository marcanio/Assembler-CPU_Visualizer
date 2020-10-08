/**
 * This class simulates the op code decoder.
 * @since 1.0
 * @author Bryce Snell
 * 
*/
import {decoder} from "./decoder.js"
import {hexToBinary} from "./hexToBinary";
import {binToHex} from "./hexToBinary";

export class opCodeDecoder {
    constructor() {
        this.noop = 0;
        this.move = 0;
        this.loadi = 0;
        this.add = 0;
        this.addi = 0;
        this.sub = 0;
        this.subi = 0;
        this.load = 0;
        this.loadf = 0;
        this.store = 0;
        this.storef = 0;
        this.cmp = 0;
        this.jump = 0;
        this.inputc = 0;
        this.inputcf = 0;
        this.inputd = 0;
        this.inputdf = 0;
        this.shiftl = 0;
        this.shiftr = 0;
        this.bre = 0;
        this.brne = 0;
        this.brg = 0;
        this.brge = 0;
        this.ry = 0;
        this.rx = 0;
        this.output = new Array(27);  // These are in order of those above, probably just use this
    }
    

    /**
     * This function returns the control bits
     * @since 1.0
     * @param opCode: XXXX op code for for an instruction
     * @returns: the control bits
     * @author Bryce Snell
     * 
    */
    getDecodedOpCode(opCode) {
        binaryStr = hexToBinary(opCode);
        
        this.resetOutputs(); // TODO if we can remove by updating values in real time please do.

        decode0Control = [binaryStr.charAt[15], binaryStr.charAt[14], binaryStr.charAt[13], binaryStr.charAt[12]].join('');
        decode1Control = [binaryStr.charAt[9], binaryStr[8]].join('');

        let decode0 = new decoder(16);
        decode0.setControl(decode0Control);

        if(decode0.getOutputAtLocation(1) == 1) {
            let decode1 = new decoder(4);
            decode1.setControl(decode1Control);

            for(i=0; i < decode1.outputSize; i++) {
                // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
                if (decode1.getOutputAtLocation(0) == 1) this.inputc = 1;
                if (decode1.getOutputAtLocation(1) == 1) this.inputcf = 1;
                if (decode1.getOutputAtLocation(2) == 1) this.inputd = 1;
                if (decode1.getOutputAtLocation(3) == 1) this.inputdf = 1;
            }
        }

        else if(decode0.getOutputAtLocation(12) == 1)
        {
            let decode2 = new decoder(2);
            decode2.setControl(binaryStr[8]);

            for(i=0; i < decode2.outputSize; i++) {
                // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
                if (decode2.getOutputAtLocation(0) == 1) this.shiftl = 1;
                if (decode2.getOutputAtLocation(1) == 1) this.shiftr = 1;
            }
        }

        else if(decode0.getOutputAtLocation(15) == 1)
        {
            let decode3 = new decoder(4);
            decode1.setControl(decode1Control);

            for(i=0; i < decode3.outputSize; i++) {
                // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
                if (decode3.getOutputAtLocation(0) == 1) this.bre = 1;
                if (decode3.getOutputAtLocation(1) == 1) this.brne = 1;
                if (decode3.getOutputAtLocation(2) == 1) this.brg = 1;
                if (decode3.getOutputAtLocation(3) == 1) this.brge = 1;
            }
        }

        else {
            for(i=0; i < decode0.outputSize; i++) {
                // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
                if (decode0.getOutputAtLocation(0) == 1) this.noop = 1;
                if (decode0.getOutputAtLocation(2) == 1) this.move = 1;
                if (decode0.getOutputAtLocation(3) == 1) this.loadi = 1;
                if (decode0.getOutputAtLocation(4) == 1) this.add = 1;
                if (decode0.getOutputAtLocation(5) == 1) this.addi = 1;
                if (decode0.getOutputAtLocation(6) == 1) this.sub = 1;
                if (decode0.getOutputAtLocation(7) == 1) this.subi = 1;
                if (decode0.getOutputAtLocation(8) == 1) this.load = 1;
                if (decode0.getOutputAtLocation(9) == 1) this.loadf = 1;
                if (decode0.getOutputAtLocation(10) == 1) this.store = 1;
                if (decode0.getOutputAtLocation(11) == 1) this.storef = 1;
                if (decode0.getOutputAtLocation(13) == 1) this.cmp = 1;
                if (decode0.getOutputAtLocation(14) == 1) this.jump = 1;
            }
        }

        this.rx = [binaryStr.charAt(11), binaryStr.charAt(10)].join('');
        this.ry = [binaryStr.charAt(9), binaryStr.charAt(8)].join('');
    }

    resetOutputs() {
        this.noop = 0;
        this.move = 0;
        this.loadi = 0;
        this.add = 0;
        this.addi = 0;
        this.sub = 0;
        this.subi = 0;
        this.load = 0;
        this.loadf = 0;
        this.store = 0;
        this.storef = 0;
        this.cmp = 0;
        this.jump = 0;
        this.inputc = 0;
        this.inputcf = 0;
        this.inputd = 0;
        this.inputdf = 0;
        this.shiftl = 0;
        this.shiftr = 0;
        this.bre = 0;
        this.brne = 0;
        this.brg = 0;
        this.brge = 0;
        this.ry = 0;
        this.rx = 0;
    }
};