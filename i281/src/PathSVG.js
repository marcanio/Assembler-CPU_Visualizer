import * as Constants from "./constants.js";

export default class PathSVG {
	constructor(id, path, style) {
		this.id = id;
		this.node = document.createElementNS("http://www.w3.org/2000/svg", "path");
		this.node.setAttribute(Constants.ID_ATTR, id);
		this.node.setAttribute(Constants.STYLE_ATTR, style);
		if(path)
			this.node.setAttribute("d", this.build(path));
	}
    
	get_node() { return this.node; }
    
	set_attribute(key, val){
		if (val === undefined) return this.node.getAttribute(key);
		this.node.setAttribute(key, val);
	}
    
	set_point() {
		throw "Not Implemented";
	}

	translate() {
		throw "Not Implemented";
	}
    
	build(arg) {
		var res = "";
		for (let i = 0, l = arg.length; i < l; i++)
			res = res.concat(arg[i] + " ");
		return res;
	}
}