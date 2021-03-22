module _4x8BitRegisters (
  input wire[7:0] REG_INPUT,
  input wire[1:0] READ_PORT0_SELECT, WRITE_SELECT,READ_PORT1_SELECT,
  input wire Clock, Reset, WRITE_ENABLE,

  output wire[7:0] REG_A, REG_B, REG_C, REG_D, REG_OUTPUT0, REG_OUTPUT1
  );

  wire[3:0] DecOutput;

  _2to4DecoderWithEnable RegDec (.Enable(WRITE_ENABLE), .Decoder_Input(WRITE_SELECT), .Decoder_Output(DecOutput));

  _Registers8bit A (.control(DecOutput[0]), .clk(Clock), .Reset(Reset), .REG_INPUT(REG_INPUT), .REG_OUTPUT(REG_A));
  _Registers8bit B (.control(DecOutput[1]), .clk(Clock), .Reset(Reset), .REG_INPUT(REG_INPUT), .REG_OUTPUT(REG_B));
  _Registers8bit C (.control(DecOutput[2]), .clk(Clock), .Reset(Reset), .REG_INPUT(REG_INPUT), .REG_OUTPUT(REG_C));
  _Registers8bit D (.control(DecOutput[3]), .clk(Clock), .Reset(Reset), .REG_INPUT(REG_INPUT), .REG_OUTPUT(REG_D));

  _8Wide4To1BusMux Output1 (.Select(READ_PORT1_SELECT), .data0in(REG_A), .data1in(REG_B), .data2in(REG_C), .data3in(REG_D), .muxresult(REG_OUTPUT1));
  _8Wide4To1BusMux Output0 (.Select(READ_PORT0_SELECT), .data0in(REG_A), .data1in(REG_B), .data2in(REG_C), .data3in(REG_D), .muxresult(REG_OUTPUT0));

endmodule // _4x8BitRegsiters
