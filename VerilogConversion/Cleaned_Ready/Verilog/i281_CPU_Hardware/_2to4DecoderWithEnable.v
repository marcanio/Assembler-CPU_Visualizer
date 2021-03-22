module _2to4DecoderWithEnable (
  input wire Enable,
  input wire[1:0] Decoder_Input,
  output wire[3:0] Decoder_Output
  );

  assign Decoder_Output[0] = ~Decoder_Input[0] & ~Decoder_Input[1] & Enable;
  assign Decoder_Output[1] =  Decoder_Input[0] & ~Decoder_Input[1] & Enable;
  assign Decoder_Output[2] = ~Decoder_Input[0] &  Decoder_Input[1] & Enable;
  assign Decoder_Output[3] =  Decoder_Input[0] &  Decoder_Input[1] & Enable;

endmodule // _2to4DecoderWithEnable
