import {alu} from "./alu.js"
import {registerFile} from "./registerFile.js"
import {multiplexer} from "./mux.js"
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
    
    let rf = new registerFile(2, 4);
    console.log('Register file tests');
    console.log(rf.getRegister(0));
    rf.setRegister(0, 10);
    console.log(rf.getRegister(0));

    let mux = new multiplexer(4);
    console.log('Mux tests');
    console.log(mux.getState());
    console.log(mux.setState(3));
    console.log(mux.getState());
 



    
};

window.compute = compute;