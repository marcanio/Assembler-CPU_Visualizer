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
// CREATED		"Tue Oct 27 19:59:57 2020"

module ProgramCounter(
	Reset,
	Clock,
	Control,
	PC_Input,
	PC_Output
);


input wire	Reset;
input wire	Clock;
input wire	Control;
input wire	[5:0] PC_Input;
output wire	[5:0] PC_Output;

reg	[5:0] PC_Output_ALTERA_SYNTHESIZED;
wire	SYNTHESIZED_WIRE_18;
wire	SYNTHESIZED_WIRE_1;
wire	SYNTHESIZED_WIRE_19;
wire	SYNTHESIZED_WIRE_4;
wire	SYNTHESIZED_WIRE_7;
wire	SYNTHESIZED_WIRE_10;
wire	SYNTHESIZED_WIRE_13;
wire	SYNTHESIZED_WIRE_16;

assign	SYNTHESIZED_WIRE_19 = 1;




always@(posedge Clock or negedge SYNTHESIZED_WIRE_18 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_18)
	begin
	PC_Output_ALTERA_SYNTHESIZED[0] <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	PC_Output_ALTERA_SYNTHESIZED[0] <= 1;
	end
else
	begin
	PC_Output_ALTERA_SYNTHESIZED[0] <= SYNTHESIZED_WIRE_1;
	end
end


Block3	b2v_inst1(
	.i0(PC_Output_ALTERA_SYNTHESIZED[0]),
	.i1(PC_Input[0]),
	.sel(Control),
	.mxout(SYNTHESIZED_WIRE_1));


Block3	b2v_inst10(
	.i0(PC_Output_ALTERA_SYNTHESIZED[2]),
	.i1(PC_Input[2]),
	.sel(Control),
	.mxout(SYNTHESIZED_WIRE_7));


Block3	b2v_inst11(
	.i0(PC_Output_ALTERA_SYNTHESIZED[3]),
	.i1(PC_Input[3]),
	.sel(Control),
	.mxout(SYNTHESIZED_WIRE_10));


Block3	b2v_inst12(
	.i0(PC_Output_ALTERA_SYNTHESIZED[4]),
	.i1(PC_Input[4]),
	.sel(Control),
	.mxout(SYNTHESIZED_WIRE_13));


Block3	b2v_inst13(
	.i0(PC_Output_ALTERA_SYNTHESIZED[5]),
	.i1(PC_Input[5]),
	.sel(Control),
	.mxout(SYNTHESIZED_WIRE_16));

assign	SYNTHESIZED_WIRE_18 =  ~Reset;


Block3	b2v_inst3(
	.i0(PC_Output_ALTERA_SYNTHESIZED[1]),
	.i1(PC_Input[1]),
	.sel(Control),
	.mxout(SYNTHESIZED_WIRE_4));


always@(posedge Clock or negedge SYNTHESIZED_WIRE_18 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_18)
	begin
	PC_Output_ALTERA_SYNTHESIZED[1] <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	PC_Output_ALTERA_SYNTHESIZED[1] <= 1;
	end
else
	begin
	PC_Output_ALTERA_SYNTHESIZED[1] <= SYNTHESIZED_WIRE_4;
	end
end


always@(posedge Clock or negedge SYNTHESIZED_WIRE_18 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_18)
	begin
	PC_Output_ALTERA_SYNTHESIZED[2] <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	PC_Output_ALTERA_SYNTHESIZED[2] <= 1;
	end
else
	begin
	PC_Output_ALTERA_SYNTHESIZED[2] <= SYNTHESIZED_WIRE_7;
	end
end


always@(posedge Clock or negedge SYNTHESIZED_WIRE_18 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_18)
	begin
	PC_Output_ALTERA_SYNTHESIZED[3] <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	PC_Output_ALTERA_SYNTHESIZED[3] <= 1;
	end
else
	begin
	PC_Output_ALTERA_SYNTHESIZED[3] <= SYNTHESIZED_WIRE_10;
	end
end


always@(posedge Clock or negedge SYNTHESIZED_WIRE_18 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_18)
	begin
	PC_Output_ALTERA_SYNTHESIZED[4] <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	PC_Output_ALTERA_SYNTHESIZED[4] <= 1;
	end
else
	begin
	PC_Output_ALTERA_SYNTHESIZED[4] <= SYNTHESIZED_WIRE_13;
	end
end


always@(posedge Clock or negedge SYNTHESIZED_WIRE_18 or negedge SYNTHESIZED_WIRE_19)
begin
if (!SYNTHESIZED_WIRE_18)
	begin
	PC_Output_ALTERA_SYNTHESIZED[5] <= 0;
	end
else
if (!SYNTHESIZED_WIRE_19)
	begin
	PC_Output_ALTERA_SYNTHESIZED[5] <= 1;
	end
else
	begin
	PC_Output_ALTERA_SYNTHESIZED[5] <= SYNTHESIZED_WIRE_16;
	end
end


assign	PC_Output = PC_Output_ALTERA_SYNTHESIZED;

endmodule
