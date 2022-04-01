/**
 * leetcode  232. 用栈实现队列  https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */

var MyQueue = function () {
  this.inStask = [];
  this.outStask = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStask.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outStask.length) {
    this.in2out();
  }
  return this.outStask.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStask.length) {
    this.in2out();
  }
  return this.outStask[this.outStask.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.inStask.length && !this.outStask.length;
};

MyQueue.prototype.in2out = function () {
  while (this.inStask.length) {
    this.outStask.push(this.inStask.pop());
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * 请计算出时钟的时针和分针的角度（两个角度的较小者，四舍五入）。时间以HH:mm的格式传入。
 *
 * angle('12:00')
 * 0
 *
 *
 * angle('23:30')
 * 165
 */

/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  const [hours, minutes] = time.split(":");

  const hourAngle = (360 / 12) * (hours % 12);

  const minutesAngle = (360 / 60) * minutes;

  const extra = (minutes / 60) * (360 / 12);

  let finalAngle = Math.abs(hourAngle - minutesAngle + extra);

  finalAngle = finalAngle > 180 ? 360 - finalAngle : finalAngle;

  return Math.round(finalAngle);
}
