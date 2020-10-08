/**
 * This class simulates the op code decoder.
 * @since 1.0
 * @author Bryce Snell
 * 
*/
import {decoder} from "./decoder.js"

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
     * @param opCode: 0xXXXX op code for for an instruction
     * @returns: the control bits
     * @author Bryce Snell
     * 
    */
    getDecodedOpCode(opCode) {
        hexValues = [];
        len = 4;

        for(var i = 0; i < len; i += 1) {
            hexValues.push(+opCode.charAt(i));
        }
        
        decode0 = new decoder(16);  // 4 to 16 decoder
        
        decode0.setControl(hexValues[0])
        decode0Value = decode0.getOutput();

        if (decode0Value != 1 && decode0Value != 12 && decode0Value != 15) {
            for(i=0; i<26; i++) {
                if (i == decode0Value) {
                    this.output[i] = 1;
                }
                
                else {
                    this.output[i] = 0;
                }
            }
        }

        else if (decode0Value == 1) {
            decode1 = new decoder(4);

        }


            // if needed use another decoder

        // handle ry and rx
    }

    /**
     * Converts hex value to binary array
     * @param value: Single hex value 0xX
     * @param return: Array with binary representation
     * @author Bryce Snell
     */
    parseHex(value) {
        if (value == 0x0) return new Array() = [0,0,0,0];
        if (value == 0x1) return new Array() = [0,0,0,1];
        if (value == 0x2) return new Array() = [0,0,1,0];
        if (value == 0x3) return new Array() = [0,0,1,1];
        if (value == 0x4) return new Array() = [0,1,0,0];
        if (value == 0x5) return new Array() = [0,1,0,1];
        if (value == 0x6) return new Array() = [0,1,1,0];
        if (value == 0x7) return new Array() = [0,1,1,1];
        if (value == 0x8) return new Array() = [1,0,0,0];
        if (value == 0x9) return new Array() = [1,0,0,1];
        if (value == 0xA) return new Array() = [1,0,1,0];
        if (value == 0xB) return new Array() = [1,0,1,1];
        if (value == 0xC) return new Array() = [1,1,0,0];
        if (value == 0xD) return new Array() = [1,1,0,1];
        if (value == 0xE) return new Array() = [1,1,1,0];
        if (value == 0xF) return new Array() = [1,1,1,1];
    }


    /**
     * 
     * @param value: Hex value to shorten
     * @param size: Final size (in bits)
     * @return: hex value
     */
    hexReduce(value, size) {
        binArray = this.parseHex(value);
        
        firstBitsZeroed = new Array();

        for(i=0; i<size; i++) {
            firstBitsZeroed.push(binArray[i]);
        }

        this.binFillZero(firstBitsZeroed, 4);

        
    }

    binFillZero(binaryArray, finalSize) {
        curSize = binaryArray.size()
        newBinary = new Array(finalSize);

        for(i=0; i < finalSize - curSize; i++) {
            newBinary.push(0);    
        } 

        for(i=0; i < curSize; i++) {
            newBinary.push(binaryArray[i]);
        }

        return newBinary;
    }
};