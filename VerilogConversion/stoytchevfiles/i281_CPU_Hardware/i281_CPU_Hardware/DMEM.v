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
// CREATED		"Sun Feb 21 21:32:10 2021"

module DMEM(
	Write_Enable,
	Clock,
	Reset,
	DMEM_INPUT,
	READ_SELECT,
	WRITE_SELECT,
	DMEM_OUTPUT,
	Seven_Seg0,
	Seven_Seg1,
	Seven_Seg2,
	Seven_Seg3,
	Seven_Seg4,
	Seven_Seg5,
	Seven_Seg6,
	Seven_Seg7
);


input wire	Write_Enable;
input wire	Clock;
input wire	Reset;
input wire	[7:0] DMEM_INPUT;
input wire	[3:0] READ_SELECT;
input wire	[3:0] WRITE_SELECT;
output wire	[7:0] DMEM_OUTPUT;
output wire	[7:0] Seven_Seg0;
output wire	[7:0] Seven_Seg1;
output wire	[7:0] Seven_Seg2;
output wire	[7:0] Seven_Seg3;
output wire	[7:0] Seven_Seg4;
output wire	[7:0] Seven_Seg5;
output wire	[7:0] Seven_Seg6;
output wire	[7:0] Seven_Seg7;

wire	[15:0] SELECTED;
wire	[7:0] SYNTHESIZED_WIRE_0;
wire	[7:0] SYNTHESIZED_WIRE_1;
wire	[7:0] SYNTHESIZED_WIRE_2;
wire	[7:0] SYNTHESIZED_WIRE_3;
wire	[7:0] SYNTHESIZED_WIRE_4;
wire	[7:0] SYNTHESIZED_WIRE_5;
wire	[7:0] SYNTHESIZED_WIRE_6;
wire	[7:0] SYNTHESIZED_WIRE_7;
wire	[7:0] SYNTHESIZED_WIRE_8;
wire	[7:0] SYNTHESIZED_WIRE_9;
wire	[7:0] SYNTHESIZED_WIRE_10;
reg	SYNTHESIZED_WIRE_53;
wire	[7:0] SYNTHESIZED_WIRE_11;
wire	[7:0] SYNTHESIZED_WIRE_12;
wire	[7:0] SYNTHESIZED_WIRE_13;
wire	[7:0] SYNTHESIZED_WIRE_14;
wire	[7:0] SYNTHESIZED_WIRE_15;
wire	[7:0] SYNTHESIZED_WIRE_16;
wire	[7:0] SYNTHESIZED_WIRE_17;
wire	[7:0] SYNTHESIZED_WIRE_18;
wire	[7:0] SYNTHESIZED_WIRE_19;
wire	[7:0] SYNTHESIZED_WIRE_20;
wire	[7:0] SYNTHESIZED_WIRE_21;
wire	[7:0] SYNTHESIZED_WIRE_22;
wire	[7:0] SYNTHESIZED_WIRE_23;
wire	[7:0] SYNTHESIZED_WIRE_24;
wire	[7:0] SYNTHESIZED_WIRE_25;
wire	[7:0] SYNTHESIZED_WIRE_26;
wire	[7:0] SYNTHESIZED_WIRE_27;
wire	[7:0] SYNTHESIZED_WIRE_28;
wire	[7:0] SYNTHESIZED_WIRE_29;
wire	[7:0] SYNTHESIZED_WIRE_30;
wire	[7:0] SYNTHESIZED_WIRE_31;
wire	[7:0] SYNTHESIZED_WIRE_32;
wire	[7:0] SYNTHESIZED_WIRE_33;
wire	[7:0] SYNTHESIZED_WIRE_34;
wire	[7:0] SYNTHESIZED_WIRE_35;
wire	[7:0] SYNTHESIZED_WIRE_36;
wire	[7:0] SYNTHESIZED_WIRE_37;
wire	[7:0] SYNTHESIZED_WIRE_38;
wire	[7:0] SYNTHESIZED_WIRE_39;
wire	[7:0] SYNTHESIZED_WIRE_40;
wire	[7:0] SYNTHESIZED_WIRE_41;
wire	[7:0] SYNTHESIZED_WIRE_42;
wire	[7:0] SYNTHESIZED_WIRE_43;
wire	SYNTHESIZED_WIRE_44;
wire	SYNTHESIZED_WIRE_45;
wire	SYNTHESIZED_WIRE_46;
wire	[7:0] SYNTHESIZED_WIRE_47;
wire	[15:0] SYNTHESIZED_WIRE_48;
wire	[15:0] SYNTHESIZED_WIRE_49;
wire	[7:0] SYNTHESIZED_WIRE_50;
wire	[7:0] SYNTHESIZED_WIRE_51;
wire	[7:0] SYNTHESIZED_WIRE_52;

assign	Seven_Seg0 = SYNTHESIZED_WIRE_27;
assign	Seven_Seg1 = SYNTHESIZED_WIRE_26;
assign	Seven_Seg2 = SYNTHESIZED_WIRE_25;
assign	Seven_Seg3 = SYNTHESIZED_WIRE_24;
assign	Seven_Seg4 = SYNTHESIZED_WIRE_23;
assign	Seven_Seg5 = SYNTHESIZED_WIRE_22;
assign	Seven_Seg6 = SYNTHESIZED_WIRE_21;
assign	Seven_Seg7 = SYNTHESIZED_WIRE_14;
assign	SYNTHESIZED_WIRE_45 = 1;
assign	SYNTHESIZED_WIRE_46 = 1;




Registers8bit	b2v_inst(
	.Control(SELECTED[0]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_0),
	.REG_OUTPUT(SYNTHESIZED_WIRE_14));


Registers8bit	b2v_inst1(
	.Control(SELECTED[1]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_1),
	.REG_OUTPUT(SYNTHESIZED_WIRE_21));


Registers8bit	b2v_inst10(
	.Control(SELECTED[8]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_2),
	.REG_OUTPUT(SYNTHESIZED_WIRE_28));


Registers8bit	b2v_inst11(
	.Control(SELECTED[9]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_3),
	.REG_OUTPUT(SYNTHESIZED_WIRE_29));


Registers8bit	b2v_inst12(
	.Control(SELECTED[10]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_4),
	.REG_OUTPUT(SYNTHESIZED_WIRE_15));


Registers8bit	b2v_inst13(
	.Control(SELECTED[11]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_5),
	.REG_OUTPUT(SYNTHESIZED_WIRE_16));


Registers8bit	b2v_inst14(
	.Control(SELECTED[12]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_6),
	.REG_OUTPUT(SYNTHESIZED_WIRE_17));


Registers8bit	b2v_inst15(
	.Control(SELECTED[13]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_7),
	.REG_OUTPUT(SYNTHESIZED_WIRE_18));


Registers8bit	b2v_inst16(
	.Control(SELECTED[14]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_8),
	.REG_OUTPUT(SYNTHESIZED_WIRE_19));


Registers8bit	b2v_inst17(
	.Control(SELECTED[15]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_9),
	.REG_OUTPUT(SYNTHESIZED_WIRE_20));


User_Data	b2v_inst18(
	.b0I(SYNTHESIZED_WIRE_11),
	.b10I(SYNTHESIZED_WIRE_38),
	.b11I(SYNTHESIZED_WIRE_39),
	.b12I(SYNTHESIZED_WIRE_40),
	.b13I(SYNTHESIZED_WIRE_41),
	.b14I(SYNTHESIZED_WIRE_42),
	.b15I(SYNTHESIZED_WIRE_43),
	.b1I(SYNTHESIZED_WIRE_12),
	.b2I(SYNTHESIZED_WIRE_13),
	.b3I(SYNTHESIZED_WIRE_30),
	.b4I(SYNTHESIZED_WIRE_31),
	.b5I(SYNTHESIZED_WIRE_32),
	.b6I(SYNTHESIZED_WIRE_33),
	.b7I(SYNTHESIZED_WIRE_34),
	.b8I(SYNTHESIZED_WIRE_36),
	.b9I(SYNTHESIZED_WIRE_37));


Registers8bit	b2v_inst2(
	.Control(SELECTED[2]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_10),
	.REG_OUTPUT(SYNTHESIZED_WIRE_22));


ONES	b2v_inst20(
	.ONE_OUTPUT(SYNTHESIZED_WIRE_48));


\8WidWideBusMux 	b2v_inst21(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_11),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_0));


\8WidWideBusMux 	b2v_inst22(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_12),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_1));


\8WidWideBusMux 	b2v_inst23(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_13),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_10));


\8wide16to1BusMUX 	b2v_inst24(
	.Control(READ_SELECT),
	.data0in(SYNTHESIZED_WIRE_14),
	.data10in(SYNTHESIZED_WIRE_15),
	.data11in(SYNTHESIZED_WIRE_16),
	.data12in(SYNTHESIZED_WIRE_17),
	.data13in(SYNTHESIZED_WIRE_18),
	.data14in(SYNTHESIZED_WIRE_19),
	.data15in(SYNTHESIZED_WIRE_20),
	.data1in(SYNTHESIZED_WIRE_21),
	.data2in(SYNTHESIZED_WIRE_22),
	.data3in(SYNTHESIZED_WIRE_23),
	.data4in(SYNTHESIZED_WIRE_24),
	.data5in(SYNTHESIZED_WIRE_25),
	.data6in(SYNTHESIZED_WIRE_26),
	.data7in(SYNTHESIZED_WIRE_27),
	.data8in(SYNTHESIZED_WIRE_28),
	.data9in(SYNTHESIZED_WIRE_29),
	.muxresult(DMEM_OUTPUT));


\8WidWideBusMux 	b2v_inst25(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_30),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_35));


\8WidWideBusMux 	b2v_inst26(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_31),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_47));


\8WidWideBusMux 	b2v_inst27(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_32),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_50));


\8WidWideBusMux 	b2v_inst28(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_33),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_51));


\8WidWideBusMux 	b2v_inst29(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_34),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_52));


Registers8bit	b2v_inst3(
	.Control(SELECTED[3]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_35),
	.REG_OUTPUT(SYNTHESIZED_WIRE_23));


\8WidWideBusMux 	b2v_inst30(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_36),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_2));


\8WidWideBusMux 	b2v_inst31(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_37),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_3));


\8WidWideBusMux 	b2v_inst32(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_38),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_4));


\8WidWideBusMux 	b2v_inst33(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_39),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_5));


\8WidWideBusMux 	b2v_inst34(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_40),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_6));


\8WidWideBusMux 	b2v_inst35(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_41),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_7));


\8WidWideBusMux 	b2v_inst36(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_42),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_8));


\8WidWideBusMux 	b2v_inst37(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_43),
	.datab(DMEM_INPUT),
	.result(SYNTHESIZED_WIRE_9));


always@(posedge Clock or negedge SYNTHESIZED_WIRE_44 or negedge SYNTHESIZED_WIRE_46)
begin
if (!SYNTHESIZED_WIRE_44)
	begin
	SYNTHESIZED_WIRE_53 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_46)
	begin
	SYNTHESIZED_WIRE_53 <= 1;
	end
else
	begin
	SYNTHESIZED_WIRE_53 <= SYNTHESIZED_WIRE_45;
	end
end


Registers8bit	b2v_inst4(
	.Control(SELECTED[4]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_47),
	.REG_OUTPUT(SYNTHESIZED_WIRE_24));



SixteenWideBusMux	b2v_inst44(
	.Control(SYNTHESIZED_WIRE_53),
	.dataa(SYNTHESIZED_WIRE_48),
	.datab(SYNTHESIZED_WIRE_49),
	.result(SELECTED));

assign	SYNTHESIZED_WIRE_44 =  ~Reset;



Registers8bit	b2v_inst6(
	.Control(SELECTED[5]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_50),
	.REG_OUTPUT(SYNTHESIZED_WIRE_25));


Registers8bit	b2v_inst7(
	.Control(SELECTED[6]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_51),
	.REG_OUTPUT(SYNTHESIZED_WIRE_26));


Registers8bit	b2v_inst8(
	.Control(SELECTED[7]),
	.Clock(Clock),
	.Reset(Reset),
	.REG_INPUT(SYNTHESIZED_WIRE_52),
	.REG_OUTPUT(SYNTHESIZED_WIRE_27));


\4to16DecoderWithEnable 	b2v_inst9(
	.Enable(Write_Enable),
	.Decoder_Select(WRITE_SELECT),
	.Decoder_Output(SYNTHESIZED_WIRE_49));


endmodule
