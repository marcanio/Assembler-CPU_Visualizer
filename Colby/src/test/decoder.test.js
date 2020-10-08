const {decoder} = require('../decoder');

const globalDecoder = new decoder(4);

test('Set control valid: 0x0', () => {
    globalDecoder.setControl(0x0);
});

test('Set state invalid: 0x6', () => {
    expect(globalDecoder.setControl(0x6)).toThrow();
})

test('Get output: 0x0', () => {
    globalDecoder.setControl(0x0);
    expect(globalDecoder.getOutputString()).toBe('1000');
})

test('Get output: 0x1', () => {
    globalDecoder.setControl(0x1);
    expect(globalDecoder.getOutputString()).toBe('0100');
})

test('Get output: 0x2', () => {
    globalDecoder.setControl(0x2);
    expect(globalDecoder.getOutputString()).toBe('0010');
})

test('Get output: 0x3', () => {
    globalDecoder.setControl(0x3);
    expect(globalDecoder.getOutputString()).toBe('0001');
})

test('Get output: 0x4', () => {
    globalDecoder.setControl(0x4);
    expect(globalDecoder.getOutputString()).toThrow();
})

test('Not power of two', () => {
    expect(new decoder(0x3)).toThrow();
})