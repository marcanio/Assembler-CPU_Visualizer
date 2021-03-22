module _Clock_divider_512 #(parameter N = 9)(
  input CLK_IN,
  output CLK_OUT
  );

  wire vcc_signal = 1;
  wire[N-1:0] QOut;
  wire[6:0] ANDResult;

  tff TFF1(.t(vcc_signal), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[0]));
  tff TFF2(.t(QOut[0]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));

  assign ANDResult[0] = QOut[0] & QOut[1];
  tff TFF3(.t(ANDResult[0]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[2]));

  assign ANDResult[1] = QOut[1] & QOut[2];
  tff TFF4(.t(ANDResult[1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[3]));


  //
  // tff TFF4(.t(QOut[1] & QOut[2]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));
  // tff TFF5(.t(QOut[0] & QOut[1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));
  // tff TFF6(.t(QOut[0] & QOut[1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));
  // tff TFF7(.t(QOut[0] & QOut[1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));
  // tff TFF8(.t(QOut[0] & QOut[1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));
  // tff TFF9(.t(QOut[0] & QOut[1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[1]));

  // genvar i;
  //
  // generate
  //   for(i = 2; i < 8; i = i + 1) begin : tffMadness
  //     tff TFF3(.t(QOut[i-2] & QOut[i-1]), .clk(CLK_IN), .clrn(vcc_signal), .prn(vcc_signal), .q(QOut[i]));
  //   end
  // endgenerate




endmodule // _Clock_divider_51
