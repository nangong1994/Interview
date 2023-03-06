const insertionSort = require('../../O-N2/insertionsort/insertionsort');
/**
 * 
 * @description
 * The time complexity of ShellSort strictly is not O(Nlog(N)).
 * It is about O(N^(1.3 ~ 2)) !!!
 * 
 * @param { number[] } array 
 * @return { number[] }
 */
module.exports = function shellSort(array) {
  // if array is empty, return empty
  if (!array || !array.length) {
    return [];
  }
  
  // if array`s length equals to 1
  if (array.length === 1) {
    return array;
  }

  // gap calc:
  // 1. Binary Method
  // let gap = array.length >>> 1;
  // while (gap >= 1) {
  //   insertionSort(array, gap);
  //   gap = gap >>> 1;
  // }

  // 2. Knuth Method
  // h = h * 3 + 1
  let gap  = calcKnuthGap(array.length)
  while (gap >= 1) {
    insertionSort(array, gap);
    gap = Math.floor((gap - 1) / 3);
  }

  return array;
}

/**
 * @param { number } arrLen
 * @return { number }
 */
function calcKnuthGap(arrLen) {
  let h = 0;
  while(h <= Math.floor(arrLen / 3)) {
    h = h * 3 + 1;
  }
  return h;
}
