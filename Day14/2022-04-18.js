/**
 * leetcode [100]  相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p || !q) {
    return p?.val === q?.val;
  }

  return (
    p?.val === q?.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};




/**
 * 150. Virtual DOM V - JSX 2
 *
 * https://bigfrontend.dev/zh/problem/virtual-dom-v-jsx-2
 */




/**
 * @param {code} string
 * @returns {any} AST 
 */
 function parse(code) {
  // your code here
}

/**
 * @param {any} your AST
 * @returns {string} 
 */
function generate(ast) {
  // your code here
}

