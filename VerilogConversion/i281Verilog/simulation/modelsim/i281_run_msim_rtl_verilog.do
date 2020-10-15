transcript on
if {[file exists rtl_work]} {
	vdel -lib rtl_work -all
}
vlib rtl_work
vmap work rtl_work

vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_1to2DecoderWithEnable.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_2to4DecoderWithEnable.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_3to8DecoderWithEnable.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_4to16DecoderWithEnable.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_Opcode_Decoder.v}

