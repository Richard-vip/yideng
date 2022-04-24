/**
 * leetcode [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 */

var twoSum = function (nums, target) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * 手写实现 compose
 *      const multiply20 = (price) => price * 20;
        const divide100 = (price) => price / 100;
        const normalizePrice = (price) => price.toFixed(2);
        const discount = compose(normalizePrice, divide100, multiply20);
        discount(200.0); //40.00
 */

const compose = (...fns) => {
  const n = fns.length;
  let start = n - 1;
  return (...args) => {
    let result = args;
    while (start >= 0) {
      result = [fns[start].apply(null, result)];
      start--;
    }
    const [ans] = result;

    return ans;
  };
};
