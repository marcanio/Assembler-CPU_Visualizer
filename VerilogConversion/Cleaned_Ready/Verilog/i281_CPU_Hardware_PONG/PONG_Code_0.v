module PONG_Code_0(b0I,b1I,b2I,b3I,b4I,b5I,b6I,b7I,b8I,b9I,b10I,b11I,b12I,b13I,b14I,b15I);

output [15:0] b0I;
output [15:0] b1I;
output [15:0] b2I;
output [15:0] b3I;
output [15:0] b4I;
output [15:0] b5I;
output [15:0] b6I;
output [15:0] b7I;
output [15:0] b8I;
output [15:0] b9I;
output [15:0] b10I;
output [15:0] b11I;
output [15:0] b12I;
output [15:0] b13I;
output [15:0] b14I;
output [15:0] b15I;

assign b0I[15:0] = 16'b0000_00_00_00000000;
assign b1I[15:0] = 16'b0000_00_00_00000000;
assign b2I[15:0] = 16'b0011_00_00_00000000;
assign b3I[15:0] = 16'b0011_01_00_00000000;
assign b4I[15:0] = 16'b0011_11_00_00000100;
assign b5I[15:0] = 16'b1010_11_00_00001110;
assign b6I[15:0] = 16'b1000_10_00_00000111;
assign b7I[15:0] = 16'b1000_11_00_00001110;
assign b8I[15:0] = 16'b0110_10_11_00000000;
assign b9I[15:0] = 16'b1010_10_00_00000111;
assign b10I[15:0] = 16'b0001_00_10_00001110;
assign b11I[15:0] = 16'b1000_11_00_00001110;
assign b12I[15:0] = 16'b0111_11_00_01000000;
assign b13I[15:0] = 16'b1111_00_00_00000010;
assign b14I[15:0] = 16'b0011_11_00_00000100;
assign b15I[15:0] = 16'b1110_00_00_00000001;
endmodule
