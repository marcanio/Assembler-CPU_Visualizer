import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import PathSVG from "./PathSVG.js";


function init() {
	//const btn = document.getElementById("btn");
	//btn.onclick = compute;
}

window.addEventListener("load", function() {
	init();


	// TODO mask this in a mux thing
	var mux0 = new PolygonSVG(Constants.MUX0_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	mux0.translate(Constants.MUX0_OFFSET[0], Constants.MUX0_OFFSET[1]);

	var mux0_false = new TextSVG(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX0_FALSE_ID, Constants.MUX_FALSE_TEXT, Constants.TEXT_STYLE);
	mux0_false.translate(Constants.MUX0_OFFSET[0], Constants.MUX0_OFFSET[1]);

	var mux0_true = new TextSVG(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX0_TRUE_ID, Constants.MUX_TRUE_TEXT, Constants.TEXT_STYLE);
	mux0_true.translate(Constants.MUX0_OFFSET[0], Constants.MUX0_OFFSET[1]);


	var alu = new PolygonSVG(Constants.ALU_ID, Constants.ALU_POLYGON, Constants.BLOCK_STYLE);
	alu.translate(Constants.ALU_OFFSET[0],Constants.ALU_OFFSET[1]);

	var mux_alu_wire = new PolygonSVG(Constants.MUX_ALU_WIRE_ID, Constants.MUX_ALU_WIRE, Constants.BLOCK_STYLE);
	mux_alu_wire.translate(Constants.MUX_ALU_WIRE_OFFSET[0],Constants.MUX_ALU_WIRE_OFFSET[1]);


	var flags = new PolygonSVG(Constants.FLAGS_ID, Constants.FLAGS_POLYGON, Constants.BLOCK_STYLE);
	flags.translate(Constants.FLAGS_OFFSET[0], Constants.FLAGS_OFFSET[1]);

	var flag_text = new TextSVG(Constants.FLAG_TPOS[0],Constants.FLAG_TPOS[1], Constants.FLAG_TEXT_ID, Constants.FLAG_TEXT, Constants.TEXT_STYLE);
	flag_text.translate(Constants.FLAGS_OFFSET[0], Constants.FLAGS_OFFSET[1]);

	// TODO spead these out to be 4 differnt text vals
	var flag_value = new TextSVG(Constants.FLAG_VPOS[0],Constants.FLAG_VPOS[1], "TMP_VAL", "0000", Constants.TEXT_STYLE);
	flag_value.translate(Constants.FLAGS_OFFSET[0], Constants.FLAGS_OFFSET[1]);

	var mux1 = new PolygonSVG(Constants.MUX1_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	mux1.translate(Constants.MUX1_OFFSET[0], Constants.MUX1_OFFSET[1]);

	var mux1_false = new TextSVG(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX1_FALSE_ID, Constants.MUX_FALSE_TEXT, Constants.TEXT_STYLE );
	mux1_false.translate(Constants.MUX1_OFFSET[0], Constants.MUX1_OFFSET[1]);


	var mux1_true = new TextSVG(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX1_TRUE_ID, Constants.MUX_TRUE_TEXT, Constants.TEXT_STYLE);
	mux1_true.translate(Constants.MUX1_OFFSET[0], Constants.MUX1_OFFSET[1]);

	var mux2 = new PolygonSVG(Constants.MUX2_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	mux2.translate(Constants.MUX2_OFFSET[0], Constants.MUX2_OFFSET[1]);

	var mux2_false = new TextSVG(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX2_FALSE_ID, Constants.MUX_FALSE_TEXT, Constants.TEXT_STYLE);
	mux2_false.translate(Constants.MUX2_OFFSET[0], Constants.MUX2_OFFSET[1]);


	var mux2_true = new TextSVG(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX2_TRUE_ID, Constants.MUX_TRUE_TEXT, Constants.TEXT_STYLE);
	mux2_true.translate(Constants.MUX2_OFFSET[0], Constants.MUX2_OFFSET[1]);


	var mux3 = new PolygonSVG(Constants.MUX3_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	mux3.translate(Constants.MUX3_OFFSET[0], Constants.MUX3_OFFSET[1]);

	var mux3_false = new TextSVG(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX3_FALSE_ID, Constants.MUX_FALSE_TEXT, Constants.TEXT_STYLE);
	mux3_false.translate(Constants.MUX3_OFFSET[0], Constants.MUX3_OFFSET[1]);


	var mux3_true = new TextSVG(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX3_TRUE_ID, Constants.MUX_TRUE_TEXT, Constants.TEXT_STYLE);
	mux3_true.translate(Constants.MUX3_OFFSET[0], Constants.MUX3_OFFSET[1]);

	var mux4 = new PolygonSVG(Constants.MUX4_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	mux4.translate(Constants.MUX4_OFFSET[0], Constants.MUX4_OFFSET[1]);

	var mux4_false = new TextSVG(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX4_FALSE_ID, Constants.MUX_FALSE_TEXT, Constants.TEXT_STYLE);
	mux4_false.translate(Constants.MUX4_OFFSET[0], Constants.MUX4_OFFSET[1]);


	var mux4_true = new TextSVG(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX4_TRUE_ID, Constants.MUX_TRUE_TEXT, Constants.TEXT_STYLE);
	mux4_true.translate(Constants.MUX4_OFFSET[0], Constants.MUX4_OFFSET[1]);

	var code_mem = new PolygonSVG(Constants.CODE_MEM_ID, Constants.CODE_MEM_POLYGON, Constants.BLOCK_STYLE);
	code_mem.translate(Constants.CODE_MEM_OFFSET[0], Constants.CODE_MEM_OFFSET[1]);

	var opcode_decoder = new PolygonSVG(Constants.OPCODE_DECODER_ID, Constants.OPCODE_DECODER_POLYGON, Constants.BLOCK_STYLE);
	opcode_decoder.translate(Constants.OPCODE_DECODER_OFFSET[0], Constants.OPCODE_DECODER_OFFSET[1]);

	var opcode_text = new TextSVG(Constants.OPCODE_TPOS[0],Constants.OPCODE_TPOS[1], Constants.OPCODE_TEXT_ID, Constants.OPCODE_TEXT, Constants.TEXT_STYLE);
	opcode_text.translate(Constants.OPCODE_DECODER_OFFSET[0], Constants.OPCODE_DECODER_OFFSET[1]);

	var control = new PolygonSVG(Constants.CONTROL_ID, Constants.CONTROL_POLYGON, Constants.BLOCK_STYLE);
	control.translate(Constants.CONTROL_OFFSET[0], Constants.CONTROL_OFFSET[1]);

	var control_text = new TextSVG(Constants.CONTROL_TPOS[0], Constants.CONTROL_TPOS[1], Constants.CONTROL_TEXT_ID, Constants.CONTROL_TEXT, Constants.TEXT_STYLE);
	control_text.translate(Constants.CONTROL_OFFSET[0], Constants.CONTROL_OFFSET[1]);

	var reg_file = new PolygonSVG(Constants.REG_FILE_ID, Constants.REGISTER_FILE_POLYGON, Constants.BLOCK_STYLE);
	reg_file.translate(Constants.REGISTER_FILE_OFFSET[0], Constants.REGISTER_FILE_OFFSET[1]);

	var read_a_mux = new PolygonSVG(Constants.READ_A_MUX_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	read_a_mux.translate(Constants.READ_A_MUX_OFFSET[0], Constants.READ_A_MUX_OFFSET[1]);

	var read_b_mux = new PolygonSVG(Constants.READ_B_MUX_ID, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE);
	read_b_mux.translate(Constants.READ_B_MUX_OFFSET[0], Constants.READ_B_MUX_OFFSET[1]);


	var pc_value = new PolygonSVG(Constants.PC_VALUE_ID, Constants.PC_VALUE_POLYGON, Constants.BLOCK_STYLE);
	pc_value.translate(Constants.PC_VALUE_OFFSET[0], Constants.PC_VALUE_OFFSET[1]);

	var pc_update = new PolygonSVG(Constants.PC_UPDATE_ID, Constants.PC_UPDATE_POLYGON, Constants.BLOCK_STYLE);
	pc_update.translate(Constants.PC_UPDATE_OFFSET[0], Constants.PC_UPDATE_OFFSET[1]);

	var dmem = new PolygonSVG(Constants.DMEM_ID, Constants.DATA_MEM_POLYGON, Constants.BLOCK_STYLE);
	dmem.translate(Constants.DATA_MEM_OFFSET[0], Constants.DATA_MEM_OFFSET[1]);

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
    
	var mux_c2 = new PolygonSVG(Constants.MUX_C2_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	mux_c2.translate(Constants.MUX_C2_OFFSET[0], Constants.MUX_C2_OFFSET[1] );

	var mux_c11 = new PolygonSVG(Constants.MUX_C11_ID, [...Constants.ARROW],  Constants.ARROW_STYLE);
	mux_c11.translate(Constants.MUX_C11_OFFSET[0], Constants.MUX_C11_OFFSET[1] );

	var mux_c15 = new PolygonSVG(Constants.MUX_C15_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	mux_c15.translate(Constants.MUX_C15_OFFSET[0], Constants.MUX_C15_OFFSET[1] );

	var mux_c16 = new PolygonSVG(Constants.MUX_C16_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	mux_c16.translate(Constants.MUX_C16_OFFSET[0], Constants.MUX_C16_OFFSET[1] );

	var mux_c18 = new PolygonSVG(Constants.MUX_C18_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	mux_c18.translate(Constants.MUX_C18_OFFSET[0], Constants.MUX_C18_OFFSET[1] );

	var pc_value_c3 = new PolygonSVG(Constants.PC_VALUE_C3_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	pc_value_c3.translate(Constants.PC_VALUE_C3_OFFSET[0], Constants.PC_VALUE_C3_OFFSET[1] );

	var imem_c1 = new PolygonSVG(Constants.IMEM_C1_ID, [...Constants.ARROW],Constants.ARROW_STYLE);
	imem_c1.translate(Constants.IMEM_C1_OFFSET[0], Constants.IMEM_C1_OFFSET[1]);
	
	var read_a_c4 = new PolygonSVG(Constants.READ_A_C4_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	read_a_c4.translate(Constants.READ_A_C4_OFFSET[0], Constants.READ_A_C4_OFFSET[1]);

	var read_a_c5 = new PolygonSVG(Constants.READ_A_C5_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	read_a_c5.translate(Constants.READ_A_C5_OFFSET[0], Constants.READ_A_C5_OFFSET[1]);

	var read_b_c6 = new PolygonSVG(Constants.READ_B_C6_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	read_b_c6.translate(Constants.READ_B_C6_OFFSET[0], Constants.READ_B_C6_OFFSET[1]);

	var read_b_c7 = new PolygonSVG(Constants.READ_B_C7_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	read_b_c7.translate(Constants.READ_B_C7_OFFSET[0], Constants.READ_B_C7_OFFSET[1]);

	var reg_file_c8 = new PolygonSVG(Constants.REG_FILE_C8_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	reg_file_c8.translate(Constants.REG_FILE_C8_OFFSET[0], Constants.REG_FILE_C8_OFFSET[1]);

	var reg_file_c9 = new PolygonSVG(Constants.REG_FILE_C9_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	reg_file_c9.translate(Constants.REG_FILE_C9_OFFSET[0], Constants.REG_FILE_C9_OFFSET[1]);

	var reg_file_c10 = new PolygonSVG(Constants.REG_FILE_C10_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	reg_file_c10.translate(Constants.REG_FILE_C10_OFFSET[0], Constants.REG_FILE_C10_OFFSET[1]);

	var alu_c12 = new PolygonSVG(Constants.ALU_C12_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	alu_c12.translate(Constants.ALU_C12_OFFSET[0], Constants.ALU_C12_OFFSET[1]);

	var alu_c13 = new PolygonSVG( Constants.ALU_C13_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	alu_c13.translate(Constants.ALU_C13_OFFSET[0], Constants.ALU_C13_OFFSET[1]);

	var flags_c14 = new PolygonSVG(Constants.FLAGS_C14_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	flags_c14.translate(Constants.FLAGS_C14_OFFSET[0], Constants.FLAGS_C14_OFFSET[1]);

	var dmem_c17 = new PolygonSVG(Constants.DMEM_C17_ID, [...Constants.ARROW], Constants.ARROW_STYLE);
	dmem_c17.translate(Constants.DMEM_C17_OFFSET[0], Constants.DMEM_C17_OFFSET[1]);

	var control_c1 = new PolygonSVG(Constants.CONTROL_C1, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c1.translate(Constants.CONTROL_ARROW_OFFSET[0] + 1 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c2 = new PolygonSVG(Constants.CONTROL_C2, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c2.translate(Constants.CONTROL_ARROW_OFFSET[0] + 2 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c3 = new PolygonSVG(Constants.CONTROL_C3, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c3.translate(Constants.CONTROL_ARROW_OFFSET[0] + 3 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c4 = new PolygonSVG(Constants.CONTROL_C4, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c4.translate(Constants.CONTROL_ARROW_OFFSET[0] + 4 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c5 = new PolygonSVG(Constants.CONTROL_C5, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c5.translate(Constants.CONTROL_ARROW_OFFSET[0] + 5 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c6 = new PolygonSVG(Constants.CONTROL_C6, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c6.translate(Constants.CONTROL_ARROW_OFFSET[0] + 6 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c7 = new PolygonSVG(Constants.CONTROL_C7, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c7.translate(Constants.CONTROL_ARROW_OFFSET[0] + 7 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c8 = new PolygonSVG(Constants.CONTROL_C8, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c8.translate(Constants.CONTROL_ARROW_OFFSET[0] + 8 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c9 = new PolygonSVG(Constants.CONTROL_C9, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c9.translate(Constants.CONTROL_ARROW_OFFSET[0] + 9 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c10 = new PolygonSVG(Constants.CONTROL_C10, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c10.translate(Constants.CONTROL_ARROW_OFFSET[0] + 10 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c11 = new PolygonSVG(Constants.CONTROL_C11, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c11.translate(Constants.CONTROL_ARROW_OFFSET[0] + 11 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c12 = new PolygonSVG(Constants.CONTROL_C12, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c12.translate(Constants.CONTROL_ARROW_OFFSET[0] + 12 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c13 = new PolygonSVG(Constants.CONTROL_C13, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c13.translate(Constants.CONTROL_ARROW_OFFSET[0] + 13 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c14 = new PolygonSVG(Constants.CONTROL_C14, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c14.translate(Constants.CONTROL_ARROW_OFFSET[0] + 14 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c15 = new PolygonSVG(Constants.CONTROL_C15, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c15.translate(Constants.CONTROL_ARROW_OFFSET[0] + 15 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c16 = new PolygonSVG(Constants.CONTROL_C16, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c16.translate(Constants.CONTROL_ARROW_OFFSET[0] + 16 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c17 = new PolygonSVG(Constants.CONTROL_C17, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c17.translate(Constants.CONTROL_ARROW_OFFSET[0] + 17 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c18 = new PolygonSVG(Constants.CONTROL_C18, [...Constants.ARROW], Constants.ARROW_STYLE);
	control_c18.translate(Constants.CONTROL_ARROW_OFFSET[0] + 18 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);


	var svg = document.getElementById("canvas");
	//var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.appendChild(mux0.node);
	svg.appendChild(mux0_false.node);
	svg.appendChild(mux0_true.node);
	svg.appendChild(alu.node);
	svg.appendChild(mux_alu_wire.node);
	svg.appendChild(flags.node);
	svg.appendChild(flag_text.node);
	svg.appendChild(flag_value.node);
	svg.appendChild(mux1.node);
	svg.appendChild(mux1_false.node);
	svg.appendChild(mux1_true.node);
	svg.appendChild(mux2.node);
	svg.appendChild(mux2_false.node);
	svg.appendChild(mux2_true.node);
	svg.appendChild(mux3.node);
	svg.appendChild(mux3_false.node);
	svg.appendChild(mux3_true.node);
	svg.appendChild(mux4.node);
	svg.appendChild(mux4_false.node);
	svg.appendChild(mux4_true.node);
	svg.appendChild(code_mem.node);
	svg.appendChild(opcode_decoder.node);
	svg.appendChild(opcode_text.node);
	svg.appendChild(control.node);
	svg.appendChild(control_text.node);
	svg.appendChild(reg_file.node);
	svg.appendChild(read_a_mux.node);
	svg.appendChild(read_b_mux.node);
	svg.appendChild(pc_value.node);
	svg.appendChild(pc_update.node);
	svg.appendChild(dmem.node);
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
});
