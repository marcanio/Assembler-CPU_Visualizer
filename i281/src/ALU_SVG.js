import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";

const TPOS = [90, 150];

const FLAGS_DIST_BETWEEN = 30;
const BOX = [0, 0, 120, 0, 120, 40, 0, 40];
const BOX_OFFSET = [Constants.FLAGS_OFFSET[0] + Constants.FLAG_VPOS[0] + 15, Constants.FLAGS_OFFSET[1] + Constants.FLAG_VPOS[1] - 28];
export default class ALU_SVG {
	constructor() {
        this.alu = new PolygonSVG(Constants.ALU_ID, Constants.ALU_POLYGON, Constants.BLOCK_STYLE, Constants.ALU_OFFSET);
		this.text = new TextSVG(TPOS[0], TPOS[1], "ALUTextid", "ALU", Constants.TEXT_STYLE, Constants.ALU_OFFSET);
	}
    
	get_all_nodes() {
		let res = [];
		res.push(this.alu.get_node());
		res.push(this.text.get_node());
		return res;
	}
    

}