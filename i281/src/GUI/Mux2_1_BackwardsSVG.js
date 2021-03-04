import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";

export default class Mux2_1SVG {
	constructor(mux_id, true_id, false_id, offset) {
		this.mux_polygon = new PolygonSVG(mux_id, [...Constants.MUX_POLYGON], Constants.BLOCK_STYLE, offset);
		this.false_text = new TextSVG(Constants.MUX_FALSE[0], Constants.MUX_TRUE[1], false_id, Constants.MUX_FALSE_TEXT, Constants.TEXT_STYLE, offset);
		this.true_text = new TextSVG(Constants.MUX_TRUE[0], Constants.MUX_FALSE[1], true_id, Constants.MUX_TRUE_TEXT, Constants.TEXT_STYLE, offset);
		this.selected = 0;
	}
    
	get_all_nodes() {
		let res = [];
		res.push(this.mux_polygon.get_node());
		res.push(this.true_text.get_node());
		res.push(this.false_text.get_node());
		return res;
	}

	get_selected() {
		return this.selected;
	}

	set_selected(val) {
		this.selected = val;
		// TODO: highlight selected value
	}
    

}