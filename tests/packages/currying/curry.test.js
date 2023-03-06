const { FuncCurry } = require('../../index');

function sum(a, b, c) {
  return a + b + c;
}

const sum1 = FuncCurry(sum);
const sum2 = FuncCurry(sum, 1,2, 3);

/* sum1 test */
const PREFIX = 'FuncCurry Test for'
test(`${PREFIX} sum1 with (1, 2, 3)`, () => {
  expect(sum1(1, 2, 3)).toBe(6);
});

test(`${PREFIX} sum1 with (1)(2)(3)`, () => {
  expect(sum1(1)(2)(3)).toBe(6);
});

test(`${PREFIX} sum1 with (1)(2, 3)`, () => {
  expect(sum1(1)(2, 3)).toBe(6);
});

test(`${PREFIX} sum1 with (1)()`, () => {
  expect(sum1(1)()).toBe(NaN);
});

/* sum2 test */
test(`${PREFIX} sum2`, () => {
  expect(sum2).toBe(6);
});
