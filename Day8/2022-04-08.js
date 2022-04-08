/**
 * leetcode [24] 两两交换链表中的节点
 *
 *  https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
 *
 *
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let cur = head;
  let prev = null;

  while (cur || cur?.next) {
    if (prev) {
      let val = cur.val;
      cur.val = prev.val;
      prev.val = val;
      prev = null;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
};

/**
 * Object.create() 可以用来创建新的对象。
 *
 * 你能实现一个myObjectCreate()来实现(大概)相同的逻辑吗 ?
 *
 *注意
 *
 * Object.create的第二个参数不用实现，忽略即可。
 * 如果传入的不是object，请throw error。 (为什么？)
 * 请不要直接使用Object.create() 和 Object.setPrototypeOf()
 */

/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  function Constructor() {}
  Constructor.prototype = proto.prototype || proto;

  return new Constructor();
}
