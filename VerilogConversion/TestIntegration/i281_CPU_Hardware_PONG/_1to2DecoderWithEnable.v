module _1to2DecoderWithEnable (
  input wire Enable,
  input wire Decoder_Input,
  output wire[1:0] Decoder_Output
  );

  wire AND10 = ~Decoder_Input & Enable;
  wire AND11 = Decoder_Input & Enable;

  assign Decoder_Output[0] = AND10;
  assign Decoder_Output[1] = AND11;



endmodule //
