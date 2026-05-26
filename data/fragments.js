/**
 * 20个记忆碎片数据配置
 * 每个碎片包含：标题、图标、描述、2-3个选项
 * 每个选项包含：文本、温度delta、依恋/韧性/清晰度影响、反馈文案
 * 纯数据声明，不包含任何逻辑
 */
var FRAGMENTS_DATA = [
  {
    id: 1,
    icon: '🫂',
    title: '举高高',
    description: '有人的手伸到你的腋下。\n你突然变高了。\n风从耳边吹过去。\n你笑了一下，也可能没有。',
    options: [
      {
        text: '我记得那种飞起来的感觉',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '你后来很少飞起来了，但那种感觉还在骨头里。'
      },
      {
        text: '不太记得了，但应该不害怕',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '不害怕本身，就已经很好了。'
      },
      {
        text: '我好像一直不太喜欢被举起来',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '不喜欢也可以。你的感受是对的。'
      }
    ]
  },
  {
    id: 2,
    icon: '✂️',
    title: '剪指甲',
    description: '有人捏着你的手指。\n剪刀咔嚓咔嚓。\n你不敢动。\n怕剪到肉。',
    options: [
      {
        text: '我记得那种紧张，但从来没剪到过',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '那种紧张是信任的前奏。'
      },
      {
        text: '不记得了，但现在自己剪也会小心',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '有些习惯，是从小就长在手上的。'
      },
      {
        text: '我记得被剪到过一次，之后都很害怕',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '一次疼，可以记很久。'
      }
    ]
  },
  {
    id: 3,
    icon: '🚶',
    title: '第一步',
    description: '你站着。\n对面有人蹲着，张开手。\n你犹豫了一下。\n然后迈出去了。',
    options: [
      {
        text: '我记得摔倒过，但也记得被接住',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '摔倒和被接住，你记住了被接住。这很难得。'
      },
      {
        text: '不记得了，但听说我很早就敢走了',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '听说也没关系。你确实走过来了。'
      },
      {
        text: '我只记得摔倒了，没人马上来',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '摔倒了没人来，那种感觉是真的。但现在你站起来了。'
      }
    ]
  },
  {
    id: 4,
    icon: '💊',
    title: '苦的东西',
    description: '有人把一勺东西送到你嘴边。\n很苦。\n你不想张嘴。\n他们说"吃了就好了"。',
    options: [
      {
        text: '我记得那种苦，也记得吃完有糖',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '苦是真的，糖也是真的。你记得糖。'
      },
      {
        text: '不记得了，可能没那么苦',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '不记得，也许就是没那么苦。'
      },
      {
        text: '我只记得被硬灌过',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '被强迫的感觉，比苦更难以下咽。'
      }
    ]
  },
  {
    id: 5,
    icon: '🫧',
    title: '泡泡',
    description: '有人拿着一个圈。\n你吹了一口气。\n好多彩色的泡泡飞起来。\n你追着它们跑。',
    options: [
      {
        text: '我记得那种开心，追到泡泡就破了',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '追泡泡的心情，就是快乐本身。'
      },
      {
        text: '不太记得了，但应该玩过',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '玩过就是拥有过。'
      },
      {
        text: '没有印象',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '没有印象也没关系。童年还有很多别的。'
      }
    ]
  },
  {
    id: 6,
    icon: '🏫',
    title: '被留下',
    description: '有人把你交到另一个人手里。\n你回头看。\n那个人在门口站了一下，然后走了。\n门关上了。',
    options: [
      {
        text: '我记得那种被丢下的感觉',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '被丢下的感觉，能记一辈子。'
      },
      {
        text: '不记得了，应该没有哭太久',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '没有哭太久，也是一种坚强。'
      },
      {
        text: '我记得后来有小朋友跟我玩',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '你记住了后来的温暖，不是最初的害怕。'
      }
    ]
  },
  {
    id: 7,
    icon: '🛌',
    title: '盖被子',
    description: '快睡着的时候。\n有人轻轻拉了一下被子，塞到你下巴底下。\n你没有睁眼。\n但你知道了。',
    options: [
      {
        text: '我记得那种被照顾的感觉',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '被照顾的感觉，是身体记得的温暖。'
      },
      {
        text: '不太记得了，但我知道有人这样做',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '知道就够了。那种安心还在。'
      },
      {
        text: '没有印象',
        temperatureDelta: 0,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '没有印象也没关系。你自己也会照顾好自己了。'
      }
    ]
  },
  {
    id: 8,
    icon: '💦',
    title: '踩水',
    description: '下雨了。\n地上有水坑。\n你踩了一下。\n水溅起来。\n你又踩了一下。',
    options: [
      {
        text: '我记得被说了，但还是觉得好玩',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '被说了还是要踩，那种快乐是真的。'
      },
      {
        text: '不太记得了，但应该会挨骂',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '挨骂也是童年的一部分。'
      },
      {
        text: '我不喜欢鞋子湿的感觉',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '不喜欢就是不喜欢。你的感觉是对的。'
      }
    ]
  },
  {
    id: 9,
    icon: '📖',
    title: '讲故事的人',
    description: '有人翻书的声音。\n声音轻轻的。\n你其实没在听故事，你在听那个声音。',
    options: [
      {
        text: '我记得那个声音，很安心',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '那个声音，比故事更让人安心。'
      },
      {
        text: '不记得具体是谁了，但那种感觉还在',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '感觉比记忆更持久。'
      },
      {
        text: '好像没有人为我讲过故事',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '没关系。你现在可以给自己讲故事。'
      }
    ]
  },
  {
    id: 10,
    icon: '💥',
    title: '摔了',
    description: '你跑了一下。\n然后膝盖着地。\n疼来得慢一点。\n你先看到血，然后才哭。',
    options: [
      {
        text: '我记得被抱起来擦药',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '疼是真的，但被抱起来也是真的。'
      },
      {
        text: '不太记得了，但膝盖上好像有疤',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '疤还在，但已经不疼了。'
      },
      {
        text: '我记得没人马上来',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '没人来的时候，你学会了等。'
      }
    ]
  },
  {
    id: 11,
    icon: '🏖️',
    title: '沙子',
    description: '你蹲在那里。\n手伸进沙子里。\n湿的，凉的。\n你挖了一个洞，又填上。',
    options: [
      {
        text: '我记得那种可以玩一下午的感觉',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '一个下午，就是童年的全部。'
      },
      {
        text: '不记得了，但我现在还是喜欢摸沙子',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '有些喜欢，是身体记得的。'
      },
      {
        text: '我不喜欢沙子弄到手上的感觉',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '不喜欢就是不喜欢。'
      }
    ]
  },
  {
    id: 12,
    icon: '🦷',
    title: '掉了',
    description: '它在晃。\n你一直用舌头去顶。\n有一天，它掉了。\n有一点血。',
    options: [
      {
        text: '我记得被塞到枕头底下，说会有牙仙子',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '牙仙子是假的，但期待是真的。'
      },
      {
        text: '不太记得了，但好像扔到屋顶上',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '不管扔到哪里，都是长大的一步。'
      },
      {
        text: '我记得很害怕，以为不会长出来了',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '害怕的时候，你不知道身体会自己好。'
      }
    ]
  },
  {
    id: 13,
    icon: '⏰',
    title: '她还没回来',
    description: '天快黑了。\n门还没开。\n你坐在门口的小板凳上。\n玩具在旁边，没有玩。',
    options: [
      {
        text: '我记得那种等待的漫长',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '等待的时候，时间过得很慢。'
      },
      {
        text: '不太记得了，应该很快就回来了',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '很快回来，是世界上最安心的话。'
      },
      {
        text: '我记得门开的时候很开心',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '门开的那一刻，所有的等待都值得了。'
      }
    ]
  },
  {
    id: 14,
    icon: '🪷',
    title: '荡秋千',
    description: '你坐在上面。\n有人在后面推你。\n你变高了，又变低了。\n风很大。',
    options: [
      {
        text: '我记得那种飞起来的感觉',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '飞起来的感觉，是自由最早的样子。'
      },
      {
        text: '不太记得了，但我喜欢荡秋千',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '喜欢就是最好的记忆。'
      },
      {
        text: '我记得被推太高，吓哭了',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '太高了会害怕。但你后来知道，可以让人推低一点。'
      }
    ]
  },
  {
    id: 15,
    icon: '🤒',
    title: '凉凉的手',
    description: '你很烫。\n有人把手放在你额头上。\n凉凉的。\n你往那只手的方向缩了缩。',
    options: [
      {
        text: '我记得那种被照顾的安心',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '生病的时候，有人照顾就是最好的药。'
      },
      {
        text: '不太记得了，但生病的时候应该有人在',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '有人在，就够了。'
      },
      {
        text: '我记得生病的时候是自己躺着',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '自己躺着的时候，你学会了照顾自己。'
      }
    ]
  },
  {
    id: 16,
    icon: '🌟',
    title: '你真棒',
    description: '你做了什么。\n有人笑着说"你真棒"。\n你不太懂哪里棒。\n但你知道，这是好的。',
    options: [
      {
        text: '我记得那种开心，还想再做一次',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '被夸奖的开心，是童年最好的礼物。'
      },
      {
        text: '不太记得了，但应该经常被夸',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '经常被夸，也是一种幸运。'
      },
      {
        text: '我不太记得被表扬过',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '没有被表扬过也没关系。现在的你可以表扬自己。'
      }
    ]
  },
  {
    id: 17,
    icon: '🛁',
    title: '洗澡水',
    description: '水从头上浇下来。\n你闭着眼睛。\n有人一直在说"不烫不烫"。\n你觉得好像还是有点烫。',
    options: [
      {
        text: '我记得那种被按着洗头的感觉',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '被按着洗头的感觉，确实不太好受。'
      },
      {
        text: '不太记得了，但应该很快就好了',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '很快就好了，也是童年的一种常态。'
      },
      {
        text: '我记得洗完被裹进浴巾里，很暖',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '洗完澡被裹起来的那一瞬间，是世界上最暖的事。'
      }
    ]
  },
  {
    id: 18,
    icon: '💆‍♀️',
    title: '摸头发',
    description: '你伸手去摸那个人的头发。\n她没动。\n你摸了一下，又摸了一下。\n她轻轻嗯了一声。',
    options: [
      {
        text: '我记得那种亲近的触感',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '亲近的触感，是语言之外的爱。'
      },
      {
        text: '不太记得了，但应该有过',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '应该有过，就够了。'
      },
      {
        text: '没有印象',
        temperatureDelta: 0,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '没有印象也没关系。'
      }
    ]
  },
  {
    id: 19,
    icon: '🥄',
    title: '再吃一口',
    description: '勺子伸过来。\n你扭头。\n再伸过来。\n你再扭头。\n后来你张嘴了。',
    options: [
      {
        text: '我记得被追着喂了很久',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '被追着喂的感觉，像一场拉锯战。'
      },
      {
        text: '不太记得了，但应该很平常',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '平常的事，就是童年最真实的样子。'
      },
      {
        text: '我记得她笑了，我也笑了',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '你记住了笑。这是最好的选择。'
      }
    ]
  },
  {
    id: 20,
    icon: '🤗',
    title: '抱紧一点',
    description: '有人抱你。\n不是平时那种。\n比平时紧一点。\n久一点。\n你后来才知道，那是告别。',
    options: [
      {
        text: '我记得那个拥抱，不知道为什么记住了',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '那个拥抱，可能比你以为的重要得多。'
      },
      {
        text: '不太记得了，但我知道有人很爱我',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '知道被爱，比记得细节更重要。'
      },
      {
        text: '没有印象，可能是太小了',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '太小了没关系。爱不会因为你不记得而消失。'
      }
    ]
  }
];