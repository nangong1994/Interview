<div align='center'>
  <h1>
    <b style='color: #58a6ff'>Promise Impl</b>
  </h1>

  <p>This implementation for <b>Promise</b> is absolutely for practice and strictly following
    <b>
      <a href="https://promisesaplus.com/">PromiseA+</a>
    </b>
  </p>
</div>

## Introduction
A promise represents the eventual result of an asynchronous operation.   
The primary way of interacting with a promise is through its `then` method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

What should be clarified is that `new Promise` operation is **not a asynchronous process**. The only **asynchronous process** is in `then`, `resolve` etc. operations.

## Terminology
- **Promise:**  
An Object or a Function that is with a `then` function.

- **Thenable:**  
A function is defined by `Promise` object or function.

- **Value:**  
Any legal javascript value. When Promise `resolve`, value will be assigned.

- **Exception:**  
A value that is thrown using the throw statement.

- **Reason:**  
A value that indicates why a promise was rejected.  
  
## Promise Status
There are **3 status** in Promise, which are:

- **Pending**  
Need transition to either the `fulfilled` or `rejected` state.

- **Fullfiled**  
  - Must not transition to any other state.
  - Must have a value, which must not change.

- **Rejected**  
  - Must not transition to any other state.
  - Must have a reason, which must not change.

Here, **must not change** means immutable identity `(i.e. ===)`, but does not imply deep immutability.

## Then Impl
A promise must provide a `then` method to access its current or eventual value or reason.  

`Then` function offers **2** arguments, here we create a `class`(or `function` if you need) called `JSPromise`:
```javascript
class JSPromise {
  ...

  /**
   * @param { (...args) => Promise<T> } onFulfilled
   * If promise resolve
   * receive the value and handle you business logic
   * 
   * @param { (...args) => Promise<T> } onRejected
   * Once promise is rejected
   * maybe there`s something need to deal with with the reject reason
  */
  then(onFulfilled, onRejected) {
    ...
  }
}
```
- **onFulfilled & onRejected**
  - Both of them should be `function`, if not, just ignore it.
  - Both of them are optional.

- **onFulfilled**
  - It must be called after **Promise** is `fulfilled`, with promise’s value as its first argument.
  - If a promise is not fulfilled, `onFulfilled` can not be called then.
  - It must not be called **more than once**.

- **onRejected**
  - It must be called after **Promise** is `rejected`, with promise’s reason as its first argument.
  - If a promise is not rejected, `onRejected` can not be called then.
  - It must not be called **more than once**.

Here we drop some sample code. This code is not the final one.

```javascript
// code sample
class JSPromise {
  ...

  then(onFulfilled, onRejected) {
    // onFulfilled
    if (!onFulfilled || typeof onFulfilled !== 'function') {
      return this;
    }
    if (this.status === 'FULFILLED') {
      onFulfilled(this.value);
    }

    // onRejected 
    if (!onRejected || typeof onRejected !== 'function') {
      return null;
    }
    if (this.status === 'REJECTED') {
      onRejected(this.reason);
    }

    ...
  }
}
```

- **[extra requirement](https://promisesaplus.com/)**
  `onFulfilled` or `onRejected` must not be called until the [execution context](https://es5.github.io/#x10.3) stack contains only platform code.
  
- **Calling**
  `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value).

- **Multiple Calling**
  `then` may be called multiple times on the same promise.
  - If | when promise is `fulfilled`, all respective `onFulfilled` callbacks must execute **in the order of their originating calls** to then.
  - If | when promise is `rejected`, all respective `onRejected` callbacks must execute in the order of their originating calls to then.

- **Then Return Type**
  `then` must return a promise.
  ```javascript
  const newpromise = promiseold.then(onFulfilled, onRejected);
  ```

  - If either `onFulfilled` or `onRejected` returns a value `x`, run the Promise Resolution Procedure [[Resolve]] (**promise2**, `x`).
  - If either `onFulfilled` or `onRejected` throws an `exception e`, **promise2** must be `rejected` with `e` as the reason.
  - If `onFulfilled` is not a function and **promise1** is fulfilled, **promise2** must be `fulfilled` with the same value as **promise1**.
  - If `onRejected` is not a function and **promise1** is rejected, **promise2** must be `rejected` with the same reason as **promise1**.

## The Promise Resolution Procedure