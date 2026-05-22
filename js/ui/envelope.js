/**
 * 信封与信纸 UI 组件
 * 仿真实信封样式，点击后信封消失、信纸展开
 */
var EnvelopeUI = (function () {
  'use strict';

  /**
   * 渲染信封 + 信纸容器
   * @param {string} letterContent - 信内容（含信头信尾）
   * @returns {string} HTML 字符串
   */
  function render(letterContent) {
    // 解析信内容：第一行是信头，最后一行是信尾，中间是信体
    var lines = letterContent.split('\n');
    var header = lines[0] || '';
    var signature = lines[lines.length - 1] || '';
    // 信体：去掉首尾空行
    var bodyLines = [];
    for (var i = 1; i < lines.length - 1; i++) {
      if (lines[i].trim() !== '') {
        bodyLines.push(lines[i]);
      }
    }

    return ''
      // 信封
      + '<div class="envelope-container" id="envelopeContainer">'
      + '  <div class="envelope" id="envelopeBtn">'
      + '    <div class="envelope-flap"></div>'
      + '    <div class="envelope-stamp">'
      + '      📮'
      + '      <span>POST</span>'
      + '    </div>'
      + '    <div class="envelope-address">'
      + '      <div class="envelope-small">TO · 小时候的我</div>'
      + '      <div class="envelope-large">一封迟到的信</div>'
      + '      <div class="envelope-line"></div>'
      + '    </div>'
      + '  </div>'
      + '</div>'
      // 信纸（初始隐藏）
      + '<div class="letter-container" id="letterContainer">'
      + '  <div class="letter-paper">'
      + '    <div class="letter-title">一封迟到的信</div>'
      + '    <div class="letter-line">'
      +       header + '<br><br>'
      +       bodyLines.join('<br>')
      + '    </div>'
      + '    <div class="letter-signature">' + signature + '</div>'
      + '  </div>'
      + '</div>';
  }

  /**
   * 绑定信封点击事件
   */
  function bindEvents() {
    var envelopeBtn = document.getElementById('envelopeBtn');
    var envelopeContainer = document.getElementById('envelopeContainer');
    var letterContainer = document.getElementById('letterContainer');

    if (!envelopeBtn || !envelopeContainer || !letterContainer) return;

    envelopeBtn.addEventListener('click', function () {
      // 信封折叠消失
      envelopeContainer.style.opacity = '0';
      envelopeContainer.style.transform = 'scale(0.95)';
      envelopeContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      setTimeout(function () {
        envelopeContainer.style.display = 'none';
        // 信纸展开
        letterContainer.classList.add('visible');
      }, 300);
    });
  }

  return {
    render: render,
    bindEvents: bindEvents
  };
})();