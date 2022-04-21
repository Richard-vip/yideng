/**
 * leetcode  [297] 二叉树的序列化与反序列化
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const deepSerialize = (root, res) => {
    if (!root) {
      res += "None,";
    } else {
      res += root.val + ",";
      res = deepSerialize(root.left, res);
      res = deepSerialize(root.right, res);
    }
    return res;
  };
  return deepSerialize(root, "");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const deepDeserialize = (dataList) => {
    if (dataList[0] === "None") {
      dataList.shift();
      return null;
    }
    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();

    root.left = deepDeserialize(dataList);
    root.right = deepDeserialize(dataList);

    return root;
  };
  const dataList = data.split(",");
  return deepDeserialize(dataList);
};


/**
 *  题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染
 * 
 *  题解见 index.html
 */


