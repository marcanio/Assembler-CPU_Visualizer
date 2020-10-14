import {alu} from "./alu.js";

function init() {
	const btn = document.getElementById("btn");
	btn.onclick = compute;
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

export function compute() {
	const inst = document.getElementById("instruction").value;
	console.log(inst);
	let parse_val = inst.split(" ");
	let result =  alu(parseInt(parse_val[1]),parseInt(parse_val[2]),parse_val[0]);
	console.log(result);
}

window.addEventListener("load", function() {
	init();
	const MUX_POLYGON = [0,0, 50,30, 50,170, 0,200];
	const ALU_POLYGON = [0,0, 100,75, 100,225, 0,300, 0,200, 25,150, 0,100 ];
	const FLAGS_POLYGON = [0,0, 150,0, 150,100, 0,100];
	const CODE_MEM_POLYGON = [0,0, 350,0, 350,450, 0,450];
	const DATA_MEM_POLYGON = [0,0, 350,0, 350,450, 0,450];
	const OPCODE_DECODER_POLYGON = [0,0, 200,0, 200,100, 0,100];
	const CONTROL_POLYGON = [0,0, 550,0, 550,100, 0,100];
	const REGISTER_FILE_POLYGON = [0,0, 350,0, 350,300, 0,300];
	const PC_VALUE_POLYGON = [0,0, 200,0, 200,150, 0,150];
	const PC_UPDATE_POLYGON = [0,0, 200,0, 200,100, 0,100];
	const ARROW = [5,0, 10,0, 10, 40, 15, 40, 7.5,50, 0,40, 5,40];

	const MUX_ALU_WIRE = [0, 0, 50, 0];
	const ALU_RESULT_WIRE = [0, 0, 150, 0];
	const IMEM_DECODER_WIRE = [0, 0, 125, 0];
	const OPCODE_DECODER_CONTROL_WIRE = [0, 0, 200, 0];
	const ALU_FLAGS_WIRE = [0, 0, 200, -25];
	const READ_A_WIRE = [0, 0, 150, 0];
	const READ_B_WIRE = [0, 0, 50, 0];



	const MUX_FALSE = [20, 60];
	const MUX_TRUE = [20, 140];
	const OPCODE_TPOS = [100, 30];


	const MUX0_OFFSET = [900 , 650];
	const MUX1_OFFSET = [1250, 600];
	const MUX2_OFFSET = [1250, 850];
	const MUX3_OFFSET = [2000, 800];
	const MUX4_OFFSET = [500 , 1050];

	const ALU_OFFSET = [1000, 500];
	const FLAGS_OFFSET = [1300, 500];
	const CODE_MEM_OFFSET = [25, 25];
	const OPCODE_DECODER_OFFSET = [500, 25];
	const CONTROL_OFFSET = [900, 25];
	const REGISTER_FILE_OFFSET = [500, 500];
	const PC_VALUE_OFFSET = [700, 1050];
	const PC_UPDATE_OFFSET = [200, 1050];
	const DATA_MEM_OFFSET = [1400, 900];

	const MUX_ALU_WIRE_OFFSET = [950, 750];
	const ALU_RESULT_WIRE_OFFSET = [1100, 650];
	const IMEM_DECODER_WIRE_OFFSET = [375, 50];
	const OPCODE_DECODER_CONTROL_WIRE_OFFSET = [700, 50];
	const ALU_FLAGS_WIRE_OFFSET = [1100, 600];
	const READ_A_WIRE_OFFSET = [850, 550];
	const READ_B_WIRE_OFFSET = [850, 700];


	const CONTROL_ARROW_OFFSET = [900, 125];





	const MUX_FALSE_TEXT = "0";
	const MUX_TRUE_TEXT = "1";
	const OPCODE_TEXT = "Opcode Decoder";


	const BLOCK_STYLE = " fill:white; stroke:black; stroke-width:2px;";
	const ARROW_STYLE = " fill:black; stroke:black; stroke-width:1px;";
	const TEXT_STYLE = "font-family: Arial, Helvetica, sans-serif; font-size: 24px; text-anchor:middle; fill:black;";

	const ID_ATTR = "id";
	const STYLE_ATTR = "style";
	// TODO create id tags for all components
	const MUX0_ID = "mux0";
	const MUX0_FALSE_ID = "mux0_false";
	const MUX0_TRUE_ID = "mux0_true";
	const MUX1_ID = "mux1";
	const MUX2_ID = "mux2";
	const MUX3_ID = "mux3";
	const ALU_ID = "alu";


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
	alu_result_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	alu_result_wire.attribute(ID_ATTR, "mux_alu_wire");
	alu_result_wire.translate(ALU_RESULT_WIRE_OFFSET[0], ALU_RESULT_WIRE_OFFSET[1]);

	var imem_decoder_wire = new Polygon(IMEM_DECODER_WIRE);
	imem_decoder_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	imem_decoder_wire.attribute(ID_ATTR, "alu_result_wire");
	imem_decoder_wire.translate(IMEM_DECODER_WIRE_OFFSET[0], IMEM_DECODER_WIRE_OFFSET[1]);

	var decoder_control_wire = new Polygon(OPCODE_DECODER_CONTROL_WIRE);
	decoder_control_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	decoder_control_wire.attribute(ID_ATTR, "decoder_control_wire");
	decoder_control_wire.translate(OPCODE_DECODER_CONTROL_WIRE_OFFSET[0], OPCODE_DECODER_CONTROL_WIRE_OFFSET[1]);
	
	var alu_flag_wire = new Polygon(ALU_FLAGS_WIRE);
	alu_flag_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	alu_flag_wire.attribute(ID_ATTR, "alu_flag_wire");
	alu_flag_wire.translate(ALU_FLAGS_WIRE_OFFSET[0], ALU_FLAGS_WIRE_OFFSET[1]);

	var read_a_wire = new Polygon(READ_A_WIRE);
	read_a_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	read_a_wire.attribute(ID_ATTR, "read_a_wire");
	read_a_wire.translate(READ_A_WIRE_OFFSET[0], READ_A_WIRE_OFFSET[1]);

	var read_b_wire = new Polygon(READ_B_WIRE);
	read_b_wire.attribute(STYLE_ATTR, BLOCK_STYLE);
	read_b_wire.attribute(ID_ATTR, "read_b_wire");
	read_b_wire.translate(READ_B_WIRE_OFFSET[0], READ_B_WIRE_OFFSET[1]);

	var mux_c2 = new Polygon([...ARROW]);
	mux_c2.attribute(STYLE_ATTR, ARROW_STYLE);
	mux_c2.attribute(ID_ATTR, "mux_c2");
	mux_c2.translate(MUX0_OFFSET[0] + 25, MUX0_OFFSET[1] - 40);

	var control_c1 = new Polygon([...ARROW]);
	control_c1.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c1.attribute(ID_ATTR, "control_c1");
	control_c1.translate(CONTROL_ARROW_OFFSET[0] + 1 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c2 = new Polygon([...ARROW]);
	control_c2.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c2.attribute(ID_ATTR, "control_c2");
	control_c2.translate(CONTROL_ARROW_OFFSET[0] + 2 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c3 = new Polygon([...ARROW]);
	control_c3.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c3.attribute(ID_ATTR, "control_c3");
	control_c3.translate(CONTROL_ARROW_OFFSET[0] + 3 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c4 = new Polygon([...ARROW]);
	control_c4.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c4.attribute(ID_ATTR, "control_c4");
	control_c4.translate(CONTROL_ARROW_OFFSET[0] + 4 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c5 = new Polygon([...ARROW]);
	control_c5.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c5.attribute(ID_ATTR, "control_c5");
	control_c5.translate(CONTROL_ARROW_OFFSET[0] + 5 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c6 = new Polygon([...ARROW]);
	control_c6.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c6.attribute(ID_ATTR, "control_c6");
	control_c6.translate(CONTROL_ARROW_OFFSET[0] + 6 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c7 = new Polygon([...ARROW]);
	control_c7.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c7.attribute(ID_ATTR, "control_c7");
	control_c7.translate(CONTROL_ARROW_OFFSET[0] + 7 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c8 = new Polygon([...ARROW]);
	control_c8.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c8.attribute(ID_ATTR, "control_c8");
	control_c8.translate(CONTROL_ARROW_OFFSET[0] + 8 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c9 = new Polygon([...ARROW]);
	control_c9.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c9.attribute(ID_ATTR, "control_c9");
	control_c9.translate(CONTROL_ARROW_OFFSET[0] + 9 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c10 = new Polygon([...ARROW]);
	control_c10.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c10.attribute(ID_ATTR, "control_c10");
	control_c10.translate(CONTROL_ARROW_OFFSET[0] + 10 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c11 = new Polygon([...ARROW]);
	control_c11.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c11.attribute(ID_ATTR, "control_c11");
	control_c11.translate(CONTROL_ARROW_OFFSET[0] + 11 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c12 = new Polygon([...ARROW]);
	control_c12.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c12.attribute(ID_ATTR, "control_c12");
	control_c12.translate(CONTROL_ARROW_OFFSET[0] + 12 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c13 = new Polygon([...ARROW]);
	control_c13.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c13.attribute(ID_ATTR, "control_c13");
	control_c13.translate(CONTROL_ARROW_OFFSET[0] + 13 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c14 = new Polygon([...ARROW]);
	control_c14.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c14.attribute(ID_ATTR, "control_c14");
	control_c14.translate(CONTROL_ARROW_OFFSET[0] + 14 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c15 = new Polygon([...ARROW]);
	control_c15.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c15.attribute(ID_ATTR, "control_c15");
	control_c15.translate(CONTROL_ARROW_OFFSET[0] + 15 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c16 = new Polygon([...ARROW]);
	control_c16.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c16.attribute(ID_ATTR, "control_c16");
	control_c16.translate(CONTROL_ARROW_OFFSET[0] + 16 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c17 = new Polygon([...ARROW]);
	control_c17.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c17.attribute(ID_ATTR, "control_c17");
	control_c17.translate(CONTROL_ARROW_OFFSET[0] + 17 * 27, CONTROL_ARROW_OFFSET[1]);

	var control_c18 = new Polygon([...ARROW]);
	control_c18.attribute(STYLE_ATTR, ARROW_STYLE);
	control_c18.attribute(ID_ATTR, "control_c18");
	control_c18.translate(CONTROL_ARROW_OFFSET[0] + 18 * 27, CONTROL_ARROW_OFFSET[1]);


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
	svg.appendChild(pc_value.node);
	svg.appendChild(pc_update.node);
	svg.appendChild(dmem.node);
	svg.appendChild(alu_result_wire.node);
	svg.appendChild(imem_decoder_wire.node);
	svg.appendChild(decoder_control_wire.node);
	svg.appendChild(alu_flag_wire.node);
	svg.appendChild(read_a_wire.node);
	svg.appendChild(read_b_wire.node);
	svg.appendChild(mux_c2.node);
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





});
