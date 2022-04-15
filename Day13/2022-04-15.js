/**
 *  leetcode [104] 二叉树的最大深度
 *
 *  https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * 164. 实现Immer的produce()
 *
 * https://bigfrontend.dev/zh/problem/immerjs
 */

/**
 * @param {any} base
 * @param {(draft: any) => any} recipe
 * @returns {any}
 */
function produce(base, recipe) {
  // your code here
  let produced = JSON.parse(JSON.stringify(base));
  recipe(produced);

  if (compare(base, produced)) {
    produced = base;
  }
  return produced;
}

function compare(base, produced) {
  if (typeof base !== typeof produced) {
    return false;
  }
  if (typeof base !== "object") {
    return base === produced;
  }
  let equal = true;
  for (let key in produced) {
    if (key in base) {
      if (compare(base[key], produced[key])) { //递归循环 🦐
        produced[key] = base[key];  //修改地址引用  🍌
      } else {
        equal = false;
      }
    } else {
      equal = false;
    }
  }

  for (let key in base) {
    if (!(key in produced)) {
      return false;
    }
  }

  return equal;
}
