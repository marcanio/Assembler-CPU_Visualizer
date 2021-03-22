module _6WideBusMux #(parameter N = 6)(
  input wire Control,
  input wire [N-1:0] dataAline,
  input wire [N-1:0] dataBline,
  output wire [N-1:0] result
  );

  genvar i;

  generate
    for(i = 0; i < N; i = i + 1) begin : mux
      _2to1mux mux (.i0(dataAline[i]), .i1(dataBline[i]), .sel(Control), .mxout(result[i]));
    end
  endgenerate

endmodule
