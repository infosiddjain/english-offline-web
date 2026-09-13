export interface VocabWord {
  id: string;
  word: string;
  phonetic: string;
  type: string;
  hindi: string;
  meaning: string;
  example: string;
  synonyms: string[];
}

export interface Idiom {
  id: string;
  idiom: string;
  hindi: string;
  meaning: string;
  example: string;
}

export interface DailyPhrase {
  id: string;
  english: string;
  hindi: string;
  context: string;
  example: string;
}

export interface CommonMistake {
  id: string;
  incorrect: string;
  correct: string;
  rule: string;
}

export interface GrammarRule {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  detail: string;
  example: string;
}

export interface CourseLevel {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  modulesCount: number;
  exercisesPerModule: string;
  topics: string[];
  gradient: string;
  borderColor: string;
}

export interface ConceptItem {
  id: string;
  type: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  title: string;
  subtitle: string;
  detail: string;
  example: string;
}

export const appStats = {
  totalOfflineConcepts: 10250,
  vocabularyCount: 1000,
  handcraftedExercises: 50,
  dailyStreaksActive: "100% Offline",
  userRating: "4.9 / 5.0",
  version: "1.0.0 (Release)",
  developerName: "Siddharth Gauri",
  developerEmail: "infosiddjain@gmail.com",
  portfolioUrl: "https://portfolio-five-brown-mafnjkhjpf.vercel.app/",
  playStoreDevUrl: "https://play.google.com/store/apps/developer?id=Siddharth+Gauri",
};

export const vocabularyWords: VocabWord[] = [
  {
    id: 'v1',
    word: 'Diligent',
    phonetic: '/ˈdɪl.ə.dʒənt/',
    type: 'Adjective',
    hindi: 'मेहनती (Mehnati)',
    meaning: 'Showing care and effort in work or duties.',
    example: 'Priya is a diligent student who prepares notes every single day.',
    synonyms: ['Hardworking', 'Industrious', 'Dedicated'],
  },
  {
    id: 'v2',
    word: 'Empathy',
    phonetic: '/ˈem.pə.θi/',
    type: 'Noun',
    hindi: 'सहानुभूति (Sahanubhuti)',
    meaning: 'Ability to understand and share the feelings of another.',
    example: 'Great leaders always listen with empathy and respect.',
    synonyms: ['Compassion', 'Understanding', 'Sensitivity'],
  },
  {
    id: 'v3',
    word: 'Meticulous',
    phonetic: '/məˈtɪk.jə.ləs/',
    type: 'Adjective',
    hindi: 'बारीकी से काम करने वाला',
    meaning: 'Very careful and precise about details.',
    example: 'The architect was meticulous with every design measurement.',
    synonyms: ['Thorough', 'Precise', 'Painstaking'],
  },
  {
    id: 'v4',
    word: 'Resilient',
    phonetic: '/rɪˈzɪl.jənt/',
    type: 'Adjective',
    hindi: 'मुसीबत से उबरने वाला',
    meaning: 'Able to withstand or recover quickly from difficult conditions.',
    example: 'Indian entrepreneurs are known to be resilient in tough times.',
    synonyms: ['Tough', 'Adaptable', 'Strong'],
  },
  {
    id: 'v5',
    word: 'Candid',
    phonetic: '/ˈkæn.dɪd/',
    type: 'Adjective',
    hindi: 'साफ़ और स्पष्ट बात करने वाला',
    meaning: 'Truthful and straightforward; frank and honest.',
    example: 'He gave a candid interview about his journey to success.',
    synonyms: ['Honest', 'Frank', 'Direct'],
  },
  {
    id: 'v6',
    word: 'Eloquence',
    phonetic: '/ˈel.ə.kwəns/',
    type: 'Noun',
    hindi: 'वाक्पटुता (Vakpatuta)',
    meaning: 'Fluent or persuasive speaking or writing.',
    example: 'Her eloquence impressed everyone during the English debate.',
    synonyms: ['Fluency', 'Articulateness', 'Expressiveness'],
  },
  {
    id: 'v7',
    word: 'Pragmatic',
    phonetic: '/præɡˈmæt.ɪk/',
    type: 'Adjective',
    hindi: 'व्यावहारिक (Vyavaharik)',
    meaning: 'Dealing with things sensibly and realistically.',
    example: 'We need a pragmatic solution to manage daily schedules.',
    synonyms: ['Practical', 'Sensible', 'Realistic'],
  },
  {
    id: 'v8',
    word: 'Tenacious',
    phonetic: '/təˈneɪ.ʃəs/',
    type: 'Adjective',
    hindi: 'दृढ़ संकल्प वाला',
    meaning: 'Holding firmly to a goal; persistent and determined.',
    example: 'She is tenacious and never stops until she achieves her goal.',
    synonyms: ['Persistent', 'Determined', 'Resolute'],
  },
];

export const idiomsList: Idiom[] = [
  {
    id: 'i1',
    idiom: 'Break the ice',
    hindi: 'बातचीत शुरू करना / झिझक मिटाना',
    meaning: 'To make people feel more comfortable in a new situation.',
    example: 'An engaging riddle helped break the ice at the workshop.',
  },
  {
    id: 'i2',
    idiom: 'Burn the midnight oil',
    hindi: 'देर रात तक कड़ी मेहनत करना',
    meaning: 'To study or work late into the night.',
    example: 'Rohan burned the midnight oil to clear his competitive exams.',
  },
  {
    id: 'i3',
    idiom: 'Hit the nail on the head',
    hindi: 'सटीक बात कहना',
    meaning: 'To describe exactly what is causing a situation or problem.',
    example: 'You hit the nail on the head when you identified the bottleneck.',
  },
  {
    id: 'i4',
    idiom: 'Bite the bullet',
    hindi: 'मुश्किल परिस्थिति का सामना करना',
    meaning: 'To face a difficult situation with courage.',
    example: 'I decided to bite the bullet and give the public presentation.',
  },
];

export const dailyPhrases: DailyPhrase[] = [
  {
    id: 'dp1',
    english: 'How have you been lately?',
    hindi: 'आजकल आप कैसे हैं?',
    context: 'Greeting someone you haven’t met in a while.',
    example: 'Hey Amit! How have you been lately?',
  },
  {
    id: 'dp2',
    english: 'Could you please repeat that?',
    hindi: 'क्या आप दोबारा बोल सकते हैं?',
    context: 'Polite request when you didn’t hear someone clearly.',
    example: 'Sorry, I missed the last part. Could you please repeat that?',
  },
  {
    id: 'dp3',
    english: 'That makes total sense.',
    hindi: 'यह बात बिलकुल सही लगती है।',
    context: 'Agreeing with a logical explanation.',
    example: 'Ah, I understand now. That makes total sense!',
  },
  {
    id: 'dp4',
    english: 'Let’s call it a day.',
    hindi: 'आज का काम यहीं ख़त्म करते हैं।',
    context: 'Deciding to finish work for the day.',
    example: 'We completed all main targets. Let’s call it a day.',
  },
];

export const commonMistakes: CommonMistake[] = [
  {
    id: 'cm1',
    incorrect: 'I am agree with your proposal.',
    correct: 'I agree with your proposal.',
    rule: '"Agree" is a verb, not an adjective. Do not put "am" before it.',
  },
  {
    id: 'cm2',
    incorrect: 'She does not knows English.',
    correct: 'She does not know English.',
    rule: 'After "does not", always use the base form of the verb without "-s".',
  },
  {
    id: 'cm3',
    incorrect: 'He discussed about the issue.',
    correct: 'He discussed the issue.',
    rule: '"Discuss" means "talk about", so adding "about" is redundant.',
  },
  {
    id: 'cm4',
    incorrect: 'Every students are present today.',
    correct: 'Every student is present today.',
    rule: '"Every" takes a singular noun ("student") and a singular verb ("is").',
  },
];

export const courseLevels: CourseLevel[] = [
  {
    id: 'beginner',
    title: 'Beginner Level',
    badge: 'Seedling Phase',
    tagline: 'Build a Rock-Solid Foundation',
    description: 'Master core English fundamentals: Articles (A/An/The), Subject-Verb Agreement, Essential Prepositions & Daily Vocabulary.',
    modulesCount: 4,
    exercisesPerModule: '10+ Exercises Each',
    topics: ['Definite & Indefinite Articles', 'Present & Past Tenses', 'Common Prepositions (in, on, at)', 'Daily Survival Vocabulary'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level',
    badge: 'Explorer Phase',
    tagline: 'Speak Fluidly with Confidence',
    description: 'Master Perfect Tenses, Modal Verbs (Should/Would/Could), Conditionals, and natural conversation flow.',
    modulesCount: 4,
    exercisesPerModule: '10+ Exercises Each',
    topics: ['Present & Past Perfect', 'Modal Auxiliary Verbs', 'First & Second Conditionals', 'Spoken English Idioms'],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'advanced',
    title: 'Advanced Level',
    badge: 'Mastery Phase',
    tagline: 'Nuanced & Professional Fluency',
    description: 'Conquer Passive Voice, Subjunctive Mood, Complex Relative Clauses, Phrasal Verbs & Professional Oratory.',
    modulesCount: 4,
    exercisesPerModule: '10+ Exercises Each',
    topics: ['Active to Passive Voice', 'Subjunctive & Hypotheticals', 'Advanced Phrasal Verbs', 'Common Error Eradication'],
    gradient: 'from-indigo-500/20 to-purple-500/10',
    borderColor: 'border-indigo-500/30',
  },
];

export const conceptLibrarySamples: ConceptItem[] = [
  {
    id: 'c1',
    type: 'Vocabulary',
    category: 'Vocabulary',
    level: 'Advanced',
    title: 'Diligent',
    subtitle: 'मेहनती (Mehnati)',
    detail: 'Showing care and effort in work or duties.',
    example: 'Priya is a diligent student who prepares notes every single day.',
  },
  {
    id: 'c2',
    type: 'Grammar Rule',
    category: 'Grammar Rule',
    level: 'Beginner',
    title: 'Definite Article "The"',
    subtitle: 'विशिष्ट वस्तुओं के लिए प्रयोग',
    detail: 'Use "the" before specific singular/plural nouns, unique objects (sun, moon), or superlative adjectives (the best).',
    example: 'The sun rises in the east. She is the tallest girl in class.',
  },
  {
    id: 'c3',
    type: 'Phrase',
    category: 'Spoken English',
    level: 'Intermediate',
    title: 'Could you please repeat that?',
    subtitle: 'क्या आप दोबारा बोल सकते हैं?',
    detail: 'Polite spoken phrase used in formal or casual calls when missing a sentence.',
    example: 'Sorry, I missed the last part. Could you please repeat that?',
  },
  {
    id: 'c4',
    type: 'Idiom',
    category: 'Idioms',
    level: 'Intermediate',
    title: 'Break the ice',
    subtitle: 'बातचीत शुरू करना / झिझक मिटाना',
    detail: 'To make people feel more relaxed and comfortable in a new group setting.',
    example: 'An engaging riddle helped break the ice at the workshop.',
  },
  {
    id: 'c5',
    type: 'Correction',
    category: 'Common Errors',
    level: 'Beginner',
    title: 'Wrong: "I am agree with you"',
    subtitle: 'Correct: "I agree with you"',
    detail: '"Agree" is a verb in English. Avoid combining it with the helping verb "am".',
    example: 'Say "I agree with your proposal" instead of "I am agree".',
  },
  {
    id: 'c6',
    type: 'Grammar Rule',
    category: 'Grammar Rule',
    level: 'Intermediate',
    title: 'Present Perfect Tense (Has/Have + V3)',
    subtitle: 'हाल ही में पूरा हुआ कार्य',
    detail: 'Use Has/Have + Past Participle for actions completed recently with relevance to the present moment.',
    example: 'I have finished my homework. Rahul has just arrived.',
  },
  {
    id: 'c7',
    type: 'Vocabulary',
    category: 'Vocabulary',
    level: 'Advanced',
    title: 'Meticulous',
    subtitle: 'बारीकी से काम करने वाला',
    detail: 'Very careful and precise about small details.',
    example: 'The architect was meticulous with every design measurement.',
  },
  {
    id: 'c8',
    type: 'Idiom',
    category: 'Idioms',
    level: 'Advanced',
    title: 'Burn the midnight oil',
    subtitle: 'देर रात तक कड़ी मेहनत करना',
    detail: 'Working or studying late into the night to meet a deadline or goal.',
    example: 'Rohan burned the midnight oil to clear his competitive exams.',
  },
];
