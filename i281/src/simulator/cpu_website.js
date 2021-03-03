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

cpu.iMem.registers = JSON.parse(sessionStorage.getItem("savedMachineCode"));  // This right here loads in the assembler instructions

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



