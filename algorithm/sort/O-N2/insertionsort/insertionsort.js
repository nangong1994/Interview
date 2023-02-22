/**
 * 
 * @param { number[] } array
 * @param { number } step default is 1
 * @return { number[] }
 */
module.exports = function insertionSort(array, step) {
  // if array is empty, return empty
  if (!array || !array.length) {
    return [];
  }
  
  // if array`s length equals to 1
  if (array.length === 1) {
    return array;
  }

  // logic improve for shell sort
  let h = step == null ? 1 : step;

  for (let i = h; i < array.length; i++) {
    for (let j = i; j > (h - 1) && array[j] < array[j - h]; j -= h) {
      if (array[j] < array[j - h]) {
        [array[j], array[j - h]] = [array[j - h], array[j]];
      }
    }
  }

  return array;
}
