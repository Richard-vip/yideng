/**
 * leetcode   [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const visited = new Set();
  let temp = head;
  while (temp && temp.next) {
    if (visited.has(temp)) {
      return temp;
    }
    visited.add(temp);
    temp = temp.next;
  }
  return null;
};

/**
 * 34. 实现`Promise.any()`
 *
 * https://bigfrontend.dev/zh/problem/implement-Promise-any
 */

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  // your code here

  const n = promises.length;
  if (!n) {
    return Promise.reject(
      new AggregateError("No Promise in Promise.any was resolved")
    );
  }

  return new Promise((resolve, reject) => {
    let settled = 0,
      errors = [];
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          errors[i] = error;
        })
        .finally(() => {
          settled++;
          if (settled === promises.length) {
            reject(
              new AggregateError(
                "No Promise in Promise.any was resolved",
                errors
              )
            );
          }
        });
    }
  });
}
