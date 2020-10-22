import * as Constants from "./constants.js";

export default class PolygonSVG {
	constructor(id, points, style) {
		this.id = id;
		this.node = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
		this.node.setAttribute(Constants.ID_ATTR, id);
		this.node.setAttribute(Constants.STYLE_ATTR, style);
		this.point_list = [];
		if(points) {
			points.forEach(val => this.point_list.push(val));
			this.node.setAttribute("points", this.build(this.point_list));
		}
	}
    
	get_node() { return this.node; }
    
	set_attribute(key, val){
		if (val === undefined) return this.node.getAttribute(key);
		this.node.setAttribute(key, val);
	}
    
	set_point(i, x, y) {
		this.point_list[i] = [x, y];
		this.node.setAttribute("points", this.build(this.point_list));
	}

	translate(x, y) {
		this.x += x;
		this.y += y;
		for (var i = 0; i < this.point_list.length - 1; i += 2) {
			this.point_list[i] += x;
			this.point_list[i + 1] +=y ;
		}	
		this.node.setAttribute("points", this.build(this.point_list));

	}
    
	build(arg) {
		var res = [];
		for (let i = 0, l = arg.length; i < l; i++)
			res.push(arg[i] + ",");
		return res.join(" ").slice(0, -1);
	}
}