/**
 * @description
 * This module is designed to implement Javascript Object extends
 * 
 */

class JSExtends {

  /**
   * 
   * @param { Object } source 
   * @param { Object } target 
   * 
   * @returns { Object }
   */
  constructor(source, target) {
    if (!source) {
      return;
    }

    // src may be Date, Error ...
    if (this.isBuiltInObject(source)) {
      return source;
    }

    // get source prototype
    const sourcePrototype = Object.getPrototypeOf(source);

    // create new obejct with src prototype
    const newObjectProto = Object.create(sourcePrototype);

    return Object.assign(newObjectProto, target || {});
  }

  /**
   * 
   * @param { Object } src 
   * @returns { boolean } 
   */
  isBuiltInObject = function(src) {
    const name = src.constructor.name;
    if (BUILT_IN_CLASS[name]) {
      return true;
    }

    return false;
  }
}

const BUILT_IN_CLASS = {
  Date:  1,
  Error: 2,
  Array: 3,
  Map: 4,
  Set: 5,
  WeakMap: 6,
  WeakSet: 7,
  RegExp: 8
}

module.exports = JSExtends;
