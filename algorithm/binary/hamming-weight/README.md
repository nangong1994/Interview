<div align='center'>
  <h1>
    <b style='color: #58a6ff'>Hamming Weight</b><br/>
  </h1>
  <h3><b>汉明重量</b></h3>
</div>

## 基本定义
**[汉明重量](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E9%87%8D%E9%87%8F/7110799)** 是指一串符号中非零符号的个数字。等价于相同长度的 **全零** 符号串的 **汉明距离**。<br/>

汉明重量经常被用于信息论、编码理论和密码学，所以研究人员针对计算汉明重量开发了多种不同的算法。

## 计算方法
1. **遍历算法**
<p style='text-indent: 2em'>
  最简单的方法就是遍历，通过简单的位运算，对数字的每一位进行检查。这种方法效率很低，如果数字很大，则无法满足需求。
</p>

<p style='text-indent: 2em'>
  根据位运算的性质，n = n & (n - 1) 可以去掉最后一个 1，一直循环直到数字 n = 0，循环的次数就等于 1 的个数。
</p>

```javascript
/**
 * @param { number } n
 * @returns { number }
*/
function countOnes(n) {
  let num = Math.abs(n);
  if (!num) {
    return 0;
  }

  let ret = 0;
  while(num > 0) {
    num &= (num - 1);
    ret++;
  }

  return ret;
}
```

2. **查表算法**
<p style='text-indent: 2em'>
  位数组的长度是有限的，例如8位，可以表示为 00001010, 则维护这样一个列表，列表的 key 为位数组，value 为该位数组对应的 1 的个数。这种方式对于第一种方法略有提升，但是效率依然很低，同时占用了大量的内存。因此，最显著的缺点如下：
</p>

  - 效率低下
  - 内存占用高(需要存储列表)

3. **Variable-precision SWAR算法**

```C++
// 转自博客: https://www.cnblogs.com/katsura/p/5686138.html
int32_t swar(int32_t i)
{    
  i = (i & 0x55555555) + ((i >> 1) & 0x55555555);
  i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
  i = (i & 0x0F0F0F0F) + ((i >> 4) & 0x0F0F0F0F);
  i = (i * (0x01010101) >> 24);
  return i
}
```
