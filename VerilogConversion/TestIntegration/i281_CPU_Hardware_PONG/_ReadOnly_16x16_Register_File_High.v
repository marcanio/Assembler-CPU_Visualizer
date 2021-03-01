module _ReadOnly_16x16_Register_File_High (
  input wire[3:0] READ_SELECT, WRITE_SELECT,
  input wire[15:0] IMEM_INPUT,
  input wire CLOCK, WRITE_ENABLE, RESET,
  output wire[15:0] IMEM_OUTPUT
  );

  //Wire Declarations
  wire[15:0] _4to16Inst37Out, _ONESOutput, SELECTED, MuxArrayResult, RegArrayOutput;
  wire[15:0] b0I, b1I, b2I, b3I, b4I, b5I, b6I, b7I, b8I, b9I, b10I, b11I, b12I, b13I, b14I, b15I;
  wire[15:0] MuxArrayResult0, MuxArrayResult1, MuxArrayResult2, MuxArrayResult3, MuxArrayResult4, MuxArrayResult5, MuxArrayResult6, MuxArrayResult7,
             MuxArrayResult8, MuxArrayResult9, MuxArrayResult10, MuxArrayResult11, MuxArrayResult12, MuxArrayResult13, MuxArrayResult14, MuxArrayResult15;
  wire[15:0] RegArrayOutput0, RegArrayOutput1, RegArrayOutput2, RegArrayOutput3, RegArrayOutput4, RegArrayOutput5, RegArrayOutput6, RegArrayOutput7,
             RegArrayOutput8, RegArrayOutput9, RegArrayOutput10, RegArrayOutput11, RegArrayOutput12, RegArrayOutput13, RegArrayOutput14, RegArrayOutput15;
  wire dffQ;
  wire vcc_signal = 1;

  genvar i;

  dff DFF (.d(vcc_signal), .clk(CLOCK), .clrn(~RESET), .prn(vcc_signal), .q(dffQ));
  _ONES one (.ONE_OUTPUT(_ONESOutput));
  _4to16DecoderWithEnable _4to16Inst37 (.Enable(WRITE_ENABLE), .Decoder_Input(WRITE_SELECT), .Decoder_Output(_4to16Inst37Out));
  _SixteenWideBusMux WideBusMuxInst4 (.dataa(_ONESOutput), .datab(_4to16Inst37Out), .control(dffQ), .result(SELECTED));

  PONG_Code_1 BiosHigh (.b0I(b0I), .b1I(b1I), .b2I(b2I), .b3I(b3I), .b4I(b4I), .b5I(b5I), .b6I(b6I), .b7I(b7I), .b8I(b8I), .b9I(b9I), .b10I(b10I), .b11I(b11I), .b12I(b12I), .b13I(b13I), .b14I(b14I), .b15I(b15I));
  //_BIOS_Hardcoded_High BiosHigh (.b0I(b0I), .b1I(b1I), .b2I(b2I), .b3I(b3I), .b4I(b4I), .b5I(b5I), .b6I(b6I), .b7I(b7I), .b8I(b8I), .b9I(b9I), .b10I(b10I), .b11I(b11I), .b12I(b12I), .b13I(b13I), .b14I(b14I), .b15I(b15I));
  _SixteenWideBusMux WideBusMuxArray0  (.dataa(b0I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult0));
  _SixteenWideBusMux WideBusMuxArray1  (.dataa(b1I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult1));
  _SixteenWideBusMux WideBusMuxArray2  (.dataa(b2I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult2));
  _SixteenWideBusMux WideBusMuxArray3  (.dataa(b3I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult3));
  _SixteenWideBusMux WideBusMuxArray4  (.dataa(b4I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult4));
  _SixteenWideBusMux WideBusMuxArray5  (.dataa(b5I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult5));
  _SixteenWideBusMux WideBusMuxArray6  (.dataa(b6I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult6));
  _SixteenWideBusMux WideBusMuxArray7  (.dataa(b7I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult7));
  _SixteenWideBusMux WideBusMuxArray8  (.dataa(b8I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult8));
  _SixteenWideBusMux WideBusMuxArray9  (.dataa(b9I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult9));
  _SixteenWideBusMux WideBusMuxArray10 (.dataa(b10I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult10));
  _SixteenWideBusMux WideBusMuxArray11 (.dataa(b11I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult11));
  _SixteenWideBusMux WideBusMuxArray12 (.dataa(b12I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult12));
  _SixteenWideBusMux WideBusMuxArray13 (.dataa(b13I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult13));
  _SixteenWideBusMux WideBusMuxArray14 (.dataa(b14I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult14));
  _SixteenWideBusMux WideBusMuxArray15 (.dataa(b15I), .datab(IMEM_INPUT), .control(dffQ), .result(MuxArrayResult15));

  _Registers16bit reg16_0 (.control(SELECTED[0]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult0), .REG_OUTPUT(RegArrayOutput0));
  _Registers16bit reg16_1 (.control(SELECTED[1]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult1), .REG_OUTPUT(RegArrayOutput1));
  _Registers16bit reg16_2 (.control(SELECTED[2]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult2), .REG_OUTPUT(RegArrayOutput2));
  _Registers16bit reg16_3 (.control(SELECTED[3]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult3), .REG_OUTPUT(RegArrayOutput3));
  _Registers16bit reg16_4 (.control(SELECTED[4]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult4), .REG_OUTPUT(RegArrayOutput4));
  _Registers16bit reg16_5 (.control(SELECTED[5]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult5), .REG_OUTPUT(RegArrayOutput5));
  _Registers16bit reg16_6 (.control(SELECTED[6]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult6), .REG_OUTPUT(RegArrayOutput6));
  _Registers16bit reg16_7 (.control(SELECTED[7]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult7), .REG_OUTPUT(RegArrayOutput7));
  _Registers16bit reg16_8 (.control(SELECTED[8]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult8), .REG_OUTPUT(RegArrayOutput8));
  _Registers16bit reg16_9 (.control(SELECTED[9]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult9), .REG_OUTPUT(RegArrayOutput9));
  _Registers16bit reg16_10 (.control(SELECTED[10]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult10), .REG_OUTPUT(RegArrayOutput10));
  _Registers16bit reg16_11 (.control(SELECTED[11]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult11), .REG_OUTPUT(RegArrayOutput11));
  _Registers16bit reg16_12 (.control(SELECTED[12]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult12), .REG_OUTPUT(RegArrayOutput12));
  _Registers16bit reg16_13 (.control(SELECTED[13]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult13), .REG_OUTPUT(RegArrayOutput13));
  _Registers16bit reg16_14 (.control(SELECTED[14]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult14), .REG_OUTPUT(RegArrayOutput14));
  _Registers16bit reg16_15 (.control(SELECTED[15]), .clk(CLOCK), .Reset(RESET), .REG_INPUT(MuxArrayResult15), .REG_OUTPUT(RegArrayOutput15));

  _C16to1BusMux busMux (.muxinput0(RegArrayOutput0), .muxinput1(RegArrayOutput1), .muxinput2(RegArrayOutput2), .muxinput3(RegArrayOutput3), .muxinput4(RegArrayOutput4), .muxinput5(RegArrayOutput5),
                        .muxinput6(RegArrayOutput6), .muxinput7(RegArrayOutput7), .muxinput8(RegArrayOutput8), .muxinput9(RegArrayOutput9), .muxinput10(RegArrayOutput10), .muxinput11(RegArrayOutput11),
                        .muxinput12(RegArrayOutput12), .muxinput13(RegArrayOutput13), .muxinput14(RegArrayOutput14), .muxinput15(RegArrayOutput15), .Select(READ_SELECT), .muxresult(IMEM_OUTPUT));




endmodule // _ReadOnly_16x16_Register_File_High
