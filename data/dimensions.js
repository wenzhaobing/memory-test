/**
 * 四维度定义与计分参数配置
 * 纯数据声明，不包含任何逻辑
 */
var DIMENSIONS_CONFIG = {
  /** 维度列表 */
  list: [
    {
      id: 'temperature',
      icon: '🌡️',
      name: '温度',
      description: '情绪的冷暖',
      fillClass: 'fill-temp'
    },
    {
      id: 'attachment',
      icon: '🤝',
      name: '依恋',
      description: '与他人的情感连接',
      fillClass: 'fill-attach'
    },
    {
      id: 'resilience',
      icon: '🌱',
      name: '韧性',
      description: '自我恢复能力',
      fillClass: 'fill-resilience'
    },
    {
      id: 'clarity',
      icon: '🌫️',
      name: '清晰度',
      description: '记忆的清晰程度',
      fillClass: 'fill-clarity'
    }
  ],

  /** 依恋维度计分参数 */
  attachment: {
    /** 选项影响权重 */
    impacts: {
      intimate: 1,    // 亲密
      secure: 0.5,    // 安全
      anxious: -0.5,  // 焦虑
      avoidant: -1    // 疏离
    },
    /** 百分比转换公式: clamp((rawScore + offset) × multiplier + base, 0, 100) */
    offset: 4,
    multiplier: 3.5,
    base: 25
  },

  /** 韧性维度计分参数 */
  resilience: {
    impacts: {
      strong: 1,      // 有力量
      tough: 0.5,     // 坚强
      fragile: -0.5   // 脆弱
    },
    offset: 5,
    multiplier: 3.5,
    base: 20
  },

  /** 清晰度维度计分参数 */
  clarity: {
    impacts: {
      remember: 1,       // 我记得
      vaguely: 0.5,      // 模糊记得
      notRemember: 0     // 不记得
    },
    multiplier: 4.5,
    base: 10
  }
};