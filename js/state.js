/**
 * 游戏状态管理器
 * 单一状态树 + 订阅通知模式
 * 所有状态变更必须通过此模块的 setter 方法
 */
var GameState = (function () {
  'use strict';

  /** 订阅者列表 */
  var _listeners = [];

  /** 内部状态 */
  var _state = {
    /** 当前场景: 'onboarding' | 'game' | 'ending' */
    scene: 'onboarding',

    /** 温度档位 1-5 */
    temperature: THERMOMETER_CONFIG.initialLevel,

    /** 维度原始分数 */
    scores: {
      attachment: 0,
      resilience: 0,
      clarity: 0
    },

    /** 当前碎片索引 (0-based) */
    currentFragment: 0,

    /** 已完成碎片的选择记录 */
    completedFragments: [],

    /** 是否已完成全部碎片 */
    isCompleted: false,

    /** 画像类型（完成后填充） */
    portraitType: null,

    /** 信内容（完成后填充） */
    letterContent: null
  };

  /**
   * 获取当前状态（只读副本）
   * @returns {Object}
   */
  function getState() {
    return JSON.parse(JSON.stringify(_state));
  }

  /**
   * 获取单个状态字段
   * @param {string} key
   * @returns {*}
   */
  function get(key) {
    return _state[key];
  }

  /**
   * 更新状态（合并更新）
   * @param {Object} partial - 要更新的字段
   */
  function update(partial) {
    var changed = false;
    for (var key in partial) {
      if (partial.hasOwnProperty(key) && _state[key] !== partial[key]) {
        _state[key] = partial[key];
        changed = true;
      }
    }
    if (changed) {
      _notify();
    }
  }

  /**
   * 更新温度档位
   * @param {number} delta - 变化量 (+1 / 0 / -1)
   */
  function updateTemperature(delta) {
    var newLevel = _state.temperature + delta;
    newLevel = Utils.clamp(
      newLevel,
      THERMOMETER_CONFIG.minLevel,
      THERMOMETER_CONFIG.maxLevel
    );
    if (newLevel !== _state.temperature) {
      _state.temperature = newLevel;
      _notify();
    }
  }

  /**
   * 更新维度分数
   * @param {string} dimension - 维度名称
   * @param {number} delta - 变化量
   */
  function updateScore(dimension, delta) {
    if (_state.scores.hasOwnProperty(dimension)) {
      _state.scores[dimension] += delta;
      _notify();
    }
  }

  /**
   * 记录碎片选择
   * @param {number} fragmentId - 碎片ID
   * @param {number} optionIndex - 选项索引
   */
  function recordChoice(fragmentId, optionIndex) {
    _state.completedFragments.push({
      fragmentId: fragmentId,
      optionIndex: optionIndex
    });
    _state.currentFragment = _state.completedFragments.length;
    _notify();
  }

  /**
   * 标记游戏完成
   * @param {string} portraitType - 画像类型ID
   * @param {string} letterContent - 信内容
   */
  function complete(portraitType, letterContent) {
    _state.isCompleted = true;
    _state.portraitType = portraitType;
    _state.letterContent = letterContent;
    _notify();
  }

  /**
   * 重置所有状态
   */
  function reset() {
    _state.scene = 'onboarding';
    _state.temperature = THERMOMETER_CONFIG.initialLevel;
    _state.scores = { attachment: 0, resilience: 0, clarity: 0 };
    _state.currentFragment = 0;
    _state.completedFragments = [];
    _state.isCompleted = false;
    _state.portraitType = null;
    _state.letterContent = null;
    _notify();
  }

  /**
   * 从存档恢复状态
   * @param {Object} saveData - 存档数据
   */
  function restore(saveData) {
    if (!saveData) return;
    _state.temperature = saveData.temperature || THERMOMETER_CONFIG.initialLevel;
    _state.scores = saveData.scores || { attachment: 0, resilience: 0, clarity: 0 };
    _state.currentFragment = saveData.currentFragment || 0;
    _state.completedFragments = saveData.completedFragments || [];
    _state.isCompleted = saveData.isCompleted || false;
    _state.portraitType = saveData.portraitType || null;
    _state.letterContent = saveData.letterContent || null;

    // 根据存档状态决定当前场景
    if (_state.isCompleted) {
      _state.scene = 'ending';
    } else if (_state.completedFragments.length > 0) {
      _state.scene = 'game';
    } else {
      _state.scene = 'onboarding';
    }
    _notify();
  }

  /**
   * 订阅状态变更
   * @param {Function} callback
   * @returns {Function} 取消订阅函数
   */
  function subscribe(callback) {
    _listeners.push(callback);
    return function () {
      var idx = _listeners.indexOf(callback);
      if (idx > -1) {
        _listeners.splice(idx, 1);
      }
    };
  }

  /** 通知所有订阅者 */
  function _notify() {
    var stateCopy = getState();
    for (var i = 0; i < _listeners.length; i++) {
      try {
        _listeners[i](stateCopy);
      } catch (e) {
        console.error('[GameState] 订阅回调执行异常:', e);
      }
    }
  }

  // 公开 API
  return {
    getState: getState,
    get: get,
    update: update,
    updateTemperature: updateTemperature,
    updateScore: updateScore,
    recordChoice: recordChoice,
    complete: complete,
    reset: reset,
    restore: restore,
    subscribe: subscribe
  };
})();