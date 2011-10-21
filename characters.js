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
  this.get_idxs = function() {
    idxs = [];
    for (var i = 0; i < this.characters.length; i++) {
      idxs.push(new IDX(this.name, i))
    }
    return idxs;
  }
}

function CharacterDB() {
    
  this.lessonlist = ['L1', 'L2', 'L3', 'L4', 'L5', 'Numbers'];
  
  this.lessons = {
    'L1' : new Lesson('L1'),
    'L2' : new Lesson('L2'),
    'L3' : new Lesson('L3'),
    'L4' : new Lesson('L4'),
    'L5' : new Lesson('L5'),
    'Numbers' : new Lesson('Numbers'),
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

  this.lessons['L2'].characters =  [
    ['máng',     '忙',           'A',    false, 'busy'],
    ['ma',       '吗',           'QPt',  false, 'interrogative particle for yes-no answer'],
    ['bàba',     '爸爸',          'N',    false, 'dad'],
    ['māma',     '妈妈',          'N',    false, 'mom'],
    ['tāmen',    '他们',          'Pr',   false, 'they, them'],
    ['tā',       '他',           'Pr',   false, 'he, him'],
    ['men',      '们',           'Suf',  false, 'denotes plurality of nouns/pronouns'],
    ['dōu',      '都',           'Adv',  false, 'both; all'],
    ['bù',       '不',           'Adv',  false, 'not; no'],
    ['nán',      '男',           'A',    false, 'male'],
    ['péngyou',  '朋友',          'A',    false, 'friend'],
    ['ne',       '呢',           'MdPt', false, 'modal particle for elliptical questions'],
    ['gēge',     '哥哥',          'N',    false, 'elder brother'],
    ['yào',      '要',           'V',    false, 'to want'],
    ['kāfēi',    '咖啡',          'N',    false, 'coffee'],
    ['dìdi',     '弟弟',          'N',    false, 'younger brother'],
    ['wǒmen',    '我们',          'Pr',   false, 'we; us'],
    ['hē',       '喝',           'V',    false, 'to drink'],        
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
    ['yīshēng',  '医生',          'N',     false, 'doctor; physician'],
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
    ['qǐngwèn',   '请问',          'V',     false, 'May I ask...?'],
    ['wèn',       '问',           'V',     false, 'to ask'],
    ['guìxìng',   '贵姓',          'IE',    false, 'what is your honorable surname?'],
    ['xìng',      '性',           'V/N',   false, 'surname'],
    ['jiào',      '叫',           'V',     false, 'to be called'],
    ['xiānsheng', '先生',          'N',     false, 'Mr.'],
    ['yǔyán',     '语言',          'N',     false, 'language'],
    ['xuéyuàn',   '学院',          'N',     false, 'institute'],
    ['de',        '的',           'Pt',    false, 'a posessive modifying particle'],
    ['xuésheng',  '学生',          'N',     false, 'student'],
    ['shénme',    '什么',          'QPt',   false, 'what'],
    ['xuéxí',     '学习',          'V',     false, 'to learn; to study'],
    ['Hànyǔ',     '汉语',          'N',     false, 'Chinese language'],
    ['Yīngguó',   '英国',          'PN',    false, 'England'],
    ['Měiguó',    '美国',          'PN',    false, 'America'],
  ]

  this.lessons['L5'].characters =  [
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
    
};

var characters = new CharacterDB();
