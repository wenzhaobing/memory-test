/**
 * 应用入口 - 场景路由 + 事件处理 + 游戏流程控制
 * 童年的碎片 · 主控制器
 */
var App = (function () {
  'use strict';

  /** DOM 容器引用 */
  var _containers = {};

  /**
   * 初始化应用
   */
  function init() {
    // 缓存 DOM 容器
    _containers = {
      sceneOnboarding: document.getElementById('sceneOnboarding'),
      sceneGame: document.getElementById('sceneGame'),
      sceneEnding: document.getElementById('sceneEnding'),
      gameContent: document.getElementById('gameContent'),
      endingContent: document.getElementById('endingContent'),
      statusTitle: document.getElementById('statusTitle')
    };

    // 检查存档
    var saveData = Storage.load();
    if (saveData) {
      // 有存档 → 恢复状态
      GameState.restore(saveData);
    }

    // 根据状态渲染对应场景
    var scene = GameState.get('scene');
    _switchScene(scene);

    // 绑定全局事件
    _bindGlobalEvents();

    // 订阅状态变更 → 自动存档
    GameState.subscribe(function () {
      Storage.save();
    });
  }

  /**
   * 场景切换
   * @param {string} scene - 'onboarding' | 'game' | 'ending'
   */
  function _switchScene(scene) {
    // 隐藏所有场景
    var sceneKeys = ['sceneOnboarding', 'sceneGame', 'sceneEnding'];
    for (var i = 0; i < sceneKeys.length; i++) {
      var el = _containers[sceneKeys[i]];
      if (el) {
        el.classList.remove('active', 'scene-transition');
      }
    }

    // 显示目标场景
    var targetMap = {
      onboarding: 'sceneOnboarding',
      game: 'sceneGame',
      ending: 'sceneEnding'
    };

    var targetKey = targetMap[scene];
    var targetEl = _containers[targetKey];
    if (targetEl) {
      targetEl.classList.add('active', 'scene-transition');
    }

    // 更新状态栏标题
    var titleMap = {
      onboarding: '🌾 童年的碎片',
      game: '🌾 拾忆',
      ending: '🌾 画像'
    };
    if (_containers.statusTitle) {
      _containers.statusTitle.textContent = titleMap[scene] || '';
    }

    // 根据场景执行渲染
    if (scene === 'game') {
      _renderGameScene();
    } else if (scene === 'ending') {
      _renderEndingScene();
    }

    // 更新状态
    GameState.update({ scene: scene });
  }

  // ==================== 场景1：引导页 ====================

  /**
   * 绑定全局事件
   */
  function _bindGlobalEvents() {
    // 开始拾忆按钮
    var startBtn = document.getElementById('startBtn');
    if (startBtn) {
      startBtn.addEventListener('click', function () {
        _switchScene('game');
      });
    }

    // 分享画像按钮
    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        alert('📤 分享画像\n\n画像已生成，可保存为图片或分享链接。\n（正式版会调用原生分享面板）');
      });
    }

    // 重拾记忆按钮
    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (confirm('重拾记忆将清空所有进度，重新开始。\n确定要重置吗？')) {
          Storage.clear();
          GameState.reset();
          _switchScene('onboarding');
        }
      });
    }

    // 碎片选项事件委托
    _bindFragmentEvents();
  }

  // ==================== 场景2：碎片拾忆 ====================

  /**
   * 渲染游戏场景
   */
  function _renderGameScene() {
    var state = GameState.getState();
    var currentIndex = state.currentFragment;

    // 边界检查
    if (currentIndex >= FRAGMENTS_DATA.length) {
      _finishGame();
      return;
    }

    var fragment = FRAGMENTS_DATA[currentIndex];
    var total = FRAGMENTS_DATA.length;

    // 渲染温度计 + 碎片卡片
    var html = ''
      + ThermometerUI.render(state.temperature)
      + FragmentUI.render(fragment, currentIndex + 1, total)
      + '<div class="subtle-hint">🌱 你的选择正在悄悄塑造小时候的画像...</div>';

    _containers.gameContent.innerHTML = html;

    // 滚动到顶部
    var scrollEl = document.querySelector('.mock-scroll');
    if (scrollEl) {
      scrollEl.scrollTop = 0;
    }

    // 重新绑定碎片选项事件
    _bindFragmentOptionEvents();
  }

  /**
   * 绑定碎片选项点击事件（事件委托）
   */
  function _bindFragmentEvents() {
    var gameContent = _containers.gameContent;
    if (!gameContent) return;

    gameContent.addEventListener('click', function (e) {
      var btn = e.target.closest('.option-btn');
      if (!btn) return;

      // 防止重复点击
      if (btn.disabled) return;

      _handleOptionClick(btn);
    });
  }

  /**
   * 绑定碎片选项事件（重新渲染后）
   */
  function _bindFragmentOptionEvents() {
    // 事件委托已在 _bindFragmentEvents 中绑定到 gameContent
    // 此处无需额外操作，因为 gameContent 容器未变
  }

  /**
   * 处理选项点击
   */
  function _handleOptionClick(btn) {
    // 读取选项数据
    var fragmentId = parseInt(btn.getAttribute('data-fragment-id'));
    var optionIndex = parseInt(btn.getAttribute('data-option-index'));
    var delta = parseInt(btn.getAttribute('data-delta'));
    var attachmentImpact = btn.getAttribute('data-attachment');
    var resilienceImpact = btn.getAttribute('data-resilience');
    var clarityImpact = btn.getAttribute('data-clarity');
    var feedback = btn.getAttribute('data-feedback');

    // 1. 禁用所有选项 + 高亮选中
    FragmentUI.disableOptions();
    FragmentUI.highlightOption(optionIndex);

    // 2. 更新温度
    GameState.updateTemperature(delta);

    // 3. 更新维度分数
    var attachCfg = DIMENSIONS_CONFIG.attachment.impacts;
    var resilCfg = DIMENSIONS_CONFIG.resilience.impacts;
    var clarityCfg = DIMENSIONS_CONFIG.clarity.impacts;

    GameState.updateScore('attachment', attachCfg[attachmentImpact] || 0);
    GameState.updateScore('resilience', resilCfg[resilienceImpact] || 0);
    GameState.updateScore('clarity', clarityCfg[clarityImpact] || 0);

    // 4. 记录选择
    GameState.recordChoice(fragmentId, optionIndex);

    // 5. 更新温度计 UI
    var newLevel = GameState.get('temperature');
    ThermometerUI.update(newLevel);

    // 6. 显示反馈弹窗
    ToastUI.show(feedback, delta);

    // 7. 获取最新状态
    var state = GameState.getState();
    var completedCount = state.completedFragments.length;

    // 8. 判断里程碑触发
    var isMilestone = MILESTONES_CONFIG.triggers.indexOf(completedCount) > -1;

    // 9. 判断是否完成全部
    var isFinished = completedCount >= FRAGMENTS_DATA.length;

    // 延迟执行下一步（等反馈弹窗显示一段时间）
    var nextDelay = isMilestone ? 800 : 600;

    setTimeout(function () {
      if (isMilestone) {
        // 显示里程碑弹窗
        MilestoneUI.show(completedCount, function () {
          if (isFinished) {
            _finishGame();
          } else {
            _renderGameScene();
          }
        });
      } else if (isFinished) {
        _finishGame();
      } else {
        _renderGameScene();
      }
    }, nextDelay);
  }

  /**
   * 完成全部碎片 → 计算分数 → 匹配画像 → 生成信 → 跳转结局
   */
  function _finishGame() {
    var state = GameState.getState();

    // 计算最终分数
    var scores = Scoring.calcAll(state);

    // 匹配画像
    var portrait = PortraitMatcher.match(scores);

    // 生成信
    var letterContent = LetterGenerator.generate(portrait, scores);

    // 标记完成
    GameState.complete(portrait.id, letterContent);

    // 跳转结局
    _switchScene('ending');
  }

  // ==================== 场景4：结局 ====================

  /**
   * 渲染结局场景
   */
  function _renderEndingScene() {
    var state = GameState.getState();

    // 计算分数
    var scores = Scoring.calcAll(state);

    // 获取画像信息
    var portraitId = state.portraitType;
    var portrait = _findPortraitById(portraitId);

    // 获取信内容
    var letterContent = state.letterContent || '';

    // 渲染
    var html = ''
      + PortraitCardUI.render(portrait, scores)
      + EnvelopeUI.render(letterContent)
      + '<div class="actions">'
      + '  <button class="btn-share" id="shareBtn">📤 分享画像</button>'
      + '  <button class="btn-reset" id="resetBtn">🔄 重拾记忆</button>'
      + '</div>';

    _containers.endingContent.innerHTML = html;

    // 绑定信封事件
    EnvelopeUI.bindEvents();

    // 重新绑定按钮事件
    _rebindEndingButtons();

    // 延迟触发进度条依次填充动画
    setTimeout(function () {
      PortraitCardUI.animateBars();
    }, 400);

    // 触发庆祝粒子效果
    _spawnCelebration();

    // 滚动到顶部
    var scrollEl = document.querySelector('.mock-scroll');
    if (scrollEl) {
      scrollEl.scrollTop = 0;
    }
  }

  /**
   * 根据ID查找画像配置
   */
  function _findPortraitById(id) {
    for (var i = 0; i < PORTRAITS_CONFIG.length; i++) {
      if (PORTRAITS_CONFIG[i].id === id) {
        return {
          id: PORTRAITS_CONFIG[i].id,
          name: PORTRAITS_CONFIG[i].name,
          icon: PORTRAITS_CONFIG[i].icon,
          tagline: PORTRAITS_CONFIG[i].tagline
        };
      }
    }
    // 兜底
    return {
      id: 'fuzzy_traveler',
      name: '模糊的旅人',
      icon: '🌫️',
      tagline: '记忆像雾，但雾里也有光'
    };
  }

  /**
   * 重新绑定结局按钮事件
   */
  function _rebindEndingButtons() {
    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        alert('📤 分享画像\n\n画像已生成，可保存为图片或分享链接。\n（正式版会调用原生分享面板）');
      });
    }

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (confirm('重拾记忆将清空所有进度，重新开始。\n确定要重置吗？')) {
          Storage.clear();
          GameState.reset();
          _switchScene('onboarding');
        }
      });
    }
  }

  /**
   * 庆祝粒子效果
   * 在结局场景生成彩色粒子飘散
   */
  function _spawnCelebration() {
    var phoneApp = document.getElementById('phoneApp');
    if (!phoneApp) return;

    // 移除旧粒子容器
    var oldContainer = phoneApp.querySelector('.celebration-container');
    if (oldContainer) {
      oldContainer.remove();
    }

    // 创建粒子容器
    var container = document.createElement('div');
    container.className = 'celebration-container';

    // 粒子颜色池（暖色调）
    var colors = [
      '#e8b06e', '#d48c6b', '#c46a4a', '#f0cda0',
      '#9cb0a0', '#8f9ca8', '#f5d89a', '#e8c4a0'
    ];

    // 生成 30 个粒子
    for (var i = 0; i < 30; i++) {
      var particle = document.createElement('div');
      particle.className = 'celebration-particle';

      // 随机属性
      var left = Math.random() * 100;
      var delay = Math.random() * 0.8;
      var size = 4 + Math.random() * 8;
      var color = colors[Math.floor(Math.random() * colors.length)];
      var duration = 2 + Math.random() * 2;

      particle.style.cssText = ''
        + 'left: ' + left + '%;'
        + 'bottom: 0;'
        + 'width: ' + size + 'px;'
        + 'height: ' + size + 'px;'
        + 'background: ' + color + ';'
        + 'animation-delay: ' + delay + 's;'
        + 'animation-duration: ' + duration + 's;';

      container.appendChild(particle);
    }

    phoneApp.appendChild(container);

    // 动画结束后清理
    setTimeout(function () {
      if (container.parentNode) {
        container.remove();
      }
    }, 3500);
  }

  // 公开 API
  return {
    init: init
  };
})();

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
  App.init();
});