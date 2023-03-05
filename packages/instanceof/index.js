/**
 * @description
 * This module just simulate the implementation of `instanceof` in Javascript.
 * It is not available for Symbol.hasIntance to customize !!!
 * 
 * @param { Object } instance 
 * @param { Function } Class 
 * 
 * @returns { boolean }
 */
function instanceOf(instance, Class) {
  if (!instance) {
    return false;
  }

  if (typeof instance !== 'object') {
    return false;
  }

  if (!Class || typeof Class !== 'function') {
    return false;
  }
  
  const _proto_ = instance.__proto__;
  if (!_proto_) {
    return false;
  }

  const prototype = Class.prototype;
  if (_proto_ === prototype) {
    return true;
  }

  return instanceOf(_proto_, Class);
}

module.exports = instanceOf;
