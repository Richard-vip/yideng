/**
 * leetcode 最多能完成排序的块 II   https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/description/
 * 这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。
 *
 *
 * arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。
 *
 * 我们最多能将数组分成多少块？
 *
 * 示例 1:
 *
 *
 * 输入: arr = [5,4,3,2,1]
 * 输出: 1
 * 解释:
 * 将数组分成2块或者更多块，都无法得到所需的结果。
 * 例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。
 *
 *
 * 示例 2:
 *
 *
 * 输入: arr = [2,1,3,4,4]
 * 输出: 4
 * 解释:
 * 我们可以把它分成两块，例如 [2, 1], [3, 4, 4]。
 * 然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。
 *
 *
 * 注意:
 *
 *
 * arr的长度在[1, 2000]之间。
 * arr[i]的大小在[0, 10**8]之间。
 *
 *
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let sum1 = 0;
  let sum2 = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += sorted[i];

    if (sum2 === sum1) {
      count++;
      sum2 = sum1 = 0;
    }
  }
  return count;
};

/**
 * 实现 URLSearchParams
 *
 * append 、 delete 、entries 、forEach 、 get 、 getAll 、has 、keys 、set 、 sort、 toString 、values
 */

class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    const match = init.replace(/^.*\?/, "");
    /**
     * @type [string, string][]
     */
    const list = match.split("&").map((param) => param.split("=")) ?? [];
    /**
     * @type Map<string, string[]>
     */
    this.paramMap = new Map();
    for (const [key, value] of list) {
      this.append(key, value);
    }
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    if (this.paramMap.has(name)) {
      const current = this.paramMap.get(name);
      // current is a reference to the array, need not set to the Map again
      current.push(String(value));
    } else {
      this.set(name, value);
    }
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.paramMap.delete(name);
  }

  /**
   * @returns {Iterator}
   */
  *entries() {
    for (const [key, values] of this.paramMap) {
      for (const value of values) {
        yield [key, value];
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (const [key, values] of this.paramMap) {
      for (const value of values) {
        callback(value, key);
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    return this.paramMap.get(name.replace(/^.*\?/, ""))?.[0] ?? null;
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.paramMap.get(name) ?? [];
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.paramMap.has(name);
  }

  /**
   * @return {Iterator}
   */
  keys() {
    return this.paramMap.keys();
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.paramMap.set(name, [String(value)]);
  }

  // sor all key/value pairs based on the keys
  sort() {
    const sortedEntries = [...this.paramMap].sort((a, b) =>
      a[0] < b[0] ? -1 : 1
    );

    this.paramMap = new Map(sortedEntries);
  }

  /**
   * @return {string}
   */
  toString() {
    return [...this.paramMap]
      .flatMap(
        ([key, values]) => values.map((value) => `${key}=${value}`) // Return a nested array but `flatMap` flattens it by one level
      )
      .join("&");
  }

  /**
   * @return {Iterator} values
   */
  *values() {
    const entries = this.entries();
    let value;
    while ((value = entries.next().value)) {
      yield value[1];
    }
  }
}
