module _SixteenWideBusMux #(parameter N = 16)(
  input wire[N-1:0] dataa,
  input wire[N-1:0] datab,
  input wire control,
  output wire[N-1:0] result
  );

  genvar i;

  generate
    for(i = 0; i < N; i = i  + 1) begin : BusMux
      _2to1mux mux1 (.i0(dataa[i]), .i1(datab[i]), .sel(control), .mxout(result[i]));
    end
  endgenerate

endmodule // _SixteenWideBusMux
