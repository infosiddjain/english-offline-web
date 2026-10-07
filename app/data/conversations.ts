/**
 * English ↔ Hindi practice conversations, grouped by level, for /conversations/[level].
 */

export type ConversationLevelId = 'basic' | 'medium' | 'hard' | 'advanced';

export interface ConversationLine {
  speaker: string;
  en: string;
  hi: string;
}

export interface KeyPhrase {
  en: string;
  hi: string;
  note: string;
}

export interface Conversation {
  id: string;
  title: string;
  titleHi: string;
  situation: string;
  lines: ConversationLine[];
  keyPhrases: KeyPhrase[];
}

export interface ConversationLevel {
  id: ConversationLevelId;
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  conversations: Conversation[];
}

export const conversationLevels: ConversationLevel[] = [
  {
    id: 'basic',
    title: 'Basic',
    hindiTitle: 'शुरुआती',
    tagline: 'Short, everyday sentences',
    description: 'Greetings, introductions and simple daily talk. Short sentences in the present tense.',
    seoTitle: 'Basic English Conversation in Hindi — Daily Spoken English for Beginners',
    seoDescription:
      'Basic English conversations with Hindi translation: greetings, introductions and shopping. Listen to every line and practise spoken English for beginners.',
    conversations: [
      {
        id: 'basic-meeting',
        title: 'Meeting a new friend',
        titleHi: 'नए दोस्त से मिलना',
        situation: 'Aman meets Neha on the first day of a new class.',
        lines: [
          { speaker: 'Aman', en: 'Hi! I am Aman. What is your name?', hi: 'हाय! मैं अमन हूँ। तुम्हारा नाम क्या है?' },
          { speaker: 'Neha', en: 'Hello Aman. My name is Neha.', hi: 'नमस्ते अमन। मेरा नाम नेहा है।' },
          { speaker: 'Aman', en: 'Nice to meet you, Neha. Where are you from?', hi: 'तुमसे मिलकर अच्छा लगा, नेहा। तुम कहाँ से हो?' },
          { speaker: 'Neha', en: 'I am from Jaipur. And you?', hi: 'मैं जयपुर से हूँ। और तुम?' },
          { speaker: 'Aman', en: 'I am from Patna. I live here with my uncle.', hi: 'मैं पटना से हूँ। मैं यहाँ अपने चाचा के साथ रहता हूँ।' },
          { speaker: 'Neha', en: 'Great! Is this your first day here?', hi: 'बढ़िया! क्या यहाँ तुम्हारा पहला दिन है?' },
          { speaker: 'Aman', en: 'Yes, it is. I am a little nervous.', hi: 'हाँ। मैं थोड़ा घबराया हुआ हूँ।' },
          { speaker: 'Neha', en: 'Don’t worry. Everyone is friendly here.', hi: 'चिंता मत करो। यहाँ सब मिलनसार हैं।' },
        ],
        keyPhrases: [
          { en: 'Nice to meet you', hi: 'आपसे मिलकर अच्छा लगा', note: 'Say this the first time you meet someone.' },
          { en: 'Where are you from?', hi: 'आप कहाँ से हैं?', note: 'Asks about someone’s home town or country.' },
          { en: 'And you?', hi: 'और आप?', note: 'A quick way to return the same question.' },
        ],
      },
      {
        id: 'basic-shop',
        title: 'At a fruit shop',
        titleHi: 'फल की दुकान पर',
        situation: 'Priya buys fruit from a shopkeeper.',
        lines: [
          { speaker: 'Shopkeeper', en: 'Good morning, madam. What do you need?', hi: 'सुप्रभात, मैडम। आपको क्या चाहिए?' },
          { speaker: 'Priya', en: 'Good morning. How much are the apples?', hi: 'सुप्रभात। सेब कितने के हैं?' },
          { speaker: 'Shopkeeper', en: 'They are one hundred and twenty rupees a kilo.', hi: 'एक सौ बीस रुपये किलो हैं।' },
          { speaker: 'Priya', en: 'Okay. Please give me one kilo.', hi: 'ठीक है। कृपया एक किलो दे दीजिए।' },
          { speaker: 'Shopkeeper', en: 'Anything else?', hi: 'और कुछ?' },
          { speaker: 'Priya', en: 'Yes, half a dozen bananas, please.', hi: 'हाँ, आधा दर्जन केले भी दीजिए।' },
          { speaker: 'Shopkeeper', en: 'That will be one hundred and fifty rupees.', hi: 'कुल एक सौ पचास रुपये हुए।' },
          { speaker: 'Priya', en: 'Here you are. Thank you!', hi: 'यह लीजिए। धन्यवाद!' },
        ],
        keyPhrases: [
          { en: 'How much are …?', hi: '… कितने के हैं?', note: 'Use “are” for plural things, “is” for one thing.' },
          { en: 'Anything else?', hi: 'और कुछ?', note: 'Shopkeepers ask this to see if you need more.' },
          { en: 'Here you are.', hi: 'यह लीजिए।', note: 'Say this while handing something to someone.' },
        ],
      },
      {
        id: 'basic-routine',
        title: 'Talking about the day',
        titleHi: 'दिनचर्या के बारे में बात',
        situation: 'Two roommates talk in the morning.',
        lines: [
          { speaker: 'Ravi', en: 'Good morning! Did you sleep well?', hi: 'सुप्रभात! अच्छी नींद आई?' },
          { speaker: 'Sameer', en: 'Yes, thanks. What time is it?', hi: 'हाँ, शुक्रिया। कितने बजे हैं?' },
          { speaker: 'Ravi', en: 'It is seven o’clock.', hi: 'सात बजे हैं।' },
          { speaker: 'Sameer', en: 'Oh no! I am getting late for college.', hi: 'अरे नहीं! मुझे कॉलेज के लिए देर हो रही है।' },
          { speaker: 'Ravi', en: 'Have some tea first. It is ready.', hi: 'पहले थोड़ी चाय पी लो। तैयार है।' },
          { speaker: 'Sameer', en: 'Thank you. When will you come back today?', hi: 'धन्यवाद। तुम आज कब वापस आओगे?' },
          { speaker: 'Ravi', en: 'Around six in the evening.', hi: 'शाम को लगभग छह बजे।' },
          { speaker: 'Sameer', en: 'Okay, see you in the evening.', hi: 'ठीक है, शाम को मिलते हैं।' },
        ],
        keyPhrases: [
          { en: 'What time is it?', hi: 'कितने बजे हैं?', note: 'The usual way to ask the time.' },
          { en: 'I am getting late.', hi: 'मुझे देर हो रही है।', note: 'Present continuous — it is happening now.' },
          { en: 'See you in the evening.', hi: 'शाम को मिलते हैं।', note: 'A friendly goodbye.' },
        ],
      },
    ],
  },
  {
    id: 'medium',
    title: 'Medium',
    hindiTitle: 'मध्यम',
    tagline: 'Longer sentences, past and future',
    description: 'Plans, problems and requests. Mixes past, present and future tenses with polite forms like “could” and “would”.',
    seoTitle: 'Intermediate English Conversation in Hindi — Spoken English Practice',
    seoDescription:
      'Intermediate English conversations with Hindi meaning: doctor visit, train travel and weekend plans. Listen and practise past and future tenses.',
    conversations: [
      {
        id: 'medium-doctor',
        title: 'At the doctor’s clinic',
        titleHi: 'डॉक्टर के क्लिनिक में',
        situation: 'Mr. Verma visits a doctor because he has a fever.',
        lines: [
          { speaker: 'Doctor', en: 'Please have a seat. What seems to be the problem?', hi: 'बैठिए। क्या परेशानी है?' },
          { speaker: 'Mr. Verma', en: 'I have had a fever since yesterday, and my throat hurts.', hi: 'मुझे कल से बुख़ार है, और मेरा गला दुख रहा है।' },
          { speaker: 'Doctor', en: 'Have you taken any medicine?', hi: 'क्या आपने कोई दवा ली है?' },
          { speaker: 'Mr. Verma', en: 'I took a paracetamol last night, but it didn’t help much.', hi: 'मैंने कल रात एक पैरासिटामोल ली थी, पर ज़्यादा फ़र्क नहीं पड़ा।' },
          { speaker: 'Doctor', en: 'Let me check your temperature. It is one hundred and one degrees.', hi: 'मैं आपका तापमान देखता हूँ। एक सौ एक डिग्री है।' },
          { speaker: 'Mr. Verma', en: 'Is it something serious?', hi: 'क्या कोई गंभीर बात है?' },
          { speaker: 'Doctor', en: 'No, it looks like a viral infection. You should rest and drink plenty of water.', hi: 'नहीं, यह वायरल इन्फ़ेक्शन लगता है। आपको आराम करना चाहिए और ख़ूब पानी पीना चाहिए।' },
          { speaker: 'Mr. Verma', en: 'Thank you, doctor. When should I come back?', hi: 'धन्यवाद, डॉक्टर साहब। मुझे दोबारा कब आना चाहिए?' },
          { speaker: 'Doctor', en: 'If the fever doesn’t go down in three days, come and see me again.', hi: 'अगर तीन दिन में बुख़ार न उतरे, तो फिर से दिखाने आइए।' },
        ],
        keyPhrases: [
          { en: 'What seems to be the problem?', hi: 'क्या परेशानी है?', note: 'A polite way to ask what is wrong.' },
          { en: 'I have had a fever since yesterday.', hi: 'मुझे कल से बुख़ार है।', note: 'Present perfect + since: something that started in the past and continues now.' },
          { en: 'You should rest.', hi: 'आपको आराम करना चाहिए।', note: '“Should” gives advice — चाहिए।' },
        ],
      },
      {
        id: 'medium-train',
        title: 'Booking a train ticket',
        titleHi: 'ट्रेन का टिकट बुक करना',
        situation: 'Anjali asks at the railway reservation counter.',
        lines: [
          { speaker: 'Anjali', en: 'Excuse me, I would like to book a ticket to Varanasi.', hi: 'सुनिए, मैं वाराणसी का एक टिकट बुक करना चाहती हूँ।' },
          { speaker: 'Clerk', en: 'For which date would you like to travel?', hi: 'आप किस तारीख़ को यात्रा करना चाहेंगी?' },
          { speaker: 'Anjali', en: 'This coming Friday, if possible.', hi: 'अगर हो सके तो इसी शुक्रवार को।' },
          { speaker: 'Clerk', en: 'Sleeper class is full, but seats are available in 3AC.', hi: 'स्लीपर क्लास भरी हुई है, पर 3AC में सीटें उपलब्ध हैं।' },
          { speaker: 'Anjali', en: 'How much would that cost?', hi: 'उसका कितना किराया होगा?' },
          { speaker: 'Clerk', en: 'It will be one thousand two hundred rupees.', hi: 'बारह सौ रुपये होंगे।' },
          { speaker: 'Anjali', en: 'That’s fine. Could I get a lower berth?', hi: 'ठीक है। क्या मुझे नीचे की बर्थ मिल सकती है?' },
          { speaker: 'Clerk', en: 'I will try, but I can’t promise.', hi: 'मैं कोशिश करूँगा, पर वादा नहीं कर सकता।' },
          { speaker: 'Anjali', en: 'No problem. Thank you for your help.', hi: 'कोई बात नहीं। आपकी मदद के लिए धन्यवाद।' },
        ],
        keyPhrases: [
          { en: 'I would like to …', hi: 'मैं … चाहता/चाहती हूँ', note: 'More polite than “I want to”.' },
          { en: 'If possible', hi: 'अगर हो सके तो', note: 'Softens a request.' },
          { en: 'Could I get …?', hi: 'क्या मुझे … मिल सकता है?', note: '“Could” makes a request polite.' },
        ],
      },
      {
        id: 'medium-weekend',
        title: 'Planning the weekend',
        titleHi: 'वीकेंड की योजना',
        situation: 'Two colleagues plan a Sunday outing.',
        lines: [
          { speaker: 'Karan', en: 'What are you doing this Sunday?', hi: 'तुम इस रविवार क्या कर रहे हो?' },
          { speaker: 'Imran', en: 'Nothing special. Why do you ask?', hi: 'कुछ ख़ास नहीं। क्यों पूछ रहे हो?' },
          { speaker: 'Karan', en: 'A few of us are going to the hills. Would you like to join us?', hi: 'हम में से कुछ लोग पहाड़ों पर जा रहे हैं। क्या तुम हमारे साथ चलना चाहोगे?' },
          { speaker: 'Imran', en: 'That sounds fun! What time are you leaving?', hi: 'यह मज़ेदार लगता है! तुम लोग कितने बजे निकल रहे हो?' },
          { speaker: 'Karan', en: 'We are planning to leave at six in the morning to avoid traffic.', hi: 'ट्रैफ़िक से बचने के लिए हम सुबह छह बजे निकलने की सोच रहे हैं।' },
          { speaker: 'Imran', en: 'That’s early, but okay. Should I bring anything?', hi: 'जल्दी है, पर ठीक है। क्या मैं कुछ लेकर आऊँ?' },
          { speaker: 'Karan', en: 'Just bring some snacks and a warm jacket. It gets cold up there.', hi: 'बस कुछ नाश्ता और एक गर्म जैकेट ले आना। ऊपर ठंड हो जाती है।' },
          { speaker: 'Imran', en: 'Sure. Let me know if the plan changes.', hi: 'ज़रूर। अगर प्लान बदले तो मुझे बता देना।' },
        ],
        keyPhrases: [
          { en: 'Would you like to join us?', hi: 'क्या तुम हमारे साथ चलना चाहोगे?', note: 'A polite invitation.' },
          { en: 'That sounds fun!', hi: 'यह मज़ेदार लगता है!', note: 'A natural way to accept an idea.' },
          { en: 'Let me know …', hi: 'मुझे बता देना …', note: 'Asks someone to inform you later.' },
        ],
      },
    ],
  },
  {
    id: 'hard',
    title: 'Hard',
    hindiTitle: 'कठिन',
    tagline: 'Professional and formal English',
    description: 'Job interviews, complaints and office talk. Formal vocabulary, conditionals and passive voice.',
    seoTitle: 'Professional English Conversation in Hindi — Interview & Office English',
    seoDescription:
      'Professional English conversations with Hindi translation: job interview, customer complaint and office meeting. Listen to formal spoken English with Hindi meaning.',
    conversations: [
      {
        id: 'hard-interview',
        title: 'A job interview',
        titleHi: 'नौकरी का इंटरव्यू',
        situation: 'Sneha is interviewing for a customer support role.',
        lines: [
          { speaker: 'Interviewer', en: 'Good afternoon, Sneha. Could you briefly tell us about yourself?', hi: 'नमस्कार, स्नेहा। क्या आप संक्षेप में अपने बारे में बता सकती हैं?' },
          { speaker: 'Sneha', en: 'Certainly. I have completed my graduation in commerce and have two years of experience in customer service.', hi: 'ज़रूर। मैंने कॉमर्स में ग्रेजुएशन किया है और मेरे पास ग्राहक सेवा में दो साल का अनुभव है।' },
          { speaker: 'Interviewer', en: 'Why do you want to leave your current job?', hi: 'आप अपनी मौजूदा नौकरी क्यों छोड़ना चाहती हैं?' },
          { speaker: 'Sneha', en: 'I have learnt a lot there, but I am looking for a role with more responsibility and growth.', hi: 'मैंने वहाँ बहुत कुछ सीखा है, लेकिन मैं ज़्यादा ज़िम्मेदारी और तरक्की वाली भूमिका की तलाश में हूँ।' },
          { speaker: 'Interviewer', en: 'How would you handle an angry customer?', hi: 'आप एक नाराज़ ग्राहक को कैसे संभालेंगी?' },
          { speaker: 'Sneha', en: 'I would listen patiently, apologise for the inconvenience, and focus on solving the problem quickly.', hi: 'मैं धैर्य से सुनूँगी, असुविधा के लिए माफ़ी माँगूँगी, और जल्दी समस्या हल करने पर ध्यान दूँगी।' },
          { speaker: 'Interviewer', en: 'What is your biggest weakness?', hi: 'आपकी सबसे बड़ी कमज़ोरी क्या है?' },
          { speaker: 'Sneha', en: 'I sometimes take on too much work, but I am learning to prioritise and delegate.', hi: 'मैं कभी-कभी बहुत ज़्यादा काम ले लेती हूँ, पर मैं प्राथमिकता तय करना और काम बाँटना सीख रही हूँ।' },
          { speaker: 'Interviewer', en: 'Thank you, Sneha. We will get back to you within a week.', hi: 'धन्यवाद, स्नेहा। हम एक हफ़्ते के अंदर आपसे संपर्क करेंगे।' },
        ],
        keyPhrases: [
          { en: 'Could you briefly tell us about yourself?', hi: 'क्या आप संक्षेप में अपने बारे में बता सकते हैं?', note: 'The most common first interview question.' },
          { en: 'I am looking for a role with more responsibility.', hi: 'मैं ज़्यादा ज़िम्मेदारी वाली भूमिका की तलाश में हूँ।', note: 'A positive reason for changing jobs.' },
          { en: 'We will get back to you.', hi: 'हम आपसे संपर्क करेंगे।', note: 'Means they will reply later.' },
        ],
      },
      {
        id: 'hard-complaint',
        title: 'Making a complaint',
        titleHi: 'शिकायत दर्ज करना',
        situation: 'Rohit calls customer care about a damaged product.',
        lines: [
          { speaker: 'Agent', en: 'Thank you for calling. How may I assist you today?', hi: 'कॉल करने के लिए धन्यवाद। आज मैं आपकी क्या सहायता कर सकता हूँ?' },
          { speaker: 'Rohit', en: 'I received my order yesterday, but the screen of the phone was cracked.', hi: 'मुझे कल अपना ऑर्डर मिला, लेकिन फ़ोन की स्क्रीन टूटी हुई थी।' },
          { speaker: 'Agent', en: 'I am really sorry to hear that. Could you share your order number?', hi: 'यह सुनकर बहुत खेद है। क्या आप अपना ऑर्डर नंबर बता सकते हैं?' },
          { speaker: 'Rohit', en: 'Sure, it is four five seven two nine.', hi: 'ज़रूर, वह चार पाँच सात दो नौ है।' },
          { speaker: 'Agent', en: 'Thank you. I can see that the parcel was marked as delivered in good condition.', hi: 'धन्यवाद। मैं देख पा रहा हूँ कि पार्सल को अच्छी हालत में डिलीवर किया गया दिखाया गया है।' },
          { speaker: 'Rohit', en: 'That is not correct. I have photos of the damaged box as well.', hi: 'यह सही नहीं है। मेरे पास टूटे हुए डिब्बे की तस्वीरें भी हैं।' },
          { speaker: 'Agent', en: 'In that case, a replacement will be arranged once the photos are verified.', hi: 'ऐसे में, तस्वीरों की जाँच होते ही बदले में नया फ़ोन भेजा जाएगा।' },
          { speaker: 'Rohit', en: 'How long will it take?', hi: 'इसमें कितना समय लगेगा?' },
          { speaker: 'Agent', en: 'It should be resolved within three to five working days.', hi: 'यह तीन से पाँच कार्य-दिवसों में हल हो जाना चाहिए।' },
        ],
        keyPhrases: [
          { en: 'How may I assist you?', hi: 'मैं आपकी क्या सहायता कर सकता हूँ?', note: 'Formal version of “How can I help you?”.' },
          { en: 'I am really sorry to hear that.', hi: 'यह सुनकर बहुत खेद है।', note: 'Shows sympathy politely.' },
          { en: 'A replacement will be arranged.', hi: 'बदले में नया सामान भेजा जाएगा।', note: 'Passive voice — the action matters, not who does it.' },
        ],
      },
      {
        id: 'hard-meeting',
        title: 'Discussing a deadline',
        titleHi: 'डेडलाइन पर चर्चा',
        situation: 'A manager and a team member discuss a delayed project.',
        lines: [
          { speaker: 'Manager', en: 'Where are we on the website project?', hi: 'वेबसाइट प्रोजेक्ट कहाँ तक पहुँचा है?' },
          { speaker: 'Arjun', en: 'We have finished the design, but the payment page is still under testing.', hi: 'हमने डिज़ाइन पूरा कर लिया है, लेकिन पेमेंट पेज की अभी टेस्टिंग चल रही है।' },
          { speaker: 'Manager', en: 'The client is expecting it by Monday. Will we make it?', hi: 'क्लाइंट सोमवार तक इसकी उम्मीद कर रहा है। क्या हम समय पर कर पाएँगे?' },
          { speaker: 'Arjun', en: 'If we get the test account details today, we can finish by Monday.', hi: 'अगर हमें आज टेस्ट अकाउंट की जानकारी मिल जाए, तो हम सोमवार तक पूरा कर सकते हैं।' },
          { speaker: 'Manager', en: 'I will follow up with the client right away.', hi: 'मैं तुरंत क्लाइंट से बात करता हूँ।' },
          { speaker: 'Arjun', en: 'Also, we might need one more developer for two days.', hi: 'साथ ही, हमें दो दिन के लिए एक और डेवलपर की ज़रूरत पड़ सकती है।' },
          { speaker: 'Manager', en: 'Let me check who is available. Keep me posted on the progress.', hi: 'मैं देखता हूँ कौन उपलब्ध है। मुझे प्रगति की जानकारी देते रहना।' },
          { speaker: 'Arjun', en: 'Sure, I will send you an update by the end of the day.', hi: 'ज़रूर, मैं दिन ख़त्म होने तक आपको अपडेट भेज दूँगा।' },
        ],
        keyPhrases: [
          { en: 'Where are we on …?', hi: '… कहाँ तक पहुँचा है?', note: 'Office English for asking about progress.' },
          { en: 'I will follow up.', hi: 'मैं इस बारे में आगे बात करूँगा।', note: 'Means to contact someone again about something.' },
          { en: 'Keep me posted.', hi: 'मुझे जानकारी देते रहना।', note: 'Ask someone to keep updating you.' },
        ],
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    hindiTitle: 'उन्नत',
    tagline: 'Opinions, debate and idioms',
    description: 'Debates, negotiations and deep conversations. Idioms, complex sentences and persuasive language.',
    seoTitle: 'Advanced English Conversation in Hindi — Fluent Spoken English with Idioms',
    seoDescription:
      'Advanced English conversations with Hindi translation: debates, salary negotiation and career advice. Learn idioms and fluent spoken English with Hindi meaning.',
    conversations: [
      {
        id: 'advanced-debate',
        title: 'Debate: Online vs classroom learning',
        titleHi: 'बहस: ऑनलाइन बनाम कक्षा में पढ़ाई',
        situation: 'Two students share opinions in a college debate.',
        lines: [
          { speaker: 'Meera', en: 'In my opinion, online learning has made education far more accessible, especially for students in small towns.', hi: 'मेरी राय में, ऑनलाइन पढ़ाई ने शिक्षा को कहीं ज़्यादा सुलभ बना दिया है, ख़ासकर छोटे शहरों के छात्रों के लिए।' },
          { speaker: 'Vikram', en: 'I see your point, but don’t you think it lacks the discipline that a classroom provides?', hi: 'मैं आपकी बात समझता हूँ, लेकिन क्या आपको नहीं लगता कि इसमें वह अनुशासन नहीं है जो कक्षा देती है?' },
          { speaker: 'Meera', en: 'That depends on the learner. Self-motivated students often thrive online.', hi: 'यह सीखने वाले पर निर्भर करता है। जो छात्र ख़ुद से प्रेरित होते हैं, वे अक्सर ऑनलाइन बहुत अच्छा करते हैं।' },
          { speaker: 'Vikram', en: 'Fair enough. However, the digital divide means not everyone has a reliable internet connection.', hi: 'ठीक बात है। हालाँकि, डिजिटल असमानता का मतलब है कि हर किसी के पास भरोसेमंद इंटरनेट कनेक्शन नहीं है।' },
          { speaker: 'Meera', en: 'Precisely, which is why offline learning tools are so valuable.', hi: 'बिल्कुल, इसीलिए ऑफ़लाइन सीखने वाले साधन इतने महत्वपूर्ण हैं।' },
          { speaker: 'Vikram', en: 'So perhaps the answer lies somewhere in between — a blended approach.', hi: 'तो शायद जवाब कहीं बीच में है — एक मिला-जुला तरीका।' },
          { speaker: 'Meera', en: 'I couldn’t agree more. Neither method should be seen as a silver bullet.', hi: 'मैं पूरी तरह सहमत हूँ। किसी भी तरीके को हर समस्या का जादुई हल नहीं मानना चाहिए।' },
        ],
        keyPhrases: [
          { en: 'I see your point, but …', hi: 'मैं आपकी बात समझता हूँ, लेकिन …', note: 'Disagree politely after accepting the other view.' },
          { en: 'I couldn’t agree more.', hi: 'मैं पूरी तरह सहमत हूँ।', note: 'Means you agree completely — not that you disagree!' },
          { en: 'A silver bullet', hi: 'हर समस्या का जादुई हल', note: 'Idiom: a simple solution to a difficult problem.' },
        ],
      },
      {
        id: 'advanced-salary',
        title: 'Negotiating a salary',
        titleHi: 'वेतन पर मोलभाव',
        situation: 'Kavya has received a job offer and discusses the salary with HR.',
        lines: [
          { speaker: 'HR', en: 'We are pleased to offer you the position. Have you had a chance to review the offer?', hi: 'हमें आपको यह पद देते हुए ख़ुशी है। क्या आपने ऑफ़र देख लिया है?' },
          { speaker: 'Kavya', en: 'Yes, thank you. I am excited about the role, but I was hoping the salary would be a little closer to the market rate.', hi: 'जी हाँ, धन्यवाद। मैं इस भूमिका को लेकर उत्साहित हूँ, लेकिन मुझे उम्मीद थी कि वेतन बाज़ार दर के थोड़ा और क़रीब होगा।' },
          { speaker: 'HR', en: 'I understand. What figure did you have in mind?', hi: 'मैं समझती हूँ। आपके मन में कितनी राशि है?' },
          { speaker: 'Kavya', en: 'Given my experience with similar projects, I believe a ten percent increase would be fair.', hi: 'मिलते-जुलते प्रोजेक्ट्स पर मेरे अनुभव को देखते हुए, मुझे लगता है दस प्रतिशत की बढ़ोतरी उचित होगी।' },
          { speaker: 'HR', en: 'That may be difficult to stretch to, but we could offer a joining bonus instead.', hi: 'इतना बढ़ाना मुश्किल हो सकता है, लेकिन बदले में हम जॉइनिंग बोनस दे सकते हैं।' },
          { speaker: 'Kavya', en: 'That’s a reasonable middle ground. Could we also revisit the salary after six months, based on performance?', hi: 'यह एक उचित बीच का रास्ता है। क्या छह महीने बाद प्रदर्शन के आधार पर वेतन पर फिर से विचार हो सकता है?' },
          { speaker: 'HR', en: 'I will run it by the management and get back to you by tomorrow.', hi: 'मैं प्रबंधन से इस बारे में पूछकर कल तक आपको बताती हूँ।' },
          { speaker: 'Kavya', en: 'I appreciate your flexibility. I look forward to hearing from you.', hi: 'आपके लचीलेपन की मैं सराहना करती हूँ। आपके जवाब का इंतज़ार रहेगा।' },
        ],
        keyPhrases: [
          { en: 'I was hoping …', hi: 'मुझे उम्मीद थी कि …', note: 'A soft, polite way to ask for more.' },
          { en: 'A middle ground', hi: 'बीच का रास्ता', note: 'A compromise both sides accept.' },
          { en: 'Run it by someone', hi: 'किसी से राय/मंज़ूरी लेना', note: 'Phrasal expression: ask someone for their opinion or approval.' },
        ],
      },
      {
        id: 'advanced-advice',
        title: 'Career advice from a mentor',
        titleHi: 'मेंटर से करियर सलाह',
        situation: 'Nikhil feels stuck in his career and talks to his mentor.',
        lines: [
          { speaker: 'Nikhil', en: 'Lately I feel like I have hit a wall. I am doing the same work every day.', hi: 'पिछले कुछ समय से मुझे लगता है कि मैं एक जगह अटक गया हूँ। मैं रोज़ एक ही काम कर रहा हूँ।' },
          { speaker: 'Mentor', en: 'That happens to everyone at some point. Have you thought about what excites you?', hi: 'यह कभी न कभी हर किसी के साथ होता है। क्या तुमने सोचा है कि तुम्हें किस चीज़ में उत्साह आता है?' },
          { speaker: 'Nikhil', en: 'I enjoy data analysis, but I don’t have a formal background in it.', hi: 'मुझे डेटा एनालिसिस अच्छा लगता है, पर मेरे पास इसकी औपचारिक पढ़ाई नहीं है।' },
          { speaker: 'Mentor', en: 'Skills matter more than degrees these days. Why not take a short course and build a few projects?', hi: 'आजकल डिग्री से ज़्यादा हुनर मायने रखता है। क्यों न एक छोटा कोर्स करो और कुछ प्रोजेक्ट बनाओ?' },
          { speaker: 'Nikhil', en: 'I am worried it might be too late to switch.', hi: 'मुझे डर है कि बदलाव के लिए शायद बहुत देर हो चुकी है।' },
          { speaker: 'Mentor', en: 'It is never too late. Take it one step at a time, and don’t burn your bridges at your current job.', hi: 'कभी देर नहीं होती। एक-एक क़दम आगे बढ़ो, और अपनी मौजूदा नौकरी में रिश्ते ख़राब मत करो।' },
          { speaker: 'Nikhil', en: 'That makes sense. I had been overthinking it.', hi: 'यह बात समझ में आती है। मैं इसके बारे में ज़रूरत से ज़्यादा सोच रहा था।' },
          { speaker: 'Mentor', en: 'Had you started six months ago, you would already be halfway there. So start today.', hi: 'अगर तुमने छह महीने पहले शुरू किया होता, तो तुम अब तक आधा रास्ता तय कर चुके होते। इसलिए आज ही शुरू करो।' },
        ],
        keyPhrases: [
          { en: 'Hit a wall', hi: 'अटक जाना / आगे न बढ़ पाना', note: 'Idiom: reach a point where you cannot make progress.' },
          { en: 'Don’t burn your bridges', hi: 'रिश्ते ख़राब मत करो', note: 'Idiom: don’t damage relationships you may need later.' },
          { en: 'Had you started …, you would …', hi: 'अगर तुमने … किया होता, तो …', note: 'Third conditional with inversion — talks about an unreal past.' },
        ],
      },
    ],
  },
];

export const getConversationLevel = (id: string) => conversationLevels.find((l) => l.id === id);
