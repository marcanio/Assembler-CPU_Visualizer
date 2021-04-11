module _4to16DecoderWithEnable (
  input wire Enable,
  input wire [3:0] Decoder_Input,
  output wire [15:0] Decoder_Output
  );

  wire firstDecoderEnableInput = ~Decoder_Input[3] & Enable;
  wire secondDecoderEnableInput = Decoder_Input[3] & Enable;

  _3to8DecoderWithEnable firstDecoder(.Enable(firstDecoderEnableInput), .Decoder_Input(Decoder_Input[2:0]), .Decoder_Output(Decoder_Output[7:0]));
  _3to8DecoderWithEnable secondDecoder(.Enable(secondDecoderEnableInput), .Decoder_Input(Decoder_Input[2:0]), .Decoder_Output(Decoder_Output[15:8]));

endmodule // _4to16DecoderWithEnable
