/**
 * 画像匹配器
 * 根据四维度百分比匹配最合适的画像类型
 * 纯逻辑，不依赖 DOM
 */
var PortraitMatcher = (function () {
  'use strict';

  /**
   * 检查单个画像是否满足所有条件
   * @param {Object} portrait - 画像配置
   * @param {Object} scores - { temperature, attachment, resilience, clarity }
   * @returns {boolean}
   */
  function _checkConditions(portrait, scores) {
    var cond = portrait.conditions;
    if (!cond || Object.keys(cond).length === 0) {
      // 无条件 → 兜底画像，始终匹配
      return true;
    }

    // 检查温度下限
    if (cond.temperatureMin !== undefined && scores.temperature < cond.temperatureMin) {
      return false;
    }
    // 检查温度上限
    if (cond.temperatureMax !== undefined && scores.temperature > cond.temperatureMax) {
      return false;
    }
    // 检查依恋下限
    if (cond.attachmentMin !== undefined && scores.attachment < cond.attachmentMin) {
      return false;
    }
    // 检查依恋上限
    if (cond.attachmentMax !== undefined && scores.attachment > cond.attachmentMax) {
      return false;
    }
    // 检查韧性下限
    if (cond.resilienceMin !== undefined && scores.resilience < cond.resilienceMin) {
      return false;
    }
    // 检查韧性上限
    if (cond.resilienceMax !== undefined && scores.resilience > cond.resilienceMax) {
      return false;
    }
    // 检查清晰度下限
    if (cond.clarityMin !== undefined && scores.clarity < cond.clarityMin) {
      return false;
    }
    // 检查清晰度上限
    if (cond.clarityMax !== undefined && scores.clarity > cond.clarityMax) {
      return false;
    }

    return true;
  }

  /**
   * 匹配画像类型
   * @param {Object} scores - { temperature, attachment, resilience, clarity }
   * @returns {Object} 匹配到的画像配置 { id, name, icon, tagline }
   */
  function match(scores) {
    // 按优先级排序（升序）
    var sorted = PORTRAITS_CONFIG.slice().sort(function (a, b) {
      return a.priority - b.priority;
    });

    // 找到第一个满足条件的画像
    for (var i = 0; i < sorted.length; i++) {
      if (_checkConditions(sorted[i], scores)) {
        return {
          id: sorted[i].id,
          name: sorted[i].name,
          icon: sorted[i].icon,
          tagline: sorted[i].tagline
        };
      }
    }

    // 兜底：返回最后一个画像
    var fallback = sorted[sorted.length - 1];
    return {
      id: fallback.id,
      name: fallback.name,
      icon: fallback.icon,
      tagline: fallback.tagline
    };
  }

  return {
    match: match
  };
})();