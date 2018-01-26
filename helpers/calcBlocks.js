const add = (a,b) => {
  return a + b;
}

const IsMaxOfSide = (block, array) => {
  let maxOfSide = array.reduce((acc, val) => {
    return (val > acc) ? val : acc;
  },0);
  return block > maxOfSide;
}

// console.log(IsMaxOfSide(10, []));

const calcWell = (start, end, valley) => {
  let valleyArea = valley.reduce((acc, val) => {
    return acc + val;
  },0)
  let lowerPeak = (start, end) => {
    return (start < end) ? start : end
  }
  return (lowerPeak(start, end) * valley.length - valleyArea);
}

//console.log(calcWell(5,7,[1,1,1,1]));

let calcBlocks = (array) => {
  let output = 0;
  let peaks = [];

  let currStart = null;
  let currEnd = null;
  let currValley = [];

  for (let i = 0; i < array.length; i++) {
    let leftMax = IsMaxOfSide(array[i], array.slice(0,i));
    let rightMax = IsMaxOfSide(array[i], array.slice(i+1) || []);

    //if we've found a peak
    if (leftMax || rightMax) {
      if (!currStart) {
        currStart = array[i];
      }
      if (currStart) {
        currEnd = array[i]
        let currWell = calcWell(currStart, currEnd, currValley);
        output += currWell;

        currStart = currEnd;
        currEnd = null;
        currValley = [];
      }
    } else {
      // the curent block is a valley
      currValley.push(array[i]);
    }
  }
  return output;
};


let testArray = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];

console.log(calcBlocks(testArray));

//TRANSFORMATION

// [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
// INITIAL 
// 5 -> Startpeak
// 3 -> valley = [3]
// 7 -> End peak ---> run wellarea calc
// 2 -> valley = [2], startPeak = 7
// 6 -> valley = [2,6] startPeak = 7
//...
// 9 -> valley = [2,6,4,5] startPeak = 7 endPeak = 9 ----> run area calc
// 1 -> valley = [1] startPeak = 9;
// 2 -> valley = [1] startPeak = 9; endPeak =2 ----> run area calc

  // helper function
// find the area between the two

//Strategy
// iterate through each block and test if it's a peak 
  // testing all value to the left and right.  If it's the max of those -> peak
  // if we don't have a start peak, set it
  // if we have a start peak, set block as end peak
    // calculate the wellArea
    // reset start peak as the end peak
    // everything else is reset


module.exports = {
  add: add,
  calcBlocks: calcBlocks,
}