import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";



const ADDR = [50, 0];
const VAL = [350/2, -24];

const BOX_OFFSET = [Constants.DATA_MEM_OFFSET[0] + VAL[0] - 60, Constants.DATA_MEM_OFFSET[1] + VAL[1]];
const BETWEEN_DIST = 38;

const res = []

export default class DMEM_SVG {
	constructor() {
		this.dmem = new PolygonSVG(Constants.DMEM_ID, Constants.DATA_MEM_POLYGON, Constants.BLOCK_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr0 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 1), Constants.DMEM_ADDR0_ID, "0000", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr1 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 2), Constants.DMEM_ADDR1_ID, "0001", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr2 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 3), Constants.DMEM_ADDR2_ID, "0010", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr3 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 4), Constants.DMEM_ADDR3_ID, "0011", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr4 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 5), Constants.DMEM_ADDR4_ID, "0100", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr5 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 6), Constants.DMEM_ADDR5_ID, "0101", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr6 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 7), Constants.DMEM_ADDR6_ID, "0110", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr7 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 8), Constants.DMEM_ADDR7_ID, "0111", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr8 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 9), Constants.DMEM_ADDR8_ID, "1000", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr9 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 10), Constants.DMEM_ADDR9_ID, "1001", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr10 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 11), Constants.DMEM_ADDR10_ID, "1010", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr11 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 12), Constants.DMEM_ADDR11_ID, "1011", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr12 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 13), Constants.DMEM_ADDR12_ID, "1100", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr13 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 14), Constants.DMEM_ADDR13_ID, "1101", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr14 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 15), Constants.DMEM_ADDR14_ID, "1110", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.addr15 = new TextSVG(ADDR[0], ADDR[1] + (BETWEEN_DIST * 16), Constants.DMEM_ADDR15_ID, "1111", Constants.BLUE_TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val0_box = new PolygonSVG(Constants.DMEM_BOX0_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 1)]);
		this.val1_box = new PolygonSVG(Constants.DMEM_BOX1_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 2)]);
		this.val2_box = new PolygonSVG(Constants.DMEM_BOX2_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 3)]);
		this.val3_box = new PolygonSVG(Constants.DMEM_BOX3_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 4)]);
		this.val4_box = new PolygonSVG(Constants.DMEM_BOX4_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 5)]);
		this.val5_box = new PolygonSVG(Constants.DMEM_BOX5_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 6)]);
		this.val6_box = new PolygonSVG(Constants.DMEM_BOX6_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 7)]);
		this.val7_box = new PolygonSVG(Constants.DMEM_BOX7_ID, [...Constants.REGISTER_BOX],Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 8)]);
		this.val8_box = new PolygonSVG(Constants.DMEM_BOX8_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 9)]);
		this.val9_box = new PolygonSVG(Constants.DMEM_BOX9_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 10)]);
		this.val10_box = new PolygonSVG(Constants.DMEM_BOX10_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 11)]);
		this.val11_box = new PolygonSVG(Constants.DMEM_BOX11_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 12)]);
		this.val12_box = new PolygonSVG(Constants.DMEM_BOX12_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 13)]);
		this.val13_box = new PolygonSVG(Constants.DMEM_BOX13_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 14)]);
		this.val14_box = new PolygonSVG(Constants.DMEM_BOX14_ID, [...Constants.REGISTER_BOX], Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 15)]);
		this.val15_box = new PolygonSVG(Constants.DMEM_BOX15_ID, [...Constants.REGISTER_BOX],Constants.THIN_BLOCK_STYLE, [BOX_OFFSET[0], BOX_OFFSET[1] + (BETWEEN_DIST * 16)]);        
		this.val0 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 1), Constants.DMEM_VAL0_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val1 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 2), Constants.DMEM_VAL1_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val2 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 3), Constants.DMEM_VAL2_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val3 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 4), Constants.DMEM_VAL3_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val4 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 5), Constants.DMEM_VAL4_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val5 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 6), Constants.DMEM_VAL5_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val6 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 7), Constants.DMEM_VAL6_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val7 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 8), Constants.DMEM_VAL7_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val8 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 9), Constants.DMEM_VAL8_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val9 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 10), Constants.DMEM_VAL9_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val10 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 11), Constants.DMEM_VAL10_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val11 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 12), Constants.DMEM_VAL11_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val12 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 13), Constants.DMEM_VAL12_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val13 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 14), Constants.DMEM_VAL13_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val14 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 15), Constants.DMEM_VAL14_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
		this.val15 = new TextSVG(VAL[0]+10, (BETWEEN_DIST * 16), Constants.DMEM_VAL15_ID, "00000000", Constants.TEXT_STYLE, Constants.DATA_MEM_OFFSET);
        
	}
    
	get_all_nodes() {
		let res = [];
		res.push(this.dmem.get_node());
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

		return res;
	}

}