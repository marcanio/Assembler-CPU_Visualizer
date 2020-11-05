const {CPU} = require('../cpu');

const cpu = new CPU();


test('See what dies?', () => {
    cpu.setup();
    cpu.singleCycle();
});