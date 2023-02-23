const LOGGER = require('../../index');

const HammingWeight = require('../../../algorithm/binary/hamming-weight/index');
LOGGER.info('HammingWeight.countOnes', HammingWeight.countOnes(255));
LOGGER.info('HammingWeight.VariablePrecision_SWAR', HammingWeight.VariablePrecision_SWAR(255));

const EncodeByGray = require('../../../algorithm/binary/gray-code/index');
LOGGER.info('EncodeByGray.basicEncoding1:', EncodeByGray.basicEncoding1(3));