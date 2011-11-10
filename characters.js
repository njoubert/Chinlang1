function IDX(lesson_idx, character_idx) {
  this.lesson_idx = lesson_idx;       //string
  this.character_idx = character_idx; //int
  this.equals = function(o) { 
    return (o.lesson_idx == this.lesson_idx) && (o.lesson_idx == this.lesson_idx);
  }
}

function Lesson(name) {
  this.name = name
  this.characters = [];
  this.key_sentences = [];
  this.get_idxs = function() {
    idxs = [];
    for (var i = 0; i < this.characters.length; i++) {
      if (this.characters[i][1] != "") {
        idxs.push(new IDX(this.name, i))        
      }
    }
    return idxs;
  }
}

function CharacterDB() {
    
  this.lessonlist = ['L1', 'L2', 'L3', 'L4', 'L5', 'Numbers', 'L6', 'L7', 'L8'];
  
  this.lessons = {
    'L1' : new Lesson('L1'),
    'L2' : new Lesson('L2'),
    'L3' : new Lesson('L3'),
    'L4' : new Lesson('L4'),
    'L5' : new Lesson('L5'),
    'Numbers' : new Lesson('Numbers'),
    'L6' : new Lesson('L6'),
    'L7' : new Lesson('L7'),
    'L8' : new Lesson('L8'),
    'L9' : new Lesson('L9'),
    'L10' : new Lesson('L10'),
    'L11' : new Lesson('L11'),
    
  };
  
  this.get = function(idx) {
    return this.lessons[idx.lesson_idx].characters[idx.character_idx];
  };
  
  this.get_all_lessons_list = function() {
    return this.lessonlist;
  };
  
  this.get_characters_idx_array = function(lessonslist) {
    var chars_idxs = [];
    for (var i = 0; i < lessonslist.length; i++) {
      var new_idxs = chars_idxs.concat(this.lessons[lessonslist[i]].get_idxs());
      chars_idxs = new_idxs;
    }
    return chars_idxs.reverse();
  };
  

  this.lessons['L1'].characters = [
    //character  pinyin       type   , RO, meaning
    ['nǐ',       '你',           'Pr',    false, 'you'],
    ['hǎo',      '好',           'A',     false, 'good; well; fine; OK'],
    ['Lù Yǔpíng','陆雨平',         'PN',     true, 'name of chinese reporter'],
    ['Lìbō',     '力拨',          'PN',     true, 'name of canadian student'],
    ['ma',       '吗',           'QPt',   false, 'interrogative particle for yes-no answer'],
    ['wǒ',       '我',           'Pr',    false, 'I; me'],
    ['hěn',      '很',           'Adv',   false, 'very'],
    ['ne',       '呢',           'MdPt',  false, 'modal particle for elliptical questions'],
    ['yě',       '也',           'Adv',   false, 'too; also'],
    ['Lín Nà',   '林娜',           'PN',   true,  'name of british student']
  ];
  this.lessons['L1'].key_sentences = [
    ['pinyin here', 'characters here', 'english here']
  ]

  this.lessons['L2'].characters =  [
    ['máng',     '忙',           'A',    false, 'busy'],
    ['ma',       '吗',           'QPt',  false, 'interrogative particle for yes-no answer'],
    ['bàba',     '爸爸',          'N',    false, 'dad'],
    ['māma',     '妈妈',          'N',    false, 'mom'],
    
    ['gēge',     '哥哥',          'N',    false, 'older brother'],
    ['dìdi',     '弟弟',          'N',    false, 'younger brother'],
    ['jiějie',   '',          'N',    true, 'older sister'],
    ['mèimei',   '',          'N',    true, 'younger sister'],    
    ['yéye',     '',          'N',    true, 'paternal grandfather'],
    ['nǎinai',   '奶奶',        'N',    true, 'paternal grandmother'],
    ['wàipó',    '外婆',        'N',    true, 'maternal grandmother'],
    ['wàigōng',  '',          'N',    true, 'maternal grandfather'],
    
    ['tāmen',    '他们',          'Pr',   false, 'they, them'],
    ['tā',       '他',           'Pr',   false, 'he, him'],
    ['men',      '们',           'Suf',  false, 'denotes plurality of nouns/pronouns'],
    ['dōu',      '都',           'Adv',  false, 'both; all'],
    ['bù',       '不',           'Adv',  false, 'not; no'],
    ['nán',      '男',           'A',    false, 'male'],
    ['péngyou',  '朋友',          'A',    false, 'friend'],
    ['ne',       '呢',           'MdPt', false, 'modal particle for elliptical questions'],
    ['yào',      '要',           'V',    false, 'to want'],
    ['kāfēi',    '咖啡',          'N',    false, 'coffee'],
    ['wǒmen',    '我们',          'Pr',   false, 'we; us'],
    ['hē',       '喝',           'V',    false, 'to drink'],        
    ['Dīng',     '丁',           'V',    true, 'Ding'],        
    
    ['táng',     '',           'N',    true, 'candy'],        
    ['bǐng',     '',           'N',    true, 'cookie'],        
    ['niúnǎi',   '',           'N',    true, 'milk'],        
    ['bǐ',       '',           'N',    true, 'pen'],        
    ['yǐnliào',  '',           'N',    true, 'beverage'],        
    ['kělè',     '',           'N',    true, 'coke'],        
    ['píngguǒ',  '',           'N',    true, 'apple'],        
    
  ];

  this.lessons['L3'].characters = [
    ['tā',       '她',           'Pr',    false, 'she; her'],
    ['shì',      '是',           'V',     false, 'to be; is'],
    ['nǎ',       '哪',           'QPr',   false, 'which'],
    ['guó',      '国',           'N',     false, 'country; nation'],
    ['rén',      '人',           'N',     false, 'person; people'],
    ['nà',       '那',           'Pr',    false, 'that'],
    ['shéi',     '谁',           'QPr',   false, 'who; whom'],
    ['lǎoshi',   '老师',          'N',     false, 'teacher'],
    ['dōu',      '都',           'Adv',   false, 'both; all'],
    ['nín',      '您',           'Pr',    false, 'polite form of you'],
    ['zhè',      '这',           'Pr',    false, 'this'],
    ['tā',       '他',           'Pr',    false, 'he; him'],
    ['nǐ',       '你',           'Pr',    false, 'you'],

    ['wàiyǔ',    '外语',           'Pr',    false, 'you'],
    ['nǎinai',   '奶奶',           'N',    true, 'paternal grandmother'],
    ['wàipó',    '外婆',           'N',    true, 'maternal grandmother'],


    ['Zhōngguó', '中国',            'Pr',    false, 'China'],    
    ['Měiguó',   '美国',            'Pr',    true, 'America'],
    ['Yīngguó',  '英国',            'Pr',    true, 'England'],
    ['Déguó',    '',            'Pr',    true, 'Germany'],
    ['Fǎguó',    '',            'Pr',    true, 'America'],
    ['Rìběn',    '',            'Pr',    true, 'Japan'],
    ['Jiānádà',  '',            'Pr',    true, 'Canada'],
    
    
    ['yīshēng',  '医生',          'N',     false, 'doctor; physician'],
    ['lǜshī',    '',            'N',     true,  'lawyer'],
    ['gōngchéngshī',  '',       'N',     true,  'engineer'],
    ['jīnglǐ',  '',             'N',     true,  'manager'],
    ['lǎobān',  '',             'N',     true,  'boss'],
    
  ];

  this.lessons['L4'].characters = [
    ['rènshi',    '认识',          'V',     false, 'to know (someone)'],
    ['gāoxìng',   '高兴',          'A',     false, 'happy; pleased'],
    ['kěyǐ',      '可以',          'OpV',   false, 'may (asking permission)'],
    ['jìnlai',    '进来',          'VC',    false, 'to come in'],
    ['jìn',       '进',           'V',     false, 'to enter'],
    ['lái',       '来',           'V',     false, 'to come'],
    ['qǐng',      '请',           'V',     false, 'please'],
    ['nín',       '您',           'Pr',    false, 'you (polite)'],
    ['péngyou',   '朋友',          'N',     false, 'friend'],

    ['jìzhě',     '记者',          'N',    true, 'reporter'],
    ['Jiānádà',  '加拿大',            'Pr',    true, 'Canada'],
    
    ['qǐngwèn',   '请问',          'V',     false, 'May I ask...?'],
    ['wèn',       '问',           'V',     false, 'to ask'],
    ['guìxìng',   '贵姓',          'IE',    false, 'what is your honorable surname?'],
    ['xìng',      '姓',           'V/N',   false, 'surname'],
    ['jiào',      '叫',           'V',     false, 'to be called'],
    ['xiānsheng', '先生',          'N',     false, 'Mr.'],
    ['yǔyán',     '语言',          'N',     true, 'language'],
    ['xuéyuàn',   '学院',          'N',     false, 'institute'],
    ['de',        '的',           'Pt',    false, 'a posessive modifying particle'],
    ['xuésheng',  '学生',          'N',     false, 'student'],
    ['shénme',    '什么',          'QPt',   false, 'what'],
    ['xuéxí',     '学习',          'V',     false, 'to learn; to study'],
    ['Hànyǔ',     '汉语',          'N',     false, 'Chinese language'],
    ['Yīngguó',   '英国',          'PN',    false, 'England'],
    ['Měiguó',    '美国',          'PN',    false, 'America'],
    
    ['dà xué',   '',        'N',    true, 'university'],
    ['xíng',     '',        'N',    true, 'OK (agreement)'],

  ]

  this.lessons['L5'].characters =  [
    ['cāntīng',   '',           'N',    true, 'dining hall'],  
    ['zài',       '在',           'V',    false, 'to be (here, there, in, on, at)'],
    ['nǎr',       '哪儿',          'QPr',  false, 'where'],
    ['qǐngwèn',   '请问',          'V',    false, 'May I ask'],
    ['wèn',       '问',           'V',    false, 'to ask'],
    ['zhè',       '这',           'Pr',   false, 'this'],
    ['sùshè',     '宿舍',          'N',    false, 'dormitory'],
    ['nǚ',        '女',           'A',    false, 'female'],
    ['xuésheng',  '学生',          'N',    false, 'student'],
    ['jìn',       '进',           'V',    false, 'to enter'],
    ['zuò',       '坐',           'V',    false, 'to sit'],
    ['xièxie',    '谢谢',          'V',    false, 'to thank'],
    ['duìbuqǐ',   '对不起',         'IE',   false, 'I am sorry'],
    ['wǒ',        '我',           'Pr',   false, 'I; me'],
    ['zhīdao',    '知道',          'V',    false, 'to know'],
    ['méi guānxi','没关系',         'IE',   false, 'never mind; it doesnt matter'],
    ['hǎo',       '好',           'A',    false, 'good; well; fine; OK'],
    ['zàijiàn',   '再见',          'IE',   false, 'good-bye'],
    ['zài',       '再',           'Adv',  false, 'again'],
    
    ['céng',      '层',           'M',    false, 'floor'],
    
    ['xiǎojiě',   '小姐',          'N',    false, 'Miss; young lady'],
    ['hào',       '号',           'N',    false, 'number'],
    ['búyòng',    '不用',          'Adv',  false, 'need not'],
    ['zhèr',      '这儿',          'Pr',   false, 'here'],
    ['wǎn',       '晚',           'A',    false, 'late'],
    ['le',        '了',           'Pt',   false, 'modal aspect to show completeness'],        
  ];

  this.lessons['Numbers'].characters =  [
    ['líng',      '0',           'Nu',    false, '0'],
    ['yī',        '一',           'Nu',    false, '1'],
    ['èr',        '二',           'Nu',    false, '2'],
    ['sān',       '三',           'Nu',    false, '3'],
    ['sì',        '四',           'Nu',    false, '4'],
    ['wǔ',        '五',           'Nu',    false, '5'],
    ['liù',       '六',           'Nu',    false, '6'],
    ['qī',        '七',           'Nu',    false, '7'],
    ['bā',        '八',           'Nu',    false, '8'],
    ['jiǔ',       '九',           'Nu',    false, '9'],
    ['shí',       '十',           'Nu',    false, '10'],
  ];
  
  this.lessons['L6'].characters =  [
    ['qù',        '去',           'V',    false, 'to go'],
    ['yóuyǒng',   '游泳',          'VO',   true,  'to swim'],
    ['zuótiān',   '昨天',          'N',    false, 'yesterday'],
    ['jīngjù',    '京剧',          'N',    true,  'Beijing opera'],
    ['zěnmeyàng', '怎么样',         'QPr',  false, 'how is it?'],
    ['yǒu yìsi',  '有意思',         'IE',   true,  'interesting'],
    ['jīntiān',   '今天',          'N',    false, 'today'],
    ['tiān',      '天',           'N',    false, 'day'],
    ['tiānqì',    '天气',          'N',    false, 'weather'],
    ['tài',       '太',           'Adv',  false, 'too; extremely'],
    ['shénme',    '什么',          'QPr',  false, 'what'],
    ['shíhou',    '时候',          'N',    false, 'time; moment'],
    ['xiànzài',   '现在',          'N',    false, 'now'],
    
    ['míngtiān',  '明天',          'N',    false, 'tomorrow'],
    ['yǒu',       '有',           'V',    false, 'to have'],
    ['shíjiān',   '时间',          'N',    false, 'time'],
    ['shuō',      '说',           'V',    false, 'to say; to speak'],
    ['biàn',      '遍',           'M',    false, 'number of times (of action)'],
    ['dǎ qiú',    '打球',          'VO',   false, 'to play ball'],
    ['dǎ',        '打',           'V',    false, 'to play'],
    ['qiú',       '球',           'N',    false, 'ball'],
    ['bàoqiàn',   '抱歉',          'A',    true,  'to feel sorry'],
    ['máng',      '忙',           'A',    false, 'busy'],
    ['kǒngpà',    '恐怕',          'Adv',  true,  'to be afraid that; perhaps'],
    ['xíng',      '行',           'V',    false, 'to be OK'],
    ['xièxie',    '谢谢',          'V',    false, 'to thank'],
    ['nǐmen',     '你们',          'Pr',   false, 'you (plural)'],
    
    ['zǎoshang',   '早上',          'N',    true, 'early morning'],
    ['shàngwǔ',    '上午',          'N',    true, 'morning'],
    ['zhōngwǔ',    '中午',          'N',    true, 'noon'],
    ['xiàwǔ',      '下午',          'N',    true, 'afternoon'],
    ['wǎnshang',   '晚上',          'N',    true, 'evening'],
    
    ['kàn',        '看',           'V',    true, 'to see'],
    ['diànyǐng',   '电影',          'N',    true, 'movie; film'],
  ];

  this.lessons['L7'].characters =  [
    ['kāixué'     ,'开学'    ,'VO' ,  false,'to start school'],
    ['kāi'        ,'开'     ,'V'  ,  false,'to start'],
    ['hěn'        ,'很'     ,'Adv',  false,'very'],
    ['gāoxìng'    ,'高兴'    ,'A'  ,  true ,'happy'],
    ['kàn'        ,'看'     ,'V'  ,  false,'to watch',' to look'],
    ['wèn'        ,'问'     ,'V'  ,  false,' to ask'],
    ['yíxià'      ,'一下'    ,' '  ,  false,'short',' quickly',' informal'],
    ['xuéyuàn'    ,'学院'    ,'N'  ,  false,' institute'],
    ['míngpiàn'   ,'名片'    ,'N'  ,  false,'business card'],
    ['à'          ,'啊'     ,'Int',  false,'oh'],
    ['jiàoshòu'   ,'教授'    ,'N'  ,  true ,' professor'],
    ['jiāo'       ,'教'     ,'V'  ,  false,' to teach'],
    ['Dīng Lìbō'  ,'丁力波'   ,'PN' ,  true ,'Name'],
    ['Zhāng'      ,'张'     ,'PN' ,  false,'Last Name'],
                           
    ['shéi'       ,'谁'     ,'QPr',  false,'who?'],
    ['lái'        ,'来'     ,'V'  ,  false,'to come'],
    ['jièshào'    ,'介绍'    ,'V/N',  true ,'to introduce'],
    ['míngzi'     ,'名字'    ,'N'  ,  false,'name'],
    ['Zhōngwén'   ,'中文'    ,'N'  ,  false,'Chinese'],
    ['xuéxí'      ,'学习'    ,'V'  ,  false,'to study'],
    ['xué'        ,'学'     ,'V'  ,  false,'to study (needs object)'],
    ['zhuānyè'    ,'专业'    ,'N'  ,  false,'major','specialty'],
    ['Měishù'     ,'美术'    ,'N'  ,  true ,' fine arts'],
    ['Měi'        ,'美'     ,'A'  ,  false,' beautiful'],
    ['xì'         ,'系'     ,'N'  ,  false,' faculty',' department'],
    ['Mā Dàwéi'   ,'马大为'   ,'PN' ,  true ,' name'],
    ['Jiānádà'    ,'加拿大'   ,'PN' ,  true ,'Canada'],
    ['Měiguó'     ,'美国'    ,'PN' ,  false,'America'],
    ['wénhuà'     ,'文化'    ,'N'  ,  true ,'culture'],
    ['lìshǐ'      ,'历史'    ,'N'  ,  true,'history'],

  ];

  this.lessons['L8'].characters =  [
    ['jiā'         ,'家'    ,'N'     , false,'family; home'],
    ['jǐ'          ,'几'    ,'QPr'   , false,'how many; how much'],
    ['kǒu'         ,'口'    ,'M'     , false,'measure word for family'],
    ['zhàopiàn'    ,'	照片'  ,'N'     , true ,'picture; photo'],
    ['hé'          ,'和'    ,'Conj'  , false,'"and" for nouns and pronouns'],
    ['gè'          ,'个'    ,'M'     , false,'general measure word'],
    ['jiějie'      ,'姐姐'   ,'N'     , false,'elder sister'],
    ['liǎng'       ,'两'    ,'Nu'    , false,'"two"'],
    ['dìdi'        ,'弟弟'   ,'N'     , false,'younger brother'],
    ['hái'         ,'还'    ,'Adv'   , false,'in addition to'],
    ['yígòng'      ,'一共'   ,'Adv'   , false,'altogether'],
    ['mèimei'      ,'妹妹'   ,'N'     , false,'younger sister'],
    ['xiǎo'        ,'小'    ,'A'     , false,'little; small'],
    ['dà'          ,'大'    ,'A'     , false,'big; large'],
    ['gǒu'         ,'狗'    ,'N'     , false,'dog'],
    ['zhāng'       ,'张'    ,'M'     , false,'measure word for flat objects'],
    ['dāngrán'     ,'当然'   ,'A'     , true ,'as it should be'],
    ['zhēn'        ,'真'    ,'A/Adv' , false,'really'],
    ['kě\'ài'      ,'可爱'   ,'A'     , false,'cute; lovely'],
    ['ài'          ,'爱'    ,'V'     , false,'to love'],
    ['méi'         ,'没'    ,'Adv'   , false,'not (méiyǒu)'],
    ['méiyǒu'      ,'没有'   ,'V'     , false,'not have'],
    ['nán'         ,'男'    ,'A'     , false,'male'],
    ['zuò'         ,'做'    ,'V'     , false,'to do; to make'],
    ['gōngzuò'     ,'工作'   ,'V/N'   , false,'to work; work'],
    ['Wáng Xiǎoyún','王小云'  ,'PN'    , true ,'a Chinese student'],
    ['Bèibei'      ,'贝贝'   ,'PN'    , true ,'a dog.'],

    ['duōshao'     ,'多少 '  ,' QPr'  , false,'how many; how much'],
    ['duō'         ,'多 '   ,' A'    , false,'many; much'],
    ['shǎo'        ,'少 '   ,' A'    , false,'few; less'],
    ['xǐhuan'      ,'喜欢 '  ,' V'    , false,'to like; to prefer'],
    ['wàiyǔ'       ,'外语 '  ,' N'    , false,'foreign language'],
    ['wài'         ,'外 '   ,' N'    , false,'outside'],
    ['yǔ'          ,'语 '   ,' N'    , false,'language'],
    ['wàiguó'      ,'外国 '  ,' N'    , false,'foreign country'],
    ['bǎi'         ,'百 '   ,' Nu'   , false,'100'],

    ['chē'         ,'车'   ,' N'    , true ,'car; vehicle'],
    ['cídiǎn'      ,'词典'  ,' N'    , true ,'dictionary'],
    ['diànnǎo'     ,'电脑'  ,' N'    , true ,'computers'],

    ['háizi'       ,'孩子 '  ,' N'    , true ,'child'],
    ['dàxué'       ,'大学 '  ,' N'    , true ,'university'],
    ['xìzhǔrèn'    ,'系主任'  ,' N'    , true ,'the chairman of department'],

    ];
    
};

var characters = new CharacterDB();
