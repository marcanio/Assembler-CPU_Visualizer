
function Arithmetic1(){
   let A1 =`.data
   x        BYTE        2
   z        BYTE        ?
   .code
   LOAD  A, [x]
   MOVE  C, A        ; z=x;
   ADDI  C, 3        ; z+=3;
   STORE [z], C      ; update the memory for z`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function Arithmetic2(){
   let A1 =`.data
   x        BYTE        2
   y        BYTE        3
   z        BYTE        ?
   .code
           LOAD  A, [x]
           LOAD  B, [y]
           MOVE  C, A        ; z=x;
           ADD   C, B        ; z+=y;
           STORE [z], C`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function Multiplication(){
   let A1 =`.data
   x        BYTE        3
   z        BYTE        ?
   .code
           LOAD    A, [x]
           MOVE    C, A        ; z=x;
           MOVE    B, A        ; B=x;
           SHIFTL  B           ; B=2x
           SHIFTL  B           ; B=4x
           ADD     C, B        ; C=4x+x
           STORE   [z], C      ; update the memory for z`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}




//Sorting Algorithms

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

   let newText = BB.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
   
}

function InsertionSort(){
   var IS =`.data
   array    BYTE    2, 3, 4, 1
   N        BYTE    4
.code
               LOADI  A, 1              ; i = 1
For:        LOAD   D, [N]            ; D <- N
               CMP    A, D              ; i < N ?
         BRGE   End
               MOVE   B, A              ; j = i             
               LOADF  C, [array + A]    ; INS = array[i]
While:      LOADI  D, 0              ; D <- 0
               CMP    D, B              ; 0 < j ?
               BRGE   Insertion         ; if no, go to Insertion
               LOADF  D, [array+B-1]    ; D <- array[j-1]
               CMP    D, C              ; array[j-1] < INS ?
               BRGE   Insertion         ; if no, go to Insertion
Shuffle:    STOREF [array + B], D    ; array[j] = array[j-1]
               SUBI   B, 1              ; j--
               JUMP   While             ; repeat the while loop
Insertion:  STOREF [array + B], C    ; array[j] = INS
Iinc:       ADDI   A, 1              ; i++
               JUMP   For               ; repeat the for loop
End:        NOOP`;

 let newText = IS.split("\n");
 removeComments(newText);
 document.getElementById("fileDiv").style.display = "block";
 mainMethod();

}

function SelectionSort(){
   let SS=`.data
   array   BYTE    2, 3, 4, 1
   last    BYTE    3
   i       BYTE    ?
.code
           LOADI  A, 0               ; i = 0
Outer:  STORE  [i], A             ; store i to memory
           LOAD   D, [last]          ; D <- last
           CMP    A, D               ; is i less than last ?
           BRGE   End                ; if no exit the outer loop and the program
           MOVE   C, A               ; maxIndex = i
           MOVE   B, A               ; j = i             
           ADDI   B, 1               ; j++ (the effect of the last two lines: j=i+1)
Inner:  LOAD   D, [last]          ; D <- last
           CMP    B, D               ; j <= last ?
           BRG    Swap               ; if no, jump to the swap
If:     LOADF  A, [array + B]     ; A <- array[j]
           LOADF  D, [array + C]     ; D <- array[maxIndex]
           CMP    D, A               ; is D less than A?
           BRGE   Jinc               ; if no, go to increment j
           MOVE   C, B               ; maxIndex = j
Jinc:   ADDI   B, 1               ; j++
           JUMP   Inner              ; jump to the beginning of the inner loop
Swap:   LOAD   A, [i]             ; restore i from memory
           LOADF  B, [array + A]     ; B <- array[i]
           LOADF  D, [array + C]     ; D <- array[maxIndex]
           STOREF [array + A], D     ; array[i] <- array[maxIndex]
           STOREF [array + C], B     ; array[maxIndex] -< array[i]
Iinc:   ADDI   A, 1               ; i++
           JUMP   Outer              ; jump to the beginning of the outer loop
End:    NOOP`;

   let newText = SS.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}