const HammingWeight = require('../../../algorithm/binary/hamming-weight/index');
test('HammingWeight.countOnes: ', () => {
  expect(HammingWeight.countOnes(255)).toBe(8);
});

test('HammingWeight.VariablePrecision_SWAR: ', () => {
  expect(HammingWeight.VariablePrecision_SWAR(255)).toBe(8);
});

const EncodeByGray = require('../../../algorithm/binary/gray-code/index');
test('EncodeByGray.basicEncoding1: ', () => {
  expect(EncodeByGray.basicEncoding1(3)).toEqual(["000", "001", "011", "010", "110", "111", "101", "100"]);
});
