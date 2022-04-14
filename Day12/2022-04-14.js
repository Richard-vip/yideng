/**
 *  leetcode [146] LRU 缓存
 *  https://leetcode-cn.com/problems/lru-cache/
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.size = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.size) {
    this.cache.delete(this.cache.keys().next().value);
  }
};

/**
 * 35. 实现`Promise.race()`
 *
 * https://bigfrontend.dev/zh/problem/implement-Promise-race
 */

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return !promises.length
    ? Promise.resolve()
    : new Promise((resolve, reject) => {
        for (const promise of promises) {
          Promise.resolve(promise).then(resolve, reject);
        }
      });
}
