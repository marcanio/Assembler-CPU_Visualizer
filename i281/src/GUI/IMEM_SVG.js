import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import * as Inst from "./instructions.js";
import {CPU} from "../simulator/cpu.js";

const ADDR = [50, 0];
const VAL = [350/2, -24];

let addr = []
let box = []
let mem = [];



const BOX_OFFSET = [Constants.CODE_MEM_OFFSET[0] + VAL[0] - 60, Constants.CODE_MEM_OFFSET[1] + VAL[1]];
const BETWEEN_DIST = 38;

export default class IMEM_SVG {
	constructor() {
		this.imem = new PolygonSVG(Constants.IMEM_ID, Constants.CODE_MEM_POLYGON, Constants.BLOCK_STYLE, Constants.CODE_MEM_OFFSET);

		var code = cpu.iMem.registers.slice(32, 64)

		for(var i=0; i<code.length; i++){
			var bios = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * (i+1)), "imem_addr"+(i), this.pad((i).toString(2), 6), Constants.BLUE_TEXT_STYLE, Constants.CODE_MEM_OFFSET)
			var user = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * (i+1)), "imem_addr"+(i+32), (i+32).toString(2), Constants.BLUE_TEXT_STYLE, Constants.CODE_MEM_OFFSET) 
			addr.push(bios)
			addr.push(user)
		}

		for(var i=0; i<code.length; i++){
			var cur = new PolygonSVG("imem_box"+i, [...Constants.IMEM_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0]-5, BOX_OFFSET[1] + (BETWEEN_DIST * (i+1))])
			box.push(cur)
		}
		
		for(var i=0; i<code.length; i++){
			var bios = new TextSVG(245, (BETWEEN_DIST * (i+1)), "imem_val"+(i), "0000000000000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
			var user = new TextSVG(245, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32), code[i], Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
			mem.push(bios);
			mem.push(user);
		}
		this.label = new TextSVG(280, 1390, "imem_label", "INSTRUCTION MEMORY", Constants.ARIAL_TEXT_STYLE);
	}

    pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	  }

	get_all_nodes() {
		let res=[]
		res.push(this.imem.get_node());

		for(var i=0; i<addr.length; i++){
			res.push(addr[i].get_node());
			//console.log(addr[i].get_node())
		}

		for(var i=0; i<box.length; i++){
			res.push(box[i].get_node())
		}

		for(var i=0; i<mem.length; i++){
			res.push(mem[i].get_node())
		}
		res.push(this.label.get_node());
		return res;
	}
	switchToUser(){
		for(var i=0; i<32; i++){
			document.getElementById("imem_val"+i).style.visibility = "hidden";
			document.getElementById("imem_val"+(i+32)).style.visibility = "visible";
			document.getElementById("imem_addr"+(i)).style.visibility = "hidden";
			document.getElementById("imem_addr"+(i+32)).style.visibility = "visible";
		}

	}
	switchToBios(){
		for(var i=0; i<32; i++){
			console.log("imem_val"+i)
			document.getElementById("imem_val"+i).style.visibility = "visible";
			document.getElementById("imem_val"+(i+32)).style.visibility = "hidden";
			document.getElementById("imem_addr"+(i)).style.visibility = "visible";
			document.getElementById("imem_addr"+(i+32)).style.visibility = "hidden";
		}
	}

}