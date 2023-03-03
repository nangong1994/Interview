<div align='center'>
  <h1>
    <b style='color: #58a6ff'>JS InstanceOf Impl</b>
  </h1>

  <p>This implementation for <b>Javascript <span style="color: orange">instanceof</span></b> is absolutely for practice</p>
</div>

## Introduction
>[MDN Says:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

***<a style="color: orange">instanceof :</a>***
- 功能：该操作符尝试去查看一个构造函数的`prototype`属性是否出现在实例原型链中的任意位置。
- 扩展：可以使用 [Symbol.hasInstance](../symbols/hasinstance/README.md) 自定义行为。
- 返回：返回 `boolean` 值。

举个例子：
```javascript
function A() {
  this.a = 'member_a';
}

const ins_A = new A();
console.log(ins_A instanceof A); // true;
console.log(ins_A instanceof Object) // true;

console.log(ins_A instanceof A()); // Uncaught TypeError: Right-hand side of 'instanceof' is not callable;
console.log(ins_A instanceof new A()); // Uncaught TypeError: Right-hand side of 'instanceof' is not callable;;
```
综上
1. `instanceof` 可以基于原型进行实现；
2. `instanceof` 可以使用 `Symbol.hasInstance` 进行扩展。

针对上述的第二点，举个例子：
```javascript
class ArrayImp {
  // some codes
}

console.log([] instanceof ArrayImp);
// 结果：false
// 原因：ArrayImp是我们自己声明的一个Class, 它只能识别自己的实例，即 new ArrayImp() 出来的对象。

// 现在，我们使用 Symbol.hasInstance 进行改造, 让其可以识别出来普通的Array，即使不是通过 new ArrayImp 得到的。
class ArrayImp {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof ArrayImp);
// 结果：true
```
为什么 `Symbol.hasInstance` 可以修改 `instanceof`，请前往[链接](../symbols/hasinstance/README.md)查看，这里不做赘述。

## multiple realms
Description is from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_realms);

Javascript的执行环境都是在自己的域内，例如有 window，frame 等域。这意味着它们有不同的内置对象(built-ins)，例如不同的全局对象，不同的构造函数等。这可能会导致不同的结果，例如：

```javascript
[] instanceof window.frames[0].Array // false
```

因为 `Array.prototype` !== `window.frames[0].Array.prototype`, window和frame是不同的域，

## Examples

**1. String**

```javascript
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // false, string primitive is not a String
stringObject instanceof String; // true

literalString instanceof Object; // false, string primitive is not an Object
stringObject instanceof Object; // true

stringObject instanceof Date; // false
```

**2. Date**

```javascript
const myDate = new Date();

myDate instanceof Date; // true
myDate instanceof Object; // true
myDate instanceof String; // false
```

**3. Object.create()**

```javascript
function Shape() {

}

function Rectangle() {
  // call super constructor.
  Shape.call(this);
}

// change Rectangle`s prototype with Shape`s prototype
Rectangle.prototype = Object.create(Shape.prototype);

// change Rectangle.prototype.constructor`s prototype with Rectangle
// same as: Shape extends Rectangle
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

rect instanceof Object; // true
rect instanceof Shape; // true
rect instanceof Rectangle; // true
rect instanceof String; // false

const literalObject = {};
const nullObject = Object.create(null);
nullObject.name = "My object";

// TypeError: Object prototype may only be an Object or null: undefined!!!
const nullObject = Object.create(undefined);

literalObject instanceof Object; // true, every object literal has Object.prototype as prototype
({} instanceof Object); // true, same case as above
nullObject instanceof Object; // false, prototype is end of prototype chain (null)
```

**4. Overriding the instanceof**

<p style="text-indent: 1em"><b>4.1 Private Fields</b></p>

一个常见的陷阱是，如果 `a instanceof A` 返回 `true`，则认为 `a` 就是使用 `A` 的构造函数创建的。这个结果不一定对，举个例子：
```javascript
class C {
  // # 可以用来表示一个私有属性，不能被外部环境直接访问
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

// 将 C 的原型直接赋给 x
const x = { __proto__: C.prototype };

if (x instanceof C) {
  console.log(C.getValue(x));
  // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

&nbsp;&nbsp;因此，`a instanceof A` 返回 `true` 只是必要条件，并不是充分条件。
即：使用 `A` 的构造函数创建出来的对象一定成立，但是反过来，`a instanceof A` 即使为 `true`，结果并不一定成立。

为了避免上述情况的发生，我们使用 `Symbol.hasInstance` 对 `instanceof` 进行改造：
```javascript
class C {
  // # 可以用来表示一个私有属性，不能被外部环境直接访问
  #value = "foo";

  // 声明后，每一次调用 instanceof，都会执行这个方法
  // 检查 x 对象中 是否存在 #value 这个属性
  // 为什么不用 x.#value 而用 #value in x ???
  // 因为 x.#value 相当于直接调用私有属性了，会直接报错
  static [Symbol.hasInstance](x) {
    return #value in x;
  }
  // 当然，如果坚持使用 x.#value，也可以使用 try catch 的方式处理
  static [Symbol.hasInstance](x) {
    try {
      x.#value
    } catch(e) {
      if (e) {
        return false;
      }
    }

    return true;
  }

  // static [Symbol.hasInstance](x) 可以重复声明
  // 但是执行的是最后一次声明
  // 如上述例子会执行 try catch 的代码，return #value in x 并不会执行

  static getValue(x) {
    return x.#value;
  }
}

// 将 C 的原型直接赋给 x
const x = { __proto__: C.prototype };

if (x instanceof C) {
  console.log(C.getValue(x));
  // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

<p style="text-indent: 1em"><b>4.2 Class extends</b></p>

注意，在有继承关系的类中，如果希望将 `instanceof` 限制为当前类，同样需要对 `instanceof` 进行改造，否则，它可能会导致子类的误报：

```javascript
class D extends C {

}

console.log(new C() instanceof D);
// true
// 这是因为 D 是 C 的子类，顺着原型链依然能够找到 C
// 这样会被误人误 C 是 D 的子类，而事实上是 D 是 C 的子类
```

改造后的逻辑应当为：

```javascript
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    // 使用 this 的指向进行处理
    return this === C && #value in x;
  }
}

class D extends C {}
console.log(new C() instanceof D); // false
console.log(new C() instanceof C); // true
console.log({ __proto__: C.prototype } instanceof C); // false
```

## My instanceof impl
根据上述规则，使用 `JavaScript` 自己实现一个 `instanceof`。
Check in [Code File](./index.js)。