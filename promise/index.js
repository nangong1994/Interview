const PENDING = 'PENDING';
const REJECTED = 'REJECTED';
const FULFILLED = 'FULFILLED';

class JSPromise {
  status;
  value;
  reason;
  onResolveCallbacks;
  onRejectdCallbacks;

  /**
   * 
   * @param {(ressolve, reject) => void } callback 
   */
  constructor(executor) {
    this.status = PENDING; 
    this.value = undefined; 
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectdCallbacks = [];

    try {
      executor(this.resolve, this.reject);
    } catch(e) {
      this.reject(e);
    }
  }

  /**
   * 
   * @param { string | number | boolean | symbol | Object} value 
   */
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value  = value;
      // retrieve the executors and resolve.
      this.onResolveCallbacks.forEach(fn=>fn());
    } 
  }

  /**
   * 
   * @param { string | number | boolean | symbol | Object} reason 
   */
  reject = (reason) => {
    if (this.status = PENDING) { 
      this.status = REJECTED; 
      this.reson = reason;
      // retrieve the executors and reject. 
      this.onRejectdCallbacks.forEach(fn=>fn());
    } 
  }

  /**
   * 
   * @param { (...args) => T} onFulfilled
   * If promise resolve
   * receive the value and handle you business logic
   * 
   * @param { (...args) => T } onRejected
   * Once promise is rejected
   * maybe there`s something need to deal with with the reject reason
   * 
   * @return { JSPromise }
   * 
  */
  then = (onFulfilled, onRejected) => {
    // onFulfilled
    if (!onFulfilled || typeof onFulfilled !== 'function') {
      return this;
    }
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    // onRejected 
    if (!onRejected || typeof onRejected !== 'function') {
      return null;
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    
    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });
    
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      });
    }
  }
}
