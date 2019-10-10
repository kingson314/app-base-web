"use strict";

/**
 * @module event
 */
var nextTime = 0;

module.exports = {
  /**
   * 空闲控制
   *
   * @param {function} action - 请求关联函数，实际应用需要调用的函数
   * @param {number} idle - 空闲时间，单位毫秒
   * @return {function} 返回客户调用函数,返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
   */
  debounce: function debounce(action, idle) {
    var last = void 0;
    return function () {
      var ctx = this,
          args = arguments;
      clearTimeout(last);
      last = setTimeout(function () {
        action.apply(ctx, args);
      }, idle);
    };
  },
  /**
   * 频率控制
   *
   * @param {number} delay - 延迟时间，单位毫秒
   * @param {function} action - 请求关联函数，实际应用需要调用的函数
   * @return {function}    返回客户调用函数,返回函数连续调用时，action 执行频率限定为 次 / delay
   */
  throttle: function throttle(action, delay) {
    var last = 0;
    return function () {
      var curr = new Date();
      if (curr - last > delay) {
        action.apply(this, arguments);
        last = curr;
      }
    };
  },
  /**
   * 检测两个物体是否相撞
   *
   * @param {dom} target1 - 目标
   * @param {dom} target2 - 目标
   * @param {function} callback
   * @return {function} 尾调函数
   */
  hit: function hit(target1, target2, callback) {
    /*检测碰撞元素上下左右的位置*/
    var target1Top = target1.offsetTop,
        target1Foot = target1.offsetTop + target1.offsetHeight,
        target1Left = target1.offsetLeft,
        target1Right = target1.offsetLeft + target1.offsetWidth;
    /*被碰撞元素的上下左右的位置*/
    var target2Top = target2.offsetTop,
        target2Foot = target2.offsetTop + target2.offsetHeight,
        target2Left = target2.offsetLeft,
        target2Right = target2.offsetLeft + target2.offsetWidth;
    if (target1Foot > target2Top && target1Right > target2Left && target1Top < target2Foot && target1Left < target2Right) callback();
  },
  /**
   * 随机间歇执行
   * @param speed  {number} 速度
   * @param callback {function}
   * @return {function}
   */
  frequency: function frequency(speed, callback) {
    return setInterval(function () {
      var now = new Date().getTime();
      if (now >= nextTime) {
        callback();
        nextTime = now + Math.random() * speed;
      }
    }, 300);
  }
};