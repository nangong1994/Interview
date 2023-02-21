/**
 * 
 * @param { number[] } array
 * @return { number[] }
 */
module.exports = function bubbleSort(array) {
  // if array is empty, return empty
  if (!array || !array.length) {
    return [];
  }
  
  // if array`s length equals to 1
  if (array.length === 1) {
    return array;
  }

  // implement-1:
  // return sort1(array);

  // implement-2
  // return sort2(array);

  // implement-3
  return sort3(array);
}

/**
 * 
 * @param { number[] } array
 * @returns { number[] }
 */
function sort1(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // every time, the biggest one can found
      // and put at the end of list
      // end index = array.length - 1- i

      if (array[j] > [array[j + 1]]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

/**
 * 
 * @param { number[] } array
 * @returns { number[] }
 */
function sort2(array) {
  let bSwapped = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (!bSwapped) {
      break;
    }
    bSwapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      // every time, the biggest one can found
      // and put at the end of list
      // end index = array.length - 1- i
      if (array[j] > [array[j + 1]]) {
        bSwapped = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

/**
 * 
 * @param { number[] } array
 * @returns { number[] }
 */
function sort3(array) {
  let bSwapped = true;
  let swappedIndex = -1;
  let indexOfLastUnsortedElement = array.length - 1;
  while (bSwapped) {
    bSwapped = false;
    for (let j = 0; j < indexOfLastUnsortedElement; j++) {
      if (array[j] > [array[j + 1]]) {
        bSwapped = true;
        swappedIndex = j;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }

    indexOfLastUnsortedElement = swappedIndex;
  }

  return array;
}
