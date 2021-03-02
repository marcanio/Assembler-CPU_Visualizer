import {CPU} from "./cpu.js"
//import {performance} from "perf_hooks"

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function createData(registers) {
    var returnData = new Array(registers.length);
    for(let i=0; i<registers.length; i++) {
        returnData[i] = {
            reg: i,
            value: registers[i]
        };
    }
    return returnData;
}

let cpu = new CPU();

window.cpu = cpu;

cpu.setup();

cpu.iMem.setWriteEnable(1);
cpu.iMem.setRegister(0, '0011000000000000');  // LOADI  A, 0
cpu.iMem.setRegister(1, '1010000000000101');  // STORE  [i], A
cpu.iMem.setRegister(2, '1000110000000100');  // LOAD   D, [last]
cpu.iMem.setRegister(3, '1101001100000000');  // CMP    A, D 
cpu.iMem.setRegister(4, '1111001100010100');  // BRGE   End
cpu.iMem.setRegister(5, '0010100000000000');  // MOVE   C, A
cpu.iMem.setRegister(6, '0010010000000000');  // MOVE   B, A
cpu.iMem.setRegister(7, '0101010000000001');  // ADDI   B, 1
cpu.iMem.setRegister(8, '1000110000000100');  // LOAD   D, [last]
cpu.iMem.setRegister(9, '1101011100000000');  // CMP    B, D
cpu.iMem.setRegister(10, '1111001000000111');  // BRG    Swap
cpu.iMem.setRegister(11, '1001000100000000');  // LOADF  A, [array + B]
cpu.iMem.setRegister(12, '1001111000000000');  // LOADF  D, [array + C]
cpu.iMem.setRegister(13, '1101110000000000');  // CMP    D, A
cpu.iMem.setRegister(14, '1111001100000001');  // BRGE   Jinc
cpu.iMem.setRegister(15, '0010100100000000');  // MOVE   C, B
cpu.iMem.setRegister(16, '0101010000000001');  // ADDI   B, 1
cpu.iMem.setRegister(17, '1110000011110110');  // JUMP   Inner
cpu.iMem.setRegister(18, '1000000000000101');  // LOAD   A, [i]
cpu.iMem.setRegister(19, '1001010000000000');  // LOADF  B, [array + A]
cpu.iMem.setRegister(20, '1001111000000000');  // LOADF  D, [array + C]
cpu.iMem.setRegister(21, '1011110000000000');  // STOREF [array + A], D
cpu.iMem.setRegister(22, '1011011000000000');  // STOREF [array + C], B
cpu.iMem.setRegister(23, '0101000000000001');  // ADDI   A, 1
cpu.iMem.setRegister(24, '1110000011101000');  // JUMP   Outer
cpu.iMem.setRegister(25, '0000000000000000');  // NOOP
cpu.iMem.setWriteEnable(0);

// Initialize dmem
cpu.dMem.setWriteEnable(1);
cpu.dMem.setRegister(0, '00000010');  // Array
cpu.dMem.setRegister(1, '00000011');
cpu.dMem.setRegister(2, '00000100');
cpu.dMem.setRegister(3, '00000001');
cpu.dMem.setRegister(4, '00000011');  // last
cpu.dMem.setWriteEnable(0);

let numCycles = 119;

let iMem_table = null;
let register_table = null;
let dMem_table = null;

let iMem = createData(cpu.iMem.registers);
let registers = createData(cpu.registers.registers);
let dMem = createData(cpu.dMem.registers);

let iMem_data = Object.keys(iMem[0]);
let register_data = Object.keys(registers[0]);
let dMem_data = Object.keys(dMem[0]);

document.getElementById('nextCycle').onclick = nextCycle;
document.getElementById("pc").innerHTML = "pc = " + cpu.pc.currentPC;

function nextCycle() {
    cpu.singleCycle();
    document.getElementById("pc").innerHTML = "pc = " + cpu.pc.currentPC;
    iMem = createData(cpu.iMem.registers);
    iMem_table = document.getElementById("iMem");
    iMem_table.innerHTML = "";
    generateTableHead(iMem_table, iMem_data);
    generateTable(iMem_table, iMem);

    registers = createData(cpu.registers.registers);
    register_table = document.getElementById("registers");
    register_table.innerHTML = "";
    generateTableHead(register_table, register_data);
    generateTable(register_table, registers);

    dMem = createData(cpu.dMem.registers);
    dMem_table = document.getElementById("dMem");
    dMem_table.innerHTML = "";
    generateTableHead(dMem_table, dMem_data);
    generateTable(dMem_table, dMem);
}



