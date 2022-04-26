/**
 * leetcode   [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let item of nums) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  const arr = Array.from(map).sort((a, b) => b[1] - a[1]);

  return arr.splice(0, k).map((n) => n[0]);
};

/**
 * 实现文件断点续传
 */

// 转换函数
const fileParse = (file, type = "base64") => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    // fileReader.readAsArrayBuffer() // 转成buffer格式数据
    // fileReader.readAsBinaryString() // 转成二进制格式数据
    // fileReader.readAsDataURL() // 转成base64格式数据
    // 解析过程是异步，所以需要调用onload事件的e.target.result获取转换后的结果 
    
    switch (type) {
      case "base64":
        fileReader.readAsDataURL(file);
        break;
      case "buffer":
        fileReader.readAsArrayBuffer(file);
        break;
      case "binary":
        fileReader.readAsBinaryString(file);
        break;
      default:
        break;
    }
    fileReader.onload = (e) => {
      resolve(e.target?.result);
    };
  });
};
