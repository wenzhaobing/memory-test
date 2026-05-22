/**
 * 通用工具函数
 * 纯函数，无副作用
 */
var Utils = {

  /**
   * 将数值限制在指定范围内
   * @param {number} value - 输入值
   * @param {number} min - 最小值
   * @param {number} max - 最大值
   * @returns {number}
   */
  clamp: function (value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  /**
   * 从数组中随机选取一个元素
   * @param {Array} arr - 输入数组
   * @returns {*} 随机元素
   */
  randomPick: function (arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * 延迟执行（Promise 封装）
   * @param {number} ms - 延迟毫秒数
   * @returns {Promise}
   */
  delay: function (ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  },

  /**
   * 判断是否为首次访问（无存档）
   * @returns {boolean}
   */
  isFirstVisit: function () {
    return !localStorage.getItem('childhood_fragments_save');
  },

  /**
   * 获取当前时间戳
   * @returns {number}
   */
  now: function () {
    return Date.now();
  }
};