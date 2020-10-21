import * as Constants from "./constants.js";


function init() {
	//const btn = document.getElementById("btn");
	//btn.onclick = compute;
}

function Polygon() {
	var pointList = [];

	this.node = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

	function build(arg) {
		var res = [];
		for (var i = 0, l = arg.length; i < l; i++) {
			res.push(arg[i].join(","));
		}
		return res.join(" ");
	}

	this.attribute = function (key, val) {
		if (val === undefined) return this.node.getAttribute(key);
		this.node.setAttribute(key, val);
	};

	this.getPoint = function (i) {
		return pointList[i];
	};

	this.setPoint = function (i, x, y) {
		pointList[i] = [x, y];
		this.attribute("points", build(pointList));
	};
	
	this.translate = function(x, y) {
		if(!pointList[0] || !pointList[0][0])
			return;
		for (var i = 0; i < pointList[0][0].length - 1; i += 2) {
			pointList[0][0][i] += x;
			pointList[0][0][i + 1] +=y ;
		}
		this.attribute("points", build(pointList));
	};

	this.points = function () {
		for (var i = 0, l = arguments.length; i < l; i += 2) {
			pointList.push([arguments[i], arguments[i + 1]]);
		}
		this.attribute("points", build(pointList));
	};

	this.points.apply(this, arguments);
}

function Text(x, y, text) {
	this.node = document.createElementNS("http://www.w3.org/2000/svg", "text");
	this.node.appendChild(document.createTextNode(text));
	this.node.setAttributeNS(null,"x", x);	
	this.node.setAttributeNS(null,"y", y);
	this.cur_x = x;
	this.cur_y = y;

	this.attribute = function (key, val) {
		if (val === undefined) return this.node.getAttribute(key);
		this.node.setAttribute(key, val);
	};

	this.setPoint = function (x, y) {
		this.cur_x = x;
		this.cur_y = y;
		this.node.setAttributeNS(null,"x", x);	
		this.node.setAttributeNS(null,"y", y);		
	};

	this.translate = function (x, y) {

		this.cur_x += x;
		this.cur_y += y;
		this.node.setAttributeNS(null,"x", this.cur_x);	
		this.node.setAttributeNS(null,"y", this.cur_y);		

	};
}

window.addEventListener("load", function() {
	init();


	// TODO mask this in a mux thing
	var mux0 = new Polygon([...Constants.MUX_POLYGON]);
	mux0.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	mux0.attribute(Constants.ID_ATTR, Constants.MUX0_ID);
	mux0.translate(Constants.MUX0_OFFSET[0], Constants.MUX0_OFFSET[1]);

	var mux0_false = new Text(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX_FALSE_TEXT);
	mux0_false.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE );
	mux0_false.attribute(Constants.ID_ATTR, Constants.MUX0_FALSE_ID);
	mux0_false.translate(Constants.MUX0_OFFSET[0], Constants.MUX0_OFFSET[1]);


	var mux0_true = new Text(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX_TRUE_TEXT);
	mux0_true.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	mux0_true.attribute(Constants.ID_ATTR, Constants.MUX0_TRUE_ID);
	mux0_true.translate(Constants.MUX0_OFFSET[0], Constants.MUX0_OFFSET[1]);


	var alu = new Polygon(Constants.ALU_POLYGON);
	alu.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	alu.attribute(Constants.ID_ATTR, Constants.ALU_ID);
	alu.translate(Constants.ALU_OFFSET[0],Constants.ALU_OFFSET[1]);

	var mux_alu_wire = new Polygon(Constants.MUX_ALU_WIRE);
	mux_alu_wire.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	mux_alu_wire.attribute(Constants.ID_ATTR, Constants.MUX_ALU_WIRE_ID);
	mux_alu_wire.translate(Constants.MUX_ALU_WIRE_OFFSET[0],Constants.MUX_ALU_WIRE_OFFSET[1]);


	var flags = new Polygon(Constants.FLAGS_POLYGON);
	flags.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	flags.attribute(Constants.ID_ATTR, Constants.FLAGS_ID);
	flags.translate(Constants.FLAGS_OFFSET[0], Constants.FLAGS_OFFSET[1]);

	var flag_text = new Text(70,30, "Flags");
	flag_text.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	flag_text.translate(Constants.FLAGS_OFFSET[0], Constants.FLAGS_OFFSET[1]);

	// TODO spead these out to be 4 differnt text vals
	var flag_value = new Text(70,70, "0000");
	flag_value.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	flag_value.translate(Constants.FLAGS_OFFSET[0], Constants.FLAGS_OFFSET[1]);

	var mux1 = new Polygon([...Constants.MUX_POLYGON]);
	mux1.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	mux1.attribute(Constants.ID_ATTR, Constants.MUX1_ID);
	mux1.translate(Constants.MUX1_OFFSET[0], Constants.MUX1_OFFSET[1]);

	var mux1_false = new Text(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX_FALSE_TEXT);
	mux1_false.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE );
	mux1_false.attribute(Constants.ID_ATTR, Constants.MUX1_FALSE_ID);
	mux1_false.translate(Constants.MUX1_OFFSET[0], Constants.MUX1_OFFSET[1]);


	var mux1_true = new Text(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX_TRUE_TEXT);
	mux1_true.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	mux1_true.attribute(Constants.ID_ATTR, Constants.MUX1_TRUE_ID);
	mux1_true.translate(Constants.MUX1_OFFSET[0], Constants.MUX1_OFFSET[1]);

	var mux2 = new Polygon([...Constants.MUX_POLYGON]);
	mux2.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	mux2.attribute(Constants.ID_ATTR, Constants.MUX2_ID);
	mux2.translate(Constants.MUX2_OFFSET[0], Constants.MUX2_OFFSET[1]);

	var mux2_false = new Text(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX_FALSE_TEXT);
	mux2_false.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE );
	mux2_false.attribute(Constants.ID_ATTR, Constants.MUX2_FALSE_ID);
	mux2_false.translate(Constants.MUX2_OFFSET[0], Constants.MUX2_OFFSET[1]);


	var mux2_true = new Text(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX_TRUE_TEXT);
	mux2_true.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	mux2_true.attribute(Constants.ID_ATTR, Constants.MUX2_TRUE_ID);
	mux2_true.translate(Constants.MUX2_OFFSET[0], Constants.MUX2_OFFSET[1]);


	var mux3 = new Polygon([...Constants.MUX_POLYGON]);
	mux3.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	mux3.attribute(Constants.ID_ATTR, Constants.MUX3_ID);
	mux3.translate(Constants.MUX3_OFFSET[0], Constants.MUX3_OFFSET[1]);

	var mux3_false = new Text(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX_FALSE_TEXT);
	mux3_false.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE );
	mux3_false.attribute(Constants.ID_ATTR, Constants.MUX3_FALSE_ID);
	mux3_false.translate(Constants.MUX3_OFFSET[0], Constants.MUX3_OFFSET[1]);


	var mux3_true = new Text(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX_TRUE_TEXT);
	mux3_true.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	mux3_true.attribute(Constants.ID_ATTR, Constants.MUX3_TRUE_ID);
	mux3_true.translate(Constants.MUX3_OFFSET[0], Constants.MUX3_OFFSET[1]);

	var mux4 = new Polygon([...Constants.MUX_POLYGON]);
	mux4.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	mux4.attribute(Constants.ID_ATTR, Constants.MUX4_ID);
	mux4.translate(Constants.MUX4_OFFSET[0], Constants.MUX4_OFFSET[1]);

	var mux4_false = new Text(Constants.MUX_FALSE[0], Constants.MUX_FALSE[1], Constants.MUX_FALSE_TEXT);
	mux4_false.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE );
	mux4_false.attribute(Constants.ID_ATTR, Constants.MUX4_FALSE_ID);
	mux4_false.translate(Constants.MUX4_OFFSET[0], Constants.MUX4_OFFSET[1]);


	var mux4_true = new Text(Constants.MUX_TRUE[0], Constants.MUX_TRUE[1], Constants.MUX_TRUE_TEXT);
	mux4_true.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	mux4_true.attribute(Constants.ID_ATTR, Constants.MUX4_TRUE_ID);
	mux4_true.translate(Constants.MUX4_OFFSET[0], Constants.MUX4_OFFSET[1]);

	var code_mem = new Polygon(Constants.CODE_MEM_POLYGON);
	code_mem.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	code_mem.attribute(Constants.ID_ATTR, Constants.CODE_MEM_ID);
	code_mem.translate(Constants.CODE_MEM_OFFSET[0], Constants.CODE_MEM_OFFSET[1]);

	var opcode_decoder = new Polygon(Constants.OPCODE_DECODER_POLYGON);
	opcode_decoder.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	opcode_decoder.attribute(Constants.ID_ATTR, Constants.OPCODE_DECODER_ID);
	opcode_decoder.translate(Constants.OPCODE_DECODER_OFFSET[0], Constants.OPCODE_DECODER_OFFSET[1]);

	var opcode_text = new Text(Constants.OPCODE_TPOS[0],Constants.OPCODE_TPOS[1], Constants.OPCODE_TEXT);
	opcode_text.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	opcode_text.translate(Constants.OPCODE_DECODER_OFFSET[0], Constants.OPCODE_DECODER_OFFSET[1]);

	var control = new Polygon(Constants.CONTROL_POLYGON);
	control.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	control.attribute(Constants.ID_ATTR, Constants.CONTROL_ID);
	control.translate(Constants.CONTROL_OFFSET[0], Constants.CONTROL_OFFSET[1]);

	var control_text = new Text(70,30, "Control");
	control_text.attribute(Constants.STYLE_ATTR, Constants.TEXT_STYLE);
	control_text.translate(Constants.CONTROL_OFFSET[0], Constants.CONTROL_OFFSET[1]);

	var reg_file = new Polygon(Constants.REGISTER_FILE_POLYGON);
	reg_file.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	reg_file.attribute(Constants.ID_ATTR, Constants.REG_FILE_ID);
	reg_file.translate(Constants.REGISTER_FILE_OFFSET[0], Constants.REGISTER_FILE_OFFSET[1]);

	var read_a_mux = new Polygon([...Constants.MUX_POLYGON]);
	read_a_mux.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	read_a_mux.attribute(Constants.ID_ATTR, Constants.READ_A_MUX_ID);
	read_a_mux.translate(Constants.READ_A_MUX_OFFSET[0], Constants.READ_A_MUX_OFFSET[1]);

	var read_b_mux = new Polygon([...Constants.MUX_POLYGON]);
	read_b_mux.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	read_b_mux.attribute(Constants.ID_ATTR, Constants.READ_B_MUX_ID);
	read_b_mux.translate(Constants.READ_B_MUX_OFFSET[0], Constants.READ_B_MUX_OFFSET[1]);


	var pc_value = new Polygon(Constants.PC_VALUE_POLYGON);
	pc_value.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	pc_value.attribute(Constants.ID_ATTR, Constants.PC_VALUE_ID);
	pc_value.translate(Constants.PC_VALUE_OFFSET[0], Constants.PC_VALUE_OFFSET[1]);

	var pc_update = new Polygon(Constants.PC_UPDATE_POLYGON);
	pc_update.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	pc_update.attribute(Constants.ID_ATTR, Constants.PC_UPDATE_ID);
	pc_update.translate(Constants.PC_UPDATE_OFFSET[0], Constants.PC_UPDATE_OFFSET[1]);

	var dmem = new Polygon(Constants.DATA_MEM_POLYGON);
	dmem.attribute(Constants.STYLE_ATTR, Constants.BLOCK_STYLE);
	dmem.attribute(Constants.ID_ATTR, Constants.DMEM_ID);
	dmem.translate(Constants.DATA_MEM_OFFSET[0], Constants.DATA_MEM_OFFSET[1]);

	var alu_result_wire = new Polygon(Constants.ALU_RESULT_WIRE);
	alu_result_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	alu_result_wire.attribute(Constants.ID_ATTR, Constants.ALU_RESULT_WIRE_ID);
	alu_result_wire.translate(Constants.ALU_RESULT_WIRE_OFFSET[0], Constants.ALU_RESULT_WIRE_OFFSET[1]);

	var imem_decoder_wire = new Polygon(Constants.IMEM_DECODER_WIRE);
	imem_decoder_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	imem_decoder_wire.attribute(Constants.ID_ATTR, Constants.ALU_RESULT_WIRE_ID);
	imem_decoder_wire.translate(Constants.IMEM_DECODER_WIRE_OFFSET[0], Constants.IMEM_DECODER_WIRE_OFFSET[1]);

	var decoder_control_wire = new Polygon(Constants.OPCODE_DECODER_CONTROL_WIRE);
	decoder_control_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	decoder_control_wire.attribute(Constants.ID_ATTR, Constants.DECODER_CONTROL_WIRE_ID);
	decoder_control_wire.translate(Constants.OPCODE_DECODER_CONTROL_WIRE_OFFSET[0], Constants.OPCODE_DECODER_CONTROL_WIRE_OFFSET[1]);
	
	var alu_flag_wire = new Polygon(Constants.ALU_FLAGS_WIRE);
	alu_flag_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	alu_flag_wire.attribute(Constants.ID_ATTR, Constants.ALU_FLAG_WIRE_ID);
	alu_flag_wire.translate(Constants.ALU_FLAGS_WIRE_OFFSET[0], Constants.ALU_FLAGS_WIRE_OFFSET[1]);

	var read_a_wire = new Polygon(Constants.READ_A_WIRE);
	read_a_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	read_a_wire.attribute(Constants.ID_ATTR, Constants.READ_A_WIRE_ID);
	read_a_wire.translate(Constants.READ_A_WIRE_OFFSET[0], Constants.READ_A_WIRE_OFFSET[1]);

	var read_b_wire = new Polygon(Constants.READ_B_WIRE);
	read_b_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	read_b_wire.attribute(Constants.ID_ATTR, Constants.READ_B_WIRE_ID);
	read_b_wire.translate(Constants.READ_B_WIRE_OFFSET[0], Constants.READ_B_WIRE_OFFSET[1]);

	var pc_update_true_wire = new Polygon([...Constants.PC_UPDATE_MUX_WIRE]);
	pc_update_true_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	pc_update_true_wire.attribute(Constants.ID_ATTR, Constants.PC_UPDATE_TRUE_WIRE_ID);
	pc_update_true_wire.translate(Constants.PC_UPDATE_MUX_TRUE_WIRE_OFFSET[0], Constants.PC_UPDATE_MUX_TRUE_WIRE_OFFSET[1]);

	var pc_update_false_wire = new Polygon([...Constants.PC_UPDATE_MUX_WIRE]);
	pc_update_false_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	pc_update_false_wire.attribute(Constants.ID_ATTR, Constants.PC_UPDATE_FALSE_WIRE_ID);
	pc_update_false_wire.translate(Constants.PC_UPDATE_MUX_FALSE_WIRE_OFFSET[0], Constants.PC_UPDATE_MUX_FALSE_WIRE_OFFSET[1]);

	var mux_pc_val_wire = new Polygon(Constants.MUX_PC_VALUE_WIRE);
	mux_pc_val_wire.attribute(Constants.STYLE_ATTR, Constants.WIRE_STYLE);
	mux_pc_val_wire.attribute(Constants.ID_ATTR, Constants.MUX_PC_VAL_WIRE_ID);
	mux_pc_val_wire.translate(Constants.MUX_PC_VALUE_WIRE_OFFSET[0], Constants.MUX_PC_VALUE_WIRE_OFFSET[1]);



	var mux_c2 = new Polygon([...Constants.ARROW]);
	mux_c2.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	mux_c2.attribute(Constants.ID_ATTR, Constants.MUX_C2_ID);
	mux_c2.translate(Constants.MUX_C2_OFFSET[0], Constants.MUX_C2_OFFSET[1] );

	var mux_c11 = new Polygon([...Constants.ARROW]);
	mux_c11.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	mux_c11.attribute(Constants.ID_ATTR, Constants.MUX_C11_ID);
	mux_c11.translate(Constants.MUX_C11_OFFSET[0], Constants.MUX_C11_OFFSET[1] );

	var mux_c15 = new Polygon([...Constants.ARROW]);
	mux_c15.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	mux_c15.attribute(Constants.ID_ATTR, Constants.MUX_C15_ID);
	mux_c15.translate(Constants.MUX_C15_OFFSET[0], Constants.MUX_C15_OFFSET[1] );

	var mux_c16 = new Polygon([...Constants.ARROW]);
	mux_c16.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	mux_c16.attribute(Constants.ID_ATTR, Constants.MUX_C16_ID);
	mux_c16.translate(Constants.MUX_C16_OFFSET[0], Constants.MUX_C16_OFFSET[1] );

	var mux_c18 = new Polygon([...Constants.ARROW]);
	mux_c18.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	mux_c18.attribute(Constants.ID_ATTR, Constants.MUX_C18_ID);
	mux_c18.translate(Constants.MUX_C18_OFFSET[0], Constants.MUX_C18_OFFSET[1] );

	var pc_value_c3 = new Polygon([...Constants.ARROW]);
	pc_value_c3.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	pc_value_c3.attribute(Constants.ID_ATTR, Constants.PC_VALUE_C3_ID);
	pc_value_c3.translate(Constants.PC_VALUE_C3_OFFSET[0], Constants.PC_VALUE_C3_OFFSET[1] );

	var imem_c1 = new Polygon([...Constants.ARROW]);
	imem_c1.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	imem_c1.attribute(Constants.ID_ATTR, Constants.IMEM_C1_ID);
	imem_c1.translate(Constants.IMEM_C1_OFFSET[0], Constants.IMEM_C1_OFFSET[1]);
	
	var read_a_c4 = new Polygon([...Constants.ARROW]);
	read_a_c4.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	read_a_c4.attribute(Constants.ID_ATTR, Constants.READ_A_C4_ID);
	read_a_c4.translate(Constants.READ_A_C4_OFFSET[0], Constants.READ_A_C4_OFFSET[1]);

	var read_a_c5 = new Polygon([...Constants.ARROW]);
	read_a_c5.attribute(Constants.STYLE_ATTR,Constants. ARROW_STYLE);
	read_a_c5.attribute(Constants.ID_ATTR, Constants.READ_A_C5_ID);
	read_a_c5.translate(Constants.READ_A_C5_OFFSET[0], Constants.READ_A_C5_OFFSET[1]);

	var read_b_c6 = new Polygon([...Constants.ARROW]);
	read_b_c6.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	read_b_c6.attribute(Constants.ID_ATTR, Constants.READ_B_C6_ID);
	read_b_c6.translate(Constants.READ_B_C6_OFFSET[0], Constants.READ_B_C6_OFFSET[1]);

	var read_b_c7 = new Polygon([...Constants.ARROW]);
	read_b_c7.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	read_b_c7.attribute(Constants.ID_ATTR, Constants.READ_B_C7_ID);
	read_b_c7.translate(Constants.READ_B_C7_OFFSET[0], Constants.READ_B_C7_OFFSET[1]);

	var reg_file_c8 = new Polygon([...Constants.ARROW]);
	reg_file_c8.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	reg_file_c8.attribute(Constants.ID_ATTR, Constants.REG_FILE_C8_ID);
	reg_file_c8.translate(Constants.REG_FILE_C8_OFFSET[0], Constants.REG_FILE_C8_OFFSET[1]);

	var reg_file_c9 = new Polygon([...Constants.ARROW]);
	reg_file_c9.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	reg_file_c9.attribute(Constants.ID_ATTR, Constants.REG_FILE_C9_ID);
	reg_file_c9.translate(Constants.REG_FILE_C9_OFFSET[0], Constants.REG_FILE_C9_OFFSET[1]);

	var reg_file_c10 = new Polygon([...Constants.ARROW]);
	reg_file_c10.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	reg_file_c10.attribute(Constants.ID_ATTR, Constants.REG_FILE_C10_ID);
	reg_file_c10.translate(Constants.REG_FILE_C10_OFFSET[0], Constants.REG_FILE_C10_OFFSET[1]);

	var alu_c12 = new Polygon([...Constants.ARROW]);
	alu_c12.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	alu_c12.attribute(Constants.ID_ATTR, Constants.ALU_C12_ID);
	alu_c12.translate(Constants.ALU_C12_OFFSET[0], Constants.ALU_C12_OFFSET[1]);

	var alu_c13 = new Polygon([...Constants.ARROW]);
	alu_c13.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	alu_c13.attribute(Constants.ID_ATTR, Constants.ALU_C13_ID);
	alu_c13.translate(Constants.ALU_C13_OFFSET[0], Constants.ALU_C13_OFFSET[1]);

	var flags_c14 = new Polygon([...Constants.ARROW]);
	flags_c14.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	flags_c14.attribute(Constants.ID_ATTR, Constants.FLAGS_C14_ID);
	flags_c14.translate(Constants.FLAGS_C14_OFFSET[0], Constants.FLAGS_C14_OFFSET[1]);

	var dmem_c17 = new Polygon([...Constants.ARROW]);
	dmem_c17.attribute(Constants.STYLE_ATTR,Constants.ARROW_STYLE);
	dmem_c17.attribute(Constants.ID_ATTR, Constants.DMEM_C17_ID);
	dmem_c17.translate(Constants.DMEM_C17_OFFSET[0], Constants.DMEM_C17_OFFSET[1]);



	var control_c1 = new Polygon([...Constants.ARROW]);
	control_c1.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c1.attribute(Constants.ID_ATTR, Constants.CONTROL_C1);
	control_c1.translate(Constants.CONTROL_ARROW_OFFSET[0] + 1 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c2 = new Polygon([...Constants.ARROW]);
	control_c2.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c2.attribute(Constants.ID_ATTR, Constants.CONTROL_C2);
	control_c2.translate(Constants.CONTROL_ARROW_OFFSET[0] + 2 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c3 = new Polygon([...Constants.ARROW]);
	control_c3.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c3.attribute(Constants.ID_ATTR, Constants.CONTROL_C3);
	control_c3.translate(Constants.CONTROL_ARROW_OFFSET[0] + 3 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c4 = new Polygon([...Constants.ARROW]);
	control_c4.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c4.attribute(Constants.ID_ATTR, Constants.CONTROL_C4);
	control_c4.translate(Constants.CONTROL_ARROW_OFFSET[0] + 4 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c5 = new Polygon([...Constants.ARROW]);
	control_c5.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c5.attribute(Constants.ID_ATTR, Constants.CONTROL_C5);
	control_c5.translate(Constants.CONTROL_ARROW_OFFSET[0] + 5 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c6 = new Polygon([...Constants.ARROW]);
	control_c6.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c6.attribute(Constants.ID_ATTR, Constants.CONTROL_C6);
	control_c6.translate(Constants.CONTROL_ARROW_OFFSET[0] + 6 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c7 = new Polygon([...Constants.ARROW]);
	control_c7.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c7.attribute(Constants.ID_ATTR, Constants.CONTROL_C7);
	control_c7.translate(Constants.CONTROL_ARROW_OFFSET[0] + 7 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c8 = new Polygon([...Constants.ARROW]);
	control_c8.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c8.attribute(Constants.ID_ATTR, Constants.CONTROL_C8);
	control_c8.translate(Constants.CONTROL_ARROW_OFFSET[0] + 8 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c9 = new Polygon([...Constants.ARROW]);
	control_c9.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c9.attribute(Constants.ID_ATTR, Constants.CONTROL_C9);
	control_c9.translate(Constants.CONTROL_ARROW_OFFSET[0] + 9 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c10 = new Polygon([...Constants.ARROW]);
	control_c10.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c10.attribute(Constants.ID_ATTR, Constants.CONTROL_C10);
	control_c10.translate(Constants.CONTROL_ARROW_OFFSET[0] + 10 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c11 = new Polygon([...Constants.ARROW]);
	control_c11.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c11.attribute(Constants.ID_ATTR, Constants.CONTROL_C11);
	control_c11.translate(Constants.CONTROL_ARROW_OFFSET[0] + 11 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c12 = new Polygon([...Constants.ARROW]);
	control_c12.attribute(Constants.STYLE_ATTR,Constants.ARROW_STYLE);
	control_c12.attribute(Constants.ID_ATTR, Constants.CONTROL_C12);
	control_c12.translate(Constants.CONTROL_ARROW_OFFSET[0] + 12 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c13 = new Polygon([...Constants.ARROW]);
	control_c13.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c13.attribute(Constants.ID_ATTR, Constants.CONTROL_C13);
	control_c13.translate(Constants.CONTROL_ARROW_OFFSET[0] + 13 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c14 = new Polygon([...Constants.ARROW]);
	control_c14.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c14.attribute(Constants.ID_ATTR, Constants.CONTROL_C14);
	control_c14.translate(Constants.CONTROL_ARROW_OFFSET[0] + 14 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c15 = new Polygon([...Constants.ARROW]);
	control_c15.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c15.attribute(Constants.ID_ATTR, Constants.CONTROL_C15);
	control_c15.translate(Constants.CONTROL_ARROW_OFFSET[0] + 15 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c16 = new Polygon([...Constants.ARROW]);
	control_c16.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c16.attribute(Constants.ID_ATTR, Constants.CONTROL_C16);
	control_c16.translate(Constants.CONTROL_ARROW_OFFSET[0] + 16 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c17 = new Polygon([...Constants.ARROW]);
	control_c17.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c17.attribute(Constants.ID_ATTR, Constants.CONTROL_C17);
	control_c17.translate(Constants.CONTROL_ARROW_OFFSET[0] + 17 * Constants.ARROW_DIST_BETWEEN, Constants.CONTROL_ARROW_OFFSET[1]);

	var control_c18 = new Polygon([...Constants.ARROW]);
	control_c18.attribute(Constants.STYLE_ATTR, Constants.ARROW_STYLE);
	control_c18.attribute(Constants.ID_ATTR, Constants.CONTROL_C18);
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

});
