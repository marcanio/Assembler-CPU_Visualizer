module ALU(
	ALU_Select0,
	ALU_Select1,
	Clock,
	Reset,
	Flags_Write_Enable,
	ALU_Input0,
	ALU_Input1,
	ZeroFlagOut,
	NegativeFlagOut,
	OverFlowFlagOut,
	CarryFlagOut,
	ALU_OUTPUT
);


input wire	ALU_Select0;
input wire	ALU_Select1;
input wire	Clock;
input wire	Reset;
input wire	Flags_Write_Enable;
input wire	[7:0] ALU_Input0;
input wire	[7:0] ALU_Input1;
output wire	ZeroFlagOut;
output wire	NegativeFlagOut;
output wire	OverFlowFlagOut;
output wire	CarryFlagOut;
output wire	[7:0] ALU_OUTPUT;

wire	ZeroCalcOut;
wire	NegCalcOut;
wire	MUX1OUT;
wire	MUX0OUT;
wire	[7:0] EightBuxMuxOut;
wire	[7:0] ShiftOut;
wire	[7:0] AdderOut;
wire	ShiftOutToMuxBit;
wire	MUX0IN;
wire	GND_Signal;
wire	MUX1IN;

assign	ALU_OUTPUT = EightBuxMuxOut;
assign	GND_Signal = 0;




_ShiftNoDff	Shifting(
	.LRSelect(ALU_Select0),
	.ShifterInput(ALU_Input0),
	.Shift_Out_Bit(ShiftOutToMuxBit),
	.ShifterOutput(ShiftOut));


_Flag_Registers	FlagReg(
	.Write_Enable(Flags_Write_Enable),
	.Clock(Clock),
	.Reset(Reset),
	.ZeroFlag(ZeroCalcOut),
	.NegativeFlag(NegCalcOut),
	.OverFlowFlag(MUX1OUT),
	.CarryFlag(MUX0OUT),
	.ZeroFlagOut(ZeroFlagOut),
	.NegativeFlagOut(NegativeFlagOut),
	.OverFlowFlagOut(OverFlowFlagOut),
	.CarryFlagOut(CarryFlagOut));


_ALU_Flag_Calculator	FlagCalc(
	.REG_INPUT(EightBuxMuxOut),
	.Negative(NegCalcOut),
	.Zero(ZeroCalcOut));


_8WideBusMux 	BusMux8(
	.control(ALU_Select1),
	.dataa(ShiftOut),
	.datab(AdderOut),
	.result(EightBuxMuxOut));


_8BitAdder 	Adder8(
	.Sub(ALU_Select0),
	.First_Input(ALU_Input0),
	.Second_Input(ALU_Input1),
	.Carry(MUX0IN),
	.Overflow(MUX1IN),
	.Adder_Output(AdderOut));


_2to1mux	MUX0(
	.i0(ShiftOutToMuxBit),
	.i1(MUX0IN),
	.sel(ALU_Select1),
	.mxout(MUX0OUT));


_2to1mux	MUX1(
	.i0(GND_Signal),
	.i1(MUX1IN),
	.sel(ALU_Select1),
	.mxout(MUX1OUT));



endmodule
