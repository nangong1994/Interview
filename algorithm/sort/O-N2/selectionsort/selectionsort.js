/**
 * @description
 * Selection-Sort is not stable
 * 
 * @param { number[] } array
 * @return { number[] }
 */
module.exports = function selectionSort(array) {
  // if array is empty, return empty
  if (!array || !array.length) {
    return [];
  }
  
  // if array`s length equals to 1
  if (array.length === 1) {
    return array;
  }

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let minIdx = i; // find the minimum value in list
    let maxIdx = i; // find the maximum value in list
    for (let j = i + 1; j < array.length - i; j++) {
      if (array[minIdx] > array[j]) {
        minIdx = j;
      }
      if (array[maxIdx] < array[j]) {
        maxIdx = j;
      }
    }

    // if minimum index equals with the maximum,
    // it means minIdx == maxIdx == i, sorting finished
    if (minIdx === maxIdx) {
      break;
    }

    let bChanged = false;
    if (minIdx !== i) {
      bChanged = true;
      [array[minIdx], array[i]] = [array[i], array[minIdx]];
    }

    // if maximum index equals with i,
    // as element at (i) already exchanged with min index
    // just let the maxIdx = minIdx;
    if (maxIdx === i && bChanged) {
      maxIdx = minIdx;
    }
    const lastIdx = array.length - 1 - i;
    [array[lastIdx], array[maxIdx]] = [array[maxIdx], array[lastIdx]];
  }

  return array;
}
