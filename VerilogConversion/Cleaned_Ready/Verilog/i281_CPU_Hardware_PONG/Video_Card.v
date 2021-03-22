module Video_Card(
  input wire Direct_Video_Map,
  input wire Register_View,
  input wire[7:0] Video_Input0,
  input wire[7:0] Video_Input1,
  input wire[7:0] Video_Input2,
  input wire[7:0] Video_Input3,
  input wire[7:0] Video_Input4,
  input wire[7:0] Video_Input5,
  input wire[7:0] Video_Input6,
  input wire[7:0] Video_Input7,

  input wire[7:0] REG_IN_A,
  input wire[7:0] REG_IN_B,
  input wire[7:0] REG_IN_C,
  input wire[7:0] REG_IN_D,

  output wire[6:0] Video_Output0,
  output wire[6:0] Video_Output1,
  output wire[6:0] Video_Output2,
  output wire[6:0] Video_Output3,
  output wire[6:0] Video_Output4,
  output wire[6:0] Video_Output5,
  output wire[6:0] Video_Output6,
  output wire[6:0] Video_Output7
  );

  //This will be wired via layers. Layer 0 to 7, representing each Video_Input[n] bus

  /*********/
  /*Layer 0*/
  /*********/
  wire[6:0] _6BitSevenSeg_0;
  wire[3:0] _3BitSevenSeg_0;
  wire[3:0] _3BitRegInD_0;

  assign _6BitSevenSeg_0 = Video_Input0[6:0];
  assign _3BitSevenSeg_0 = Video_Input0[3:0];
  assign _3BitRegInD_0 = REG_IN_D[3:0];

  wire[3:0] BusMuxResult_0;
  wire[6:0] SevenSegBusResult_0;

  _4WideBusMux BusMux0 (.dataAline(_3BitSevenSeg_0),. dataBline(_3BitRegInD_0), .Control(Register_View), .result(BusMuxResult_0));
  seven_seg_decoder_BUSOUT sevenBUSOUT0(.INARR(BusMuxResult_0), .OUTARR(SevenSegBusResult_0));
  _7WideBusMux SevenWideBus0(.dataa(_6BitSevenSeg_0), .datab(SevenSegBusResult_0), .control(~Direct_Video_Map), .result(Video_Output0));

  /*********/
  /*Layer 1*/
  /*********/

  wire[6:0] _6BitSevenSeg_1;
  wire[3:0] _3BitSevenSeg_1;
  wire[3:0] _3BitRegInC;

  assign _6BitSevenSeg_1 = Video_Input1[6:0];
  assign _3BitSevenSeg_1 = Video_Input1[3:0];
  assign _3BitRegInC = REG_IN_C[3:0];

  wire[3:0] BusMuxResult_1;
  wire[6:0] SevenSegBusResult_1;

  _4WideBusMux BusMux1 (.dataAline(_3BitSevenSeg_1),. dataBline(_3BitRegInC), .Control(Register_View), .result(BusMuxResult_1));
  seven_seg_decoder_BUSOUT sevenBUSOUT1(.INARR(BusMuxResult_1), .OUTARR(SevenSegBusResult_1));
  _7WideBusMux SevenWideBus1(.dataa(_6BitSevenSeg_1), .datab(SevenSegBusResult_1), .control(~Direct_Video_Map), .result(Video_Output1));

  /*********/
  /*Layer 2*/
  /*********/

  wire[6:0] _6BitSevenSeg_2;
  wire[3:0] _3BitSevenSeg_2;
  wire[3:0] _3BitRegInB;

  assign _6BitSevenSeg_2 = Video_Input2[6:0];
  assign _3BitSevenSeg_2 = Video_Input2[3:0];
  assign _3BitRegInB = REG_IN_B[3:0];

  wire[3:0] BusMuxResult_2;
  wire[6:0] SevenSegBusResult_2;

  _4WideBusMux BusMux2 (.dataAline(_3BitSevenSeg_2),. dataBline(_3BitRegInB), .Control(Register_View), .result(BusMuxResult_2));
  seven_seg_decoder_BUSOUT sevenBUSOUT2(.INARR(BusMuxResult_2), .OUTARR(SevenSegBusResult_2));
  _7WideBusMux SevenWideBus2(.dataa(_6BitSevenSeg_2), .datab(SevenSegBusResult_2), .control(~Direct_Video_Map), .result(Video_Output2));

  /*********/
  /*Layer 3*/
  /*********/

  wire[6:0] _6BitSevenSeg_3;
  wire[3:0] _3BitSevenSeg_3;
  wire[3:0] _3BitRegInA;

  assign _6BitSevenSeg_3 = Video_Input3[6:0];
  assign _3BitSevenSeg_3 = Video_Input3[3:0];
  assign _3BitRegInA = REG_IN_A[3:0];

  wire[3:0] BusMuxResult_3;
  wire[6:0] SevenSegBusResult_3;

  _4WideBusMux BusMux3 (.dataAline(_3BitSevenSeg_3),. dataBline(_3BitRegInA), .Control(Register_View), .result(BusMuxResult_3));
  seven_seg_decoder_BUSOUT sevenBUSOUT3(.INARR(BusMuxResult_3), .OUTARR(SevenSegBusResult_3));
  _7WideBusMux SevenWideBus3(.dataa(_6BitSevenSeg_3), .datab(SevenSegBusResult_3), .control(~Direct_Video_Map), .result(Video_Output3));

  /*********/
  /*Layer 4*/
  /*********/

  wire[6:0] _6BitSevenSeg_4;
  wire[3:0] _3BitSevenSeg_4;

  assign _6BitSevenSeg_4 = Video_Input4[6:0];
  assign _3BitSevenSeg_4 = Video_Input4[3:0];

  wire[6:0] SevenSegBusResult_4;

  seven_seg_decoder_BUSOUT sevenBUSOUT4(.INARR(_3BitSevenSeg_4), .OUTARR(SevenSegBusResult_4));
  _7WideBusMux SevenWideBus4(.dataa(_6BitSevenSeg_4), .datab(SevenSegBusResult_4), .control(~Direct_Video_Map), .result(Video_Output4));

  /*********/
  /*Layer 5*/
  /*********/

  wire[6:0] _6BitSevenSeg_5;
  wire[3:0] _3BitSevenSeg_5;

  assign _6BitSevenSeg_5 = Video_Input5[6:0];
  assign _3BitSevenSeg_5 = Video_Input5[3:0];

  wire[6:0] SevenSegBusResult_5;

  seven_seg_decoder_BUSOUT sevenBUSOUT5(.INARR(_3BitSevenSeg_5), .OUTARR(SevenSegBusResult_5));
  _7WideBusMux SevenWideBus5(.dataa(_6BitSevenSeg_5), .datab(SevenSegBusResult_5), .control(~Direct_Video_Map), .result(Video_Output5));

  /*********/
  /*Layer 6*/
  /*********/

  wire[6:0] _6BitSevenSeg_6;
  wire[3:0] _3BitSevenSeg_6;

  assign _6BitSevenSeg_6 = Video_Input6[6:0];
  assign _3BitSevenSeg_6 = Video_Input6[3:0];

  wire[6:0] SevenSegBusResult_6;

  seven_seg_decoder_BUSOUT sevenBUSOUT6(.INARR(_3BitSevenSeg_6), .OUTARR(SevenSegBusResult_6));
  _7WideBusMux SevenWideBus6(.dataa(_6BitSevenSeg_6), .datab(SevenSegBusResult_6), .control(~Direct_Video_Map), .result(Video_Output6));

  /*********/
  /*Layer 7*/
  /*********/

  wire[6:0] _6BitSevenSeg_7;
  wire[3:0] _3BitSevenSeg_7;

  assign _6BitSevenSeg_7 = Video_Input7[6:0];
  assign _3BitSevenSeg_7 = Video_Input7[3:0];

  wire[6:0] SevenSegBusResult_7;

  seven_seg_decoder_BUSOUT sevenBUSOUT7(.INARR(_3BitSevenSeg_7), .OUTARR(SevenSegBusResult_7));
  _7WideBusMux SevenWideBus7(.dataa(_6BitSevenSeg_7), .datab(SevenSegBusResult_7), .control(~Direct_Video_Map), .result(Video_Output7));




  endmodule
