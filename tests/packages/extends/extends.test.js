const { JSExtends } = require('../../index');

function A() {
  this.a = 'aa';
  this.b = 'bb';
}

function B() {
  this.c = 'cc';
}

const a = new A();
const b = new B();
const c = new JSExtends(a, b);

test('JS Extends Test, A extends B, instance c should be A instance: ', () => {
  expect(c instanceof A).toBe(true);
});

test('JS Extends Test, A extends B, instance c should be B instance: ', () => {
  expect(c instanceof B).toBe(true);
});
