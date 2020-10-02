var withComments;
var withoutComments = new Array();
var branchDest = new Map();
var lineNumber =0;

var instructionSet = ["NOOP","INPUTC","INPUTCF","INPUTD","INPUTDF",
"MOVE","LOADI","LOADP","ADD","ADDI","SUB","SUBI",
"LOAD","LOADF","STORE","STOREF",
"SHIFTL","SHIFTR","CMP","JUMP","BRE","BRNE","BRG","BRGE"];


window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
		
				var reader = new FileReader();
                //Pass each line to the remove comments function
				reader.onload = function(e) {
                    fileDisplayArea.innerText = reader.result;
                    let lines = this.result.split('\n');
                    removeComments(lines);
				}

                reader.readAsText(file);	
		});
}
/**
 * Finds all the data after .data and passes it to be proccessed
 */
function findDataStart(code){
    for(var i =0; i< code.length; i++){
        lineNumber++;
        var lineRead = code[i];
        if(lineRead.localeCompare(".data") == 0){
            parseDataSegment(code);
            break;
        }else{
            alert("Expecting (.data) ");
        }
    }
}
/**
 * Parse the code after data
 */
function parseDataSegment(code){
    for(var i=0; i < code.length; i++){
        lineNumber++;
        var asmLine = code[i];
        if(asmLine.localeCompare(".code") == 0){
            break;
        }else if(asmLine.localeCompare(".data") == 0){
            continue;
        }
        assignDataVariable(code[i]);

    }
}
/**
 * Setting up the varibles of data
 * 
 */
function assignDataVariable(code){
    var lineParts = code.split(" ");    //Break up the instrcution and get rid of white space
    lineParts = removeEmpty(lineParts);
    
    

}

function fib(){
    var i = 0;
    var temp = 0;

    
    for(var c =0; c < 100; c++){
        temp = i;
        if(c = 1){
            temp +=1;
        }
        console.log(i + ", ");
       i = temp +i;
    }
    
}
/*
 * All lines after .code should start with a jump label (EX:) or opcode.
 * This method creates jump labels while simultaneously checking for incorrect tokens.
 * 
 */
function getJumps(withoutComments){
    var lineCount =0;
    var codeRead = false;
    var toReturn = new Array();
    var count =0;
    for(var i=0; i< withoutComments.length; i++){
        var line = withoutComments[i];
        if(line.includes(".code")){
            lineCount =-1;
            codeRead = true;
            toReturn[count] =".code";
            
        }
        else if(line.includes(":")){
            //Water is warm
            branchDest.set(line.substring(0,line.indexOf(":")),lineCount);
            toReturn[count] = line.substring(line.indexOf(":")+1, line.length);
            
        }
        else{
            if(codeRead){
                var findOpCode = line.split(" ");
                findOpCode = removeEmpty(findOpCode); //To remove blank spots in array
                var validOpCode = false;
                var validString = false;
                var firstToken = "";
                for(var j=0; j<findOpCode.length; j++){
                    firstToken = findOpCode[j];
                    validString = true;
                    for(var k = 0; k < instructionSet.length; k++){
                        if(firstToken.localeCompare(instructionSet[k]) == 0){
                            validOpCode = true;
                            break;
                        }
                    }
                }
                if(!validOpCode && validString){
                    window.alert("Did you forget a colon(:) after your label? Incorrect token \""+ firstToken + "\" \n at line \"" + line + "\"");
                    exit();
                }
            }
            toReturn[i] = line;
        }
        count ++;
        lineCount++;
        
    }
    return toReturn;
}
function removeEmpty(instruction){
    var count =0;
    var newInstruction = new Array();

    for(var i=0; i < instruction.length;i++){
        if(instruction[i] != ""){
            newInstruction[count] = instruction[i];
            count++;
        }
    }
    return newInstruction;
}
/**
 * Logic to remove comments in the array with all the code 
 * @param {} lines 
 */
function removeComments(lines){
    
    for(var line =0; line< lines.length; line++){
        var curString = lines[line];
        lines[line] = lines[line].replace("," , " , ");
		lines[line] = lines[line].replace("]" , " ] ");
		lines[line] = lines[line].replace("[" , " [ ");
		lines[line] = lines[line].replace("}" , " } ");
		lines[line] = lines[line].replace("{" , " { ");
		lines[line] = lines[line].replace("+" , " + ");
        lines[line] = lines[line].replace("-" , " - ");
        
        if (curString.startsWith(";")){
            lines[line] = "";
        }else if(curString.includes(";")){
            lines[line] = lines[line].substring(0,lines[line].indexOf(";"));
        }
        //console.log(lines[line]);
    }
    withComments =lines;
}
/**
 * Place the code inside "withoutComments" That no longer has comments for the file
 */
function formatFile(){
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    fileDisplayArea.innerText = "";
    var count = 0;
    //Remove white spaces
    for(var i=0; i < withComments.length;i++){
        if(withComments[i] != ""){
            withoutComments[count] = withComments[i];
            count++;
        }
    }
    //console.log(withoutComments);
    console.log(getJumps(withoutComments));

    withoutComments = getJumps(withoutComments);
    findDataStart(withoutComments);

    for(var line =0; line <withoutComments.length; line++){
        fileDisplayArea.innerText += withoutComments[line] + "\n";
    }

}
function formatInput(){
    let inputP = document.getElementById("textInput");
    let lines =  inputP.innerText.split("\n");
    var count =0;
    removeComments(lines);
    inputP.innerText ="";
    //remove white spaces
    for(var i=0; i < withComments.length;i++){
        if(withComments[i] != ""){
            withoutComments[count] = withComments[i];
            count++;
        }
    }
    for(var line =0; line < withoutComments.length; line++){
        inputP.innerText += withoutComments[line] + "\n";
    }

}

/**
 * Choice to show the file open options
 */
function ShowFile(){
    let T = document.getElementById("fileDiv");
    let F = document.getElementById("inputDiv");
    T.style.display ="block";
    F.style.display ="none";
}
/**
 * Choice to show the input box
 */
function ShowTextbox(){
    let F = document.getElementById("inputDiv");
    let T = document.getElementById("fileDiv");
    F.style.display ="block";
    T.style.display = "none";
}
/**
 * Used by the input box to see a preview of what you will compile
 */
function fillP(){
    let input = document.getElementById("textArea");
    let paragraph = document.getElementById("textInput");
    paragraph.innerText = input.value;

}
//TODO - Parse only the data
function getData(){ 
}
