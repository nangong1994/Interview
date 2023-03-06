/**
 * @param { (...args: any[]) => any } fn
 * The function(fn) that needs to be called finally
 * @param { any[] } existingArgs
 * The arguments are curried already.
 * 
 * @returns
 * If the number of all curried arguments is equal to or more than the number of the arguments of the original fn,
 * the called result should be returned, otherwise it will
 * return a new function which accept the rest arguments.
 */
function curry(fn, ...existingArgs) {
  // get fn argument numbers
  const length = fn.length;

  // 1. if argument number equals to fn.length, execute fn & return the result;
  if (existingArgs.length >= length) {
    return fn && fn.call(null, ...existingArgs);
  }

  // 2. if not, return a function which can receive new args and redo the step 1.
  return function(...args) {
    if (!args.length) {
      return fn.call(null, ...existingArgs);
    }
    
    return curry(fn, ...existingArgs, ...args);
  }
}

module.exports = curry;
