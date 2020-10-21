/* GUI Values */
const CODE_MEM_WIDTH = 350;
const CODE_MEM_HEIGHT = 450;
const REGISTER_FILE_WIDTH = 350;
const REGISTER_FILE_HEIGHT = 500;


export const MUX_POLYGON = [0,0, 50,30, 50,170, 0,200];
export const ALU_POLYGON = [0,0, 100,75, 100,225, 0,300, 0,200, 25,150, 0,100 ];
export const FLAGS_POLYGON = [0,0, 150,0, 150,100, 0,100];
export const CODE_MEM_POLYGON = [0,0, CODE_MEM_WIDTH,0, CODE_MEM_WIDTH,CODE_MEM_HEIGHT, 0,CODE_MEM_HEIGHT];
export const DATA_MEM_POLYGON = [0,0, 350,0, 350,450, 0,450];
export const OPCODE_DECODER_POLYGON = [0,0, 200,0, 200,100, 0,100];
export const CONTROL_POLYGON = [0,0, 550,0, 550,100, 0,100];
export const REGISTER_FILE_POLYGON = [0,0, REGISTER_FILE_WIDTH,0, REGISTER_FILE_WIDTH,REGISTER_FILE_HEIGHT, 0,REGISTER_FILE_HEIGHT];
export const PC_VALUE_POLYGON = [0,0, 200,0, 200,150, 0,150];
export const PC_UPDATE_POLYGON = [0,0, 200,0, 200,150, 0,150];
export const ARROW = [5,0, 10,0, 10, 40, 15, 40, 7.5,50, 0,40, 5,40];

export const MUX_FALSE = [20, 60];
export const MUX_TRUE = [20, 140];
export const OPCODE_TPOS = [100, 30];
export const CONTROL_TPOS = [70, 30];
export const FLAG_TPOS = [70, 30];
export const FLAG_VPOS = [70, 70];



export const MUX0_OFFSET = [900 , 650];
export const MUX1_OFFSET = [1250, 600];
export const MUX2_OFFSET = [1250, 950];
export const MUX3_OFFSET = [2000, 800];
export const MUX4_OFFSET = [500 , 1150];

export const ALU_OFFSET = [1000, 500];
export const FLAGS_OFFSET = [1300, 500];
export const CODE_MEM_OFFSET = [100, 100];
export const OPCODE_DECODER_OFFSET = [500, 100];
export const CONTROL_OFFSET = [900, 100];
export const REGISTER_FILE_OFFSET = [500, 500];
export const PC_VALUE_OFFSET = [700, 1150];
export const PC_UPDATE_OFFSET = [200, 1150];
export const DATA_MEM_OFFSET = [1400, 900];

export const READ_A_MUX_OFFSET = [REGISTER_FILE_OFFSET[0] + REGISTER_FILE_WIDTH * 0.75, REGISTER_FILE_OFFSET[1] + 50];
export const READ_B_MUX_OFFSET = [REGISTER_FILE_OFFSET[0] + REGISTER_FILE_WIDTH * 0.75, REGISTER_FILE_OFFSET[1] + 300];

export const MUX_ALU_WIRE = [0, 0, ALU_OFFSET[0] - (MUX0_OFFSET[0] + MUX_POLYGON[2]), 0];
export const ALU_RESULT_WIRE = [0, 0, MUX1_OFFSET[0] - (ALU_OFFSET[0] + ALU_POLYGON[2]), 0];
export const IMEM_DECODER_WIRE = [0, 0, OPCODE_DECODER_OFFSET[0] - (CODE_MEM_OFFSET[0] + CODE_MEM_WIDTH), 0];
export const OPCODE_DECODER_CONTROL_WIRE = [0, 0, CONTROL_OFFSET[0] - (OPCODE_DECODER_OFFSET[0] + OPCODE_DECODER_POLYGON[2]), 0];
export const ALU_FLAGS_WIRE = ["M", ALU_OFFSET[0] + ALU_POLYGON[2], ALU_OFFSET[1] + 100, "l", 100, 0, 0, -75 , 100, 0 ];
export const READ_A_WIRE = [0, 0, ALU_OFFSET[0] - (REGISTER_FILE_OFFSET[0] + REGISTER_FILE_WIDTH), 0];
export const READ_B_WIRE = [0, 0, MUX0_OFFSET[0] - (REGISTER_FILE_OFFSET[0] + REGISTER_FILE_WIDTH), 0];
export const PC_UPDATE_MUX_WIRE = [0, 0, MUX4_OFFSET[0] - (PC_UPDATE_OFFSET[0] + PC_UPDATE_POLYGON[2]), 0];
export const MUX_PC_VALUE_WIRE = [0, 0, PC_VALUE_OFFSET[0] - (MUX4_OFFSET[0] + MUX_POLYGON[2]), 0];

export const MUX_ALU_WIRE_OFFSET = [MUX0_OFFSET[0] + MUX_POLYGON[2], MUX0_OFFSET[1] + 100];
export const ALU_RESULT_WIRE_OFFSET = [ALU_OFFSET[0] + ALU_POLYGON[2], ALU_OFFSET[1] + 150];
export const IMEM_DECODER_WIRE_OFFSET = [CODE_MEM_OFFSET[0] + CODE_MEM_WIDTH, CODE_MEM_OFFSET[1] + 25];
export const OPCODE_DECODER_CONTROL_WIRE_OFFSET = [OPCODE_DECODER_OFFSET[0] + OPCODE_DECODER_POLYGON[2], OPCODE_DECODER_OFFSET[1] + 25];
export const ALU_FLAGS_WIRE_OFFSET = [ALU_OFFSET[0] + ALU_POLYGON[2], ALU_OFFSET[1] + 100];
export const READ_A_WIRE_OFFSET = [REGISTER_FILE_WIDTH + REGISTER_FILE_OFFSET[0], REGISTER_FILE_OFFSET[1] + 50];
export const READ_B_WIRE_OFFSET = [REGISTER_FILE_WIDTH + REGISTER_FILE_OFFSET[0], REGISTER_FILE_OFFSET[1] + 200];
export const PC_UPDATE_MUX_FALSE_WIRE_OFFSET = [PC_UPDATE_OFFSET[0] + PC_UPDATE_POLYGON[2], PC_UPDATE_OFFSET[1] + 50];
export const PC_UPDATE_MUX_TRUE_WIRE_OFFSET = [PC_UPDATE_OFFSET[0] + PC_UPDATE_POLYGON[2], PC_UPDATE_OFFSET[1] + 125];
export const MUX_PC_VALUE_WIRE_OFFSET = [MUX4_OFFSET[0] + MUX_POLYGON[2], MUX4_OFFSET[1] + 100];

export const IMEM_C1_OFFSET = [CODE_MEM_WIDTH/2 + CODE_MEM_OFFSET[0], CODE_MEM_OFFSET[0] - ARROW[9]];
export const MUX_C2_OFFSET = [MUX4_OFFSET[0] + 20, MUX4_OFFSET[1] + (15 - ARROW[9])];
export const PC_VALUE_C3_OFFSET = [PC_VALUE_POLYGON[2]/2 + PC_VALUE_OFFSET[0], PC_VALUE_OFFSET[1] - ARROW[9]];
export const READ_A_C4_OFFSET = [READ_A_MUX_OFFSET[0] + 15, READ_A_MUX_OFFSET[1] + (10-ARROW[9])];
export const READ_A_C5_OFFSET = [READ_A_MUX_OFFSET[0] + 40, READ_A_MUX_OFFSET[1] + (20-ARROW[9])];
export const READ_B_C6_OFFSET = [READ_B_MUX_OFFSET[0] + 15, READ_B_MUX_OFFSET[1] + (10-ARROW[9])];
export const READ_B_C7_OFFSET = [READ_B_MUX_OFFSET[0] + 40, READ_B_MUX_OFFSET[1] + (20-ARROW[9])];
export const REG_FILE_C8_OFFSET = [REGISTER_FILE_OFFSET[0] + 1 * 30, REGISTER_FILE_OFFSET[1] - ARROW[9]];
export const REG_FILE_C9_OFFSET = [REGISTER_FILE_OFFSET[0] + 2 * 30, REGISTER_FILE_OFFSET[1] - ARROW[9]];
export const REG_FILE_C10_OFFSET = [REGISTER_FILE_OFFSET[0] + 3 * 30, REGISTER_FILE_OFFSET[1] - ARROW[9]];
export const MUX_C11_OFFSET = [MUX0_OFFSET[0] + 20, MUX0_OFFSET[1] + (15 - ARROW[9])];
export const ALU_C12_OFFSET = [ALU_OFFSET[0] + 1 * 25, ALU_OFFSET[1] - ARROW[9]];
export const ALU_C13_OFFSET = [ALU_OFFSET[0] + 2 * 25, ALU_OFFSET[1] - ARROW[9]];
export const FLAGS_C14_OFFSET = [FLAGS_POLYGON[2]/2 + FLAGS_OFFSET[0], FLAGS_OFFSET[1] - ARROW[9]];
export const MUX_C15_OFFSET = [MUX1_OFFSET[0] + 20, MUX1_OFFSET[1] + (15 - ARROW[9])];
export const MUX_C16_OFFSET = [MUX2_OFFSET[0] + 20, MUX2_OFFSET[1] + (15 - ARROW[9])];
export const DMEM_C17_OFFSET = [DATA_MEM_POLYGON[2]/2 + DATA_MEM_OFFSET[0], DATA_MEM_OFFSET[1] - ARROW[9]];
export const MUX_C18_OFFSET = [MUX3_OFFSET[0] + 20, MUX3_OFFSET[1] + (15 - ARROW[9])];

export const CONTROL_ARROW_OFFSET = [CONTROL_OFFSET[0], CONTROL_OFFSET[1] + CONTROL_POLYGON[7]];

export const ARROW_DIST_BETWEEN = 28;


export const MUX_FALSE_TEXT = "0";
export const MUX_TRUE_TEXT = "1";
export const OPCODE_TEXT = "Opcode Decoder";
export const FLAG_TEXT = "Flags";
export const CONTROL_TEXT = "Control";

export const BLOCK_STYLE = " fill:white; stroke:black; stroke-width:2px;";
export const WIRE_STYLE = "stroke:black; stroke-width:2px; fill:none; stroke:black;";
export const ARROW_STYLE = " fill:black; stroke:black; stroke-width:1px;";
export const TEXT_STYLE = "font-family: Arial, Helvetica, sans-serif; font-size: 24px; text-anchor:middle;fill:black; ";

export const ID_ATTR = "id";
export const STYLE_ATTR = "style";

export const MUX0_ID = "mux0";
export const MUX0_FALSE_ID = "mux0_false";
export const MUX0_TRUE_ID = "mux0_true";
export const MUX1_ID = "mux1";
export const MUX1_FALSE_ID = "mux1_false";
export const MUX1_TRUE_ID = "mux1_true";
export const MUX2_ID = "mux2";
export const MUX2_FALSE_ID = "mux2_false";
export const MUX2_TRUE_ID = "mux2_true";
export const MUX3_ID = "mux3";
export const MUX3_FALSE_ID = "mux3_false";
export const MUX3_TRUE_ID = "mux3_true";
export const MUX4_ID = "mux4";
export const MUX4_FALSE_ID = "mux4_false";
export const MUX4_TRUE_ID = "mux4_true";
export const READ_A_MUX_ID = "read_a_mux";
export const READ_B_MUX_ID = "read_b_mux";

export const ALU_ID = "alu";
export const FLAGS_ID = "flags";
export const CONTROL_ID = "control";
export const REG_FILE_ID = "reg_file";
export const DMEM_ID = "code_mem";
export const PC_VALUE_ID = "pc_val";
export const PC_UPDATE_ID = "pc_update";
export const CODE_MEM_ID = "code_mem";
export const OPCODE_DECODER_ID = "opcode_decoder";

export const CONTROL_C1 = "control_c1";
export const CONTROL_C2 = "control_c2";
export const CONTROL_C3 = "control_c3";
export const CONTROL_C4 = "control_c4";
export const CONTROL_C5 = "control_c5";
export const CONTROL_C6 = "control_c6";
export const CONTROL_C7 = "control_c7";
export const CONTROL_C8 = "control_c8";
export const CONTROL_C9 = "control_c9";
export const CONTROL_C10 = "control_c10";
export const CONTROL_C11 = "control_c11";
export const CONTROL_C12 = "control_c12";
export const CONTROL_C13 = "control_c13";
export const CONTROL_C14 = "control_c14";
export const CONTROL_C15 = "control_c15";
export const CONTROL_C16 = "control_c16";
export const CONTROL_C17 = "control_c17";
export const CONTROL_C18 = "control_c18";

export const IMEM_C1_ID = "imem_c1";
export const MUX_C2_ID = "mux_c2";
export const PC_VALUE_C3_ID = "pc_value_c3";
export const READ_A_C4_ID = "read_a_c4";
export const READ_A_C5_ID = "read_a_c5";
export const READ_B_C6_ID = "read_b_c6";
export const READ_B_C7_ID = "read_b_c7";
export const REG_FILE_C8_ID = "reg_file_c8";
export const REG_FILE_C9_ID = "reg_file_c9";
export const REG_FILE_C10_ID = "reg_file_c10";
export const MUX_C11_ID = "mux_c11";
export const ALU_C12_ID = "alu_c12";
export const ALU_C13_ID = "alu_c13";
export const FLAGS_C14_ID  = "flags_c14";
export const MUX_C15_ID = "mux_c15";
export const MUX_C16_ID = "mux_c16";
export const DMEM_C17_ID = "dmem_c17";
export const MUX_C18_ID = "mux_c18";

export const READ_A_WIRE_ID = "read_a_wire";
export const READ_B_WIRE_ID = "read_b_wire";
export const MUX_PC_VAL_WIRE_ID = "mux_pc_val_wire";
export const PC_UPDATE_FALSE_WIRE_ID = "pc_update_false_wire";
export const PC_UPDATE_TRUE_WIRE_ID = "mux_pc_val_wire";
export const ALU_FLAG_WIRE_ID = "alu_flag_wire";
export const DECODER_CONTROL_WIRE_ID = "decoder_control_wire";
export const ALU_RESULT_WIRE_ID = "alu_result_wire";
export const MUX_ALU_WIRE_ID = "mux_alu_wire";
export const IMEM_DECODER_WIRE_ID = "imem_decoder_wire_id";

export const OPCODE_TEXT_ID = "opcode_text_id";
export const FLAG_TEXT_ID = "flag_text_id";
export const CONTROL_TEXT_ID = "control_text_id";
