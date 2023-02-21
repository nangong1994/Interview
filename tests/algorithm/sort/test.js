const TEST_ARRAY = [100, -3, 9, 0, -10, 8, 20, 16, 88];

const LOGGER = require('../../../logger/index');

/* Sortings */
const bubbleSort = require('../../../algorithm/sort/O-N2/bubblesort/bubblesort');
LOGGER.info('BubbleSort Test:', bubbleSort([...TEST_ARRAY]));

const insertionSort = require('../../../algorithm/sort/O-N2/insertionsort/insertionsort');
LOGGER.info('InsertionSort Test:', insertionSort([...TEST_ARRAY]));
