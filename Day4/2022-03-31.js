/**
 * leetcode [394] 字符串解码 https://leetcode-cn.com/problems/decode-string/description/
 * 示例 1：
 *
 *
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  const n = s.length;
  let res = "",
    repeat = "";

  for (let i = 0; i < n; i++) {
    if (s[i] === "[") {
      stack.push([repeat, res]);
      res = "";
      repeat = 0;
    } else if (s[i] === "]") {
      const [count, str] = stack.pop();
      res = res + str.repeat(count);
    } else if (!isNaN(s[i])) {
      repeat = repeat * 10 + Number(s[i]);
    } else {
      res += s[i];
    }
  }
};

/**
 * 实现  Object.is()
 *
 *
 * 题解：
 *
 * Object.is(0, -0) // false
 * 0 === -0 // true
 *
 * Object.is(NaN, NaN) // true
 * NaN === NaN // false
 */

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */

function is(a, b) {
  if (a !== a && b !== b) {
    // NaN
    return true;
  }
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  return a === b;
}
