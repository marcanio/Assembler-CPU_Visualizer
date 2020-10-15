module _2to1mux(
        input wire i0,
        input wire i1,
        input wire sel,
        output wire mxout
      );

      wire topAndOut, bottomAndOut;

      assign topAndOut = ~sel & i0;
      assign bottomAndOut = i1 & sel;
      assign mxout = topAndOut | bottomAndOut;

endmodule
