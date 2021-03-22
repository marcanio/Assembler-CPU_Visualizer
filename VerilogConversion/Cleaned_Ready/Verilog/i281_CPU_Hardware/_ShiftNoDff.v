module _ShiftNoDff(
	LRSelect,
	ShifterInput,
	Shift_Out_Bit,
	ShifterOutput
);


input wire	LRSelect;
input wire	[7:0] ShifterInput;
output wire	Shift_Out_Bit;
output wire	[7:0] ShifterOutput;

wire	GND_Signal;
assign	GND_Signal = 0;


_2to1mux	shift(
	.i0(ShifterInput[7]),
	.i1(ShifterInput[0]),
	.sel(LRSelect),
	.mxout(Shift_Out_Bit));


_2to1mux	Zero(
	.i0(GND_Signal),
	.i1(ShifterInput[1]),
	.sel(LRSelect),
	.mxout(ShifterOutput[0]));


_2to1mux	One(
	.i0(ShifterInput[0]),
	.i1(ShifterInput[2]),
	.sel(LRSelect),
	.mxout(ShifterOutput[1]));


_2to1mux	Two(
	.i0(ShifterInput[1]),
	.i1(ShifterInput[3]),
	.sel(LRSelect),
	.mxout(ShifterOutput[2]));


_2to1mux	Three(
	.i0(ShifterInput[2]),
	.i1(ShifterInput[4]),
	.sel(LRSelect),
	.mxout(ShifterOutput[3]));


_2to1mux	Four(
	.i0(ShifterInput[3]),
	.i1(ShifterInput[5]),
	.sel(LRSelect),
	.mxout(ShifterOutput[4]));


_2to1mux	Five(
	.i0(ShifterInput[4]),
	.i1(ShifterInput[6]),
	.sel(LRSelect),
	.mxout(ShifterOutput[5]));


_2to1mux	Six(
	.i0(ShifterInput[5]),
	.i1(ShifterInput[7]),
	.sel(LRSelect),
	.mxout(ShifterOutput[6]));


_2to1mux	Seven(
	.i0(ShifterInput[6]),
	.i1(GND_Signal),
	.sel(LRSelect),
	.mxout(ShifterOutput[7]));

endmodule
