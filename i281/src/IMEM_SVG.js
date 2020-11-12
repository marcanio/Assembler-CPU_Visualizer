import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import * as Inst from "./instructions.js"


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

		for(var i=0; i<Inst.instructions.length; i++){
			var cur = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * (i+1)), "imem_addr"+i, "0000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET)
			addr.push(cur)
		}

		for(var i=0; i<Inst.instructions.length; i++){
			var cur = new PolygonSVG("imem_box"+i, [...Constants.IMEM_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0]-20, BOX_OFFSET[1] + (BETWEEN_DIST * (i+1))])
			box.push(cur)
		}
		
		for(var i=0; i<Inst.instructions.length; i++){
			var cur = new TextSVG(220, (BETWEEN_DIST * (i+1)), "imem_val"+i, Inst.instructions[i], Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
			mem.push(cur)
		}
	}
    
	get_all_nodes() {
		let res=[]
		res.push(this.imem.get_node());

		for(var i=0; i<addr.length; i++){
			res.push(addr[i].get_node());
			console.log(addr[i].get_node())
		}

		for(var i=0; i<box.length; i++){
			res.push(box[i].get_node())
		}

		for(var i=0; i<mem.length; i++){
			res.push(mem[i].get_node())
		}
		return res;
	}

}