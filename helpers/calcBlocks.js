const calcBlocks = (array) => {
  
  let highestLeft = [ array[0] ];
  let highestRight = [];
  highestRight[ array.length -1 ] = array[array.length-1];

  for (let i = 1; i < array.length; i++) {
    (array[i] >= highestLeft[i - 1]) ? highestLeft.push(array[i]) : highestLeft.push(highestLeft[i - 1])
  }
  for (let i = array.length - 2; i >= 0; i--) {
    (array[i] > highestRight[i + 1]) ? highestRight[i] = array[i] : highestRight[i] = highestRight[i + 1]
  }

  let wellsByCol = [];
  
  for (let i = 0; i < array.length; i ++) {
    let lessor = highestLeft[i] < highestRight[i] ? highestLeft[i] : highestRight[i];
    wellsByCol.push(lessor - array[i])
  }
  
  let wellCount = wellsByCol.reduce((acc, well) => {
    return acc + well;
  });
  
  let maxHeight = array.reduce((acc, well) => {
    return acc > well ? acc : well;
  },0);

  let cols = Math.max(maxHeight, array.length)

  return {
    wellCount: wellCount,
    wellsByCol: wellsByCol,
    cols: cols,
    blocks: array,
    maxHeight: maxHeight
  }
}

module.exports = {
  calcBlocks : calcBlocks
}


