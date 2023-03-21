/**
 * 
 * @param { number[] } array
 * 
 * @returns { number[] }
 */
function mergeSort(array) {
  let arr = array || [];

  let l = 0;
  let r = arr.length - 1;

  const tempArr = new Array(arr.length);
  mSort(arr, tempArr, l, r);

  return arr;
}

/**
 * 
 * @param { number[] } array 
 * @param { number[] } tempArr 
 * @param { number } l 
 * @param { number } r 
 */
function mSort(array, tempArr, l, r) {
  if (l < r) {
    // mid pivot
    let m = Math.floor((l + r) / 2);
    // left
    mSort(array, tempArr, l, m);
    // right
    mSort(array, tempArr, m + 1, r);
    // merge array
    merge(array, tempArr, l, m, r);
  }
}

/**
 * 
 * @param { number[] } array 
 * @param { number[] } tempArr 
 * @param { number } l 
 * @param { number } m
 * @param { number } r 
 */
function merge(array, tempArr, l, m, r) {
  // left first element
  let left  = l;
  // rigjt first element
  let right = m + 1;
  // temp pos
  let pos = l;

  // merge array
  while(left <= m && right <= r) {
    if (array[left] <= array[right]) {
      tempArr[pos++] = array[left++];
    } else {
      tempArr[pos++] = array[right++];
    }
  }

  // check left rest elements
  while(left <= m) {
    tempArr[pos++] = array[left++];
  }

  // check right rest elements
  while(right <= r) {
    tempArr[pos++] = array[right++];
  }

  // merge tempArr into array
  while(l <= r) {
    array[l] = tempArr[l];
    l++;
  }
}

const TEST_ARRAY_2 = [10, -6, 2];
mergeSort(TEST_ARRAY_2)
console.log(TEST_ARRAY_2)

module.exports = mergeSort;
