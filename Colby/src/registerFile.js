/**
 * This class simulates a register file.
 * @param width: number of bits for each row of the register file
 * @param row: number of rows in the register file
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class registerFile {
    constructor(width, rows) {
        this.width = width;
        this.rows = rows;
        this.registers = Array(rows);
    }

    getWidth() {
        return this.width;
    }

    getRows() {
        return this.rows;
    }

    /**
     * This function returns a value from a register
     * @param src: integer for the register target
     * @since 1.0
     * @returns: the value in the register at src
     * @author Bryce Snell
     * 
    */
    getRegister(src) {
        if (0 <= src && src <= this.rows) return this.registers[src];
        else throw 'Invalid src register';
    }

    /**
     * This function returns a value from a register
     * @param dest: integer for the register target
     * @param value: value to store in the register
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setRegister(dest, value) {
        if (0 <= dest && dest <= this.rows) this.registers[dest] = value;
        else throw 'Invaid dest register';
    }
};