import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import * as Inst from "./instructions.js";
import {CPU} from "../simulator/cpu.js";

const ADDR = [50, 0];
const VAL = [350/2, -24];

let addr = []
let box = []
let mem = [];
let usrCodeids = [];
let lowCodeids = [];

const BOX_OFFSET = [Constants.CODE_MEM_OFFSET[0] + VAL[0] - 60, Constants.CODE_MEM_OFFSET[1] + VAL[1]];
const BETWEEN_DIST = 38;
				
const UP_ARROW =  [5,0, 10,0, 10, -14, 15, -14, 8,-32, 0,-14, 5,-14];
const DOWN_ARROW =  [5,0, 10,0, 10, 14, 15, 14, 8,32, 0,14, 5,14];

export default class IMEM_SVG {
	constructor() {
		this.imem = new PolygonSVG(Constants.IMEM_ID, Constants.CODE_MEM_POLYGON, Constants.BLOCK_STYLE, Constants.CODE_MEM_OFFSET);

		var asm = cpu.instructions;

		console.log(asm);
		var code = cpu.iMem.registers
		for(var i=0; i<32; i++){
			var bios = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * (i+1)), "imem_addr"+(i), this.pad((i).toString(2), 6), Constants.BLUE_TEXT_STYLE, Constants.CODE_MEM_OFFSET)
			var user = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * (i+1)), "imem_addr"+(i+32), (i+32).toString(2), Constants.BLUE_TEXT_STYLE, Constants.CODE_MEM_OFFSET)
			addr.push(bios)
			addr.push(user)
		}

		for(var i=0; i<32; i++){
			var cur = new PolygonSVG("imem_box"+i, [...Constants.IMEM_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0]-5, BOX_OFFSET[1] + (BETWEEN_DIST * (i+1))])
			box.push(cur)
		}
		console.log(asm.length)
		console.log(code.length);
		if(asm.length>32){
			for(var i=0; i<code.length; i++){
				var opcode = new TextSVG(150, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_opcode", code[i].substring(0,4), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
				if(asm[i][0]=="ADD" || asm[i][0]=="SUB" || asm[i][0]=="MOVE" || asm[i][0]=="CMP"){ //two registers here
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var rem = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(rem);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="LOADI" || asm[i][0]=="SUBI" || asm[i][0]=="ADDI" || asm[i][0]=="LOAD"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="STOREF" || asm[i][0]=="STORE"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="JUMP"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="BRE" || asm[i][0]=="BRNE" || asm[i][0]=="BRG" || asm[i][0]=="BRGE" || asm[i][0]=="INPUTD"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="LOADF"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="SHIFTR" || asm[i][0]=="SHIFTL"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else if(asm[i][0]=="NOOP"){
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg1", code[i].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_reg2", code[i].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i)+"_imm", code[i].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					if(i<32){
						lowCodeids.push("imem_val"+(i)+"_reg1");
						lowCodeids.push("imem_val"+(i)+"_reg2");
						lowCodeids.push("imem_val"+(i)+"_imm");
					}
					else{
						usrCodeids.push("imem_val"+(i)+"_reg1");
						usrCodeids.push("imem_val"+(i)+"_reg2");
						usrCodeids.push("imem_val"+(i)+"_imm");
					}
				}
				else{
					console.log("oops")
				}
				usrCodeids.push("imem_val"+(i+32)+"_opcode");
				mem.push(opcode);
			}
		}
		else{
			for(var i=0; i<32; i++){
				var bios = new TextSVG(242, (BETWEEN_DIST * (i+1)), "imem_val"+(i), code[i], Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
				var opcode = new TextSVG(150, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_opcode", code[i+32].substring(0,4), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
				//var test = new TextSVG(150+86, (BETWEEN_DIST*(i+1)), "imem_test"+(i+32), "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
				if(i<asm.length){
					if(asm[i][0]=="ADD" || asm[i][0]=="SUB" || asm[i][0]=="MOVE" || asm[i][0]=="CMP"){ //two registers here
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var rem = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(rem);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="LOADI" || asm[i][0]=="SUBI" || asm[i][0]=="ADDI" || asm[i][0]=="LOAD"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="STOREF" || asm[i][0]=="STORE"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="JUMP"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="BRE" || asm[i][0]=="BRNE" || asm[i][0]=="BRG" || asm[i][0]=="BRGE" || asm[i][0]=="INPUTD"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="LOADF"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="SHIFTR" || asm[i][0]=="SHIFTL"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
					else if(asm[i][0]=="NOOP"){
						var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
						mem.push(reg1);
						mem.push(reg2);
						mem.push(imm);
						usrCodeids.push("imem_val"+(i+32)+"_reg1");
						usrCodeids.push("imem_val"+(i+32)+"_reg2");
						usrCodeids.push("imem_val"+(i+32)+"_imm");
					}
				}
				else{
					var reg1 = new TextSVG(150+44, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg1", code[i+32].substring(4,6), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var reg2 = new TextSVG(150+44+30, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_reg2", code[i+32].substring(6,8), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					var imm = new  TextSVG(150+44+30+74, (BETWEEN_DIST * (i+1)), "imem_val"+(i+32)+"_imm", code[i+32].substring(8,16), Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
					mem.push(reg1);
					mem.push(reg2);
					mem.push(imm);
					usrCodeids.push("imem_val"+(i+32)+"_reg1");
					usrCodeids.push("imem_val"+(i+32)+"_reg2");
					usrCodeids.push("imem_val"+(i+32)+"_imm");
					
				}
				usrCodeids.push("imem_val"+(i+32)+"_opcode");
				lowCodeids.push("imem_val"+i);
				mem.push(bios);
				mem.push(opcode);
			}
		}
		this.label = new TextSVG(238, 1375, "imem_label", "Instruction Memory", Constants.ARIAL_TEXT_STYLE);
		this.upper_mem_box =  new PolygonSVG('up_box', [0,0, 40,0, 40,45, 0,45] , Constants.THIN_BLOCK_STYLE, [388, 1342.5],this.switchToBios);
		this.up_arrow = new PolygonSVG("up_arrow", [...UP_ARROW], Constants.ARROW_STYLE, [400, 1345 + 37], this.switchToBios);
		this.low_mem_box =  new PolygonSVG('bottom_box', [0,0, 40,0, 40,45, 0,45] , Constants.THIN_BLOCK_STYLE, [438, 1342.5], this.switchToUser);
		this.down_arrow = new PolygonSVG("up_arrow", [...DOWN_ARROW], Constants.ARROW_STYLE, [450, 1345 + 4], this.switchToUser);

	}

    pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	  }

	get_all_nodes() {
		let res=[]
		res.push(this.imem.get_node());

		for(var i=0; i<addr.length; i++){
			res.push(addr[i].get_node());
			//console.log(addr[i].get_node())
		}

		for(var i=0; i<box.length; i++){
			res.push(box[i].get_node())
		}

		for(var i=0; i<mem.length; i++){
			res.push(mem[i].get_node())
		}
		res.push(this.label.get_node());
		res.push(this.upper_mem_box.get_node());
		res.push(this.low_mem_box.get_node());
		res.push(this.up_arrow.get_node());
		res.push(this.down_arrow.get_node());
		return res;
	}
	switchToUser(){
		for(var j=0; j<lowCodeids.length; j++){
			document.getElementById(lowCodeids[j]).style.visibility="hidden";
		}
		for(var i=0; i<usrCodeids.length; i++){
			document.getElementById(usrCodeids[i]).style.visibility="visible";
		}
		for(var i=0; i<32; i++){
			document.getElementById("imem_addr"+i).style.visibility="hidden";
			document.getElementById("imem_addr"+(i+32)).style.visibility="visible";
		}
	}
	switchToBios(){
		for(var j=0; j<lowCodeids.length; j++){
			document.getElementById(lowCodeids[j]).style.visibility="visible";
		}
		for(var i=0; i<usrCodeids.length; i++){
			document.getElementById(usrCodeids[i]).style.visibility="hidden";
		}
		for(var i=0; i<32; i++){
			document.getElementById("imem_addr"+i).style.visibility="visible";
			document.getElementById("imem_addr"+(i+32)).style.visibility="hidden";
		}
	}
}