/**
 * 
 * @param { number[] } array1
 * @param { number[] } array2
 * 
 * @returns { number[] }
 */
function mergeSort(array1, array2) {
  let arr1 = array1 || [];
  let arr2 = array2 || [];

  // sort the input arrays
  arr1 = arr1.sort((a, b) => { return a - b; });
  arr2 = arr2.sort((a, b) => { return a - b; });

  let pTr1 = 0;
  let pTr2 = 0;
  let pTr3 = 0;
  let sortedArr = new Array();

  const len1 = arr1.length;
  const len2 = arr2.length;

  while(true) {
    if (pTr1 < len1 && arr1[pTr1] <= arr2[pTr2]) {
      sortedArr[pTr3++] = arr1[pTr1++];

      if (pTr1 >= len1 && pTr2 < len2) {
        sortedArr = sortedArr.concat(arr2.splice(pTr2, len2 - pTr2));
        break;
      }
    }
    if(pTr2 < len2 && arr1[pTr1] > arr2[pTr2]) {
      sortedArr[pTr3++] = arr2[pTr2++];

      if (pTr2 >= len2 && pTr1 < len1) {
        sortedArr = sortedArr.concat(arr1.splice(pTr1, len1 - pTr1));
        break;
      }
    }
  }

  return sortedArr;
}

module.exports = mergeSort;
