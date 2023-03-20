class Debounce {

  /**
   * 
   * @param { (...args) => T } fn 
   * @param { number } delay 
   * @returns 
  */
  static debounce(fn, delay) {
    if (typeof fn !== 'function') {
      return;
    }
  
    let timer = null;
    const waiting = delay || 100;

    return (...args) => {
      const context = this;

      // if there is already one timer running, just cancel
      if (timer != null) {
        clearTimeout(timer);
      }

      // start a new timer
      timer = setTimeout(() => {
        timer = null;
        fn.call(context, ...args);
      }, waiting);
    }
  }
}

