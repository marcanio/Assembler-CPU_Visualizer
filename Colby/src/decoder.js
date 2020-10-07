/**
 * This class simulates a decoder.
 * @param size: Sets the size of a decoder, must be power of 2
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class decoder {
    constructor(outputSize) {
        
        if(this.powerOfTwo(outputSize) == true) this.controlSize = sqrt(size);
        else throw 'Decoder size is not a power of two';

        this.control = new Array(this.controlSize);
        this.outputs = new Array(this.outputSize);
    }
    

    /**
     * This function returns the outputs
     * @since 1.0
     * @returns: the current output values
     * @author Bryce Snell
     * 
    */
    getOutput() {
        return this.outputs;
    }


    /**
     * This function sets the control of the output
     * @param control: 0xX...X where the size is within the limits
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setControl(control) {
        if(0 <= control && control <= (this.controlSize - 1)) {

            targetState = parseInt(control, 16);

            for(i=0; i < this.outputSize; i++) {

                if(i == targetState) {
                    this.outputs[i] = 1;
                }

                else {
                    this.outputs[i] = 0;
                }
            }
        }

        else throw 'Invalid decoder control: ' + state;
    }

    /**
     * This helper function checks if a number is a power of two
     * @param n: A number to check
     * @returns: True if power of two, false otherwise
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    powerOfTwo(n) {
        return n && (n & (n-1)) === 0;
    }
};