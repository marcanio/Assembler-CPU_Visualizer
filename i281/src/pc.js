/**
 * This class simulates an arithmetic logic cunit.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class PC {
    constructor() {
        this.currentPC = '000000';
        this.step = '000001';
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
     * @param: callback - callback function to get the lower 6 bits from the instruction memory
     * @param: branchControl - binary integer for branch control signal
     * @since: 1.0
     * @author Bryce Snell
     */
    process(callback, branchControl) {
        let instruction = callback();  // This will get the lower 6 bits from the instruction memory, control is a string
        let pcLength = this.currentPC.length();

		// No branch
		if(branchControl == 0) {
			
			let tempResult = new Array(8);  // This will hold the result
			let carryArray = new Array(9);  // This will hold the carry results

			carryArray[0] = 0;  // Initialize the first bit to 0

			// Bit based add (I'm so sorry we have to do it this way)
			for(i=0; i<pcLength; i++) {
				let a = parseInt(this.currentPC[i], 2);
				let b = parseInt(this.step[i], 2);
				

				let sum = a+b+carryArray[i];
				if (sum == 0) {
					tempResult[i] = 0;
				}

				else if (sum == 1) {
					tempResult[i] = 1;
				}

				else if (sum == 2) {
					tempResult[i] = 0;
				}

				else if (sum == 3) {
					tempResult[i] = 1;
				}

				else throw new Error('The adder had a massive mistake: ' + sum);
			}


			this.currentPC = tempResult.toString(2);
        }
        
        // Branch
		else if(branchControl == 1) {
			
			let tempResult = new Array(8);  // This will hold the result
			let carryArray = new Array(9);  // This will hold the carry results

			carryArray[0] = 0;  // Initialize the first bit to 0

			// Bit based add (I'm so sorry we have to do it this way)
			for(i=0; i<pcLength; i++) {
				let a = parseInt(this.currentPC[i], 2);
				let b = parseInt(this.instruction[i], 2);
				

				let sum = a+b+carryArray[i];
				if (sum == 0) {
					tempResult[i] = 0;
				}

				else if (sum == 1) {
					tempResult[i] = 1;
				}

				else if (sum == 2) {
					tempResult[i] = 0;
				}

				else if (sum == 3) {
					tempResult[i] = 1;
				}

				else throw new Error('The pc had a massive mistake: ' + sum);
			}

			this.currentPC = tempResult.toString(2);
		}

		else throw new Error('Unknown control state for alu: ' + control);
    }
};