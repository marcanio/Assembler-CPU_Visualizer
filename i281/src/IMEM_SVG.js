import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
<<<<<<< HEAD
=======
import * as Inst from "./instructions.js"

>>>>>>> kolosik_testing2

const ADDR = [50, 0];
const VAL = [350/2, -24];

<<<<<<< HEAD
=======
let addr = []
let box = []
let mem = [];



>>>>>>> kolosik_testing2
const BOX_OFFSET = [Constants.CODE_MEM_OFFSET[0] + VAL[0] - 60, Constants.CODE_MEM_OFFSET[1] + VAL[1]];
const BETWEEN_DIST = 38;

export default class IMEM_SVG {
	constructor() {
		this.imem = new PolygonSVG(Constants.IMEM_ID, Constants.CODE_MEM_POLYGON, Constants.BLOCK_STYLE, Constants.CODE_MEM_OFFSET);
<<<<<<< HEAD
		this.addr0 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 1), Constants.IMEM_ADDR0_ID, "0000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr1 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 2), Constants.IMEM_ADDR1_ID, "0001", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr2 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 3), Constants.IMEM_ADDR2_ID, "0010", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr3 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 4), Constants.IMEM_ADDR3_ID, "0011", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr4 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 5), Constants.IMEM_ADDR4_ID, "0100", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr5 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 6), Constants.IMEM_ADDR5_ID, "0101", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr6 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 7), Constants.IMEM_ADDR6_ID, "0110", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr7 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 8), Constants.IMEM_ADDR7_ID, "0111", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr8 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 9), Constants.IMEM_ADDR8_ID, "1000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr9 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 10), Constants.IMEM_ADDR9_ID, "1001", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr10 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 11), Constants.IMEM_ADDR10_ID, "1010", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr11 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 12), Constants.IMEM_ADDR11_ID, "1011", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr12 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 13), Constants.IMEM_ADDR12_ID, "1100", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr13 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 14), Constants.IMEM_ADDR13_ID, "1101", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr14 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 15), Constants.IMEM_ADDR14_ID, "1110", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.addr15 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 16), Constants.IMEM_ADDR15_ID, "1111", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
        
		this.val0_box = new PolygonSVG(Constants.IMEM_BOX0_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 1)]);
		this.val1_box = new PolygonSVG(Constants.IMEM_BOX1_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 2)]);
		this.val2_box = new PolygonSVG(Constants.IMEM_BOX2_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 3)]);
		this.val3_box = new PolygonSVG(Constants.IMEM_BOX3_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 4)]);
		this.val4_box = new PolygonSVG(Constants.IMEM_BOX4_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 5)]);
		this.val5_box = new PolygonSVG(Constants.IMEM_BOX5_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 6)]);
		this.val6_box = new PolygonSVG(Constants.IMEM_BOX6_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 7)]);
		this.val7_box = new PolygonSVG(Constants.IMEM_BOX7_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 8)]);
		this.val8_box = new PolygonSVG(Constants.IMEM_BOX8_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 9)]);
		this.val9_box = new PolygonSVG(Constants.IMEM_BOX9_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 10)]);
		this.val10_box = new PolygonSVG(Constants.IMEM_BOX10_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 11)]);
		this.val11_box = new PolygonSVG(Constants.IMEM_BOX11_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 12)]);
		this.val12_box = new PolygonSVG(Constants.IMEM_BOX12_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 13)]);
		this.val13_box = new PolygonSVG(Constants.IMEM_BOX13_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 14)]);
		this.val14_box = new PolygonSVG(Constants.IMEM_BOX14_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 15)]);
		this.val15_box = new PolygonSVG(Constants.IMEM_BOX15_ID, [...Constants.REGISTER_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 16)]);        
        
		this.val0 = new TextSVG(VAL[0], (BETWEEN_DIST * 1), Constants.IMEM_VAL0_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val1 = new TextSVG(VAL[0], (BETWEEN_DIST * 2), Constants.IMEM_VAL1_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val2 = new TextSVG(VAL[0], (BETWEEN_DIST * 3), Constants.IMEM_VAL2_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val3 = new TextSVG(VAL[0], (BETWEEN_DIST * 4), Constants.IMEM_VAL3_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val4 = new TextSVG(VAL[0], (BETWEEN_DIST * 5), Constants.IMEM_VAL4_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val5 = new TextSVG(VAL[0], (BETWEEN_DIST * 6), Constants.IMEM_VAL5_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val6 = new TextSVG(VAL[0], (BETWEEN_DIST * 7), Constants.IMEM_VAL6_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val7 = new TextSVG(VAL[0], (BETWEEN_DIST * 8), Constants.IMEM_VAL7_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val8 = new TextSVG(VAL[0], (BETWEEN_DIST * 9), Constants.IMEM_VAL8_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val9 = new TextSVG(VAL[0], (BETWEEN_DIST * 10), Constants.IMEM_VAL9_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val10 = new TextSVG(VAL[0], (BETWEEN_DIST * 11), Constants.IMEM_VAL10_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val11 = new TextSVG(VAL[0], (BETWEEN_DIST * 12), Constants.IMEM_VAL11_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val12 = new TextSVG(VAL[0], (BETWEEN_DIST * 13), Constants.IMEM_VAL12_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val13 = new TextSVG(VAL[0], (BETWEEN_DIST * 14), Constants.IMEM_VAL13_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val14 = new TextSVG(VAL[0], (BETWEEN_DIST * 15), Constants.IMEM_VAL14_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
		this.val15 = new TextSVG(VAL[0], (BETWEEN_DIST * 16), Constants.IMEM_VAL15_ID, "00000000", Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
	}
    
	get_all_nodes() {
		let res = [];
		res.push(this.imem.get_node());
		res.push(this.addr0.get_node());
		res.push(this.addr1.get_node());
		res.push(this.addr2.get_node());
		res.push(this.addr3.get_node());
		res.push(this.addr4.get_node());
		res.push(this.addr5.get_node());
		res.push(this.addr6.get_node());
		res.push(this.addr7.get_node());
		res.push(this.addr8.get_node());
		res.push(this.addr9.get_node());
		res.push(this.addr10.get_node());
		res.push(this.addr11.get_node());
		res.push(this.addr12.get_node());
		res.push(this.addr13.get_node());
		res.push(this.addr14.get_node());
		res.push(this.addr15.get_node());
		res.push(this.val0_box.get_node());
		res.push(this.val1_box.get_node());
		res.push(this.val2_box.get_node());
		res.push(this.val3_box.get_node());
		res.push(this.val4_box.get_node());
		res.push(this.val5_box.get_node());
		res.push(this.val6_box.get_node());
		res.push(this.val7_box.get_node());
		res.push(this.val8_box.get_node());
		res.push(this.val9_box.get_node());
		res.push(this.val10_box.get_node());
		res.push(this.val11_box.get_node());
		res.push(this.val12_box.get_node());
		res.push(this.val13_box.get_node());
		res.push(this.val14_box.get_node());
		res.push(this.val15_box.get_node());
		res.push(this.val0.get_node());
		res.push(this.val1.get_node());
		res.push(this.val2.get_node());
		res.push(this.val3.get_node());
		res.push(this.val4.get_node());
		res.push(this.val5.get_node());
		res.push(this.val6.get_node());
		res.push(this.val7.get_node());
		res.push(this.val8.get_node());
		res.push(this.val9.get_node());
		res.push(this.val10.get_node());
		res.push(this.val11.get_node());
		res.push(this.val12.get_node());
		res.push(this.val13.get_node());
		res.push(this.val14.get_node());
		res.push(this.val15.get_node());

=======

		for(var i=0; i<Inst.instructions.length; i++){
			var cur = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * (i+1)), "imem_addr"+i, (i+32).toString(2), Constants.BLUE_TEXT_STYLE, Constants.CODE_MEM_OFFSET) 
			addr.push(cur)
		}

		for(var i=0; i<Inst.instructions.length; i++){
			var cur = new PolygonSVG("imem_box"+i, [...Constants.IMEM_BOX], Constants.BLOCK_STYLE, [BOX_OFFSET[0]-20, BOX_OFFSET[1] + (BETWEEN_DIST * (i+1))])
			box.push(cur)
		}
		
		for(var i=0; i<Inst.instructions.length; i++){
			var cur = new TextSVG(220, (BETWEEN_DIST * (i+1)), "imem_val"+i, Inst.instructions[i], Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
			mem.push(cur)
		}
	}
    
	get_all_nodes() {
		let res=[]
		res.push(this.imem.get_node());

		for(var i=0; i<addr.length; i++){
			res.push(addr[i].get_node());
			console.log(addr[i].get_node())
		}

		for(var i=0; i<box.length; i++){
			res.push(box[i].get_node())
		}

		for(var i=0; i<mem.length; i++){
			res.push(mem[i].get_node())
		}
>>>>>>> kolosik_testing2
		return res;
	}

}