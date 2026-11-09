const translations = {
  en: {
    navHome: "Home", navDiagnose: "AI Diagnosis", navGuide: "Disease guide", headerCta: "Try diagnosis",
    heroEyebrow: "STUDENT PROJECT · 2025–26", heroTitle: 'Explainable AI for<br><span>citrus disease diagnosis.</span>',
    heroDescription: "A bilingual explainable-AI project for citrus health. Upload a leaf or orange-fruit photo for a model-backed prediction, with clear limits on what each image classifier can recognize.",
    heroButton: "Explore diagnosis", aboutProject: "About this project", heroNote: "Built to make plant-health information easier to understand.",
    healthyCitrus: "Healthy citrus", clearAnswers: "Clear answers, in two languages", illustrationCaption: "KNOW YOUR CITRUS",
    projectEyebrow: "THE PEOPLE BEHIND IT", meetTeam: "Meet the project team", teamIntro: "A student project exploring how AI can make crop-health decisions more transparent and accessible.",
    projectMember: "PROJECT MEMBER", prnLabel: "PRN", prnPlaceholder: "To be added", memberNote: "Vidhi and Shubh are the project members behind CitrusCare.",
    overviewEyebrow: "THE IDEA", projectTitle: "Explainable AI for<br>Citrus Disease Diagnosis",
    overviewCopy: "Citrus fruit diseases can affect quality, yield, and a grower's livelihood. This project presents an approachable way to explore image-based diagnosis alongside the reasons, visible symptoms, potential impact, and prevention guidance behind each result.",
    languagesAvailable: "languages<br>English + Hindi", diseasesCovered: "image classes<br>leaf + fruit models",
    diagnoseEyebrow: "IMAGE-BASED EXPLORATION", diagnoseTitle: "Take a closer look.", diagnoseDescription: "Choose whether your photo shows a citrus leaf or fruit. Each image type is sent to its own classifier.",
    demoMode: "ORANGE FRUIT + LEAF MODELS", photoTypeLabel: "WHAT ARE YOU PHOTOGRAPHING?", fruitSurface: "Orange fruit surface", citrusLeaf: "Citrus leaf",
    fruitSpeciesLabel: "WHICH CITRUS FRUIT?", chooseFruitSpecies: "Choose a fruit type",
    orangeCitrus: "Sweet orange (Citrus sinensis)", orangeImageScope: "Sweet orange (a citrus fruit)", lemonCitrus: "Lemon", limeCitrus: "Lime",
    mandarinCitrus: "Mandarin / tangerine", grapefruitCitrus: "Grapefruit", otherCitrus: "Other citrus fruit",
    fruitModelScope: "Orange is a citrus fruit. Select the species yourself: the model does not verify fruit type and was trained only on sweet oranges; other citrus types are unsupported.",
    chooseFruitFirst: "Select the citrus fruit type first.", unsupportedFruit: "The fruit model only supports oranges (Citrus sinensis). This photo was not analyzed.",
    leafModelReady: "Leaf model available; it loads when needed.", fruitModelReady: "Fruit model available; it loads when needed.", checkingModel: "Checking the diagnosis service…",
    modelUnavailable: "Local AI model is offline. Start the diagnosis API using the README instructions.",
    uploadLabel: "ADD A PHOTO", diagnosePhoto: "Diagnose this photo", dropPhoto: "Drop your photo here", orBrowse: "or browse files from your device", chooseImage: "Choose an image",
    fileHint: "JPG, PNG or WEBP · max 10 MB", photoReady: "PHOTO READY", or: "OR", useCamera: "Take a photo with your camera",
    privacyNote: "Images are sent only to the API running on this computer.", howItWorks: "HOW IT WORKS", analysisHeading: "A result should come with a reason.",
    analysisCopy: "Separate image classifiers handle leaves and fruit. Each returns its top class scores. These predictions are clues to investigate, not proof or a lab diagnosis.",
    stepOne: "Add a citrus photo", stepTwo: "Compare with visible signs", stepThree: "Explore guidance in your language",
    modelNotice: "Leaf and orange-fruit images use different trained models. Fruit supports three classes only; predictions on other citrus varieties or field conditions may be less reliable. Review the cited signs; they are not image-region explanations.",
    sampleResult: "REFERENCE GUIDE · NOT PHOTO DIAGNOSIS", illustrativeOnly: "REFERENCE ONLY · NOT A PHOTO DIAGNOSIS",
    aiResult: "MODEL PREDICTION", aiResultStamp: "TOP CLASS · NOT A LAB DIAGNOSIS",
    uncertainResult: "LOW MODEL SCORE · RETAKE PHOTO", confidenceLabel: "Model score (not calibrated)",
    alternativesLabel: "Other model classes", notCitrusDisease: "The selected model class is not a citrus disease.",
    fruitUnavailable: "Fruit-surface model is unavailable. This image was not diagnosed.",
    modelFailed: "The image could not be analyzed. Check that the local diagnosis API is running, then try again.",
    analyzingPhoto: "Analyzing the citrus photo…", healthyAdvice: "No treatment is indicated by the model's healthy-leaf class.",
    expertDisclaimer: "Guidance is general and educational. Similar symptoms can have different causes; consult a local agricultural extension officer or plant pathologist before treatment.",
    guideEyebrow: "LEARN BEFORE YOU TREAT", guideTitle: "Get to know the signs.", guideDescription: "Reference information for four citrus diseases. These cards are educational and do not influence photo predictions.",
    cankerShort: "Raised, corky lesions with yellow halos", greeningShort: "Lopsided fruit and blotchy leaf yellowing",
    blackspotShort: "Dark fruit spots that can affect market quality", melanoseShort: "Small, rough, dark-brown rind specks",
    diseaseCanker: "Citrus canker", diseaseGreening: "Citrus greening (HLB)", diseaseBlackspot: "Citrus black spot", diseaseMelanose: "Citrus melanose",
    closingEyebrow: "BETTER KNOWLEDGE, BETTER CARE", closingTitle: "Curious about a citrus fruit?",
    closingCopy: "Start with a photo, then explore the signs and sample guidance.", closingButton: "Explore the demo",
    footerProject: "A student project on explainable AI for citrus disease diagnosis.",
    cameraLabel: "CAMERA", cameraTitle: "Take a citrus photo",
    cameraError: "Camera access is unavailable. Check your browser permission or choose an image instead.",
    cancel: "Cancel", capturePhoto: "Capture photo",
    disease: "Disease", causes: "Why it happens", symptoms: "What to look for", damage: "Possible damage",
    treatment: "Management & treatment", prevention: "How to prevent it", explainability: "Visible clues to review",
    photoTooLarge: "Please choose an image smaller than 10 MB.", invalidImage: "Please choose a valid image file.",
    selectPhoto: "Choose a citrus photo first.", cameraUnsupported: "Camera capture is not supported in this browser.",
    leafModelCredit: "Leaf model:", fruitModelCredit: "Fruit model:",
    permissionError: "Camera could not be opened. Check browser permission or choose an image instead.",
    readingPhoto: "Photo ready. Choose the correct photo type, then diagnose it.", savedPhoto: "Photo captured. Choose the correct photo type, then diagnose it."
  },
  hi: {
    navHome: "होम", navDiagnose: "AI जांच", navGuide: "रोग मार्गदर्शिका", headerCta: "जांच देखें",
    heroEyebrow: "छात्र परियोजना · 2025–26", heroTitle: 'खट्टे फलों के रोग निदान के लिए<br><span>व्याख्यात्मक AI।</span>',
    heroDescription: "खट्टे फलों के स्वास्थ्य पर द्विभाषी व्याख्या योग्य AI परियोजना। पत्ती या संतरे के फल की फोटो अपलोड करें और हर इमेज क्लासिफायर की सीमाएं स्पष्ट रूप से देखें।",
    heroButton: "रोग जांच देखें", aboutProject: "परियोजना के बारे में", heroNote: "पौधों के स्वास्थ्य की जानकारी को आसान बनाने की पहल।",
    healthyCitrus: "स्वस्थ खट्टा फल", clearAnswers: "दो भाषाओं में स्पष्ट जानकारी", illustrationCaption: "अपने खट्टे फल को जानें",
    projectEyebrow: "इसके पीछे की टीम", meetTeam: "परियोजना टीम से मिलें", teamIntro: "यह छात्र परियोजना देखती है कि AI फसल के स्वास्थ्य से जुड़े निर्णयों को अधिक पारदर्शी और सुलभ कैसे बना सकता है।",
    projectMember: "परियोजना सदस्य", prnLabel: "PRN", prnPlaceholder: "बाद में जोड़ें", memberNote: "Vidhi और Shubh CitrusCare परियोजना के सदस्य हैं।",
    overviewEyebrow: "परियोजना का विचार", projectTitle: "खट्टे फलों के रोग निदान के लिए<br>व्याख्या योग्य AI",
    overviewCopy: "खट्टे फलों के रोग गुणवत्ता, उपज और किसानों की आजीविका को प्रभावित कर सकते हैं। इस परियोजना में छवि-आधारित निदान के साथ उसके कारण, दिखाई देने वाले लक्षण, संभावित नुकसान और रोकथाम की जानकारी सरल रूप में समझाई गई है।",
    languagesAvailable: "भाषाएं<br>अंग्रेज़ी + हिंदी", diseasesCovered: "इमेज वर्ग<br>पत्ती + फल मॉडल",
    diagnoseEyebrow: "छवि के आधार पर जानकारी", diagnoseTitle: "थोड़ा और करीब से देखें।", diagnoseDescription: "चुनें कि फोटो में खट्टे फल की पत्ती है या फल। दोनों के लिए अलग क्लासिफायर उपयोग होते हैं।",
    demoMode: "संतरे के फल + पत्ती मॉडल", photoTypeLabel: "आप किसकी फोटो ले रहे हैं?", fruitSurface: "संतरे के फल की सतह", citrusLeaf: "खट्टे फल की पत्ती",
    fruitSpeciesLabel: "कौन-सा खट्टा फल?", chooseFruitSpecies: "फल का प्रकार चुनें",
    orangeCitrus: "मीठा संतरा (Citrus sinensis)", orangeImageScope: "मीठा संतरा (एक सिट्रस फल)", lemonCitrus: "नींबू", limeCitrus: "लाइम", mandarinCitrus: "मंदारिन / किन्नू",
    grapefruitCitrus: "ग्रेपफ्रूट", otherCitrus: "अन्य खट्टा फल",
    fruitModelScope: "संतरा भी खट्टा फल (सिट्रस) है। फल का प्रकार आपको चुनना होगा: मॉडल फल की प्रजाति की पुष्टि नहीं करता और केवल मीठे संतरे पर प्रशिक्षित है; अन्य सिट्रस फल समर्थित नहीं हैं।",
    chooseFruitFirst: "पहले खट्टे फल का प्रकार चुनें।", unsupportedFruit: "फल मॉडल केवल संतरे (Citrus sinensis) के लिए है। इस फोटो का विश्लेषण नहीं किया गया।",
    leafModelReady: "पत्ती मॉडल उपलब्ध है; जरूरत पर लोड होगा।", fruitModelReady: "फल मॉडल उपलब्ध है; जरूरत पर लोड होगा।", checkingModel: "निदान सेवा जांच रहे हैं…",
    modelUnavailable: "स्थानीय AI मॉडल बंद है। README में दिए निर्देश से diagnosis API शुरू करें।",
    uploadLabel: "फोटो जोड़ें", diagnosePhoto: "इस फोटो की जांच करें", dropPhoto: "अपनी फोटो यहां छोड़ें", orBrowse: "या अपने डिवाइस से फाइल चुनें", chooseImage: "फोटो चुनें",
    fileHint: "JPG, PNG या WEBP · अधिकतम 10 MB", photoReady: "फोटो तैयार", or: "या", useCamera: "कैमरे से फोटो लें",
    privacyNote: "फोटो इसी कंप्यूटर पर चल रही API को भेजी जाती है।", howItWorks: "यह कैसे काम करता है", analysisHeading: "नतीजे के साथ उसका कारण भी समझें।",
    analysisCopy: "पत्तियों और फलों के लिए अलग इमेज क्लासिफायर हैं। हर मॉडल अपने संभावित वर्गों के स्कोर देता है। अनुमान जांचने का संकेत हैं, प्रमाण या लैब निदान नहीं।",
    stepOne: "खट्टे फल की फोटो जोड़ें", stepTwo: "लक्षणों से मिलान करें", stepThree: "अपनी भाषा में मार्गदर्शन पढ़ें",
    modelNotice: "पत्ती और संतरे के फल की फोटो के लिए अलग प्रशिक्षित मॉडल उपयोग होते हैं। फल मॉडल केवल तीन वर्गों को पहचानता है; अन्य किस्मों या खेत की परिस्थितियों में अनुमान कम विश्वसनीय हो सकता है। नीचे दिए लक्षण देखने की सलाह हैं, फोटो के हिस्सों की AI व्याख्या नहीं।",
    sampleResult: "संदर्भ मार्गदर्शिका · फोटो का निदान नहीं", illustrativeOnly: "केवल संदर्भ · फोटो का निदान नहीं",
    aiResult: "मॉडल का अनुमान", aiResultStamp: "मुख्य वर्ग · लैब निदान नहीं",
    uncertainResult: "मॉडल स्कोर कम · दोबारा फोटो लें", confidenceLabel: "मॉडल स्कोर (कैलिब्रेटेड भरोसा नहीं)",
    alternativesLabel: "मॉडल के अन्य वर्ग", notCitrusDisease: "चुना गया मॉडल वर्ग खट्टे फल का रोग नहीं है।",
    fruitUnavailable: "फल के छिलके का मॉडल उपलब्ध नहीं है। इस फोटो का निदान नहीं किया गया।",
    modelFailed: "फोटो का विश्लेषण नहीं हो सका। स्थानीय diagnosis API चल रही है या नहीं जांचें, फिर दोबारा कोशिश करें।",
    analyzingPhoto: "खट्टे फल की फोटो जांच रहे हैं…", healthyAdvice: "मॉडल के स्वस्थ-पत्ती वर्ग के अनुसार उपचार की जरूरत नहीं बताई गई है।",
    expertDisclaimer: "यह सामान्य शैक्षिक जानकारी है। एक जैसे लक्षणों के कारण अलग-अलग हो सकते हैं; उपचार से पहले स्थानीय कृषि अधिकारी या पादप रोग विशेषज्ञ से सलाह लें।",
    guideEyebrow: "उपचार से पहले जानें", guideTitle: "लक्षणों को पहचानें।", guideDescription: "खट्टे फलों के चार रोगों की संदर्भ जानकारी। ये शैक्षिक कार्ड फोटो के अनुमान को प्रभावित नहीं करते।",
    cankerShort: "पीले घेरे वाले उभरे, खुरदरे धब्बे", greeningShort: "टेढ़ा-मेढ़ा फल और पत्तियों पर पीली चित्तियां",
    blackspotShort: "फल पर गहरे धब्बे, गुणवत्ता प्रभावित हो सकती है", melanoseShort: "छिलके पर छोटे, खुरदरे, गहरे भूरे धब्बे",
    diseaseCanker: "सिट्रस कैंकर", diseaseGreening: "सिट्रस ग्रीनिंग (HLB)", diseaseBlackspot: "सिट्रस ब्लैक स्पॉट", diseaseMelanose: "सिट्रस मेलानोज़",
    closingEyebrow: "बेहतर जानकारी, बेहतर देखभाल", closingTitle: "खट्टे फल के बारे में जानना चाहते हैं?",
    closingCopy: "फोटो से शुरुआत करें, फिर संकेत और उदाहरण मार्गदर्शन देखें।", closingButton: "डेमो देखें",
    footerProject: "खट्टे फलों के रोग निदान के लिए व्याख्या योग्य AI पर छात्र परियोजना।",
    cameraLabel: "कैमरा", cameraTitle: "खट्टे फल की फोटो लें",
    cameraError: "कैमरे का उपयोग उपलब्ध नहीं है। ब्राउज़र अनुमति जांचें या फोटो चुनें।",
    cancel: "रद्द करें", capturePhoto: "फोटो लें",
    disease: "रोग", causes: "यह क्यों होता है", symptoms: "किन लक्षणों पर ध्यान दें", damage: "संभावित नुकसान",
    treatment: "प्रबंधन और उपचार", prevention: "रोकथाम कैसे करें", explainability: "देखने योग्य संकेत",
    photoTooLarge: "कृपया 10 MB से छोटी फोटो चुनें।", invalidImage: "कृपया सही इमेज फाइल चुनें।",
    selectPhoto: "पहले खट्टे फल की फोटो चुनें।", cameraUnsupported: "इस ब्राउज़र में कैमरा सुविधा उपलब्ध नहीं है।",
    leafModelCredit: "पत्ती मॉडल:", fruitModelCredit: "फल मॉडल:",
    permissionError: "कैमरा नहीं खुल सका। ब्राउज़र अनुमति जांचें या फोटो चुनें।",
    readingPhoto: "फोटो तैयार है। फोटो का सही प्रकार चुनकर जांचें।", savedPhoto: "फोटो ली गई। फोटो का सही प्रकार चुनकर जांचें।"
  }
};

const diseaseData = {
  canker: {
    en: {
      name: "Citrus canker",
      summary: "A bacterial disease caused by Xanthomonas citri subsp. citri. It commonly affects leaves, twigs, and fruit rind.",
      causes: "Bacteria spread through infected planting material and can move with wind-driven rain, splashing water, tools, or handling. Warm, wet weather and wounds can favor infection.",
      symptoms: "Raised, tan-to-brown corky spots, often with a yellow halo, may appear on both sides of leaves and on fruit. Lesions can feel rough and may have a crater-like center.",
      damage: "Fruit may become blemished and less marketable. Severe outbreaks can cause leaf and fruit drop and weaken young trees; the rind lesions do not necessarily mean the inside is unsafe.",
      treatment: "There is no curative treatment for infected lesions. Follow local plant-health rules; remove and dispose of infected material only as advised. Copper-based protectants may reduce new infections when used preventively and exactly as locally labelled.",
      prevention: "Use certified disease-free nursery stock, sanitize tools, avoid working among wet trees, reduce wind exposure where practical, and follow local quarantine and orchard sanitation guidance.",
      clues: "Raised corky lesions · yellow halo · fruit and leaf surfaces"
    },
    hi: {
      name: "सिट्रस कैंकर (खट्टे फलों का कैंकर)",
      summary: "यह Xanthomonas citri subsp. citri जीवाणु से होने वाला रोग है। यह पत्तियों, टहनियों और फल के छिलके को प्रभावित कर सकता है।",
      causes: "जीवाणु संक्रमित पौध सामग्री से फैल सकते हैं। हवा के साथ बारिश, पानी के छींटे, औजार या छूने से भी फैलाव हो सकता है। गर्म और नम मौसम तथा घाव संक्रमण को बढ़ावा दे सकते हैं।",
      symptoms: "पत्तियों के दोनों ओर और फल पर उभरे हुए, भूरे-कत्थई और खुरदरे धब्बे दिख सकते हैं, जिनके चारों ओर पीला घेरा हो सकता है। बीच का हिस्सा गड्ढेनुमा भी दिख सकता है।",
      damage: "फल पर दाग पड़ने से उसका बाजार मूल्य घट सकता है। अधिक संक्रमण में पत्तियां और फल गिर सकते हैं और छोटे पेड़ कमजोर हो सकते हैं। छिलके के धब्बों का अर्थ यह जरूरी नहीं कि फल का अंदरूनी हिस्सा असुरक्षित हो।",
      treatment: "संक्रमित धब्बों को ठीक करने वाला उपचार नहीं है। स्थानीय पौध-स्वास्थ्य नियमों का पालन करें और संक्रमित हिस्सों को केवल स्थानीय सलाह के अनुसार हटाएं। कॉपर-आधारित बचाव उपचार नए संक्रमण घटा सकते हैं; लेबल और स्थानीय निर्देशों का ठीक से पालन करें।",
      prevention: "प्रमाणित रोग-मुक्त पौधे लें, औजार साफ रखें, गीले पेड़ों पर काम करने से बचें, जहां संभव हो तेज हवा से बचाव करें और बाग की सफाई तथा स्थानीय संगरोध निर्देश मानें।",
      clues: "उभरे खुरदरे धब्बे · पीला घेरा · फल और पत्ती की सतह"
    }
  },
  greening: {
    en: {
      name: "Citrus greening (HLB)",
      summary: "Huanglongbing (HLB), or citrus greening, is a serious bacterial disease associated with Candidatus Liberibacter species and spread mainly by Asian citrus psyllids and infected graft material.",
      causes: "The bacterium is transmitted by infected Asian citrus psyllids and by grafting infected plant material. The disease is not spread by casual contact between people.",
      symptoms: "Leaves may show blotchy, asymmetrical yellow mottling. Fruit can be small, lopsided, poorly colored, and may have bitter-tasting juice or seeds that abort. Symptoms can vary and resemble nutrient problems.",
      damage: "Trees can decline, produce fewer and smaller fruit, and eventually die. There is no known cure for an infected tree, and yield and fruit quality can be severely affected.",
      treatment: "Confirm suspected cases with a local diagnostic service. There is no curative treatment. Follow local reporting and removal rules for confirmed infected trees, and manage psyllids only under regional integrated pest-management guidance.",
      prevention: "Plant certified disease-free trees, monitor and manage psyllids through local programs, avoid moving uncertified citrus plants, and report suspicious symptoms to local plant-health authorities.",
      clues: "Asymmetrical blotchy leaves · lopsided fruit · uneven color"
    },
    hi: {
      name: "सिट्रस ग्रीनिंग (HLB)",
      summary: "हुआंगलोंगबिंग (HLB), जिसे सिट्रस ग्रीनिंग भी कहते हैं, Candidatus Liberibacter समूह से जुड़ा गंभीर जीवाणु रोग है। यह मुख्यतः एशियाई सिट्रस सायला कीट और संक्रमित कलम सामग्री से फैलता है।",
      causes: "संक्रमित एशियाई सिट्रस सायला कीट और संक्रमित पौधे की कलम से रोग फैल सकता है। यह सामान्य मानवीय संपर्क से नहीं फैलता।",
      symptoms: "पत्तियों पर असममित पीले धब्बे या चित्तियां दिख सकती हैं। फल छोटे, टेढ़े-मेढ़े और असमान रंग के हो सकते हैं; रस कड़वा लग सकता है या बीज विकसित नहीं हो सकते। ये लक्षण पोषक तत्वों की कमी जैसे भी दिख सकते हैं।",
      damage: "पेड़ धीरे-धीरे कमजोर हो सकता है, उपज घट सकती है और फल छोटे हो सकते हैं। संक्रमित पेड़ का ज्ञात उपचार नहीं है और अंततः पेड़ मर सकता है।",
      treatment: "संदेह होने पर स्थानीय रोग-जांच सेवा से पुष्टि कराएं। इसका उपचार उपलब्ध नहीं है। पुष्टि हुए पेड़ों के लिए स्थानीय सूचना और हटाने के नियम मानें तथा सायला कीट का प्रबंधन क्षेत्रीय एकीकृत कीट नियंत्रण सलाह से करें।",
      prevention: "प्रमाणित रोग-मुक्त पौधे लगाएं, स्थानीय कार्यक्रमों के अनुसार सायला कीट पर नजर और नियंत्रण रखें, बिना प्रमाणित खट्टे पौधों का परिवहन न करें और संदिग्ध लक्षण स्थानीय पौध-स्वास्थ्य विभाग को बताएं।",
      clues: "असममित पीली चित्तियों वाली पत्तियां · टेढ़ा फल · असमान रंग"
    }
  },
  blackspot: {
    en: {
      name: "Citrus black spot",
      summary: "A fungal disease caused by Phyllosticta citricarpa. It primarily blemishes fruit and is subject to quarantine rules in some regions.",
      causes: "The fungus survives in infected fallen leaves and produces spores during wet periods. Spores can spread in rain splash; warm, wet conditions and long fruit-development periods favor infection.",
      symptoms: "Leaves may develop blotchy lesions; fruit can develop hard, dark, round spots, sometimes with a gray center or reddish-brown margin. Symptoms vary with the organ and infection stage.",
      damage: "Visible blemishes reduce fresh-market value. In severe cases, fruit can drop before harvest. The disease mainly affects the rind and does not by itself mean the fruit is unsafe to eat.",
      treatment: "There is no way to remove established fruit lesions. Confirm diagnosis through local experts, follow quarantine rules, and use only locally registered fungicides at the labelled timing and rate.",
      prevention: "Maintain orchard sanitation, remove or manage infected leaf litter as locally recommended, use healthy nursery stock, and follow local monitoring and fungicide guidance, especially in wet weather.",
      clues: "Dark round rind spots · gray centers · reddish margins"
    },
    hi: {
      name: "सिट्रस ब्लैक स्पॉट",
      summary: "यह Phyllosticta citricarpa नामक फफूंद से होने वाला रोग है। यह मुख्यतः फल पर दाग लगाता है और कुछ क्षेत्रों में संगरोध नियम लागू हो सकते हैं।",
      causes: "फफूंद संक्रमित गिरी हुई पत्तियों में रह सकती है और नम मौसम में बीजाणु बनाती है। बारिश के छींटों से फैलाव हो सकता है; गर्म और नम परिस्थितियां संक्रमण को बढ़ावा देती हैं।",
      symptoms: "पत्तियों पर चित्तीदार निशान हो सकते हैं; फल पर कठोर, गोल और गहरे धब्बे दिख सकते हैं, कभी-कभी बीच में धूसर रंग या किनारे पर लाल-भूरा घेरा होता है। लक्षण पौधे के हिस्से और संक्रमण के चरण के अनुसार बदलते हैं।",
      damage: "दाग से ताजे फल का बाजार मूल्य घटता है। गंभीर स्थिति में कटाई से पहले फल गिर सकते हैं। रोग मुख्यतः छिलके को प्रभावित करता है; केवल दाग होने से फल खाना असुरक्षित नहीं हो जाता।",
      treatment: "फल पर बने धब्बे हटाए नहीं जा सकते। स्थानीय विशेषज्ञ से रोग की पुष्टि कराएं, संगरोध नियम मानें और केवल स्थानीय रूप से स्वीकृत फफूंदनाशक का लेबल पर बताए समय व मात्रा में उपयोग करें।",
      prevention: "बाग की सफाई रखें, स्थानीय सलाह के अनुसार संक्रमित पत्तियों का प्रबंधन करें, स्वस्थ पौध सामग्री लें और विशेषकर नम मौसम में स्थानीय निगरानी व उपचार संबंधी सलाह मानें।",
      clues: "छिलके पर गहरे गोल धब्बे · धूसर केंद्र · लाल-भूरे किनारे"
    }
  },
  melanose: {
    en: {
      name: "Citrus melanose",
      summary: "A fungal disease caused by Diaporthe citri (also known by its older name Phomopsis citri). It mainly affects the appearance of fruit rind.",
      causes: "The fungus produces spores on dead twigs and can spread by rain splash to young fruit and leaves. Infection is more likely during wet weather while fruit is small.",
      symptoms: "Tiny, raised, rough, dark-brown spots may form a sandpaper-like or 'mudcake' pattern on the rind. Leaves and young twigs can also show small lesions.",
      damage: "The rind can become rough and cosmetically blemished, lowering fresh-market grade. It usually does not affect the inside of the fruit or make it unsafe to eat.",
      treatment: "Established rind marks cannot be cured. Prune and dispose of dead twigs as recommended locally. Protective fungicides may be appropriate before infection in some orchards; follow local registrations and expert advice.",
      prevention: "Remove dead wood where practical, maintain tree health and airflow, avoid unnecessary overhead irrigation, and seek local advice about preventive protection during wet periods.",
      clues: "Numerous tiny raised specks · rough rind texture · dead twig sources"
    },
    hi: {
      name: "सिट्रस मेलानोज़",
      summary: "यह Diaporthe citri (पुराना नाम Phomopsis citri) फफूंद से होने वाला रोग है। यह मुख्यतः फल के छिलके की दिखावट को प्रभावित करता है।",
      causes: "फफूंद मरी हुई टहनियों पर बीजाणु बनाती है और बारिश के छींटों से छोटे फलों तथा पत्तियों तक पहुंच सकती है। फल छोटे होने पर नम मौसम में संक्रमण की संभावना अधिक रहती है।",
      symptoms: "छिलके पर छोटे, उभरे, खुरदरे, गहरे भूरे धब्बे बन सकते हैं, जिससे सतह रेगमाल जैसी या मिट्टी की पपड़ी जैसी दिखती है। पत्तियों और नई टहनियों पर भी छोटे घाव हो सकते हैं।",
      damage: "छिलका खुरदरा और दागदार दिख सकता है, जिससे ताजे फल की बाजार श्रेणी घट सकती है। आमतौर पर फल का अंदरूनी हिस्सा प्रभावित नहीं होता और फल केवल इस वजह से खाने के लिए असुरक्षित नहीं होता।",
      treatment: "छिलके पर बने धब्बों का उपचार नहीं है। स्थानीय सलाह के अनुसार सूखी टहनियां काटकर हटाएं। कुछ बागों में संक्रमण से पहले बचाव के लिए फफूंदनाशक उपयोगी हो सकते हैं; स्थानीय स्वीकृति और विशेषज्ञ सलाह मानें।",
      prevention: "जहां संभव हो सूखी लकड़ी हटाएं, पेड़ों का स्वास्थ्य और हवा का संचार बनाए रखें, अनावश्यक ऊपर से सिंचाई से बचें और नम मौसम में बचाव संबंधी स्थानीय सलाह लें।",
      clues: "बहुत से छोटे उभरे धब्बे · खुरदरा छिलका · सूखी टहनियां"
    }
  },
  bacterialblight: {
    en: {
      name: "Bacterial blight pattern",
      summary: "The model matched a bacterial-blight image class. Citrus leaf lesions can overlap with citrus canker and other disorders; this image label is not a lab-confirmed pathogen diagnosis.",
      causes: "Bacterial citrus diseases can spread on infected planting material and in wind-driven rain. Exact cause and local quarantine significance need expert confirmation.",
      symptoms: "Look for raised brown lesions, yellow margins, or water-soaked areas on leaves and twigs. Similar marks can have non-bacterial causes.",
      damage: "Severe bacterial disease can cause leaf drop, twig damage, fruit blemishes, and reduced tree vigor.",
      treatment: "Do not treat from an image label alone. Ask a local plant-health service to confirm the cause and follow regional reporting and treatment rules.",
      prevention: "Use certified healthy nursery stock, sanitize tools, avoid handling wet trees, and follow local orchard sanitation guidance.",
      clues: "Raised or water-soaked leaf marks · yellow margins · confirm with an expert"
    },
    hi: {
      name: "जीवाणु झुलसा जैसा पैटर्न",
      summary: "मॉडल ने जीवाणु झुलसा वर्ग से मिलता-जुलता पैटर्न पहचाना। पत्तियों के धब्बे सिट्रस कैंकर और अन्य समस्याओं जैसे दिख सकते हैं; यह लैब से पुष्टि किया रोग नहीं है।",
      causes: "खट्टे फलों के जीवाणु रोग संक्रमित पौध सामग्री और हवा के साथ बारिश से फैल सकते हैं। असली कारण और स्थानीय संगरोध महत्व की विशेषज्ञ से पुष्टि जरूरी है।",
      symptoms: "पत्तियों और टहनियों पर उभरे भूरे धब्बे, पीले किनारे या पानी से भीगे हिस्से देखें। ऐसे निशान गैर-जीवाणु कारणों से भी हो सकते हैं।",
      damage: "गंभीर जीवाणु रोग से पत्तियां गिर सकती हैं, टहनियां क्षतिग्रस्त हो सकती हैं, फल पर दाग पड़ सकते हैं और पेड़ कमजोर हो सकता है।",
      treatment: "केवल फोटो के अनुमान पर उपचार न करें। स्थानीय पौध-स्वास्थ्य सेवा से कारण की पुष्टि करें और क्षेत्रीय सूचना व उपचार नियम मानें।",
      prevention: "प्रमाणित स्वस्थ पौधे लें, औजार साफ रखें, गीले पेड़ों को छूने या उन पर काम करने से बचें और स्थानीय बाग-सफाई निर्देश मानें।",
      clues: "पत्ती पर उभरे या भीगे निशान · पीले किनारे · विशेषज्ञ से पुष्टि"
    }
  },
  dryleaf: {
    en: {
      name: "Dry or damaged leaf pattern",
      summary: "The model matched its 'Dry Leaf' class. This is a visible symptom category, not one specific disease; water stress, root injury, nutrition, pests, and infection can look similar.",
      causes: "Possible causes include insufficient or irregular watering, damaged roots, heat or wind stress, salinity, nutrient imbalance, or disease.",
      symptoms: "Leaves may look dry, brown at the edges, curled, or brittle. Check several leaves and inspect soil moisture and the whole plant.",
      damage: "Prolonged stress can reduce growth, flowering, fruit set, and yield. The image alone cannot identify which factor is responsible.",
      treatment: "Check soil moisture and drainage first; correct watering gradually and inspect roots and pests. Avoid adding fertilizer or pesticides until a cause is established.",
      prevention: "Use consistent irrigation suited to the soil, maintain drainage and mulch appropriately, and monitor trees for early stress.",
      clues: "Dry or browned leaf edges · curling · check multiple leaves and soil"
    },
    hi: {
      name: "सूखी या क्षतिग्रस्त पत्ती जैसा पैटर्न",
      summary: "मॉडल ने “Dry Leaf” वर्ग चुना। यह दिखाई देने वाले लक्षण का वर्ग है, कोई एक रोग नहीं। पानी की कमी, जड़ों की क्षति, पोषण, कीट और संक्रमण ऐसे दिख सकते हैं।",
      causes: "संभावित कारणों में कम या अनियमित सिंचाई, जड़ों की क्षति, गर्मी या हवा का तनाव, मिट्टी में लवण, पोषक असंतुलन या रोग शामिल हैं।",
      symptoms: "पत्तियां सूखी, किनारों से भूरी, मुड़ी हुई या भुरभुरी दिख सकती हैं। कई पत्तियां देखें और मिट्टी की नमी तथा पूरे पेड़ की जांच करें।",
      damage: "लंबे समय का तनाव बढ़वार, फूल, फल लगना और उपज घटा सकता है। केवल फोटो से असली कारण पता नहीं चलता।",
      treatment: "पहले मिट्टी की नमी और जल-निकासी जांचें; सिंचाई धीरे-धीरे ठीक करें तथा जड़ों और कीटों को देखें। कारण जाने बिना खाद या कीटनाशक न डालें।",
      prevention: "मिट्टी के अनुसार नियमित सिंचाई करें, जल-निकासी और उचित मल्च बनाए रखें तथा पेड़ों में तनाव के शुरुआती संकेत देखें।",
      clues: "सूखे/भूरे पत्ती किनारे · मुड़ना · कई पत्तियां और मिट्टी जांचें"
    }
  },
  healthy: {
    en: {
      name: "Healthy leaf pattern",
      summary: "The model's top class was Healthy. This does not rule out early, hidden, or fruit-only problems.",
      causes: "No clear disease pattern was assigned by this model. It only compares the image with its eight trained leaf classes.",
      symptoms: "The photo did not strongly match a visible disease class. Continue checking both sides of leaves, new growth, twigs, and fruit.",
      damage: "No disease damage is indicated by this model result. A single image cannot confirm that the whole plant or fruit is disease-free.",
      treatment: "No disease treatment is indicated by this class. Keep observing the plant; seek expert advice if symptoms persist or spread.",
      prevention: "Use clean planting material, good irrigation and orchard hygiene, and regular monitoring.",
      clues: "Top class: Healthy · not a guarantee of plant health"
    },
    hi: {
      name: "स्वस्थ पत्ती जैसा पैटर्न",
      summary: "मॉडल का मुख्य वर्ग “Healthy” था। इससे शुरुआती, छिपी हुई या केवल फल को प्रभावित करने वाली समस्या खारिज नहीं होती।",
      causes: "मॉडल ने कोई स्पष्ट रोग-पैटर्न नहीं चुना। यह केवल अपने आठ प्रशिक्षित पत्ती-वर्गों से फोटो की तुलना करता है।",
      symptoms: "फोटो किसी दिखाई देने वाले रोग-वर्ग से स्पष्ट रूप से मेल नहीं खाई। पत्तियों के दोनों ओर, नई बढ़वार, टहनियों और फलों को देखते रहें।",
      damage: "इस मॉडल परिणाम से रोग-नुकसान का संकेत नहीं मिला। एक फोटो से पूरे पेड़ या फल का रोग-मुक्त होना साबित नहीं होता।",
      treatment: "इस वर्ग के आधार पर रोग-उपचार की जरूरत नहीं बताई गई है। निगरानी जारी रखें; लक्षण बने रहें या फैलें तो विशेषज्ञ से सलाह लें।",
      prevention: "स्वच्छ पौध सामग्री लें, सिंचाई और बाग-सफाई ठीक रखें तथा नियमित निरीक्षण करें।",
      clues: "मुख्य वर्ग: स्वस्थ · पूरे पेड़ के स्वस्थ होने की गारंटी नहीं"
    }
  },
  healthyfruit: {
    en: {
      name: "Healthy orange-fruit pattern",
      summary: "The model matched its healthy-orange class. This does not rule out fruit diseases outside its three trained classes, internal decay, or early symptoms.",
      causes: "No canker or melanose pattern was assigned by this model. It only compares orange-fruit photos with three trained classes.",
      symptoms: "The image did not strongly match the model's canker or melanose classes. Check fruit from different sides and inspect the tree and leaves too.",
      damage: "No canker or melanose damage is indicated by this model result. One photo cannot confirm that the fruit or tree is disease-free.",
      treatment: "No canker/melanose treatment is indicated by this class. Continue monitoring and ask an expert if symptoms are visible or worsen.",
      prevention: "Use healthy planting material, maintain orchard hygiene, and inspect fruit and leaves regularly.",
      clues: "Top class: Healthy orange · does not exclude other diseases"
    },
    hi: {
      name: "स्वस्थ संतरे के फल जैसा पैटर्न",
      summary: "मॉडल ने स्वस्थ संतरे वाला वर्ग चुना। इससे उसके तीन प्रशिक्षित वर्गों से बाहर के फल-रोग, अंदरूनी सड़न या शुरुआती लक्षण खारिज नहीं होते।",
      causes: "मॉडल ने कैंकर या मेलानोज़ जैसा पैटर्न नहीं चुना। यह केवल संतरे के फल की फोटो की तीन प्रशिक्षित वर्गों से तुलना करता है।",
      symptoms: "फोटो मॉडल के कैंकर या मेलानोज़ वर्ग से स्पष्ट रूप से मेल नहीं खाई। फल को अलग-अलग तरफ से देखें और पेड़ तथा पत्तियों की भी जांच करें।",
      damage: "इस मॉडल परिणाम से कैंकर या मेलानोज़ के नुकसान का संकेत नहीं मिला। एक फोटो से फल या पेड़ का रोग-मुक्त होना साबित नहीं होता।",
      treatment: "इस वर्ग के अनुसार कैंकर/मेलानोज़ का उपचार नहीं बताया गया है। निगरानी जारी रखें और लक्षण दिखें या बढ़ें तो विशेषज्ञ से सलाह लें।",
      prevention: "स्वस्थ पौध सामग्री लें, बाग की सफाई रखें और फलों तथा पत्तियों का नियमित निरीक्षण करें।",
      clues: "मुख्य वर्ग: स्वस्थ संतरा · अन्य रोग खारिज नहीं होते"
    }
  },
  leafcurl: {
    en: {
      name: "Leaf-curl pattern",
      summary: "The model matched its 'Leaf Curl Virus' class. Curling can also be caused by mites, aphids, heat, water stress, or herbicide injury; a virus is not confirmed by this photo.",
      causes: "Possible causes include viral infection, sap-feeding pests, heat, irregular water, or chemical injury. A close inspection and local diagnosis are needed.",
      symptoms: "Leaves may curl, cup, twist, or show uneven growth. Check leaf undersides and nearby new shoots for pests or mites.",
      damage: "The impact depends on the cause. Persistent stress can reduce leaf area, shoot growth, flowering, and yield.",
      treatment: "Do not apply a pesticide based only on this class. Inspect for pests and ask an extension officer to distinguish viral, pest, and environmental causes.",
      prevention: "Use healthy nursery stock, monitor new growth, control confirmed vectors using local integrated pest-management guidance, and avoid spray drift.",
      clues: "Curled or twisted leaves · inspect undersides and new growth"
    },
    hi: {
      name: "पत्ती मुड़ने जैसा पैटर्न",
      summary: "मॉडल ने “Leaf Curl Virus” वर्ग चुना। पत्तियों का मुड़ना माइट, माहू, गर्मी, पानी के तनाव या खरपतवारनाशक से भी हो सकता है; फोटो से वायरस की पुष्टि नहीं होती।",
      causes: "संभावित कारणों में विषाणु संक्रमण, रस चूसने वाले कीट, गर्मी, अनियमित पानी या रसायन से क्षति शामिल हैं। नजदीक से निरीक्षण और स्थानीय जांच जरूरी है।",
      symptoms: "पत्तियां मुड़, कटोरी जैसी, टेढ़ी या असमान बढ़वार वाली हो सकती हैं। पत्ती की निचली सतह और पास की नई टहनियों पर कीट या माइट देखें।",
      damage: "नुकसान असली कारण पर निर्भर करता है। लगातार तनाव से पत्ती क्षेत्र, टहनियों की बढ़वार, फूल और उपज घट सकते हैं।",
      treatment: "केवल इस वर्ग के आधार पर कीटनाशक न डालें। कीट देखें और कृषि विशेषज्ञ से विषाणु, कीट तथा पर्यावरणीय कारणों में अंतर कराएं।",
      prevention: "स्वस्थ पौध सामग्री लें, नई बढ़वार देखें, पुष्टि हुए वाहक कीटों का स्थानीय एकीकृत प्रबंधन करें और छिड़काव का बहाव रोकें।",
      clues: "मुड़ी/टेढ़ी पत्तियां · निचली सतह और नई बढ़वार जांचें"
    }
  },
  sootymould: {
    en: {
      name: "Sooty mould pattern",
      summary: "Sooty mould is a dark fungal growth that commonly grows on honeydew left by scale insects, mealybugs, or aphids.",
      causes: "Sap-feeding insects excrete sticky honeydew; sooty mould fungi grow on its surface. The mould itself is usually secondary to the pest infestation.",
      symptoms: "A dark, soot-like coating may cover leaves or twigs and can often be rubbed from the surface. Look for sticky honeydew and insects beneath leaves.",
      damage: "Heavy coating can block light and reduce photosynthesis. The underlying sap-feeding pests can weaken the plant and affect fruit.",
      treatment: "Identify and manage the honeydew-producing pest using local integrated pest-management advice. Avoid broad-spectrum sprays that harm beneficial insects.",
      prevention: "Monitor for scale, mealybugs, and aphids; protect natural enemies and manage ant activity where relevant.",
      clues: "Dark surface coating · sticky honeydew · inspect for scale or aphids"
    },
    hi: {
      name: "काली फफूंद (सोटी मोल्ड) जैसा पैटर्न",
      summary: "सोटी मोल्ड गहरे रंग की फफूंद है जो अक्सर स्केल कीट, मिलीबग या माहू के छोड़े चिपचिपे मधुरस पर बढ़ती है।",
      causes: "रस चूसने वाले कीट चिपचिपा मधुरस छोड़ते हैं; उसी सतह पर सोटी मोल्ड फफूंद बढ़ती है। फफूंद अक्सर कीट संक्रमण के बाद होती है।",
      symptoms: "पत्तियों या टहनियों पर कालिख जैसी परत हो सकती है, जिसे अक्सर सतह से पोंछा जा सकता है। चिपचिपा मधुरस और पत्तियों के नीचे कीट देखें।",
      damage: "मोटी परत रोशनी रोककर प्रकाश-संश्लेषण घटा सकती है। मूल रस-चूसने वाले कीट पौधे को कमजोर कर सकते हैं और फल प्रभावित कर सकते हैं।",
      treatment: "स्थानीय एकीकृत कीट प्रबंधन सलाह से मधुरस बनाने वाले कीट की पहचान और नियंत्रण करें। लाभकारी कीटों को नुकसान पहुंचाने वाले व्यापक कीटनाशक से बचें।",
      prevention: "स्केल, मिलीबग और माहू की निगरानी करें; प्राकृतिक शत्रुओं को बचाएं और जरूरत पर चींटियों का प्रबंधन करें।",
      clues: "काली सतही परत · चिपचिपा मधुरस · स्केल या माहू जांचें"
    }
  },
  spidermites: {
    en: {
      name: "Spider-mite damage pattern",
      summary: "Spider mites are tiny arthropod pests, not a disease. The model's class is a visual lead; confirm mites with a close inspection.",
      causes: "Mites feed on leaf cells. Hot, dry, dusty conditions and disruption of beneficial predatory mites can allow populations to increase.",
      symptoms: "Leaves may show fine pale stippling, bronzing, or webbing in heavier infestations. Check leaf undersides with a hand lens.",
      damage: "Heavy feeding can cause leaf bronzing and drop, reduce tree vigor, and affect fruit development.",
      treatment: "Confirm mites before treatment. Reduce dust and water stress, conserve predatory mites, and follow local integrated pest-management advice for any approved control.",
      prevention: "Monitor leaf undersides regularly, maintain appropriate irrigation, and avoid unnecessary broad-spectrum pesticides that remove natural enemies.",
      clues: "Fine pale stippling · possible webbing · inspect leaf undersides"
    },
    hi: {
      name: "माइट से क्षति जैसा पैटर्न",
      summary: "स्पाइडर माइट बहुत छोटे आर्थ्रोपोड कीट हैं, रोग नहीं। मॉडल का वर्ग केवल दृश्य संकेत है; नजदीक से देखकर माइट की पुष्टि करें।",
      causes: "माइट पत्ती की कोशिकाओं का रस चूसते हैं। गर्म, सूखी, धूलभरी स्थिति और लाभकारी शिकारी माइट का कम होना इनकी संख्या बढ़ा सकता है।",
      symptoms: "पत्तियों पर बारीक हल्के बिंदु, कांस्य रंग या अधिक संक्रमण में जाला दिख सकता है। हाथ के लेंस से पत्ती की निचली सतह देखें।",
      damage: "अधिक रस चूसने से पत्तियां कांस्य रंग की होकर गिर सकती हैं, पेड़ कमजोर हो सकता है और फल-विकास प्रभावित हो सकता है।",
      treatment: "उपचार से पहले माइट की पुष्टि करें। धूल और पानी के तनाव को घटाएं, शिकारी माइट बचाएं और किसी स्वीकृत नियंत्रण के लिए स्थानीय एकीकृत कीट प्रबंधन सलाह मानें।",
      prevention: "पत्तियों की निचली सतह नियमित देखें, उचित सिंचाई रखें और प्राकृतिक शत्रुओं को मारने वाले अनावश्यक व्यापक कीटनाशक से बचें।",
      clues: "बारीक हल्के बिंदु · संभव जाला · पत्ती की निचली सतह देखें"
    }
  }
};

const languageToggle = document.querySelector("#languageToggle");
const languageLabel = document.querySelector("#languageLabel");
const imageInput = document.querySelector("#imageInput");
const uploadArea = document.querySelector("#uploadArea");
const uploadPlaceholder = document.querySelector("#uploadPlaceholder");
const imagePreview = document.querySelector("#imagePreview");
const previewImage = document.querySelector("#previewImage");
const resultSection = document.querySelector("#resultSection");
const toast = document.querySelector("#toast");
let currentLanguage = "en";
let currentImageUrl = null;
let currentFile = null;
let cameraStream = null;
let toastTimer;
let apiAvailable = false;
let currentPrediction = null;
let currentReferenceDisease = null;
let diagnosisRequest = 0;

const localApiBaseUrl = "http://127.0.0.1:8000";
const configuredApiBaseUrl = typeof window.CITRUSCARE_API_URL === "string"
  ? window.CITRUSCARE_API_URL.trim()
  : "";
const API_BASE_URL = (configuredApiBaseUrl
  || (["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? localApiBaseUrl
    : window.location.origin)).replace(/\/+$/, "");
const modelDiseaseIds = {
  "Bacterial Blight": "bacterialblight",
  "Black Spot": "blackspot",
  Canker: "canker",
  "citrus canker": "canker",
  "Dry Leaf": "dryleaf",
  Healthy: "healthy",
  healthy: "healthy",
  "Leaf Curl Virus": "leafcurl",
  melanose: "melanose",
  "Sooty Mould": "sootymould",
  "Spider Mites": "spidermites"
};

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];
    if (value) element.innerHTML = value;
  });
  languageLabel.textContent = language === "en" ? "हिन्दी" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "हिंदी में बदलें" : "Switch to English");
  if (!resultSection.classList.contains("hidden")) {
    if (currentPrediction) renderDisease(currentPrediction.id, currentPrediction.result);
    else if (currentReferenceDisease) renderDisease(currentReferenceDisease);
  }
  updatePhotoTarget();
  updateModelConnection();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

function showImage(file) {
  if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    showToast(translations[currentLanguage].invalidImage);
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast(translations[currentLanguage].photoTooLarge);
    return;
  }
  if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
  currentImageUrl = URL.createObjectURL(file);
  currentFile = file;
  previewImage.src = currentImageUrl;
  previewImage.alt = file.name || "Selected citrus fruit";
  uploadPlaceholder.classList.add("hidden");
  imagePreview.classList.remove("hidden");
  document.querySelector("#diagnoseButton").disabled = false;
  runDiagnosis();
}

function renderDisease(id, predictionResult = null) {
  const entry = diseaseData[id];
  if (!entry) return;
  const data = entry[currentLanguage];
  currentPrediction = predictionResult ? { id, result: predictionResult } : null;
  currentReferenceDisease = predictionResult ? null : id;
  document.querySelector("#resultDiseaseName").textContent = data.name;
  document.querySelector("#resultSummary").textContent = data.summary;
  document.querySelector("#resultOriginLabel").textContent = predictionResult
    ? `${translations[currentLanguage].aiResult} · ${predictionResult.photo_scope === "fruit" ? translations[currentLanguage].orangeImageScope : translations[currentLanguage].citrusLeaf}`
    : translations[currentLanguage].sampleResult;
  document.querySelector("#resultStamp").textContent = predictionResult
    ? (predictionResult.uncertain ? translations[currentLanguage].uncertainResult : translations[currentLanguage].aiResultStamp)
    : translations[currentLanguage].illustrativeOnly;
  const predictionMeta = document.querySelector("#predictionMeta");
  if (predictionResult) {
    const top = predictionResult.predictions[0];
    const alternatives = predictionResult.predictions.slice(1)
      .map((item) => `${item.label} ${Math.round(item.confidence * 100)}%`)
      .join(" · ");
    predictionMeta.textContent = `${translations[currentLanguage].confidenceLabel}: ${Math.round(top.confidence * 100)}%`
      + (alternatives ? ` · ${translations[currentLanguage].alternativesLabel}: ${alternatives}` : "");
    predictionMeta.classList.remove("hidden");
  } else {
    predictionMeta.textContent = "";
    predictionMeta.classList.add("hidden");
  }
  const sectionLabels = translations[currentLanguage];
  const cards = [
    ["causes", data.causes, "↗"], ["symptoms", data.symptoms, "⌕"], ["damage", data.damage, "◌"],
    ["treatment", data.treatment, "✳"], ["prevention", data.prevention, "♧"], ["explainability", data.clues, "◎"]
  ];
  document.querySelector("#resultGrid").innerHTML = cards.map(([label, content, icon]) =>
    `<article class="result-card"><h3><span aria-hidden="true">${icon}</span>${sectionLabels[label]}</h3><p>${content}</p></article>`
  ).join("");
  resultSection.classList.remove("hidden");
}

function updatePhotoTarget() {
  const photoType = document.querySelector("#photoType").value;
  const fruitSelected = photoType === "fruit";
  const species = document.querySelector("#fruitSpecies").value;
  const supportedSpecies = species === "orange";
  document.querySelector("#fruitSpeciesRow").classList.toggle("hidden", !fruitSelected);
  document.querySelector("#targetNote").classList.toggle("hidden", !fruitSelected);
  const button = document.querySelector("#diagnoseButton");
  button.disabled = !currentFile || !apiAvailable || (fruitSelected && !supportedSpecies);
  updateModelConnection();
}

function updateModelConnection() {
  const connection = document.querySelector("#modelConnection");
  const message = connection.querySelector("span:last-child");
  const photoType = document.querySelector("#photoType").value;
  const modelAvailable = apiAvailable;
  const unsupportedFruit = photoType === "fruit" && document.querySelector("#fruitSpecies").value !== "orange";
  connection.classList.toggle("connected", modelAvailable && !unsupportedFruit);
  connection.classList.toggle("disconnected", !modelAvailable || unsupportedFruit);
  if (unsupportedFruit) {
    message.textContent = translations[currentLanguage].unsupportedFruit;
  } else if (!modelAvailable) {
    message.textContent = translations[currentLanguage].modelUnavailable;
  } else if (photoType === "leaf") {
    message.textContent = translations[currentLanguage].leafModelReady;
  } else {
    message.textContent = translations[currentLanguage].fruitModelReady;
  }
}

async function checkModelConnection() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`, { signal: controller.signal });
    const health = response.ok ? await response.json() : null;
    const apiReady = Boolean(
      health?.models?.leaf?.available && health?.models?.fruit?.available
    );
    apiAvailable = apiReady;
  } catch {
    apiAvailable = false;
  } finally {
    clearTimeout(timeout);
    updatePhotoTarget();
    const selectedType = document.querySelector("#photoType").value;
    const status = document.querySelector("#diagnosisStatus");
    if (
      currentFile &&
      apiAvailable &&
      status.textContent === translations[currentLanguage].modelUnavailable
    ) {
      runDiagnosis();
    }
  }
}

async function runDiagnosis() {
  const requestId = ++diagnosisRequest;
  resultSection.classList.add("hidden");
  currentPrediction = null;
  if (!currentFile) {
    document.querySelector("#diagnosisStatus").textContent = translations[currentLanguage].selectPhoto;
    document.querySelector("#diagnosisStatus").className = "diagnosis-status error";
    return;
  }
  const photoType = document.querySelector("#photoType").value;
  const fruitSpecies = document.querySelector("#fruitSpecies").value;
  if (photoType === "fruit" && !fruitSpecies) {
    document.querySelector("#diagnosisStatus").textContent = translations[currentLanguage].chooseFruitFirst;
    document.querySelector("#diagnosisStatus").className = "diagnosis-status error";
    return;
  }
  if (photoType === "fruit" && fruitSpecies !== "orange") {
    document.querySelector("#diagnosisStatus").textContent = translations[currentLanguage].unsupportedFruit;
    document.querySelector("#diagnosisStatus").className = "diagnosis-status error";
    return;
  }
  if (!apiAvailable) {
    document.querySelector("#diagnosisStatus").textContent = translations[currentLanguage].modelUnavailable;
    document.querySelector("#diagnosisStatus").className = "diagnosis-status error";
    return;
  }

  const button = document.querySelector("#diagnoseButton");
  const status = document.querySelector("#diagnosisStatus");
  const payload = new FormData();
  payload.append("file", currentFile);
  payload.append("photo_type", photoType);
  if (photoType === "fruit") payload.append("fruit_species", fruitSpecies);
  button.disabled = true;
  status.textContent = translations[currentLanguage].analyzingPhoto;
  status.className = "diagnosis-status";
  try {
    const response = await fetch(`${API_BASE_URL}/api/predict`, { method: "POST", body: payload });
    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || translations[currentLanguage].modelFailed);
    if (requestId !== diagnosisRequest) return;
    const bestMatch = result.predictions[0];
    const diseaseId = photoType === "fruit" && bestMatch.label.toLowerCase() === "healthy"
      ? "healthyfruit"
      : modelDiseaseIds[bestMatch.label];
    if (!diseaseId) throw new Error(translations[currentLanguage].modelFailed);
    renderDisease(diseaseId, { ...result, photo_scope: photoType, fruit_species: fruitSpecies });
    status.textContent = result.uncertain
      ? translations[currentLanguage].uncertainResult
      : `${translations[currentLanguage].confidenceLabel}: ${Math.round(bestMatch.confidence * 100)}%`;
    status.className = `diagnosis-status ${result.uncertain ? "error" : "success"}`;
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    if (requestId !== diagnosisRequest) return;
    status.textContent = error.message || translations[currentLanguage].modelFailed;
    status.className = "diagnosis-status error";
  } finally {
    if (requestId === diagnosisRequest) {
      const selectedType = document.querySelector("#photoType").value;
      button.disabled = !apiAvailable
        || (selectedType === "fruit" && document.querySelector("#fruitSpecies").value !== "orange");
    }
  }
}

function closeCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }
  document.querySelector("#cameraVideo").srcObject = null;
  document.querySelector("#cameraModal").classList.add("hidden");
  document.querySelector("#cameraError").classList.add("hidden");
  document.querySelector("#captureButton").disabled = false;
}

async function openCamera() {
  const modal = document.querySelector("#cameraModal");
  const video = document.querySelector("#cameraVideo");
  const error = document.querySelector("#cameraError");
  modal.classList.remove("hidden");
  if (!navigator.mediaDevices?.getUserMedia) {
    error.classList.remove("hidden");
    error.textContent = translations[currentLanguage].cameraUnsupported;
    document.querySelector("#captureButton").disabled = true;
    return;
  }
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
    video.srcObject = cameraStream;
  } catch (cameraError) {
    error.classList.remove("hidden");
    error.textContent = translations[currentLanguage].permissionError;
    document.querySelector("#captureButton").disabled = true;
  }
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "hi" : "en"));
document.querySelector("#browseButton").addEventListener("click", () => imageInput.click());
imageInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) showImage(file);
  imageInput.value = "";
});
document.querySelector("#removeImage").addEventListener("click", () => {
  diagnosisRequest += 1;
  if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
  currentImageUrl = null;
  currentFile = null;
  previewImage.removeAttribute("src");
  imagePreview.classList.add("hidden");
  uploadPlaceholder.classList.remove("hidden");
  document.querySelector("#diagnoseButton").disabled = true;
  document.querySelector("#diagnosisStatus").textContent = "";
  document.querySelector("#diagnosisStatus").className = "diagnosis-status";
});
uploadArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  uploadArea.classList.add("dragging");
});
uploadArea.addEventListener("dragleave", () => uploadArea.classList.remove("dragging"));
uploadArea.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadArea.classList.remove("dragging");
  const [file] = event.dataTransfer.files;
  if (file) showImage(file);
});
document.querySelector("#cameraButton").addEventListener("click", openCamera);
document.querySelector("#photoType").addEventListener("change", () => {
  updatePhotoTarget();
  if (currentFile) runDiagnosis();
});
document.querySelector("#fruitSpecies").addEventListener("change", () => {
  updatePhotoTarget();
  if (currentFile && document.querySelector("#photoType").value === "fruit") runDiagnosis();
});
document.querySelector("#diagnoseButton").addEventListener("click", runDiagnosis);
document.querySelector("#closeCamera").addEventListener("click", closeCamera);
document.querySelector("#cancelCamera").addEventListener("click", closeCamera);
document.querySelector("#cameraModal").addEventListener("click", (event) => {
  if (event.target.id === "cameraModal") closeCamera();
});
document.querySelector("#captureButton").addEventListener("click", () => {
  const video = document.querySelector("#cameraVideo");
  const canvas = document.querySelector("#cameraCanvas");
  if (!video.videoWidth || !video.videoHeight) return;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.toBlob((blob) => {
    if (!blob) {
      showToast(translations[currentLanguage].invalidImage);
      return;
    }
    showImage(new File([blob], "citrus-camera-photo.jpg", { type: "image/jpeg" }));
    showToast(translations[currentLanguage].savedPhoto);
    closeCamera();
  }, "image/jpeg", .92);
});
document.querySelectorAll(".guide-card").forEach((card) => {
  card.addEventListener("click", () => {
    renderDisease(card.dataset.disease);
    document.querySelector("#diagnose").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => resultSection.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !document.querySelector("#cameraModal").classList.contains("hidden")) closeCamera();
});

updatePhotoTarget();
checkModelConnection();
setInterval(checkModelConnection, 15000);
window.addEventListener("focus", checkModelConnection);
