/**
 * this.c =lass simulates the control module.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class Control {
    constructor() {
        /**
         * Things to know about this array. It comes from slide 47 in 41_i281_CPU.ppt.
         * C[0] is always null, because Stoytchev didn't start at 0...
         * C[1] maps to IMEM_WRITE_ENABLE
         * C[18] maps to REG_WRITEBACK_MUX
         * Sorry for the confusion...
         */
        this.c = new Array(19);
    }
    

    /**
     * This function returns the control bits
     * @since 1.0
     * @returns: the control bits
     * @author Bryce Snell
     * 
    */
    getControl() {
        return this.c;
    }


    /**
     * This function creates the control output bits
     * @param decodedOpCode: output from opCodeDecoder (literally opCodeDecoder.output)
     * @param zeroFlag: Either a 1 or 0, integer
     * @param negativeFlag: Either a 1 or 0, integer
     * @param overflowFlag: Either a 1 or 0, integer
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setControl(decodedOpCode, zeroFlag, negativeFlag, overflowFlag) {
        // TODO Check that x0, x1, y0, y1 are in the right order..., updated note, I think they are.
        let x0 = parseInt(decodedOpCode.charAt(24));
        let x1 = parseInt(decodedOpCode.charAt(23));
        let y0 = parseInt(decodedOpCode.charAt(26));
        let y1 = parseInt(decodedOpCode.charAt(25));

        // TODO figure out what these signals should be
        let b1 = zeroFlag;
        let b2 = (zeroFlag===1) ? 0 : 1;  // This is the ugliest negation I have ever used.
        let b4 = (negativeFlag===overflowFlag) ? 1 : 0; // I know this is out of order, but it made the calculations less redundant and easier.
        let b3 = (b2 & b4) ? 1 : 0;  // Very ugly as well.
        
        
        // This part sets the output. Note, if the input is not one hot encoded this will break.
        if(decodedOpCode.charAt(0) == 1) this.c = [null, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(1) == 1) this.c = [null, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
        if(decodedOpCode.charAt(2) == 1) this.c = [null, 1, 0, 1, x1, x0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(3) == 1) this.c = [null, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0];
        if(decodedOpCode.charAt(4) == 1) this.c = [null, 0, 0, 1, x1, x0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0];
        if(decodedOpCode.charAt(5) == 1) this.c = [null, 0, 0, 1, y1, y0, 0, 0, x1, x0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(6) == 1) this.c = [null, 0, 0, 1, 0, 0, 0, 0, x1, x0, 1, 0, 0, 0, 0, 1, 0, 0, 0];
        if(decodedOpCode.charAt(7) == 1) this.c = [null, 0, 0, 1, x1, x0, y1, y0, x1, x0, 1, 0, 1, 0, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(8) == 1) this.c = [null, 0, 0, 1, x1, x0, 0, 0, x1, x0, 1, 1, 1, 0, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(9) == 1) this.c = [null, 0, 0, 1, x1, x0, y1, y0, x1, x0, 1, 0, 1, 1, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(10) == 1) this.c = [null, 0, 0, 1, x1, x0, 0, 0, x1, x0, 1, 1, 1, 1, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(11) == 1) this.c = [null, 0, 0, 1, 0, 0, 0, 0, x1, x0, 1, 0, 0, 0, 0, 1, 0, 0, 1];
        if(decodedOpCode.charAt(12) == 1) this.c = [null, 0, 0, 1, y1, y0, 0, 0, x1, x0, 1, 1, 1, 0, 0, 0, 0, 0, 1];
        if(decodedOpCode.charAt(13) == 1) this.c = [null, 0, 0, 1, 0, 0, x1, x0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0];
        if(decodedOpCode.charAt(14) == 1) this.c = [null, 0, 0, 1, y1, y0, x1, x0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0];
        if(decodedOpCode.charAt(15) == 1) this.c = [null, 0, 0, 1, x1, x0, 0, 0, x1, x0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(16) == 1) this.c = [null, 0, 0, 1, x1, x0, 0, 0, x1, x0, 1, 0, 0, 1, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(17) == 1) this.c = [null, 0, 0, 1, x1, x0, y1, y0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0];
        if(decodedOpCode.charAt(18) == 1) this.c = [null, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(19) == 1) this.c = [null, 0, b1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(20) == 1) this.c = [null, 0, b2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(21) == 1) this.c = [null, 0, b3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(decodedOpCode.charAt(22) == 1) this.c = [null, 0, b4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    }

    /**
     * A little helper function for padding strings.
     * @param: input - input string to pad
     * @param: size - Size to pad it to.
     */
    pad(input, size) {
        while (input.length < (size || 2)) {input= '0' + input;}
        return input;
    }

    get(target) {
        if(target == 'c4c5') return (String(this.c[4]) + String(this.c[5]));
        if(target == 'c6c7') return (String(this.c[6]) + String(this.c[7]));
        if(target == 'c8c9') return (String(this.c[8]) + String(this.c[9]));
        if(target == 'c12c13') return (String(this.c[12]) + String(this.c[13]));
        else throw new Error("Invalid target: %s", target);
    }
};