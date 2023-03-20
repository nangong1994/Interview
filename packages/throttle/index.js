class Throttle {
  constructor() {

  }

  /**
   * 
   * @description
   * Implemented by timestamap
   * 
   * @param { (...args) => T } fn 
   * @param { number } delay 
   * @returns 
  */
  static throttle1(fn, delay) {
    if (typeof fn !== 'function') {
      return;
    }
  
  
    let lastCalltime = Date.now();
    const waiting = delay || 100;
  
    return (...args) => {
      const context = this;
      const now =  Date.now();

      console.log('111; ', now, '---', lastCalltime, " : ", (now - lastCalltime))
      if (now - lastCalltime >= waiting) {
        lastCalltime = now;
        fn.call(context, ...args);
      }
    }
  }

  /**
   * 
   * @description
   * Implemented by setTimeout
   * 
   * @param { (...args) => T } fn 
   * @param { number } delay 
   * @returns 
  */
  static throttle2(fn, delay) {
    if (typeof fn !== 'function') {
      return;
    }
  
  
    let timer = null;
    const waiting = delay || 100;
  
    return (...args) => {
      const context = this;
      
      if (!timer) {
        timer = setTimeout(() => {
          clearTimeout(timer);
          fn.call(context, ...args);
          timer = null;
        }, waiting);
      }
    }
  }
}