/**
 * This class simulates the op code decoder.
 * @since 1.0
 * @author Bryce Snell
 * 
*/
import {Decoder} from "./decoder.js"

export class OpCodeDecoder {
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
        this.rx = 0;
        this.ry = 0;
        this.output = '';
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
        let binaryStr = parseInt(opCode, 16).toString(2);
        
        this.resetOutputs(); // TODO if we can remove by updating values in real time please do.

        let decode0Control = ((opCode & 0xF000)>>>12).toString(16);
        let decode1Control = ((opCode & 0x0300)>>>8).toString(16);
        let decode2Control = ((opCode & 0x0100)>>>8).toString(16);

        let decode0 = new Decoder(16);
        decode0.setControl(decode0Control);

        if(decode0.getOutputAtLocation(1) == 1) {
            let decode1 = new Decoder(4);
            decode1.setControl(decode1Control);

            // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
            if (decode1.getOutputAtLocation(0) == 1) this.inputc = 1;
            if (decode1.getOutputAtLocation(1) == 1) this.inputcf = 1;
            if (decode1.getOutputAtLocation(2) == 1) this.inputd = 1;
            if (decode1.getOutputAtLocation(3) == 1) this.inputdf = 1;
        }

        else if(decode0.getOutputAtLocation(12) == 1)
        {
            let decode2 = new Decoder(2);
            decode2.setControl(decode2Control);

            // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
            if (decode2.getOutputAtLocation(0) == 1) this.shiftl = 1;
            if (decode2.getOutputAtLocation(1) == 1) this.shiftr = 1;
        }

        else if(decode0.getOutputAtLocation(15) == 1)
        {
            let decode3 = new Decoder(4);
            decode3.setControl(decode1Control);

            // TODO: There is some value format that could make this a pretty array, but alas we don't have the hardware of that...
            if (decode3.getOutputAtLocation(0) == 1) this.bre = 1;
            if (decode3.getOutputAtLocation(1) == 1) this.brne = 1;
            if (decode3.getOutputAtLocation(2) == 1) this.brg = 1;
            if (decode3.getOutputAtLocation(3) == 1) this.brge = 1;
        }

        else {
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

        this.rx = ((opCode & 0x0C00)>>>8).toString(16);
        this.ry = ((opCode & 0x0300)>>>8).toString(16);
        this.package();

        return this.output;
    }
    

    /**
     * This function takes all of the control bits and makes them a string
     * Helper function for getDecodedOpCode
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    package() {
        let rxString = this.rx.toString(2);
        rxString = '00'.substr(rxString.length) + rxString;
        let ryString = this.rx.toString(2);
        ryString = '00'.substr(ryString.length) + ryString;
        
        this.output = 
            this.noop.toString() +
            this.move.toString() +
            this.loadi.toString() +
            this.add.toString() +
            this.addi.toString() +
            this.sub.toString() +
            this.subi.toString() +
            this.load.toString() +
            this.loadf.toString() +
            this.store.toString() +
            this.storef.toString() +
            this.cmp.toString() +
            this.jump.toString() +
            this.inputc.toString() +
            this.inputcf.toString() +
            this.inputd.toString() +
            this.inputdf.toString() +
            this.shiftl.toString() +
            this.shiftr.toString() +
            this.bre.toString() +
            this.brne.toString() +
            this.brg.toString() +
            this.brge.toString() + 
            rxString +
            ryString;
    }

    /**
     * This function resets the control outputs
     * DO NOT CALL EXTERNALLY
     * @since 1.0
     * @author Bryce Snell
     * 
    */
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
        this.rx = 0;
        this.ry = 0;
    }
};