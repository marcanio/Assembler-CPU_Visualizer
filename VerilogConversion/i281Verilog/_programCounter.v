module _programCounter #(parameter N = 6)(
  input wire [N-1:0] PC_Input,
  input wire Control,
  input wire Clock,
  input wire Reset,
  output wire [N-1:0] PC_Output
  );

  wire [N-1:0] muxOut;
  wire notReset;

  assign notReset = ~Reset;
  assign vcc_signal = 1;


  genvar i;

  generate
    for(i = 0; i < N; i = i + 1) begin : PC_Count
      _2to1mux mux (.i0(PC_Output[i]), .i1(PC_Input[i]), .sel(Control), .mxout(muxOut[i]));
      dff DFF (.d(muxOut[i]), .clk(Clock), .clrn(notReset), .prn(vcc_signal), .q(PC_Output[i]));
      end
  endgenerate

endmodule
