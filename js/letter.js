/**
 * 信内容生成器
 * 根据画像类型和依恋/韧性倾向自动生成信内容
 * 纯逻辑，不依赖 DOM
 */
var LetterGenerator = (function () {
  'use strict';

  /**
   * 判断依恋倾向
   * @param {number} attachmentScore - 依恋百分比
   * @returns {string} 'intimate' | 'secure'
   */
  function _getAttachmentTendency(attachmentScore) {
    return attachmentScore >= 50 ? 'intimate' : 'secure';
  }

  /**
   * 生成完整信内容
   * @param {Object} portrait - 画像信息 { id, name, icon, tagline }
   * @param {Object} scores - { temperature, attachment, resilience, clarity }
   * @returns {string} 完整信内容（含信头信尾）
   */
  function generate(portrait, scores) {
    var header = LETTERS_CONFIG.header;
    var signature = LETTERS_CONFIG.signature;

    // 获取对应画像类型的模板
    var templateGroup = LETTERS_CONFIG.templates[portrait.id];

    var bodyLines;
    if (templateGroup) {
      // 根据依恋倾向选择模板变体
      var tendency = _getAttachmentTendency(scores.attachment);
      var variant = templateGroup[tendency] || templateGroup.intimate || templateGroup.secure;
      bodyLines = variant;
    } else {
      // 兜底模板
      bodyLines = LETTERS_CONFIG.default.body;
    }

    // 拼接完整信内容
    var parts = [header, ''];
    for (var i = 0; i < bodyLines.length; i++) {
      parts.push(bodyLines[i]);
    }
    parts.push('');
    parts.push(signature);

    return parts.join('\n');
  }

  return {
    generate: generate
  };
})();