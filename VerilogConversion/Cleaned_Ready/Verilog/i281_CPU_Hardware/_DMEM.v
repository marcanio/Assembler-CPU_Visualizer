module _DMEM (
  input wire Write_Enable, Reset, Clock,
  input wire[3:0] WRITE_SELECT, READ_SELECT,
  input wire[7:0] DMEM_INPUT,

  output wire[7:0] DMEM_OUTPUT, Seven_Seg0, Seven_Seg1, Seven_Seg2, Seven_Seg3, Seven_Seg4, Seven_Seg5, Seven_Seg6, Seven_Seg7
  //421
  );

  wire[15:0] DecOut, _ONESOutput;
  wire[7:0] b0I, b1I, b2I, b3I, b4I, b5I, b6I, b7I, b8I, b9I, b10I, b11I, b12I, b13I, b14I, b15I;
  wire[7:0] MuxArrayResult0, MuxArrayResult1, MuxArrayResult2, MuxArrayResult3, MuxArrayResult4, MuxArrayResult5, MuxArrayResult6, MuxArrayResult7,
             MuxArrayResult8, MuxArrayResult9, MuxArrayResult10, MuxArrayResult11, MuxArrayResult12, MuxArrayResult13, MuxArrayResult14, MuxArrayResult15;
  wire[7:0] RegArrayOutput0, RegArrayOutput1, RegArrayOutput2, RegArrayOutput3, RegArrayOutput4, RegArrayOutput5, RegArrayOutput6, RegArrayOutput7,
             RegArrayOutput8, RegArrayOutput9, RegArrayOutput10, RegArrayOutput11, RegArrayOutput12, RegArrayOutput13, RegArrayOutput14, RegArrayOutput15;
  wire DFF_Q, vcc_signal;

  wire[15:0] SELECTED;

  assign vcc_signal = 1;


  dff DFF69420 (.d(vcc_signal), .clk(Clock), .clrn(~Reset), .prn(vcc_signal), .q(DFF_Q));

  _4to16DecoderWithEnable Dec (.Enable(Write_Enable), .Decoder_Input(WRITE_SELECT), .Decoder_Output(DecOut));

  _ONES one (.ONE_OUTPUT(_ONESOutput));

  _SixteenWideBusMux(.control(DFF_Q), .dataa(_ONESOutput), .datab(DecOut), .result(SELECTED));

  User_Data UserD (.b0I(b0I), .b1I(b1I), .b2I(b2I), .b3I(b3I), .b4I(b4I), .b5I(b5I), .b6I(b6I), .b7I(b7I), .b8I(b8I), .b9I(b9I), .b10I(b10I), .b11I(b11I), .b12I(b12I), .b13I(b13I), .b14I(b14I), .b15I(b15I));

  _8WideBusMux WideBusMuxArray0  (.dataa(b0I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult0));
  _8WideBusMux WideBusMuxArray1  (.dataa(b1I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult1));
  _8WideBusMux WideBusMuxArray2  (.dataa(b2I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult2));
  _8WideBusMux WideBusMuxArray3  (.dataa(b3I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult3));
  _8WideBusMux WideBusMuxArray4  (.dataa(b4I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult4));
  _8WideBusMux WideBusMuxArray5  (.dataa(b5I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult5));
  _8WideBusMux WideBusMuxArray6  (.dataa(b6I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult6));
  _8WideBusMux WideBusMuxArray7  (.dataa(b7I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult7));
  _8WideBusMux WideBusMuxArray8  (.dataa(b8I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult8));
  _8WideBusMux WideBusMuxArray9  (.dataa(b9I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult9));
  _8WideBusMux WideBusMuxArray10 (.dataa(b10I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult10));
  _8WideBusMux WideBusMuxArray11 (.dataa(b11I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult11));
  _8WideBusMux WideBusMuxArray12 (.dataa(b12I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult12));
  _8WideBusMux WideBusMuxArray13 (.dataa(b13I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult13));
  _8WideBusMux WideBusMuxArray14 (.dataa(b14I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult14));
  _8WideBusMux WideBusMuxArray15 (.dataa(b15I), .datab(DMEM_INPUT), .control(DFF_Q), .result(MuxArrayResult15));

  _Registers8bit reg8_0 (.control(SELECTED[0]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult0), .REG_OUTPUT(RegArrayOutput0));
  _Registers8bit reg8_1 (.control(SELECTED[1]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult1), .REG_OUTPUT(RegArrayOutput1));
  _Registers8bit reg8_2 (.control(SELECTED[2]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult2), .REG_OUTPUT(RegArrayOutput2));
  _Registers8bit reg8_3 (.control(SELECTED[3]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult3), .REG_OUTPUT(RegArrayOutput3));
  _Registers8bit reg8_4 (.control(SELECTED[4]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult4), .REG_OUTPUT(RegArrayOutput4));
  _Registers8bit reg8_5 (.control(SELECTED[5]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult5), .REG_OUTPUT(RegArrayOutput5));
  _Registers8bit reg8_6 (.control(SELECTED[6]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult6), .REG_OUTPUT(RegArrayOutput6));
  _Registers8bit reg8_7 (.control(SELECTED[7]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult7), .REG_OUTPUT(RegArrayOutput7));
  _Registers8bit reg8_8 (.control(SELECTED[8]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult8), .REG_OUTPUT(RegArrayOutput8));
  _Registers8bit reg8_9 (.control(SELECTED[9]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult9), .REG_OUTPUT(RegArrayOutput9));
  _Registers8bit reg8_10 (.control(SELECTED[10]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult10), .REG_OUTPUT(RegArrayOutput10));
  _Registers8bit reg8_11 (.control(SELECTED[11]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult11), .REG_OUTPUT(RegArrayOutput11));
  _Registers8bit reg8_12 (.control(SELECTED[12]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult12), .REG_OUTPUT(RegArrayOutput12));
  _Registers8bit reg8_13 (.control(SELECTED[13]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult13), .REG_OUTPUT(RegArrayOutput13));
  _Registers8bit reg8_14 (.control(SELECTED[14]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult14), .REG_OUTPUT(RegArrayOutput14));
  _Registers8bit reg8_15 (.control(SELECTED[15]), .clk(Clock), .Reset(Reset), .REG_INPUT(MuxArrayResult15), .REG_OUTPUT(RegArrayOutput15));

  _8WideC16to1BusMux busMux (.muxinput0(RegArrayOutput0), .muxinput1(RegArrayOutput1), .muxinput2(RegArrayOutput2), .muxinput3(RegArrayOutput3), .muxinput4(RegArrayOutput4), .muxinput5(RegArrayOutput5),
                        .muxinput6(RegArrayOutput6), .muxinput7(RegArrayOutput7), .muxinput8(RegArrayOutput8), .muxinput9(RegArrayOutput9), .muxinput10(RegArrayOutput10), .muxinput11(RegArrayOutput11),
                        .muxinput12(RegArrayOutput12), .muxinput13(RegArrayOutput13), .muxinput14(RegArrayOutput14), .muxinput15(RegArrayOutput15), .Select(READ_SELECT), .muxresult(DMEM_OUTPUT));

  assign Seven_Seg0 = RegArrayOutput7;
  assign Seven_Seg1 = RegArrayOutput6;
  assign Seven_Seg2 = RegArrayOutput5;
  assign Seven_Seg3 = RegArrayOutput4;
  assign Seven_Seg4 = RegArrayOutput3;
  assign Seven_Seg5 = RegArrayOutput2;
  assign Seven_Seg6 = RegArrayOutput1;
  assign Seven_Seg7 = RegArrayOutput0;

endmodule
