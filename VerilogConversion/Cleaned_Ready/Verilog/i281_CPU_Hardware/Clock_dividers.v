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

wire	FirstWire;
wire	SecondWire;

assign	VideoGame_Clock = SecondWire;




Clock_divider_512	b2v_inst(
	.CLK_IN(FirstWire),
	.CLK_OUT(SecondWire));


Clock_divider_512	b2v_inst2(
	.CLK_IN(Board_Clock),
	.CLK_OUT(FirstWire));


Clock_divider_4_16_and_64	b2v_inst4(
	.CLK_IN(SecondWire),
	.CLK_OUT64(Auto_Clock),
	.CLK_OUT16(Turbo_Clock),
	.CLK_OUT4(Debouncer_Clock));


endmodule
