/**
 * leetcode [513] 找树左下角的值
 *
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/description/
 *
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let maxDeepth = 0;

  let deepth = 0;
  let res = null;

  const dfs = (root) => {
    if (!root) {
      return null;
    }

    deepth++;
    if (deepth > maxDeepth) {
      maxDeepth = deepth;
      res = root;
    }
    dfs(root.left);
    dfs(root.right);

    deepth--;
  };
  dfs(root);
  return res.val;
};

/**
 * 130 create  Lazyman()
 *
 * https://bigfrontend.dev/zh/problem/create-lazyman/discuss
 *
 */

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  const cmds = [["greet", name]];

  const actions = {
    greet: (name) => logFn(`Hi, I'm ${name}.`),
    eat: (food) => logFn(`Eat ${food}.`),
    sleep: (ms) =>
      sleep(ms * 1000).then(() =>
        logFn(`Wake up after ${ms} second${ms > 1 ? "s" : ""}.`)
      ),
  };

  Promise.resolve().then(exec);

  async function exec() {
    for (const [cmd, val] of cmds) {
      await actions[cmd](val);
    }
  }

  return {
    sleep(ms) {
      cmds.push(["sleep", ms]);
      return this;
    },
    sleepFirst(ms) {
      cmds.unshift(["sleep", ms]);
      return this;
    },
    eat(food) {
      cmds.push(["eat", food]);
      return this;
    },
  };
}
