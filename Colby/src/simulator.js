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
	const OPCODE_DECODER_POLYGON = [0,0, 200,0, 200,100, 0,100];
	const CONTROL_POLYGON = [0,0, 550,0, 550,100, 0,100];
	const REGISTER_FILE_POLYGON = [0,0, 350,0, 350,300, 0,300];




	const MUX_FALSE = [20, 60];
	const MUX_TRUE = [20, 140];
	const OPCODE_TPOS = [100, 30];


	const MUX0_OFFSET = [900 , 650];
	const MUX1_OFFSET = [1250, 600];
	const MUX2_OFFSET = [1250, 850];
	const MUX3_OFFSET = [1500, 1050];
	const MUX4_OFFSET = [1150 , 150];

	const ALU_OFFSET = [1000, 500];
	const FLAGS_OFFSET = [1300, 500];
	const CODE_MEM_OFFSET = [25, 25];
	const OPCODE_DECODER_OFFSET = [500, 25];
	const CONTROL_OFFSET = [900, 25];
	const REGISTER_FILE_OFFSET = [500, 500];


	const MUX_FALSE_TEXT = "0";
	const MUX_TRUE_TEXT = "1";
	const OPCODE_TEXT = "Opcode Decoder";


	const BLOCK_STYLE = " fill:white; stroke:black; stroke-width:2px;";
	const TEXT_STYLE = "font-family: Arial, Helvetica, sans-serif; font-size: 24px; text-anchor:middle; fill:black;";
	// TODO mask this in a mux thing
	var mux0 = new Polygon([...MUX_POLYGON]);
	mux0.attribute("style", "fill:white; stroke:black; stroke-width:2px;");
	mux0.attribute("id", "mux0");
	mux0.translate(MUX0_OFFSET[0], MUX0_OFFSET[1]);

	var mux0_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux0_false.attribute("style", TEXT_STYLE );
	mux0_false.attribute("id", "mux0_false");
	mux0_false.translate(MUX0_OFFSET[0], MUX0_OFFSET[1]);


	var mux0_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux0_true.attribute("style", TEXT_STYLE);
	mux0_true.attribute("id", "mux0_true");
	mux0_true.translate(MUX0_OFFSET[0], MUX0_OFFSET[1]);


	var alu = new Polygon(ALU_POLYGON);
	alu.attribute("style", BLOCK_STYLE);
	alu.attribute("id", "alu");
	alu.translate(ALU_OFFSET[0],ALU_OFFSET[1]);

	var mux_alu_wire = new Polygon([50, 350, 100, 350]);
	mux_alu_wire.attribute("style", BLOCK_STYLE);

	var flags = new Polygon(FLAGS_POLYGON);
	flags.attribute("style", BLOCK_STYLE);
	flags.attribute("id", "flags");
	flags.translate(FLAGS_OFFSET[0], FLAGS_OFFSET[1]);

	var flag_text = new Text(70,30, "Flags");
	flag_text.attribute("style", TEXT_STYLE);
	flag_text.translate(FLAGS_OFFSET[0], FLAGS_OFFSET[1]);

	// TODO spead these out to be 4 differnt text vals
	var flag_value = new Text(70,70, "0000");
	flag_value.attribute("style", TEXT_STYLE);
	flag_value.translate(FLAGS_OFFSET[0], FLAGS_OFFSET[1]);

	var mux1 = new Polygon([...MUX_POLYGON]);
	mux1.attribute("style", BLOCK_STYLE);
	mux1.attribute("id", "mux1");
	mux1.translate(MUX1_OFFSET[0], MUX1_OFFSET[1]);

	var mux1_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux1_false.attribute("style", TEXT_STYLE );
	mux1_false.attribute("id", "mux1_false");
	mux1_false.translate(MUX1_OFFSET[0], MUX1_OFFSET[1]);


	var mux1_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux1_true.attribute("style", TEXT_STYLE);
	mux1_true.attribute("id", "mux1_true");
	mux1_true.translate(MUX1_OFFSET[0], MUX1_OFFSET[1]);

	var mux2 = new Polygon([...MUX_POLYGON]);
	mux2.attribute("style", "fill:white; stroke:black; stroke-width:2px;");
	mux2.attribute("id", "mux2");
	mux2.translate(MUX2_OFFSET[0], MUX2_OFFSET[1]);

	var mux2_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux2_false.attribute("style", TEXT_STYLE );
	mux2_false.attribute("id", "mux2_false");
	mux2_false.translate(MUX2_OFFSET[0], MUX2_OFFSET[1]);


	var mux2_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux2_true.attribute("style", TEXT_STYLE);
	mux2_true.attribute("id", "mux2_true");
	mux2_true.translate(MUX2_OFFSET[0], MUX2_OFFSET[1]);


	var mux3 = new Polygon([...MUX_POLYGON]);
	mux3.attribute("style", BLOCK_STYLE);
	mux3.attribute("id", "mux3");
	mux3.translate(MUX3_OFFSET[0], MUX3_OFFSET[1]);

	var mux3_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux3_false.attribute("style", TEXT_STYLE );
	mux3_false.attribute("id", "mux3_false");
	mux3_false.translate(MUX3_OFFSET[0], MUX3_OFFSET[1]);


	var mux3_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux3_true.attribute("style", TEXT_STYLE);
	mux3_true.attribute("id", "mux3_true");
	mux3_true.translate(MUX3_OFFSET[0], MUX3_OFFSET[1]);

	var mux4 = new Polygon([...MUX_POLYGON]);
	mux4.attribute("style", BLOCK_STYLE);
	mux4.attribute("id", "mux4");
	mux4.translate(MUX4_OFFSET[0], MUX4_OFFSET[1]);

	var mux4_false = new Text(MUX_FALSE[0], MUX_FALSE[1], MUX_FALSE_TEXT);
	mux4_false.attribute("style", TEXT_STYLE );
	mux4_false.attribute("id", "mux4_false");
	mux4_false.translate(MUX4_OFFSET[0], MUX4_OFFSET[1]);


	var mux4_true = new Text(MUX_TRUE[0], MUX_TRUE[1], MUX_TRUE_TEXT);
	mux4_true.attribute("style", TEXT_STYLE);
	mux4_true.attribute("id", "mux4_true");
	mux4_true.translate(MUX4_OFFSET[0], MUX4_OFFSET[1]);

	var code_mem = new Polygon(CODE_MEM_POLYGON);
	code_mem.attribute("style", BLOCK_STYLE);
	code_mem.attribute("id", "code_mem");
	code_mem.translate(CODE_MEM_OFFSET[0], CODE_MEM_OFFSET[1]);

	var opcode_decoder = new Polygon(OPCODE_DECODER_POLYGON);
	opcode_decoder.attribute("style", BLOCK_STYLE);
	opcode_decoder.attribute("id", "opcode_decoder");
	opcode_decoder.translate(OPCODE_DECODER_OFFSET[0], OPCODE_DECODER_OFFSET[1]);

	var opcode_text = new Text(OPCODE_TPOS[0],OPCODE_TPOS[1], OPCODE_TEXT);
	opcode_text.attribute("style", TEXT_STYLE);
	opcode_text.translate(OPCODE_DECODER_OFFSET[0], OPCODE_DECODER_OFFSET[1]);

	var control = new Polygon(CONTROL_POLYGON);
	control.attribute("style", BLOCK_STYLE);
	control.attribute("id", "control");
	control.translate(CONTROL_OFFSET[0], CONTROL_OFFSET[1]);

	var control_text = new Text(70,30, "Control");
	control_text.attribute("style", TEXT_STYLE);
	control_text.translate(CONTROL_OFFSET[0], CONTROL_OFFSET[1]);

	var reg_file = new Polygon(REGISTER_FILE_POLYGON);
	reg_file.attribute("style", BLOCK_STYLE);
	reg_file.attribute("id", "code_mem");
	reg_file.translate(REGISTER_FILE_OFFSET[0], REGISTER_FILE_OFFSET[1]);



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



});
