module _8WideC16to1BusMux (
  input wire[7:0] muxinput0, muxinput1, muxinput2, muxinput3, muxinput4,
  input wire[7:0] muxinput5, muxinput6, muxinput7, muxinput8, muxinput9,
  input wire[7:0] muxinput10, muxinput11, muxinput12, muxinput13, muxinput14,
  input wire[7:0] muxinput15,
  input wire[3:0]  Select,
  output wire[7:0] muxresult
  );

  wire[7:0] resultMux0, resultMux1, resultMux2, resultMux3, resultMux4, resultMux5, resultMux6, resultMux7, resultMux8, resultMux9, resultMux10, resultMux11, resultMux12, resultMux13, resultMux14, resultMux15;

  //First Layer
  _SixteenWideBusMux mux_0 (.dataa(muxinput0), .datab(muxinput1),   .control(Select[0]), .result(resultMux0));
  _SixteenWideBusMux mux_1 (.dataa(muxinput2), .datab(muxinput3),   .control(Select[0]), .result(resultMux1));
  _SixteenWideBusMux mux_2 (.dataa(muxinput4), .datab(muxinput5),   .control(Select[0]), .result(resultMux2));
  _SixteenWideBusMux mux_3 (.dataa(muxinput6), .datab(muxinput7),   .control(Select[0]), .result(resultMux3));
  _SixteenWideBusMux mux_4 (.dataa(muxinput8), .datab(muxinput9),   .control(Select[0]), .result(resultMux4));
  _SixteenWideBusMux mux_5 (.dataa(muxinput10), .datab(muxinput11), .control(Select[0]), .result(resultMux5));
  _SixteenWideBusMux mux_6 (.dataa(muxinput12), .datab(muxinput13), .control(Select[0]), .result(resultMux6));
  _SixteenWideBusMux mux_7 (.dataa(muxinput14), .datab(muxinput15), .control(Select[0]), .result(resultMux7));

  //Second Layer
  _SixteenWideBusMux mux_8 (.dataa(resultMux0), .datab(resultMux1), .control(Select[1]), .result(resultMux8));
  _SixteenWideBusMux mux_9 (.dataa(resultMux2), .datab(resultMux3), .control(Select[1]), .result(resultMux9));
  _SixteenWideBusMux mux_10 (.dataa(resultMux4), .datab(resultMux5), .control(Select[1]), .result(resultMux10));
  _SixteenWideBusMux mux_11 (.dataa(resultMux6), .datab(resultMux7), .control(Select[1]), .result(resultMux11));

  //Third Layer
  _SixteenWideBusMux mux_12 (.dataa(resultMux8), .datab(resultMux9), .control(Select[2]), .result(resultMux12));
  _SixteenWideBusMux mux_13 (.dataa(resultMux10), .datab(resultMux11), .control(Select[2]), .result(resultMux13));

  //Fourth Layer
  _SixteenWideBusMux mux_14 (.dataa(resultMux12), .datab(resultMux13), .control(Select[3]), .result(muxresult));


endmodule // _C16to1BusMux
