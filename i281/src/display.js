import {	MUX_POLYGON,
	ALU_POLYGON,
	FLAGS_POLYGON, 
	CODE_MEM_POLYGON, 
	DATA_MEM_POLYGON, 
	OPCODE_DECODER_POLYGON, 
	CONTROL_POLYGON, 
	REGISTER_FILE_POLYGON, 
	PC_VALUE_POLYGON, 
	PC_UPDATE_POLYGON, 
	ARROW,
	MUX_FALSE,
	MUX_TRUE,
	OPCODE_TPOS,
	MUX0_OFFSET,
	MUX1_OFFSET,
	MUX2_OFFSET,
	MUX3_OFFSET,
	MUX4_OFFSET,
	ALU_OFFSET,
	FLAGS_OFFSET,
	CODE_MEM_OFFSET,
	OPCODE_DECODER_OFFSET,
	CONTROL_OFFSET,
	REGISTER_FILE_OFFSET,
	PC_VALUE_OFFSET,
	PC_UPDATE_OFFSET,
	DATA_MEM_OFFSET,
	READ_A_MUX_OFFSET,
	READ_B_MUX_OFFSET,
	MUX_ALU_WIRE,
	ALU_RESULT_WIRE,
	IMEM_DECODER_WIRE,
	OPCODE_DECODER_CONTROL_WIRE,
	ALU_FLAGS_WIRE,
	READ_A_WIRE,
	READ_B_WIRE,
	PC_UPDATE_MUX_WIRE,
	MUX_PC_VALUE_WIRE,
	MUX_ALU_WIRE_OFFSET,
	ALU_RESULT_WIRE_OFFSET,
	IMEM_DECODER_WIRE_OFFSET,
	OPCODE_DECODER_CONTROL_WIRE_OFFSET,
	ALU_FLAGS_WIRE_OFFSET,
	READ_A_WIRE_OFFSET,
	READ_B_WIRE_OFFSET,
	PC_UPDATE_MUX_FALSE_WIRE_OFFSET,
	PC_UPDATE_MUX_TRUE_WIRE_OFFSET,
	MUX_PC_VALUE_WIRE_OFFSET,
	IMEM_C1_OFFSET,
	MUX_C2_OFFSET,
	PC_VALUE_C3_OFFSET,
	READ_A_C4_OFFSET,
	READ_A_C5_OFFSET,
	READ_B_C6_OFFSET,
	READ_B_C7_OFFSET,
	REG_FILE_C8_OFFSET,
	REG_FILE_C9_OFFSET,
	REG_FILE_C10_OFFSET,
	MUX_C11_OFFSET,
	ALU_C12_OFFSET,
	ALU_C13_OFFSET,
	FLAGS_C14_OFFSET,
	MUX_C15_OFFSET,
	MUX_C16_OFFSET,
	DMEM_C17_OFFSET,
	MUX_C18_OFFSET,
	CONTROL_ARROW_OFFSET,
	ARROW_DIST_BETWEEN,
	MUX_FALSE_TEXT,
	MUX_TRUE_TEXT,
	OPCODE_TEXT,
	BLOCK_STYLE,
	WIRE_STYLE,
	ARROW_STYLE,
	TEXT_STYLE,
	ID_ATTR,
	STYLE_ATTR,
	MUX0_ID,
	MUX0_FALSE_ID,
	MUX0_TRUE_ID,
	MUX1_ID,
	MUX2_ID,
	MUX3_ID,
	ALU_ID} from "./constants.js";


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
	var mux0 = new Polygon([...MUX_POLYGON]);
	mux0.attribute(STYLE_ATTR, BLOCK_STYLE);
	mux0.attribute(ID_ATTR, MUX0_ID);
	mux0.translate(MUX0_OFFSET[0], MUX0_OFFSET[1]);

	var mux0_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux0_false.attribute(STYLE_ATTR, TEXT_STYLE );
	mux0_false.attribute(ID_ATTR, MUX0_FALSE_ID);
	mux0_false.translate(MUX0_OFFSET[0], MUX0_OFFSET[1]);


	var mux0_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux0_true.attribute(STYLE_ATTR, TEXT_STYLE);
	mux0_true.attribute(ID_ATTR, MUX0_TRUE_ID);
	mux0_true.translate(MUX0_OFFSET[0], MUX0_OFFSET[1]);


	var alu = new Polygon(ALU_POLYGON);
	alu.attribute(STYLE_ATTR, BLOCK_STYLE);
	alu.attribute(ID_ATTR, ALU_ID);
	alu.translate(ALU_OFFSET[0],ALU_OFFSET[1]);

	var mux_alu_wire = new Polygon(MUX_ALU_WIRE);
	mux_alu_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	mux_alu_wire.attribute(ID_ATTR, "mux_alu_wire");
	mux_alu_wire.translate(MUX_ALU_WIRE_OFFSET[0], MUX_ALU_WIRE_OFFSET[1]);


	var flags = new Polygon(FLAGS_POLYGON);
	flags.attribute(STYLE_ATTR, BLOCK_STYLE);
	flags.attribute(ID_ATTR, "flags");
	flags.translate(FLAGS_OFFSET[0], FLAGS_OFFSET[1]);

	var flag_text = new Text(70,30, "Flags");
	flag_text.attribute(STYLE_ATTR, TEXT_STYLE);
	flag_text.translate(FLAGS_OFFSET[0], FLAGS_OFFSET[1]);

	// TODO spead these out to be 4 differnt text vals
	var flag_value = new Text(70,70, "0000");
	flag_value.attribute(STYLE_ATTR, TEXT_STYLE);
	flag_value.translate(FLAGS_OFFSET[0], FLAGS_OFFSET[1]);

	var mux1 = new Polygon([...MUX_POLYGON]);
	mux1.attribute(STYLE_ATTR, BLOCK_STYLE);
	mux1.attribute(ID_ATTR, MUX1_ID);
	mux1.translate(MUX1_OFFSET[0], MUX1_OFFSET[1]);

	var mux1_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux1_false.attribute(STYLE_ATTR, TEXT_STYLE );
	mux1_false.attribute(ID_ATTR, "mux1_false");
	mux1_false.translate(MUX1_OFFSET[0], MUX1_OFFSET[1]);


	var mux1_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux1_true.attribute(STYLE_ATTR, TEXT_STYLE);
	mux1_true.attribute(ID_ATTR, "mux1_true");
	mux1_true.translate(MUX1_OFFSET[0], MUX1_OFFSET[1]);

	var mux2 = new Polygon([...MUX_POLYGON]);
	mux2.attribute(STYLE_ATTR, BLOCK_STYLE);
	mux2.attribute(ID_ATTR, MUX2_ID);
	mux2.translate(MUX2_OFFSET[0], MUX2_OFFSET[1]);

	var mux2_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux2_false.attribute(STYLE_ATTR, TEXT_STYLE );
	mux2_false.attribute(ID_ATTR, "mux2_false");
	mux2_false.translate(MUX2_OFFSET[0], MUX2_OFFSET[1]);


	var mux2_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux2_true.attribute(STYLE_ATTR, TEXT_STYLE);
	mux2_true.attribute(ID_ATTR, "mux2_true");
	mux2_true.translate(MUX2_OFFSET[0], MUX2_OFFSET[1]);


	var mux3 = new Polygon([...MUX_POLYGON]);
	mux3.attribute(STYLE_ATTR, BLOCK_STYLE);
	mux3.attribute(ID_ATTR, MUX3_ID);
	mux3.translate(MUX3_OFFSET[0], MUX3_OFFSET[1]);

	var mux3_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux3_false.attribute(STYLE_ATTR, TEXT_STYLE );
	mux3_false.attribute(ID_ATTR, "mux3_false");
	mux3_false.translate(MUX3_OFFSET[0], MUX3_OFFSET[1]);


	var mux3_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux3_true.attribute(STYLE_ATTR, TEXT_STYLE);
	mux3_true.attribute(ID_ATTR, "mux3_true");
	mux3_true.translate(MUX3_OFFSET[0], MUX3_OFFSET[1]);

	var mux4 = new Polygon([...MUX_POLYGON]);
	mux4.attribute(STYLE_ATTR, BLOCK_STYLE);
	mux4.attribute(ID_ATTR, "mux4");
	mux4.translate(MUX4_OFFSET[0], MUX4_OFFSET[1]);

	var mux4_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux4_false.attribute(STYLE_ATTR, TEXT_STYLE );
	mux4_false.attribute(ID_ATTR, "mux4_false");
	mux4_false.translate(MUX4_OFFSET[0], MUX4_OFFSET[1]);


	var mux4_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux4_true.attribute(STYLE_ATTR, TEXT_STYLE);
	mux4_true.attribute(ID_ATTR, "mux4_true");
	mux4_true.translate(MUX4_OFFSET[0], MUX4_OFFSET[1]);

	var code_mem = new Polygon(CODE_MEM_POLYGON);
	code_mem.attribute(STYLE_ATTR, BLOCK_STYLE);
	code_mem.attribute(ID_ATTR, "code_mem");
	code_mem.translate(CODE_MEM_OFFSET[0], CODE_MEM_OFFSET[1]);

	var opcode_decoder = new Polygon(OPCODE_DECODER_POLYGON);
	opcode_decoder.attribute(STYLE_ATTR, BLOCK_STYLE);
	opcode_decoder.attribute(ID_ATTR, "opcode_decoder");
	opcode_decoder.translate(OPCODE_DECODER_OFFSET[0], OPCODE_DECODER_OFFSET[1]);

	var opcode_text = new Text(OPCODE_TPOS[0],OPCODE_TPOS[1], OPCODE_TEXT);
	opcode_text.attribute(STYLE_ATTR, TEXT_STYLE);
	opcode_text.translate(OPCODE_DECODER_OFFSET[0], OPCODE_DECODER_OFFSET[1]);

	var control = new Polygon(CONTROL_POLYGON);
	control.attribute(STYLE_ATTR, BLOCK_STYLE);
	control.attribute(ID_ATTR, "control");
	control.translate(CONTROL_OFFSET[0], CONTROL_OFFSET[1]);

	var control_text = new Text(70,30, "Control");
	control_text.attribute(STYLE_ATTR, TEXT_STYLE);
	control_text.translate(CONTROL_OFFSET[0], CONTROL_OFFSET[1]);

	var reg_file = new Polygon(REGISTER_FILE_POLYGON);
	reg_file.attribute(STYLE_ATTR, BLOCK_STYLE);
	reg_file.attribute(ID_ATTR, "code_mem");
	reg_file.translate(REGISTER_FILE_OFFSET[0], REGISTER_FILE_OFFSET[1]);

	var read_a_mux = new Polygon([...MUX_POLYGON]);
	read_a_mux.attribute(STYLE_ATTR, BLOCK_STYLE);
	read_a_mux.attribute(ID_ATTR, "read_a_mux");
	read_a_mux.translate(READ_A_MUX_OFFSET[0], READ_A_MUX_OFFSET[1]);

	var read_b_mux = new Polygon([...MUX_POLYGON]);
	read_b_mux.attribute(STYLE_ATTR, BLOCK_STYLE);
	read_b_mux.attribute(ID_ATTR, "read_b_mux");
	read_b_mux.translate(READ_B_MUX_OFFSET[0], READ_B_MUX_OFFSET[1]);


	var pc_value = new Polygon(PC_VALUE_POLYGON);
	pc_value.attribute(STYLE_ATTR, BLOCK_STYLE);
	pc_value.attribute(ID_ATTR, "pc_value");
	pc_value.translate(PC_VALUE_OFFSET[0], PC_VALUE_OFFSET[1]);

	var pc_update = new Polygon(PC_UPDATE_POLYGON);
	pc_update.attribute(STYLE_ATTR, BLOCK_STYLE);
	pc_update.attribute(ID_ATTR, "pc_value");
	pc_update.translate(PC_UPDATE_OFFSET[0], PC_UPDATE_OFFSET[1]);

	var dmem = new Polygon(DATA_MEM_POLYGON);
	dmem.attribute(STYLE_ATTR, BLOCK_STYLE);
	dmem.attribute(ID_ATTR, "dmem");
	dmem.translate(DATA_MEM_OFFSET[0], DATA_MEM_OFFSET[1]);

	var alu_result_wire = new Polygon(ALU_RESULT_WIRE);
	alu_result_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	alu_result_wire.attribute(ID_ATTR, "mux_alu_wire");
	alu_result_wire.translate(ALU_RESULT_WIRE_OFFSET[0], ALU_RESULT_WIRE_OFFSET[1]);

	var imem_decoder_wire = new Polygon(IMEM_DECODER_WIRE);
	imem_decoder_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	imem_decoder_wire.attribute(ID_ATTR, "alu_result_wire");
	imem_decoder_wire.translate(IMEM_DECODER_WIRE_OFFSET[0], IMEM_DECODER_WIRE_OFFSET[1]);

	var decoder_control_wire = new Polygon(OPCODE_DECODER_CONTROL_WIRE);
	decoder_control_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	decoder_control_wire.attribute(ID_ATTR, "decoder_control_wire");
	decoder_control_wire.translate(OPCODE_DECODER_CONTROL_WIRE_OFFSET[0], OPCODE_DECODER_CONTROL_WIRE_OFFSET[1]);
	
	var alu_flag_wire = new Polygon(ALU_FLAGS_WIRE);
	alu_flag_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	alu_flag_wire.attribute(ID_ATTR, "alu_flag_wire");
	alu_flag_wire.translate(ALU_FLAGS_WIRE_OFFSET[0], ALU_FLAGS_WIRE_OFFSET[1]);

	var read_a_wire = new Polygon(READ_A_WIRE);
	read_a_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	read_a_wire.attribute(ID_ATTR, "read_a_wire");
	read_a_wire.translate(READ_A_WIRE_OFFSET[0], READ_A_WIRE_OFFSET[1]);

	var read_b_wire = new Polygon(READ_B_WIRE);
	read_b_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	read_b_wire.attribute(ID_ATTR, "read_b_wire");
	read_b_wire.translate(READ_B_WIRE_OFFSET[0], READ_B_WIRE_OFFSET[1]);

	var pc_update_true_wire = new Polygon([...PC_UPDATE_MUX_WIRE]);
	pc_update_true_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	pc_update_true_wire.attribute(ID_ATTR, "pc_update_true_wire");
	pc_update_true_wire.translate(PC_UPDATE_MUX_TRUE_WIRE_OFFSET[0], PC_UPDATE_MUX_TRUE_WIRE_OFFSET[1]);

	var pc_update_false_wire = new Polygon([...PC_UPDATE_MUX_WIRE]);
	pc_update_false_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	pc_update_false_wire.attribute(ID_ATTR, "pc_update_false_wire");
	pc_update_false_wire.translate(PC_UPDATE_MUX_FALSE_WIRE_OFFSET[0], PC_UPDATE_MUX_FALSE_WIRE_OFFSET[1]);

	var mux_pc_val_wire = new Polygon(MUX_PC_VALUE_WIRE);
	mux_pc_val_wire.attribute(STYLE_ATTR, WIRE_STYLE);
	mux_pc_val_wire.attribute(ID_ATTR, "mux_pc_val_wire");
	mux_pc_val_wire.translate(MUX_PC_VALUE_WIRE_OFFSET[0], MUX_PC_VALUE_WIRE_OFFSET[1]);



	var mux_c2 = new Polygon([...ARROW]);
	mux_c2.attribute(STYLE_ATTR, ARROW_STYLE);
	mux_c2.attribute(ID_ATTR, "mux_c2");
	mux_c2.translate(MUX_C2_OFFSET[0], MUX_C2_OFFSET[1] );

	var mux_c11 = new Polygon([...ARROW]);
	mux_c11.attribute(STYLE_ATTR, ARROW_STYLE);
	mux_c11.attribute(ID_ATTR, "mux_c11");
	mux_c11.translate(MUX_C11_OFFSET[0], MUX_C11_OFFSET[1] );

	var mux_c15 = new Polygon([...ARROW]);
	mux_c15.attribute(STYLE_ATTR, ARROW_STYLE);
	mux_c15.attribute(ID_ATTR, "mux_c15");
	mux_c15.translate(MUX_C15_OFFSET[0], MUX_C15_OFFSET[1] );

	var mux_c16 = new Polygon([...ARROW]);
	mux_c16.attribute(STYLE_ATTR, ARROW_STYLE);
	mux_c16.attribute(ID_ATTR, "mux_c16");
	mux_c16.translate(MUX_C16_OFFSET[0], MUX_C16_OFFSET[1] );

	var mux_c18 = new Polygon([...ARROW]);
	mux_c18.attribute(STYLE_ATTR, ARROW_STYLE);
	mux_c18.attribute(ID_ATTR, "mux_c18");
	mux_c18.translate(MUX_C18_OFFSET[0], MUX_C18_OFFSET[1] );

	var pc_value_c3 = new Polygon([...ARROW]);
	pc_value_c3.attribute(STYLE_ATTR, ARROW_STYLE);
	pc_value_c3.attribute(ID_ATTR, "pc_value_c3");
	pc_value_c3.translate(PC_VALUE_C3_OFFSET[0], PC_VALUE_C3_OFFSET[1] );

	var imem_c1 = new Polygon([...ARROW]);
	imem_c1.attribute(STYLE_ATTR, ARROW_STYLE);
	imem_c1.attribute(ID_ATTR, "imem_c1");
	imem_c1.translate(IMEM_C1_OFFSET[0], IMEM_C1_OFFSET[1]);
	
	var read_a_c4 = new Polygon([...ARROW]);
	read_a_c4.attribute(STYLE_ATTR, ARROW_STYLE);
	read_a_c4.attribute(ID_ATTR, "read_a_c4");
	read_a_c4.translate(READ_A_C4_OFFSET[0], READ_A_C4_OFFSET[1]);

	var read_a_c5 = new Polygon([...ARROW]);
	read_a_c5.attribute(STYLE_ATTR, ARROW_STYLE);
	read_a_c5.attribute(ID_ATTR, "read_a_c5");
	read_a_c5.translate(READ_A_C5_OFFSET[0], READ_A_C5_OFFSET[1]);

	var read_b_c6 = new Polygon([...ARROW]);
	read_b_c6.attribute(STYLE_ATTR, ARROW_STYLE);
	read_b_c6.attribute(ID_ATTR, "read_b_c6");
	read_b_c6.translate(READ_B_C6_OFFSET[0], READ_B_C6_OFFSET[1]);

	var read_b_c7 = new Polygon([...ARROW]);
	read_b_c7.attribute(STYLE_ATTR, ARROW_STYLE);
	read_b_c7.attribute(ID_ATTR, "read_b_c7");
	read_b_c7.translate(READ_B_C7_OFFSET[0], READ_B_C7_OFFSET[1]);

	var reg_file_c8 = new Polygon([...ARROW]);
	reg_file_c8.attribute(STYLE_ATTR, ARROW_STYLE);
	reg_file_c8.attribute(ID_ATTR, "reg_file_c8");
	reg_file_c8.translate(REG_FILE_C8_OFFSET[0], REG_FILE_C8_OFFSET[1]);

	var reg_file_c9 = new Polygon([...ARROW]);
	reg_file_c9.attribute(STYLE_ATTR, ARROW_STYLE);
	reg_file_c9.attribute(ID_ATTR, "reg_file_c9");
	reg_file_c9.translate(REG_FILE_C9_OFFSET[0], REG_FILE_C9_OFFSET[1]);

	var reg_file_c10 = new Polygon([...ARROW]);
	reg_file_c10.attribute(STYLE_ATTR, ARROW_STYLE);
	reg_file_c10.attribute(ID_ATTR, "reg_file_c10");
	reg_file_c10.translate(REG_FILE_C10_OFFSET[0], REG_FILE_C10_OFFSET[1]);

	var alu_c12 = new Polygon([...ARROW]);
	alu_c12.attribute(STYLE_ATTR, ARROW_STYLE);
	alu_c12.attribute(ID_ATTR, "alu_c12");
	alu_c12.translate(ALU_C12_OFFSET[0], ALU_C12_OFFSET[1]);

	var alu_c13 = new Polygon([...ARROW]);
	alu_c13.attribute(STYLE_ATTR, ARROW_STYLE);
	alu_c13.attribute(ID_ATTR, "alu_c13");
	alu_c13.translate(ALU_C13_OFFSET[0], ALU_C13_OFFSET[1]);

	var flags_c14 = new Polygon([...ARROW]);
	flags_c14.attribute(STYLE_ATTR, ARROW_STYLE);
	flags_c14.attribute(ID_ATTR, "flags_c14");
	flags_c14.translate(FLAGS_C14_OFFSET[0], FLAGS_C14_OFFSET[1]);

	var dmem_c17 = new Polygon([...ARROW]);
	dmem_c17.attribute(STYLE_ATTR, ARROW_STYLE);
	dmem_c17.attribute(ID_ATTR, "dmem_c17");
	dmem_c17.translate(DMEM_C17_OFFSET[0], DMEM_C17_OFFSET[1]);



	var control_c1 = new Polygon([...ARROW]);
	control_c1.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c1.attribute(ID_ATTR, "control_c1");
	control_c1.translate(CONTROL_ARROW_OFFSET[0] + 1 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c2 = new Polygon([...ARROW]);
	control_c2.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c2.attribute(ID_ATTR, "control_c2");
	control_c2.translate(CONTROL_ARROW_OFFSET[0] + 2 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c3 = new Polygon([...ARROW]);
	control_c3.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c3.attribute(ID_ATTR, "control_c3");
	control_c3.translate(CONTROL_ARROW_OFFSET[0] + 3 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c4 = new Polygon([...ARROW]);
	control_c4.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c4.attribute(ID_ATTR, "control_c4");
	control_c4.translate(CONTROL_ARROW_OFFSET[0] + 4 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c5 = new Polygon([...ARROW]);
	control_c5.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c5.attribute(ID_ATTR, "control_c5");
	control_c5.translate(CONTROL_ARROW_OFFSET[0] + 5 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c6 = new Polygon([...ARROW]);
	control_c6.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c6.attribute(ID_ATTR, "control_c6");
	control_c6.translate(CONTROL_ARROW_OFFSET[0] + 6 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c7 = new Polygon([...ARROW]);
	control_c7.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c7.attribute(ID_ATTR, "control_c7");
	control_c7.translate(CONTROL_ARROW_OFFSET[0] + 7 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c8 = new Polygon([...ARROW]);
	control_c8.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c8.attribute(ID_ATTR, "control_c8");
	control_c8.translate(CONTROL_ARROW_OFFSET[0] + 8 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c9 = new Polygon([...ARROW]);
	control_c9.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c9.attribute(ID_ATTR, "control_c9");
	control_c9.translate(CONTROL_ARROW_OFFSET[0] + 9 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c10 = new Polygon([...ARROW]);
	control_c10.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c10.attribute(ID_ATTR, "control_c10");
	control_c10.translate(CONTROL_ARROW_OFFSET[0] + 10 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c11 = new Polygon([...ARROW]);
	control_c11.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c11.attribute(ID_ATTR, "control_c11");
	control_c11.translate(CONTROL_ARROW_OFFSET[0] + 11 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c12 = new Polygon([...ARROW]);
	control_c12.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c12.attribute(ID_ATTR, "control_c12");
	control_c12.translate(CONTROL_ARROW_OFFSET[0] + 12 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c13 = new Polygon([...ARROW]);
	control_c13.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c13.attribute(ID_ATTR, "control_c13");
	control_c13.translate(CONTROL_ARROW_OFFSET[0] + 13 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c14 = new Polygon([...ARROW]);
	control_c14.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c14.attribute(ID_ATTR, "control_c14");
	control_c14.translate(CONTROL_ARROW_OFFSET[0] + 14 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c15 = new Polygon([...ARROW]);
	control_c15.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c15.attribute(ID_ATTR, "control_c15");
	control_c15.translate(CONTROL_ARROW_OFFSET[0] + 15 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c16 = new Polygon([...ARROW]);
	control_c16.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c16.attribute(ID_ATTR, "control_c16");
	control_c16.translate(CONTROL_ARROW_OFFSET[0] + 16 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c17 = new Polygon([...ARROW]);
	control_c17.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c17.attribute(ID_ATTR, "control_c17");
	control_c17.translate(CONTROL_ARROW_OFFSET[0] + 17 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);

	var control_c18 = new Polygon([...ARROW]);
	control_c18.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c18.attribute(ID_ATTR, "control_c18");
	control_c18.translate(CONTROL_ARROW_OFFSET[0] + 18 * ARROW_DIST_BETWEEN, CONTROL_ARROW_OFFSET[1]);


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
