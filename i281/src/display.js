import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import PathSVG from "./PathSVG.js";
import Mux2_1SVG from "./Mux2_1SVG.js";
import RegisterFileSVG from "./RegisterFileSVG.js";
import PCValueSVG from "./PCValueSVG.js";
import DMEM_SVG from "./DMEM_SVG.js";
import ALU_SVG from "./ALU_SVG.js";

import FlagsSVG from "./FlagsSVG.js";
import IMEM_SVG from "./IMEM_SVG.js";
import PCUpdateSVG from "./PCUpdateSVG.js";
import OpcodeDeCoderSVG from "./OpcodeDecoderSVG.js";
import CircleSVG from "./CircleSVG.js";
import ControlSVG from "./ControlSVG.js";
import ArrowSVG from "./ArrowSVG.js";
import BussInfoSVG from "./BusInfoSVG.js";



function init() {
	//const btn = document.getElementById("btn");
	//btn.onclick = compute;
	show_arrows.onchange = toggle_arrow_visablitity
}

function toggle_arrow_visablitity(checkbox) {
	let arrows = [];
	arrows.push(document.getElementById(Constants.IMEM_C1_ID));
	arrows.push(document.getElementById(Constants.MUX_C2_ID));
	arrows.push(document.getElementById(Constants.PC_VALUE_C3_ID));
	arrows.push(document.getElementById(Constants.READ_A_C4_ID));
	arrows.push(document.getElementById(Constants.READ_A_C5_ID));
	arrows.push(document.getElementById(Constants.READ_B_C6_ID));
	arrows.push(document.getElementById(Constants.READ_B_C7_ID));
	arrows.push(document.getElementById(Constants.REG_FILE_C8_ID));
	arrows.push(document.getElementById(Constants.REG_FILE_C9_ID));
	arrows.push(document.getElementById(Constants.REG_FILE_C10_ID));
	arrows.push(document.getElementById(Constants.MUX_C11_ID));
	arrows.push(document.getElementById(Constants.ALU_C12_ID));
	arrows.push(document.getElementById(Constants.ALU_C13_ID));
	arrows.push(document.getElementById(Constants.FLAGS_C14_ID));
	arrows.push(document.getElementById(Constants.MUX_C15_ID));
	arrows.push(document.getElementById(Constants.MUX_C16_ID));
	arrows.push(document.getElementById(Constants.DMEM_C17_ID));
	arrows.push(document.getElementById(Constants.MUX_C18_ID));

	const val = (checkbox.target.checked) ? "hidden" : "visible";
	arrows.forEach( elem => elem.style.visibility = val);

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


	var switches_text = new TextSVG(Constants.MUX2_OFFSET[0] - 200 - 60, Constants.MUX2_OFFSET[1] + Constants.MUX_TRUE[1] - 10, Constants.SWITCHES_ID, Constants.SWITCHES_TEXT, Constants.TEXT_STYLE);

	
	var alu = new ALU_SVG();
	var code_mem = new IMEM_SVG();
	var control =  new ControlSVG();
	var dmem = new DMEM_SVG();
	var opcode_decoder = new OpcodeDeCoderSVG();
	var pc_value = new PCValueSVG();
	var pc_update = new PCUpdateSVG();
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

	const RIGHT = "right";
	const LEFT = "left";
	const TOP = "top";

	/* Bus Infomation */
	var imem_opcode_info1 = new BussInfoSVG("imem_opcode_info1st", [550, 140], 16, LEFT);
	var imem_opcode_info2 = new BussInfoSVG("imem_opcode_info2", [700, 140], "8 high", LEFT);
	var imem_out_info3 = new BussInfoSVG("imem_out_info3", [483, 200], "8 low", RIGHT);

	var opcode_control_info = new BussInfoSVG("opcode_control_info", [1100, 140], 27, LEFT);
	var flags_control_info = new BussInfoSVG("flags_control_info", [1250, 315], 4, LEFT);

	var imem_in_top = new BussInfoSVG("imem_in_top", [90, 215], 6, LEFT);
	var imem_in_middle = new BussInfoSVG("imem_in_middle", [95, 315], 16, LEFT);
	var imem_in_bottom = new BussInfoSVG("imem_in_bottom", [97, 415], 6, LEFT);

	var mux0_out = new BussInfoSVG("mux0_out", [1350, 765], 8, LEFT);
	var mux1_out = new BussInfoSVG("mux1_out", [1700, 720], 8, LEFT);
	var mux2_out = new BussInfoSVG("mux2_out", [1725, 1065], 8, LEFT);
	var mux3_out = new BussInfoSVG("mux3_out", [97, 415], 8, LEFT);

	/*
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);
	var info = new BussInfoSVG("test", [100, 200], 8, LEFT);

*/
	var imem_c1 = new ArrowSVG(Constants.IMEM_C1_ID, 1, RIGHT, Constants.IMEM_C1_OFFSET);
	var mux_c2 = new ArrowSVG(Constants.MUX_C2_ID, 2, RIGHT, Constants.MUX_C2_OFFSET);
	var pc_value_c3 = new ArrowSVG(Constants.PC_VALUE_C3_ID, 3, RIGHT, Constants.PC_VALUE_C3_OFFSET);
	var read_a_c4 = new ArrowSVG(Constants.READ_A_C4_ID, 4, LEFT, Constants.READ_A_C4_OFFSET);
	var read_a_c5 = new ArrowSVG(Constants.READ_A_C5_ID, 5, RIGHT, Constants.READ_A_C5_OFFSET);
	var read_b_c6 = new ArrowSVG(Constants.READ_B_C6_ID, 6, LEFT, Constants.READ_B_C6_OFFSET);
	var read_b_c7 = new ArrowSVG(Constants.READ_B_C7_ID, 7, RIGHT, Constants.READ_B_C7_OFFSET);
	var reg_file_c8 = new ArrowSVG(Constants.REG_FILE_C8_ID, 8, LEFT, Constants.REG_FILE_C8_OFFSET);
	var reg_file_c9 = new ArrowSVG(Constants.REG_FILE_C9_ID, 9, RIGHT, Constants.REG_FILE_C9_OFFSET);
	var reg_file_c10 = new ArrowSVG(Constants.REG_FILE_C10_ID, 10, RIGHT, Constants.REG_FILE_C10_OFFSET);
	var mux_c11 = new ArrowSVG(Constants.MUX_C11_ID, 11, RIGHT, Constants.MUX_C11_OFFSET);
	var alu_c12 = new ArrowSVG(Constants.ALU_C12_ID, 12, LEFT, Constants.ALU_C12_OFFSET);
	var alu_c13 = new ArrowSVG(Constants.ALU_C13_ID, 13, RIGHT, Constants.ALU_C13_OFFSET);
	var flags_c14 = new ArrowSVG(Constants.FLAGS_C14_ID, 14, RIGHT, Constants.FLAGS_C14_OFFSET);
	var mux_c15 = new ArrowSVG(Constants.MUX_C15_ID, 15, RIGHT, Constants.MUX_C15_OFFSET);
	var mux_c16 = new ArrowSVG(Constants.MUX_C16_ID, 16, RIGHT, Constants.MUX_C16_OFFSET);
	var dmem_c17 = new ArrowSVG(Constants.DMEM_C17_ID, 17, RIGHT, Constants.DMEM_C17_OFFSET);
	var mux_c18 = new ArrowSVG(Constants.MUX_C18_ID, 18, RIGHT, Constants.MUX_C18_OFFSET);

	
	var intersect_1 = new CircleSVG("testid", Constants.INTERSECT_1_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_2 = new CircleSVG("testid", Constants.INTERSECT_2_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_3 = new CircleSVG("testid", Constants.INTERSECT_3_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_4 = new CircleSVG("testid", Constants.INTERSECT_4_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_5 = new CircleSVG("testid", Constants.INTERSECT_5_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_6 = new CircleSVG("testid", Constants.INTERSECT_6_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_7 = new CircleSVG("testid", Constants.INTERSECT_7_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_8 = new CircleSVG("testid", Constants.INTERSECT_8_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);
	var intersect_9 = new CircleSVG("testid", Constants.INTERSECT_9_POS, Constants.INTERSECT_RADIUS, Constants.INTERSECT_STYLE);

	var svg = document.getElementById("canvas");
	mux0.get_all_nodes().forEach( x => svg.appendChild(x));
	mux1.get_all_nodes().forEach( x => svg.appendChild(x));
	mux2.get_all_nodes().forEach( x => svg.appendChild(x));
	mux3.get_all_nodes().forEach( x => svg.appendChild(x));
	mux4.get_all_nodes().forEach( x => svg.appendChild(x));
	alu.get_all_nodes().forEach( x => svg.appendChild(x));
	svg.appendChild(mux_alu_wire.node);
	flags.get_all_nodes().forEach( x => svg.appendChild(x));
	code_mem.get_all_nodes().forEach( x => svg.appendChild(x));
	opcode_decoder.get_all_nodes().forEach( x => svg.appendChild(x));
	control.get_all_nodes().forEach( x => svg.appendChild(x));
	reg_file.get_all_nodes().forEach(x => svg.appendChild(x));
	pc_value.get_all_nodes().forEach(x => svg.appendChild(x));
	pc_update.get_all_nodes().forEach(x => svg.appendChild(x));
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

	imem_c1.get_all_nodes().forEach(x => svg.appendChild(x));
	mux_c2.get_all_nodes().forEach(x => svg.appendChild(x));
	pc_value_c3.get_all_nodes().forEach(x => svg.appendChild(x));
	read_a_c4.get_all_nodes().forEach(x => svg.appendChild(x));
	read_a_c5.get_all_nodes().forEach(x => svg.appendChild(x));
	read_b_c6.get_all_nodes().forEach(x => svg.appendChild(x));
	read_b_c7.get_all_nodes().forEach(x => svg.appendChild(x));
	reg_file_c8.get_all_nodes().forEach(x => svg.appendChild(x));
	reg_file_c9.get_all_nodes().forEach(x => svg.appendChild(x));
	reg_file_c10.get_all_nodes().forEach(x => svg.appendChild(x));
	mux_c11.get_all_nodes().forEach(x => svg.appendChild(x));
	alu_c12.get_all_nodes().forEach(x => svg.appendChild(x));
	alu_c13.get_all_nodes().forEach(x => svg.appendChild(x));
	flags_c14.get_all_nodes().forEach(x => svg.appendChild(x));
	mux_c15.get_all_nodes().forEach(x => svg.appendChild(x));
	mux_c16.get_all_nodes().forEach(x => svg.appendChild(x));
	dmem_c17.get_all_nodes().forEach(x => svg.appendChild(x));
	mux_c18.get_all_nodes().forEach(x => svg.appendChild(x));

	imem_opcode_info1.get_all_nodes().forEach(x => svg.appendChild(x));
	imem_opcode_info2.get_all_nodes().forEach(x => svg.appendChild(x));
	opcode_control_info.get_all_nodes().forEach(x => svg.appendChild(x));
	flags_control_info.get_all_nodes().forEach(x => svg.appendChild(x));
	imem_out_info3.get_all_nodes().forEach(x => svg.appendChild(x));

	imem_in_top.get_all_nodes().forEach(x => svg.appendChild(x));
	imem_in_middle.get_all_nodes().forEach(x => svg.appendChild(x));
	imem_in_bottom.get_all_nodes().forEach(x => svg.appendChild(x));

	mux0_out.get_all_nodes().forEach(x => svg.appendChild(x));
	mux1_out.get_all_nodes().forEach(x => svg.appendChild(x));
	mux2_out.get_all_nodes().forEach(x => svg.appendChild(x));
	mux3_out.get_all_nodes().forEach(x => svg.appendChild(x));

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
	svg.appendChild(intersect_1.node);
	svg.appendChild(intersect_2.node);
	svg.appendChild(intersect_3.node);
	svg.appendChild(intersect_4.node);
	svg.appendChild(intersect_5.node);
	svg.appendChild(intersect_6.node);
	svg.appendChild(intersect_7.node);
	svg.appendChild(intersect_8.node);
	svg.appendChild(intersect_9.node);

});
