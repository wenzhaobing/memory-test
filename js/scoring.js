/**
 * 四维度计分引擎
 * 将原始分数转换为 0-100% 的百分比
 * 纯逻辑，不依赖 DOM
 */
var Scoring = (function () {
  'use strict';

  /**
   * 计算温度百分比
   * @param {number} level - 温度档位 1-5
   * @returns {number} 百分比 0-100
   */
  function calcTemperature(level) {
    return THERMOMETER_CONFIG.levelToPercent[level] || 60;
  }

  /**
   * 计算依恋百分比
   * @param {number} rawScore - 原始分数
   * @returns {number} 百分比 0-100
   */
  function calcAttachment(rawScore) {
    var cfg = DIMENSIONS_CONFIG.attachment;
    var percent = (rawScore + cfg.offset) * cfg.multiplier + cfg.base;
    return Utils.clamp(Math.round(percent), 0, 100);
  }

  /**
   * 计算韧性百分比
   * @param {number} rawScore - 原始分数
   * @returns {number} 百分比 0-100
   */
  function calcResilience(rawScore) {
    var cfg = DIMENSIONS_CONFIG.resilience;
    var percent = (rawScore + cfg.offset) * cfg.multiplier + cfg.base;
    return Utils.clamp(Math.round(percent), 0, 100);
  }

  /**
   * 计算清晰度百分比
   * @param {number} rawScore - 原始分数
   * @returns {number} 百分比 0-100
   */
  function calcClarity(rawScore) {
    var cfg = DIMENSIONS_CONFIG.clarity;
    var percent = rawScore * cfg.multiplier + cfg.base;
    return Utils.clamp(Math.round(percent), 0, 100);
  }

  /**
   * 计算全部四个维度的最终百分比
   * @param {Object} state - 游戏状态
   * @returns {Object} { temperature, attachment, resilience, clarity }
   */
  function calcAll(state) {
    return {
      temperature: calcTemperature(state.temperature),
      attachment: calcAttachment(state.scores.attachment),
      resilience: calcResilience(state.scores.resilience),
      clarity: calcClarity(state.scores.clarity)
    };
  }

  return {
    calcTemperature: calcTemperature,
    calcAttachment: calcAttachment,
    calcResilience: calcResilience,
    calcClarity: calcClarity,
    calcAll: calcAll
  };
})();