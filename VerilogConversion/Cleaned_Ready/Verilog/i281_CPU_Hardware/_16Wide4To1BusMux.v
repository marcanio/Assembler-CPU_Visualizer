module _16Wide4To1BusMux #(parameter N = 16)(
    input wire[N-1:0] data0in, data1in, data2in, data3in,
    input wire[1:0] Select,

    output wire[N-1:0] muxresult
  );

  wire[N-1:0] muxresult0, muxresult1;

  _SixteenWideBusMux mux0 (.dataa(data0in), .datab(data1in), .control(Select[0]), .result(muxresult0));
  _SixteenWideBusMux mux1 (.dataa(data2in), .datab(data3in), .control(Select[0]), .result(muxresult1));

  _SixteenWideBusMux mux2 (.dataa(muxresult0), .datab(muxresult1), .control(Select[1]), .result(muxresult));

endmodule // _16Wide4To1BusMux
