export type Language = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'mr' | 'bn' | 'gu' | 'pa' | 'ml' | 'or' | 'as';

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी',
  te: 'తెలుగు',
  ta: 'தமிழ்',
  kn: 'ಕನ್ನಡ',
  mr: 'मराठी',
  bn: 'বাংলা',
  gu: 'ગુજરાતી',
  pa: 'ਪੰਜਾਬੀ',
  ml: 'മലയാളം',
  or: 'ଓଡ଼ିଆ',
  as: 'অসমীয়া',
};

type TranslationKeys = {
  // Common
  appName: string;
  login: string;
  signup: string;
  logout: string;
  back: string;
  save: string;
  settings: string;
  profile: string;
  language: string;
  
  // Home
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  
  // Login
  loginTitle: string;
  signupTitle: string;
  emailOrPhone: string;
  password: string;
  fullName: string;
  phone: string;
  emailOptional: string;
  state: string;
  district: string;
  createPassword: string;
  createAccount: string;
  continueWithGmail: string;
  signupWithGmail: string;
  selectState: string;
  yourDistrict: string;
  
  // Dashboard
  welcomeFarmer: string;
  chooseService: string;
  cropRecommendation: string;
  cropRecommendationDesc: string;
  cropDiseasePrediction: string;
  cropDiseaseDesc: string;
  
  // Crop Recommendation
  chooseMode: string;
  simpleMode: string;
  simpleModeDesc: string;
  advancedMode: string;
  advancedModeDesc: string;
  
  // Simple Mode
  soilType: string;
  budget: string;
  weatherLocation: string;
  season: string;
  getRecommendation: string;
  
  // Advanced Mode
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  temperature: string;
  humidity: string;
  phValue: string;
  rainfall: string;
  analyzeRecommend: string;
  
  // Disease Prediction
  uploadOrCapture: string;
  clickToUpload: string;
  uploadImage: string;
  useCamera: string;
  supportedFormats: string;
  maxFileSize: string;
  blurryWarning: string;
  predictDisease: string;
  
  // Results
  confidence: string;
  cropSchedule: string;
  nextCropRotation: string;
  recommendedFertilizers: string;
  preventionTreatment: string;
  fertilizerSuggestion: string;
  
  // Additional features
  weatherIntegration: string;
  voiceInput: string;
  cropRotationPlanner: string;
  smsAlerts: string;
  cropScheduleFeature: string;
  fertilizerYield: string;
  diseaseStage: string;
  imageQuality: string;
  
  // Settings
  appLanguage: string;
  chooseLanguage: string;
  saveSettings: string;
  
  // Profile
  myProfile: string;
  updateProfile: string;
  phoneNumber: string;
  email: string;
  
  // Footer
  footerDesc: string;
  allRightsReserved: string;
  
  // Map
  selectLocation: string;
  mapTitle: string;
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    appName: 'Agro_Guardian',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    back: 'Back',
    save: 'Save',
    settings: 'Settings',
    profile: 'Profile',
    language: 'Language',
    heroTitle: 'Empowering Farmers with AI Intelligence',
    heroDesc: 'Get personalized crop recommendations and instant disease predictions — all in your regional language.',
    getStarted: "Get Started — It's Free",
    loginTitle: 'Login to Agro_Guardian',
    signupTitle: 'Create Your Account',
    emailOrPhone: 'Email or Phone',
    password: 'Password',
    fullName: 'Full Name',
    phone: 'Phone',
    emailOptional: 'Email (optional)',
    state: 'State',
    district: 'District',
    createPassword: 'Create Password',
    createAccount: 'Create Account',
    continueWithGmail: 'Continue with Gmail',
    signupWithGmail: 'Sign up with Gmail',
    selectState: 'Select state',
    yourDistrict: 'Your district',
    welcomeFarmer: 'Welcome, Farmer! 🌾',
    chooseService: 'Choose a service to get started',
    cropRecommendation: 'Crop Recommendation',
    cropRecommendationDesc: 'Get AI-powered suggestions for the best crop to grow based on your soil, weather, and budget.',
    cropDiseasePrediction: 'Crop Disease Prediction',
    cropDiseaseDesc: 'Upload an image of your crop and our AI will identify the disease and suggest treatments.',
    chooseMode: 'Choose your preferred input mode',
    simpleMode: 'Simple Mode',
    simpleModeDesc: 'Enter basic info like soil type, budget, weather & season — perfect for quick recommendations.',
    advancedMode: 'Advanced Mode',
    advancedModeDesc: 'Enter precise N, P, K values, temperature, humidity, pH & rainfall for detailed scientific analysis.',
    soilType: 'Soil Type',
    budget: 'Budget (₹)',
    weatherLocation: 'Current Weather / Location',
    season: 'Season',
    getRecommendation: 'Get Recommendation 🌱',
    nitrogen: 'Nitrogen (N) %',
    phosphorus: 'Phosphorus (P) %',
    potassium: 'Potassium (K) %',
    temperature: 'Temperature (°C)',
    humidity: 'Humidity (%)',
    phValue: 'pH Value',
    rainfall: 'Rainfall (mm)',
    analyzeRecommend: 'Analyze & Recommend 🔬',
    uploadOrCapture: 'Upload or capture a photo of the affected crop',
    clickToUpload: 'Click to upload or drag & drop',
    uploadImage: 'Upload Image',
    useCamera: 'Use Camera',
    supportedFormats: 'Supported formats: JPG, PNG, WebP',
    maxFileSize: 'Max file size: 10 MB',
    blurryWarning: 'Image may be blurry. For better accuracy, please re-upload a clearer photo.',
    predictDisease: 'Predict Disease 🔍',
    confidence: 'Confidence',
    cropSchedule: 'Crop Schedule (Sow to Harvest)',
    nextCropRotation: 'Next Crop Rotation',
    recommendedFertilizers: 'Recommended Fertilizers',
    preventionTreatment: 'Prevention & Treatment',
    fertilizerSuggestion: 'Fertilizer Suggestion',
    weatherIntegration: 'Weather API Integration',
    voiceInput: 'Voice-based Input',
    cropRotationPlanner: 'Crop Rotation & Soil Recovery Planner',
    smsAlerts: 'SMS Alert System',
    cropScheduleFeature: 'Complete Crop Schedule',
    fertilizerYield: 'Fertilizer for Crop Yield',
    diseaseStage: 'Disease Stage & Infection Level',
    imageQuality: 'Image Quality Analyzer',
    appLanguage: 'App Language',
    chooseLanguage: 'Choose your preferred language for the app interface.',
    saveSettings: 'Save Settings',
    myProfile: 'My Profile',
    updateProfile: 'Update Profile',
    phoneNumber: 'Phone Number',
    email: 'Email',
    footerDesc: 'AI-powered crop recommendation & disease prediction for Indian farmers',
    allRightsReserved: '© 2026 Agro_Guardian. All rights reserved.',
    selectLocation: 'Select your location on the map',
    mapTitle: 'India Map — Select Your Region',
  },
  hi: {
    appName: 'Agro_Guardian',
    login: 'लॉगिन',
    signup: 'साइन अप',
    logout: 'लॉगआउट',
    back: 'वापस',
    save: 'सहेजें',
    settings: 'सेटिंग्स',
    profile: 'प्रोफ़ाइल',
    language: 'भाषा',
    heroTitle: 'एआई बुद्धिमत्ता से किसानों को सशक्त बनाना',
    heroDesc: 'व्यक्तिगत फसल सिफारिशें और तत्काल रोग भविष्यवाणी प्राप्त करें — सब आपकी क्षेत्रीय भाषा में।',
    getStarted: 'शुरू करें — यह मुफ्त है',
    loginTitle: 'Agro_Guardian में लॉगिन करें',
    signupTitle: 'अपना खाता बनाएं',
    emailOrPhone: 'ईमेल या फ़ोन',
    password: 'पासवर्ड',
    fullName: 'पूरा नाम',
    phone: 'फ़ोन',
    emailOptional: 'ईमेल (वैकल्पिक)',
    state: 'राज्य',
    district: 'जिला',
    createPassword: 'पासवर्ड बनाएं',
    createAccount: 'खाता बनाएं',
    continueWithGmail: 'Gmail से जारी रखें',
    signupWithGmail: 'Gmail से साइन अप करें',
    selectState: 'राज्य चुनें',
    yourDistrict: 'आपका जिला',
    welcomeFarmer: 'स्वागत है, किसान! 🌾',
    chooseService: 'शुरू करने के लिए सेवा चुनें',
    cropRecommendation: 'फसल सिफारिश',
    cropRecommendationDesc: 'अपनी मिट्टी, मौसम और बजट के आधार पर सर्वोत्तम फसल उगाने के लिए AI-संचालित सुझाव प्राप्त करें।',
    cropDiseasePrediction: 'फसल रोग भविष्यवाणी',
    cropDiseaseDesc: 'अपनी फसल की तस्वीर अपलोड करें और हमारा AI रोग की पहचान करेगा और उपचार सुझाएगा।',
    chooseMode: 'अपना पसंदीदा इनपुट मोड चुनें',
    simpleMode: 'सरल मोड',
    simpleModeDesc: 'मिट्टी का प्रकार, बजट, मौसम और ऋतु जैसी बुनियादी जानकारी दर्ज करें।',
    advancedMode: 'उन्नत मोड',
    advancedModeDesc: 'विस्तृत वैज्ञानिक विश्लेषण के लिए N, P, K मान, तापमान, आर्द्रता, pH और वर्षा दर्ज करें।',
    soilType: 'मिट्टी का प्रकार',
    budget: 'बजट (₹)',
    weatherLocation: 'वर्तमान मौसम / स्थान',
    season: 'ऋतु',
    getRecommendation: 'सिफारिश प्राप्त करें 🌱',
    nitrogen: 'नाइट्रोजन (N) %',
    phosphorus: 'फास्फोरस (P) %',
    potassium: 'पोटैशियम (K) %',
    temperature: 'तापमान (°C)',
    humidity: 'आर्द्रता (%)',
    phValue: 'pH मान',
    rainfall: 'वर्षा (मिमी)',
    analyzeRecommend: 'विश्लेषण और सिफारिश 🔬',
    uploadOrCapture: 'प्रभावित फसल की तस्वीर अपलोड या कैप्चर करें',
    clickToUpload: 'अपलोड करने के लिए क्लिक करें',
    uploadImage: 'तस्वीर अपलोड करें',
    useCamera: 'कैमरा इस्तेमाल करें',
    supportedFormats: 'समर्थित प्रारूप: JPG, PNG, WebP',
    maxFileSize: 'अधिकतम फ़ाइल आकार: 10 MB',
    blurryWarning: 'तस्वीर धुंधली हो सकती है। बेहतर सटीकता के लिए कृपया स्पष्ट तस्वीर अपलोड करें।',
    predictDisease: 'रोग की भविष्यवाणी करें 🔍',
    confidence: 'विश्वसनीयता',
    cropSchedule: 'फसल कार्यक्रम (बुवाई से कटाई तक)',
    nextCropRotation: 'अगली फसल चक्र',
    recommendedFertilizers: 'अनुशंसित उर्वरक',
    preventionTreatment: 'रोकथाम और उपचार',
    fertilizerSuggestion: 'उर्वरक सुझाव',
    weatherIntegration: 'मौसम API एकीकरण',
    voiceInput: 'आवाज़ आधारित इनपुट',
    cropRotationPlanner: 'फसल चक्र और मृदा पुनर्प्राप्ति योजनाकार',
    smsAlerts: 'एसएमएस अलर्ट सिस्टम',
    cropScheduleFeature: 'पूर्ण फसल कार्यक्रम',
    fertilizerYield: 'फसल उपज के लिए उर्वरक',
    diseaseStage: 'रोग चरण और संक्रमण स्तर',
    imageQuality: 'तस्वीर गुणवत्ता विश्लेषक',
    appLanguage: 'ऐप भाषा',
    chooseLanguage: 'ऐप इंटरफ़ेस के लिए अपनी पसंदीदा भाषा चुनें।',
    saveSettings: 'सेटिंग्स सहेजें',
    myProfile: 'मेरी प्रोफ़ाइल',
    updateProfile: 'प्रोफ़ाइल अपडेट करें',
    phoneNumber: 'फ़ोन नंबर',
    email: 'ईमेल',
    footerDesc: 'भारतीय किसानों के लिए AI-संचालित फसल सिफारिश और रोग भविष्यवाणी',
    allRightsReserved: '© 2026 Agro_Guardian. सर्वाधिकार सुरक्षित।',
    selectLocation: 'मानचित्र पर अपना स्थान चुनें',
    mapTitle: 'भारत का मानचित्र — अपना क्षेत्र चुनें',
  },
  te: {
    appName: 'Agro_Guardian',
    login: 'లాగిన్',
    signup: 'సైన్ అప్',
    logout: 'లాగ్‌అవుట్',
    back: 'వెనుకకు',
    save: 'సేవ్',
    settings: 'సెట్టింగ్‌లు',
    profile: 'ప్రొఫైల్',
    language: 'భాష',
    heroTitle: 'AI తెలివితేటలతో రైతులను సాధికారం చేయడం',
    heroDesc: 'వ్యక్తిగతీకరించిన పంట సిఫార్సులు మరియు తక్షణ వ్యాధి అంచనాలు పొందండి — మీ ప్రాంతీయ భాషలో.',
    getStarted: 'ప్రారంభించండి — ఇది ఉచితం',
    loginTitle: 'Agro_Guardian లోకి లాగిన్ అవ్వండి',
    signupTitle: 'మీ ఖాతాను సృష్టించండి',
    emailOrPhone: 'ఇమెయిల్ లేదా ఫోన్',
    password: 'పాస్‌వర్డ్',
    fullName: 'పూర్తి పేరు',
    phone: 'ఫోన్',
    emailOptional: 'ఇమెయిల్ (ఐచ్ఛికం)',
    state: 'రాష్ట్రం',
    district: 'జిల్లా',
    createPassword: 'పాస్‌వర్డ్ సృష్టించండి',
    createAccount: 'ఖాతా సృష్టించండి',
    continueWithGmail: 'Gmail తో కొనసాగించండి',
    signupWithGmail: 'Gmail తో సైన్ అప్',
    selectState: 'రాష్ట్రం ఎంచుకోండి',
    yourDistrict: 'మీ జిల్లా',
    welcomeFarmer: 'స్వాగతం, రైతు! 🌾',
    chooseService: 'ప్రారంభించడానికి సేవను ఎంచుకోండి',
    cropRecommendation: 'పంట సిఫార్సు',
    cropRecommendationDesc: 'మీ నేల, వాతావరణం మరియు బడ్జెట్ ఆధారంగా ఉత్తమ పంటను పండించడానికి AI-ఆధారిత సూచనలు పొందండి.',
    cropDiseasePrediction: 'పంట వ్యాధి అంచనా',
    cropDiseaseDesc: 'మీ పంట చిత్రాన్ని అప్‌లోడ్ చేయండి మరియు మా AI వ్యాధిని గుర్తించి చికిత్సలను సూచిస్తుంది.',
    chooseMode: 'మీ ఇష్టమైన ఇన్‌పుట్ మోడ్‌ను ఎంచుకోండి',
    simpleMode: 'సాధారణ మోడ్',
    simpleModeDesc: 'నేల రకం, బడ్జెట్, వాతావరణం & సీజన్ వంటి ప్రాథమిక సమాచారాన్ని నమోదు చేయండి.',
    advancedMode: 'అధునాతన మోడ్',
    advancedModeDesc: 'వివరమైన శాస్త్రీయ విశ్లేషణ కోసం N, P, K విలువలు, ఉష్ణోగ్రత, తేమ, pH & వర్షపాతం నమోదు చేయండి.',
    soilType: 'నేల రకం',
    budget: 'బడ్జెట్ (₹)',
    weatherLocation: 'ప్రస్తుత వాతావరణం / స్థానం',
    season: 'సీజన్',
    getRecommendation: 'సిఫార్సు పొందండి 🌱',
    nitrogen: 'నైట్రోజన్ (N) %',
    phosphorus: 'ఫాస్ఫరస్ (P) %',
    potassium: 'పొటాషియం (K) %',
    temperature: 'ఉష్ణోగ్రత (°C)',
    humidity: 'తేమ (%)',
    phValue: 'pH విలువ',
    rainfall: 'వర్షపాతం (మిమీ)',
    analyzeRecommend: 'విశ్లేషించి సిఫార్సు చేయండి 🔬',
    uploadOrCapture: 'ప్రభావిత పంట ఫోటోను అప్‌లోడ్ చేయండి లేదా తీయండి',
    clickToUpload: 'అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి',
    uploadImage: 'చిత్రాన్ని అప్‌లోడ్ చేయండి',
    useCamera: 'కెమెరా ఉపయోగించండి',
    supportedFormats: 'మద్దతు ఫార్మాట్‌లు: JPG, PNG, WebP',
    maxFileSize: 'గరిష్ట ఫైల్ పరిమాణం: 10 MB',
    blurryWarning: 'చిత్రం అస్పష్టంగా ఉండవచ్చు. మెరుగైన ఖచ్చితత్వం కోసం స్పష్టమైన ఫోటోను తిరిగి అప్‌లోడ్ చేయండి.',
    predictDisease: 'వ్యాధిని అంచనా వేయండి 🔍',
    confidence: 'విశ్వసనీయత',
    cropSchedule: 'పంట షెడ్యూల్ (విత్తనం నుండి కోత వరకు)',
    nextCropRotation: 'తదుపరి పంట చక్రం',
    recommendedFertilizers: 'సిఫార్సు చేసిన ఎరువులు',
    preventionTreatment: 'నివారణ & చికిత్స',
    fertilizerSuggestion: 'ఎరువు సూచన',
    weatherIntegration: 'వాతావరణ API ఏకీకరణ',
    voiceInput: 'వాయిస్ ఆధారిత ఇన్‌పుట్',
    cropRotationPlanner: 'పంట చక్రం & నేల పునరుద్ధరణ ప్లానర్',
    smsAlerts: 'SMS అలర్ట్ సిస్టమ్',
    cropScheduleFeature: 'పూర్తి పంట షెడ్యూల్',
    fertilizerYield: 'పంట దిగుబడి కోసం ఎరువు',
    diseaseStage: 'వ్యాధి దశ & సంక్రమణ స్థాయి',
    imageQuality: 'చిత్ర నాణ్యత విశ్లేషకుడు',
    appLanguage: 'యాప్ భాష',
    chooseLanguage: 'యాప్ ఇంటర్‌ఫేస్ కోసం మీ ఇష్టమైన భాషను ఎంచుకోండి.',
    saveSettings: 'సెట్టింగ్‌లను సేవ్ చేయండి',
    myProfile: 'నా ప్రొఫైల్',
    updateProfile: 'ప్రొఫైల్ అప్‌డేట్ చేయండి',
    phoneNumber: 'ఫోన్ నంబర్',
    email: 'ఇమెయిల్',
    footerDesc: 'భారతీయ రైతుల కోసం AI-ఆధారిత పంట సిఫార్సు & వ్యాధి అంచనా',
    allRightsReserved: '© 2026 Agro_Guardian. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    selectLocation: 'మ్యాప్‌లో మీ స్థానాన్ని ఎంచుకోండి',
    mapTitle: 'భారతదేశ మ్యాప్ — మీ ప్రాంతాన్ని ఎంచుకోండి',
  },
  ta: {
    appName: 'Agro_Guardian',
    login: 'உள்நுழைவு',
    signup: 'பதிவு',
    logout: 'வெளியேறு',
    back: 'பின்',
    save: 'சேமி',
    settings: 'அமைப்புகள்',
    profile: 'சுயவிவரம்',
    language: 'மொழி',
    heroTitle: 'AI அறிவுத்திறனுடன் விவசாயிகளை வலுப்படுத்துதல்',
    heroDesc: 'தனிப்பயனாக்கப்பட்ட பயிர் பரிந்துரைகள் மற்றும் உடனடி நோய் கணிப்புகளைப் பெறுங்கள்.',
    getStarted: 'தொடங்குங்கள் — இது இலவசம்',
    loginTitle: 'Agro_Guardian இல் உள்நுழையவும்',
    signupTitle: 'உங்கள் கணக்கை உருவாக்கவும்',
    emailOrPhone: 'மின்னஞ்சல் அல்லது தொலைபேசி',
    password: 'கடவுச்சொல்',
    fullName: 'முழு பெயர்',
    phone: 'தொலைபேசி',
    emailOptional: 'மின்னஞ்சல் (விருப்பம்)',
    state: 'மாநிலம்',
    district: 'மாவட்டம்',
    createPassword: 'கடவுச்சொல் உருவாக்கு',
    createAccount: 'கணக்கு உருவாக்கு',
    continueWithGmail: 'Gmail உடன் தொடரவும்',
    signupWithGmail: 'Gmail உடன் பதிவு',
    selectState: 'மாநிலத்தைத் தேர்ந்தெடு',
    yourDistrict: 'உங்கள் மாவட்டம்',
    welcomeFarmer: 'வரவேற்கிறோம், விவசாயி! 🌾',
    chooseService: 'தொடங்க ஒரு சேவையைத் தேர்ந்தெடுக்கவும்',
    cropRecommendation: 'பயிர் பரிந்துரை',
    cropRecommendationDesc: 'உங்கள் மண், வானிலை மற்றும் வரவு-செலவின் அடிப்படையில் சிறந்த பயிரை வளர்க்க AI பரிந்துரைகளைப் பெறுங்கள்.',
    cropDiseasePrediction: 'பயிர் நோய் கணிப்பு',
    cropDiseaseDesc: 'உங்கள் பயிரின் படத்தை பதிவேற்றவும், எங்கள் AI நோயைக் கண்டறிந்து சிகிச்சைகளை பரிந்துரைக்கும்.',
    chooseMode: 'உங்கள் விருப்பமான உள்ளீட்டு முறையைத் தேர்ந்தெடுக்கவும்',
    simpleMode: 'எளிய முறை',
    simpleModeDesc: 'மண் வகை, வரவு-செலவு, வானிலை & பருவம் போன்ற அடிப்படை தகவல்களை உள்ளிடவும்.',
    advancedMode: 'மேம்பட்ட முறை',
    advancedModeDesc: 'விரிவான அறிவியல் பகுப்பாய்வுக்கு N, P, K மதிப்புகள், வெப்பநிலை, ஈரப்பதம், pH & மழையளவை உள்ளிடவும்.',
    soilType: 'மண் வகை',
    budget: 'வரவு-செலவு (₹)',
    weatherLocation: 'தற்போதைய வானிலை / இடம்',
    season: 'பருவம்',
    getRecommendation: 'பரிந்துரையைப் பெறுங்கள் 🌱',
    nitrogen: 'நைட்ரஜன் (N) %',
    phosphorus: 'பாஸ்பரஸ் (P) %',
    potassium: 'பொட்டாசியம் (K) %',
    temperature: 'வெப்பநிலை (°C)',
    humidity: 'ஈரப்பதம் (%)',
    phValue: 'pH மதிப்பு',
    rainfall: 'மழையளவு (மிமீ)',
    analyzeRecommend: 'பகுப்பாய்வு & பரிந்துரை 🔬',
    uploadOrCapture: 'பாதிக்கப்பட்ட பயிரின் புகைப்படத்தை பதிவேற்றவும்',
    clickToUpload: 'பதிவேற்ற கிளிக் செய்யவும்',
    uploadImage: 'படம் பதிவேற்று',
    useCamera: 'கேமரா பயன்படுத்து',
    supportedFormats: 'ஆதரிக்கப்படும் வடிவங்கள்: JPG, PNG, WebP',
    maxFileSize: 'அதிகபட்ச கோப்பு அளவு: 10 MB',
    blurryWarning: 'படம் மங்கலாக இருக்கலாம். சிறந்த துல்லியத்திற்கு தெளிவான புகைப்படத்தை மீண்டும் பதிவேற்றவும்.',
    predictDisease: 'நோயை கணிக்கவும் 🔍',
    confidence: 'நம்பகத்தன்மை',
    cropSchedule: 'பயிர் அட்டவணை (விதைப்பு முதல் அறுவடை வரை)',
    nextCropRotation: 'அடுத்த பயிர் சுழற்சி',
    recommendedFertilizers: 'பரிந்துரைக்கப்பட்ட உரங்கள்',
    preventionTreatment: 'தடுப்பு & சிகிச்சை',
    fertilizerSuggestion: 'உர பரிந்துரை',
    weatherIntegration: 'வானிலை API ஒருங்கிணைப்பு',
    voiceInput: 'குரல் அடிப்படையிலான உள்ளீடு',
    cropRotationPlanner: 'பயிர் சுழற்சி & மண் மீட்பு திட்டமிடுபவர்',
    smsAlerts: 'SMS எச்சரிக்கை அமைப்பு',
    cropScheduleFeature: 'முழுமையான பயிர் அட்டவணை',
    fertilizerYield: 'பயிர் விளைச்சலுக்கான உரம்',
    diseaseStage: 'நோய் நிலை & தொற்று அளவு',
    imageQuality: 'பட தரம் பகுப்பாய்வு',
    appLanguage: 'பயன்பாட்டு மொழி',
    chooseLanguage: 'பயன்பாட்டு இடைமுகத்திற்கு உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',
    saveSettings: 'அமைப்புகளை சேமி',
    myProfile: 'என் சுயவிவரம்',
    updateProfile: 'சுயவிவரத்தை புதுப்பி',
    phoneNumber: 'தொலைபேசி எண்',
    email: 'மின்னஞ்சல்',
    footerDesc: 'இந்திய விவசாயிகளுக்கான AI-இயக்கப்படும் பயிர் பரிந்துரை & நோய் கணிப்பு',
    allRightsReserved: '© 2026 Agro_Guardian. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    selectLocation: 'வரைபடத்தில் உங்கள் இருப்பிடத்தைத் தேர்ந்தெடுக்கவும்',
    mapTitle: 'இந்தியா வரைபடம் — உங்கள் பகுதியைத் தேர்ந்தெடுக்கவும்',
  },
  kn: {
    appName: 'Agro_Guardian',
    login: 'ಲಾಗಿನ್',
    signup: 'ಸೈನ್ ಅಪ್',
    logout: 'ಲಾಗ್ ಔಟ್',
    back: 'ಹಿಂದೆ',
    save: 'ಉಳಿಸಿ',
    settings: 'ಸೆಟ್ಟಿಂಗ್ಸ್',
    profile: 'ಪ್ರೊಫೈಲ್',
    language: 'ಭಾಷೆ',
    heroTitle: 'AI ಬುದ್ಧಿವಂತಿಕೆಯೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣ',
    heroDesc: 'ವೈಯಕ್ತಿಕ ಬೆಳೆ ಶಿಫಾರಸುಗಳು ಮತ್ತು ತ್ವರಿತ ರೋಗ ಊಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ — ಇದು ಉಚಿತ',
    loginTitle: 'Agro_Guardian ಗೆ ಲಾಗಿನ್ ಆಗಿ',
    signupTitle: 'ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ',
    emailOrPhone: 'ಇಮೇಲ್ ಅಥವಾ ಫೋನ್',
    password: 'ಪಾಸ್‌ವರ್ಡ್',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    phone: 'ಫೋನ್',
    emailOptional: 'ಇಮೇಲ್ (ಐಚ್ಛಿಕ)',
    state: 'ರಾಜ್ಯ',
    district: 'ಜಿಲ್ಲೆ',
    createPassword: 'ಪಾಸ್‌ವರ್ಡ್ ರಚಿಸಿ',
    createAccount: 'ಖಾತೆ ರಚಿಸಿ',
    continueWithGmail: 'Gmail ನೊಂದಿಗೆ ಮುಂದುವರಿಸಿ',
    signupWithGmail: 'Gmail ನೊಂದಿಗೆ ಸೈನ್ ಅಪ್',
    selectState: 'ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    yourDistrict: 'ನಿಮ್ಮ ಜಿಲ್ಲೆ',
    welcomeFarmer: 'ಸ್ವಾಗತ, ರೈತ! 🌾',
    chooseService: 'ಪ್ರಾರಂಭಿಸಲು ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    cropRecommendation: 'ಬೆಳೆ ಶಿಫಾರಸು',
    cropRecommendationDesc: 'ನಿಮ್ಮ ಮಣ್ಣು, ಹವಾಮಾನ ಮತ್ತು ಬಜೆಟ್ ಆಧಾರದ ಮೇಲೆ AI ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.',
    cropDiseasePrediction: 'ಬೆಳೆ ರೋಗ ಊಹೆ',
    cropDiseaseDesc: 'ನಿಮ್ಮ ಬೆಳೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ AI ರೋಗವನ್ನು ಗುರುತಿಸುತ್ತದೆ.',
    chooseMode: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಇನ್‌ಪುಟ್ ಮೋಡ್ ಆಯ್ಕೆಮಾಡಿ',
    simpleMode: 'ಸರಳ ಮೋಡ್',
    simpleModeDesc: 'ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಬಜೆಟ್, ಹವಾಮಾನ & ಋತುವಿನಂತಹ ಮೂಲಭೂತ ಮಾಹಿತಿ ನಮೂದಿಸಿ.',
    advancedMode: 'ಸುಧಾರಿತ ಮೋಡ್',
    advancedModeDesc: 'N, P, K ಮೌಲ್ಯಗಳು, ಉಷ್ಣತೆ, ಆರ್ದ್ರತೆ, pH & ಮಳೆ ನಮೂದಿಸಿ.',
    soilType: 'ಮಣ್ಣಿನ ಪ್ರಕಾರ',
    budget: 'ಬಜೆಟ್ (₹)',
    weatherLocation: 'ಪ್ರಸ್ತುತ ಹವಾಮಾನ / ಸ್ಥಳ',
    season: 'ಋತು',
    getRecommendation: 'ಶಿಫಾರಸು ಪಡೆಯಿರಿ 🌱',
    nitrogen: 'ನೈಟ್ರೋಜನ್ (N) %',
    phosphorus: 'ಫಾಸ್ಫರಸ್ (P) %',
    potassium: 'ಪೊಟ್ಯಾಸಿಯಂ (K) %',
    temperature: 'ಉಷ್ಣತೆ (°C)',
    humidity: 'ಆರ್ದ್ರತೆ (%)',
    phValue: 'pH ಮೌಲ್ಯ',
    rainfall: 'ಮಳೆ (ಮಿಮೀ)',
    analyzeRecommend: 'ವಿಶ್ಲೇಷಣೆ & ಶಿಫಾರಸು 🔬',
    uploadOrCapture: 'ಬಾಧಿತ ಬೆಳೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    clickToUpload: 'ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
    uploadImage: 'ಚಿತ್ರ ಅಪ್‌ಲೋಡ್',
    useCamera: 'ಕ್ಯಾಮೆರಾ ಬಳಸಿ',
    supportedFormats: 'ಬೆಂಬಲಿತ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು: JPG, PNG, WebP',
    maxFileSize: 'ಗರಿಷ್ಠ ಫೈಲ್ ಗಾತ್ರ: 10 MB',
    blurryWarning: 'ಚಿತ್ರ ಮಸುಕಾಗಿರಬಹುದು. ಸ್ಪಷ್ಟ ಫೋಟೋ ಮತ್ತೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    predictDisease: 'ರೋಗವನ್ನು ಊಹಿಸಿ 🔍',
    confidence: 'ವಿಶ್ವಾಸಾರ್ಹತೆ',
    cropSchedule: 'ಬೆಳೆ ವೇಳಾಪಟ್ಟಿ',
    nextCropRotation: 'ಮುಂದಿನ ಬೆಳೆ ಚಕ್ರ',
    recommendedFertilizers: 'ಶಿಫಾರಸು ಮಾಡಿದ ಗೊಬ್ಬರಗಳು',
    preventionTreatment: 'ತಡೆಗಟ್ಟುವಿಕೆ & ಚಿಕಿತ್ಸೆ',
    fertilizerSuggestion: 'ಗೊಬ್ಬರ ಸಲಹೆ',
    weatherIntegration: 'ಹವಾಮಾನ API ಏಕೀಕರಣ',
    voiceInput: 'ಧ್ವನಿ ಆಧಾರಿತ ಇನ್‌ಪುಟ್',
    cropRotationPlanner: 'ಬೆಳೆ ಚಕ್ರ & ಮಣ್ಣು ಚೇತರಿಕೆ ಯೋಜಕ',
    smsAlerts: 'SMS ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆ',
    cropScheduleFeature: 'ಸಂಪೂರ್ಣ ಬೆಳೆ ವೇಳಾಪಟ್ಟಿ',
    fertilizerYield: 'ಬೆಳೆ ಇಳುವರಿಗೆ ಗೊಬ್ಬರ',
    diseaseStage: 'ರೋಗ ಹಂತ & ಸೋಂಕು ಮಟ್ಟ',
    imageQuality: 'ಚಿತ್ರ ಗುಣಮಟ್ಟ ವಿಶ್ಲೇಷಕ',
    appLanguage: 'ಅಪ್ಲಿಕೇಶನ್ ಭಾಷೆ',
    chooseLanguage: 'ಅಪ್ಲಿಕೇಶನ್ ಇಂಟರ್ಫೇಸ್‌ಗಾಗಿ ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ.',
    saveSettings: 'ಸೆಟ್ಟಿಂಗ್ಸ್ ಉಳಿಸಿ',
    myProfile: 'ನನ್ನ ಪ್ರೊಫೈಲ್',
    updateProfile: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ',
    phoneNumber: 'ಫೋನ್ ನಂಬರ್',
    email: 'ಇಮೇಲ್',
    footerDesc: 'ಭಾರತೀಯ ರೈತರಿಗಾಗಿ AI-ಆಧಾರಿತ ಬೆಳೆ ಶಿಫಾರಸು & ರೋಗ ಊಹೆ',
    allRightsReserved: '© 2026 Agro_Guardian. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    selectLocation: 'ನಕ್ಷೆಯಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    mapTitle: 'ಭಾರತ ನಕ್ಷೆ — ನಿಮ್ಮ ಪ್ರದೇಶ ಆಯ್ಕೆಮಾಡಿ',
  },
  mr: {
    appName: 'Agro_Guardian', login: 'लॉगिन', signup: 'साइन अप', logout: 'लॉगआउट', back: 'मागे', save: 'जतन करा', settings: 'सेटिंग्ज', profile: 'प्रोफाइल', language: 'भाषा',
    heroTitle: 'AI बुद्धिमत्तेने शेतकऱ्यांना सक्षम करणे', heroDesc: 'वैयक्तिक पीक शिफारशी आणि तात्काळ रोग अंदाज मिळवा.', getStarted: 'सुरू करा — हे विनामूल्य आहे',
    loginTitle: 'Agro_Guardian मध्ये लॉगिन करा', signupTitle: 'तुमचे खाते तयार करा', emailOrPhone: 'ईमेल किंवा फोन', password: 'पासवर्ड', fullName: 'पूर्ण नाव', phone: 'फोन', emailOptional: 'ईमेल (पर्यायी)', state: 'राज्य', district: 'जिल्हा', createPassword: 'पासवर्ड तयार करा', createAccount: 'खाते तयार करा', continueWithGmail: 'Gmail ने सुरू ठेवा', signupWithGmail: 'Gmail ने साइन अप करा', selectState: 'राज्य निवडा', yourDistrict: 'तुमचा जिल्हा',
    welcomeFarmer: 'स्वागत, शेतकरी! 🌾', chooseService: 'सुरू करण्यासाठी सेवा निवडा', cropRecommendation: 'पीक शिफारस', cropRecommendationDesc: 'तुमच्या मातीच्या, हवामानाच्या आणि बजेटच्या आधारे AI शिफारशी मिळवा.', cropDiseasePrediction: 'पीक रोग अंदाज', cropDiseaseDesc: 'तुमच्या पिकाची छायाचित्र अपलोड करा आणि आमचा AI रोग ओळखेल.',
    chooseMode: 'तुमचा आवडता इनपुट मोड निवडा', simpleMode: 'सोपा मोड', simpleModeDesc: 'मातीचा प्रकार, बजेट, हवामान आणि हंगाम यासारखी मूलभूत माहिती प्रविष्ट करा.', advancedMode: 'प्रगत मोड', advancedModeDesc: 'N, P, K मूल्ये, तापमान, आर्द्रता, pH आणि पाऊस प्रविष्ट करा.',
    soilType: 'मातीचा प्रकार', budget: 'बजेट (₹)', weatherLocation: 'सध्याचे हवामान / स्थान', season: 'हंगाम', getRecommendation: 'शिफारस मिळवा 🌱',
    nitrogen: 'नायट्रोजन (N) %', phosphorus: 'फॉस्फरस (P) %', potassium: 'पोटॅशियम (K) %', temperature: 'तापमान (°C)', humidity: 'आर्द्रता (%)', phValue: 'pH मूल्य', rainfall: 'पाऊस (मिमी)', analyzeRecommend: 'विश्लेषण आणि शिफारस 🔬',
    uploadOrCapture: 'प्रभावित पिकाचा फोटो अपलोड करा', clickToUpload: 'अपलोड करण्यासाठी क्लिक करा', uploadImage: 'छायाचित्र अपलोड करा', useCamera: 'कॅमेरा वापरा', supportedFormats: 'समर्थित स्वरूपे: JPG, PNG, WebP', maxFileSize: 'कमाल फाइल आकार: 10 MB', blurryWarning: 'छायाचित्र अस्पष्ट असू शकते. कृपया स्पष्ट फोटो पुन्हा अपलोड करा.', predictDisease: 'रोगाचा अंदाज लावा 🔍',
    confidence: 'विश्वसनीयता', cropSchedule: 'पीक वेळापत्रक', nextCropRotation: 'पुढील पीक फेरपालट', recommendedFertilizers: 'शिफारस केलेली खते', preventionTreatment: 'प्रतिबंध आणि उपचार', fertilizerSuggestion: 'खत सूचना',
    weatherIntegration: 'हवामान API एकत्रीकरण', voiceInput: 'आवाज आधारित इनपुट', cropRotationPlanner: 'पीक फेरपालट आणि माती पुनर्प्राप्ती योजनाकार', smsAlerts: 'SMS अलर्ट सिस्टम', cropScheduleFeature: 'संपूर्ण पीक वेळापत्रक', fertilizerYield: 'पीक उत्पादनासाठी खत', diseaseStage: 'रोग टप्पा आणि संक्रमण पातळी', imageQuality: 'छायाचित्र गुणवत्ता विश्लेषक',
    appLanguage: 'अॅप भाषा', chooseLanguage: 'अॅप इंटरफेससाठी तुमची आवडती भाषा निवडा.', saveSettings: 'सेटिंग्ज जतन करा', myProfile: 'माझे प्रोफाइल', updateProfile: 'प्रोफाइल अपडेट करा', phoneNumber: 'फोन नंबर', email: 'ईमेल',
    footerDesc: 'भारतीय शेतकऱ्यांसाठी AI-संचालित पीक शिफारस आणि रोग अंदाज', allRightsReserved: '© 2026 Agro_Guardian. सर्व हक्क राखीव.',
    selectLocation: 'नकाशावर तुमचे स्थान निवडा', mapTitle: 'भारत नकाशा — तुमचा प्रदेश निवडा',
  },
  bn: {
    appName: 'Agro_Guardian', login: 'লগইন', signup: 'সাইন আপ', logout: 'লগআউট', back: 'পিছনে', save: 'সংরক্ষণ', settings: 'সেটিংস', profile: 'প্রোফাইল', language: 'ভাষা',
    heroTitle: 'AI বুদ্ধিমত্তায় কৃষকদের ক্ষমতায়ন', heroDesc: 'ব্যক্তিগতকৃত ফসল সুপারিশ এবং তাৎক্ষণিক রোগ পূর্বাভাস পান।', getStarted: 'শুরু করুন — এটি বিনামূল্যে',
    loginTitle: 'Agro_Guardian এ লগইন করুন', signupTitle: 'আপনার অ্যাকাউন্ট তৈরি করুন', emailOrPhone: 'ইমেল বা ফোন', password: 'পাসওয়ার্ড', fullName: 'পুরো নাম', phone: 'ফোন', emailOptional: 'ইমেল (ঐচ্ছিক)', state: 'রাজ্য', district: 'জেলা', createPassword: 'পাসওয়ার্ড তৈরি করুন', createAccount: 'অ্যাকাউন্ট তৈরি করুন', continueWithGmail: 'Gmail দিয়ে চালিয়ে যান', signupWithGmail: 'Gmail দিয়ে সাইন আপ', selectState: 'রাজ্য নির্বাচন করুন', yourDistrict: 'আপনার জেলা',
    welcomeFarmer: 'স্বাগতম, কৃষক! 🌾', chooseService: 'শুরু করতে একটি পরিষেবা চয়ন করুন', cropRecommendation: 'ফসল সুপারিশ', cropRecommendationDesc: 'আপনার মাটি, আবহাওয়া এবং বাজেটের উপর ভিত্তি করে AI সুপারিশ পান।', cropDiseasePrediction: 'ফসল রোগ পূর্বাভাস', cropDiseaseDesc: 'আপনার ফসলের ছবি আপলোড করুন এবং আমাদের AI রোগ শনাক্ত করবে।',
    chooseMode: 'আপনার পছন্দের ইনপুট মোড চয়ন করুন', simpleMode: 'সহজ মোড', simpleModeDesc: 'মাটির ধরন, বাজেট, আবহাওয়া এবং মৌসুমের মতো মৌলিক তথ্য লিখুন।', advancedMode: 'উন্নত মোড', advancedModeDesc: 'N, P, K মান, তাপমাত্রা, আর্দ্রতা, pH এবং বৃষ্টিপাত লিখুন।',
    soilType: 'মাটির ধরন', budget: 'বাজেট (₹)', weatherLocation: 'বর্তমান আবহাওয়া / অবস্থান', season: 'মৌসুম', getRecommendation: 'সুপারিশ পান 🌱',
    nitrogen: 'নাইট্রোজেন (N) %', phosphorus: 'ফসফরাস (P) %', potassium: 'পটাশিয়াম (K) %', temperature: 'তাপমাত্রা (°C)', humidity: 'আর্দ্রতা (%)', phValue: 'pH মান', rainfall: 'বৃষ্টিপাত (মিমি)', analyzeRecommend: 'বিশ্লেষণ ও সুপারিশ 🔬',
    uploadOrCapture: 'আক্রান্ত ফসলের ছবি আপলোড করুন', clickToUpload: 'আপলোড করতে ক্লিক করুন', uploadImage: 'ছবি আপলোড', useCamera: 'ক্যামেরা ব্যবহার করুন', supportedFormats: 'সমর্থিত ফরম্যাট: JPG, PNG, WebP', maxFileSize: 'সর্বোচ্চ ফাইল আকার: 10 MB', blurryWarning: 'ছবি ঝাপসা হতে পারে। পরিষ্কার ছবি আবার আপলোড করুন।', predictDisease: 'রোগ পূর্বাভাস দিন 🔍',
    confidence: 'নির্ভরযোগ্যতা', cropSchedule: 'ফসল সময়সূচী', nextCropRotation: 'পরবর্তী ফসল চক্র', recommendedFertilizers: 'সুপারিশকৃত সার', preventionTreatment: 'প্রতিরোধ ও চিকিৎসা', fertilizerSuggestion: 'সার পরামর্শ',
    weatherIntegration: 'আবহাওয়া API সংযোগ', voiceInput: 'ভয়েস ভিত্তিক ইনপুট', cropRotationPlanner: 'ফসল চক্র ও মাটি পুনরুদ্ধার পরিকল্পনাকারী', smsAlerts: 'SMS সতর্কতা সিস্টেম', cropScheduleFeature: 'সম্পূর্ণ ফসল সময়সূচী', fertilizerYield: 'ফসল ফলনের জন্য সার', diseaseStage: 'রোগ পর্যায় ও সংক্রমণ মাত্রা', imageQuality: 'ছবি মান বিশ্লেষক',
    appLanguage: 'অ্যাপ ভাষা', chooseLanguage: 'অ্যাপ ইন্টারফেসের জন্য আপনার পছন্দের ভাষা চয়ন করুন।', saveSettings: 'সেটিংস সংরক্ষণ করুন', myProfile: 'আমার প্রোফাইল', updateProfile: 'প্রোফাইল আপডেট করুন', phoneNumber: 'ফোন নম্বর', email: 'ইমেল',
    footerDesc: 'ভারতীয় কৃষকদের জন্য AI-চালিত ফসল সুপারিশ ও রোগ পূর্বাভাস', allRightsReserved: '© 2026 Agro_Guardian. সর্বস্বত্ব সংরক্ষিত।',
    selectLocation: 'মানচিত্রে আপনার অবস্থান নির্বাচন করুন', mapTitle: 'ভারতের মানচিত্র — আপনার অঞ্চল নির্বাচন করুন',
  },
  gu: {
    appName: 'Agro_Guardian', login: 'લોગિન', signup: 'સાઇન અપ', logout: 'લોગઆઉટ', back: 'પાછા', save: 'સાચવો', settings: 'સેટિંગ્સ', profile: 'પ્રોફાઇલ', language: 'ભાષા',
    heroTitle: 'AI બુદ્ધિમત્તા સાથે ખેડૂતોને સશક્ત બનાવવા', heroDesc: 'વ્યક્તિગત પાક ભલામણો અને તાત્કાલિક રોગ આગાહીઓ મેળવો.', getStarted: 'શરૂ કરો — તે મફત છે',
    loginTitle: 'Agro_Guardian માં લોગિન કરો', signupTitle: 'તમારું ખાતું બનાવો', emailOrPhone: 'ઇમેઇલ અથવા ફોન', password: 'પાસવર્ડ', fullName: 'પૂરું નામ', phone: 'ફોન', emailOptional: 'ઇમેઇલ (વૈકલ્પિક)', state: 'રાજ્ય', district: 'જિલ્લો', createPassword: 'પાસવર્ડ બનાવો', createAccount: 'ખાતું બનાવો', continueWithGmail: 'Gmail સાથે ચાલુ રાખો', signupWithGmail: 'Gmail સાથે સાઇન અપ', selectState: 'રાજ્ય પસંદ કરો', yourDistrict: 'તમારો જિલ્લો',
    welcomeFarmer: 'સ્વાગત, ખેડૂત! 🌾', chooseService: 'શરૂ કરવા સેવા પસંદ કરો', cropRecommendation: 'પાક ભલામણ', cropRecommendationDesc: 'તમારી માટી, હવામાન અને બજેટ આધારે AI ભલામણો મેળવો.', cropDiseasePrediction: 'પાક રોગ આગાહી', cropDiseaseDesc: 'તમારા પાકની છબી અપલોડ કરો અને અમારું AI રોગ ઓળખશે.',
    chooseMode: 'તમારો પસંદગીનો ઇનપુટ મોડ પસંદ કરો', simpleMode: 'સરળ મોડ', simpleModeDesc: 'માટીનો પ્રકાર, બજેટ, હવામાન અને સીઝન જેવી મૂળભૂત માહિતી દાખલ કરો.', advancedMode: 'અદ્યતન મોડ', advancedModeDesc: 'N, P, K મૂલ્યો, તાપમાન, ભેજ, pH અને વરસાદ દાખલ કરો.',
    soilType: 'માટીનો પ્રકાર', budget: 'બજેટ (₹)', weatherLocation: 'વર્તમાન હવામાન / સ્થાન', season: 'સીઝન', getRecommendation: 'ભલામણ મેળવો 🌱',
    nitrogen: 'નાઇટ્રોજન (N) %', phosphorus: 'ફોસ્ફરસ (P) %', potassium: 'પોટેશિયમ (K) %', temperature: 'તાપમાન (°C)', humidity: 'ભેજ (%)', phValue: 'pH મૂલ્ય', rainfall: 'વરસાદ (મિમી)', analyzeRecommend: 'વિશ્લેષણ અને ભલામણ 🔬',
    uploadOrCapture: 'અસરગ્રસ્ત પાકનો ફોટો અપલોડ કરો', clickToUpload: 'અપલોડ કરવા ક્લિક કરો', uploadImage: 'છબી અપલોડ', useCamera: 'કેમેરા વાપરો', supportedFormats: 'સપોર્ટેડ ફોર્મેટ: JPG, PNG, WebP', maxFileSize: 'મહત્તમ ફાઇલ કદ: 10 MB', blurryWarning: 'છબી ઝાંખી હોઈ શકે. સ્પષ્ટ ફોટો ફરીથી અપલોડ કરો.', predictDisease: 'રોગની આગાહી કરો 🔍',
    confidence: 'વિશ્વસનીયતા', cropSchedule: 'પાક સમયપત્રક', nextCropRotation: 'આગળનું પાક ચક્ર', recommendedFertilizers: 'ભલામણ કરેલ ખાતરો', preventionTreatment: 'નિવારણ અને સારવાર', fertilizerSuggestion: 'ખાતર સૂચન',
    weatherIntegration: 'હવામાન API એકીકરણ', voiceInput: 'અવાજ આધારિત ઇનપુટ', cropRotationPlanner: 'પાક ચક્ર અને માટી પુનઃપ્રાપ્તિ આયોજક', smsAlerts: 'SMS ચેતવણી સિસ્ટમ', cropScheduleFeature: 'સંપૂર્ણ પાક સમયપત્રક', fertilizerYield: 'પાક ઉપજ માટે ખાતર', diseaseStage: 'રોગ તબક્કો અને ચેપ સ્તર', imageQuality: 'છબી ગુણવત્તા વિશ્લેષક',
    appLanguage: 'એપ ભાષા', chooseLanguage: 'એપ ઇન્ટરફેસ માટે તમારી પસંદગીની ભાષા પસંદ કરો.', saveSettings: 'સેટિંગ્સ સાચવો', myProfile: 'મારી પ્રોફાઇલ', updateProfile: 'પ્રોફાઇલ અપડેટ કરો', phoneNumber: 'ફોન નંબર', email: 'ઇમેઇલ',
    footerDesc: 'ભારતીય ખેડૂતો માટે AI-સંચાલિત પાક ભલામણ અને રોગ આગાહી', allRightsReserved: '© 2026 Agro_Guardian. સર્વાધિકાર સુરક્ષિત.',
    selectLocation: 'નકશા પર તમારું સ્થાન પસંદ કરો', mapTitle: 'ભારત નકશો — તમારો વિસ્તાર પસંદ કરો',
  },
  pa: {
    appName: 'Agro_Guardian', login: 'ਲਾਗਇਨ', signup: 'ਸਾਈਨ ਅੱਪ', logout: 'ਲਾਗਆਊਟ', back: 'ਪਿੱਛੇ', save: 'ਸੇਵ', settings: 'ਸੈਟਿੰਗਜ਼', profile: 'ਪ੍ਰੋਫਾਈਲ', language: 'ਭਾਸ਼ਾ',
    heroTitle: 'AI ਬੁੱਧੀ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ', heroDesc: 'ਨਿੱਜੀ ਫ਼ਸਲ ਸਿਫ਼ਾਰਸ਼ਾਂ ਅਤੇ ਤੁਰੰਤ ਬਿਮਾਰੀ ਦੀ ਭਵਿੱਖਬਾਣੀ ਪ੍ਰਾਪਤ ਕਰੋ।', getStarted: 'ਸ਼ੁਰੂ ਕਰੋ — ਇਹ ਮੁਫ਼ਤ ਹੈ',
    loginTitle: 'Agro_Guardian ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ', signupTitle: 'ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ', emailOrPhone: 'ਈਮੇਲ ਜਾਂ ਫ਼ੋਨ', password: 'ਪਾਸਵਰਡ', fullName: 'ਪੂਰਾ ਨਾਮ', phone: 'ਫ਼ੋਨ', emailOptional: 'ਈਮੇਲ (ਵਿਕਲਪਿਕ)', state: 'ਰਾਜ', district: 'ਜ਼ਿਲ੍ਹਾ', createPassword: 'ਪਾਸਵਰਡ ਬਣਾਓ', createAccount: 'ਖਾਤਾ ਬਣਾਓ', continueWithGmail: 'Gmail ਨਾਲ ਜਾਰੀ ਰੱਖੋ', signupWithGmail: 'Gmail ਨਾਲ ਸਾਈਨ ਅੱਪ', selectState: 'ਰਾਜ ਚੁਣੋ', yourDistrict: 'ਤੁਹਾਡਾ ਜ਼ਿਲ੍ਹਾ',
    welcomeFarmer: 'ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ! 🌾', chooseService: 'ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਸੇਵਾ ਚੁਣੋ', cropRecommendation: 'ਫ਼ਸਲ ਸਿਫ਼ਾਰਸ਼', cropRecommendationDesc: 'ਆਪਣੀ ਮਿੱਟੀ, ਮੌਸਮ ਅਤੇ ਬਜਟ ਦੇ ਆਧਾਰ \'ਤੇ AI ਸਿਫ਼ਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।', cropDiseasePrediction: 'ਫ਼ਸਲ ਬਿਮਾਰੀ ਭਵਿੱਖਬਾਣੀ', cropDiseaseDesc: 'ਆਪਣੀ ਫ਼ਸਲ ਦੀ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ ਅਤੇ ਸਾਡਾ AI ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ ਕਰੇਗਾ।',
    chooseMode: 'ਆਪਣਾ ਪਸੰਦੀਦਾ ਇੰਪੁੱਟ ਮੋਡ ਚੁਣੋ', simpleMode: 'ਸਧਾਰਨ ਮੋਡ', simpleModeDesc: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ, ਬਜਟ, ਮੌਸਮ ਅਤੇ ਸੀਜ਼ਨ ਵਰਗੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ ਦਰਜ ਕਰੋ।', advancedMode: 'ਐਡਵਾਂਸਡ ਮੋਡ', advancedModeDesc: 'N, P, K ਮੁੱਲ, ਤਾਪਮਾਨ, ਨਮੀ, pH ਅਤੇ ਬਾਰਿਸ਼ ਦਰਜ ਕਰੋ।',
    soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ', budget: 'ਬਜਟ (₹)', weatherLocation: 'ਮੌਜੂਦਾ ਮੌਸਮ / ਥਾਂ', season: 'ਸੀਜ਼ਨ', getRecommendation: 'ਸਿਫ਼ਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ 🌱',
    nitrogen: 'ਨਾਈਟ੍ਰੋਜਨ (N) %', phosphorus: 'ਫ਼ਾਸਫ਼ੋਰਸ (P) %', potassium: 'ਪੋਟਾਸ਼ੀਅਮ (K) %', temperature: 'ਤਾਪਮਾਨ (°C)', humidity: 'ਨਮੀ (%)', phValue: 'pH ਮੁੱਲ', rainfall: 'ਬਾਰਿਸ਼ (ਮਿਮੀ)', analyzeRecommend: 'ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਸਿਫ਼ਾਰਸ਼ 🔬',
    uploadOrCapture: 'ਪ੍ਰਭਾਵਿਤ ਫ਼ਸਲ ਦੀ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ', clickToUpload: 'ਅੱਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ', uploadImage: 'ਤਸਵੀਰ ਅੱਪਲੋਡ', useCamera: 'ਕੈਮਰਾ ਵਰਤੋ', supportedFormats: 'ਸਮਰਥਿਤ ਫ਼ਾਰਮੈਟ: JPG, PNG, WebP', maxFileSize: 'ਵੱਧ ਤੋਂ ਵੱਧ ਫ਼ਾਈਲ ਸਾਈਜ਼: 10 MB', blurryWarning: 'ਤਸਵੀਰ ਧੁੰਦਲੀ ਹੋ ਸਕਦੀ ਹੈ। ਸਾਫ਼ ਤਸਵੀਰ ਦੁਬਾਰਾ ਅੱਪਲੋਡ ਕਰੋ।', predictDisease: 'ਬਿਮਾਰੀ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰੋ 🔍',
    confidence: 'ਭਰੋਸੇਯੋਗਤਾ', cropSchedule: 'ਫ਼ਸਲ ਸਮਾਂ-ਸੂਚੀ', nextCropRotation: 'ਅਗਲਾ ਫ਼ਸਲ ਚੱਕਰ', recommendedFertilizers: 'ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀਆਂ ਖਾਦਾਂ', preventionTreatment: 'ਰੋਕਥਾਮ ਅਤੇ ਇਲਾਜ', fertilizerSuggestion: 'ਖਾਦ ਸੁਝਾਅ',
    weatherIntegration: 'ਮੌਸਮ API ਏਕੀਕਰਨ', voiceInput: 'ਆਵਾਜ਼ ਅਧਾਰਿਤ ਇੰਪੁੱਟ', cropRotationPlanner: 'ਫ਼ਸਲ ਚੱਕਰ ਅਤੇ ਮਿੱਟੀ ਰਿਕਵਰੀ ਯੋਜਨਾਕਾਰ', smsAlerts: 'SMS ਚੇਤਾਵਨੀ ਸਿਸਟਮ', cropScheduleFeature: 'ਪੂਰੀ ਫ਼ਸਲ ਸਮਾਂ-ਸੂਚੀ', fertilizerYield: 'ਫ਼ਸਲ ਉਪਜ ਲਈ ਖਾਦ', diseaseStage: 'ਬਿਮਾਰੀ ਪੜਾਅ ਅਤੇ ਸੰਕ੍ਰਮਣ ਪੱਧਰ', imageQuality: 'ਤਸਵੀਰ ਗੁਣਵੱਤਾ ਵਿਸ਼ਲੇਸ਼ਕ',
    appLanguage: 'ਐਪ ਭਾਸ਼ਾ', chooseLanguage: 'ਐਪ ਇੰਟਰਫੇਸ ਲਈ ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਚੁਣੋ।', saveSettings: 'ਸੈਟਿੰਗਜ਼ ਸੇਵ ਕਰੋ', myProfile: 'ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ', updateProfile: 'ਪ੍ਰੋਫਾਈਲ ਅੱਪਡੇਟ ਕਰੋ', phoneNumber: 'ਫ਼ੋਨ ਨੰਬਰ', email: 'ਈਮੇਲ',
    footerDesc: 'ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਲਈ AI-ਸੰਚਾਲਿਤ ਫ਼ਸਲ ਸਿਫ਼ਾਰਸ਼ ਅਤੇ ਬਿਮਾਰੀ ਭਵਿੱਖਬਾਣੀ', allRightsReserved: '© 2026 Agro_Guardian. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
    selectLocation: 'ਨਕਸ਼ੇ \'ਤੇ ਆਪਣੀ ਥਾਂ ਚੁਣੋ', mapTitle: 'ਭਾਰਤ ਨਕਸ਼ਾ — ਆਪਣਾ ਖੇਤਰ ਚੁਣੋ',
  },
  ml: {
    appName: 'Agro_Guardian', login: 'ലോഗിൻ', signup: 'സൈൻ അപ്പ്', logout: 'ലോഗൗട്ട്', back: 'പിന്നിലേക്ക്', save: 'സേവ്', settings: 'ക്രമീകരണങ്ങൾ', profile: 'പ്രൊഫൈൽ', language: 'ഭാഷ',
    heroTitle: 'AI ബുദ്ധിമത്തയോടെ കർഷകരെ ശാക്തീകരിക്കുന്നു', heroDesc: 'വ്യക്തിഗത വിള ശുപാർശകളും തൽക്ഷണ രോഗ പ്രവചനങ്ങളും നേടുക.', getStarted: 'ആരംഭിക്കുക — ഇത് സൗജന്യമാണ്',
    loginTitle: 'Agro_Guardian ൽ ലോഗിൻ ചെയ്യുക', signupTitle: 'നിങ്ങളുടെ അക്കൗണ്ട് സൃഷ്ടിക്കുക', emailOrPhone: 'ഇമെയിൽ അല്ലെങ്കിൽ ഫോൺ', password: 'പാസ്‌വേഡ്', fullName: 'മുഴുവൻ പേര്', phone: 'ഫോൺ', emailOptional: 'ഇമെയിൽ (ഓപ്ഷണൽ)', state: 'സംസ്ഥാനം', district: 'ജില്ല', createPassword: 'പാസ്‌വേഡ് സൃഷ്ടിക്കുക', createAccount: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക', continueWithGmail: 'Gmail ഉപയോഗിച്ച് തുടരുക', signupWithGmail: 'Gmail ഉപയോഗിച്ച് സൈൻ അപ്പ്', selectState: 'സംസ്ഥാനം തിരഞ്ഞെടുക്കുക', yourDistrict: 'നിങ്ങളുടെ ജില്ല',
    welcomeFarmer: 'സ്വാഗതം, കർഷകൻ! 🌾', chooseService: 'ആരംഭിക്കാൻ ഒരു സേവനം തിരഞ്ഞെടുക്കുക', cropRecommendation: 'വിള ശുപാർശ', cropRecommendationDesc: 'നിങ്ങളുടെ മണ്ണ്, കാലാവസ്ഥ, ബജറ്റ് അടിസ്ഥാനമാക്കി AI ശുപാർശകൾ നേടുക.', cropDiseasePrediction: 'വിള രോഗ പ്രവചനം', cropDiseaseDesc: 'നിങ്ങളുടെ വിളയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക, ഞങ്ങളുടെ AI രോഗം തിരിച്ചറിയും.',
    chooseMode: 'നിങ്ങളുടെ ഇഷ്ടപ്പെട്ട ഇൻപുട്ട് മോഡ് തിരഞ്ഞെടുക്കുക', simpleMode: 'ലളിത മോഡ്', simpleModeDesc: 'മണ്ണിന്റെ തരം, ബജറ്റ്, കാലാവസ്ഥ & സീസൺ പോലുള്ള അടിസ്ഥാന വിവരങ്ങൾ നൽകുക.', advancedMode: 'അഡ്വാൻസ്ഡ് മോഡ്', advancedModeDesc: 'N, P, K മൂല്യങ്ങൾ, താപനില, ഈർപ്പം, pH & മഴ നൽകുക.',
    soilType: 'മണ്ണിന്റെ തരം', budget: 'ബജറ്റ് (₹)', weatherLocation: 'നിലവിലെ കാലാവസ്ഥ / സ്ഥലം', season: 'സീസൺ', getRecommendation: 'ശുപാർശ നേടുക 🌱',
    nitrogen: 'നൈട്രജൻ (N) %', phosphorus: 'ഫോസ്ഫറസ് (P) %', potassium: 'പൊട്ടാസ്യം (K) %', temperature: 'താപനില (°C)', humidity: 'ഈർപ്പം (%)', phValue: 'pH മൂല്യം', rainfall: 'മഴ (മിമി)', analyzeRecommend: 'വിശകലനം & ശുപാർശ 🔬',
    uploadOrCapture: 'ബാധിച്ച വിളയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക', clickToUpload: 'അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക', uploadImage: 'ചിത്രം അപ്‌ലോഡ്', useCamera: 'ക്യാമറ ഉപയോഗിക്കുക', supportedFormats: 'പിന്തുണയ്ക്കുന്ന ഫോർമാറ്റുകൾ: JPG, PNG, WebP', maxFileSize: 'പരമാവധി ഫയൽ വലുപ്പം: 10 MB', blurryWarning: 'ചിത്രം മങ്ങിയതാകാം. വ്യക്തമായ ഫോട്ടോ വീണ്ടും അപ്‌ലോഡ് ചെയ്യുക.', predictDisease: 'രോഗം പ്രവചിക്കുക 🔍',
    confidence: 'വിശ്വാസ്യത', cropSchedule: 'വിള ഷെഡ്യൂൾ', nextCropRotation: 'അടുത്ത വിള ചക്രം', recommendedFertilizers: 'ശുപാർശ ചെയ്ത വളങ്ങൾ', preventionTreatment: 'പ്രതിരോധം & ചികിത്സ', fertilizerSuggestion: 'വളം നിർദേശം',
    weatherIntegration: 'കാലാവസ്ഥ API സംയോജനം', voiceInput: 'ശബ്ദ അടിസ്ഥാന ഇൻപുട്ട്', cropRotationPlanner: 'വിള ചക്രം & മണ്ണ് വീണ്ടെടുക്കൽ ആസൂത്രണം', smsAlerts: 'SMS മുന്നറിയിപ്പ് സംവിധാനം', cropScheduleFeature: 'പൂർണ്ണ വിള ഷെഡ്യൂൾ', fertilizerYield: 'വിള ഉൽപ്പാദനത്തിന് വളം', diseaseStage: 'രോഗ ഘട്ടം & അണുബാധ നിലവാരം', imageQuality: 'ചിത്ര ഗുണനിലവാര വിശകലനം',
    appLanguage: 'ആപ്പ് ഭാഷ', chooseLanguage: 'ആപ്പ് ഇന്റർഫേസിനായി നിങ്ങളുടെ ഇഷ്ടഭാഷ തിരഞ്ഞെടുക്കുക.', saveSettings: 'ക്രമീകരണങ്ങൾ സേവ് ചെയ്യുക', myProfile: 'എന്റെ പ്രൊഫൈൽ', updateProfile: 'പ്രൊഫൈൽ അപ്‌ഡേറ്റ് ചെയ്യുക', phoneNumber: 'ഫോൺ നമ്പർ', email: 'ഇമെയിൽ',
    footerDesc: 'ഇന്ത്യൻ കർഷകർക്കായുള്ള AI-പ്രവർത്തിത വിള ശുപാർശ & രോഗ പ്രവചനം', allRightsReserved: '© 2026 Agro_Guardian. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.',
    selectLocation: 'മാപ്പിൽ നിങ്ങളുടെ സ്ഥാനം തിരഞ്ഞെടുക്കുക', mapTitle: 'ഇന്ത്യ മാപ്പ് — നിങ്ങളുടെ പ്രദേശം തിരഞ്ഞെടുക്കുക',
  },
  or: {
    appName: 'Agro_Guardian', login: 'ଲଗଇନ', signup: 'ସାଇନ ଅପ', logout: 'ଲଗଆଉଟ', back: 'ପଛକୁ', save: 'ସେଭ', settings: 'ସେଟିଂସ', profile: 'ପ୍ରୋଫାଇଲ', language: 'ଭାଷା',
    heroTitle: 'AI ବୁଦ୍ଧିମତ୍ତା ସହ ଚାଷୀଙ୍କୁ ସଶକ୍ତ କରିବା', heroDesc: 'ବ୍ୟକ୍ତିଗତ ଫସଲ ସୁପାରିଶ ଏବଂ ତୁରନ୍ତ ରୋଗ ପୂର୍ବାନୁମାନ ପାଆନ୍ତୁ।', getStarted: 'ଆରମ୍ଭ କରନ୍ତୁ — ଏହା ମାଗଣା',
    loginTitle: 'Agro_Guardian ରେ ଲଗଇନ କରନ୍ତୁ', signupTitle: 'ଆପଣଙ୍କ ଖାତା ତିଆରି କରନ୍ତୁ', emailOrPhone: 'ଇମେଲ ବା ଫୋନ', password: 'ପାସୱାର୍ଡ', fullName: 'ପୂର୍ଣ୍ଣ ନାମ', phone: 'ଫୋନ', emailOptional: 'ଇମେଲ (ଐଚ୍ଛିକ)', state: 'ରାଜ୍ୟ', district: 'ଜିଲ୍ଲା', createPassword: 'ପାସୱାର୍ଡ ତିଆରି କରନ୍ତୁ', createAccount: 'ଖାତା ତିଆରି କରନ୍ତୁ', continueWithGmail: 'Gmail ସହ ଜାରି ରଖନ୍ତୁ', signupWithGmail: 'Gmail ସହ ସାଇନ ଅପ', selectState: 'ରାଜ୍ୟ ବାଛନ୍ତୁ', yourDistrict: 'ଆପଣଙ୍କ ଜିଲ୍ଲା',
    welcomeFarmer: 'ସ୍ଵାଗତ, ଚାଷୀ! 🌾', chooseService: 'ଆରମ୍ଭ କରିବାକୁ ସେବା ବାଛନ୍ତୁ', cropRecommendation: 'ଫସଲ ସୁପାରିଶ', cropRecommendationDesc: 'ଆପଣଙ୍କ ମାଟି, ପାଣିପାଗ ଏବଂ ବଜେଟ ଆଧାରରେ AI ସୁପାରିଶ ପାଆନ୍ତୁ।', cropDiseasePrediction: 'ଫସଲ ରୋଗ ପୂର୍ବାନୁମାନ', cropDiseaseDesc: 'ଆପଣଙ୍କ ଫସଲର ଛବି ଅପଲୋଡ କରନ୍ତୁ ଏବଂ ଆମର AI ରୋଗ ଚିହ୍ନଟ କରିବ।',
    chooseMode: 'ଆପଣଙ୍କ ପସନ୍ଦର ଇନପୁଟ ମୋଡ ବାଛନ୍ତୁ', simpleMode: 'ସରଳ ମୋଡ', simpleModeDesc: 'ମାଟି ପ୍ରକାର, ବଜେଟ, ପାଣିପାଗ ଏବଂ ଋତୁ ଭଳି ମୌଳିକ ସୂଚନା ପ୍ରବେଶ କରନ୍ତୁ।', advancedMode: 'ଉନ୍ନତ ମୋଡ', advancedModeDesc: 'N, P, K ମୂଲ୍ୟ, ତାପମାତ୍ରା, ଆର୍ଦ୍ରତା, pH ଏବଂ ବର୍ଷା ପ୍ରବେଶ କରନ୍ତୁ।',
    soilType: 'ମାଟି ପ୍ରକାର', budget: 'ବଜେଟ (₹)', weatherLocation: 'ବର୍ତ୍ତମାନ ପାଣିପାଗ / ସ୍ଥାନ', season: 'ଋତୁ', getRecommendation: 'ସୁପାରିଶ ପାଆନ୍ତୁ 🌱',
    nitrogen: 'ନାଇଟ୍ରୋଜେନ (N) %', phosphorus: 'ଫସ୍ଫରସ (P) %', potassium: 'ପୋଟାସିୟମ (K) %', temperature: 'ତାପମାତ୍ରା (°C)', humidity: 'ଆର୍ଦ୍ରତା (%)', phValue: 'pH ମୂଲ୍ୟ', rainfall: 'ବର୍ଷା (ମିମି)', analyzeRecommend: 'ବିଶ୍ଳେଷଣ ଏବଂ ସୁପାରିଶ 🔬',
    uploadOrCapture: 'ପ୍ରଭାବିତ ଫସଲର ଫଟୋ ଅପଲୋଡ କରନ୍ତୁ', clickToUpload: 'ଅପଲୋଡ କରିବାକୁ କ୍ଲିକ କରନ୍ତୁ', uploadImage: 'ଛବି ଅପଲୋଡ', useCamera: 'କ୍ୟାମେରା ବ୍ୟବହାର କରନ୍ତୁ', supportedFormats: 'ସମର୍ଥିତ ଫର୍ମାଟ: JPG, PNG, WebP', maxFileSize: 'ସର୍ବାଧିକ ଫାଇଲ ଆକାର: 10 MB', blurryWarning: 'ଛବି ଝାପସା ହୋଇପାରେ। ସ୍ପଷ୍ଟ ଫଟୋ ପୁନଃ ଅପଲୋଡ କରନ୍ତୁ।', predictDisease: 'ରୋଗ ପୂର୍ବାନୁମାନ କରନ୍ତୁ 🔍',
    confidence: 'ବିଶ୍ୱସନୀୟତା', cropSchedule: 'ଫସଲ ସମୟସୂଚୀ', nextCropRotation: 'ପରବର୍ତ୍ତୀ ଫସଲ ଚକ୍ର', recommendedFertilizers: 'ସୁପାରିଶ କରାଯାଇଥିବା ସାର', preventionTreatment: 'ନିବାରଣ ଏବଂ ଚିକିତ୍ସା', fertilizerSuggestion: 'ସାର ସୁଝାବ',
    weatherIntegration: 'ପାଣିପାଗ API ଏକୀକରଣ', voiceInput: 'ସ୍ୱର ଆଧାରିତ ଇନପୁଟ', cropRotationPlanner: 'ଫସଲ ଚକ୍ର ଏବଂ ମାଟି ପୁନରୁଦ୍ଧାର ଯୋଜନାକାରୀ', smsAlerts: 'SMS ସତର୍କତା ସିଷ୍ଟମ', cropScheduleFeature: 'ସମ୍ପୂର୍ଣ୍ଣ ଫସଲ ସମୟସୂଚୀ', fertilizerYield: 'ଫସଲ ଉତ୍ପାଦନ ପାଇଁ ସାର', diseaseStage: 'ରୋଗ ପର୍ଯ୍ୟାୟ ଏବଂ ସଂକ୍ରମଣ ସ୍ତର', imageQuality: 'ଛବି ଗୁଣବତ୍ତା ବିଶ୍ଳେଷକ',
    appLanguage: 'ଆପ ଭାଷା', chooseLanguage: 'ଆପ ଇଣ୍ଟରଫେସ ପାଇଁ ଆପଣଙ୍କ ପସନ୍ଦର ଭାଷା ବାଛନ୍ତୁ।', saveSettings: 'ସେଟିଂସ ସେଭ କରନ୍ତୁ', myProfile: 'ମୋ ପ୍ରୋଫାଇଲ', updateProfile: 'ପ୍ରୋଫାଇଲ ଅପଡେଟ କରନ୍ତୁ', phoneNumber: 'ଫୋନ ନମ୍ବର', email: 'ଇମେଲ',
    footerDesc: 'ଭାରତୀୟ ଚାଷୀଙ୍କ ପାଇଁ AI-ଚାଳିତ ଫସଲ ସୁପାରିଶ ଏବଂ ରୋଗ ପୂର୍ବାନୁମାନ', allRightsReserved: '© 2026 Agro_Guardian। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।',
    selectLocation: 'ମାନଚିତ୍ରରେ ଆପଣଙ୍କ ସ୍ଥାନ ବାଛନ୍ତୁ', mapTitle: 'ଭାରତ ମାନଚିତ୍ର — ଆପଣଙ୍କ ଅଞ୍ଚଳ ବାଛନ୍ତୁ',
  },
  as: {
    appName: 'Agro_Guardian', login: 'লগইন', signup: 'চাইন আপ', logout: 'লগআউট', back: 'পিছলৈ', save: 'সংৰক্ষণ', settings: 'ছেটিংছ', profile: 'প্ৰফাইল', language: 'ভাষা',
    heroTitle: 'AI বুদ্ধিমত্তাৰে কৃষকসকলক সবলীকৰণ', heroDesc: 'ব্যক্তিগত শস্য পৰামৰ্শ আৰু তাৎক্ষণিক ৰোগ ভৱিষ্যদ্বাণী লাভ কৰক।', getStarted: 'আৰম্ভ কৰক — ই বিনামূলীয়া',
    loginTitle: 'Agro_Guardian ত লগইন কৰক', signupTitle: 'আপোনাৰ একাউণ্ট সৃষ্টি কৰক', emailOrPhone: 'ইমেইল বা ফোন', password: 'পাছৱৰ্ড', fullName: 'সম্পূৰ্ণ নাম', phone: 'ফোন', emailOptional: 'ইমেইল (ঐচ্ছিক)', state: 'ৰাজ্য', district: 'জিলা', createPassword: 'পাছৱৰ্ড সৃষ্টি কৰক', createAccount: 'একাউণ্ট সৃষ্টি কৰক', continueWithGmail: 'Gmail ৰে আগবাঢ়ক', signupWithGmail: 'Gmail ৰে চাইন আপ', selectState: 'ৰাজ্য বাছনি কৰক', yourDistrict: 'আপোনাৰ জিলা',
    welcomeFarmer: 'স্বাগতম, কৃষক! 🌾', chooseService: 'আৰম্ভ কৰিবলৈ সেৱা বাছনি কৰক', cropRecommendation: 'শস্য পৰামৰ্শ', cropRecommendationDesc: 'আপোনাৰ মাটি, বতৰ আৰু বাজেটৰ ওপৰত AI পৰামৰ্শ লাভ কৰক।', cropDiseasePrediction: 'শস্য ৰোগ ভৱিষ্যদ্বাণী', cropDiseaseDesc: 'আপোনাৰ শস্যৰ ছবি আপলোড কৰক আৰু আমাৰ AI ৰোগ চিনাক্ত কৰিব।',
    chooseMode: 'আপোনাৰ পছন্দৰ ইনপুট ম\'ড বাছনি কৰক', simpleMode: 'সৰল ম\'ড', simpleModeDesc: 'মাটিৰ প্ৰকাৰ, বাজেট, বতৰ আৰু ঋতু আদি মৌলিক তথ্য দিয়ক।', advancedMode: 'উন্নত ম\'ড', advancedModeDesc: 'N, P, K মূল্য, তাপমাত্ৰা, আৰ্দ্ৰতা, pH আৰু বৰষুণ দিয়ক।',
    soilType: 'মাটিৰ প্ৰকাৰ', budget: 'বাজেট (₹)', weatherLocation: 'বৰ্তমান বতৰ / স্থান', season: 'ঋতু', getRecommendation: 'পৰামৰ্শ লাভ কৰক 🌱',
    nitrogen: 'নাইট্ৰজেন (N) %', phosphorus: 'ফছফৰাছ (P) %', potassium: 'পটাছিয়াম (K) %', temperature: 'তাপমাত্ৰা (°C)', humidity: 'আৰ্দ্ৰতা (%)', phValue: 'pH মূল্য', rainfall: 'বৰষুণ (মিমি)', analyzeRecommend: 'বিশ্লেষণ আৰু পৰামৰ্শ 🔬',
    uploadOrCapture: 'প্ৰভাৱিত শস্যৰ ফটো আপলোড কৰক', clickToUpload: 'আপলোড কৰিবলৈ ক্লিক কৰক', uploadImage: 'ছবি আপলোড', useCamera: 'কেমেৰা ব্যৱহাৰ কৰক', supportedFormats: 'সমৰ্থিত ফৰ্মেট: JPG, PNG, WebP', maxFileSize: 'সৰ্বাধিক ফাইল আকাৰ: 10 MB', blurryWarning: 'ছবি অস্পষ্ট হ\'ব পাৰে। স্পষ্ট ফটো পুনৰ আপলোড কৰক।', predictDisease: 'ৰোগ ভৱিষ্যদ্বাণী কৰক 🔍',
    confidence: 'বিশ্বাসযোগ্যতা', cropSchedule: 'শস্য সময়সূচী', nextCropRotation: 'পৰৱৰ্তী শস্য চক্ৰ', recommendedFertilizers: 'পৰামৰ্শ দিয়া সাৰ', preventionTreatment: 'প্ৰতিৰোধ আৰু চিকিৎসা', fertilizerSuggestion: 'সাৰ পৰামৰ্শ',
    weatherIntegration: 'বতৰ API সংযোজন', voiceInput: 'কণ্ঠ ভিত্তিক ইনপুট', cropRotationPlanner: 'শস্য চক্ৰ আৰু মাটি পুনৰুদ্ধাৰ পৰিকল্পনাকাৰী', smsAlerts: 'SMS সতৰ্কতা ব্যৱস্থা', cropScheduleFeature: 'সম্পূৰ্ণ শস্য সময়সূচী', fertilizerYield: 'শস্য উৎপাদনৰ বাবে সাৰ', diseaseStage: 'ৰোগ পৰ্যায় আৰু সংক্ৰমণ স্তৰ', imageQuality: 'ছবি মান বিশ্লেষক',
    appLanguage: 'এপ ভাষা', chooseLanguage: 'এপ ইণ্টাৰফেচৰ বাবে আপোনাৰ পছন্দৰ ভাষা বাছনি কৰক।', saveSettings: 'ছেটিংছ সংৰক্ষণ কৰক', myProfile: 'মোৰ প্ৰফাইল', updateProfile: 'প্ৰফাইল আপডেট কৰক', phoneNumber: 'ফোন নম্বৰ', email: 'ইমেইল',
    footerDesc: 'ভাৰতীয় কৃষকসকলৰ বাবে AI-চালিত শস্য পৰামৰ্শ আৰু ৰোগ ভৱিষ্যদ্বাণী', allRightsReserved: '© 2026 Agro_Guardian। সৰ্বস্বত্ব সংৰক্ষিত।',
    selectLocation: 'মানচিত্ৰত আপোনাৰ অৱস্থান বাছনি কৰক', mapTitle: 'ভাৰতৰ মানচিত্ৰ — আপোনাৰ অঞ্চল বাছনি কৰক',
  },
};

export default translations;
