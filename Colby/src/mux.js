/**
 * This class simulates a multiplexer.
 * @param size: Sets the size of a multiplexer, must be power of 2
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class multiplexer {
    constructor(size) {
        this.state = null;

        if(this.powerOfTwo(size) == true) this.size = size;
        else throw 'Multiplexer size is not a power of two';
    }
    

    /**
     * This function returns a value from a register
     * @since 1.0
     * @returns: the current state of the register
     * @author Bryce Snell
     * 
    */
    getState() {
        return this.state;
    }


    /**
     * This function sets the state of a multiplexer
     * @param state: integer for the state
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setState(state) {
        if(0 <= state && state <= (this.size - 1)) this.state = state;
        else throw 'Invalid multiplexer state: ' + state;
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