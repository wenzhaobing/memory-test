/**
 * 轻弹窗反馈 UI 组件
 * 底部弹出，根据温度 delta 显示不同颜色
 */
var ToastUI = (function () {
  'use strict';

  /** 弹窗显示时长（毫秒） */
  var DISPLAY_DURATION = 1500;

  /** 定时器 ID */
  var _timer = null;

  /**
   * 显示反馈弹窗
   * @param {string} message - 反馈文案
   * @param {number} delta - 温度变化量 (+1 / 0 / -1)
   */
  function show(message, delta) {
    var toast = document.getElementById('toastFeedback');
    if (!toast) return;

    // 清除之前的定时器
    if (_timer) {
      clearTimeout(_timer);
      _timer = null;
    }

    // 设置内容
    toast.textContent = '✨ ' + message;

    // 根据 delta 设置颜色类
    toast.classList.remove('warm', 'cool', 'neutral');
    if (delta > 0) {
      toast.classList.add('warm');
    } else if (delta < 0) {
      toast.classList.add('cool');
    } else {
      toast.classList.add('neutral');
    }

    // 显示
    toast.classList.add('show');

    // 自动隐藏
    _timer = setTimeout(function () {
      toast.classList.remove('show');
      _timer = null;
    }, DISPLAY_DURATION);
  }

  /**
   * 立即隐藏弹窗
   */
  function hide() {
    var toast = document.getElementById('toastFeedback');
    if (!toast) return;
    toast.classList.remove('show');
    if (_timer) {
      clearTimeout(_timer);
      _timer = null;
    }
  }

  return {
    show: show,
    hide: hide
  };
})();