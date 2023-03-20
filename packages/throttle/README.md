<div align='center'>
  <h1>
    <b style='color: #58a6ff'>Throttle</b>
  </h1>
</div>

## Introduction
> Throttle is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

## Code

```javascript
// use timestamp
function throttle(fn, delay) {
  if (typeof fn !== 'function') {
    return;
  }


  let lastCalltime = Date.now();
  const waiting = delay || 100;

  return (...args) => {
    const context = this;
    const now = Date.now();
    if (now - lastCalltime >= waiting) {
      lastCalltime = now;
      fn.call(context, ...args);
    }
  }
}

```

another way is using timer:

```javascript
// use timer
function throttle(fn, delay) {
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

```

