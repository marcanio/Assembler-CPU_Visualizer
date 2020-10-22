import * as Constants from "./constants.js";

export default class TextSVG {
	constructor(x, y, id, txt_val, style) {
		this.x = x;
		this.y = y;
		this.id = id;
		this.txt_val = txt_val;
		this.node = document.createElementNS("http://www.w3.org/2000/svg", "text");
		this.node.setAttribute("x", x);	
		this.node.setAttribute("y", y);
		this.node.appendChild(document.createTextNode(txt_val));
		this.node.setAttribute(Constants.ID_ATTR, id);
		this.node.setAttribute(Constants.STYLE_ATTR, style);
	}
    
	get_node () { return this.node; }
    
	set_attribute(key, val){
		if (val === undefined) return this.node.getAttribute(key);
		this.node.setAttribute(key, val);
	}
    
	set_point(x, y) {
		this.x = x;
		this.y = y;
		this.node.setAttributeNS(null,"x", x);	
		this.node.setAttributeNS(null,"y", y);
	}

	translate(x, y) {
		this.x += x;
		this.y += y;
		this.node.setAttributeNS(null,"x", this.x);	
		this.node.setAttributeNS(null,"y", this.y);		

	}
}