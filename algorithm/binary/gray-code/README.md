<div align='center'>
  <h1>
    <b style='color: #58a6ff'>Gray Code</b><br/>
  </h1>
  <h3><b>格雷编码</b></h3>
</div>

## 基本定义
**[格雷编码](https://oi-wiki.org/misc/gray-code/)** 是一种编码方式，具体的呈现为一个数列组合，数列中的每个数字都使用二进制数表示，任意相邻的两个数字之间只有一个位元值不同。举个例子，3 位二进制数的格雷码序列为：<br/>
> <p align='center'>000 001 011 010 110 111 101 100</p>

<p>
  <b>位元：</b>数列中的基础数由几个二进制数表示的，就是几个位元。如上述例子，有三个位元，总共有 2<sup>3</sup> = 8 个位值。<br/>
</p>

<p>
  <b>码值：</b>上述例子中，001 就是一个码值。<br/>
</p>

<p>
  <b>格雷码：</b>在一组数的编码中，如果任意两个相邻的代码只有一位二进制数不同，则这种编码被称为格雷码。<br/>
</p>

<p>
  <b>格雷码：</b>在一组数的编码中，如果任意两个相邻的代码只有一位二进制数不同，则这种编码被称为格雷码。<br/>
</p>

<p>
  <b>循环码：</b>在满足格雷码的基础上，如果最小数和最大数值之间也仅有一位不同，这样的编码被称为循环码，也被称为<b>反射码</b>。<br/>
</p>

## 生成方法

1. **手动构造**
> 总共分为三步：
> 1. 修改二进制数字最右侧的位元值：1 => 0 或 0 => 1;
> 2. 从二进制数字最右侧开始，找到第一个1，修改其左侧的位元值，如 001 => 011;
> 3. 重复上述的第一步和第二步。
>
> 如果有 k 位，则完成上述步骤需要<span style='color: red'> 2<sup>k</sup> - 1 </span>次。

<p>
  代码实现如下：
</p>

```javascript

/**
 * @description
 * Create k-bit Gray Code
 * 
 * @param { number } k
 * @returns { number [] }
*/
function basicEncoding1(k) {
 let numStr = new Array(k).fill('0');
  
  const ret = [];
  ret.push(numStr.join(''));

  while(true) {
    numStr[k - 1] = numStr[k - 1] == '0' ? '1' : '0';
    ret.push(numStr.join(''));

    const index = findFirst1(numStr);
    if (index <= 0) {
      break;
    }
    
    numStr[index - 1] = numStr[index - 1] == '0' ? '1' : '0';
    ret.push(numStr.join(''));
  }

  return ret;
}

/**
 * @param { string } str
 * @returns { number }
 */
function findFirst1(str) {
  let index = str.length - 1;
  while(index >= 0) {
    if (str[index] == '1') {
      return index;
    }
    index--;
  }
  return -1;
}
```

2. **二进制 & 格雷码的转换规律构造**

3. **镜像排列**

4. **正序逆序排列构造**