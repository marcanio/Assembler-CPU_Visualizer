/**
 * This class simulates the control module.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class control {
    constructor() {
        this.outputs = new Array(18);
    }
    

    /**
     * This function returns the control bits
     * @since 1.0
     * @returns: the control bits
     * @author Bryce Snell
     * 
    */
    getControl() {
        return this.outputs;
    }


    /**
     * This function sets the state of a multiplexer
     * @param state: integer for the state
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setControl(decodedOpCode) {
        // TODO when given the opcode to control logic, put that here
        
        // TODO update the control bits
    }
};