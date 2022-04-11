/**
 * leetcode   [109] 有序链表转换二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;

  let prevSlow = null;

  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  const root = new TreeNode(slow.val);

  if (prevSlow) {
    prevSlow.next = null;
    root.left = sortedListToBST(head);
  }

  root.right = sortedListToBST(slow.next);

  return root;
};

/**
 * bigfrontend 16. 实现一个Event Emitter
 *
 * https://bigfrontend.dev/zh/problem/create-an-Event-Emitter
 */

class EventEmitter {
  constructor() {
    this.$events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.$events.has(eventName)) {
      this.$events.set(eventName, new Set());
    }
    const eventSubs = this.$events.get(eventName);

    const event = { callback };

    eventSubs.add(event);

    return {
      release: () => {
        eventSubs.delete(event);
        if (!eventSubs.size) {
          delete this.$events.eventName;
        }
      },
    };
  }

  emit(eventName, ...args) {
    const eventSubs = this.$events.get(eventName);
    if (eventSubs) {
      for (let event of eventSubs) {
        event.callback.apply(this, args);
      }
    }
  }
}
