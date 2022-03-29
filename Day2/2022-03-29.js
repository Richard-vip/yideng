/**
 * leetcode [821] 字符的最短距离  https://leetcode-cn.com/problems/shortest-distance-to-a-character/description/
 * 示例 1：
 *
 *
 * 输入：s = "loveleetcode", c = "e"
 * 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
 * 解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
 * 距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
 * 距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
 * 对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
 * 距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "aaab", c = "b"
 * 输出：[3,2,1,0]
 *
 */

function shortestToChar(s, c) {
  const n = s.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    let offset = 0;
    while (
      (i - offset >= 0 || i + offset < n) &&
      s[i - offset] !== c &&
      s[i + offset] !== c
    ) {
      offset++;
    }
    res.push(offset);
  }
  return res;
}

/**
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 */


/**
 * 实现symbol polyfill
 * 题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol
 */

