/**
 * 10个记忆碎片数据配置
 * 每个碎片包含：标题、图标、描述、2-3个选项
 * 每个选项包含：文本、温度delta、依恋/韧性/清晰度影响、反馈文案
 * 纯数据声明，不包含任何逻辑
 */
var FRAGMENTS_DATA = [
  {
    id: 1,
    icon: '📜',
    title: '外婆的手',
    description: '外婆的手很粗。\n指节大大的。\n她牵我的时候，会轻轻捏一下。\n没有原因。\n就是捏着。',
    options: [
      {
        text: '我记得那种触感',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '长大了以后，再也没有人那样捏我的手。'
      },
      {
        text: '不记得了，但觉得安心',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '有些事，身体比大脑记得更清楚。'
      },
      {
        text: '我只记得她的手很冷',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '可能不是手冷。是我后来编出来的。'
      }
    ]
  },
  {
    id: 2,
    icon: '🍂',
    title: '妈妈出门',
    description: '她穿外套。\n拿包。\n钥匙响。\n我开始哭。\n她说"一下下就回来"。',
    options: [
      {
        text: '我记得那种害怕',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '那扇门关上的声音，很久以后还会梦到。'
      },
      {
        text: '我不怕，但不想她走',
        temperatureDelta: 0,
        attachmentImpact: 'intimate',
        resilienceImpact: 'tough',
        clarityImpact: 'remember',
        feedback: '不是害怕。就是不想一个人。'
      },
      {
        text: '没有印象',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'strong',
        clarityImpact: 'notRemember',
        feedback: '可能是很小很小的事，早就不记得了。'
      }
    ]
  },
  {
    id: 3,
    icon: '👣',
    title: '第一次走路',
    description: '有人说我摔了很多次。\n有人说我一下子就站起来了。\n我不知道谁说的是真的。\n但我知道，我走过来了。',
    options: [
      {
        text: '我觉得自己很勇敢',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'strong',
        clarityImpact: 'vaguely',
        feedback: '那么小的时候，就已经在往前走了。'
      },
      {
        text: '摔倒了应该很疼吧',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'vaguely',
        feedback: '疼是真的。但站起来也是真的。'
      },
      {
        text: '不记得了',
        temperatureDelta: 0,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '有些事不需要记得，身体会替你走。'
      }
    ]
  },
  {
    id: 4,
    icon: '🏔️',
    title: '爸爸的肩膀',
    description: '他把我举起来。\n很高。\n我能看到平时看不到的东西。\n他的肩膀很硬。\n但我坐在上面很稳。',
    options: [
      {
        text: '我记得那种安全感',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '被举起来的时候，世界都变小了。'
      },
      {
        text: '好像有过，但不确定',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '不确定也没关系。那种感觉是真的。'
      },
      {
        text: '我没有这样的记忆',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'fragile',
        clarityImpact: 'notRemember',
        feedback: '不是每个人都有。但你有别的。'
      }
    ]
  },
  {
    id: 5,
    icon: '☀️',
    title: '午后的阳光',
    description: '阳光从窗户照进来。\n地板上有一块亮亮的。\n我坐在那块光里面。\n很暖。\n不想动。',
    options: [
      {
        text: '我记得那种暖洋洋的感觉',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '那种暖，不是太阳给的。是自己心里本来就有的。'
      },
      {
        text: '好像有过这样的下午',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '有些下午，会一直留在身体里。'
      },
      {
        text: '我不记得晒太阳',
        temperatureDelta: 0,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '没关系。太阳一直都在。'
      }
    ]
  },
  {
    id: 6,
    icon: '👤',
    title: '陌生的脸',
    description: '有人凑得很近。\n我不认识他。\n他笑，但我没有笑。\n我往后退了一点。\n他没有发现。',
    options: [
      {
        text: '我记得那种不舒服',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '小孩子也有边界。只是大人不知道。'
      },
      {
        text: '好像有过，但我不确定是谁',
        temperatureDelta: 0,
        attachmentImpact: 'anxious',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '不确定是谁，但那种感觉是真的。'
      },
      {
        text: '我不怕陌生人',
        temperatureDelta: 1,
        attachmentImpact: 'secure',
        resilienceImpact: 'strong',
        clarityImpact: 'notRemember',
        feedback: '你可能天生就比别的小孩大胆一点。'
      }
    ]
  },
  {
    id: 7,
    icon: '🛁',
    title: '洗澡',
    description: '水很热。\n有人在帮我洗。\n泡沫很多。\n我抓了一把。\n它们在我手里消失了。',
    options: [
      {
        text: '我记得那种好玩的感觉',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '泡沫消失了，但快乐没有。'
      },
      {
        text: '好像记得，又好像不记得',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '水和泡沫，都是会流走的东西。但温暖不会。'
      },
      {
        text: '我不喜欢洗澡',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '不喜欢也没关系。那是你的感受。'
      }
    ]
  },
  {
    id: 8,
    icon: '🌙',
    title: '夜晚的声音',
    description: '灯关了。\n有人在隔壁说话。\n声音很低。\n我听不清。\n但我没有叫他们。',
    options: [
      {
        text: '我记得那种安静',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '你从小就知道，安静也是一种陪伴。'
      },
      {
        text: '我有点害怕黑暗',
        temperatureDelta: -1,
        attachmentImpact: 'anxious',
        resilienceImpact: 'fragile',
        clarityImpact: 'remember',
        feedback: '怕黑不是胆小。是需要光。'
      },
      {
        text: '我不记得了',
        temperatureDelta: 0,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '夜晚过去了。天亮了。'
      }
    ]
  },
  {
    id: 9,
    icon: '🍬',
    title: '甜的味道',
    description: '有人给了我一颗糖。\n很甜。\n甜到眯眼睛。\n那个人笑了。\n我也笑了。',
    options: [
      {
        text: '我记得那种甜',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '甜的不是糖。是那个人看你的眼神。'
      },
      {
        text: '好像有过，但忘了是谁给的',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '忘了是谁没关系。甜是真的。'
      },
      {
        text: '我不太吃糖',
        temperatureDelta: 0,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'tough',
        clarityImpact: 'notRemember',
        feedback: '不吃糖也没关系。生活里还有别的甜。'
      }
    ]
  },
  {
    id: 10,
    icon: '🤗',
    title: '被抱着',
    description: '有人抱着我。\n很紧。\n我能听到心跳。\n不知道是我的还是她的。\n反正很快。',
    options: [
      {
        text: '我记得那个拥抱',
        temperatureDelta: 1,
        attachmentImpact: 'intimate',
        resilienceImpact: 'strong',
        clarityImpact: 'remember',
        feedback: '被抱紧的时候，世界是安全的。'
      },
      {
        text: '好像有过，但不确定是谁',
        temperatureDelta: 0,
        attachmentImpact: 'secure',
        resilienceImpact: 'tough',
        clarityImpact: 'vaguely',
        feedback: '不确定是谁也没关系。拥抱本身是真的。'
      },
      {
        text: '我不记得被抱过',
        temperatureDelta: -1,
        attachmentImpact: 'avoidant',
        resilienceImpact: 'fragile',
        clarityImpact: 'notRemember',
        feedback: '不记得不代表没有。也许只是忘了。'
      }
    ]
  }
];