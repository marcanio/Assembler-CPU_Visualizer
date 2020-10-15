
This version of the i281 CPU is pre-loaded with the BubbleSort program. 
It sorts an array of size 8 using the classic bubble sort algorithm. 
The contents of the array are shown on the eight 7-segment displays.
See the instructions below on how to run it.


If you would like to run a different program, then you need to 
use the i281 Assembler to compile your assembly program to machine language. 
For example, in the software distribution folder type the following:

 java i281assembler.java ./Sorting_Algorithms/Insertion_Sort/Insertion_Sort.asm

This will generate three different files in ./Sorting_Algorithms/Insertion_Sort/ 

    User_Code_Low.v
    User_Code_High.v
    User_Data.v

Copy these three files into the i281_CPU_Hardware folder, overwriting the previous versions 
of these files. Then recompile the hardware design and load it into the Altera board.
From that point on you can follow the same instructions as for Bubble Sort to execute it.



The Altera board has 4 round push buttons in the lower-right corner
that are labeled Key3, Key2, Key1, and Key0. They do the following:

  * Key0 is the manual clock;

  * Key1 is the reset;

  * Key2 is a slow board clock;

  * Key3 pressed together with Key2 is "turbo" board clock.



To run Bubble Sort you will need to do the following:

* Download the file i281_CPU.zip and unzip it on your U: drive

* Go to the new folder and open the file i281_CPU.qpf in Quartus

* Double click on i281_CPU in the upper left

* Compile the project

* Turn the Altera board on 

* Ensure that all SW switches are in the 0/off position

* Use the Programmer to load the i281_CPU project onto the board

* Reset the CPU by pressing Key1

* Press Key0 repeatedly to provide the clock signal. The CPU executes one
  instruction per clock cycle. If this speed is too slow for you, then 
  you can press and hold Key2 to switch to an auto clock that is a slowed-down
  version of the board clock. If even this is too slow for you, then you 
  can press and hold Key2 together with Key3 to switch to "turbo" clock.
  At any point in time you can release the Keys and switch to a different
  clock speed by pressing a different key or key combination.

* The eight seven segment displays are hardwired to show the contents
  of the first eight cells of the data memory, which, in this case, 
  hold the array that is being sorted. In other words,

    HEX7 shows the value of DMEM[0]
    HEX6 shows the value of DMEM[1]
    HEX5 shows the value of DMEM[2]
    HEX4 shows the value of DMEM[3]
    HEX3 shows the value of DMEM[4]
    HEX2 shows the value of DMEM[5]
    HEX1 shows the value of DMEM[6]
    HEX0 shows the value of DMEM[7]
 
  Note that only the 4 least-signifiant bits of each 8-bit memory location
  are displayed. The 4 most-significant bits are ignored for the purposes
  of the visualization, but the CPU uses all 8 bit. If the array elements
  are larger than 15 (or F in hexadecimal) they would not be displayed correctly. 


* Optional: Flip only SW17 to 1/on to see the contents of the four CPU registers.
  In this mode:

    HEX3 shows the contents of register A
    HEX2 shows the contents of register B
    HEX1 shows the contents of register C
    HEX0 shows the contents of register D

    HEX7 still shows the value of DMEM[0]
    HEX6 still shows the value of DMEM[1]
    HEX5 still shows the value of DMEM[2]
    HEX4 still shows the value of DMEM[3]

  Once again, only the 4 least-significant bits of each 8-bit value are visualized. 
  Flip SW17 to 0/off to go back to viewing only the contents of the data memory.


* Once the array is sorted you can press Key1 to reset the CPU and start over

* Enjoy!





Here is the i281 Assembly code for BubbleSort:



; Bubble Sort
;
; C Version
; int array[] = {7, 3, 2, 1, 6, 4, 5, 8};
; int last = 7; // last valid index in the array
; int temp;
; int i,j;
; 
; int main()
; {
;    for (i = 0; i < last; i++) 
;        for (j = 0; j < last-i; j++) 
;               if (array[j] > array[j+1]){
;                      temp = array[j];
;                      array[j] = array[j+1];
;                      array[j+1] = temp;
;               }
; }



; Assembly version

.data
array   BYTE 7, 3, 2, 1, 6, 4, 5, 8
last    BYTE 7
temp    BYTE ?

.code
        LOADI  A, 0                  ; i = 0;
Outer:  LOAD   D, [last]             ; Load last into D
        LOADI  B, 0                  ; j = 0;
        CMP    A, D                  ; i < last
        BRGE   End                   ; If i >= last break out of the outer loop
Inner:  LOAD   D, [last]             ; Re-Load last into D (this register is shared)
        SUB    D, A                  ; D = D - A  (i.e., D = last - i)
        CMP    B, D                  ; j < last - i
        BRGE   Iinc                  ; If j >= last-i  branch to Iinc
If:     LOADF  C, [array+B]          ; C = array[j]
        LOADF  D, [array+B+1]        ; D = array[j+1] (compiler adds 1 to addr. of array)
        CMP    D, C                    ; if array[j+1] < array[j]  (switched direction)
        BRGE   Jinc
Swap:   STOREF [array+B], D
        STOREF [array+B+1], C
Jinc:   ADDI   B, 1                  ; j++
        JUMP   Inner
Iinc:   ADDI   A, 1                  ; i++
        JUMP   Outer
End:    NOOP                         ; Do nothing



; Register allocation:  
; 
; A: i
; B: j
; C: array[j]
; D: last, array[j+1]
;
; Note that the variables i and j that exist in the C code are optimized away in the Assembly version. 
; They exist only in registers, not in the data memory.



Machine Language (Data Memory)

00000111 //array[0]
00000011 //array[1]
00000010 //array[2]
00000001 //array[3]
00000110 //array[4]
00000100 //array[5]
00000101 //array[6]
00001000 //array[7]
00000111 //last
00000000 //temp
00000000
00000000
00000000
00000000
00000000
00000000


Machine Language (Code Memory)


0011_00_00_00000000
1000_11_00_00001000
0011_01_00_00000000
1101_00_11_00000000
1111_00_11_00001110
1000_11_00_00001000
0110_11_00_00000000
1101_01_11_00000000
1111_00_11_00001000
1001_10_01_00000000
1001_11_01_00000001
1101_11_10_00000000
1111_00_11_00000010
1011_11_01_00000000
1011_10_01_00000001
0101_01_00_00000001
1110_00_00_11110100
0101_00_00_00000001
1110_00_00_11101110
0000_00_00_00000000
