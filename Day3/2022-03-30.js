/**
 * leetcode [1381] 设计一个支持增量操作的栈 https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/description/
 * 题解：
 *
 *
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.data = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.data.length < this.maxSize) {
    this.data.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (!!this.data.length) {
    return this.data.pop();
  } else {
    return -1;
  }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  let i = 0;
  while (i < k) {
    if (i < this.data.length) {
      this.data[i] += val;
    }
    ++i;
  }
};

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */

function allSettled(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }
  let count = 0;
  const result = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          result[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          result[i] = { status: "rejected", reason };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        });
    }
  });
}
