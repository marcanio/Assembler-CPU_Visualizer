import {alu} from "./alu.js"
import {decoder} from "./decoder.js"

// import $ from '/js/libs/jquery/dist/jquery.js'
// $("btn").on(
//     "click" ,function(){
//                 console.log("hello ");
//                 //         //compute();
//                 //         console.log("Click Click");
//     });   

// (function($){
//     $(document).ready(function(){
     
//     //     $("btn").on("click" ,function(){
//     //         console.log("hello ");
//     //         //         //compute();
//     //         //         console.log("Click Click");
//     //    });        
//     });
// });


export function compute() {
    const inst = document.getElementById("instruction").value;
    console.log(inst);
    let parse_val = inst.split(' ');
    let result =  alu(parseInt(parse_val[1]),parseInt(parse_val[2]),parse_val[0]);
    console.log(result);
    document.getElementById("result").innerText = result +"";

    console.log("Decoder");
    let decode = new decoder(4);
    console.log(decode.getOutput());
    decode.setControl(0x0);
    console.log(decode.getOutput());
};

window.compute = compute;