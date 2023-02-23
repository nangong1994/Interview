function EncodeByGray() {}

/**
 * @description
 * Create k-bit Gray Code
 * 
 * @param { number } k
 * @returns { string[] }
*/
EncodeByGray.prototype.basicEncoding1 = function(k) {
  let numStr = new Array(k).fill('0');
  
  const ret = [];
  ret.push(numStr.join(''));

  while(true) {
    numStr[k - 1] = numStr[k - 1] == '0' ? '1' : '0';
    ret.push(numStr.join(''));

    const index = findFirst1(numStr);
    if (index <= 0) {
      break;
    }
    
    numStr[index - 1] = numStr[index - 1] == '0' ? '1' : '0';
    ret.push(numStr.join(''));
  }

  return ret;
}

/**
 * @param { string } str
 * @returns { number }
 */
function findFirst1(str) {
  let index = str.length - 1;
  while(index >= 0) {
    if (str[index] == '1') {
      return index;
    }
    index--;
  }
  return -1;
}

module.exports = new EncodeByGray();