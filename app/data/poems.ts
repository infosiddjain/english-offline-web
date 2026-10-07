/**
 * Short public-domain poems with line-by-line translations for the /poems page.
 * English poems carry a simple Hindi meaning; Hindi dohe carry an English meaning.
 */

export interface PoemLine {
  en: string;
  hi: string;
}

export interface PoemWord {
  word: string;
  meaning: string;
}

export interface Poem {
  id: string;
  title: string;
  titleTranslated: string;
  poet: string;
  year: string;
  original: 'en' | 'hi';
  level: 'Easy' | 'Medium' | 'Hard';
  stanzas: PoemLine[][];
  words: PoemWord[];
  lesson: string;
  lessonHi: string;
}

export const poems: Poem[] = [
  {
    id: 'twinkle-twinkle',
    title: 'The Star (Twinkle, Twinkle, Little Star)',
    titleTranslated: 'टिमटिमाता छोटा तारा',
    poet: 'Jane Taylor',
    year: '1806',
    original: 'en',
    level: 'Easy',
    stanzas: [
      [
        { en: 'Twinkle, twinkle, little star,', hi: 'टिमटिमाओ, टिमटिमाओ, छोटे तारे,' },
        { en: 'How I wonder what you are!', hi: 'मैं सोचता हूँ कि तुम आख़िर क्या हो!' },
        { en: 'Up above the world so high,', hi: 'दुनिया से इतने ऊपर, इतनी ऊँचाई पर,' },
        { en: 'Like a diamond in the sky.', hi: 'आसमान में एक हीरे की तरह।' },
      ],
    ],
    words: [
      { word: 'Twinkle', meaning: 'टिमटिमाना — to shine with a flickering light' },
      { word: 'Wonder', meaning: 'सोचना / हैरान होना — to think with curiosity' },
      { word: 'Diamond', meaning: 'हीरा' },
    ],
    lesson: 'Curiosity about the world is the start of all learning.',
    lessonHi: 'दुनिया के बारे में जिज्ञासा ही हर सीख की शुरुआत है।',
  },
  {
    id: 'rain',
    title: 'Rain',
    titleTranslated: 'बारिश',
    poet: 'Robert Louis Stevenson',
    year: '1885',
    original: 'en',
    level: 'Easy',
    stanzas: [
      [
        { en: 'The rain is raining all around,', hi: 'चारों ओर बारिश हो रही है,' },
        { en: 'It falls on field and tree,', hi: 'यह खेतों और पेड़ों पर गिरती है,' },
        { en: 'It rains on the umbrellas here,', hi: 'यहाँ छातों पर बरसती है,' },
        { en: 'And on the ships at sea.', hi: 'और समुद्र में जहाज़ों पर भी।' },
      ],
    ],
    words: [
      { word: 'All around', meaning: 'चारों ओर — everywhere' },
      { word: 'Field', meaning: 'खेत / मैदान' },
      { word: 'At sea', meaning: 'समुद्र में — on the ocean' },
    ],
    lesson: 'Nature gives to everyone equally.',
    lessonHi: 'प्रकृति सबको बराबर देती है।',
  },
  {
    id: 'who-has-seen-the-wind',
    title: 'Who Has Seen the Wind?',
    titleTranslated: 'हवा को किसने देखा है?',
    poet: 'Christina Rossetti',
    year: '1872',
    original: 'en',
    level: 'Easy',
    stanzas: [
      [
        { en: 'Who has seen the wind?', hi: 'हवा को किसने देखा है?' },
        { en: 'Neither I nor you:', hi: 'न मैंने, न तुमने:' },
        { en: 'But when the leaves hang trembling,', hi: 'पर जब पत्तियाँ काँपती हुई लटकती हैं,' },
        { en: 'The wind is passing through.', hi: 'तब हवा उनके बीच से गुज़र रही होती है।' },
      ],
      [
        { en: 'Who has seen the wind?', hi: 'हवा को किसने देखा है?' },
        { en: 'Neither you nor I:', hi: 'न तुमने, न मैंने:' },
        { en: 'But when the trees bow down their heads,', hi: 'पर जब पेड़ अपना सिर झुकाते हैं,' },
        { en: 'The wind is passing by.', hi: 'तब हवा पास से गुज़र रही होती है।' },
      ],
    ],
    words: [
      { word: 'Neither … nor', meaning: 'न … न — not this and not that' },
      { word: 'Trembling', meaning: 'काँपते हुए — shaking slightly' },
      { word: 'Bow down', meaning: 'झुकना' },
    ],
    lesson: 'Some things cannot be seen, but we can see what they do.',
    lessonHi: 'कुछ चीज़ें दिखती नहीं, पर उनका असर दिखता है।',
  },
  {
    id: 'hope-is-the-thing-with-feathers',
    title: '“Hope” is the thing with feathers',
    titleTranslated: '“उम्मीद” पंखों वाली एक चीज़ है',
    poet: 'Emily Dickinson',
    year: 'c. 1861',
    original: 'en',
    level: 'Medium',
    stanzas: [
      [
        { en: '“Hope” is the thing with feathers —', hi: '“उम्मीद” पंखों वाली एक चीज़ है —' },
        { en: 'That perches in the soul —', hi: 'जो आत्मा में आकर बैठ जाती है —' },
        { en: 'And sings the tune without the words —', hi: 'और बिना शब्दों के धुन गाती है —' },
        { en: 'And never stops — at all —', hi: 'और कभी नहीं रुकती — बिल्कुल नहीं —' },
      ],
    ],
    words: [
      { word: 'Feathers', meaning: 'पंख — here hope is compared to a bird' },
      { word: 'Perches', meaning: 'बैठती है (पक्षी की तरह) — sits on something, like a bird' },
      { word: 'Soul', meaning: 'आत्मा / मन' },
      { word: 'Tune', meaning: 'धुन' },
    ],
    lesson: 'Hope lives quietly inside us and keeps us going in hard times.',
    lessonHi: 'उम्मीद चुपचाप हमारे अंदर रहती है और मुश्किल समय में हमें आगे बढ़ाती है।',
  },
  {
    id: 'daffodils',
    title: 'I Wandered Lonely as a Cloud (Daffodils)',
    titleTranslated: 'मैं बादल-सा अकेला भटक रहा था',
    poet: 'William Wordsworth',
    year: '1807',
    original: 'en',
    level: 'Medium',
    stanzas: [
      [
        { en: 'I wandered lonely as a cloud', hi: 'मैं एक बादल की तरह अकेला भटक रहा था' },
        { en: 'That floats on high o’er vales and hills,', hi: 'जो घाटियों और पहाड़ियों के ऊपर ऊँचाई पर तैरता है,' },
        { en: 'When all at once I saw a crowd,', hi: 'तभी अचानक मैंने एक भीड़ देखी,' },
        { en: 'A host, of golden daffodils;', hi: 'सुनहरे डैफ़ोडिल फूलों का एक झुंड;' },
        { en: 'Beside the lake, beneath the trees,', hi: 'झील के किनारे, पेड़ों के नीचे,' },
        { en: 'Fluttering and dancing in the breeze.', hi: 'हवा में लहराते और नाचते हुए।' },
      ],
    ],
    words: [
      { word: 'Wandered', meaning: 'भटका / घूमता रहा — walked without a fixed aim' },
      { word: 'O’er', meaning: 'over का पुराना काव्य रूप — ऊपर' },
      { word: 'Vales', meaning: 'घाटियाँ — valleys' },
      { word: 'A host', meaning: 'एक बड़ा झुंड — a large number' },
      { word: 'Breeze', meaning: 'हल्की हवा' },
    ],
    lesson: 'Beautiful moments in nature can lift a lonely heart.',
    lessonHi: 'प्रकृति के सुंदर पल अकेले मन को भी ख़ुश कर सकते हैं।',
  },
  {
    id: 'where-the-mind-is-without-fear',
    title: 'Where the Mind is Without Fear',
    titleTranslated: 'जहाँ मन भय से मुक्त हो',
    poet: 'Rabindranath Tagore (Gitanjali)',
    year: '1912',
    original: 'en',
    level: 'Hard',
    stanzas: [
      [
        { en: 'Where the mind is without fear and the head is held high;', hi: 'जहाँ मन बिना डर के हो और सिर ऊँचा रहे;' },
        { en: 'Where knowledge is free;', hi: 'जहाँ ज्ञान सबके लिए मुक्त हो;' },
        { en: 'Where the world has not been broken up into fragments by narrow domestic walls;', hi: 'जहाँ दुनिया संकीर्ण घरेलू दीवारों से टुकड़ों में न बँटी हो;' },
        { en: 'Where words come out from the depth of truth;', hi: 'जहाँ शब्द सच्चाई की गहराई से निकलते हों;' },
        { en: 'Where tireless striving stretches its arms towards perfection;', hi: 'जहाँ बिना थके किया गया प्रयास पूर्णता की ओर अपनी बाँहें फैलाता हो;' },
        { en: 'Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit;', hi: 'जहाँ तर्क की साफ़ धारा पुरानी आदतों की सूखी रेगिस्तानी रेत में खो न गई हो;' },
        { en: 'Where the mind is led forward by thee into ever-widening thought and action —', hi: 'जहाँ तुम मन को हमेशा बढ़ते विचार और कर्म की ओर ले जाओ —' },
        { en: 'Into that heaven of freedom, my Father, let my country awake.', hi: 'हे पिता, स्वतंत्रता के उसी स्वर्ग में मेरा देश जागे।' },
      ],
    ],
    words: [
      { word: 'Fragments', meaning: 'टुकड़े' },
      { word: 'Narrow domestic walls', meaning: 'संकीर्ण दीवारें — divisions of caste, religion and region' },
      { word: 'Striving', meaning: 'प्रयास / कोशिश' },
      { word: 'Reason', meaning: 'तर्क / विवेक' },
      { word: 'Dreary', meaning: 'नीरस / उदास' },
      { word: 'Thee', meaning: 'you का पुराना रूप — तुम / आप' },
    ],
    lesson: 'A truly free country is one where people think freely, speak truthfully and stay united.',
    lessonHi: 'सच्चा स्वतंत्र देश वह है जहाँ लोग खुलकर सोचें, सच बोलें और एक रहें।',
  },
  {
    id: 'kabir-bura-jo-dekhan',
    title: 'बुरा जो देखन मैं चला',
    titleTranslated: 'I went looking for the bad',
    poet: 'Kabir (doha)',
    year: '15th century',
    original: 'hi',
    level: 'Easy',
    stanzas: [
      [
        { hi: 'बुरा जो देखन मैं चला, बुरा न मिलिया कोय।', en: 'I went out looking for a bad person, but I found no one bad.' },
        { hi: 'जो दिल खोजा आपना, मुझसे बुरा न कोय॥', en: 'When I searched my own heart, I found no one worse than me.' },
      ],
    ],
    words: [
      { word: 'Search', meaning: 'खोजना' },
      { word: 'Heart', meaning: 'दिल / मन' },
      { word: 'Worse', meaning: 'ज़्यादा बुरा — comparative of “bad”' },
    ],
    lesson: 'Look at your own faults before judging others.',
    lessonHi: 'दूसरों को परखने से पहले अपनी कमियाँ देखो।',
  },
  {
    id: 'kabir-dheere-dheere',
    title: 'धीरे-धीरे रे मना',
    titleTranslated: 'Slowly, O mind',
    poet: 'Kabir (doha)',
    year: '15th century',
    original: 'hi',
    level: 'Easy',
    stanzas: [
      [
        { hi: 'धीरे-धीरे रे मना, धीरे सब कुछ होय।', en: 'Slowly, O mind, everything happens slowly.' },
        { hi: 'माली सींचे सौ घड़ा, ऋतु आए फल होय॥', en: 'The gardener may pour a hundred pots of water, but fruit comes only in its season.' },
      ],
    ],
    words: [
      { word: 'Gardener', meaning: 'माली' },
      { word: 'Pour', meaning: 'डालना / सींचना' },
      { word: 'Season', meaning: 'ऋतु / मौसम' },
      { word: 'Patience', meaning: 'धैर्य — the lesson of this doha' },
    ],
    lesson: 'Good results need patience; hurrying does not help.',
    lessonHi: 'अच्छे परिणाम के लिए धैर्य चाहिए; जल्दबाज़ी से कुछ नहीं होता।',
  },
  {
    id: 'kabir-pothi-padhi',
    title: 'पोथी पढ़ि पढ़ि जग मुआ',
    titleTranslated: 'Reading books, the world died',
    poet: 'Kabir (doha)',
    year: '15th century',
    original: 'hi',
    level: 'Medium',
    stanzas: [
      [
        { hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।', en: 'The whole world died reading big books, yet no one became truly wise.' },
        { hi: 'ढाई आखर प्रेम का, पढ़े सो पंडित होय॥', en: 'Whoever learns the two and a half letters of “love” becomes truly wise.' },
      ],
    ],
    words: [
      { word: 'Wise', meaning: 'ज्ञानी / पंडित' },
      { word: 'Truly', meaning: 'सच में / वास्तव में' },
      { word: 'Two and a half letters', meaning: 'ढाई आखर — प्रेम शब्द के ढाई अक्षर' },
    ],
    lesson: 'Love and kindness teach more than book knowledge alone.',
    lessonHi: 'सिर्फ़ किताबी ज्ञान से ज़्यादा प्रेम और दया सिखाते हैं।',
  },
  {
    id: 'kabir-kal-kare-so-aaj',
    title: 'काल करे सो आज कर',
    titleTranslated: 'Do tomorrow’s work today',
    poet: 'Kabir (doha)',
    year: '15th century',
    original: 'hi',
    level: 'Easy',
    stanzas: [
      [
        { hi: 'काल करे सो आज कर, आज करे सो अब।', en: 'What you plan to do tomorrow, do today; what you plan to do today, do now.' },
        { hi: 'पल में परलय होएगी, बहुरि करेगा कब॥', en: 'Disaster may come in a moment — then when will you do it?' },
      ],
    ],
    words: [
      { word: 'Plan', meaning: 'योजना बनाना / सोचना' },
      { word: 'Moment', meaning: 'पल / क्षण' },
      { word: 'Disaster', meaning: 'प्रलय / आपदा' },
      { word: 'Procrastinate', meaning: 'काम टालना — what this doha warns against' },
    ],
    lesson: 'Don’t put off your work; time is uncertain.',
    lessonHi: 'अपना काम टालो मत; समय का कोई भरोसा नहीं।',
  },
  {
    id: 'rahim-dhaaga-prem-ka',
    title: 'रहिमन धागा प्रेम का',
    titleTranslated: 'The thread of love',
    poet: 'Rahim (doha)',
    year: '16th century',
    original: 'hi',
    level: 'Medium',
    stanzas: [
      [
        { hi: 'रहिमन धागा प्रेम का, मत तोड़ो चटकाय।', en: 'Rahim says: do not snap the thread of love with a jerk.' },
        { hi: 'टूटे से फिर ना जुड़े, जुड़े गाँठ परि जाय॥', en: 'Once broken, it does not join again; and if it does, a knot remains.' },
      ],
    ],
    words: [
      { word: 'Thread', meaning: 'धागा' },
      { word: 'Snap', meaning: 'झटके से तोड़ना' },
      { word: 'Knot', meaning: 'गाँठ' },
    ],
    lesson: 'Relationships are delicate; once broken, they never become the same.',
    lessonHi: 'रिश्ते नाज़ुक होते हैं; एक बार टूटें तो पहले जैसे नहीं रहते।',
  },
];
