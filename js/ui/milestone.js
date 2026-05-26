/**
 * 里程碑弹窗 UI 组件 · 邮票式
 * 在完成第1、3、6、12、20个碎片时触发
 * 居中邮票弹窗 + 自动关闭
 * 接口兼容：show(completedCount, onClose)
 */
var MilestoneUI = (function () {
  'use strict';

  /** 自动关闭定时器 */
  var _autoCloseTimer = null;

  /** 关闭回调 */
  var _onClose = null;

  /**
   * 显示里程碑弹窗
   * @param {number} completedCount - 已完成碎片数 (1/3/6/12/20)
   * @param {Function} onClose - 关闭后的回调
   */
  function show(completedCount, onClose) {
    var config = MILESTONES_CONFIG;
    var data = config.data[completedCount];
    if (!data) return;

    _onClose = onClose || null;

    // 计算当前是第几枚邮票（ordinal position, 1-based）
    var activeIndex = config.triggers.indexOf(completedCount) + 1;

    // 构建邮票 HTML 模板
    var stampModal = document.getElementById('stampModal');
    if (stampModal) {
      stampModal.innerHTML = ''
        + '<div class="stamp stamp-' + activeIndex + '">'
        + '  <div class="stamp-icon">' + data.icon + '</div>'
        + '  <div class="stamp-theme">' + data.title + '</div>'
        + '  <div class="stamp-number">—— 第 ' + activeIndex + ' 枚 ——</div>'
        + '  <div class="stamp-quote">"' + data.quote + '"</div>'
        + '  <div class="stamp-tap-hint">✨ 轻触任意位置继续</div>'
        + '</div>';
    }

    // 显示弹窗
    var overlay = document.getElementById('milestoneOverlay');
    if (!overlay) return;
    overlay.classList.add('show');

    // 绑定关闭事件
    overlay.addEventListener('click', _handleClose);

    // 自动关闭兜底
    _autoCloseTimer = setTimeout(function () {
      _handleClose();
    }, config.autoCloseDelay);
  }

  /**
   * 关闭弹窗
   */
  function _handleClose() {
    var overlay = document.getElementById('milestoneOverlay');
    if (!overlay) return;

    overlay.classList.remove('show');
    overlay.removeEventListener('click', _handleClose);

    if (_autoCloseTimer) {
      clearTimeout(_autoCloseTimer);
      _autoCloseTimer = null;
    }

    // 执行回调
    if (typeof _onClose === 'function') {
      var cb = _onClose;
      _onClose = null;
      cb();
    }
  }

  return {
    show: show
  };
})();