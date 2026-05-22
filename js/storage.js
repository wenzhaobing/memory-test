/**
 * localStorage 持久化模块
 * 负责游戏进度的保存、加载、清空
 */
var Storage = (function () {
  'use strict';

  /** 存储键名 */
  var STORAGE_KEY = 'childhood_fragments_save';

  /** 当前存档版本 */
  var SAVE_VERSION = 1;

  /**
   * 保存当前游戏状态到 localStorage
   */
  function save() {
    var state = GameState.getState();
    var saveData = {
      version: SAVE_VERSION,
      temperature: state.temperature,
      scores: state.scores,
      currentFragment: state.currentFragment,
      completedFragments: state.completedFragments,
      isCompleted: state.isCompleted,
      portraitType: state.portraitType,
      letterContent: state.letterContent,
      updatedAt: Utils.now()
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    } catch (e) {
      console.error('[Storage] 保存失败:', e);
    }
  }

  /**
   * 从 localStorage 加载存档
   * @returns {Object|null} 存档数据或 null
   */
  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;

      var data = JSON.parse(raw);

      // 版本校验
      if (!data.version || data.version !== SAVE_VERSION) {
        console.warn('[Storage] 存档版本不匹配，将使用新版本');
        return null;
      }

      return data;
    } catch (e) {
      console.error('[Storage] 加载失败:', e);
      return null;
    }
  }

  /**
   * 清空存档
   */
  function clear() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('[Storage] 清空失败:', e);
    }
  }

  /**
   * 检查是否有存档
   * @returns {boolean}
   */
  function hasSave() {
    return !!localStorage.getItem(STORAGE_KEY);
  }

  return {
    save: save,
    load: load,
    clear: clear,
    hasSave: hasSave
  };
})();