import * as Constants from "./constants.js";
import TextSVG from "./TextSVG.js";
import PolygonSVG from "./PolygonSVG.js";
import PathSVG from "./PathSVG.js";
import * as Instructions from "./instructions.js"

var instructions = Instructions.instructions

var svg = document.getElementById("canvas")

for(var i=0; i<instructions.length; i++){
    var cur = "inst"+i
    var inst = new TextSVG(120, 30+30*i, cur, instructions[i], Constants.TEXT_STYLE, Constants.CODE_MEM_OFFSET);
    svg.appendChild(inst.node)
    console.log(inst.id)
}
