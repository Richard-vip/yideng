/**
 * leetcode [821] 字符的最短距离  https://leetcode-cn.com/problems/shortest-distance-to-a-character/description/
 * 示例 1：
 *
 *
 * 输入：s = "loveleetcode", c = "e"
 * 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
 * 解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
 * 距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
 * 距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
 * 对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
 * 距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "aaab", c = "b"
 * 输出：[3,2,1,0]
 *
 */

function shortestToChar(s, c) {
  const n = s.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    let offset = 0;
    while (
      (i - offset >= 0 || i + offset < n) &&
      s[i - offset] !== c &&
      s[i + offset] !== c
    ) {
      offset++;
    }
    res.push(offset);
  }
  return res;
}

/**
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 */

/**
 * 实现symbol polyfill
 * 题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol
 */

// 1. symbol 由函数 Symbol 生成，typeof 为 symbol （利用ES5 无法改变 typeof 的结果，所以无法实现）
// 2. Symbol() 不能被 new，并且 symbol instanceof Symbol  === false，symbol 为原始数据类型.
// 3. Symbol('key') 函数接受一个字符串，以此字符串作为 key 用来描述返回的 symbol 值，相同的字符串返回的 symbol 值并不相等
// 4. Symbol 函数如果接受一个对象，则会调用该对象的 toString 方法来作为描述符，生成 symbol 值
// 5. symbol 值不能与其他类型的数值进行隐式运算 （无法实现,无法判读显式，还是隐式）
// 6. console.log(String(symbol))  ===> symbol(key) （我们是返回一个对象模拟的，所以无法实现）
// 7. symbol 可以作为对象的属性 key， 可以保证不出现相同的 key
// 8. symbol 作为对象的属性，是不能被 for...in  for...of Object.keys() Object.getOwnPropertyNames() JSON.stringify() 读取，
//     但是可以通过 Object.getOwnPropertySymbols() 获取对象所有 symbol 的属性名  （无法实现）
// 9. Symbol.for('key') 接受一个字符串 key ，返回以此 key 作为描述符的 symbol 值，如果没有就会新建并返回
// 10. Symbol.keyFor(symbol) 接受一个 symbol 值， 返回注册此 symbol 值的描述符，如果没有则会返回 undefined

(function () {
  var root = this;

  var generatorName = (function () {
    var postfix = 0;
    return function (descString) {
      postfix++;
      return "@@" + descString + "_" + postfix;
    };
  })();

  var SymbolPolyfill = function (description) {
    if (this instanceof SymbolPolyfill) {
      // 实现第 2 条
      throw new TypeError("Symbol is not a constructor");
    }

    // 实现第 4 条 如果接受的参数不是字符串，则就会调用其 toString 方法，进行转换
    var descString =
      description === undefined ? undefined : String(description);

    var symbol = Object.create({
      valueOf: function () {
        //  第 5 条 隐式运算报错， 这样显示的 调用 valueOf 我们就无法实现了，所以第 5 条我们无法判断是隐式，还是显式，无法实现
        // throw new Error('Cannot convert a Symbol value');

        return this;
      },
      toString: function () {
        return "Symbol(" + this.__Name__ + ")";
      },
    }); //  每次都会返回一个新的 引用类型，所以保证返回的 symbol 值永远不相同 实现第 3 条

    Object.defineProperties(symbol, {
      __Description__: {
        // 模拟 String(symbol)  ====> 'Symbol(key)' 调用 toString 方法返回 this.__Description__
        value: descString,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      __Name__: {
        // 作为对象的 key， 则会调用 toString 方法，所以需要返回的 name 保持唯一 ，这就无法正常显示 String(symbol)
        value: generatorName(descString),
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });

    return symbol;
  };

  // 实现第9条和第10条
  var forMap = {};

  Object.defineProperties(SymbolPolyfill, {
    for: {
      value: function (description) {
        var descString =
          description === undefined ? undefined : String(description);
        return forMap[descString]
          ? forMap[descString]
          : (forMap[descString] = SymbolPolyfill(descString));
      },
      writable: true,
      enumerable: false,
      configurable: true,
    },
    keyFor: {
      value: function (symbol) {
        for (const key in forMap) {
          if (forMap[key] === symbol) {
            return key;
          }
        }
      },
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });
  root.SymbolPolyfill = SymbolPolyfill;
})();
