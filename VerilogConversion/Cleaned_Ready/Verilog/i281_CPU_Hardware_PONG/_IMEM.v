module _IMEM (
  input wire Clock, Reset, IMEM_WRITE_ENABLE,
  input wire[5:0] IMEM_READ_SELECT, IMEM_WRITE_SELECT,
  input wire[15:0] IMEM_INPUT,

  output wire[15:0] IMEM_READ_OUTPUT
  );

  assign _GND = 0;

  wire[3:0] IMEMDecoderOutput;
  wire[15:0] RegData0, RegData1, RegData2, RegData3;

  assign RO_WE_LOW = IMEMDecoderOutput[0] & _GND;
  assign RO_WE_HIGH = IMEMDecoderOutput[1] & _GND;

  _2to4DecoderWithEnable IMEMDecoder (.Enable(IMEM_WRITE_ENABLE), .Decoder_Input(IMEM_WRITE_SELECT[5:4]), .Decoder_Output(IMEMDecoderOutput));

  //READ_ONLY
  _ReadOnly_16x16_Register_File_Low RO_Low (.READ_SELECT(IMEM_READ_SELECT[3:0]), .WRITE_SELECT(IMEM_WRITE_SELECT[3:0]), .IMEM_INPUT(IMEM_INPUT), .WRITE_ENABLE(RO_WE_LOW), .CLOCK(Clock), .RESET(Reset), .IMEM_OUTPUT(RegData0));
  _ReadOnly_16x16_Register_File_High RO_High (.READ_SELECT(IMEM_READ_SELECT[3:0]), .WRITE_SELECT(IMEM_WRITE_SELECT[3:0]), .IMEM_INPUT(IMEM_INPUT), .WRITE_ENABLE(RO_WE_HIGH), .CLOCK(Clock), .RESET(Reset), .IMEM_OUTPUT(RegData1));


  //INSTRUCTION_MEMORY
  _IMEM_low IMEMLow (.READ_SELECT(IMEM_READ_SELECT[3:0]), .WRITE_SELECT(IMEM_WRITE_SELECT[3:0]), .IMEM_INPUT(IMEM_INPUT), .WRITE_ENABLE(IMEMDecoderOutput[2]), .CLOCK(Clock), .RESET(Reset), .IMEM_OUTPUT(RegData2));
  _IMEM_high IMEMHigh (.READ_SELECT(IMEM_READ_SELECT[3:0]), .WRITE_SELECT(IMEM_WRITE_SELECT[3:0]), .IMEM_INPUT(IMEM_INPUT), .WRITE_ENABLE(IMEMDecoderOutput[3]), .CLOCK(Clock), .RESET(Reset), .IMEM_OUTPUT(RegData3));


  _16Wide4To1BusMux IMEMBuxMux (.Select(IMEM_READ_SELECT[5:4]), .data0in(RegData0), .data1in(RegData1), .data2in(RegData2), .data3in(RegData3), .muxresult(IMEM_READ_OUTPUT));

endmodule // _IMEM
