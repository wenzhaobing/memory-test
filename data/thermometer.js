/**
 * 温度计配置数据
 * 5档独立配色，从冷到暖渐变
 * 纯数据声明，不包含任何逻辑
 */
var THERMOMETER_CONFIG = {
  levels: {
    1: {
      icon: '❄️',
      name: '冰封',
      color: '#8F9CA8',
      feeling: '你不想说话 · 像被冻住了'
    },
    2: {
      icon: '🌥️',
      name: '微凉',
      color: '#9CB0A0',
      feeling: '心里闷闷的 · 像要下雨还没下'
    },
    3: {
      icon: '🌱',
      name: '常温',
      color: '#E8B06E',
      feeling: '今天还好 · 心里软软的'
    },
    4: {
      icon: '☀️',
      name: '温暖',
      color: '#D48C6B',
      feeling: '心里软软的 · 好像被抱了一下'
    },
    5: {
      icon: '🔥',
      name: '燃烧',
      color: '#C46A4A',
      feeling: '想哭，也想笑 · 被理解了'
    }
  },

  /** 初始档位 */
  initialLevel: 3,

  /** 档位范围 */
  minLevel: 1,
  maxLevel: 5,

  /** 温度档位 → 百分比映射 */
  levelToPercent: {
    1: 20,
    2: 40,
    3: 60,
    4: 80,
    5: 100
  }
};