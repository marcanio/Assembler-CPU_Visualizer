import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import Mux4_1SVG from "./Mux4_1SVG.js";

const REG_TPOS = [70, 30];
const REG_A = [100, 500/5 * 1];
const REG_B = [100, 500/5 * 2];
const REG_C = [100, 500/5 * 3];
const REG_D = [100, 500/5 * 4];

const REG_A_BOX_OFFSET = [Constants.REGISTER_FILE_OFFSET[0] + REG_A[0] - 60, Constants.REGISTER_FILE_OFFSET[1] + REG_A[1] - 22];
const REG_B_BOX_OFFSET = [Constants.REGISTER_FILE_OFFSET[0] + REG_B[0] - 60, Constants.REGISTER_FILE_OFFSET[1] + REG_B[1] - 22];
const REG_C_BOX_OFFSET = [Constants.REGISTER_FILE_OFFSET[0] + REG_C[0] - 60, Constants.REGISTER_FILE_OFFSET[1] + REG_C[1] - 22];
const REG_D_BOX_OFFSET = [Constants.REGISTER_FILE_OFFSET[0] + REG_D[0] - 60, Constants.REGISTER_FILE_OFFSET[1] + REG_D[1] - 22];

export default class RegisterFileSVG {

	constructor() {
		this.reg_file = new PolygonSVG(Constants.REG_FILE_ID, Constants.REGISTER_FILE_POLYGON, Constants.BLOCK_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.register_text = new TextSVG(REG_TPOS[0], REG_TPOS[1], Constants.REG_TEXT_ID, Constants.REG_TEXT, Constants.COMPONENT_NAME_TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);

		this.reg_a_label = new TextSVG(REG_A[0] - 80, REG_A[1], Constants.REG_A_LABEL_ID, "A", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.reg_b_label = new TextSVG(REG_B[0] - 80, REG_B[1], Constants.REG_B_LABEL_ID, "B", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.reg_c_label = new TextSVG(REG_C[0] - 80, REG_C[1], Constants.REG_C_LABEL_ID, "C", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.reg_d_label = new TextSVG(REG_D[0] - 80, REG_D[1], Constants.REG_D_LABEL_ID, "D", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
        
		this.reg_a_box = new PolygonSVG(Constants.REG_A_BOX_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, REG_A_BOX_OFFSET);
		this.reg_b_box = new PolygonSVG(Constants.REG_B_BOX_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, REG_B_BOX_OFFSET);
		this.reg_c_box = new PolygonSVG(Constants.REG_C_BOX_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, REG_C_BOX_OFFSET);
		this.reg_d_box = new PolygonSVG(Constants.REG_D_BOX_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, REG_D_BOX_OFFSET);

    
		this.reg_a_text = new TextSVG(REG_A[0], REG_A[1], Constants.REG_A_ID, "00000000", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.reg_b_text = new TextSVG(REG_B[0], REG_B[1], Constants.REG_B_ID, "00000000", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.reg_c_text = new TextSVG(REG_C[0], REG_C[1], Constants.REG_C_ID, "00000000", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
		this.reg_d_text = new TextSVG(REG_D[0], REG_D[1], Constants.REG_D_ID, "00000000", Constants.TEXT_STYLE, Constants.REGISTER_FILE_OFFSET);
    
		this.read_a_mux = new Mux4_1SVG(Constants.READ_A_MUX_ID, Constants.READ_A_MUX_A_ID, Constants.READ_A_MUX_B_ID, Constants.READ_A_MUX_C_ID, Constants.READ_A_MUX_D_ID, Constants.READ_A_MUX_OFFSET);
		this.read_b_mux = new Mux4_1SVG(Constants.READ_B_MUX_ID, Constants.READ_B_MUX_A_ID, Constants.READ_B_MUX_B_ID, Constants.READ_B_MUX_C_ID, Constants.READ_B_MUX_D_ID, Constants.READ_B_MUX_OFFSET);
        
	}
    
	get_all_nodes() {
		let res = [];
		res.push(this.reg_file.get_node());
		res.push(this.register_text.get_node());
		res.push(this.reg_a_label.get_node());
		res.push(this.reg_b_label.get_node());
		res.push(this.reg_c_label.get_node());
		res.push(this.reg_d_label.get_node());
		res.push(this.reg_a_text.get_node());
		res.push(this.reg_b_text.get_node());
		res.push(this.reg_c_text.get_node());
		res.push(this.reg_d_text.get_node());
		res.push(this.reg_a_box.get_node());
		res.push(this.reg_b_box.get_node());
		res.push(this.reg_c_box.get_node());
		res.push(this.reg_d_box.get_node());

		this.read_a_mux.get_all_nodes().forEach(x => res.push(x));
		this.read_b_mux.get_all_nodes().forEach(x => res.push(x));

		return res;
	}
}