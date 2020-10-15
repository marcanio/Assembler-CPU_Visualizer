transcript on
if {[file exists rtl_work]} {
	vdel -lib rtl_work -all
}
vlib rtl_work
vmap work rtl_work

vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/ones.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/bios_hardcoded_low.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/bios_hardcoded_high.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/user_code_low.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/user_code_high.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/user_data.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware {D:/school_stuff/sdmay21-38/VerilogConversion/stoytchevfiles/i281_CPU_Hardware/i281_CPU_Hardware/seven_seg_decoder_busout.v}

