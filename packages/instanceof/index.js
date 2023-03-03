/**
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

  
}