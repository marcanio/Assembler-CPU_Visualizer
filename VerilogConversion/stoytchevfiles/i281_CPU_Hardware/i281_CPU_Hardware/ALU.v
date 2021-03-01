// Copyright (C) 2020  Intel Corporation. All rights reserved.
// Your use of Intel Corporation's design tools, logic functions 
// and other software and tools, and any partner logic 
// functions, and any output files from any of the foregoing 
// (including device programming or simulation files), and any 
// associated documentation or information are expressly subject 
// to the terms and conditions of the Intel Program License 
// Subscription Agreement, the Intel Quartus Prime License Agreement,
// the Intel FPGA IP License Agreement, or other applicable license
// agreement, including, without limitation, that your use is for
// the sole purpose of programming logic devices manufactured by
// Intel and sold by Intel or its authorized distributors.  Please
// refer to the applicable agreement for further details, at
// https://fpgasoftware.intel.com/eula.

// PROGRAM		"Quartus Prime"
// VERSION		"Version 20.1.0 Build 711 06/05/2020 SJ Lite Edition"
// CREATED		"Sun Feb 21 21:29:53 2021"

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

wire	SYNTHESIZED_WIRE_0;
wire	SYNTHESIZED_WIRE_1;
wire	SYNTHESIZED_WIRE_2;
wire	SYNTHESIZED_WIRE_3;
wire	[7:0] SYNTHESIZED_WIRE_4;
wire	[7:0] SYNTHESIZED_WIRE_5;
wire	[7:0] SYNTHESIZED_WIRE_6;
wire	SYNTHESIZED_WIRE_7;
wire	SYNTHESIZED_WIRE_8;
wire	SYNTHESIZED_WIRE_9;
wire	SYNTHESIZED_WIRE_10;

assign	ALU_OUTPUT = SYNTHESIZED_WIRE_4;
assign	SYNTHESIZED_WIRE_9 = 0;




ShiftNoDff	b2v_inst(
	.LRSelect(ALU_Select0),
	.ShifterInput(ALU_Input0),
	.Shift_Out_Bit(SYNTHESIZED_WIRE_7),
	.ShifterOutput(SYNTHESIZED_WIRE_5));


Flag_Registers	b2v_inst1(
	.Write_Enable(Flags_Write_Enable),
	.Clock(Clock),
	.Reset(Reset),
	.ZeroFlag(SYNTHESIZED_WIRE_0),
	.NegativeFlag(SYNTHESIZED_WIRE_1),
	.OverFlowFlag(SYNTHESIZED_WIRE_2),
	.CarryFlag(SYNTHESIZED_WIRE_3),
	.ZeroFlagOut(ZeroFlagOut),
	.NegativeFlagOut(NegativeFlagOut),
	.OverFlowFlagOut(OverFlowFlagOut),
	.CarryFlagOut(CarryFlagOut));


ALU_Flag_Calculator	b2v_inst3(
	.REG_INPUT(SYNTHESIZED_WIRE_4),
	.Negative(SYNTHESIZED_WIRE_1),
	.Zero(SYNTHESIZED_WIRE_0));


\8WidWideBusMux 	b2v_inst4(
	.Control(ALU_Select1),
	.dataa(SYNTHESIZED_WIRE_5),
	.datab(SYNTHESIZED_WIRE_6),
	.result(SYNTHESIZED_WIRE_4));


\8bitAdder 	b2v_inst5(
	.Sub(ALU_Select0),
	.First_Input(ALU_Input0),
	.Second_Input(ALU_Input1),
	.Carry(SYNTHESIZED_WIRE_8),
	.Overflow(SYNTHESIZED_WIRE_10),
	.Adder_Output(SYNTHESIZED_WIRE_6));


Block3	b2v_inst6(
	.i0(SYNTHESIZED_WIRE_7),
	.i1(SYNTHESIZED_WIRE_8),
	.sel(ALU_Select1),
	.mxout(SYNTHESIZED_WIRE_3));


Block3	b2v_inst7(
	.i0(SYNTHESIZED_WIRE_9),
	.i1(SYNTHESIZED_WIRE_10),
	.sel(ALU_Select1),
	.mxout(SYNTHESIZED_WIRE_2));



endmodule
