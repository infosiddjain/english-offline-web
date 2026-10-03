/**
 * English → Hindi learning content shared with the mobile app
 * (mirrors english-offline-app/src/data/modules/hindiLearning.js — keep both in sync).
 */

export type TenseGroupId = 'present' | 'past' | 'future';

export interface Tense {
  id: string;
  group: TenseGroupId;
  aspect: string;
  name: string;
  hindiName: string;
  hindiClue: string;
  use: string;
  useHi: string;
  formula: { positive: string; negative: string; question: string };
  anchor: { en: string; hi: string };
  examples: { en: string; hi: string }[];
  signalWords: string[];
  tip: string;
}

export interface ConceptPoint {
  label: string;
  hindi: string;
  note: string;
  example: string;
  exampleHi: string;
}

export interface BasicConcept {
  id: string;
  title: string;
  hindiTitle: string;
  icon: string;
  intro: string;
  points: ConceptPoint[];
  tip: string;
}

export interface GameQuestion {
  id: string;
  type: 'identify' | 'translate' | 'clue';
  instruction: string;
  instructionHi: string;
  prompt: string;
  promptHint: string | null;
  options: string[];
  answer: string;
  explanation: string;
  tenseId: string;
}

export const tenseGroups: { id: TenseGroupId; title: string; hindiTitle: string; icon: string; summary: string; summaryHi: string; helpers: string }[] = [
  {
    id: 'present',
    title: 'Present Tense',
    hindiTitle: 'वर्तमान काल',
    icon: 'sunny-outline',
    summary: 'Things that happen now, regularly, or are always true.',
    summaryHi: 'जो काम अभी हो रहा है, रोज़ होता है या हमेशा सच है।',
    helpers: 'do / does · is / am / are · has / have',
  },
  {
    id: 'past',
    title: 'Past Tense',
    hindiTitle: 'भूतकाल',
    icon: 'time-outline',
    summary: 'Things that already happened.',
    summaryHi: 'जो काम बीते समय में हो चुका है।',
    helpers: 'did · was / were · had',
  },
  {
    id: 'future',
    title: 'Future Tense',
    hindiTitle: 'भविष्यत् काल',
    icon: 'rocket-outline',
    summary: 'Things that will happen later.',
    summaryHi: 'जो काम आने वाले समय में होगा।',
    helpers: 'will · will be · will have',
  },
];

export const tenseAspects = [
  { id: 'simple', title: 'Simple', hindiTitle: 'सामान्य', note: 'काम का सामान्य रूप — आदत, सच्चाई या एक बार हुआ काम।' },
  { id: 'continuous', title: 'Continuous', hindiTitle: 'अपूर्ण / जारी', note: 'काम चल रहा है — रहा है, रहा था, रहा होगा।' },
  { id: 'perfect', title: 'Perfect', hindiTitle: 'पूर्ण', note: 'काम पूरा हो चुका है — चुका है, चुका था, चुका होगा।' },
  { id: 'perfect-continuous', title: 'Perfect Continuous', hindiTitle: 'पूर्ण निरंतर', note: 'काम किसी समय से लगातार चल रहा है — से … रहा है।' },
];

export const tenses: Tense[] = [
  // ---------------- PRESENT ----------------
  {
    id: 'present-simple',
    group: 'present',
    aspect: 'simple',
    name: 'Simple Present',
    hindiName: 'सामान्य वर्तमान काल',
    hindiClue: 'ता है / ती है / ते हैं',
    use: 'Habits, daily routine, facts and general truths.',
    useHi: 'रोज़ की आदतें, दिनचर्या, तथ्य और हमेशा सच रहने वाली बातें।',
    formula: {
      positive: 'Subject + V1 (s/es) + Object',
      negative: 'Subject + do/does + not + V1 + Object',
      question: 'Do/Does + Subject + V1 + Object?',
    },
    anchor: { en: 'I play cricket.', hi: 'मैं क्रिकेट खेलता हूँ।' },
    examples: [
      { en: 'She goes to school every day.', hi: 'वह रोज़ स्कूल जाती है।' },
      { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।' },
      { en: 'They do not eat meat.', hi: 'वे मांस नहीं खाते हैं।' },
      { en: 'Does he speak English?', hi: 'क्या वह अंग्रेज़ी बोलता है?' },
    ],
    signalWords: ['always', 'usually', 'often', 'every day', 'never'],
    tip: 'He, She, It या एक व्यक्ति के नाम के साथ verb में s/es लगाएँ: he plays, she watches. Negative या question में does आने पर verb में s/es नहीं लगता।',
  },
  {
    id: 'present-continuous',
    group: 'present',
    aspect: 'continuous',
    name: 'Present Continuous',
    hindiName: 'अपूर्ण वर्तमान काल',
    hindiClue: 'रहा है / रही है / रहे हैं',
    use: 'Actions happening right now or around this time.',
    useHi: 'जो काम इस समय चल रहा है।',
    formula: {
      positive: 'Subject + is/am/are + V1-ing + Object',
      negative: 'Subject + is/am/are + not + V1-ing',
      question: 'Is/Am/Are + Subject + V1-ing?',
    },
    anchor: { en: 'I am playing cricket.', hi: 'मैं क्रिकेट खेल रहा हूँ।' },
    examples: [
      { en: 'She is reading a book.', hi: 'वह किताब पढ़ रही है।' },
      { en: 'They are not watching TV.', hi: 'वे टीवी नहीं देख रहे हैं।' },
      { en: 'Are you listening to me?', hi: 'क्या तुम मेरी बात सुन रहे हो?' },
    ],
    signalWords: ['now', 'right now', 'at the moment', 'Look!', 'Listen!'],
    tip: 'I के साथ am, He/She/It के साथ is, और You/We/They के साथ are लगाएँ।',
  },
  {
    id: 'present-perfect',
    group: 'present',
    aspect: 'perfect',
    name: 'Present Perfect',
    hindiName: 'पूर्ण वर्तमान काल',
    hindiClue: 'चुका है / चुकी है / चुके हैं',
    use: 'An action just completed, or a past action whose result matters now.',
    useHi: 'जो काम अभी-अभी पूरा हुआ है, या जिसका असर अब भी है।',
    formula: {
      positive: 'Subject + has/have + V3 + Object',
      negative: 'Subject + has/have + not + V3',
      question: 'Has/Have + Subject + V3?',
    },
    anchor: { en: 'I have played cricket.', hi: 'मैं क्रिकेट खेल चुका हूँ।' },
    examples: [
      { en: 'She has finished her homework.', hi: 'वह अपना होमवर्क पूरा कर चुकी है।' },
      { en: 'We have not seen this film.', hi: 'हमने यह फ़िल्म नहीं देखी है।' },
      { en: 'Have you eaten lunch?', hi: 'क्या तुमने दोपहर का खाना खा लिया है?' },
    ],
    signalWords: ['just', 'already', 'yet', 'ever', 'never'],
    tip: 'He/She/It के साथ has, I/You/We/They के साथ have। yesterday या last year जैसे बीते समय के शब्द इसके साथ नहीं आते।',
  },
  {
    id: 'present-perfect-continuous',
    group: 'present',
    aspect: 'perfect-continuous',
    name: 'Present Perfect Continuous',
    hindiName: 'पूर्ण निरंतर वर्तमान काल',
    hindiClue: 'से … रहा है / रही है / रहे हैं',
    use: 'An action that started in the past and is still continuing.',
    useHi: 'जो काम पहले शुरू हुआ और अब भी लगातार चल रहा है।',
    formula: {
      positive: 'Subject + has/have + been + V1-ing + since/for',
      negative: 'Subject + has/have + not + been + V1-ing',
      question: 'Has/Have + Subject + been + V1-ing?',
    },
    anchor: { en: 'I have been playing cricket for two hours.', hi: 'मैं दो घंटे से क्रिकेट खेल रहा हूँ।' },
    examples: [
      { en: 'She has been studying since morning.', hi: 'वह सुबह से पढ़ रही है।' },
      { en: 'It has been raining for three days.', hi: 'तीन दिन से बारिश हो रही है।' },
      { en: 'How long have you been waiting?', hi: 'तुम कब से इंतज़ार कर रहे हो?' },
    ],
    signalWords: ['since', 'for', 'how long', 'all day'],
    tip: 'निश्चित समय-बिंदु के साथ since (since 2020, since morning) और समय की अवधि के साथ for (for two hours, for five years) लगाएँ।',
  },

  // ---------------- PAST ----------------
  {
    id: 'past-simple',
    group: 'past',
    aspect: 'simple',
    name: 'Simple Past',
    hindiName: 'सामान्य भूतकाल',
    hindiClue: 'आ / ई / ए (खेला, गई, खाए)',
    use: 'A completed action at a specific time in the past.',
    useHi: 'बीते समय में पूरा हुआ काम।',
    formula: {
      positive: 'Subject + V2 + Object',
      negative: 'Subject + did + not + V1 + Object',
      question: 'Did + Subject + V1 + Object?',
    },
    anchor: { en: 'I played cricket.', hi: 'मैंने क्रिकेट खेला।' },
    examples: [
      { en: 'She went to Delhi yesterday.', hi: 'वह कल दिल्ली गई।' },
      { en: 'We did not watch the match.', hi: 'हमने मैच नहीं देखा।' },
      { en: 'Did you call him?', hi: 'क्या तुमने उसे फ़ोन किया?' },
    ],
    signalWords: ['yesterday', 'last week', 'ago', 'in 2015'],
    tip: 'did के बाद हमेशा verb की पहली form (V1) आती है: did not go सही है, did not went गलत है।',
  },
  {
    id: 'past-continuous',
    group: 'past',
    aspect: 'continuous',
    name: 'Past Continuous',
    hindiName: 'अपूर्ण भूतकाल',
    hindiClue: 'रहा था / रही थी / रहे थे',
    use: 'An action that was in progress at a time in the past.',
    useHi: 'बीते समय में जो काम चल रहा था।',
    formula: {
      positive: 'Subject + was/were + V1-ing + Object',
      negative: 'Subject + was/were + not + V1-ing',
      question: 'Was/Were + Subject + V1-ing?',
    },
    anchor: { en: 'I was playing cricket.', hi: 'मैं क्रिकेट खेल रहा था।' },
    examples: [
      { en: 'She was cooking dinner.', hi: 'वह रात का खाना बना रही थी।' },
      { en: 'They were not sleeping.', hi: 'वे सो नहीं रहे थे।' },
      { en: 'Were you driving the car?', hi: 'क्या तुम गाड़ी चला रहे थे?' },
    ],
    signalWords: ['while', 'when', 'at 8 pm yesterday', 'all evening'],
    tip: 'I/He/She/It के साथ was और You/We/They के साथ were लगाएँ।',
  },
  {
    id: 'past-perfect',
    group: 'past',
    aspect: 'perfect',
    name: 'Past Perfect',
    hindiName: 'पूर्ण भूतकाल',
    hindiClue: 'चुका था / चुकी थी / चुके थे',
    use: 'The earlier of two past actions.',
    useHi: 'भूतकाल के दो कामों में से जो काम पहले पूरा हो चुका था।',
    formula: {
      positive: 'Subject + had + V3 + Object',
      negative: 'Subject + had + not + V3',
      question: 'Had + Subject + V3?',
    },
    anchor: { en: 'I had played cricket.', hi: 'मैं क्रिकेट खेल चुका था।' },
    examples: [
      { en: 'The train had left before we reached.', hi: 'हमारे पहुँचने से पहले ट्रेन जा चुकी थी।' },
      { en: 'She had not finished her work.', hi: 'उसने अपना काम पूरा नहीं किया था।' },
      { en: 'Had you eaten before the party?', hi: 'क्या तुम पार्टी से पहले खाना खा चुके थे?' },
    ],
    signalWords: ['before', 'after', 'by the time', 'already'],
    tip: 'had सभी subjects के साथ एक जैसा रहता है, और उसके बाद verb की तीसरी form (V3) आती है।',
  },
  {
    id: 'past-perfect-continuous',
    group: 'past',
    aspect: 'perfect-continuous',
    name: 'Past Perfect Continuous',
    hindiName: 'पूर्ण निरंतर भूतकाल',
    hindiClue: 'से … रहा था / रही थी / रहे थे',
    use: 'An action that had been continuing for some time in the past.',
    useHi: 'बीते समय में कोई काम किसी समय से लगातार चल रहा था।',
    formula: {
      positive: 'Subject + had + been + V1-ing + since/for',
      negative: 'Subject + had + not + been + V1-ing',
      question: 'Had + Subject + been + V1-ing?',
    },
    anchor: { en: 'I had been playing cricket for two hours.', hi: 'मैं दो घंटे से क्रिकेट खेल रहा था।' },
    examples: [
      { en: 'She had been waiting since morning.', hi: 'वह सुबह से इंतज़ार कर रही थी।' },
      { en: 'They had been living here for ten years.', hi: 'वे दस साल से यहाँ रह रहे थे।' },
      { en: 'How long had you been working there?', hi: 'तुम वहाँ कब से काम कर रहे थे?' },
    ],
    signalWords: ['since', 'for', 'how long', 'before'],
    tip: 'Present Perfect Continuous जैसा ही है, बस has/have की जगह had आता है।',
  },

  // ---------------- FUTURE ----------------
  {
    id: 'future-simple',
    group: 'future',
    aspect: 'simple',
    name: 'Simple Future',
    hindiName: 'सामान्य भविष्यत् काल',
    hindiClue: 'गा / गी / गे',
    use: 'Something that will happen later, promises and predictions.',
    useHi: 'आगे होने वाला काम, वादा या अनुमान।',
    formula: {
      positive: 'Subject + will + V1 + Object',
      negative: 'Subject + will + not (won’t) + V1',
      question: 'Will + Subject + V1?',
    },
    anchor: { en: 'I will play cricket.', hi: 'मैं क्रिकेट खेलूँगा।' },
    examples: [
      { en: 'She will call you tomorrow.', hi: 'वह तुम्हें कल फ़ोन करेगी।' },
      { en: 'We will not go there.', hi: 'हम वहाँ नहीं जाएँगे।' },
      { en: 'Will you help me?', hi: 'क्या तुम मेरी मदद करोगे?' },
    ],
    signalWords: ['tomorrow', 'next week', 'soon', 'later'],
    tip: 'will सभी subjects के साथ चलता है, और will के बाद verb हमेशा पहली form (V1) में रहती है।',
  },
  {
    id: 'future-continuous',
    group: 'future',
    aspect: 'continuous',
    name: 'Future Continuous',
    hindiName: 'अपूर्ण भविष्यत् काल',
    hindiClue: 'रहा होगा / रही होगी / रहे होंगे',
    use: 'An action that will be in progress at a future time.',
    useHi: 'आने वाले किसी समय पर जो काम चल रहा होगा।',
    formula: {
      positive: 'Subject + will be + V1-ing + Object',
      negative: 'Subject + will not be + V1-ing',
      question: 'Will + Subject + be + V1-ing?',
    },
    anchor: { en: 'I will be playing cricket.', hi: 'मैं क्रिकेट खेल रहा होऊँगा।' },
    examples: [
      { en: 'She will be travelling at this time tomorrow.', hi: 'कल इस समय वह सफ़र कर रही होगी।' },
      { en: 'They will not be sleeping.', hi: 'वे सो नहीं रहे होंगे।' },
      { en: 'Will you be using the laptop tonight?', hi: 'क्या तुम आज रात लैपटॉप इस्तेमाल कर रहे होगे?' },
    ],
    signalWords: ['at this time tomorrow', 'tomorrow at 5 pm', 'next week'],
    tip: 'will be सभी subjects के साथ एक जैसा रहता है, फिर verb में -ing लगाएँ।',
  },
  {
    id: 'future-perfect',
    group: 'future',
    aspect: 'perfect',
    name: 'Future Perfect',
    hindiName: 'पूर्ण भविष्यत् काल',
    hindiClue: 'चुका होगा / चुकी होगी / चुके होंगे',
    use: 'An action that will be completed before a future time.',
    useHi: 'आने वाले किसी समय तक जो काम पूरा हो चुका होगा।',
    formula: {
      positive: 'Subject + will have + V3 + Object',
      negative: 'Subject + will not have + V3',
      question: 'Will + Subject + have + V3?',
    },
    anchor: { en: 'I will have played cricket.', hi: 'मैं क्रिकेट खेल चुका होऊँगा।' },
    examples: [
      { en: 'She will have reached home by 8 pm.', hi: 'वह रात 8 बजे तक घर पहुँच चुकी होगी।' },
      { en: 'We will not have finished the project by Monday.', hi: 'सोमवार तक हम प्रोजेक्ट पूरा नहीं कर पाए होंगे।' },
      { en: 'Will they have left by then?', hi: 'क्या वे तब तक जा चुके होंगे?' },
    ],
    signalWords: ['by tomorrow', 'by 5 pm', 'by next year', 'by then'],
    tip: 'इसके साथ अक्सर by (तक) आता है: by tomorrow, by 5 pm।',
  },
  {
    id: 'future-perfect-continuous',
    group: 'future',
    aspect: 'perfect-continuous',
    name: 'Future Perfect Continuous',
    hindiName: 'पूर्ण निरंतर भविष्यत् काल',
    hindiClue: 'से … रहा होगा / रही होगी / रहे होंगे',
    use: 'An action that will have been continuing for some time by a future point.',
    useHi: 'आने वाले किसी समय तक कोई काम कितनी देर से चल रहा होगा।',
    formula: {
      positive: 'Subject + will have been + V1-ing + since/for',
      negative: 'Subject + will not have been + V1-ing',
      question: 'Will + Subject + have been + V1-ing?',
    },
    anchor: { en: 'I will have been playing cricket for two hours.', hi: 'मैं दो घंटे से क्रिकेट खेल रहा होऊँगा।' },
    examples: [
      { en: 'By June, she will have been working here for five years.', hi: 'जून तक उसे यहाँ काम करते हुए पाँच साल हो जाएँगे।' },
      { en: 'They will have been travelling since morning.', hi: 'वे सुबह से सफ़र कर रहे होंगे।' },
    ],
    signalWords: ['for', 'since', 'by then', 'by next month'],
    tip: 'यह tense बोलचाल में कम इस्तेमाल होता है। पहले बाकी tenses पक्के करें, फिर इसे सीखें।',
  },
];

export const basicConcepts: BasicConcept[] = [
  {
    id: 'parts-of-speech',
    title: 'Parts of Speech',
    hindiTitle: 'शब्द भेद',
    icon: 'shapes-outline',
    intro: 'English के हर शब्द को उसके काम के हिसाब से 8 भागों में बाँटा जाता है। इन्हें समझ लेने पर वाक्य बनाना आसान हो जाता है।',
    points: [
      { label: 'Noun', hindi: 'संज्ञा', note: 'किसी व्यक्ति, जगह, चीज़ या भाव का नाम।', example: 'Ram lives in Delhi.', exampleHi: 'राम दिल्ली में रहता है।' },
      { label: 'Pronoun', hindi: 'सर्वनाम', note: 'Noun की जगह आने वाला शब्द।', example: 'She is my sister.', exampleHi: 'वह मेरी बहन है।' },
      { label: 'Verb', hindi: 'क्रिया', note: 'काम करना या होना बताने वाला शब्द।', example: 'Birds fly.', exampleHi: 'पक्षी उड़ते हैं।' },
      { label: 'Adjective', hindi: 'विशेषण', note: 'Noun की विशेषता (कैसा, कितना) बताता है।', example: 'It is a big house.', exampleHi: 'यह एक बड़ा घर है।' },
      { label: 'Adverb', hindi: 'क्रिया-विशेषण', note: 'Verb या adjective के बारे में बताता है (कैसे, कब)।', example: 'He runs fast.', exampleHi: 'वह तेज़ दौड़ता है।' },
      { label: 'Preposition', hindi: 'संबंधबोधक', note: 'शब्दों का आपसी संबंध (जगह, समय) बताता है।', example: 'The book is on the table.', exampleHi: 'किताब मेज़ पर है।' },
      { label: 'Conjunction', hindi: 'समुच्चयबोधक', note: 'दो शब्दों या वाक्यों को जोड़ता है।', example: 'I like tea and coffee.', exampleHi: 'मुझे चाय और कॉफ़ी पसंद है।' },
      { label: 'Interjection', hindi: 'विस्मयादिबोधक', note: 'अचानक आई भावना प्रकट करता है।', example: 'Wow! What a goal!', exampleHi: 'वाह! क्या गोल है!' },
    ],
    tip: 'किसी शब्द का भेद उसके काम से तय होता है, सिर्फ़ शब्द से नहीं। "Fast" verb के साथ adverb है, noun के साथ adjective।',
  },
  {
    id: 'sentence-structure',
    title: 'Sentence Structure',
    hindiTitle: 'वाक्य की बनावट',
    icon: 'git-commit-outline',
    intro: 'हिंदी में क्रिया अंत में आती है (कर्ता + कर्म + क्रिया), जबकि English में क्रिया कर्ता के ठीक बाद आती है (Subject + Verb + Object)। अनुवाद में यही सबसे बड़ा अंतर है।',
    points: [
      { label: 'Subject', hindi: 'कर्ता', note: 'जो काम करता है।', example: 'Ram eats a mango.', exampleHi: 'राम आम खाता है।' },
      { label: 'Verb', hindi: 'क्रिया', note: 'जो काम हो रहा है। English में यह subject के बाद आता है।', example: 'Ram eats a mango.', exampleHi: 'राम आम खाता है।' },
      { label: 'Object', hindi: 'कर्म', note: 'जिस पर काम का असर पड़ता है।', example: 'Ram eats a mango.', exampleHi: 'राम आम खाता है।' },
      { label: 'Hindi order', hindi: 'हिंदी क्रम', note: 'कर्ता + कर्म + क्रिया (S + O + V)', example: 'मैं + चाय + पीता हूँ', exampleHi: 'मैं चाय पीता हूँ।' },
      { label: 'English order', hindi: 'अंग्रेज़ी क्रम', note: 'Subject + Verb + Object (S + V + O)', example: 'I + drink + tea', exampleHi: 'I drink tea.' },
    ],
    tip: 'अनुवाद करते समय पहले कर्ता लिखें, फिर क्रिया, फिर बाकी शब्द। "मैं स्कूल जाता हूँ" → I go to school।',
  },
  {
    id: 'be-verbs',
    title: 'Is, Am, Are',
    hindiTitle: 'है, हूँ, हैं',
    icon: 'link-outline',
    intro: 'Is, am और are को "to be" verbs कहते हैं। ये बताते हैं कि कोई क्या है, कैसा है या कहाँ है। हिंदी में इनका मतलब है / हूँ / हैं / हो होता है।',
    points: [
      { label: 'I + am', hindi: 'मैं … हूँ', note: 'सिर्फ़ I के साथ am आता है।', example: 'I am a student.', exampleHi: 'मैं एक छात्र हूँ।' },
      { label: 'He / She / It + is', hindi: 'वह … है', note: 'एक व्यक्ति या चीज़ के साथ is।', example: 'She is happy.', exampleHi: 'वह खुश है।' },
      { label: 'You / We / They + are', hindi: 'तुम हो / हम हैं / वे हैं', note: 'You और बहुवचन के साथ are।', example: 'They are friends.', exampleHi: 'वे दोस्त हैं।' },
      { label: 'Negative', hindi: 'नकारात्मक', note: 'is/am/are के बाद not लगाएँ।', example: 'He is not at home.', exampleHi: 'वह घर पर नहीं है।' },
      { label: 'Question', hindi: 'प्रश्न', note: 'is/am/are को subject से पहले लाएँ।', example: 'Are you ready?', exampleHi: 'क्या तुम तैयार हो?' },
    ],
    tip: 'You एक व्यक्ति के लिए हो तब भी are ही लगता है: You are my friend।',
  },
  {
    id: 'was-were',
    title: 'Was, Were',
    hindiTitle: 'था, थी, थे',
    icon: 'hourglass-outline',
    intro: 'Was और were, is/am/are का भूतकाल रूप हैं। हिंदी में इनका मतलब था / थी / थे होता है।',
    points: [
      { label: 'I / He / She / It + was', hindi: 'था / थी', note: 'एकवचन और I के साथ was।', example: 'I was tired.', exampleHi: 'मैं थका हुआ था।' },
      { label: 'You / We / They + were', hindi: 'थे', note: 'You और बहुवचन के साथ were।', example: 'They were at home.', exampleHi: 'वे घर पर थे।' },
      { label: 'Negative', hindi: 'नकारात्मक', note: 'was/were + not', example: 'She was not angry.', exampleHi: 'वह गुस्से में नहीं थी।' },
      { label: 'Question', hindi: 'प्रश्न', note: 'Was/Were को पहले लाएँ।', example: 'Were you in Mumbai?', exampleHi: 'क्या तुम मुंबई में थे?' },
    ],
    tip: 'Is/am → was और are → were। बस यही याद रखें।',
  },
  {
    id: 'has-have',
    title: 'Has, Have, Had',
    hindiTitle: 'के पास है / था',
    icon: 'briefcase-outline',
    intro: 'Has/have का मतलब है "के पास होना" या "का होना"। Had इसका भूतकाल है। ये perfect tenses में helping verb भी बनते हैं।',
    points: [
      { label: 'He / She / It + has', hindi: 'उसके पास है', note: 'एकवचन के साथ has।', example: 'She has a car.', exampleHi: 'उसके पास एक कार है।' },
      { label: 'I / You / We / They + have', hindi: 'मेरे / हमारे पास है', note: 'बाकी सभी के साथ have।', example: 'I have two brothers.', exampleHi: 'मेरे दो भाई हैं।' },
      { label: 'Had (past)', hindi: 'के पास था', note: 'सभी subjects के साथ had।', example: 'We had a dog.', exampleHi: 'हमारे पास एक कुत्ता था।' },
      { label: 'Have to', hindi: 'करना पड़ता है', note: 'मजबूरी या ज़रूरत बताने के लिए।', example: 'I have to go now.', exampleHi: 'मुझे अब जाना है।' },
    ],
    tip: '"मेरे पास है" के लिए "I am having" नहीं, "I have" बोलें।',
  },
  {
    id: 'articles',
    title: 'Articles: a, an, the',
    hindiTitle: 'आर्टिकल',
    icon: 'text-outline',
    intro: 'A और an का मतलब "एक" होता है, और the किसी खास चीज़ के लिए आता है। a या an चुनते समय spelling नहीं, शब्द की पहली आवाज़ (sound) देखी जाती है।',
    points: [
      { label: 'a', hindi: 'एक (व्यंजन ध्वनि)', note: 'Consonant sound से पहले।', example: 'a book, a university', exampleHi: 'एक किताब, एक विश्वविद्यालय' },
      { label: 'an', hindi: 'एक (स्वर ध्वनि)', note: 'Vowel sound (अ, आ, इ, ए, ओ) से पहले।', example: 'an apple, an hour', exampleHi: 'एक सेब, एक घंटा' },
      { label: 'the', hindi: 'वह खास', note: 'खास, पहले बताई गई या दुनिया में एक ही चीज़।', example: 'The sun is hot.', exampleHi: 'सूरज गर्म है।' },
      { label: 'No article', hindi: 'कोई आर्टिकल नहीं', note: 'आम बहुवचन, भाषा और ज़्यादातर नामों से पहले।', example: 'I speak Hindi.', exampleHi: 'मैं हिंदी बोलता हूँ।' },
    ],
    tip: '"Hour" में h नहीं बोला जाता, इसलिए an hour; "university" की आवाज़ "यू" है, इसलिए a university।',
  },
  {
    id: 'pronouns',
    title: 'Pronouns',
    hindiTitle: 'सर्वनाम',
    icon: 'people-outline',
    intro: 'हर pronoun के चार रूप होते हैं: कर्ता (subject), कर्म (object), संबंध (possessive) और अकेला possessive।',
    points: [
      { label: 'I · me · my · mine', hindi: 'मैं · मुझे · मेरा · मेरा', note: 'पहला व्यक्ति, एकवचन', example: 'This is my book. It is mine.', exampleHi: 'यह मेरी किताब है। यह मेरी है।' },
      { label: 'You · you · your · yours', hindi: 'तुम · तुम्हें · तुम्हारा · तुम्हारा', note: 'दूसरा व्यक्ति', example: 'Is this your pen?', exampleHi: 'क्या यह तुम्हारा पेन है?' },
      { label: 'He · him · his · his', hindi: 'वह · उसे · उसका · उसका', note: 'पुरुष, एकवचन', example: 'I called him.', exampleHi: 'मैंने उसे फ़ोन किया।' },
      { label: 'She · her · her · hers', hindi: 'वह · उसे · उसकी · उसकी', note: 'स्त्री, एकवचन', example: 'She lost her bag.', exampleHi: 'उसका बैग खो गया।' },
      { label: 'We · us · our · ours', hindi: 'हम · हमें · हमारा · हमारा', note: 'पहला व्यक्ति, बहुवचन', example: 'Our team won.', exampleHi: 'हमारी टीम जीत गई।' },
      { label: 'They · them · their · theirs', hindi: 'वे · उन्हें · उनका · उनका', note: 'तीसरा व्यक्ति, बहुवचन', example: 'I know them.', exampleHi: 'मैं उन्हें जानता हूँ।' },
    ],
    tip: 'Verb से पहले कर्ता वाला रूप (I, he) और verb के बाद कर्म वाला रूप (me, him) आता है: He called me।',
  },
  {
    id: 'singular-plural',
    title: 'Singular & Plural',
    hindiTitle: 'एकवचन और बहुवचन',
    icon: 'copy-outline',
    intro: 'एक चीज़ के लिए singular और एक से ज़्यादा के लिए plural। ज़्यादातर शब्दों में s जुड़ता है, पर कुछ नियम और अपवाद याद रखने होते हैं।',
    points: [
      { label: '+ s', hindi: 'सामान्य नियम', note: 'ज़्यादातर शब्दों में s जोड़ें।', example: 'book → books', exampleHi: 'किताब → किताबें' },
      { label: '+ es', hindi: 's, sh, ch, x, o के बाद', note: 'इन अक्षरों पर खत्म होने वाले शब्दों में es।', example: 'box → boxes, watch → watches', exampleHi: 'डिब्बा → डिब्बे' },
      { label: 'y → ies', hindi: 'व्यंजन + y', note: 'y हटाकर ies लगाएँ।', example: 'city → cities', exampleHi: 'एक शहर → कई शहर' },
      { label: 'Irregular', hindi: 'अनियमित', note: 'इनका रूप पूरी तरह बदल जाता है।', example: 'man → men, child → children', exampleHi: 'एक आदमी → कई आदमी, बच्चा → बच्चे' },
      { label: 'Same form', hindi: 'एक जैसा रूप', note: 'कुछ शब्द बहुवचन में नहीं बदलते।', example: 'sheep → sheep', exampleHi: 'भेड़ → भेड़ें' },
    ],
    tip: 'Information, advice, furniture जैसे शब्दों का plural नहीं बनता: much information, कभी "informations" नहीं।',
  },
  {
    id: 'wh-questions',
    title: 'Question Words',
    hindiTitle: 'प्रश्नवाचक शब्द',
    icon: 'help-circle-outline',
    intro: 'ये शब्द सवाल की शुरुआत में आते हैं। इनके बाद helping verb (is, do, did, will) और फिर subject आता है।',
    points: [
      { label: 'What', hindi: 'क्या', note: 'चीज़ या जानकारी के बारे में', example: 'What is your name?', exampleHi: 'तुम्हारा नाम क्या है?' },
      { label: 'Where', hindi: 'कहाँ', note: 'जगह के बारे में', example: 'Where do you live?', exampleHi: 'तुम कहाँ रहते हो?' },
      { label: 'When', hindi: 'कब', note: 'समय के बारे में', example: 'When will you come?', exampleHi: 'तुम कब आओगे?' },
      { label: 'Why', hindi: 'क्यों', note: 'कारण के बारे में', example: 'Why are you sad?', exampleHi: 'तुम उदास क्यों हो?' },
      { label: 'Who', hindi: 'कौन', note: 'व्यक्ति के बारे में', example: 'Who is your teacher?', exampleHi: 'तुम्हारे शिक्षक कौन हैं?' },
      { label: 'Which', hindi: 'कौन-सा', note: 'विकल्पों में से चुनने के लिए', example: 'Which colour do you like?', exampleHi: 'तुम्हें कौन-सा रंग पसंद है?' },
      { label: 'How', hindi: 'कैसे', note: 'तरीका या हालत', example: 'How are you?', exampleHi: 'तुम कैसे हो?' },
      { label: 'How much / many', hindi: 'कितना / कितने', note: 'मात्रा या गिनती', example: 'How many books do you have?', exampleHi: 'तुम्हारे पास कितनी किताबें हैं?' },
    ],
    tip: 'क्रम याद रखें: Question word + helping verb + subject + main verb। Where do you live?',
  },
  {
    id: 'prepositions',
    title: 'In, On, At',
    hindiTitle: 'में, पर, पर / को',
    icon: 'location-outline',
    intro: 'जगह और समय बताने के लिए in, on और at सबसे ज़्यादा इस्तेमाल होते हैं। बड़ी से छोटी चीज़ की ओर: in → on → at।',
    points: [
      { label: 'in', hindi: 'में', note: 'बड़ी जगह, महीना, साल, सुबह/शाम', example: 'in India, in July, in the morning', exampleHi: 'भारत में, जुलाई में, सुबह में' },
      { label: 'on', hindi: 'पर / को', note: 'सतह, दिन और तारीख', example: 'on the table, on Monday', exampleHi: 'मेज़ पर, सोमवार को' },
      { label: 'at', hindi: 'पर', note: 'सटीक जगह या घड़ी का समय', example: 'at the station, at 5 pm', exampleHi: 'स्टेशन पर, शाम 5 बजे' },
      { label: 'under', hindi: 'के नीचे', note: 'किसी चीज़ के नीचे', example: 'The cat is under the bed.', exampleHi: 'बिल्ली पलंग के नीचे है।' },
      { label: 'between', hindi: 'के बीच', note: 'दो चीज़ों के बीच', example: 'between you and me', exampleHi: 'तुम्हारे और मेरे बीच' },
      { label: 'near', hindi: 'के पास', note: 'नज़दीक', example: 'near my house', exampleHi: 'मेरे घर के पास' },
    ],
    tip: 'at night लेकिन in the morning, in the evening — यह अपवाद याद रखें।',
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    hindiTitle: 'सकना, चाहिए, ज़रूर',
    icon: 'options-outline',
    intro: 'Modal verbs क्षमता, सलाह, अनुमति या ज़रूरत बताते हैं। इनके बाद हमेशा verb की पहली form (V1) आती है।',
    points: [
      { label: 'can', hindi: 'सकना (क्षमता)', note: 'कुछ कर पाने की क्षमता', example: 'She can swim.', exampleHi: 'वह तैर सकती है।' },
      { label: 'could', hindi: 'सकता था / विनम्र', note: 'भूतकाल की क्षमता या विनम्र निवेदन', example: 'Could you help me?', exampleHi: 'क्या आप मेरी मदद कर सकते हैं?' },
      { label: 'should', hindi: 'चाहिए (सलाह)', note: 'सलाह या सही काम', example: 'You should sleep early.', exampleHi: 'तुम्हें जल्दी सोना चाहिए।' },
      { label: 'must', hindi: 'ज़रूर / अवश्य', note: 'ज़रूरी काम या पक्का अनुमान', example: 'You must wear a helmet.', exampleHi: 'तुम्हें हेलमेट ज़रूर पहनना चाहिए।' },
      { label: 'may', hindi: 'शायद / अनुमति', note: 'संभावना या अनुमति', example: 'May I come in?', exampleHi: 'क्या मैं अंदर आ सकता हूँ?' },
      { label: 'will / would', hindi: 'गा / गी / गे · विनम्र', note: 'भविष्य या विनम्र अनुरोध', example: 'Would you like some tea?', exampleHi: 'क्या आप चाय लेंगे?' },
    ],
    tip: 'Modal के बाद verb में s या -ing नहीं लगता: She can swim सही है, She can swims गलत है।',
  },
  {
    id: 'verb-forms',
    title: 'Verb Forms: V1, V2, V3',
    hindiTitle: 'क्रिया के तीन रूप',
    icon: 'layers-outline',
    intro: 'हर verb के तीन मुख्य रूप होते हैं। V1 वर्तमान और भविष्य में, V2 सामान्य भूतकाल में और V3 has/have/had के साथ आता है। Regular verbs में V2 और V3 के लिए ed जुड़ता है।',
    points: [
      { label: 'play · played · played', hindi: 'खेलना', note: 'Regular verb: ed जोड़ें', example: 'I played yesterday.', exampleHi: 'मैंने कल खेला।' },
      { label: 'go · went · gone', hindi: 'जाना', note: 'Irregular', example: 'He has gone home.', exampleHi: 'वह घर जा चुका है।' },
      { label: 'eat · ate · eaten', hindi: 'खाना', note: 'Irregular', example: 'I ate an apple.', exampleHi: 'मैंने एक सेब खाया।' },
      { label: 'write · wrote · written', hindi: 'लिखना', note: 'Irregular', example: 'She has written a letter.', exampleHi: 'उसने एक पत्र लिखा है।' },
      { label: 'see · saw · seen', hindi: 'देखना', note: 'Irregular', example: 'I saw a tiger.', exampleHi: 'मैंने एक बाघ देखा।' },
      { label: 'take · took · taken', hindi: 'लेना', note: 'Irregular', example: 'He took my pen.', exampleHi: 'उसने मेरा पेन लिया।' },
      { label: 'come · came · come', hindi: 'आना', note: 'Irregular', example: 'They came late.', exampleHi: 'वे देर से आए।' },
      { label: 'do · did · done', hindi: 'करना', note: 'Irregular', example: 'I have done my work.', exampleHi: 'मैंने अपना काम कर लिया है।' },
      { label: 'give · gave · given', hindi: 'देना', note: 'Irregular', example: 'She gave me a gift.', exampleHi: 'उसने मुझे एक तोहफ़ा दिया।' },
      { label: 'speak · spoke · spoken', hindi: 'बोलना', note: 'Irregular', example: 'He spoke softly.', exampleHi: 'वह धीरे से बोला।' },
    ],
    tip: 'Continuous tenses में V1 + ing (playing, eating) आता है। इसे कभी-कभी V4 भी कहते हैं।',
  },
];

/** Hindi rule notes shown inside each practice lesson. Keyed by lesson id. */
export const lessonHindiNotes: Record<string, string> = {
  'b1-articles':
    'Vowel sound (अ, आ, इ, ए, ओ जैसी आवाज़) से शुरू होने वाले शब्द से पहले an और बाकी से पहले a लगाएँ। किसी खास या दुनिया में एक ही चीज़ (sun, moon) के लिए the लगाएँ। ध्यान दें: spelling नहीं, आवाज़ देखें — an hour, a university।',
  'b2-present-simple':
    'रोज़ की आदतें और सच्चाई बताने के लिए Simple Present (ता है / ती है / ते हैं) इस्तेमाल होता है। He, She, It या एक व्यक्ति के साथ verb में s/es लगता है। Negative और question में do/does आता है, और तब verb में s/es नहीं लगता।',
  'b3-prepositions-time':
    'At — सटीक समय या जगह (at 5 pm, at night)। On — दिन और तारीख (on Monday, on 15 August)। In — महीना, साल, सुबह-शाम और बड़ी जगहें (in July, in 2025, in the morning, in India)।',
  'i1-present-perfect':
    'जो काम अभी-अभी पूरा हुआ हो या जिसका असर अब भी हो, उसके लिए has/have + V3 (चुका है / लिया है)। He/She/It के साथ has, बाकी के साथ have। yesterday या last week जैसे बीते समय के शब्द इसके साथ नहीं आते।',
  'i2-modal-verbs':
    'Can — सकना (क्षमता), Should — चाहिए (सलाह), Must — ज़रूरी या पक्का अनुमान, May — शायद या अनुमति। Modal के बाद हमेशा verb की पहली form (V1) आती है; उसमें s/es या -ing नहीं लगता।',
  'a1-passive-voice':
    'Passive voice में काम करने वाले से ज़्यादा काम पर ध्यान होता है (किया गया, बनाया जाता है)। बनावट: Object + be (is/am/are/was/were/been) + V3 + (by + कर्ता)। जैसे: The letter was written by Ravi — पत्र रवि द्वारा लिखा गया।',
  'a2-subjunctive':
    'काल्पनिक इच्छा या ऐसी स्थिति जो सच नहीं है (काश, अगर ऐसा होता) में were और past form आती है। I wish I were rich — काश मैं अमीर होता। If I were you — अगर मैं तुम्हारी जगह होता। यहाँ I/He/She के साथ भी were सही है।',
};

export const getTenseById = (id: string) => tenses.find((t) => t.id === id);
export const getTensesByGroup = (groupId: TenseGroupId) => tenses.filter((t) => t.group === groupId);
export const getConceptById = (id: string) => basicConcepts.find((c) => c.id === id);

// ---------------- Tense game ----------------

const shuffle = <T,>(list: T[]): T[] => {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

// Wrong answers that share the time (same group) or the aspect are the
// ones learners actually confuse, so prefer them over random tenses.
const tenseDistractors = (tense: Tense, count = 3): Tense[] => {
  const close = tenses.filter((t) => t.id !== tense.id && (t.group === tense.group || t.aspect === tense.aspect));
  const far = tenses.filter((t) => t.id !== tense.id && !close.includes(t));
  return [...shuffle(close), ...shuffle(far)].slice(0, count);
};

export const tenseLabel = (t: Tense) => `${t.name} · ${t.hindiName}`;

const QUESTION_BUILDERS: Record<GameQuestion['type'], (tense: Tense) => Omit<GameQuestion, 'id'>> = {
  // English sentence → which tense?
  identify: (tense) => {
    const sample = pick([tense.anchor, ...tense.examples]);
    const options = shuffle([tense, ...tenseDistractors(tense)]).map(tenseLabel);
    return {
      type: 'identify' as const,
      instruction: 'Which tense is this sentence in?',
      instructionHi: 'यह वाक्य किस tense में है?',
      prompt: sample.en,
      promptHint: sample.hi,
      options,
      answer: tenseLabel(tense),
      explanation: `${tense.name} (${tense.hindiName}): ${tense.formula.positive}`,
      tenseId: tense.id,
    };
  },
  // Hindi sentence → correct English translation (other anchors as distractors).
  translate: (tense) => {
    const options = shuffle([tense, ...tenseDistractors(tense)]).map((t) => t.anchor.en);
    return {
      type: 'translate' as const,
      instruction: 'Choose the correct English sentence',
      instructionHi: 'सही अंग्रेज़ी वाक्य चुनें',
      prompt: tense.anchor.hi,
      promptHint: null,
      options,
      answer: tense.anchor.en,
      explanation: `"${tense.hindiClue}" → ${tense.name}: ${tense.formula.positive}`,
      tenseId: tense.id,
    };
  },
  // Hindi ending clue → which tense?
  clue: (tense) => {
    const options = shuffle([tense, ...tenseDistractors(tense)]).map(tenseLabel);
    return {
      type: 'clue' as const,
      instruction: 'Which tense uses this Hindi ending?',
      instructionHi: 'यह हिंदी पहचान किस tense की है?',
      prompt: tense.hindiClue,
      promptHint: null,
      options,
      answer: tenseLabel(tense),
      explanation: `${tense.name}: ${tense.anchor.en} — ${tense.anchor.hi}`,
      tenseId: tense.id,
    };
  },
};

/** Builds a round of tense questions, optionally limited to one time group. */
export const buildTenseGame = (count = 10, groupId: TenseGroupId | null = null): GameQuestion[] => {
  const pool = groupId ? getTensesByGroup(groupId) : tenses;
  const types = Object.keys(QUESTION_BUILDERS) as GameQuestion['type'][];
  const questions: GameQuestion[] = [];
  let order = shuffle(pool);
  for (let i = 0; i < count; i++) {
    if (order.length === 0) order = shuffle(pool);
    const tense = order.pop() as Tense;
    const type = types[i % types.length];
    questions.push({ id: `q-${i}`, ...QUESTION_BUILDERS[type](tense) });
  }
  return shuffle(questions);
};
