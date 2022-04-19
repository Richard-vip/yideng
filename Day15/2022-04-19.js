/**
 * leetcode [129]  求根节点到叶节点数字之和
 *
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/description/
 *
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const dsf = (root, prevSum) => {
    if (!root) {
      return 0;
    }
    prevSum = prevSum * 10 + root.val;

    if (!root.left && !root.right) {
      return prevSum;
    }
    return dsf(root.left, prevSum) + dsf(root.right, prevSum);
  };
  return dsf(root, 0);
};

/**
 * 165.去除字符
 *
 * https://bigfrontend.dev/zh/problem/remove-characters
 */


/**
 * @param {string} input
 * @returns string
 */
 function removeChars(input) {
    // your code here
    const stask = [];
  
    for(let i = 0; i < input.length; i ++){
        const character  = input[i];
       if(character === 'c' && stask[stask.length -1] === 'a'){
         stask.pop();
       }else if(character !== 'b'){
         stask.push(character);
       }
    }
    return stask.join('')
  }
  
