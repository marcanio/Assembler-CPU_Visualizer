import {alu} from "./alu.js";

export function compute() {
	const inst = document.getElementById("instruction").value;
	console.log(inst);
	let parse_val = inst.split(" ");
	let result =  alu(parseInt(parse_val[1]),parseInt(parse_val[2]),parse_val[0]);
	console.log(result);
	const disp_result = document.getElementById("result");
	disp_result.textContent(result);
}

