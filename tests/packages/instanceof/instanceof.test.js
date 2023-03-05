const { InstanceOf } = require('../../index');

class A {
  constructor() {
    this.a = 'class A';
  }
}

class B extends A {
  constructor() {
    super();
    this.b = 'class B';
  }
}

const a_ins = new A();
const b_ins = new B();

const PREFIX = 'InstanceOf Test for';
test(`${PREFIX} Class B instance and Class B`, () => {
  expect(InstanceOf(b_ins, B)).toBe(true);
});

test(`${PREFIX} Class B instance and Class A`, () => {
  expect(InstanceOf(b_ins, B)).toBe(true);
});

test(`${PREFIX} Class A instance and Class A`, () => {
  expect(InstanceOf(a_ins, A)).toBe(true);
});

test(`${PREFIX} Class A instance and Class B`, () => {
  expect(InstanceOf(a_ins, B)).toBe(false);
})

test(`${PREFIX} Class A instance and Object`, () => {
  expect(InstanceOf(a_ins, Object)).toBeTruthy();
})
