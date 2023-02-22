/**
 * 
 * @param { number[] } array 
 * @return { number[] }
 */
module.exports = function heapSort(array) {
  // if array is empty, return empty
  if (!array || !array.length) {
    return [];
  }

  // if array`s length equals to 1
  if (array.length === 1) {
    return array;
  }

  // heap sort flow:
  // 1. build a heap
  // 2. swap the root node and last leaf node
  // 3. remove the last leaf node, rebuild heap
  // 4. repeat the step above util sort finished(n - 1)
  buildHeap(array, array.length);
  
  for (let i = array.length - 1; i >= 0; i--) {
    swap(array, i, 0);
    heapify(array, i, 0);
  }

  return array;
}

/**
 * 
 * @param {number[]} array 
 * @param {number} n size of array
 *
 */
function buildHeap(array, n) {
  if (!array || !array.length && n < 2) {
    return;
  }
  
  const lastNode = Math.floor(n / 2) - 1;
  for (let i = lastNode; i >= 0; i--) {
    heapify(array, n, i);
  }
}

/**
 * 
 * @param {number[]} array 
 * @param {number} n size of array
 * @param {number} index 0-base, where to heapify
 */
function heapify(array, n, index) {
  if (index >= n || !array || !array.length) {
    return;
  }

  // index is 0 base
  // if index is 1 base, formula should be 2 * index, not 2 * index + 1
  let max = index;
  const left  = 2 * index + 1;
  const right = left + 1;
  if (left < n && array[max] < array[left]) {
    max = left;
  }
  if (right < n && array[max] < array[right]) {
    max = right;
  }

  if (max !== index) {
    swap(array, max, index);
    heapify(array, n, max);
  }
}

/**
 * 
 * @param {number[]} array 
 * @param {number} i 
 * @param {number} j 
 */
function swap(array, i, j) {
  if (!array || !array.length) {
    return;
  }

  const size = array.length;
  if (i == j || i == null || j == null || i >= size || j >= size) {
    return;
  }

  [array[i], array[j]] = [array[j], array[i]];
}
