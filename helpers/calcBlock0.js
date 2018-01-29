//================================================================================================================================================
// NAIVE SOLUTION
//================================================================================================================================================

// const IsMaxOfSide = (block, array) => {
//   const maxOfSide = array.reduce((acc, val) => {
//     return (val > acc) ? val : acc;
//   },0);
//   return block > maxOfSide;
// }

// // console.log(IsMaxOfSide(10, []));

// const calcWell = (start, end, valley) => {
//   const valleyArea = valley.reduce((acc, val) => {
//     return acc + val;
//   },0)
//   const lowerPeak = (start, end) => {
//     return (start < end) ? start : end
//   }
//   return (lowerPeak(start, end) * valley.length - valleyArea);
// }

// const calcBlocks = (array) => {
//   let output = 0;

//   let startPeak, endPeak = null;
//   let currValley = [];

//   for (let i = 0; i < array.length; i++) {
//     let leftMax = IsMaxOfSide(array[i], array.slice(0, i));
//     let rightMax = IsMaxOfSide(array[i], array.slice(i + 1));

//     if (leftMax || rightMax) {
//       if (!startPeak) {
//         startPeak = array[i];
//       } else {
//         endPeak = array[i];
//         output += calcWell(startPeak, endPeak, currValley);

//         startPeak = endPeak;
//         endPeak = null;
//         currValley = [];
//       }
//     } else {
//       currValley.push(array[i]);
//     }
//   }
//   return output;
// };

// Skeleton
// iterate through the array
// test if it's a peak
// true
  // if no start assign start
  // if start !endPeak assign endPeak
  //  calculate the area of the well
// false 
  // push the block to the valley array

//INPUT
// let testArray = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
// let testArray2 = [1, 2, 3, 0, 0, 0, 0, 0, 3];

// OUTPUT -> 14

// CONSTRAINTS ->NONE

// BIG O
  // O(N)

// console.log(calcBlocks(testArray));
//console.log(calcBlocks(testArray2));

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