module _8BitAdder #(parameter N = 8) (
  input wire[N-1:0] First_Input,
  input wire[N-1:0] Second_Input,
  input wire Sub,
  output wire Carry,
  output wire Overflow,
  output wire[N-1:0] Adder_Output
  );

  wire[N-1:0] adderCout;
  wire[N-1:0] XOROut;
  wire overflowCout;

  genvar i;

  generate
    for(i = 0; i < N; i = i + 1) begin : XOROutput
      assign XOROut[i] = Second_Input[i] ^ Sub;
    end
  endgenerate

    _FullAdder initialFA (.in1(First_Input[0]), .in2(XOROut[0]), .Cin(Sub), .S(Adder_Output[0]), .Cout(adderCout[0]));

  generate
    for(i = 1; i < N ; i = i + 1) begin : _FullAdder
      _FullAdder FA (.in1(First_Input[i]), .in2(XOROut[i]), .Cin(adderCout[i-1]), .S(Adder_Output[i]), .Cout(adderCout[i]));
    end
  endgenerate

  assign Overflow = adderCout[N-2] ^ adderCout[N-1];
  assign Carry = adderCout[N-1];



endmodule // _8bitAdder
