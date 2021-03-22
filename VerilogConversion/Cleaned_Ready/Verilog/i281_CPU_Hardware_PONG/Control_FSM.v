module Control_FSM #(parameter N = 2)(
  input wire BRGE,
  input wire BRG,
  input wire BRNE_BRNZ,
  input wire BRE_BRZ,
  input wire JUMP,
  input wire CMP,
  input wire SHIFTR,
  input wire SHIFTL,
  input wire STOREF,
  input wire STORE,
  input wire LOADF,
  input wire LOAD,
  input wire SUBI,
  input wire SUB,
  input wire ADDI,
  input wire ADD,
  input wire LOADI_LOADP,
  input wire MOVE,
  input wire INPUT_DATADF,
  input wire INPUT_DATAD,
  input wire INPUT_DATACF,
  input wire INPUT_DATAC,
  input wire NOOP,
  input wire [N-1:0] X,
  input wire [N-1:0] Y,
  input wire CARRY_FLAG,
  input wire OVERFLOW_FLAG,
  input wire NEGATIVE_FLAG,
  input wire ZERO_FLAG,

  //***********************************//

  output wire IMEM_WRITE_ENABLE,
  output wire PC_MUX,
  output wire PC_WRITE_ENABLE,
  output wire [N-1:0] REG_PORT0_SELECT,
  output wire [N-1:0] REG_PORT1_SELECT,
  output wire [N-1:0] REG_WRITE_SELECT,
  output wire REG_WRITE_ENABLE,
  output wire ALU_SOURCE_MUX,
  output wire ALU_SELECT0,
  output wire ALU_SELECT1,
  output wire FLAGS_WRITE_ENABLE,
  output wire ALU_RESULT_MUX,
  output wire DMEM_INPUT_MUX,
  output wire DMEM_WRITE_ENABLE,
  output wire REG_WRITEBACK_MUX
  );

  //Internal Wires (Outputs of Components+InstanceNumber)
  wire XNOR25;
  wire NOT24;
  wire AND26;
  wire AND17;
  wire AND18;
  wire AND19;
  wire AND20;
  wire OR73;
  wire OR74_3Input;
  wire OR75;

  wire OR35;
  wire OR38;
  wire OR39;
  wire OR40;
  wire OR41;
  wire OR44;
  wire mxout43;
  wire mxout50;
  wire AND49;
  wire AND51;

  wire OR22;
  wire OR27;
  wire OR28;
  wire mxout64;
  wire mxout76;
  wire AND53;
  wire AND54;

  wire OR48;
  wire AND55;
  wire AND56;

  wire OR59;

  wire OR63;

  wire OR46;

  wire OR66;

  wire OR69;

  wire OR70;

  wire OR71;

  wire OR72;


  //Assignments
  assign IMEM_WRITE_ENABLE = INPUT_DATACF | INPUT_DATAC;

  assign XNOR25 = OVERFLOW_FLAG ~^ NEGATIVE_FLAG;
  assign NOT24 = ~ZERO_FLAG;
  assign AND26 = NOT24 & XNOR25;
  assign AND17 = BRE_BRZ & ZERO_FLAG;
  assign AND18 = NOT24 & BRNE_BRNZ;
  assign AND19 = BRG & AND26;
  assign AND20 = XNOR25 & BRGE;
  assign OR73 = JUMP | AND17;
  assign OR74_3Input = AND18 | AND19 | AND20;
  assign OR75 = OR73 | OR74_3Input;
  assign PC_MUX = OR75;

  assign PC_WRITE_ENABLE = 1;

  assign OR35 = MOVE | LOADF | STOREF;
  assign OR38 = INPUT_DATACF | INPUT_DATADF | ADD;
  assign OR39 = ADDI | SUB | SUBI;
  assign OR40 = CMP | SHIFTR | SHIFTL;
  _2to1mux mux43 (.i0(X[1]), .i1(Y[1]), .sel(OR35), .mxout(mxout43));
  _2to1mux mux50 (.i0(X[0]), .i1(Y[0]), .sel(OR35), .mxout(mxout50));
  assign OR41 = OR38 | OR39 | OR40;
  assign OR44 = OR35 | OR41;
  assign AND49 = mxout43 & OR44;
  assign AND51 = mxout50 & OR44;
  assign REG_PORT0_SELECT[0] = AND51;
  assign REG_PORT0_SELECT[1] = AND49;

  assign OR22 = CMP | SUB | ADD;
  _2to1mux mux64 (.i0(X[1]), .i1(Y[1]), .sel(OR22), .mxout(mxout64));
  _2to1mux mux76 (.i0(X[0]), .i1(Y[0]), .sel(OR22), .mxout(mxout76));
  assign OR27 = STORE | STOREF;
  assign OR28 = OR22 | OR27;
  assign AND54 = mxout76 & OR28;
  assign AND53 = mxout64 & OR28;
  assign REG_PORT1_SELECT[0] = AND54;
  assign REG_PORT1_SELECT[1] = AND53;

  assign OR48 = MOVE | LOADI_LOADP | ADD | ADDI | SUB | SUBI | LOAD | LOADF | SHIFTL | SHIFTR;
  assign AND55 = X[1] & OR48;
  assign AND56 = X[0] & OR48;
  assign REG_WRITE_SELECT[1] = AND55;
  assign REG_WRITE_SELECT[0] = AND56;
  assign REG_WRITE_ENABLE = OR48;

  assign OR59 = INPUT_DATACF | INPUT_DATADF | MOVE | ADDI | SUBI | LOADF | STOREF;
  assign ALU_SOURCE_MUX = OR59;

  assign OR63 = INPUT_DATACF | INPUT_DATADF | MOVE | ADD | ADDI | SUB | SUBI | LOADF | STOREF | CMP;
  assign ALU_SELECT1 = OR63;

  assign OR46 = SUB | SUBI | SHIFTR | CMP;
  assign ALU_SELECT0 = OR46;

  assign OR66 = ADD | ADDI | SUB | SUBI | SHIFTL | SHIFTR | CMP;
  assign FLAGS_WRITE_ENABLE = OR66;

  assign OR69 = INPUT_DATAC | INPUT_DATAD | LOADI_LOADP | LOAD | STORE;
  assign ALU_RESULT_MUX = OR69;

  assign OR70 = INPUT_DATAD | INPUT_DATADF;
  assign DMEM_INPUT_MUX = OR70;

  assign OR71 = INPUT_DATAD | INPUT_DATADF | STORE | STOREF;
  assign DMEM_WRITE_ENABLE = OR71;

  assign OR72 = LOAD | LOADF;
  assign REG_WRITEBACK_MUX = OR72;





endmodule // _Control_FSM
