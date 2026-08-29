import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  he: {
    // Navigation
    home: 'בית',
    privateSessions: 'שיעורים פרטיים',
    retreatsWorkshops: 'ריטריטים וסדנאות',
    journal: 'בלוג ומאמרים',
    about: 'אודות',
    contact: 'צור קשר',
    bookClass: 'תיאום שיעור',
    bookSessionNow: 'תיאום שיעור עכשיו',
    
    // Hero
    brandSubtitle: 'אוראל טקו יוגה',
    heroTitle: 'מרחב לתנועה, נשימה ונוכחות',
    heroDescription: 'תרגול יוגה מודע המחבר בין הגוף לנפש, ומציע מסע של גילוי עצמי דרך תנועה, השקטה והתבוננות פנימית.',
    bookPrivateSession: 'תיאום שיעור פרטי',
    exploreOfferings: 'לכל הפעילויות',

    // About
    aboutTitle: 'אודות המורה',
    aboutSubtitle: 'הדרך והפילוסופיה',
    aboutText: 'היוגה עבורי היא שפה של הקשבה. דרך תנועה מודעת, נשימה עמוקה ונוכחות מלאה, אנו לומדים לחזור הביתה – אל הגוף שלנו. בשיעורים שלי, אני מזמינה את המתרגלים למרחב בטוח, נטול שיפוטיות, בו אפשר לחקור את הגבולות ברכות ולמצוא יציבות בתוך תנועה. ההוראה שלי משלבת ידע מסורתי עם הבנה מודרנית של אנטומיה ותנועה, ליצירת חוויה שלמה ומעמיקה.',
    
    // Teaching Styles
    vinyasaTitle: 'Mindful Vinyasa',
    vinyasaDesc: 'תרגול זורם ומודע בתנועה, לחיזוק הגוף והשקטת המיינד.',
    yinTitle: 'Yin & Restorative',
    yinDesc: 'שחרור מתחים עמוק, שהייה במנחים והרפיית מערכת העצבים.',
    breathworkTitle: 'Somatic Breathwork',
    breathworkDesc: 'עבודה נשימתית ממוקדת לוויסות, הגברת אנרגיה וחיבור עמוק.',
    alignmentTitle: 'Personalized Alignment',
    alignmentDesc: 'עבודה מדויקת ומותאמת אישית לסידור נכון של הגוף ומניעת פציעות.',
    ashtangaTitle: 'Ashtanga Yoga',
    ashtangaDesc: 'תרגול דינמי ומובנה המשלב נשימה, תנועה ומיקוד פנימי.',

    // Private Sessions preview
    privateSectionTag: 'תרגול אישי וממוקד',
    privateSectionTitle: 'שיעורים פרטיים בהתאמה אישית',
    privateSectionDesc: 'במפגשים האישיים, אני מזמינה אותך להעמיק בתרגול היוגה באופן המותאם אישית לצרכים שלך. זהו מרחב שקט ואיכותי שמוקדש לדיוק התנועה, פיתוח מודעות גופנית ובניית תרגול אישי יציב שיעניק לך כלים לחיים מאוזנים גם מחוץ למזרן.',
    whatsappQuestions: 'שאלות בוואטסאפ',

    // Journal preview
    journalTag: 'הרהורים ופרקטיקה',
    journalTitle: 'מחשבות ומילים',
    journalSubtitle: 'מאמרים, הגיגים וכלים לתרגול יוגה וחיים מודעים גם מחוץ למזרן.',
    allArticles: 'אל הבלוג',
    readMore: 'קראו עוד',
    readTime: 'דק׳ קריאה',

    // Contact
    contactTitle: 'צור קשר',
    contactDesc: 'נשמח לשמוע ממך. לכל שאלה על שיעורים, סדנאות, או סתם כדי להגיד שלום – המרחב פתוח.',
    whatsappChat: 'צ\'אט בוואטסאפ',
    whatsappAvailable: 'זמינה לשאלות ותיאומים',
    fullName: 'שם מלא',
    fullNamePlaceholder: 'הכנס/י את שמך',
    email: 'דוא״ל',
    emailPlaceholder: 'your@email.com',
    phone: 'מספר טלפון',
    phonePlaceholder: '050-0000000',
    message: 'הודעה',
    messagePlaceholder: 'איך אפשר לעזור?',
    send: 'שליחה',
    messageSentSuccess: 'תודה, ההודעה נשלחה בהצלחה.',
    messageSentDesc: 'אחזור אליך בהקדם לתיאום המפגש.',
    sendAnotherMessage: 'שליחת הודעה נוספת',

    // Footer
    tagline: 'מרחב לתרגול יוגה מודע, המשלב בין מסורת עתיקה לחיים המודרניים.',
    quickLinks: 'ניווט מהיר',
    stayConnected: 'הישארו מחוברים',
    rights: 'כל הזכויות שמורות.',

    // Booking Page
    bookingHeroTitle: 'שיעורים פרטיים',
    bookingHeroSubtitle: 'תרגול אישי ומותאם בדיוק לצרכים שלך. מרחב בטוח לחקור, להעמיק ולצמוח בקצב שלך.',
    monthlyCalendar: 'לוח זמנים חודשי',
    availableSlots: 'שיעורים פנויים',
    availableSlotsFor: 'שעות פנויות ליום',
    selectSlotToBook: 'בחרו שעה לתיאום',
    confirmBooking: 'תיאום שיעור זה בוואטסאפ',
    confirmDirect: 'אישור תיאום ישיר',
    slotTakenErrorTitle: 'המועד הזה כבר נתפס',
    slotTakenErrorDesc: 'מצטערים, המועד הזה כבר נתפס. נסו מועד אחר או פנו אלינו ישירות לתיאום אישי.',
    tryAnotherSlot: 'נסו מועד אחר',
    contactWhatsapp: 'פנייה בוואטסאפ',
    bookingSuccessTitle: 'השיעור שלך נקבע בהצלחה',
    bookingSuccessDesc: 'איזה יופי, אנחנו מחכים לראות אותך על המזרן. פרטי התיאום ואישור נשלחו אליך.',
    backToHome: 'חזרה לדף הבית',
    noSlots: 'אין שעות פנויות במועד זה',
    may: 'מאי 2024',
    june: 'יוני 2024',
    july: 'יולי 2024',
    quoteText: '"התרגול האישי מאפשר לנו להתמקד בדקויות הקטנות ביותר, אלו שלרוב נעלמות במרחב הציבורי. שם מתחילה הטרנספורמציה האמיתית. הגמישות האמיתית אינה היכולת לגעת בבהונות, אלא היכולת לאפשר למחשבות לחלוף מבלי להיאחז בהן."',

    // Retreats Page
    retreatsTitle: 'ריטריטים וסדנאות',
    retreatsTag: 'העמקה וחיבור',
    retreatsSubtitle: 'הזדמנות להאט, להעמיק את התרגול, ולגלות מחדש את השקט הפנימי דרך מסעות ממוקדים בארץ ובעולם.',
    comingSoon: 'בקרוב...',
    comingSoonText: 'סדנאות וריטריטים חדשים יפורסמו בקרוב. אנחנו עובדים על חוויות העמקה חדשות עבורכם.',
    newsletterTitle: 'לא מצאתם את התאריך המתאים?',
    newsletterSubtitle: 'הירשמו לניוזלטר שלנו וקבלו עדכונים ראשונים על ריטריטים וסדנאות חדשות לפני כולם.',
    newsletterPlaceholder: 'כתובת אימייל',
    subscribe: 'הרשמה',
    newsletterThanks: 'תודה על ההרשמה!',
    privacyNotice: 'אנו מכבדים את הפרטיות שלך. ללא ספאם.',

    // Blog Page
    blogHeroTag: 'הרהורים ופרקטיקה',
    blogHeroTitle: 'יומן מסע',
    blogHeroSubtitle: 'אסופה של מחשבות, תובנות והדרכות על החיבור שבין תנועה, תודעה והיומיום. מזמינים אתכם לקרוא ולהעמיק את התרגול גם מחוץ למזרן.',
    filterAll: 'הכל',
    filterPhilosophy: 'פילוסופיה',
    filterAnatomy: 'אנטומיה ומנחים',
    filterMindfulness: 'מיינדפולנס',
    filterLifestyle: 'תזונה ואורח חיים',
    filterHomePractice: 'תרגול ביתי',
    loadMoreArticles: 'טען עוד מאמרים',
    relatedReading: 'קריאה נוספת',
    relatedArticlesSub: 'מאמרים שעשויים לעניין אותך',
    stayInTouch: 'הישארו מחוברים',
    stayInTouchSub: 'הצטרפו לניוזלטר שלנו לקבלת השראה חודשית, מאמרים חדשים ועדכונים על סדנאות קרובות.',
  },
  en: {
    // Navigation
    home: 'Home',
    privateSessions: 'Private Sessions',
    retreatsWorkshops: 'Retreats & Workshops',
    journal: 'Journal & Articles',
    about: 'About',
    contact: 'Contact',
    bookClass: 'Book a Class',
    bookSessionNow: 'Book Session Now',

    // Hero
    brandSubtitle: 'Orel Tako Yoga',
    heroTitle: 'A Space for Movement, Breath & Presence',
    heroDescription: 'Mindful yoga practice uniting body and spirit, offering a journey of self-discovery through intentional motion, stillness, and deep inner reflection.',
    bookPrivateSession: 'Book Private Session',
    exploreOfferings: 'Explore Offerings',

    // About
    aboutTitle: 'About the Teacher',
    aboutSubtitle: 'Path & Philosophy',
    aboutText: 'For me, yoga is a language of deep listening. Through mindful movement, rhythmic breath, and complete presence, we learn to come home to our bodies. In my sessions, I invite practitioners into a safe, judgment-free sanctuary to softly explore boundaries and cultivate grounded stability within motion. My teaching bridges traditional roots with modern biomechanical alignment.',

    // Teaching Styles
    vinyasaTitle: 'Mindful Vinyasa',
    vinyasaDesc: 'Fluid, conscious practice building physical vitality and mental tranquility.',
    yinTitle: 'Yin & Restorative',
    yinDesc: 'Deep tension release, supported postures, and nervous system relaxation.',
    breathworkTitle: 'Somatic Breathwork',
    breathworkDesc: 'Targeted breathing techniques for regulation, renewal, and deep focus.',
    alignmentTitle: 'Personalized Alignment',
    alignmentDesc: 'Tailored structural alignment to protect joints and enhance postural ease.',
    ashtangaTitle: 'Ashtanga Yoga',
    ashtangaDesc: 'Dynamic, disciplined practice harmonizing breath, movement, and gaze.',

    // Private Sessions preview
    privateSectionTag: 'Personalized & Focused',
    privateSectionTitle: 'Tailored Private Yoga Sessions',
    privateSectionDesc: 'In private 1-on-1 sessions, I invite you to deepen your yoga journey tailored specifically to your body and goals. A quiet sanctuary dedicated to subtle alignment, somatic awareness, and sustainable practice habits.',
    whatsappQuestions: 'Questions on WhatsApp',

    // Journal preview
    journalTag: 'Reflections & Practice',
    journalTitle: 'Words & Insights',
    journalSubtitle: 'Articles, essays, and guidance for mindful living on and off the mat.',
    allArticles: 'View All Articles',
    readMore: 'Read Article',
    readTime: 'min read',

    // Contact
    contactTitle: 'Get in Touch',
    contactDesc: 'We would love to hear from you. For inquiries about classes, retreats, or simply to say hello — our space is open.',
    whatsappChat: 'WhatsApp Chat',
    whatsappAvailable: 'Available for scheduling & questions',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Your name',
    email: 'Email Address',
    emailPlaceholder: 'your@email.com',
    phone: 'Phone Number',
    phonePlaceholder: '+972 50 000 0000',
    message: 'Message',
    messagePlaceholder: 'How can we help you?',
    send: 'Send Message',
    messageSentSuccess: 'Thank you! Your message has been sent.',
    messageSentDesc: 'I will get back to you shortly to schedule your session.',
    sendAnotherMessage: 'Send Another Message',

    // Footer
    tagline: 'A mindful yoga sanctuary weaving ancient tradition with modern lifestyle.',
    quickLinks: 'Quick Navigation',
    stayConnected: 'Stay Connected',
    rights: 'All Rights Reserved.',

    // Booking Page
    bookingHeroTitle: 'Private Sessions',
    bookingHeroSubtitle: 'Personalized instruction designed uniquely for your journey. A dedicated space to explore, deepen, and grow at your own rhythm.',
    monthlyCalendar: 'Monthly Schedule',
    availableSlots: 'Available Sessions',
    availableSlotsFor: 'Available Times for',
    selectSlotToBook: 'Select a time slot to reserve',
    confirmBooking: 'Reserve via WhatsApp',
    confirmDirect: 'Direct Booking Confirmation',
    slotTakenErrorTitle: 'Slot Currently Unavailable',
    slotTakenErrorDesc: 'Sorry, this time slot has just been reserved. Please pick an alternative or reach out directly.',
    tryAnotherSlot: 'Choose Another Time',
    contactWhatsapp: 'Message on WhatsApp',
    bookingSuccessTitle: 'Session Booked Successfully',
    bookingSuccessDesc: 'Wonderful! We look forward to meeting you on the mat. Details and confirmation sent to your email.',
    backToHome: 'Back to Homepage',
    noSlots: 'No available slots on this date',
    may: 'May 2024',
    june: 'June 2024',
    july: 'July 2024',
    quoteText: '"Personal practice allows us to tune into the most delicate nuances that often slip away in group classes. True flexibility is not about touching your toes, but learning to let thoughts pass without clinging to them."',

    // Retreats Page
    retreatsTitle: 'Retreats & Workshops',
    retreatsTag: 'Immersion & Connection',
    retreatsSubtitle: 'An opportunity to slow down, deepen your practice, and reconnect with inner stillness through curated journeys in Israel and abroad.',
    comingSoon: 'Coming Soon...',
    comingSoonText: 'New immersions and workshops are currently being prepared. Check back soon for announcements.',
    newsletterTitle: 'Didn’t Find Your Ideal Date?',
    newsletterSubtitle: 'Subscribe to our newsletter to receive first access to upcoming retreats and special weekend immersions.',
    newsletterPlaceholder: 'Your email address',
    subscribe: 'Subscribe',
    newsletterThanks: 'Thank you for subscribing!',
    privacyNotice: 'We respect your privacy. No spam.',

    // Blog Page
    blogHeroTag: 'Reflections & Practice',
    blogHeroTitle: 'The Yoga Journal',
    blogHeroSubtitle: 'A curated collection of musings, physiological insights, and practical guides connecting mindful movement with daily living.',
    filterAll: 'All',
    filterPhilosophy: 'Philosophy',
    filterAnatomy: 'Anatomy & Alignment',
    filterMindfulness: 'Mindfulness',
    filterLifestyle: 'Nutrition & Lifestyle',
    filterHomePractice: 'Home Practice',
    loadMoreArticles: 'Load More Articles',
    relatedReading: 'Further Reading',
    relatedArticlesSub: 'Articles you might also enjoy',
    stayInTouch: 'Stay Inspired',
    stayInTouchSub: 'Join our monthly letter for inspiring reads, seasonal tips, and upcoming immersion announcements.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'he' ? 'en' : 'he'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl: language === 'he',
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
