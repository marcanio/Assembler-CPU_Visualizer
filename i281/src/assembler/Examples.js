//Arithmetic Operations -> 
function Arithmetic1(){
   reset();
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
   reset();
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
   reset();
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
function MultiplicationWithLoop(){
   reset();
   let A1 =`.data
   x        BYTE        3
   z        BYTE        ?
   .code
           LOAD  A, [x]
           LOADI C, 0        ; z=0
           LOADI B, 0        ; i=0
           LOADI D, 5        ; sentinel value
For:    CMP   B, D        ; i<5?
           BRGE  End         ; if(i>=5), exit for loop
           ADD   C, A        ; z+=x
           ADDI  B, 1        ; i++
           JUMP  For         ; jump to For loop
End:    STORE [z], C      ; update the z value in memory`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}


//Arrays ->
function Arrays(){
   reset();
   let A1 =`.data
   array   BYTE    1, 2, 3, 4
   .code
           LOADI  A, 0
           STORE  [array + 0], A
           LOAD   B, [array + 1]
           ADDI   B, 5
           STORE  [array + 1], B
           LOAD   C, [array + 2]
           SUBI   C, 1
           STORE  [array + 2], C
           LOAD   D, [array + 3]
           ADD    D, C                ; array[2] is already in C
           STORE  [array + 3], D`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function ArrayPlusFive(){
   reset();
   let A1 =`.data
   array   BYTE    1, 2, 3, 4
   N       BYTE    4
   .code
           LOADI  A, 0               ; i = 0
For:    LOAD   D, [N]             ; D <- N
           CMP    A, D               ; i < N ?
           BRGE   End                ; if no, exit the for loop
           LOADF  C, [array + A]     ; load array[i]
           ADDI   C, 5               ; add 5
           STOREF [array + A], C     ; store the result back to memory
Iinc:   ADDI   A, 1               ; i++
           JUMP   For                ; repeat the for loop
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}

//If Statements ->
function IfEqual(){
   reset();
   let A1 =`.data
   x       BYTE   3
   y       BYTE   5
   z       BYTE   0
   .code
           LOAD  A, [x]
           LOAD  B, [y]
           CMP   A, B
           BRNE  End
           STORE [z], A
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function IfGreater(){
   reset();
   let A1 =`.data
   x       BYTE    3
   y       BYTE    5
   z       BYTE    0
   .code
           LOAD  A, [x]
           LOAD  B, [y]
           CMP   B, A      ; these are swapped
           BRGE  End
           STORE [z], A
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function IfGreaterThanOrEqual(){
   reset();
   let A1 =`.data
   x       BYTE    3
   y       BYTE    5
   z       BYTE    0
.code
           LOAD  A, [x]
           LOAD  B, [y]
           CMP   B, A        ; these are swapped
           BRG   End
           STORE [z], A
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function IfLess(){
   reset();
   let A1 =`.data
   x       BYTE     3
   y       BYTE     5
   z       BYTE     0
   .code
           LOAD  A, [x]
           LOAD  B, [y]
           CMP   A, B
           BRGE  End
           STORE [z], A
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function IfLessThanOrEqual(){
   reset();
   let A1 =`.data
   x       BYTE    3
   y       BYTE    5
   z       BYTE    0
   .code
           LOAD  A, [x]
           LOAD  B, [y]
           CMP   A, B
           BRG   End
           STORE [z], A
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function IfNotEqual(){
   reset();
   let A1 =`.data
   x       BYTE    3
   y       BYTE    5
   z       BYTE    0
   .code
           LOAD  A, [x]
           LOAD  B, [y]
           CMP   A, B
           BRE   End
           STORE [z], A
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function IfWith2Conditions(){
   reset();
   let A1 =`.data
   x        BYTE        5
   min      BYTE        1
   max      BYTE        8
   inRange  BYTE        0
   .code
           LOAD  A, [x]
           LOAD  B, [min]
           LOAD  C, [max]
           CMP   B, A                ; min <= x ?
           BRG   End
           CMP   A, C                ; x <= max ?
           BRG   End
           LOADI D, 1
           STORE [inRange], D
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}

//Loops
function DoLoop(){
   reset();
   let A1 =`.data
   N       BYTE      5
   sum     BYTE      ?
   .code
           LOADI A, 0           ; i = 0
           LOADI B, 0           ; sum=0
           LOAD  D, [N]         ; register D = N
Do:     ADDI  A, 1           ; i++
           ADD   B, A           ; sum+=i
           CMP   D, A           ; N > i ? (register ordering is swapped)
           BRG   Do             ; if true, jump to Do
End:    STORE [sum], B       ; store sum to memory`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function ForLoop(){
   reset();
   let A1 =`.data
   N        BYTE    5
   i        BYTE    ?
   sum      BYTE    ?
   .code
           LOADI  B, 0        ; sum=0
           LOADI  A, 1        ; i=1
           LOAD   D, [N]      ; register D = N
Loop:   CMP    A, D        ; i<=N ?
           BRG    End         ; exit if i>N
Add:    ADD    B, A        ; sum+=i
           ADDI   A,1         ; i++
           JUMP   Loop        ; next iteration
End:    STORE  [sum], B    ; update the memory for sum`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function ForLoopUnrolling(){
   reset();
   let A1 =`.data
   sum        BYTE        ?
   .code
           LOADI B, 0       ; sum=0
           LOADI A, 1       ; i=1
           ADD   B, A       ; sum+=i
           ADDI  A, 1       ; i++
           ADD   B, A       ; sum+=i
           ADDI  A, 1       ; i++
           ADD   B, A       ; sum+=i
           STORE [sum], B   ; update the memory for sum`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function WhileLoop(){
   reset();
   let A1 =`.data
   N       BYTE     5
   sum     BYTE     ?
   .code
           LOADI A, 1         ; i = 1
           LOADI B, 0         ; sum=0
           LOAD  D, [N]       ; register D = N
While:  CMP   A, D         ; i <= N ?
           BRG   End          ; if no, exit the while loop
           ADD   B, A         ; sum+=i
           ADDI  A, 1         ; i++
           JUMP  While        ; next iteration
End:    STORE [sum], B     ; store sum to memory`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}

//Search Algorithms
function BinarySearch(){
   reset();
   let A1 =`.data
   array      BYTE 2, 4, 5, 7, 8, 9
   found      BYTE 0
   mid        BYTE ?
   low        BYTE 0
   high       BYTE 5
   key        BYTE 4
   .code
              LOAD    A, [low]         ; Register A <- [low]
              LOAD    C, [high]        ; Register 
              LOAD    D, [key]         ; Register D <- [key]
While:     CMP     A, C             ; Compare A with C
              BRG     End              ; exit the loop if low > high 
Step:      MOVE    B, A             ; B <- low
              ADD     B, C             ; B <- B + hight
              SHIFTR  B                ; B <- B / 2
If:        STORE   [mid], B         ; Store [mid] <- B 
              LOADF   B, [array+B]     ; B = array[mid]
              CMP     B, D             ; Compare array[mid] with key
              BRE     Match            ; if they are equal we found a match
              BRGE    AdjHigh          ; reuses the flags to handle the If-Else
AdjLow:    LOAD    A, [mid]         ; low = mid
              ADDI    A, 1             ; low = mid + 1
              JUMP    While            ; Jump to While
AdjHigh:   LOAD    C, [mid]         ; high = mid
              SUBI    C, 1             ; high = mid - 1
              JUMP    While            ; Jump to While
Match:     LOAD    B, [found]       ; Load B <- [found]
              ADDI    B, 1             ; B <- B + 1
              STORE   [found], B       ; Store [found] <- B; implicit break
End:       NOOP                     ; Do nothing`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}
function LinearSearch(){
   reset();
   let A1 =`.data
   array   BYTE   5, 2, 7, 3, 6, 1
   found   BYTE   0
   index   BYTE   ?
   N       BYTE   6
   key     BYTE   5
   i       BYTE   ?
   .code
           LOADI  A, 0             ; i=0
           LOAD   B, [N]           ; Register B <- [N]
           LOAD   D, [key]         ; Register D <- [key]
For:    CMP    A, B             ; Compare A with B
           BRGE   End              ; if i >= N exit the loop
Step:   LOADF  C, [array+A]     ; Register C <- array[i]
           CMP    C, D             ; Compare C with D
           BRNE   Iinc
Match:  LOAD   C, [found]       ; Load C <- [found]
           ADDI   C, 1             ; C <- C + 1
           STORE  [found], C       ; Store [found] <- C
           STORE  [index], A
           JUMP   End
Iinc:   ADDI   A, 1             ; i++
           JUMP   For              ; Jump to For
End:    NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}

//Struct
function Struct(){
   reset();
   let A1 =`.data
   point   BYTE    ?, ?, ?
   .code
           LOADI A, 2
           STORE [point+0], A
           LOADI B, 3
           STORE [point+1], B
           ADD A, B
           STORE [point+2], A`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}

//Switch Statement
function Switch(){
   reset();
   let A1 =`.data
   x        BYTE        6
   y        BYTE        ?
   .code
            LOAD    A, [x]
Zero:    LOADI   C, 0
            CMP     A, C
            BRNE    One
            MOVE    B, A
            SHIFTL  B
            JUMP    End
One:     LOADI   C, 1
            CMP     A, C
            BRNE    Two
            MOVE    B, A
            ADDI    B, 3         
            JUMP    End
Two:     LOADI   C, 2
            CMP     A, C
            BRNE    Default
            MOVE    B, A
            SUBI    B, 1
            JUMP    End
Default: MOVE    B, A
            SHIFTR  B
End:     STORE   [y], B
            NOOP`;

   let newText = A1.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}

//Sorting Algorithms

function BubbleSort(){

    reset();
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
   reset();
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
   reset();
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

function pong(){
   reset();
   let SS=`.data
   empty   BYTE   0,  0, 0, 0    ; the first four 7-segs are not used
   display BYTE   64, 0, 0, 4    ; the second 4 are the display
   
   shape   BYTE   64, 8, 64, 1    ; the three ball shapes (up=1, middle=64, down=8)
   
   incDec  BYTE   1               ; could be 1 or -1
   switch  BYTE   0, 0, 3         ; array for screen bounds (elements 0 and 2) and 
   .code
           NOOP
           NOOP
           LOADI  A, 0                    ; initial ball hpos (@ left)
           LOADI  B, 0                    ; initial ball vpos
           LOADI  D, 4                    ; start with the paddle down
           STORE  [switch+1], D
Loop:   LOAD   C, [display+3]          ; erase the paddle
           LOAD   D, [switch+1]
EraseP: SUB    C, D
           STORE  [display+3], C
Read:   INPUTD [switch+1]              ; read switch input
           LOAD   D, [switch+1]
           SUBI   D, 64                   ; switch 6 = ?
           BRE    Up
Down:   LOADI  D, 4                    ; update paddle position
           JUMP   DrawP
Up:     LOADI  D, 2                                
DrawP:  STORE  [switch+1], D
           ADD    C, D                    ; C hold the previous value
           STORE  [display+3], C          ; draw the paddle
EraseB: LOADF  C, [display+A]          ; load the contents of the 7-seg that shows the ball
           LOADF  D, [shape+B]            ; load the ball shape (up, middle, or down)
           SUB    C, D
           STOREF [display+A], C          ; erase the ball
Vpos:   ADDI   B, 1                    ; update the vertical position of the ball
           LOADI  D, 4
           CMP    B, D
           BRNE   Hpos
           LOADI  B, 0                    ; set it back to 0 is it exceeded the bounds of the shape array        
Hpos:   LOAD   D, [incDec]             ; update the horizontal position of the ball
           ADD    A, D
           LOADF  D, [switch+D+1]         ; pick element 0 or 2 depending on incDec
           CMP    A, D
           BRNE   DrawB
RevDir: LOADI  D, 0                    ; reverse the direction of the ball
           LOAD   C, [incDec]
           SUB    D, C
           STORE  [incDec], D             ; incDec = -incDec
DrawB:  LOADF  C, [display+A]          ; load the 7-seg in which the ball will be drawn
           LOADF  D, [shape+B]            ; read the current shape of the ball
           ADD    C, D                                
           STOREF [display+A], C          ; draw the ball
Check:  LOADI  D, 5                    ; check if the paddle missed the ball (7-seg codes 5 and 10)
           LOAD   C, [display+3]
           CMP    C, D
           BRE    Print
           SHIFTL D                       ; D = 5*2 = 10
           CMP    C, D
           BRE    Print                   ; Game Over. Print 'End'
           LOADI  D, 1                    ; delay loop to slow down the animation
Delay:  SUBI   D, 1
           BRNE   Delay
           JUMP   Loop
Print:  LOADI  C, 121                  ; E
           STORE  [display+0], C
           LOADI  C, 84                   ; n
           STORE  [display+1], C
           LOADI  C, 94                   ; d                                 
           STORE  [display+2], C
Exit:   NOOP                           ; infinite loop for Game Over
           JUMP   Exit
           NOOP
           NOOP
           NOOP`;

   let newText = SS.split("\n");
   removeComments(newText);
   document.getElementById("fileDiv").style.display = "block";
   mainMethod();
}