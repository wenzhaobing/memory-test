/**
 * 画像卡片 UI 组件
 * 渲染结局画像：图标、名称、标签、四维度进度条
 */
var PortraitCardUI = (function () {
  "use strict";

  /**
   * 渲染画像卡片
   * @param {Object} portrait - 画像信息 { id, name, icon, tagline }
   * @param {Object} scores - { temperature, attachment, resilience, clarity }
   * @returns {string} HTML 字符串
   */
  function render(portrait, scores) {
    var dimensions = DIMENSIONS_CONFIG.list;

    // 构建维度行（横向排列：icon + label + bar + 百分比）
    var dimsHTML = "";
    for (var i = 0; i < dimensions.length; i++) {
      var dim = dimensions[i];
      var value = scores[dim.id] || 0;
      dimsHTML +=
        "" +
        '<div class="dimension-row">' +
        '  <span class="dimension-icon">' +
        dim.icon +
        "</span>" +
        '  <span class="dimension-label">' +
        dim.name +
        "</span>" +
        '  <div class="dimension-bar">' +
        '    <div class="dimension-fill dimension-fill-' +
        (i + 1) +
        '" style="width: ' +
        value +
        '%"></div>' +
        "  </div>" +
        '  <span class="dimension-value">' +
        value +
        "%</span>" +
        "</div>";
    }

    return (
      "" +
      '<div class="portrait-card">' +
      '  <div class="portrait-header">' +
      '    <div class="portrait-icon">' +
      portrait.icon +
      "</div>" +
      '    <div class="portrait-name">' +
      portrait.name +
      "</div>" +
      '    <div class="portrait-tagline">"' +
      portrait.tagline +
      '"</div>' +
      "  </div>" +
      '  <div class="dimensions-section">' +
      dimsHTML +
      "  </div>" +
      "</div>"
    );
  }

  /**
   * 依次填充维度进度条动画
   * 每个进度条延迟 200ms 依次展开
   */
  function animateBars() {
    var bars = document.querySelectorAll(".dimension-fill");
    if (!bars.length) return;

    for (var i = 0; i < bars.length; i++) {
      (function (bar, index) {
        setTimeout(function () {
          bar.classList.add("animate-in");
        }, index * 200);
      })(bars[i], i);
    }
  }

  return {
    render: render,
    animateBars: animateBars,
  };
})();
