
function HammingWeight() {}

/**
 * @param { number } n
 * @returns { number }
*/
HammingWeight.prototype.countOnes = function(n) {
  let num = Math.abs(n);
  if (!num) {
    return 0;
  }

  let ret = 0;
  while(num > 0) {
    num &= (num - 1);
    ret++;
  }

  return ret;
}

HammingWeight.prototype.VariablePrecision_SWAR = function(n) {
  let num = Math.abs(n);
  const step1 = 0x55555555; // 0x 0101 0101 ...
  const step2 = 0x33333333; // 0x 0011 0011 ...
  const stpe3 = 0x0F0F0F0F; // 0x 0000 1111 ...
  const step4 = 0x01010101; // 0x 0000 0001 ...

  num = (num & step1) + ((num >> 1) & step1);
  num = (num & step2) + ((num >> 2) & step2);
  num = (num & stpe3) + ((num >> 4) & stpe3);
  num = ((num * step4) >> 24);

  return num;
}

module.exports = new HammingWeight();