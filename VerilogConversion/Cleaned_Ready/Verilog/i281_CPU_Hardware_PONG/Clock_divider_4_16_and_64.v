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
// CREATED		"Mon Feb 22 15:03:53 2021"

module Clock_divider_4_16_and_64(
	CLK_IN,
	CLK_OUT64,
	CLK_OUT16,
	CLK_OUT4
);


input wire	CLK_IN;
output reg	CLK_OUT64;
output wire	CLK_OUT16;
output wire	CLK_OUT4;

wire	SYNTHESIZED_WIRE_20;
wire	SYNTHESIZED_WIRE_21;
reg	SYNTHESIZED_WIRE_22;
reg	TFF_inst2;
wire	SYNTHESIZED_WIRE_23;
reg	TFF_inst3;
wire	SYNTHESIZED_WIRE_24;
reg	TFF_inst4;
wire	SYNTHESIZED_WIRE_25;
reg	TFF_inst5;
wire	SYNTHESIZED_WIRE_19;

assign	CLK_OUT16 = TFF_inst4;
assign	CLK_OUT4 = TFF_inst2;
assign	SYNTHESIZED_WIRE_20 = 1;
assign	SYNTHESIZED_WIRE_21 = 1;





always@(posedge CLK_IN or negedge SYNTHESIZED_WIRE_21 or negedge SYNTHESIZED_WIRE_20)
begin
if (!SYNTHESIZED_WIRE_21)
	begin
	SYNTHESIZED_WIRE_22 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_20)
	begin
	SYNTHESIZED_WIRE_22 <= 1;
	end
else
	SYNTHESIZED_WIRE_22 <= SYNTHESIZED_WIRE_22 ^ SYNTHESIZED_WIRE_20;
end

assign	SYNTHESIZED_WIRE_23 = SYNTHESIZED_WIRE_22 & TFF_inst2;

assign	SYNTHESIZED_WIRE_24 = SYNTHESIZED_WIRE_23 & TFF_inst3;

assign	SYNTHESIZED_WIRE_25 = SYNTHESIZED_WIRE_24 & TFF_inst4;

assign	SYNTHESIZED_WIRE_19 = SYNTHESIZED_WIRE_25 & TFF_inst5;


always@(posedge CLK_IN or negedge SYNTHESIZED_WIRE_21 or negedge SYNTHESIZED_WIRE_20)
begin
if (!SYNTHESIZED_WIRE_21)
	begin
	TFF_inst2 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_20)
	begin
	TFF_inst2 <= 1;
	end
else
	TFF_inst2 <= TFF_inst2 ^ SYNTHESIZED_WIRE_22;
end


always@(posedge CLK_IN or negedge SYNTHESIZED_WIRE_21 or negedge SYNTHESIZED_WIRE_20)
begin
if (!SYNTHESIZED_WIRE_21)
	begin
	TFF_inst3 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_20)
	begin
	TFF_inst3 <= 1;
	end
else
	TFF_inst3 <= TFF_inst3 ^ SYNTHESIZED_WIRE_23;
end


always@(posedge CLK_IN or negedge SYNTHESIZED_WIRE_21 or negedge SYNTHESIZED_WIRE_20)
begin
if (!SYNTHESIZED_WIRE_21)
	begin
	TFF_inst4 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_20)
	begin
	TFF_inst4 <= 1;
	end
else
	TFF_inst4 <= TFF_inst4 ^ SYNTHESIZED_WIRE_24;
end


always@(posedge CLK_IN or negedge SYNTHESIZED_WIRE_21 or negedge SYNTHESIZED_WIRE_20)
begin
if (!SYNTHESIZED_WIRE_21)
	begin
	TFF_inst5 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_20)
	begin
	TFF_inst5 <= 1;
	end
else
	TFF_inst5 <= TFF_inst5 ^ SYNTHESIZED_WIRE_25;
end


always@(posedge CLK_IN or negedge SYNTHESIZED_WIRE_21 or negedge SYNTHESIZED_WIRE_20)
begin
if (!SYNTHESIZED_WIRE_21)
	begin
	CLK_OUT64 <= 0;
	end
else
if (!SYNTHESIZED_WIRE_20)
	begin
	CLK_OUT64 <= 1;
	end
else
	CLK_OUT64 <= CLK_OUT64 ^ SYNTHESIZED_WIRE_19;
end



endmodule
