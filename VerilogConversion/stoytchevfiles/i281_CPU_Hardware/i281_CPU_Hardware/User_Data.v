module User_Data(b0I,b1I,b2I,b3I,b4I,b5I,b6I,b7I,b8I,b9I,b10I,b11I,b12I,b13I,b14I,b15I);
output [7:0] b0I;
output [7:0] b1I;
output [7:0] b2I;
output [7:0] b3I;
output [7:0] b4I;
output [7:0] b5I;
output [7:0] b6I;
output [7:0] b7I;
output [7:0] b8I;
output [7:0] b9I;
output [7:0] b10I;
output [7:0] b11I;
output [7:0] b12I;
output [7:0] b13I;
output [7:0] b14I;
output [7:0] b15I;

//FileName: i281_CPU/Sorting_Algorithms/Bubble_Sort/BubbleSort.asm
assign b0I[7:0] = 8'b00000111; //array[0]
assign b1I[7:0] = 8'b00000011; //array[1]
assign b2I[7:0] = 8'b00000010; //array[2]
assign b3I[7:0] = 8'b00000001; //array[3]
assign b4I[7:0] = 8'b00000110; //array[4]
assign b5I[7:0] = 8'b00000100; //array[5]
assign b6I[7:0] = 8'b00000101; //array[6]
assign b7I[7:0] = 8'b00001000; //array[7]
assign b8I[7:0] = 8'b00000111; //last
assign b9I[7:0] = 8'b00000000; //temp
assign b10I[7:0] = 8'b00000000;
assign b11I[7:0] = 8'b00000000;
assign b12I[7:0] = 8'b00000000;
assign b13I[7:0] = 8'b00000000;
assign b14I[7:0] = 8'b00000000;
assign b15I[7:0] = 8'b00000000;
endmodule
