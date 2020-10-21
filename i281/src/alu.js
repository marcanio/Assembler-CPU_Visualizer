/**
 * This funtion simulates the alu.
 * @param operand_a: integer operand
 * @param operand_b: integer operand
 * @param opcode: string opcode
 * @param flags: array of status bits
 * @since 1.0
 * @returns the resulting computation
 * @author Colby McKinley
 * 
*/

// TODO, problably needs a rewrite to make it like a class. And add more function
export function Alu(operand_a, operand_b, opcode, flags)
{
	let result = 0;
	if(!flags)
		flags = [];
	switch(opcode)
	{
	case "ADD":
		result = operand_a + operand_b;            
		break;
	case "SUB":
		result = operand_a - operand_b;
		break;
	case "SLT":
		result = operand_a < operand_b;
		break;
	case "OR":
		result = operand_a | operand_b;
		break;
	case "AND":
		result = operand_a & operand_b;
		break;
	case "NOR":
		result = ~(operand_a & operand_b);
		break;
	default:
		break;
	}
	flags[0] = result === 0;
	return result;
}

