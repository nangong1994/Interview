const TEST_ARRAY = [100, -3, 9, 0, -10, 8, 20, 16, 88];

const LOGGER = require('../../index');
const SourceLog = ['Source:', TEST_ARRAY]

/* Sortings */
const bubbleSort = require('../../../algorithm/sort/O-N2/bubblesort/bubblesort');
LOGGER.info(...SourceLog, 'BubbleSort Test:', bubbleSort([...TEST_ARRAY]));

const insertionSort = require('../../../algorithm/sort/O-N2/insertionsort/insertionsort');
LOGGER.info(...SourceLog, 'InsertionSort Test:', insertionSort([...TEST_ARRAY]));

const selectionSort = require('../../../algorithm/sort/O-N2/selectionsort/selectionsort');
LOGGER.info(...SourceLog, ' SelectionSort Test:', selectionSort([...TEST_ARRAY]));

const quickSort = require('../../../algorithm/sort/O-NlogN/quicksort/quicksort');
LOGGER.info(...SourceLog, ' QuickSort Test:', quickSort([...TEST_ARRAY]));

const heapSort = require('../../../algorithm/sort/O-NlogN/heapsort/heapsort');
LOGGER.info(...SourceLog, ' HeapkSort Test:', heapSort([...TEST_ARRAY]));

const shellSort = require('../../../algorithm/sort/O-NlogN/shellsort/shellsort');
LOGGER.info(...SourceLog, ' ShellSort Test:', shellSort([...TEST_ARRAY]));
