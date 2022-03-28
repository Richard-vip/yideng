/**
 * leetcode 989 数组形式的整数方法
 * 输入：num = [1,2,0,0], k = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 */

function addToArrayForm(num, k) {
  const n = num.length;
  const res = [];
  for (let i = n - 1; i >= 0 || k > 0; --i, k = Math.floor(k / 10)) {
    if (i >= 0) {
      k += num[i];
    }
    res.push(k % 10);
  }
  res.reverse();
  return res;
}
// 时间复杂度：O(max(n,log k))，其中 n 为数组的长度。
// 空间复杂度：O(1)。除了返回值以外，使用的空间为常数。

/**
 * 手写函数柯里化
 * 
function curry(func) {
  //此处补全
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying

 */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
  //此处补全
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
