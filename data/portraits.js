/**
 * 画像类型定义与匹配条件
 * 按优先级从高到低排列，匹配时取第一个满足条件的画像
 * 纯数据声明，不包含任何逻辑
 */
var PORTRAITS_CONFIG = [
  {
    id: 'passionate_connector',
    name: '热烈的连接者',
    icon: '🔥',
    tagline: '你小时候就像一团火，敢爱敢痛',
    priority: 1,
    /** 匹配条件：所有条件必须同时满足 */
    conditions: {
      temperatureMin: 4,
      attachmentMin: 50,
      resilienceMin: 50
    }
  },
  {
    id: 'warm_guardian',
    name: '温暖的守护者',
    icon: '☀️',
    tagline: '你默默地守护着很多事情',
    priority: 2,
    conditions: {
      temperatureMin: 3,
      attachmentMin: 40,
      resilienceMin: 40
    }
  },
  {
    id: 'gentle_dreamer',
    name: '温柔的梦想家',
    icon: '🌙',
    tagline: '你活在自己的小世界里，那里很安全',
    priority: 3,
    conditions: {
      temperatureMin: 3,
      attachmentMin: 35,
      resilienceMin: 35,
      clarityMax: 50
    }
  },
  {
    id: 'quiet_observer',
    name: '安静的观察者',
    icon: '🌿',
    tagline: '你藏在角落，但从来没有真的离开',
    priority: 4,
    conditions: {
      temperatureMax: 2,
      attachmentMax: 35,
      resilienceMax: 35
    }
  },
  {
    id: 'resilient_survivor',
    name: '坚韧的幸存者',
    icon: '🪨',
    tagline: '你很小的时候就学会了不哭',
    priority: 5,
    conditions: {
      resilienceMin: 50,
      attachmentMax: 35
    }
  },
  {
    id: 'fuzzy_traveler',
    name: '模糊的旅人',
    icon: '🌫️',
    tagline: '记忆像雾，但雾里也有光',
    priority: 99,
    /** 兜底画像，无条件匹配 */
    conditions: {}
  }
];