const {multiplexer} = require('../mux');

const globalMux = new multiplexer(2);
/*beforeAll(() => {
    let testMux = new multiplexer(2);
})*/

test('Set state valid', () => {
    globalMux.setState(0);
});

test('Set state invalid', () => {
    expect(globalMux.setState(10)).toThrow();
})

test('Set source to value', () => {
    globalMux.setSource(0, 1);
    expect(globalMux.getOutput()).toBe(1);
})

test('Not power of two', () => {
    expect(new multiplexer(3)).toThrow();
})