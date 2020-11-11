import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import PathSVG from "./PathSVG.js";
import Mux2_1SVG from "./Mux2_1SVG.js";
import RegisterFileSVG from "./RegisterFileSVG.js";
import PCValueSVG from "./PCValueSVG.js";
import DMEM_SVG from "./DMEM_SVG.js";
import FlagsSVG from "./FlagsSVG.js";
import IMEM_SVG from "./IMEM_SVG.js";


function init() {
	//const btn = document.getElementById("btn");
	//btn.onclick = compute;
}

window.addEventListener("load", function() {
	init();


	var mux_alu_wire = new PolygonSVG(Constants.MUX_ALU_WIRE_ID, Constants.MUX_ALU_WIRE, Constants.BLOCK_STYLE);
	mux_alu_wire.translate(Constants.MUX_ALU_WIRE_OFFSET[0],Constants.MUX_ALU_WIRE_OFFSET[1]);

	var flags = new FlagsSVG();

	var mux0 = new Mux2_1SVG(Constants.MUX0_ID, Constants.MUX0_TRUE_ID, Constants.MUX0_FALSE_ID, Constants.MUX0_OFFSET);
	var mux1 = new Mux2_1SVG(Constants.MUX1_ID, Constants.MUX1_TRUE_ID, Constants.MUX1_FALSE_ID, Constants.MUX1_OFFSET);
	var mux2 = new Mux2_1SVG(Constants.MUX2_ID, Constants.MUX2_TRUE_ID, Constants.MUX2_FALSE_ID, Constants.MUX2_OFFSET);
	var mux3 = new Mux2_1SVG(Constants.MUX3_ID, Constants.MUX3_TRUE_ID, Constants.MUX3_FALSE_ID, Constants.MUX3_OFFSET);
	var mux4 = new Mux2_1SVG(Constants.MUX4_ID, Constants.MUX4_TRUE_ID, Constants.MUX4_FALSE_ID, Constants.MUX4_OFFSET);

	var opcode_text = new TextSVG(Constants.OPCODE_TPOS[0],Constants.OPCODE_TPOS[1], Constants.OPCODE_TEXT_ID, Constants.OPCODE_TEXT, Constants.TEXT_STYLE, Constants.OPCODE_DECODER_OFFSET);
	var pc_udpate_text = new TextSVG(Constants.PC_UPDATE_TPOS[0],Constants.PC_UPDATE_TPOS[1], Constants.PC_UPDATE_TEXT_ID, "PC Update Logic", Constants.TEXT_STYLE, Constants.PC_UPDATE_OFFSET);

	var control_text = new TextSVG(Constants.CONTROL_TPOS[0], Constants.CONTROL_TPOS[1], Constants.CONTROL_TEXT_ID, Constants.CONTROL_TEXT, Constants.TEXT_STYLE, Constants.CONTROL_OFFSET);
	var switches_text = new TextSVG(Constants.MUX2_OFFSET[0] - 200 - 60, Constants.MUX2_OFFSET[1] + Constants.MUX_TRUE[1] - 10, Constants.SWITCHES_ID, Constants.SWITCHES_TEXT, Constants.TEXT_STYLE);

	var alu = new PolygonSVG(Constants.ALU_ID, Constants.ALU_POLYGON, Constants.BLOCK_STYLE, Constants.ALU_OFFSET);
	var code_mem = new IMEM_SVG();
	var control = new PolygonSVG(Constants.CONTROL_ID, Constants.CONTROL_POLYGON, Constants.BLOCK_STYLE, Constants.CONTROL_OFFSET);
	var dmem = new DMEM_SVG();
	var opcode_decoder = new PolygonSVG(Constants.OPCODE_DECODER_ID, Constants.OPCODE_DECODER_POLYGON, Constants.BLOCK_STYLE, Constants.OPCODE_DECODER_OFFSET);
	var pc_value = new PCValueSVG();
	var pc_update = new PolygonSVG(Constants.PC_UPDATE_ID, Constants.PC_UPDATE_POLYGON, Constants.BLOCK_STYLE, Constants.PC_UPDATE_OFFSET);
	var reg_file = new RegisterFileSVG();
	
	var alu_result_wire = new PolygonSVG(Constants.ALU_RESULT_WIRE_ID, Constants.ALU_RESULT_WIRE, Constants.WIRE_STYLE);
	alu_result_wire.translate(Constants.ALU_RESULT_WIRE_OFFSET[0], Constants.ALU_RESULT_WIRE_OFFSET[1]);

	var imem_decoder_wire = new PolygonSVG(Constants.IMEM_DECODER_WIRE_ID, Constants.IMEM_DECODER_WIRE, Constants.WIRE_STYLE);
	imem_decoder_wire.translate(Constants.IMEM_DECODER_WIRE_OFFSET[0], Constants.IMEM_DECODER_WIRE_OFFSET[1]);

	var decoder_control_wire = new PolygonSVG(Constants.DECODER_CONTROL_WIRE_ID, Constants.OPCODE_DECODER_CONTROL_WIRE, Constants.WIRE_STYLE);
	decoder_control_wire.translate(Constants.OPCODE_DECODER_CONTROL_WIRE_OFFSET[0], Constants.OPCODE_DECODER_CONTROL_WIRE_OFFSET[1]);
	
	var alu_flag_wire = new PathSVG(Constants.ALU_FLAG_WIRE_ID, Constants.ALU_FLAGS_WIRE, Constants.WIRE_STYLE);
	var flag_control_wire = new PathSVG(Constants.FLAGS_CONTROL_WIRE_ID, Constants.FLAGS_CONTROL_WIRE, Constants.WIRE_STYLE);
	var mux_imem_wire = new PathSVG(Constants.MUX_IMEM_WIRE_ID, Constants.MUX_IMEM_WIRE, Constants.WIRE_STYLE);
	var mux_reg_file_wire = new PathSVG(Constants.MUX_REG_FILE_WIRE_ID, Constants.MUX_REG_FILE_WIRE, Constants.WIRE_STYLE);
	var mux2_dmem_wire = new PathSVG(Constants.MUX2_DMEM_WIRE_ID, Constants.MUX2_DMEM_WIRE, Constants.WIRE_STYLE);
	var mux1_dmem_wire1 = new PathSVG(Constants.MUX1_DMEM_WIRE1_ID, Constants.MUX1_DMEM_WIRE1, Constants.WIRE_STYLE);
	var mux1_dmem_wire2 = new PathSVG(Constants.MUX1_DMEM_WIRE2_ID, Constants.MUX1_DMEM_WIRE2, Constants.WIRE_STYLE);
	var mux1_mux3_wire = new PathSVG(Constants.MUX1_MUX3_WIRE_ID, Constants.MUX1_MUX3_WIRE, Constants.WIRE_STYLE);
	var dmem_mux3_wire = new PathSVG(Constants.DMEM_MUX3_WIRE_ID, Constants.DMEM_MUX3_WIRE, Constants.WIRE_STYLE);
	var imem_mux2_wire = new PathSVG(Constants.IMEM_MUX2_WIRE_ID, Constants.IMEM_MUX2_WIRE, Constants.WIRE_STYLE);
	var read_b_mux2_wire = new PathSVG(Constants.READ_B_MUX2_WIRE_ID, Constants.READ_B_MUX2_WIRE, Constants.WIRE_STYLE);
	var imem_in_pc_update_wire = new PathSVG(Constants.IMEM_IN_PC_UPDATE_MUX_WIRE_ID, Constants.IMEM_IN_PC_UPDATE_MUX_WIRE, Constants.WIRE_STYLE);
	var imem_out_pc_update_wire = new PathSVG(Constants.IMEM_OUT_PC_UPDATE_WIRE_ID, Constants.IMEM_OUT_PC_UPDATE_WIRE, Constants.WIRE_STYLE);
	var imem_pc_val_mux_wire = new PathSVG(Constants.IMEM_PC_VAL_MUX_WIRE_ID, Constants.IMEM_PC_VAL_MUX_WIRE, Constants.WIRE_STYLE);
	var imem_mux0_wire = new PathSVG(Constants.IMEM_MUX0_WIRE_ID, Constants.IMEM_MUX0_WIRE, Constants.WIRE_STYLE);
	var imem_mux1_wire = new PathSVG(Constants.IMEM_MUX1_WIRE_ID, Constants.IMEM_MUX1_WIRE, Constants.WIRE_STYLE);
	var switches_mux1_wire = new PathSVG(Constants.SWITCHES_MUX1_WIRE_ID, Constants.SWITCHES_MUX1_WIRE, Constants.WIRE_STYLE);

	var read_a_wire = new PolygonSVG(Constants.READ_A_WIRE_ID, Constants.READ_A_WIRE, Constants.WIRE_STYLE);
	read_a_wire.translate(Constants.READ_A_WIRE_OFFSET[0], Constants.READ_A_WIRE_OFFSET[1]);

	var read_b_wire = new PolygonSVG(Constants.READ_B_WIRE_ID, Constants.READ_B_WIRE, Constants.WIRE_STYLE);
	read_b_wire.translate(Constants.READ_B_WIRE_OFFSET[0], Constants.READ_B_WIRE_OFFSET[1]);

	var pc_update_true_wire = new PolygonSVG(Constants.PC_UPDATE_TRUE_WIRE_ID, [...Constants.PC_UPDATE_MUX_WIRE], Constants.WIRE_STYLE);
	pc_update_true_wire.translate(Constants.PC_UPDATE_MUX_TRUE_WIRE_OFFSET[0], Constants.PC_UPDATE_MUX_TRUE_WIRE_OFFSET[1]);

	var pc_update_false_wire = new PolygonSVG(Constants.PC_UPDATE_FALSE_WIRE_ID, [...Constants.PC_UPDATE_MUX_WIRE], Constants.WIRE_STYLE);
	pc_update_false_wire.translate(Constants.PC_UPDATE_MUX_FALSE_WIRE_OFFSET[0], Constants.PC_UPDATE_MUX_FALSE_WIRE_OFFSET[1]);

	var mux_pc_val_wire = new PolygonSVG(Constants.MUX_PC_VAL_WIRE_ID, Constants.MUX_PC_VALUE_WIRE, Constants.WIRE_STYLE);
	mux_pc_val_wire.translate(Constants.MUX_PC_VALUE_WIRE_OFFSET[0], Constants.MUX_PC_VALUE_WIRE_OFFSET[1]);

	var imem_c1 = new PolygonSVG(Constants.IMEM_C1_ID, [...Constants.ARROW],Constants.ARROW_STYLE, Constants.IMEM_C1_OFFSET);
	var mux_c2 = new PolygonSVG(Constants.MUX_C2_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.MUX_C2_OFFSET);
	var pc_value_c3 = new PolygonSVG(Constants.PC_VALUE_C3_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.PC_VALUE_C3_OFFSET);
	var read_a_c4 = new PolygonSVG(Constants.READ_A_C4_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.READ_A_C4_OFFSET);
	var read_a_c5 = new PolygonSVG(Constants.READ_A_C5_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.READ_A_C5_OFFSET);
	var read_b_c6 = new PolygonSVG(Constants.READ_B_C6_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.READ_B_C6_OFFSET);
	var read_b_c7 = new PolygonSVG(Constants.READ_B_C7_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.READ_B_C7_OFFSET);
	var reg_file_c8 = new PolygonSVG(Constants.REG_FILE_C8_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.REG_FILE_C8_OFFSET);
	var reg_file_c9 = new PolygonSVG(Constants.REG_FILE_C9_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.REG_FILE_C9_OFFSET);
	var reg_file_c10 = new PolygonSVG(Constants.REG_FILE_C10_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.REG_FILE_C10_OFFSET);
	var mux_c11 = new PolygonSVG(Constants.MUX_C11_ID, [...Constants.ARROW],  Constants.ARROW_STYLE, Constants.MUX_C11_OFFSET);
	var alu_c12 = new PolygonSVG(Constants.ALU_C12_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.ALU_C12_OFFSET);
	var alu_c13 = new PolygonSVG( Constants.ALU_C13_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.ALU_C13_OFFSET);
	var flags_c14 = new PolygonSVG(Constants.FLAGS_C14_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.FLAGS_C14_OFFSET);
	var mux_c15 = new PolygonSVG(Constants.MUX_C15_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.MUX_C15_OFFSET);
	var mux_c16 = new PolygonSVG(Constants.MUX_C16_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.MUX_C16_OFFSET);
	var dmem_c17 = new PolygonSVG(Constants.DMEM_C17_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.DMEM_C17_OFFSET);
	var mux_c18 = new PolygonSVG(Constants.MUX_C18_ID, [...Constants.ARROW], Constants.ARROW_STYLE, Constants.MUX_C18_OFFSET);

	var control_c1 = new PolygonSVG(Constants.CONTROL_C1, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 1 * Constants.ARROW_DIST_BETWEEN , Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c2 = new PolygonSVG(Constants.CONTROL_C2, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 2 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c3 = new PolygonSVG(Constants.CONTROL_C3, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 3 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c4 = new PolygonSVG(Constants.CONTROL_C4, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 4 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c5 = new PolygonSVG(Constants.CONTROL_C5, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 5 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c6 = new PolygonSVG(Constants.CONTROL_C6, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 6 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c7 = new PolygonSVG(Constants.CONTROL_C7, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 7 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c8 = new PolygonSVG(Constants.CONTROL_C8, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 8 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c9 = new PolygonSVG(Constants.CONTROL_C9, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 9 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c10 = new PolygonSVG(Constants.CONTROL_C10, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 10 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c11 = new PolygonSVG(Constants.CONTROL_C11, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 11 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c12 = new PolygonSVG(Constants.CONTROL_C12, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 12 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c13 = new PolygonSVG(Constants.CONTROL_C13, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 13 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c14 = new PolygonSVG(Constants.CONTROL_C14, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 14 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c15 = new PolygonSVG(Constants.CONTROL_C15, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 15 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c16 = new PolygonSVG(Constants.CONTROL_C16, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 16 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c17 = new PolygonSVG(Constants.CONTROL_C17, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 17 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);
	var control_c18 = new PolygonSVG(Constants.CONTROL_C18, [...Constants.ARROW], Constants.ARROW_STYLE, [Constants.CONTROL_ARROW_OFFSET[0] + 18 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]]);


	var svg = document.getElementById("canvas");
	mux0.get_all_nodes().forEach( x => svg.appendChild(x));
	mux1.get_all_nodes().forEach( x => svg.appendChild(x));
	mux2.get_all_nodes().forEach( x => svg.appendChild(x));
	mux3.get_all_nodes().forEach( x => svg.appendChild(x));
	mux4.get_all_nodes().forEach( x => svg.appendChild(x));
	svg.appendChild(alu.node);
	svg.appendChild(mux_alu_wire.node);
	flags.get_all_nodes().forEach( x => svg.appendChild(x));
	code_mem.get_all_nodes().forEach( x => svg.appendChild(x));
	svg.appendChild(opcode_decoder.node);
	svg.appendChild(opcode_text.node);
	svg.appendChild(control.node);
	svg.appendChild(control_text.node);
	reg_file.get_all_nodes().forEach(x => svg.appendChild(x));
	pc_value.get_all_nodes().forEach(x => svg.appendChild(x));
	svg.appendChild(pc_update.node);
	dmem.get_all_nodes().forEach(x => svg.appendChild(x));
	svg.appendChild(alu_result_wire.node);
	svg.appendChild(imem_decoder_wire.node);
	svg.appendChild(decoder_control_wire.node);
	svg.appendChild(alu_flag_wire.node);
	svg.appendChild(read_a_wire.node);
	svg.appendChild(read_b_wire.node);
	svg.appendChild(pc_update_false_wire.node);
	svg.appendChild(pc_update_true_wire.node);
	svg.appendChild(mux_pc_val_wire.node);
	svg.appendChild(mux_c2.node);
	svg.appendChild(read_a_c4.node);	
	svg.appendChild(read_a_c5.node);	
	svg.appendChild(read_b_c6.node);	
	svg.appendChild(read_b_c7.node);	
	svg.appendChild(mux_c11.node);	
	svg.appendChild(mux_c15.node);	
	svg.appendChild(mux_c16.node);
	svg.appendChild(mux_c18.node);
	svg.appendChild(reg_file_c8.node);	
	svg.appendChild(reg_file_c9.node);	
	svg.appendChild(reg_file_c10.node);
	svg.appendChild(alu_c12.node);
	svg.appendChild(alu_c13.node);
	svg.appendChild(flags_c14.node);
	svg.appendChild(dmem_c17.node);
	svg.appendChild(pc_value_c3.node);
	svg.appendChild(control_c1.node);
	svg.appendChild(control_c2.node);
	svg.appendChild(control_c3.node);
	svg.appendChild(control_c4.node);
	svg.appendChild(control_c5.node);
	svg.appendChild(control_c6.node);
	svg.appendChild(control_c7.node);
	svg.appendChild(control_c8.node);
	svg.appendChild(control_c9.node);
	svg.appendChild(control_c10.node);
	svg.appendChild(control_c11.node);
	svg.appendChild(control_c12.node);
	svg.appendChild(control_c13.node);
	svg.appendChild(control_c14.node);
	svg.appendChild(control_c15.node);
	svg.appendChild(control_c16.node);
	svg.appendChild(control_c17.node);
	svg.appendChild(control_c18.node);
	svg.appendChild(imem_c1.node);
	svg.appendChild(flag_control_wire.node);
	svg.appendChild(mux_imem_wire.node);
	svg.appendChild(mux_reg_file_wire.node);
	svg.appendChild(mux2_dmem_wire.node);
	svg.appendChild(mux1_dmem_wire1.node);
	svg.appendChild(mux1_dmem_wire2.node);
	svg.appendChild(mux1_mux3_wire.node);
	svg.appendChild(dmem_mux3_wire.node);
	svg.appendChild(imem_mux2_wire.node);
	svg.appendChild(read_b_mux2_wire.node);
	svg.appendChild(imem_in_pc_update_wire.node);
	svg.appendChild(imem_pc_val_mux_wire.node);
	svg.appendChild(imem_out_pc_update_wire.node);
	svg.appendChild(imem_mux0_wire.node);
	svg.appendChild(imem_mux1_wire.node);
	svg.appendChild(switches_mux1_wire.node);
	svg.appendChild(switches_text.node);
	svg.appendChild(pc_udpate_text.node);
});
