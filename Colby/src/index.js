console.log("Hello World");

function alu(operand_a, operand_b, opcode)
{
    let result = 0;
    switch(opcode)
    {
        case "ADD":
            result = operand_a + operand_b;
            break;
        case "SUB":
            result = operand_a + operand_b;
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
    return result;
};

function compute() {
    const inst = document.getElementById("instruction").value;
    console.log(inst);
    let parse_val = inst.split(' ');
    let result = alu(parseInt(parse_val[1]),parseInt(parse_val[2]),parse_val[0]);
    console.log(result);
    document.getElementById("result").innerText = result +"";
};