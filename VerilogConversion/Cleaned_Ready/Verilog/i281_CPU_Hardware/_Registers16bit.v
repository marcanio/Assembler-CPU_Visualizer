module _Registers16bit #(parameter N = 16) (
  input wire[N-1:0] REG_INPUT,
  input wire control, clk, Reset,
  output wire[N-1:0] REG_OUTPUT
  );

  wire[N-1:0] mxout;
  wire[N-1:0] dffQ;

  genvar i;
  assign vcc_signal = 1;

  generate
    for(i = 0; i < N; i = i + 1) begin : rmux
      _2to1mux regMux (.i0(dffQ[i]), .i1(REG_INPUT[i]), .sel(control), .mxout(mxout[i]));
      dff DFF (.d(mxout[i]), .clk(clk), .clrn(~Reset), .prn(vcc_signal), .q(dffQ[i]));
      assign REG_OUTPUT[i] = dffQ[i];
    end
  endgenerate

endmodule
