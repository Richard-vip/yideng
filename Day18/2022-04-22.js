/**
 * leetcode [987] 二叉树的垂序遍历
 * 
 * https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/solution/er-cha-shu-de-chui-xu-bian-li-by-leetcod-clsh/
来源：力扣（LeetCode）
 * 
 */
var verticalTraversal = function (root) {
  const nodes = [];
  dfs(root, 0, 0, nodes);
  nodes.sort((tuple1, tuple2) => {
    if (tuple1[0] !== tuple2[0]) {
      return tuple1[0] - tuple2[0];
    } else if (tuple1[1] !== tuple2[1]) {
      return tuple1[1] - tuple2[1];
    } else {
      return tuple1[2] - tuple2[2];
    }
  });

  const ans = [];
  let lastcol = -Number.MAX_VALUE;
  for (const tuple of nodes) {
    let col = tuple[0],
      row = tuple[1],
      value = tuple[2];
    if (col !== lastcol) {
      lastcol = col;
      ans.push([]);
    }
    ans[ans.length - 1].push(value);
  }
  return ans;
};

const dfs = (node, row, col, nodes) => {
  if (node === null) {
    return;
  }
  nodes.push([col, row, node.val]);
  dfs(node.left, row + 1, col - 1, nodes);
  dfs(node.right, row + 1, col + 1, nodes);
};

/**
 * 手写题 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
 */

const dom2json = (dom) => {
  if (!dom) {
    return;
  }

  let json = {
    tagName: dom.tagName,
    children: [],
  };

  const children = dom.children;
  // 读取子节点（元素节点）
  if (children && children.length) {
    Array.from(children).forEach((ele, i) => {
      // 递归处理
      json.children[i] = dom2json(ele);
    });
  }

  return json;
};
