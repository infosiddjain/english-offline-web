/**
 * English ↔ Hindi dictionary and sentence translations for the /dictionary page.
 * `hindiRoman` is the Hinglish spelling so users can search without a Hindi keyboard.
 */

export interface DictionaryWord {
  id: string;
  word: string;
  phonetic: string;
  sayItLike: string;
  type: string;
  hindi: string;
  hindiRoman: string;
  meaning: string;
  example: string;
  exampleHi: string;
  synonyms: string[];
}

export interface TranslationSentence {
  id: string;
  english: string;
  hindi: string;
  hindiRoman: string;
  topic: string;
}

export const dictionaryWords: DictionaryWord[] = [
  { id: 'd-hello', word: 'Hello', phonetic: '/həˈloʊ/', sayItLike: 'he-LO', type: 'Interjection', hindi: 'नमस्ते', hindiRoman: 'namaste', meaning: 'A greeting used when meeting someone.', example: 'Hello! How are you today?', exampleHi: 'नमस्ते! आज आप कैसे हैं?', synonyms: ['Hi', 'Hey'] },
  { id: 'd-thank', word: 'Thank you', phonetic: '/ˈθæŋk juː/', sayItLike: 'THANK-yoo', type: 'Phrase', hindi: 'धन्यवाद / शुक्रिया', hindiRoman: 'dhanyavaad shukriya', meaning: 'Words used to show you are grateful.', example: 'Thank you for helping me with my homework.', exampleHi: 'मेरे होमवर्क में मदद करने के लिए धन्यवाद।', synonyms: ['Thanks', 'Much obliged'] },
  { id: 'd-sorry', word: 'Sorry', phonetic: '/ˈsɒri/', sayItLike: 'SO-ree', type: 'Adjective', hindi: 'माफ़ कीजिए / खेद है', hindiRoman: 'maaf kijiye khed hai', meaning: 'Feeling regret for something you did wrong.', example: 'Sorry, I am late.', exampleHi: 'माफ़ कीजिए, मुझे देर हो गई।', synonyms: ['Apologetic', 'Regretful'] },
  { id: 'd-please', word: 'Please', phonetic: '/pliːz/', sayItLike: 'PLEEZ', type: 'Adverb', hindi: 'कृपया', hindiRoman: 'kripya', meaning: 'A polite word used when asking for something.', example: 'Please close the door.', exampleHi: 'कृपया दरवाज़ा बंद कर दीजिए।', synonyms: ['Kindly'] },
  { id: 'd-water', word: 'Water', phonetic: '/ˈwɔːtər/', sayItLike: 'WAW-ter', type: 'Noun', hindi: 'पानी / जल', hindiRoman: 'paani jal', meaning: 'The clear liquid that we drink.', example: 'Can I have a glass of water?', exampleHi: 'क्या मुझे एक गिलास पानी मिल सकता है?', synonyms: ['Aqua'] },
  { id: 'd-food', word: 'Food', phonetic: '/fuːd/', sayItLike: 'FOOD', type: 'Noun', hindi: 'खाना / भोजन', hindiRoman: 'khana bhojan', meaning: 'Things that people eat.', example: 'The food at this restaurant is delicious.', exampleHi: 'इस रेस्टोरेंट का खाना बहुत स्वादिष्ट है।', synonyms: ['Meal', 'Dish'] },
  { id: 'd-friend', word: 'Friend', phonetic: '/frend/', sayItLike: 'FREND', type: 'Noun', hindi: 'दोस्त / मित्र', hindiRoman: 'dost mitra', meaning: 'A person you know well and like.', example: 'Rahul is my best friend.', exampleHi: 'राहुल मेरा सबसे अच्छा दोस्त है।', synonyms: ['Buddy', 'Companion'] },
  { id: 'd-family', word: 'Family', phonetic: '/ˈfæməli/', sayItLike: 'FAM-uh-lee', type: 'Noun', hindi: 'परिवार', hindiRoman: 'parivaar', meaning: 'Parents, children and relatives as a group.', example: 'I live with my family in Delhi.', exampleHi: 'मैं अपने परिवार के साथ दिल्ली में रहता हूँ।', synonyms: ['Household', 'Relatives'] },
  { id: 'd-house', word: 'House', phonetic: '/haʊs/', sayItLike: 'HOWSS', type: 'Noun', hindi: 'घर / मकान', hindiRoman: 'ghar makaan', meaning: 'A building where people live.', example: 'Our house is near the market.', exampleHi: 'हमारा घर बाज़ार के पास है।', synonyms: ['Home', 'Residence'] },
  { id: 'd-school', word: 'School', phonetic: '/skuːl/', sayItLike: 'SKOOL', type: 'Noun', hindi: 'विद्यालय / स्कूल', hindiRoman: 'vidyalaya school', meaning: 'A place where children learn.', example: 'My sister goes to school by bus.', exampleHi: 'मेरी बहन बस से स्कूल जाती है।', synonyms: ['Academy'] },
  { id: 'd-teacher', word: 'Teacher', phonetic: '/ˈtiːtʃər/', sayItLike: 'TEE-cher', type: 'Noun', hindi: 'शिक्षक / अध्यापक', hindiRoman: 'shikshak adhyapak', meaning: 'A person whose job is to teach.', example: 'Our English teacher is very kind.', exampleHi: 'हमारे अंग्रेज़ी के शिक्षक बहुत दयालु हैं।', synonyms: ['Tutor', 'Instructor'] },
  { id: 'd-book', word: 'Book', phonetic: '/bʊk/', sayItLike: 'BUK', type: 'Noun', hindi: 'किताब / पुस्तक', hindiRoman: 'kitaab pustak', meaning: 'Printed pages joined together to read.', example: 'I am reading a new book.', exampleHi: 'मैं एक नई किताब पढ़ रहा हूँ।', synonyms: ['Volume'] },
  { id: 'd-time', word: 'Time', phonetic: '/taɪm/', sayItLike: 'TYME', type: 'Noun', hindi: 'समय / वक़्त', hindiRoman: 'samay waqt', meaning: 'What is measured in minutes, hours and days.', example: 'What time is it?', exampleHi: 'कितने बजे हैं?', synonyms: ['Hour', 'Moment'] },
  { id: 'd-today', word: 'Today', phonetic: '/təˈdeɪ/', sayItLike: 'tuh-DAY', type: 'Adverb', hindi: 'आज', hindiRoman: 'aaj', meaning: 'On this day.', example: 'Today is a holiday.', exampleHi: 'आज छुट्टी है।', synonyms: ['This day'] },
  { id: 'd-tomorrow', word: 'Tomorrow', phonetic: '/təˈmɒroʊ/', sayItLike: 'tuh-MOR-oh', type: 'Adverb', hindi: 'कल (आने वाला)', hindiRoman: 'kal', meaning: 'The day after today.', example: 'I will call you tomorrow.', exampleHi: 'मैं तुम्हें कल फ़ोन करूँगा।', synonyms: ['The next day'] },
  { id: 'd-yesterday', word: 'Yesterday', phonetic: '/ˈjestərdeɪ/', sayItLike: 'YES-ter-day', type: 'Adverb', hindi: 'कल (बीता हुआ)', hindiRoman: 'kal', meaning: 'The day before today.', example: 'It rained heavily yesterday.', exampleHi: 'कल बहुत तेज़ बारिश हुई।', synonyms: ['The previous day'] },
  { id: 'd-happy', word: 'Happy', phonetic: '/ˈhæpi/', sayItLike: 'HAP-ee', type: 'Adjective', hindi: 'ख़ुश / प्रसन्न', hindiRoman: 'khush prasann', meaning: 'Feeling pleased or glad.', example: 'She is happy with her result.', exampleHi: 'वह अपने रिज़ल्ट से ख़ुश है।', synonyms: ['Glad', 'Cheerful'] },
  { id: 'd-sad', word: 'Sad', phonetic: '/sæd/', sayItLike: 'SAD', type: 'Adjective', hindi: 'दुखी / उदास', hindiRoman: 'dukhi udaas', meaning: 'Feeling unhappy.', example: 'He was sad after the match.', exampleHi: 'मैच के बाद वह उदास था।', synonyms: ['Unhappy', 'Upset'] },
  { id: 'd-angry', word: 'Angry', phonetic: '/ˈæŋɡri/', sayItLike: 'ANG-gree', type: 'Adjective', hindi: 'ग़ुस्सा / क्रोधित', hindiRoman: 'gussa krodhit', meaning: 'Having a strong feeling against someone or something.', example: 'Please don’t be angry with me.', exampleHi: 'कृपया मुझसे ग़ुस्सा मत होइए।', synonyms: ['Mad', 'Annoyed'] },
  { id: 'd-tired', word: 'Tired', phonetic: '/ˈtaɪərd/', sayItLike: 'TY-erd', type: 'Adjective', hindi: 'थका हुआ', hindiRoman: 'thaka hua', meaning: 'Needing rest or sleep.', example: 'I am very tired after work.', exampleHi: 'काम के बाद मैं बहुत थका हुआ हूँ।', synonyms: ['Exhausted', 'Sleepy'] },
  { id: 'd-hungry', word: 'Hungry', phonetic: '/ˈhʌŋɡri/', sayItLike: 'HUNG-gree', type: 'Adjective', hindi: 'भूखा', hindiRoman: 'bhookha', meaning: 'Wanting or needing food.', example: 'Are you hungry? Let’s eat.', exampleHi: 'क्या तुम्हें भूख लगी है? चलो खाते हैं।', synonyms: ['Starving'] },
  { id: 'd-beautiful', word: 'Beautiful', phonetic: '/ˈbjuːtɪfəl/', sayItLike: 'BYOO-ti-ful', type: 'Adjective', hindi: 'सुंदर / ख़ूबसूरत', hindiRoman: 'sundar khoobsurat', meaning: 'Very pleasing to look at.', example: 'The Taj Mahal is beautiful.', exampleHi: 'ताजमहल बहुत सुंदर है।', synonyms: ['Pretty', 'Lovely'] },
  { id: 'd-important', word: 'Important', phonetic: '/ɪmˈpɔːrtənt/', sayItLike: 'im-POR-tunt', type: 'Adjective', hindi: 'ज़रूरी / महत्वपूर्ण', hindiRoman: 'zaroori mahatvapurn', meaning: 'Having great value or effect.', example: 'Health is more important than money.', exampleHi: 'स्वास्थ्य पैसे से ज़्यादा ज़रूरी है।', synonyms: ['Essential', 'Significant'] },
  { id: 'd-difficult', word: 'Difficult', phonetic: '/ˈdɪfɪkəlt/', sayItLike: 'DIF-i-kult', type: 'Adjective', hindi: 'मुश्किल / कठिन', hindiRoman: 'mushkil kathin', meaning: 'Not easy to do or understand.', example: 'This question is difficult.', exampleHi: 'यह सवाल मुश्किल है।', synonyms: ['Hard', 'Tough'] },
  { id: 'd-easy', word: 'Easy', phonetic: '/ˈiːzi/', sayItLike: 'EE-zee', type: 'Adjective', hindi: 'आसान / सरल', hindiRoman: 'aasaan saral', meaning: 'Not difficult.', example: 'English is easy if you practise daily.', exampleHi: 'अगर रोज़ अभ्यास करो तो अंग्रेज़ी आसान है।', synonyms: ['Simple'] },
  { id: 'd-learn', word: 'Learn', phonetic: '/lɜːrn/', sayItLike: 'LURN', type: 'Verb', hindi: 'सीखना', hindiRoman: 'seekhna', meaning: 'To gain knowledge or a skill.', example: 'I want to learn English.', exampleHi: 'मैं अंग्रेज़ी सीखना चाहता हूँ।', synonyms: ['Study', 'Pick up'] },
  { id: 'd-speak', word: 'Speak', phonetic: '/spiːk/', sayItLike: 'SPEEK', type: 'Verb', hindi: 'बोलना', hindiRoman: 'bolna', meaning: 'To say words aloud.', example: 'Can you speak slowly, please?', exampleHi: 'क्या आप कृपया धीरे बोल सकते हैं?', synonyms: ['Talk', 'Say'] },
  { id: 'd-understand', word: 'Understand', phonetic: '/ˌʌndərˈstænd/', sayItLike: 'un-der-STAND', type: 'Verb', hindi: 'समझना', hindiRoman: 'samajhna', meaning: 'To know the meaning of something.', example: 'I don’t understand this word.', exampleHi: 'मुझे यह शब्द समझ नहीं आया।', synonyms: ['Get', 'Grasp'] },
  { id: 'd-remember', word: 'Remember', phonetic: '/rɪˈmembər/', sayItLike: 'ri-MEM-ber', type: 'Verb', hindi: 'याद रखना / याद करना', hindiRoman: 'yaad rakhna yaad karna', meaning: 'To keep something in your mind.', example: 'Remember to bring your ID card.', exampleHi: 'अपना आईडी कार्ड लाना याद रखना।', synonyms: ['Recall', 'Recollect'] },
  { id: 'd-forget', word: 'Forget', phonetic: '/fərˈɡet/', sayItLike: 'fer-GET', type: 'Verb', hindi: 'भूलना', hindiRoman: 'bhoolna', meaning: 'To not remember.', example: 'Don’t forget your umbrella.', exampleHi: 'अपना छाता मत भूलना।', synonyms: ['Overlook'] },
  { id: 'd-help', word: 'Help', phonetic: '/help/', sayItLike: 'HELP', type: 'Verb / Noun', hindi: 'मदद करना / सहायता', hindiRoman: 'madad karna sahayata', meaning: 'To make something easier for someone.', example: 'Can you help me, please?', exampleHi: 'क्या आप मेरी मदद कर सकते हैं?', synonyms: ['Assist', 'Support'] },
  { id: 'd-wait', word: 'Wait', phonetic: '/weɪt/', sayItLike: 'WAYT', type: 'Verb', hindi: 'इंतज़ार करना', hindiRoman: 'intezaar karna', meaning: 'To stay until something happens.', example: 'Please wait for five minutes.', exampleHi: 'कृपया पाँच मिनट इंतज़ार कीजिए।', synonyms: ['Hold on', 'Stay'] },
  { id: 'd-buy', word: 'Buy', phonetic: '/baɪ/', sayItLike: 'BY', type: 'Verb', hindi: 'ख़रीदना', hindiRoman: 'khareedna', meaning: 'To get something by paying money.', example: 'I want to buy a new phone.', exampleHi: 'मैं एक नया फ़ोन ख़रीदना चाहता हूँ।', synonyms: ['Purchase'] },
  { id: 'd-sell', word: 'Sell', phonetic: '/sel/', sayItLike: 'SEL', type: 'Verb', hindi: 'बेचना', hindiRoman: 'bechna', meaning: 'To give something in exchange for money.', example: 'He sells vegetables in the market.', exampleHi: 'वह बाज़ार में सब्ज़ियाँ बेचता है।', synonyms: ['Trade'] },
  { id: 'd-price', word: 'Price', phonetic: '/praɪs/', sayItLike: 'PRYSS', type: 'Noun', hindi: 'दाम / क़ीमत', hindiRoman: 'daam keemat', meaning: 'The money you pay for something.', example: 'What is the price of this shirt?', exampleHi: 'इस शर्ट का दाम क्या है?', synonyms: ['Cost', 'Rate'] },
  { id: 'd-cheap', word: 'Cheap', phonetic: '/tʃiːp/', sayItLike: 'CHEEP', type: 'Adjective', hindi: 'सस्ता', hindiRoman: 'sasta', meaning: 'Costing little money.', example: 'Fruits are cheap in this season.', exampleHi: 'इस मौसम में फल सस्ते हैं।', synonyms: ['Inexpensive', 'Affordable'] },
  { id: 'd-expensive', word: 'Expensive', phonetic: '/ɪkˈspensɪv/', sayItLike: 'ik-SPEN-siv', type: 'Adjective', hindi: 'महँगा', hindiRoman: 'mehnga', meaning: 'Costing a lot of money.', example: 'This hotel is too expensive.', exampleHi: 'यह होटल बहुत महँगा है।', synonyms: ['Costly', 'Pricey'] },
  { id: 'd-doctor', word: 'Doctor', phonetic: '/ˈdɒktər/', sayItLike: 'DOK-ter', type: 'Noun', hindi: 'डॉक्टर / चिकित्सक', hindiRoman: 'doctor chikitsak', meaning: 'A person trained to treat sick people.', example: 'You should see a doctor.', exampleHi: 'तुम्हें डॉक्टर को दिखाना चाहिए।', synonyms: ['Physician'] },
  { id: 'd-medicine', word: 'Medicine', phonetic: '/ˈmedɪsən/', sayItLike: 'MED-i-sin', type: 'Noun', hindi: 'दवा / दवाई', hindiRoman: 'dawa dawai', meaning: 'Something you take to get better when ill.', example: 'Take this medicine after food.', exampleHi: 'यह दवा खाने के बाद लेना।', synonyms: ['Drug', 'Remedy'] },
  { id: 'd-job', word: 'Job', phonetic: '/dʒɒb/', sayItLike: 'JOB', type: 'Noun', hindi: 'नौकरी / काम', hindiRoman: 'naukri kaam', meaning: 'Work you do regularly to earn money.', example: 'She got a new job in Pune.', exampleHi: 'उसे पुणे में नई नौकरी मिली।', synonyms: ['Work', 'Employment'] },
  { id: 'd-interview', word: 'Interview', phonetic: '/ˈɪntərvjuː/', sayItLike: 'IN-ter-vyoo', type: 'Noun', hindi: 'साक्षात्कार / इंटरव्यू', hindiRoman: 'sakshatkar interview', meaning: 'A formal meeting to ask someone questions, often for a job.', example: 'I have a job interview tomorrow.', exampleHi: 'कल मेरा नौकरी का इंटरव्यू है।', synonyms: ['Meeting', 'Discussion'] },
  { id: 'd-confidence', word: 'Confidence', phonetic: '/ˈkɒnfɪdəns/', sayItLike: 'KON-fi-dens', type: 'Noun', hindi: 'आत्मविश्वास', hindiRoman: 'aatmavishwas', meaning: 'Belief in your own abilities.', example: 'Speak with confidence.', exampleHi: 'आत्मविश्वास के साथ बोलो।', synonyms: ['Self-belief', 'Assurance'] },
  { id: 'd-opportunity', word: 'Opportunity', phonetic: '/ˌɒpərˈtjuːnəti/', sayItLike: 'op-er-TYOO-ni-tee', type: 'Noun', hindi: 'अवसर / मौक़ा', hindiRoman: 'avsar mauka', meaning: 'A chance to do something good.', example: 'This is a great opportunity for you.', exampleHi: 'यह तुम्हारे लिए एक बढ़िया मौक़ा है।', synonyms: ['Chance'] },
  { id: 'd-experience', word: 'Experience', phonetic: '/ɪkˈspɪəriəns/', sayItLike: 'ik-SPEER-ee-ens', type: 'Noun', hindi: 'अनुभव / तजुर्बा', hindiRoman: 'anubhav tajurba', meaning: 'Knowledge gained by doing something.', example: 'He has five years of experience.', exampleHi: 'उसके पास पाँच साल का अनुभव है।', synonyms: ['Practice', 'Skill'] },
  { id: 'd-success', word: 'Success', phonetic: '/səkˈses/', sayItLike: 'suk-SES', type: 'Noun', hindi: 'सफलता / कामयाबी', hindiRoman: 'safalta kamyabi', meaning: 'Achieving what you wanted.', example: 'Hard work is the key to success.', exampleHi: 'मेहनत ही सफलता की कुंजी है।', synonyms: ['Achievement', 'Victory'] },
  { id: 'd-failure', word: 'Failure', phonetic: '/ˈfeɪljər/', sayItLike: 'FAYL-yer', type: 'Noun', hindi: 'असफलता / नाकामी', hindiRoman: 'asafalta naakami', meaning: 'Not achieving what you tried to do.', example: 'Failure teaches us important lessons.', exampleHi: 'असफलता हमें ज़रूरी सबक सिखाती है।', synonyms: ['Defeat', 'Setback'] },
  { id: 'd-patience', word: 'Patience', phonetic: '/ˈpeɪʃəns/', sayItLike: 'PAY-shens', type: 'Noun', hindi: 'धैर्य / सब्र', hindiRoman: 'dhairya sabr', meaning: 'The ability to wait calmly.', example: 'Learning a language needs patience.', exampleHi: 'भाषा सीखने में धैर्य चाहिए।', synonyms: ['Tolerance', 'Calmness'] },
  { id: 'd-honest', word: 'Honest', phonetic: '/ˈɒnɪst/', sayItLike: 'ON-ist (silent h)', type: 'Adjective', hindi: 'ईमानदार', hindiRoman: 'imaandaar', meaning: 'Telling the truth; not cheating.', example: 'He is an honest shopkeeper.', exampleHi: 'वह एक ईमानदार दुकानदार है।', synonyms: ['Truthful', 'Sincere'] },
  { id: 'd-knowledge', word: 'Knowledge', phonetic: '/ˈnɒlɪdʒ/', sayItLike: 'NOL-ij (silent k)', type: 'Noun', hindi: 'ज्ञान', hindiRoman: 'gyaan', meaning: 'Information and understanding you have.', example: 'Books increase our knowledge.', exampleHi: 'किताबें हमारा ज्ञान बढ़ाती हैं।', synonyms: ['Wisdom', 'Learning'] },
  { id: 'd-receipt', word: 'Receipt', phonetic: '/rɪˈsiːt/', sayItLike: 'ri-SEET (silent p)', type: 'Noun', hindi: 'रसीद', hindiRoman: 'raseed', meaning: 'A paper that shows you have paid.', example: 'Please give me the receipt.', exampleHi: 'कृपया मुझे रसीद दीजिए।', synonyms: ['Bill', 'Invoice'] },
  { id: 'd-island', word: 'Island', phonetic: '/ˈaɪlənd/', sayItLike: 'EYE-lund (silent s)', type: 'Noun', hindi: 'द्वीप / टापू', hindiRoman: 'dweep taapu', meaning: 'Land with water all around it.', example: 'Andaman is a group of islands.', exampleHi: 'अंडमान द्वीपों का एक समूह है।', synonyms: ['Isle'] },
  { id: 'd-schedule', word: 'Schedule', phonetic: '/ˈʃedjuːl/ (UK), /ˈskedʒuːl/ (US)', sayItLike: 'SHED-yool (UK) · SKED-jool (US)', type: 'Noun', hindi: 'समय-सारणी / कार्यक्रम', hindiRoman: 'samay saarni karyakram', meaning: 'A plan of times when things will happen.', example: 'What is your schedule for tomorrow?', exampleHi: 'कल का तुम्हारा कार्यक्रम क्या है?', synonyms: ['Timetable', 'Plan'] },
  { id: 'd-comfortable', word: 'Comfortable', phonetic: '/ˈkʌmftəbəl/', sayItLike: 'KUMF-tuh-bul', type: 'Adjective', hindi: 'आरामदायक', hindiRoman: 'aaramdayak', meaning: 'Pleasant and relaxing to use or be in.', example: 'This chair is very comfortable.', exampleHi: 'यह कुर्सी बहुत आरामदायक है।', synonyms: ['Cosy', 'Relaxing'] },
  { id: 'd-vegetable', word: 'Vegetable', phonetic: '/ˈvedʒtəbəl/', sayItLike: 'VEJ-tuh-bul', type: 'Noun', hindi: 'सब्ज़ी', hindiRoman: 'sabzi', meaning: 'A plant or part of a plant eaten as food.', example: 'Eat green vegetables every day.', exampleHi: 'रोज़ हरी सब्ज़ियाँ खाओ।', synonyms: ['Greens'] },
  { id: 'd-weather', word: 'Weather', phonetic: '/ˈweðər/', sayItLike: 'WEH-ther', type: 'Noun', hindi: 'मौसम', hindiRoman: 'mausam', meaning: 'How hot, cold, rainy or sunny it is.', example: 'The weather is lovely today.', exampleHi: 'आज मौसम बहुत अच्छा है।', synonyms: ['Climate'] },
  { id: 'd-journey', word: 'Journey', phonetic: '/ˈdʒɜːrni/', sayItLike: 'JUR-nee', type: 'Noun', hindi: 'यात्रा / सफ़र', hindiRoman: 'yatra safar', meaning: 'Travelling from one place to another.', example: 'Have a safe journey!', exampleHi: 'आपकी यात्रा सुरक्षित हो!', synonyms: ['Trip', 'Travel'] },
  { id: 'd-ticket', word: 'Ticket', phonetic: '/ˈtɪkɪt/', sayItLike: 'TIK-it', type: 'Noun', hindi: 'टिकट', hindiRoman: 'ticket', meaning: 'A paper or pass that lets you travel or enter.', example: 'I booked a train ticket online.', exampleHi: 'मैंने ऑनलाइन ट्रेन का टिकट बुक किया।', synonyms: ['Pass'] },
  { id: 'd-left', word: 'Left', phonetic: '/left/', sayItLike: 'LEFT', type: 'Noun / Adverb', hindi: 'बायाँ / बाएँ', hindiRoman: 'baayan baayen', meaning: 'The side opposite to right.', example: 'Turn left at the signal.', exampleHi: 'सिग्नल पर बाएँ मुड़िए।', synonyms: [] },
  { id: 'd-right', word: 'Right', phonetic: '/raɪt/', sayItLike: 'RYTE', type: 'Noun / Adjective', hindi: 'दायाँ / सही', hindiRoman: 'daayan sahi', meaning: 'The side opposite to left; also means correct.', example: 'Your answer is right.', exampleHi: 'तुम्हारा जवाब सही है।', synonyms: ['Correct'] },
  { id: 'd-early', word: 'Early', phonetic: '/ˈɜːrli/', sayItLike: 'UR-lee', type: 'Adjective / Adverb', hindi: 'जल्दी', hindiRoman: 'jaldi', meaning: 'Before the usual or expected time.', example: 'I wake up early every morning.', exampleHi: 'मैं हर सुबह जल्दी उठता हूँ।', synonyms: ['Soon'] },
  { id: 'd-late', word: 'Late', phonetic: '/leɪt/', sayItLike: 'LAYT', type: 'Adjective / Adverb', hindi: 'देर से / देरी', hindiRoman: 'der se deri', meaning: 'After the usual or expected time.', example: 'The train is late again.', exampleHi: 'ट्रेन फिर से देर से है।', synonyms: ['Delayed'] },
  { id: 'd-because', word: 'Because', phonetic: '/bɪˈkɒz/', sayItLike: 'bi-KOZ', type: 'Conjunction', hindi: 'क्योंकि', hindiRoman: 'kyonki', meaning: 'Used to give a reason.', example: 'I stayed home because I was sick.', exampleHi: 'मैं घर पर रहा क्योंकि मैं बीमार था।', synonyms: ['Since', 'As'] },
  { id: 'd-although', word: 'Although', phonetic: '/ɔːlˈðoʊ/', sayItLike: 'awl-THOH', type: 'Conjunction', hindi: 'हालाँकि', hindiRoman: 'halanki', meaning: 'Used to show a contrast.', example: 'Although it was raining, we went out.', exampleHi: 'हालाँकि बारिश हो रही थी, हम बाहर गए।', synonyms: ['Though', 'Even though'] },
  { id: 'd-however', word: 'However', phonetic: '/haʊˈevər/', sayItLike: 'how-EV-er', type: 'Adverb', hindi: 'फिर भी / लेकिन', hindiRoman: 'phir bhi lekin', meaning: 'Used to add a contrasting idea.', example: 'The test was hard. However, I passed.', exampleHi: 'परीक्षा कठिन थी। फिर भी, मैं पास हो गया।', synonyms: ['But', 'Nevertheless'] },
  { id: 'd-actually', word: 'Actually', phonetic: '/ˈæktʃuəli/', sayItLike: 'AK-choo-uh-lee', type: 'Adverb', hindi: 'असल में / दरअसल', hindiRoman: 'asal mein darasal', meaning: 'Used to say what is really true.', example: 'Actually, I have never been to Mumbai.', exampleHi: 'दरअसल, मैं कभी मुंबई नहीं गया।', synonyms: ['Really', 'In fact'] },
  { id: 'd-probably', word: 'Probably', phonetic: '/ˈprɒbəbli/', sayItLike: 'PROB-uh-blee', type: 'Adverb', hindi: 'शायद / संभवतः', hindiRoman: 'shayad sambhavtah', meaning: 'Almost certainly; likely.', example: 'It will probably rain today.', exampleHi: 'आज शायद बारिश होगी।', synonyms: ['Likely', 'Perhaps'] },
  { id: 'd-gratitude', word: 'Gratitude', phonetic: '/ˈɡrætɪtjuːd/', sayItLike: 'GRAT-i-tyood', type: 'Noun', hindi: 'कृतज्ञता / आभार', hindiRoman: 'kritagyata aabhaar', meaning: 'The feeling of being thankful.', example: 'I want to express my gratitude to my parents.', exampleHi: 'मैं अपने माता-पिता के प्रति आभार व्यक्त करना चाहता हूँ।', synonyms: ['Thankfulness', 'Appreciation'] },
  { id: 'd-curious', word: 'Curious', phonetic: '/ˈkjʊəriəs/', sayItLike: 'KYOOR-ee-us', type: 'Adjective', hindi: 'जिज्ञासु / उत्सुक', hindiRoman: 'jigyasu utsuk', meaning: 'Wanting to know or learn something.', example: 'Children are naturally curious.', exampleHi: 'बच्चे स्वभाव से जिज्ञासु होते हैं।', synonyms: ['Inquisitive', 'Interested'] },
  { id: 'd-responsibility', word: 'Responsibility', phonetic: '/rɪˌspɒnsəˈbɪləti/', sayItLike: 'ri-spon-suh-BIL-i-tee', type: 'Noun', hindi: 'ज़िम्मेदारी', hindiRoman: 'zimmedaari', meaning: 'A duty to take care of something.', example: 'It is our responsibility to keep the city clean.', exampleHi: 'शहर को साफ़ रखना हमारी ज़िम्मेदारी है।', synonyms: ['Duty', 'Obligation'] },
  { id: 'd-environment', word: 'Environment', phonetic: '/ɪnˈvaɪrənmənt/', sayItLike: 'in-VY-ren-ment', type: 'Noun', hindi: 'पर्यावरण', hindiRoman: 'paryavaran', meaning: 'The natural world around us.', example: 'We must protect the environment.', exampleHi: 'हमें पर्यावरण की रक्षा करनी चाहिए।', synonyms: ['Nature', 'Surroundings'] },
];

export const translationSentences: TranslationSentence[] = [
  { id: 's1', english: 'What is your name?', hindi: 'आपका नाम क्या है?', hindiRoman: 'aapka naam kya hai', topic: 'Introduction' },
  { id: 's2', english: 'My name is Riya.', hindi: 'मेरा नाम रिया है।', hindiRoman: 'mera naam riya hai', topic: 'Introduction' },
  { id: 's3', english: 'Where are you from?', hindi: 'आप कहाँ से हैं?', hindiRoman: 'aap kahan se hain', topic: 'Introduction' },
  { id: 's4', english: 'I am from Lucknow.', hindi: 'मैं लखनऊ से हूँ।', hindiRoman: 'main lucknow se hoon', topic: 'Introduction' },
  { id: 's5', english: 'Nice to meet you.', hindi: 'आपसे मिलकर अच्छा लगा।', hindiRoman: 'aapse milkar accha laga', topic: 'Introduction' },
  { id: 's6', english: 'How are you?', hindi: 'आप कैसे हैं?', hindiRoman: 'aap kaise hain', topic: 'Greetings' },
  { id: 's7', english: 'I am fine, thank you.', hindi: 'मैं ठीक हूँ, धन्यवाद।', hindiRoman: 'main theek hoon dhanyavaad', topic: 'Greetings' },
  { id: 's8', english: 'Good morning!', hindi: 'सुप्रभात!', hindiRoman: 'suprabhat good morning', topic: 'Greetings' },
  { id: 's9', english: 'See you tomorrow.', hindi: 'कल मिलते हैं।', hindiRoman: 'kal milte hain', topic: 'Greetings' },
  { id: 's10', english: 'Take care.', hindi: 'अपना ध्यान रखना।', hindiRoman: 'apna dhyan rakhna', topic: 'Greetings' },
  { id: 's11', english: 'I don’t understand.', hindi: 'मुझे समझ नहीं आया।', hindiRoman: 'mujhe samajh nahi aaya', topic: 'Classroom' },
  { id: 's12', english: 'Please speak slowly.', hindi: 'कृपया धीरे बोलिए।', hindiRoman: 'kripya dheere boliye', topic: 'Classroom' },
  { id: 's13', english: 'What does this word mean?', hindi: 'इस शब्द का क्या मतलब है?', hindiRoman: 'is shabd ka kya matlab hai', topic: 'Classroom' },
  { id: 's14', english: 'How do you say this in English?', hindi: 'इसे अंग्रेज़ी में कैसे कहते हैं?', hindiRoman: 'ise angrezi mein kaise kehte hain', topic: 'Classroom' },
  { id: 's15', english: 'Can I ask a question?', hindi: 'क्या मैं एक सवाल पूछ सकता हूँ?', hindiRoman: 'kya main ek sawaal pooch sakta hoon', topic: 'Classroom' },
  { id: 's16', english: 'I have finished my homework.', hindi: 'मैंने अपना होमवर्क पूरा कर लिया है।', hindiRoman: 'maine apna homework poora kar liya hai', topic: 'Classroom' },
  { id: 's17', english: 'How much does this cost?', hindi: 'यह कितने का है?', hindiRoman: 'yeh kitne ka hai', topic: 'Shopping' },
  { id: 's18', english: 'Can you give me a discount?', hindi: 'क्या आप कुछ छूट दे सकते हैं?', hindiRoman: 'kya aap kuch chhoot de sakte hain', topic: 'Shopping' },
  { id: 's19', english: 'Do you have this in a bigger size?', hindi: 'क्या यह बड़े साइज़ में है?', hindiRoman: 'kya yeh bade size mein hai', topic: 'Shopping' },
  { id: 's20', english: 'I will pay by UPI.', hindi: 'मैं UPI से पेमेंट करूँगा।', hindiRoman: 'main upi se payment karunga', topic: 'Shopping' },
  { id: 's21', english: 'Where is the railway station?', hindi: 'रेलवे स्टेशन कहाँ है?', hindiRoman: 'railway station kahan hai', topic: 'Travel' },
  { id: 's22', english: 'How far is it from here?', hindi: 'यहाँ से कितनी दूर है?', hindiRoman: 'yahan se kitni door hai', topic: 'Travel' },
  { id: 's23', english: 'Please stop here.', hindi: 'कृपया यहाँ रोकिए।', hindiRoman: 'kripya yahan rokiye', topic: 'Travel' },
  { id: 's24', english: 'When does the next bus come?', hindi: 'अगली बस कब आएगी?', hindiRoman: 'agli bus kab aayegi', topic: 'Travel' },
  { id: 's25', english: 'I am lost. Can you help me?', hindi: 'मैं रास्ता भटक गया हूँ। क्या आप मेरी मदद कर सकते हैं?', hindiRoman: 'main raasta bhatak gaya hoon kya aap meri madad kar sakte hain', topic: 'Travel' },
  { id: 's26', english: 'I am not feeling well.', hindi: 'मेरी तबीयत ठीक नहीं है।', hindiRoman: 'meri tabiyat theek nahi hai', topic: 'Health' },
  { id: 's27', english: 'I have a headache.', hindi: 'मेरे सिर में दर्द है।', hindiRoman: 'mere sir mein dard hai', topic: 'Health' },
  { id: 's28', english: 'Is there a pharmacy nearby?', hindi: 'क्या पास में कोई दवा की दुकान है?', hindiRoman: 'kya paas mein koi dawa ki dukaan hai', topic: 'Health' },
  { id: 's29', english: 'I am hungry.', hindi: 'मुझे भूख लगी है।', hindiRoman: 'mujhe bhookh lagi hai', topic: 'Food' },
  { id: 's30', english: 'The food is very tasty.', hindi: 'खाना बहुत स्वादिष्ट है।', hindiRoman: 'khana bahut swadisht hai', topic: 'Food' },
  { id: 's31', english: 'Can I see the menu, please?', hindi: 'क्या मैं मेन्यू देख सकता हूँ?', hindiRoman: 'kya main menu dekh sakta hoon', topic: 'Food' },
  { id: 's32', english: 'Please bring the bill.', hindi: 'कृपया बिल ले आइए।', hindiRoman: 'kripya bill le aaiye', topic: 'Food' },
  { id: 's33', english: 'I am working on it.', hindi: 'मैं इस पर काम कर रहा हूँ।', hindiRoman: 'main is par kaam kar raha hoon', topic: 'Office' },
  { id: 's34', english: 'Could you send me the details?', hindi: 'क्या आप मुझे जानकारी भेज सकते हैं?', hindiRoman: 'kya aap mujhe jaankari bhej sakte hain', topic: 'Office' },
  { id: 's35', english: 'The meeting has been postponed.', hindi: 'मीटिंग आगे बढ़ा दी गई है।', hindiRoman: 'meeting aage badha di gayi hai', topic: 'Office' },
  { id: 's36', english: 'I will get back to you soon.', hindi: 'मैं जल्द ही आपको जवाब दूँगा।', hindiRoman: 'main jald hi aapko jawab doonga', topic: 'Office' },
  { id: 's37', english: 'Don’t worry, everything will be fine.', hindi: 'चिंता मत करो, सब ठीक हो जाएगा।', hindiRoman: 'chinta mat karo sab theek ho jayega', topic: 'Daily life' },
  { id: 's38', english: 'I am getting late.', hindi: 'मुझे देर हो रही है।', hindiRoman: 'mujhe der ho rahi hai', topic: 'Daily life' },
  { id: 's39', english: 'What are you doing these days?', hindi: 'आजकल तुम क्या कर रहे हो?', hindiRoman: 'aajkal tum kya kar rahe ho', topic: 'Daily life' },
  { id: 's40', english: 'It doesn’t matter.', hindi: 'कोई बात नहीं।', hindiRoman: 'koi baat nahi', topic: 'Daily life' },
  { id: 's41', english: 'I miss you.', hindi: 'मुझे तुम्हारी याद आती है।', hindiRoman: 'mujhe tumhari yaad aati hai', topic: 'Daily life' },
  { id: 's42', english: 'Practice makes a man perfect.', hindi: 'अभ्यास से ही इंसान निपुण बनता है।', hindiRoman: 'abhyas se hi insaan nipun banta hai', topic: 'Proverbs' },
  { id: 's43', english: 'Where there is a will, there is a way.', hindi: 'जहाँ चाह, वहाँ राह।', hindiRoman: 'jahan chah wahan raah', topic: 'Proverbs' },
  { id: 's44', english: 'Slow and steady wins the race.', hindi: 'धीरे-धीरे और लगातार चलने वाला ही जीतता है।', hindiRoman: 'dheere dheere aur lagataar chalne wala hi jeetta hai', topic: 'Proverbs' },
];
