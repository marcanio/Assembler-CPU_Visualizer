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
// CREATED		"Tue Oct 27 19:52:50 2020"

module i281_CPU(
	Board_Clock,
	Direct_Video_Map,
	Register_View,
	Auto_Clock,
	Turbo_Mode,
	Manual_Clock,
	Reset_In,
	Switch_Input,
	pin_name1,
	pin_name2,
	pin_name3,
	pin_name4,
	pin_name5,
	pin_name6,
	REG2_ZERO,
	REG2_ONE,
	REG1_ZERO,
	REG1_ONE,
	Negative_Flag,
	Zero_Flag,
	Carry_Flag,
	OverFlow_Flag,
	OPCODE0,
	OPCODE1,
	OPCODE2,
	OPCODE3,
	IMMEDVAL0,
	IMMEDVAL1,
	IMMEDVAL2,
	IMMEDVAL3,
	IMMEDVAL4,
	IMMEDVAL5,
	IMMEDVAL6,
	IMMEDVAL7,
	Seven_SegOut0,
	Seven_SegOut1,
	Seven_SegOut2,
	Seven_SegOut3,
	Seven_SegOut4,
	Seven_SegOut5,
	Seven_SegOut6,
	Seven_SegOut7
);


input wire	Board_Clock;
input wire	Direct_Video_Map;
input wire	Register_View;
input wire	Auto_Clock;
input wire	Turbo_Mode;
input wire	Manual_Clock;
input wire	Reset_In;
input wire	[15:0] Switch_Input;
output wire	pin_name1;
output wire	pin_name2;
output wire	pin_name3;
output wire	pin_name4;
output wire	pin_name5;
output wire	pin_name6;
output wire	REG2_ZERO;
output wire	REG2_ONE;
output wire	REG1_ZERO;
output wire	REG1_ONE;
output wire	Negative_Flag;
output wire	Zero_Flag;
output wire	Carry_Flag;
output wire	OverFlow_Flag;
output wire	OPCODE0;
output wire	OPCODE1;
output wire	OPCODE2;
output wire	OPCODE3;
output wire	IMMEDVAL0;
output wire	IMMEDVAL1;
output wire	IMMEDVAL2;
output wire	IMMEDVAL3;
output wire	IMMEDVAL4;
output wire	IMMEDVAL5;
output wire	IMMEDVAL6;
output wire	IMMEDVAL7;
output wire	[6:0] Seven_SegOut0;
output wire	[6:0] Seven_SegOut1;
output wire	[6:0] Seven_SegOut2;
output wire	[6:0] Seven_SegOut3;
output wire	[6:0] Seven_SegOut4;
output wire	[6:0] Seven_SegOut5;
output wire	[6:0] Seven_SegOut6;
output wire	[6:0] Seven_SegOut7;

wire	[7:0] ALU_RESULT;
wire	ALU_RESULT_MUX;
wire	ALU_SELECT0;
wire	ALU_SELECT1;
wire	ALU_SOURCE_MUX;
wire	Clock;
wire	[5:0] constantVal;
wire	DMEM_INPUT_MUX;
wire	DMEM_WRITE_ENABLE;
wire	FLAGS_WRITE_ENABLE;
wire	[15:0] IMEM_OUTPUT;
wire	IMEM_WRITE_ENABLE;
wire	PC_MUX;
wire	[5:0] PC_Output;
wire	PC_WRITE_ENABLE;
wire	[7:0] Reg_A;
wire	[7:0] Reg_B;
wire	[7:0] Reg_C;
wire	[7:0] Reg_D;
wire	[1:0] REG_PORT0_SELECT;
wire	[1:0] REG_PORT1_SELECT;
wire	REG_WRITE_ENABLE;
wire	[1:0] REG_WRITE_SELECT;
wire	REG_WRITEBACK_MUX;
reg	Reset;
wire	Video_Map;
wire	[7:0] SYNTHESIZED_WIRE_0;
wire	[7:0] SYNTHESIZED_WIRE_68;
wire	[7:0] SYNTHESIZED_WIRE_3;
wire	SYNTHESIZED_WIRE_4;
wire	SYNTHESIZED_WIRE_5;
wire	SYNTHESIZED_WIRE_6;
wire	SYNTHESIZED_WIRE_7;
wire	SYNTHESIZED_WIRE_8;
wire	SYNTHESIZED_WIRE_9;
wire	SYNTHESIZED_WIRE_69;
wire	SYNTHESIZED_WIRE_11;
wire	SYNTHESIZED_WIRE_12;
reg	DFF_inst13;
wire	SYNTHESIZED_WIRE_13;
wire	SYNTHESIZED_WIRE_14;
wire	[5:0] SYNTHESIZED_WIRE_15;
wire	SYNTHESIZED_WIRE_16;
wire	SYNTHESIZED_WIRE_18;
wire	SYNTHESIZED_WIRE_19;
wire	SYNTHESIZED_WIRE_20;
wire	SYNTHESIZED_WIRE_21;
wire	SYNTHESIZED_WIRE_22;
wire	SYNTHESIZED_WIRE_23;
wire	SYNTHESIZED_WIRE_24;
wire	SYNTHESIZED_WIRE_25;
wire	SYNTHESIZED_WIRE_26;
wire	SYNTHESIZED_WIRE_27;
wire	SYNTHESIZED_WIRE_28;
wire	SYNTHESIZED_WIRE_29;
wire	SYNTHESIZED_WIRE_30;
wire	SYNTHESIZED_WIRE_31;
wire	SYNTHESIZED_WIRE_32;
wire	SYNTHESIZED_WIRE_33;
wire	SYNTHESIZED_WIRE_34;
wire	SYNTHESIZED_WIRE_35;
wire	SYNTHESIZED_WIRE_36;
wire	SYNTHESIZED_WIRE_37;
wire	SYNTHESIZED_WIRE_38;
wire	SYNTHESIZED_WIRE_39;
wire	SYNTHESIZED_WIRE_40;
wire	SYNTHESIZED_WIRE_41;
wire	SYNTHESIZED_WIRE_42;
wire	SYNTHESIZED_WIRE_43;
wire	SYNTHESIZED_WIRE_44;
wire	SYNTHESIZED_WIRE_45;
wire	SYNTHESIZED_WIRE_46;
wire	SYNTHESIZED_WIRE_47;
wire	[1:0] SYNTHESIZED_WIRE_48;
wire	[1:0] SYNTHESIZED_WIRE_49;
wire	SYNTHESIZED_WIRE_50;
wire	[7:0] SYNTHESIZED_WIRE_51;
wire	[7:0] SYNTHESIZED_WIRE_52;
wire	[7:0] SYNTHESIZED_WIRE_53;
wire	[7:0] SYNTHESIZED_WIRE_54;
wire	[7:0] SYNTHESIZED_WIRE_55;
wire	[7:0] SYNTHESIZED_WIRE_56;
wire	[7:0] SYNTHESIZED_WIRE_57;
wire	[7:0] SYNTHESIZED_WIRE_58;
wire	[7:0] SYNTHESIZED_WIRE_59;
wire	[7:0] SYNTHESIZED_WIRE_60;
wire	[7:0] SYNTHESIZED_WIRE_61;
wire	SYNTHESIZED_WIRE_62;
wire	[5:0] SYNTHESIZED_WIRE_70;
wire	SYNTHESIZED_WIRE_64;
wire	[5:0] SYNTHESIZED_WIRE_66;
wire	[7:0] SYNTHESIZED_WIRE_67;

assign	Negative_Flag = SYNTHESIZED_WIRE_24;
assign	Zero_Flag = SYNTHESIZED_WIRE_40;
assign	Carry_Flag = SYNTHESIZED_WIRE_45;
assign	OverFlow_Flag = SYNTHESIZED_WIRE_21;
assign	SYNTHESIZED_WIRE_9 = 1;
assign	SYNTHESIZED_WIRE_12 = 1;
assign	SYNTHESIZED_WIRE_16 = 1;
assign	SYNTHESIZED_WIRE_19 = 1;
assign	SYNTHESIZED_WIRE_62 = 0;
assign	SYNTHESIZED_WIRE_64 = 0;




\8WidWideBusMux 	b2v_ALU_RESULT_Multiplexer(
	.Control(ALU_RESULT_MUX),
	.dataa(SYNTHESIZED_WIRE_0),
	.datab(IMEM_OUTPUT[7:0]),
	.result(ALU_RESULT));


\8WidWideBusMux 	b2v_ALU_Source_Multiplexer(
	.Control(ALU_SOURCE_MUX),
	.dataa(SYNTHESIZED_WIRE_68),
	.datab(IMEM_OUTPUT[7:0]),
	.result(SYNTHESIZED_WIRE_52));


\8WidWideBusMux 	b2v_DMEM_Input_Multiplexer(
	.Control(DMEM_INPUT_MUX),
	.dataa(SYNTHESIZED_WIRE_68),
	.datab(Switch_Input[7:0]),
	.result(SYNTHESIZED_WIRE_61));


\4x8BitRegisters 	b2v_inst(
	.Reset(Reset),
	.Clock(Clock),
	.Write_Enable(REG_WRITE_ENABLE),
	.Read_Port0_Select(REG_PORT0_SELECT),
	.Read_Port1_Select(REG_PORT1_SELECT),
	.REG_INPUT(SYNTHESIZED_WIRE_3),
	.Write_Select(REG_WRITE_SELECT),
	.Reg_A(Reg_A),
	.Reg_B(Reg_B),
	.Reg_C(Reg_C),
	.Reg_D(Reg_D),
	.REG_OUTPUT0(SYNTHESIZED_WIRE_51),
	.REG_OUTPUT1(SYNTHESIZED_WIRE_68));


Opcode_Decoder	b2v_inst1(
	.DEC_INPUT(IMEM_OUTPUT[15:8]),
	.NOOP(SYNTHESIZED_WIRE_25),
	.INPUTC(SYNTHESIZED_WIRE_26),
	.INPUTCF(SYNTHESIZED_WIRE_22),
	.INPUTD(SYNTHESIZED_WIRE_27),
	.INPUTDF(SYNTHESIZED_WIRE_23),
	.MOVE(SYNTHESIZED_WIRE_28),
	.LOADI_LOADP(SYNTHESIZED_WIRE_47),
	.ADD(SYNTHESIZED_WIRE_29),
	.ADDI(SYNTHESIZED_WIRE_30),
	.SUB(SYNTHESIZED_WIRE_31),
	.SUBI(SYNTHESIZED_WIRE_32),
	.LOAD(SYNTHESIZED_WIRE_33),
	.LOADF(SYNTHESIZED_WIRE_34),
	.STORE(SYNTHESIZED_WIRE_35),
	.STOREF(SYNTHESIZED_WIRE_36),
	.SHIFTL(SYNTHESIZED_WIRE_37),
	.SHIFTR(SYNTHESIZED_WIRE_38),
	.CMP(SYNTHESIZED_WIRE_39),
	.JUMP(SYNTHESIZED_WIRE_41),
	.BRE_BRZ(SYNTHESIZED_WIRE_42),
	.BRNE_BRNZ(SYNTHESIZED_WIRE_43),
	.BRG(SYNTHESIZED_WIRE_44),
	.BRGE(SYNTHESIZED_WIRE_46),
	.X(SYNTHESIZED_WIRE_48),
	.Y(SYNTHESIZED_WIRE_49));


Block3	b2v_inst10(
	.i0(SYNTHESIZED_WIRE_4),
	.i1(SYNTHESIZED_WIRE_5),
	.sel(SYNTHESIZED_WIRE_6),
	.mxout(SYNTHESIZED_WIRE_13));


Block3	b2v_inst12(
	.i0(SYNTHESIZED_WIRE_7),
	.i1(SYNTHESIZED_WIRE_8),
	.sel(Video_Map),
	.mxout(Clock));


always@(posedge SYNTHESIZED_WIRE_69 or negedge SYNTHESIZED_WIRE_9 or negedge SYNTHESIZED_WIRE_12)
begin
if (!SYNTHESIZED_WIRE_9)
	begin
	DFF_inst13 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_12)
	begin
	DFF_inst13 <= 1;
	end
else
	begin
	DFF_inst13 <= SYNTHESIZED_WIRE_11;
	end
end


Block3	b2v_inst151(
	.i0(DFF_inst13),
	.i1(SYNTHESIZED_WIRE_13),
	.sel(SYNTHESIZED_WIRE_14),
	.mxout(SYNTHESIZED_WIRE_7));


ProgramCounter	b2v_inst17(
	.Reset(Reset),
	.Clock(Clock),
	.Control(PC_WRITE_ENABLE),
	.PC_Input(SYNTHESIZED_WIRE_15),
	.PC_Output(PC_Output));



always@(posedge SYNTHESIZED_WIRE_69 or negedge SYNTHESIZED_WIRE_16 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_16)
	begin
	Reset <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	Reset <= 1;
	end
else
	begin
	Reset <= SYNTHESIZED_WIRE_18;
	end
end


IMEM	b2v_inst22(
	.Clock(Clock),
	.Reset(Reset),
	.IMEM_WRITE_ENABLE(SYNTHESIZED_WIRE_20),
	.IMEM_INPUT(Switch_Input),
	.IMEM_READ_SELECT(PC_Output),
	.IMEM_WRITE_SELECT(ALU_RESULT[5:0]),
	.IMEM_READ_OUTPUT(IMEM_OUTPUT));


Control_FSM	b2v_inst23(
	.OVERFLOW_FLAG(SYNTHESIZED_WIRE_21),
	.INPUT_DATACF(SYNTHESIZED_WIRE_22),
	.INPUT_DATADF(SYNTHESIZED_WIRE_23),
	.NEGATIVE_FLAG(SYNTHESIZED_WIRE_24),
	.NOOP(SYNTHESIZED_WIRE_25),
	.INPUT_DATAC(SYNTHESIZED_WIRE_26),
	.INPUT_DATAD(SYNTHESIZED_WIRE_27),
	.MOVE(SYNTHESIZED_WIRE_28),
	.ADD(SYNTHESIZED_WIRE_29),
	.ADDI(SYNTHESIZED_WIRE_30),
	.SUB(SYNTHESIZED_WIRE_31),
	.SUBI(SYNTHESIZED_WIRE_32),
	.LOAD(SYNTHESIZED_WIRE_33),
	.LOADF(SYNTHESIZED_WIRE_34),
	.STORE(SYNTHESIZED_WIRE_35),
	.STOREF(SYNTHESIZED_WIRE_36),
	.SHIFTL(SYNTHESIZED_WIRE_37),
	.SHIFTR(SYNTHESIZED_WIRE_38),
	.CMP(SYNTHESIZED_WIRE_39),
	.ZERO_FLAG(SYNTHESIZED_WIRE_40),
	.JUMP(SYNTHESIZED_WIRE_41),
	.BRE/BRZ(SYNTHESIZED_WIRE_42),
	.BRNE/BRNZ(SYNTHESIZED_WIRE_43),
	.BRG(SYNTHESIZED_WIRE_44),
	.CARRY_FLAG(SYNTHESIZED_WIRE_45),
	.BRGE(SYNTHESIZED_WIRE_46),
	.LOADI/LOADP(SYNTHESIZED_WIRE_47),
	.X(SYNTHESIZED_WIRE_48),
	.Y(SYNTHESIZED_WIRE_49),
	.IMEM_WRITE_ENABLE(IMEM_WRITE_ENABLE),
	.PC_MUX(PC_MUX),
	.PC_WRITE_ENABLE(PC_WRITE_ENABLE),
	.REG_WRITE_ENABLE(REG_WRITE_ENABLE),
	.ALU_SOURCE_MUX(ALU_SOURCE_MUX),
	.ALU_SELECT1(ALU_SELECT1),
	.ALU_SELECT0(ALU_SELECT0),
	.FLAGS_WRITE_ENABLE(FLAGS_WRITE_ENABLE),
	.ALU_RESULT_MUX(ALU_RESULT_MUX),
	.DMEM_INPUT_MUX(DMEM_INPUT_MUX),
	.DMEM_WRITE_ENABLE(DMEM_WRITE_ENABLE),
	.REG_WRITEBACK_MUX(REG_WRITEBACK_MUX),
	.REG_PORT0_SELECT(REG_PORT0_SELECT),
	.REG_PORT1_SELECT(REG_PORT1_SELECT),
	.REG_WRITE_SELECT(REG_WRITE_SELECT));






assign	SYNTHESIZED_WIRE_20 = IMEM_WRITE_ENABLE & SYNTHESIZED_WIRE_50;




assign	SYNTHESIZED_WIRE_50 =  ~PC_Output[5];


assign	SYNTHESIZED_WIRE_11 =  ~Manual_Clock;

assign	SYNTHESIZED_WIRE_6 =  ~Turbo_Mode;


Clock_dividers	b2v_inst4(
	.Board_Clock(Board_Clock),
	.Auto_Clock(SYNTHESIZED_WIRE_4),
	.Turbo_Clock(SYNTHESIZED_WIRE_5),
	.VideoGame_Clock(SYNTHESIZED_WIRE_8),
	.Debouncer_Clock(SYNTHESIZED_WIRE_69));

assign	SYNTHESIZED_WIRE_18 =  ~Reset_In;

assign	SYNTHESIZED_WIRE_14 =  ~Auto_Clock;



ALU	b2v_inst6(
	.ALU_Select0(ALU_SELECT0),
	.ALU_Select1(ALU_SELECT1),
	.Clock(Clock),
	.Reset(Reset),
	.Flags_Write_Enable(FLAGS_WRITE_ENABLE),
	.ALU_Input0(SYNTHESIZED_WIRE_51),
	.ALU_Input1(SYNTHESIZED_WIRE_52),
	.NegativeFlagOut(SYNTHESIZED_WIRE_24),
	.ZeroFlagOut(SYNTHESIZED_WIRE_40),
	.CarryFlagOut(SYNTHESIZED_WIRE_45),
	.OverFlowFlagOut(SYNTHESIZED_WIRE_21),
	.ALU_OUTPUT(SYNTHESIZED_WIRE_0));


Video_Card	b2v_inst7(
	.Direct_Video_Map(Video_Map),
	.Register_View(Register_View),
	.REG_IN_A(Reg_A),
	.REG_IN_B(Reg_B),
	.REG_IN_C(Reg_C),
	.REG_IN_D(Reg_D),
	.Video_Input0(SYNTHESIZED_WIRE_53),
	.Video_Input1(SYNTHESIZED_WIRE_54),
	.Video_Input2(SYNTHESIZED_WIRE_55),
	.Video_Input3(SYNTHESIZED_WIRE_56),
	.Video_Input4(SYNTHESIZED_WIRE_57),
	.Video_Input5(SYNTHESIZED_WIRE_58),
	.Video_Input6(SYNTHESIZED_WIRE_59),
	.Video_Input7(SYNTHESIZED_WIRE_60),
	.Video_Output0(Seven_SegOut0),
	.Video_Output1(Seven_SegOut1),
	.Video_Output2(Seven_SegOut2),
	.Video_Output3(Seven_SegOut3),
	.Video_Output4(Seven_SegOut4),
	.Video_Output5(Seven_SegOut5),
	.Video_Output6(Seven_SegOut6),
	.Video_Output7(Seven_SegOut7));


DMEM	b2v_inst8(
	.Write_Enable(DMEM_WRITE_ENABLE),
	.Clock(Clock),
	.Reset(Reset),
	.DMEM_INPUT(SYNTHESIZED_WIRE_61),
	.READ_SELECT(ALU_RESULT[3:0]),
	.WRITE_SELECT(ALU_RESULT[3:0]),
	.DMEM_OUTPUT(SYNTHESIZED_WIRE_67),
	.Seven_Seg0(SYNTHESIZED_WIRE_53),
	.Seven_Seg1(SYNTHESIZED_WIRE_54),
	.Seven_Seg2(SYNTHESIZED_WIRE_55),
	.Seven_Seg3(SYNTHESIZED_WIRE_56),
	.Seven_Seg4(SYNTHESIZED_WIRE_57),
	.Seven_Seg5(SYNTHESIZED_WIRE_58),
	.Seven_Seg6(SYNTHESIZED_WIRE_59),
	.Seven_Seg7(SYNTHESIZED_WIRE_60));



\6bitAdder 	b2v_Program_Counter_Adder_For_Jump_and_Branch_Offsets(
	.Sub(SYNTHESIZED_WIRE_62),
	.First_Input(SYNTHESIZED_WIRE_70),
	.Second_Input(IMEM_OUTPUT[5:0]),
	
	
	.Adder_Output(SYNTHESIZED_WIRE_66));


\6bitAdder 	b2v_Program_Counter_Increment_By_1(
	.Sub(SYNTHESIZED_WIRE_64),
	.First_Input(PC_Output),
	.Second_Input(constantVal),
	
	
	.Adder_Output(SYNTHESIZED_WIRE_70));


\6WideBusMux 	b2v_Program_Counter_Multiplexer(
	.Control(PC_MUX),
	.dataAline(SYNTHESIZED_WIRE_70),
	.dataBline(SYNTHESIZED_WIRE_66),
	.result(SYNTHESIZED_WIRE_15));


\8WidWideBusMux 	b2v_Register_WriteBack_Multiplexer(
	.Control(REG_WRITEBACK_MUX),
	.dataa(ALU_RESULT),
	.datab(SYNTHESIZED_WIRE_67),
	.result(SYNTHESIZED_WIRE_3));

assign	pin_name1 = PC_Output[0];
assign	Video_Map = Direct_Video_Map;
assign	pin_name2 = PC_Output[1];
assign	pin_name3 = PC_Output[2];
assign	pin_name4 = PC_Output[3];
assign	pin_name5 = PC_Output[4];
assign	pin_name6 = PC_Output[5];
assign	REG2_ZERO = IMEM_OUTPUT[8];
assign	REG2_ONE = IMEM_OUTPUT[9];
assign	REG1_ZERO = IMEM_OUTPUT[10];
assign	REG1_ONE = IMEM_OUTPUT[11];
assign	OPCODE0 = IMEM_OUTPUT[12];
assign	OPCODE1 = IMEM_OUTPUT[13];
assign	OPCODE2 = IMEM_OUTPUT[14];
assign	OPCODE3 = IMEM_OUTPUT[15];
assign	IMMEDVAL0 = IMEM_OUTPUT[0];
assign	IMMEDVAL1 = IMEM_OUTPUT[1];
assign	IMMEDVAL2 = IMEM_OUTPUT[2];
assign	IMMEDVAL3 = IMEM_OUTPUT[3];
assign	IMMEDVAL4 = IMEM_OUTPUT[4];
assign	IMMEDVAL5 = IMEM_OUTPUT[5];
assign	IMMEDVAL6 = IMEM_OUTPUT[6];
assign	IMMEDVAL7 = IMEM_OUTPUT[7];
assign	constantVal[0] = 1;
assign	constantVal[1] = 0;
assign	constantVal[2] = 0;
assign	constantVal[3] = 0;
assign	constantVal[4] = 0;
assign	constantVal[5] = 0;

endmodule
