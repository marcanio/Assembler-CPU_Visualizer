module _ALU_Flag_Calculator(
  input wire[7:0] REG_INPUT,
  output wire Negative, Zero
  );

  assign Negative = REG_INPUT[7];
  assign Zero = ~(|REG_INPUT);

endmodule
