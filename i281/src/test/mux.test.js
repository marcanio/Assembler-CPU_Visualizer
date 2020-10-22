const {Multiplexer} = require('../mux');

const globalMux = new Multiplexer(2);
/*beforeAll(() => {
    let testMux = new multiplexer(2);
})*/

function driverFunction() {
    return 1;
}

test('Set state valid', () => {
    globalMux.setState(0);
});

test('Set state invalid', () => {
    expect(globalMux.setState(10)).toThrow(TypeError);
})

test('Set source to value', () => {
    globalMux.setSource(0, driverFunction);
    expect(globalMux.getOutput()).toBe(1);
})

test('Not power of two', () => {
    expect(new multiplexer(3)).toThrow();
})