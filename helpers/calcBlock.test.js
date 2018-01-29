const calcBlocks = require('./calcBlocks.js').calcBlocks;

describe('calcBlocks', () => {
  it('calculate multiple wells', () => {
    expect(calcBlocks([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toBe(14);
  });
});

describe('calcBlocks', () => {
  it('calculates one long well with a valley with similar heights', () => {
    expect(calcBlocks([1, 2, 3, 0, 0, 0, 3, 2])).toBe(9);
    //3*3
  });
});

describe('calcBlocks', () => {
  it('calculates wells with similarly sized peaks', () => {
    expect(calcBlocks([5, 1, 5, 2, 5, 2])).toBe(7);
    //4 + 3
  });
});