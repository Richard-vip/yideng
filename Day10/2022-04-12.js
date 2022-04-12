/**
 * leetcode [160]  相交链表
 *
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists
 *
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const visited = new Set();

  let temp = headA;
  while (!!temp) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (!!temp) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};




