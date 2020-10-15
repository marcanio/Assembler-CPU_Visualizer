module _Opcode_Decoder (
  input wire[7:0] DEC_INPUT,
  output wire[1:0] X,
  output wire[1:0] Y,
  output wire NOOP,
  output wire MOVE,
  output wire LOADI_LOADP,
  output wire ADD,
  output wire ADDI,
  output wire SUB,
  output wire SUBI,
  output wire LOAD,
  output wire LOADF,
  output wire STORE,
  output wire STOREF,
  output wire CMP,
  output wire JUMP,
  output wire INPUTC,
  output wire INPUTCF,
  output wire INPUTD,
  output wire INPUTDF,
  output wire SHIFTL,
  output wire SHIFTR,
  output wire BRE_BRZ,
  output wire BRNE_BRNZ,
  output wire BRG,
  output wire BRGE
  );

  wire[7:0] DEC_Input_Split = DEC_INPUT;
  wire[15:0] Decoder_Output;
  wire[3:0] Input_Decoder_Output;
  wire[1:0] Shift_Decoder_Output;
  wire[3:0] Branch_Decoder_Output;

  assign X = DEC_Input_Split[3:2];
  assign Y = DEC_Input_Split[1:0];

  _4to16DecoderWithEnable decoderOut (.Enable(1), .Decoder_Input(DEC_Input_Split[7:4]), .Decoder_Output(Decoder_Output));

  assign NOOP = Decoder_Output[0];
  assign MOVE = Decoder_Output[2];
  assign LOADI_LOADP = Decoder_Output[3];
  assign ADD = Decoder_Output[4];
  assign ADDI = Decoder_Output[5];
  assign SUB = Decoder_Output[6];
  assign SUBI = Decoder_Output[7];
  assign LOAD = Decoder_Output[8];
  assign LOADF = Decoder_Output[9];
  assign STORE = Decoder_Output[10];
  assign STOREF = Decoder_Output[11];
  assign CMP = Decoder_Output[13];
  assign JUMP = Decoder_Output[14];

  _2to4DecoderWithEnable InputDecoder (.Enable(Decoder_Output[1]), .Decoder_Input(DEC_Input_Split[1:0]), .Decoder_Output(Input_Decoder_Output));
  _1to2DecoderWithEnable ShiftDecoder (.Enable(Decoder_Output[12]), .Decoder_Input(DEC_Input_Split[0]), .Decoder_Output(Shift_Decoder_Output));
  _2to4DecoderWithEnable BranchDecoder (.Enable(Decoder_Output[15]), .Decoder_Input(DEC_Input_Split[1:0]), .Decoder_Output(Branch_Decoder_Output));

  assign INPUTC = Input_Decoder_Output[0];
  assign INPUTCF = Input_Decoder_Output[1];
  assign INPUTD = Input_Decoder_Output[2];
  assign INPUTDF = Input_Decoder_Output[3];

  assign SHIFTL = Shift_Decoder_Output[0];
  assign SHIFTR = Shift_Decoder_Output[1];

  assign BRE_BRZ = Branch_Decoder_Output[0];
  assign BRNE_BRNZ = Branch_Decoder_Output[1];
  assign BRG = Branch_Decoder_Output[2];
  assign BRGE = Branch_Decoder_Output[3];




endmodule //_Opcode_Decoder
