/**
 * 温度计 UI 组件
 * 5段独立配色，从冷到暖渐变
 * 接收温度档位数据，渲染 DOM
 */
var ThermometerUI = (function () {
  'use strict';

  /**
   * 渲染温度计
   * @param {number} level - 当前温度档位 1-5
   * @returns {string} HTML 字符串
   */
  function render(level) {
    var config = THERMOMETER_CONFIG;
    var data = config.levels[level] || config.levels[config.initialLevel];

    // 构建5段进度条
    var segmentsHTML = '';
    for (var i = 1; i <= 5; i++) {
      var isActive = i <= level;
      var colorClass = isActive ? 'segment-color-' + i : 'segment-inactive';
      segmentsHTML += '<div class="segment ' + colorClass + '"></div>';
    }

    return ''
      + '<div class="temp-container">'
      + '  <div class="temp-icon" id="tempIcon">' + data.icon + '</div>'
      + '  <div class="temp-right">'
      + '    <div class="bar-wrapper">'
      + '      <div class="bar-segments" id="tempSegments">'
      +         segmentsHTML
      + '      </div>'
      + '    </div>'
      + '    <div class="temp-desc-row">'
      + '      <span class="temp-state-name" id="stateName">' + data.name + '</span>'
      + '      <span class="temp-feeling" id="stateFeeling">' + data.feeling + '</span>'
      + '    </div>'
      + '  </div>'
      + '</div>';
  }

  /**
   * 更新温度计 DOM（局部刷新，避免整体重绘）
   * @param {number} level - 新的温度档位
   */
  function update(level) {
    var config = THERMOMETER_CONFIG;
    var data = config.levels[level];
    if (!data) return;

    // 更新图标
    var iconEl = document.getElementById('tempIcon');
    if (iconEl) iconEl.textContent = data.icon;

    // 更新5段进度条颜色
    var segments = document.querySelectorAll('#tempSegments .segment');
    for (var i = 0; i < segments.length; i++) {
      var segLevel = i + 1;
      var seg = segments[i];
      // 清除所有颜色类
      seg.className = 'segment';
      if (segLevel <= level) {
        seg.classList.add('segment-color-' + segLevel);
      } else {
        seg.classList.add('segment-inactive');
      }
    }

    // 更新文字
    var nameEl = document.getElementById('stateName');
    if (nameEl) nameEl.textContent = data.name;

    var feelingEl = document.getElementById('stateFeeling');
    if (feelingEl) feelingEl.textContent = data.feeling;
  }

  return {
    render: render,
    update: update
  };
})();