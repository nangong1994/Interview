const TEST_ARRAY = [100, -3, 9, 0, -10, 8, 20, 16, 88];

const { LOGGER } = require('../../index');
const SourceLog = ['Source:', TEST_ARRAY]

/* Sortings O(N^2) */
const bubbleSort = require('../../../algorithm/sort/O-N2/bubblesort/bubblesort');
test('BubbleSort Test:', () => {
  expect(bubbleSort([...TEST_ARRAY])).toEqual([...TEST_ARRAY].sort((a, b) => {return a - b;}));
});

const insertionSort = require('../../../algorithm/sort/O-N2/insertionsort/insertionsort');
test('InsertionSort Test:', () => {
  expect(insertionSort([...TEST_ARRAY])).toEqual([...TEST_ARRAY].sort((a, b) => {return a - b;}));
});

const selectionSort = require('../../../algorithm/sort/O-N2/selectionsort/selectionsort');
test('SelectionSort Test:', () => {
  expect(selectionSort([...TEST_ARRAY])).toEqual([...TEST_ARRAY].sort((a, b) => {return a - b;}));
});

/* Sortings O(Nlog(N)) */
const quickSort = require('../../../algorithm/sort/O-NlogN/quicksort/quicksort');
test('QuickSort Test:', () => {
  expect(quickSort([...TEST_ARRAY])).toEqual([...TEST_ARRAY].sort((a, b) => {return a - b;}));
});

const heapSort = require('../../../algorithm/sort/O-NlogN/heapsort/heapsort');
test('HeapkSort Test:', () => {
  expect(heapSort([...TEST_ARRAY])).toEqual([...TEST_ARRAY].sort((a, b) => {return a - b;}));
});

const shellSort = require('../../../algorithm/sort/O-NlogN/shellsort/shellsort');
test('ShellSort Test:', () => {
  expect(shellSort([...TEST_ARRAY])).toEqual([...TEST_ARRAY].sort((a, b) => {return a - b;}));
});

const TEST_ARRAY_2 = [10, -6, 2];
const mergeSort = require('../../../algorithm/sort/O-NlogN/mergesort/mergesort');
test('ShellSort Test:', () => {
  expect(mergeSort([...TEST_ARRAY], [...TEST_ARRAY_2])).toEqual([...TEST_ARRAY, ...TEST_ARRAY_2].sort((a, b) => {return a - b;}));
});
