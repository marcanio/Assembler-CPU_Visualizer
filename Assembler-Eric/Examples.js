

function BubbleSort(){
    
    var BB = `.data
    array   BYTE 7 , 3 , 2 , 1 , 6 , 4 , 5 , 8
    last    BYTE 7
    temp    BYTE ?
    .code
   LOADI  A , 0                 
Outer:  LOAD   D , [ last ]             
   LOADI  B , 0                  
   CMP    A , D                  
   BRGE   End             
Inner:  LOAD   D , [ last ]             
            SUB    D , A                  
            CMP    B , D                  
            BRGE   Iinc                  
If:     LOADF  C , [ array + B ]        
            LOADF  D , [ array + B + 1 ]        
            CMP    D , C                  
            BRGE   Jinc
Swap:   STOREF [ array + B ] , D
            STOREF [ array + B + 1 ] , C
Jinc:   ADDI   B , 1                  
            JUMP   Inner
Iinc:   ADDI   A , 1                  
            JUMP   Outer
End:    NOOP`;

   var newText = BB.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
   
}