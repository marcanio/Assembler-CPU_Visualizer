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
// CREATED		"Mon Feb 22 15:05:39 2021"

module Clock_dividers(
	Board_Clock,
	Debouncer_Clock,
	VideoGame_Clock,
	Auto_Clock,
	Turbo_Clock
);


input wire	Board_Clock;
output wire	Debouncer_Clock;
output wire	VideoGame_Clock;
output wire	Auto_Clock;
output wire	Turbo_Clock;

wire	SYNTHESIZED_WIRE_0;
wire	SYNTHESIZED_WIRE_1;

assign	VideoGame_Clock = SYNTHESIZED_WIRE_1;




Clock_divider_512	b2v_inst(
	.CLK_IN(SYNTHESIZED_WIRE_0),
	.CLK_OUT(SYNTHESIZED_WIRE_1));


Clock_divider_512	b2v_inst2(
	.CLK_IN(Board_Clock),
	.CLK_OUT(SYNTHESIZED_WIRE_0));


Clock_divider_4_16_and_64	b2v_inst4(
	.CLK_IN(SYNTHESIZED_WIRE_1),
	.CLK_OUT64(Auto_Clock),
	.CLK_OUT16(Turbo_Clock),
	.CLK_OUT4(Debouncer_Clock));


endmodule
