const calcBlocks = require('./calcBlocks.js').calcBlocks;

describe('calcBlocks', () => {
  it('calculate the wells', () => {
    expect(calcBlocks([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toBe(14);
  });
});


//console.log(calcBlocks([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]));