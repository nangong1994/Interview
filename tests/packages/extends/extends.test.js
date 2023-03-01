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

test('JS Extends Test, expected to be true: ', () => {
  expect(c instanceof A).toBe(true);
});
