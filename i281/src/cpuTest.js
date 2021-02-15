import {CPU} from "./cpu.js"
import {performance} from "perf_hooks"

let cpu = new CPU();
cpu.setup();

cpu.iMem.setWriteEnable(1);
cpu.iMem.setRegister(0, '0011000000000001');  // LOADI A, 1
//cpu.iMem.setRegister(0, '1000000000001100');  // LOADI A, 1 (but backwards)
cpu.iMem.setWriteEnable(0);

cpu.singleCycle();
let regResult = cpu.registers.getRegister(0);
console.log(regResult);