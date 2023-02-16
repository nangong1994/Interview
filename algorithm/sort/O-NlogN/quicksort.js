/**
 * 
 * @param { number[] } array 
 * @return { number[] }
 */
function quickSort(array) {
  // if array is empty, return empty
  if (!array || !array.length) {
    return [];
  }
  
  // if array`s length equals to 1
  if (array.length === 1) {
    return array;
  }

  const left  = [];
  const right = [];
  const index = Math.floor((array.length - 1) / 2);
  const pivot = array.splice(index, 1)[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
        left.push(array[i]);
        continue;
    }
    right.push(array[i]);
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([3,4,10,-1,8,6]));
