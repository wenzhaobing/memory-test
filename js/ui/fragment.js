/**
 * 碎片卡片 UI 组件
 * 渲染单个记忆碎片：标题、描述、选项按钮
 */
var FragmentUI = (function () {
  'use strict';

  /**
   * 渲染碎片卡片
   * @param {Object} fragment - 碎片数据
   * @param {number} index - 当前碎片序号 (1-based)
   * @param {number} total - 总碎片数
   * @returns {string} HTML 字符串
   */
  function render(fragment, index, total) {
    // 构建选项按钮
    var optionsHTML = '';
    for (var i = 0; i < fragment.options.length; i++) {
      var opt = fragment.options[i];
      optionsHTML += ''
        + '<button class="option-btn"'
        + '  data-fragment-id="' + fragment.id + '"'
        + '  data-option-index="' + i + '"'
        + '  data-delta="' + opt.temperatureDelta + '"'
        + '  data-attachment="' + opt.attachmentImpact + '"'
        + '  data-resilience="' + opt.resilienceImpact + '"'
        + '  data-clarity="' + opt.clarityImpact + '"'
        + '  data-feedback="' + _escapeAttr(opt.feedback) + '">'
        + '  ✧ ' + _escapeHTML(opt.text)
        + '</button>';
    }

    return ''
      + '<div class="fragment-card" id="fragmentCard">'
      + '  <div class="letter-header">'
      + '    <div class="fragment-title">'
      + '      <span>' + fragment.icon + '</span> ' + _escapeHTML(fragment.title)
      + '    </div>'
      + '  </div>'
      + '  <div class="letter-body">'
      + '    <div class="fragment-content">' + _formatDescription(fragment.description) + '</div>'
      + '    <div class="options-area" id="optionsArea">'
      +       optionsHTML
      + '    </div>'
      + '  </div>'
      + '</div>'
      + '<div class="fragment-progress">'
      + '  <span class="progress-text">第 ' + index + ' / ' + total + ' 片</span>'
      + '</div>';
  }

  /**
   * 禁用所有选项按钮（选择后防止重复点击）
   */
  function disableOptions() {
    var buttons = document.querySelectorAll('#optionsArea .option-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      buttons[i].classList.add('option-disabled');
    }
  }

  /**
   * 高亮选中的选项
   * @param {number} optionIndex - 选中的选项索引
   */
  function highlightOption(optionIndex) {
    var buttons = document.querySelectorAll('#optionsArea .option-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (i === optionIndex) {
        buttons[i].classList.add('option-selected');
      } else {
        buttons[i].classList.add('option-dimmed');
      }
    }
  }

  /**
   * 格式化描述文字（换行转 <br>）
   */
  function _formatDescription(text) {
    return text.replace(/\n/g, '<br>');
  }

  /**
   * HTML 转义
   */
  function _escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /**
   * 属性值转义
   */
  function _escapeAttr(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  return {
    render: render,
    disableOptions: disableOptions,
    highlightOption: highlightOption
  };
})();