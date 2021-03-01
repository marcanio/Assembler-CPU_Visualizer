module _Flag_Registers(
  input wire Write_Enable, Clock, Reset, ZeroFlag, NegativeFlag, OverFlowFlag, CarryFlag,
  output wire ZeroFlagOut, NegativeFlagOut, OverFlowFlagOut, CarryFlagOut
);

    wire ZeroMuxWire, NegativeMuxWire, OverFlowMuxWire, CarryMuxWire;

    assign vcc_signal = 1;
    _2to1mux muxZero (.i0(ZeroFlagOut), .i1(ZeroFlag), .sel(Write_Enable), .mxout(ZeroMuxWire));
    _2to1mux muxNegative (.i0(NegativeFlagOut), .i1(NegativeFlag), .sel(Write_Enable), .mxout(NegativeMuxWire));
    _2to1mux muxOverFlow (.i0(OverFlowFlagOut), .i1(OverFlowFlag), .sel(Write_Enable), .mxout(OverFlowMuxWire));
    _2to1mux muxCarry (.i0(CarryFlagOut), .i1(CarryFlag), .sel(Write_Enable), .mxout(CarryMuxWire));

    dff DFFZero (.d(ZeroMuxWire), .clk(Clock), .clrn(~Reset), .prn(vcc_signal), .q(ZeroFlagOut));
    dff DFFNeg (.d(NegativeMuxWire), .clk(Clock), .clrn(~Reset), .prn(vcc_signal), .q(NegativeFlagOut));
    dff DFFOver (.d(OverFlowMuxWire), .clk(Clock), .clrn(~Reset), .prn(vcc_signal), .q(OverFlowFlagOut));
    dff DFFCarry (.d(CarryMuxWire), .clk(Clock), .clrn(~Reset), .prn(vcc_signal), .q(CarryFlagOut));


endmodule
