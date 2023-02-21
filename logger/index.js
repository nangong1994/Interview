function LOGGER () {}

/**
 * 
 * @param { any } info
 */
LOGGER.prototype.info = function() {
  const dateStr = new Date().toString();
  console.log('\x1b[36m%s\x1b[0m', `Time: ${dateStr}`, formatMsg(...arguments))
}

/**
 * 
 * @param { any } msg
 */
function formatMsg() {
  if (!arguments || !arguments.length) {
    return '';
  }

  let ret = '';
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != 'object') {
      ret += ' ' + arguments[i];
      continue;
    }
  
    if (arguments[i] instanceof Array) {
      ret += ' ' + '[' + arguments[i].join(',') + ']';
      continue;
    }

    if (arguments[i] && arguments[i].toString) {
      ret += ' ' + arguments[i].toString();
    }
  }

  return ret;
}

module.exports = new LOGGER();