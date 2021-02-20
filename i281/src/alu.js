/**
 * This class simulates an arithmetic logic cunit.
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class Alu {
    constructor() {
		this.opA;
		this.opB;
		this.controlCallback;
		this.controlCBParams;
		this.result;
		this.zero = 0;
		this.negative = 0;
		this.overflow = 0;
		this.carry = 0;
		
    }
    

    /**
     * This function sets the operands
     * @since 1.0
	 * @param A: 8 bit operand
	 * @param B: 8 bit operand
     * @returns: the current state of the register
     * @author Bryce Snell
     * 
    */
    setOps(A, B) {
		this.opA = A;
		this.opB = B;
	}


    /**
     * This function adds a callback function and parameters to get the control values
     * @param callback: function to get control values
	 * @param params: string (in the i281 processor there is only one)
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setControl(callback, params) {
		this.controlCallback = callback;
		this.controlCBParams = params;
	}
	

	/**
	 * This function can be used as a callback to get the result dynamically.
	 * @since 1.0
	 * @author Bryce Snell
	 */
	getResult() {
		return this.pad(this.result.toString(2), 8);
	}

    /**
     * This function gets the results of the processor
	 * @param: control - Control bits for cpu
     * @since: 1.0
     * @author Bryce Snell
     */
    process(control) {

		// Shift left
		if(control[0] == 0 && control[1] == 0) {
			this.result = this.opA.substring(1)+'0';
			this.carry = this.opA[0];
			this.overflow = 0;

			if(parseInt(this.result,2) == 0) {
				this.zero = 1;
			}
		}

		// Shift right
		else if(control[0] == 0 && control[1] == 1) {
			this.result = '0' + this.opA.substring(1,7);
			this.carry = this.opA[7];
			this.overflow = 0;

			if(parseInt(this.result,2) == 0) {
				this.zero = 1;
			}
		}

		// Add/sub
		else if(control[0] == 1) {
			
			let tempResult = new Array(8);  // This will hold the result
			let carryArray = new Array(9);  // This will hold the carry results

			carryArray[7] = parseInt(control[1], 2);  // This is the part that handles the add/sub difference

			// Bit based add (I'm so sorry we have to do it this way)
			for(let i=7; i>=0; i--) {
				let a = parseInt(this.opA[i], 2);
				let b = parseInt(this.opB[i], 2);
				

				let sum = a+(b^carryArray[7])+carryArray[i];
				if (sum == 0) {
					tempResult[i] = 0;
					carryArray[i-1] = 0;
				}

				else if (sum == 1) {
					tempResult[i] = 1;
					carryArray[i-1] = 0;
				}

				else if (sum == 2) {
					tempResult[i] = 0;
					carryArray[i-1] = 1;
				}

				else if (sum == 3) {
					tempResult[i] = 1;
					carryArray[i-1] = 1;
				}

				else throw new Error('The adder had a massive mistake: ' + sum);
			}

			this.result = tempResult.join("");

			// Calculate flags
			this.zero = !(tempResult[7] || tempResult[6] || tempResult[5] || tempResult[4] || tempResult[3] || tempResult[2] || tempResult[1] || tempResult[0]) ? 1 : 0;
			this.carry = carryArray[-1];
			this.overflow = carryArray[-1] ^ carryArray[0];
			this.negative = tempResult[0];
		}

		else throw new Error('Unknown control state for alu: ' + control);
	}
	
	/**
     * A little helper function for padding strings.
     * @param: input - input string to pad
     * @param: size - Size to pad it to.
     */
    pad(input, size) {
        while (input.length < size) {input= '0' + input;}
        return input;
    }
};