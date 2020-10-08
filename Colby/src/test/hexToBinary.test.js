const {hexToBinary} = require('../hexToBinary.js');
const {binToHex} = require('../hexToBinary.js');
const {padBin} = require('../hexToBinary.js');

test('Hex to binary: 0', () => {
    expect(hexToBinary('0')).toBe('0000');
});

test('Hex to binary: F', () => {
    expect(hexToBinary('F')).toBe('1111');
});

test('Hex to binary: 00', () => {
    expect(hexToBinary('00')).toBe('00000000');
});

test('Hex to binary: FF', () => {
    expect(hexToBinary('FF')).toBe('11111111');
});

test('Binary to hex: 0000', () => {
    expect(binToHex('0000')).toBe('0');
});

test('Binary to hex: 1111', () => {
    expect(binToHex('1111')).toBe('F');
});

test('Binary to hex: 00000000', () => {
    expect(binToHex('00000000')).toBe('00');
});

test('Binary to hex: 11111111', () => {
    expect(binToHex('11111111')).toBe('FF');
});

test('Binary to hex: 0000000', () => {
    expect(binToHex('0000000')).toBe('00');
});

test('Binary to hex: 1111111', () => {
    expect(binToHex('1111111')).toBe('7F');
});

test('Binary to hex: 0', () => {
    expect(binToHex('0')).toBe('0');
});

test('Binary to hex: 1', () => {
    expect(binToHex('1')).toBe('1');
});

test('Binary to hex: 00', () => {
    expect(binToHex('00')).toBe('0');
});

test('Binary to hex: 11', () => {
    expect(binToHex('11')).toBe('3');
});

test('Binary to hex: 000', () => {
    expect(binToHex('000')).toBe('0');
});

test('Binary to hex: 111', () => {
    expect(binToHex('111')).toBe('7');
});

test('Pad binary: 0', () => {
    expect(padBin('0')).toBe('0000');
});

test('Pad binary: 00', () => {
    expect(padBin('00')).toBe('0000');
});

test('Pad binary: 000', () => {
    expect(padBin('000')).toBe('0000');
});