module _3to8DecoderWithEnable (
  input wire Enable,
  input wire [2:0] Decoder_Input,
  output wire [7:0] Decoder_Output
  );

  wire firstDecoderEnableInput = ~Decoder_Input[2] & Enable;
  wire secondDecoderEnableInput = Decoder_Input[2] & Enable;

  _2to4DecoderWithEnable firstDecoder(.Enable(firstDecoderEnableInput), .Decoder_Input(Decoder_Input[1:0]), .Decoder_Output(Decoder_Output[3:0]));
  _2to4DecoderWithEnable secondDecoder(.Enable(secondDecoderEnableInput), .Decoder_Input(Decoder_Input[1:0]), .Decoder_Output(Decoder_Output[7:4]));

endmodule // _3to8Decoder
