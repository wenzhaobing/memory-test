/**
 * 里程碑弹窗 UI 组件
 * 在完成第3、6、9个碎片时触发
 * 居中弹窗 + 进度点 + 自动关闭
 */
var MilestoneUI = (function () {
  'use strict';

  /** 自动关闭定时器 */
  var _autoCloseTimer = null;

  /** 关闭回调 */
  var _onClose = null;

  /**
   * 显示里程碑弹窗
   * @param {number} completedCount - 已完成碎片数 (3/6/9)
   * @param {Function} onClose - 关闭后的回调
   */
  function show(completedCount, onClose) {
    var config = MILESTONES_CONFIG;
    var data = config.data[completedCount];
    if (!data) return;

    _onClose = onClose || null;

    // 更新弹窗内容
    var iconEl = document.getElementById('milestoneIcon');
    if (iconEl) iconEl.textContent = data.icon;

    var titleEl = document.getElementById('milestoneTitle');
    if (titleEl) titleEl.textContent = data.title;

    var quoteEl = document.getElementById('milestoneQuote');
    if (quoteEl) quoteEl.textContent = '“' + data.quote + '”';

    // 生成进度点：总数 = 里程碑总数，active 数 = 当前是第几个里程碑
    var progressContainer = document.getElementById('milestoneProgress');
    if (progressContainer) {
      progressContainer.innerHTML = '';
      var totalMilestones = config.triggers.length;
      // 当前里程碑在 triggers 数组中的序号（从1开始）
      var activeIndex = config.triggers.indexOf(completedCount) + 1;
      for (var i = 0; i < totalMilestones; i++) {
        var dot = document.createElement('span');
        dot.className = 'progress-dot';
        if (i < activeIndex) {
          dot.classList.add('active');
        }
        progressContainer.appendChild(dot);
      }
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