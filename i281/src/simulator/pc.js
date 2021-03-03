/**
 * This class simulates an arithmetic logic cunit.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class PC {
    constructor(maxPC) {
        this.currentPC = 0;
		this.step = 1;
		this.maxPC = maxPC;
    }
	

	/**
	 * This function can be used as a callback to get the PC dynamically.
	 * @since 1.0
	 * @author Bryce Snell
	 */
	getPC() {
		return this.currentPC;
	}

    /**
     * This function calculates the PC
     * @param: opcode - 16 bits from the instruction memory
     * @param: branchControl - binary integer for branch control signal
     * @since: 1.0
     * @author Bryce Snell
     */
    process(opcode, branchControl) {
        let offset = opcode.substring(10,16); // get the lower 6 bits
		offset = offset.padStart(32, offset[0]);
		this.currentPC += this.step;

		// Add branch offset
		if(branchControl == 1) {
			let offsetInt = ~~parseInt(offset, 2);
			this.currentPC += offsetInt;
		}

		if(this.currentPC > this.maxPC - 1) {
			this.currentPC = 0;
		}
    }
};