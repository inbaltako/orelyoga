import { StyleItem, SessionPlan, DaySchedule, Retreat, Article } from '../types';

export const WHATSAPP_PHONE = '972500000000';

export const TEACHING_STYLES: StyleItem[] = [
  {
    id: 'vinyasa',
    name: { he: 'Mindful Vinyasa', en: 'Mindful Vinyasa' },
    description: {
      he: 'תרגול זורם ומודע בתנועה, לחיזוק הגוף והשקטת המיינד.',
      en: 'Fluid, conscious flow practice building core vitality and mental tranquility.',
    },
    icon: 'self_improvement',
  },
  {
    id: 'yin',
    name: { he: 'Yin & Restorative', en: 'Yin & Restorative' },
    description: {
      he: 'שחרור מתחים והעמקת החיבור הפנימי דרך שהייה ממושכת במנחים תומכים.',
      en: 'Deep somatic release and restoration through prolonged supported holds.',
    },
    icon: 'spa',
  },
  {
    id: 'breathwork',
    name: { he: 'Somatic Breathwork', en: 'Somatic Breathwork' },
    description: {
      he: 'עבודה נשימתית ממוקדת לאיזון וויסות מערכת העצבים.',
      en: 'Targeted pranayama & breath regulation to ground and balance the nervous system.',
    },
    icon: 'air',
  },
  {
    id: 'alignment',
    name: { he: 'Personalized Alignment', en: 'Personalized Alignment' },
    description: {
      he: 'עבודה מדויקת ומותאמת אישית לסידור נכון של הגוף ומניעת פציעות.',
      en: 'Precision bio-mechanical alignment tailored to your anatomy and spinal health.',
    },
    icon: 'accessibility_new',
  },
  {
    id: 'ashtanga',
    name: { he: 'Ashtanga Yoga', en: 'Ashtanga Yoga' },
    description: {
      he: 'תרגול דינמי ומובנה המשלב נשימה, תנועה ומיקוד פנימי.',
      en: 'Structured, dynamic traditional sequence connecting breath, gaze, and posture.',
    },
    icon: 'fitness_center',
  },
];

export const SESSION_PLANS: SessionPlan[] = [
  {
    id: 'intro',
    title: { he: 'מפגש היכרות ואבחון', en: 'Introductory Consultation & Assessment' },
    subtitle: { he: 'בניית תוכנית תרגול', en: 'Personalized Roadmap' },
    description: {
      he: 'מפגש שבו נכיר את היכולות, המטרות והצרכים שלך ונבנה את הבסיס לתרגול משותף.',
      en: 'A foundational session assessing your mobility, breath patterns, and custom wellness objectives.',
    },
    duration: '75 דק׳ / 75 min',
    icon: 'calendar_today',
  },
  {
    id: 'single',
    title: { he: 'שיעור פרטי יחיד', en: 'Single 1-on-1 Practice' },
    subtitle: { he: 'צלילה מעמיקה', en: 'Deep Focused Immersion' },
    description: {
      he: 'מפגש אישי ממוקד המאפשר צלילה עמוקה לטכניקה, נשימה ונוכחות מלאה.',
      en: 'A deep personal session focused on exact alignment, customized adjustments, and restorative breathwork.',
    },
    duration: '60-75 דק׳ / 60-75 min',
    icon: 'self_improvement',
  },
  {
    id: 'series',
    title: { he: 'סדרת שיעורים (5 / 10 מפגשים)', en: 'Class Series (5 or 10 Sessions)' },
    subtitle: { he: 'תהליך התמדה וטרנספורמציה', en: 'Long-term Transformation' },
    description: {
      he: 'תהליך ליווי מעמיק המאפשר התמדה, שיפור הדרגתי והטמעה של הרגלי תרגול בריאים.',
      en: 'A dedicated progressive journey building sustainable strength, somatic balance, and mindful lifestyle habits.',
    },
    duration: 'סדרה שבועית / Weekly Series',
    icon: 'layers',
  },
];

export const SCHEDULE_DAYS_MAY: DaySchedule[] = [
  { dayName: { he: 'ראשון', en: 'Sun' }, date: '12.05', dayNumber: 12, slots: ['08:00', '10:30', '18:00'], isAvailable: true },
  { dayName: { he: 'שני', en: 'Mon' }, date: '13.05', dayNumber: 13, slots: [], isAvailable: false },
  { dayName: { he: 'שלישי', en: 'Tue' }, date: '14.05', dayNumber: 14, slots: ['08:00', '10:30', '18:00'], isAvailable: true },
  { dayName: { he: 'רביעי', en: 'Wed' }, date: '15.05', dayNumber: 15, slots: ['09:00', '14:00'], isAvailable: false },
  { dayName: { he: 'חמישי', en: 'Thu' }, date: '16.05', dayNumber: 16, slots: ['07:30', '11:00', '16:00', '19:30'], isAvailable: true },
  { dayName: { he: 'שישי', en: 'Fri' }, date: '17.05', dayNumber: 17, slots: [], isAvailable: false },
  { dayName: { he: 'שבת', en: 'Sat' }, date: '18.05', dayNumber: 18, slots: ['08:00', '13:00', '17:00'], isAvailable: false },
  { dayName: { he: 'ראשון', en: 'Sun' }, date: '19.05', dayNumber: 19, slots: ['08:00', '10:30', '18:00'], isAvailable: true },
  { dayName: { he: 'שני', en: 'Mon' }, date: '20.05', dayNumber: 20, slots: [], isAvailable: false },
  { dayName: { he: 'שלישי', en: 'Tue' }, date: '21.05', dayNumber: 21, slots: ['08:30', '11:00', '17:30'], isAvailable: true },
  { dayName: { he: 'רביעי', en: 'Wed' }, date: '22.05', dayNumber: 22, slots: [], isAvailable: false },
  { dayName: { he: 'חמישי', en: 'Thu' }, date: '23.05', dayNumber: 23, slots: ['08:00', '10:30', '18:00'], isAvailable: true },
];

export const RETREATS_DATA: Retreat[] = [
  {
    id: 'desert-silence',
    title: { he: 'ריטריט שתיקה ומדיטציה', en: 'Desert Silence & Meditation Retreat' },
    date: { he: '12-15 במרץ, 2024', en: 'March 12-15, 2024' },
    location: { he: 'מדבר יהודה, ישראל', en: 'Judean Desert, Israel' },
    description: {
      he: 'ארבעה ימים של ניתוק מוחלט מהרעש החיצוני וחיבור פנימה. תרגול ויפאסנה, יוגה רכה, וארוחות מזינות מהצומח בלב המדבר.',
      en: 'Four days of total detachment from outer noise into serene presence. Vipassana, gentle somatic yoga, and nourishing organic cuisine.',
    },
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Serene desert landscape at sunrise with soft golden light',
    tag: { he: 'הכי מבוקש', en: 'Most Popular' },
    price: { he: '₪2,800', en: '$780' },
    spotsLeft: 2,
  },
  {
    id: 'vinyasa-flow-lab',
    title: { he: 'סדנת תנועה זורמת (Vinyasa Krama)', en: 'Flow & Transition Masterclass' },
    date: { he: '28 באפריל, 2024', en: 'April 28, 2024' },
    location: { he: 'סטודיו Orel Tako, תל אביב', en: 'Orel Tako Studio, Tel Aviv' },
    description: {
      he: 'סדנה יומית מרוכזת המתמקדת בזרימה בין תנוחות, נשימה מקבילה והעמקת מודעות המעברים.',
      en: 'An intensive single-day workshop exploring breath-linked transitions, seamless transitions, and core stability.',
    },
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Person flowing gracefully in yoga posture with warm studio lighting',
    tag: { he: 'נותרו מקומות אחרונים', en: 'Few Spots Left' },
    price: { he: '₪380', en: '$110' },
    spotsLeft: 3,
  },
  {
    id: 'greece-islands',
    title: { he: 'ריטריט יוגה וטבע באיי יוון', en: 'Aegean Sea Yoga & Nature Immersion' },
    date: { he: '5-12 ביוני, 2024', en: 'June 5-12, 2024' },
    location: { he: 'פארוס, יוון', en: 'Paros Island, Greece' },
    description: {
      he: 'שבוע של חופש, תרגול, וים. שני אימונים ביום, מדיטציה בבוקר מול השקיעה, וזמן חופשי לחקור את האי או פשוט לנוח.',
      en: 'A week of sea breeze, deep daily practices, sunset meditation on the cliffs, Mediterranean farm-to-table cuisine, and rejuvenation.',
    },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Minimalist Greek villa overlooking the sparkling Aegean sea',
    tag: { he: 'הרשמה מוקדמת', en: 'Early Bird' },
    price: { he: '€1,650', en: '€1,650' },
    spotsLeft: 5,
  },
  {
    id: 'yin-sound',
    title: { he: 'סדנת יין יוגה וצלילים מרפאים', en: 'Yin Yoga & Tibetan Sound Bath' },
    date: { he: '10 ביולי, 2024', en: 'July 10, 2024' },
    location: { he: 'מרחב טבע, הרי ירושלים', en: 'Nature Sanctuary, Jerusalem Hills' },
    description: {
      he: 'תרגול יין יוגה עמוק ואיטי המלווה בנגינה חיה של קערות טיבטיות וכלי מיתר. חוויה של הרפיה טוטאלית למערכת העצבים.',
      en: 'A restorative evening combining slow, deep Yin postures with acoustic Tibetan singing bowls and gong resonance.',
    },
    image: 'https://images.unsplash.com/photo-1513624954087-ca7109c0f710?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Singing bowls resting on wooden deck in nature',
    tag: null,
    price: { he: '₪420', en: '$120' },
    spotsLeft: 6,
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-of-relaxation-savasana',
    slug: 'art-of-relaxation-savasana',
    title: {
      he: 'אמנות ההרפיה: חשיבות השוואסנה',
      en: 'The Art of Surrender: The Essence of Savasana',
    },
    subtitle: {
      he: 'למה התנועה האחרונה בתרגול היא פעמים רבות המאתגרת ביותר? על המשמעות של השהייה ללא עשייה ואיך היא משפיעה על מערכת העצבים.',
      en: 'Why is the final posture in class often the most demanding? On the deep physiology of non-doing and restorative stillness.',
    },
    category: 'philosophy',
    categoryLabel: { he: 'פילוסופיה', en: 'Philosophy' },
    readTime: { he: '8 דק׳ קריאה', en: '8 min read' },
    date: { he: '14 אוקטובר, 2023', en: 'Oct 14, 2023' },
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1W33bRsRFZ9E1mbBc4Pp-nOGwi07q1YzNXCOFYiu9ekPXmK3QZXMqq41bMOQ-ZC-fp7zQUIeV-dxpZNDIAdIhZJNVDmTkfL3GzVBbjSjns5eIld4uuwJS7nwa5_avlqYkdeXhvxG0Yv0FGOOgNqig9TZ6YGaa2s1pFtNz9v8dqiKN1yeujP9TnS611BCdF3y-2oDu3Rd986jYeD96qu-GwBf1DKdmG3I9fnzlE95kPcse9rkDZqbOt8MwnP',
    imageAlt: 'Savasana relaxation setup with linen blanket and eye pillow in natural warm light',
    excerpt: {
      he: 'למה התנועה האחרונה בתרגול היא פעמים רבות המאתגרת ביותר? על המשמעות של השהייה ללא עשייה ואיך היא משפיעה על מערכת העצבים.',
      en: 'Exploring why lying completely still is the highest art of physical and psychological integration in mindful yoga.',
    },
    content: {
      he: {
        lead: 'המוזיקה נחלשת, צליל הנשימות המאומצות בחדר מתפוגג אט-אט, והאורות מעומעמים. המורה מבקש/ת לפרוש את הגוף לאורכו של המזרן, להניח לזרועות ליפול לצדדים כשכפות הידיים פונות מעלה, ולעצום עיניים. עבור מתרגלים רבים, זהו הרגע המיוחל של סוף השיעור. אך עבור רבים אחרים – זהו הרגע שבו מתחיל המאבק האמיתי.',
        sections: [
          {
            heading: 'הפרדוקס של המנוחה בעולם של עשייה מתמדת',
            paragraphs: [
              'בעולם המודרני, אנו מותנים להגדיר את ערכנו דרך התנועה והפרודוקטיביות. אנחנו רצים מפגישה לפגישה, ממשימה למשימה, ואפילו אל תרגול היוגה שלנו אנו מביאים לעיתים את אותה אמביציה הישגית: לעמוד בעוד תנוחה מאתגרת, להגיע עמוק יותר, לפתוח עוד סנטימטר בבית החזה. ואז, בבת אחת ובחוסר פשרות, דורשים מאיתנו לעצור. פשוט לשכב על הגב, ללא יעד, ללא מדד הצלחה, וללא שום דבר להוכיח.',
              'ברגע שהגוף שוקט, המוח – שהורגל למהירות של מאה קמ״ש – ממשיך לדהור קדימה מכוח האינרציה. פתאום צפות רשימות המכולת, מיילים שטרם נשלחו, שיחות מהעבר ודאגות לגבי המחר. מתרגלים רבים חשים תסכול או אשמה סמויה: "למה אני לא מצליח להירגע?", "למה כולם סביבי שקועים בשלווה מוחלטת ורק אצלי הראש סוער?".',
              'חשוב להבין שחוסר השקט הזה אינו עדות לכישלון בתרגול; הוא בדיוק המקום שבו התרגול האמיתי מתחיל. המוח נועד לייצר מחשבות בדיוק כפי שהלב נועד לפעום והריאות לנשום. השוואסנה אינה מלחמה להשתקת המחשבות בכוח, אלא אימון עדין וסבלני ביכולת לפתח מערכת יחסים חדשה איתן – להתבונן בהן כפי שמתבוננים בעננים חולפים בשמיים רחבים, מבלי להיסחף אחריהן ומבלי לנסות לגרש אותן.',
            ],
          },
          {
            heading: 'הפיזיולוגיה של הריפוי: מהתשה להזנה תאית',
            paragraphs: [
              'מתחת לפני השטח של השקט הגלוי, מתרחש בגוף תהליך ביולוגי מופלא ומדויק. במהלך שעת התרגול הדינמי, מערכת העצבים הסימפתטית (מנגנון ה-Fight or Flight) פועלת במלוא עוצמתה: הדופק מואץ, הדם מוזרם בעוצמה לשרירי השלד, ורמות האדרנלין והקורטיזול עולות באופן מבוקר כדי לאפשר את המאמץ הפיזי.',
              'כאשר אנחנו נשכבים בשוואסנה ומאפשרים לנשימה להעמיק ולהאט, אנו שולחים איתות רב-עוצמה לעצב הוואגוס (העצב התועה), המפעיל את המערכת הפאראסימפתטית – מערכת המנוחה, העיכול והשיקום. בבת אחת, קצב הלב מאט, לחץ הדם מתאזן, והשרירים מתחילים לפרוק מתח מיקרוסקופי שנאגר בהם. זהו הזמן שבו הפאסיה (רקמת החיבור העוטפת את כל שרירי ואיברי הגוף) נרפית וסופגת מחדש נוזלים וחומרי הזנה חיוניים.',
              'מחקרים עכשוויים במדעי המוח מגלים כי השהייה בשוואסנה מעבירה את תדרי הפעילות המוחית מגלי בטא מהירים של ערנות דרוכה אל גלי אלפא ותטא – אותם תדרים ייחודיים המאפיינים מצבי מדיטציה עמוקה ושינה מרפאת. במרחב ייחודי זה מתרחשים תהליכי ריפוי ספונטניים, עיבוד רגשי עמוק ואינטגרציה נוירולוגית. ללא שלב זה, התרגול הפיזי נותר מקוטע, והגוף מחמיץ את ההזדמנות להטמיע את התועלות העמוקות של התנוחות שבוצעו.',
              'המשמעות המילולית של המילה שוואסנה בסנסקריט היא "תנוחת הגופה" (שבא = גופה, אסנה = תנוחה). השם הזה, שעשוי להישמע מרתיע במבט ראשון, נושא בחובו חוכמה פילוסופית עתיקה: זוהי הזמנה לתרגל את מות האגו, מות הצורך בשליטה, ומות הרצון התמידי לנהל את המציאות. לשכב על המזרן ולהרגיש כיצד כוח הכבידה של כדור הארץ תומך בכל איבר בגוף – מהעקבים, דרך האגן והשכמות, ועד לחלק האחורי של הגולגולת.',
              'בפעם הבאה שאתם נשכבים בסוף התרגול, תנו לעצמכם את המתנה של כניעה מוחלטת. כסו את העיניים בבד רך כדי להפחית גירויים ויזואליים, הניחו כרית תומכת תחת הברכיים כדי לשחרר את הגב התחתון, ונשמו עמוק אל תוך האדמה. משם, מהמקום השקט והשלם הזה, תוכלו לחזור אל העולם מלאי חיוניות, צלילות ושלום פנימי.',
            ],
          },
        ],
      },
      en: {
        lead: 'The music softens, the collective cadence of breath fades into a gentle hum, and the studio lights dim to a warm glow. The teacher invites you to lengthen your body across the mat, let your arms fall open with palms facing upward, and close your eyes. For many practitioners, this is the long-awaited sanctuary at the end of class. Yet for many others, this is where the real practice truly begins.',
        sections: [
          {
            heading: 'The Paradox of Rest in an Unstoppable World',
            paragraphs: [
              'In contemporary life, we are systematically conditioned to measure our worth through momentum, output, and productivity. We rush from meeting to meeting, chore to chore, and all too often, we bring that same striving mentality onto the yoga mat: pushing to hold one more posture, reach a little deeper, or open another fraction of an inch in the chest. And then, abruptly and without negotiation, we are asked to stop. Simply lie on our backs with no destination, no scorecard, and nothing to prove.',
              'The moment the physical body ceases motion, the mind — accustomed to highway speeds — continues hurtling forward by sheer inertia. Grocery lists surface, unwritten emails flood the consciousness, past conversations echo, and worries about tomorrow demand attention. Practitioners frequently experience subtle guilt or frustration: "Why can’t I just relax?", "Why does everyone else look completely at peace while my mind is racing?".',
              'It is essential to understand that this internal restlessness is not a sign of failure; it is precisely the fertile ground where conscious awareness takes root. The brain produces thoughts just as the heart beats and the lungs breathe. Savasana is not a forceful battle to silence the mind, but a patient and compassionate discipline in learning not to cling to thoughts — observing them like clouds drifting across an infinite sky, neither chasing them nor pushing them away.',
            ],
          },
          {
            heading: 'The Physiology of Renewal: From Exhaustion to Cellular Healing',
            paragraphs: [
              'Beneath the tranquil surface of outer stillness, an intricate biological transformation unfolds within the body. Throughout an active dynamic sequence, the sympathetic nervous system (the fight-or-flight mechanism) operates at elevated levels: cardiac output increases, blood is directed toward major muscle groups, and cortisol and adrenaline levels rise constructively to sustain exertion.',
              'When we settle into Savasana and allow our breathing rhythm to lengthen and deepen, we send an unmistakable signal to the vagus nerve, initiating parasympathetic dominance — the state of resting, digesting, and cellular regeneration. Heart rate eases, arterial pressure softens, and muscles release micro-tensions accumulated deep within postural fibers. This is also when the fascial web — the continuous connective matrix embracing every organ and muscle — relaxes and reabsorbs vital moisture and nourishment.',
              'Contemporary neuroscience demonstrates that sustained stillness shifts brainwave frequencies from rapid Beta alertness down to serene Alpha and Theta rhythms — the precise neuro-correlates of deep meditation, emotional integration, and somatic repair. Without this dedicated assimilation window, the physical practice remains incomplete, depriving the nervous system of the opportunity to integrate the sequence’s therapeutic gifts.',
              'In Sanskrit, the literal translation of Savasana is "Corpse Pose" (Sava meaning corpse, Asana meaning posture). While the name may initially seem stark, it embodies profound yogic wisdom: an invitation to surrender the ego, let go of the compulsion to manage every outcome, and release the urge to control reality. It is the practice of lying back and trusting gravity to hold every vertebra, limb, and muscle without effort.',
              'The next time you lie down at the end of practice, grant yourself the grace of total surrender. Place a soft eye pillow over your brow to quiet sensory input, nestle a supportive bolster under your knees to soften the lumbar spine, and allow the earth to carry your full weight. From that quiet, unwavering center, you return to the world recharged with clarity, presence, and genuine inner peace.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'mindful-posture-daily-life',
    slug: 'mindful-posture-daily-life',
    title: {
      he: 'למצוא את המרכז: יציבה מודעת ביומיום',
      en: 'Finding the Center: Mindful Posture in Daily Life',
    },
    subtitle: {
      he: 'איך התרגול על המזרן מתורגם לאופן שבו אנחנו נושאים את עצמנו בעולם, וכיצד יציבה נכונה משפיעה על מצב הרוח.',
      en: 'How somatic alignment on the mat informs how we carry ourselves through everyday challenges.',
    },
    category: 'anatomy',
    categoryLabel: { he: 'אנטומיה ומנחים', en: 'Anatomy & Alignment' },
    readTime: { he: '5 דק׳ קריאה', en: '5 min read' },
    date: { he: '12 אוקטובר, 2023', en: 'Oct 12, 2023' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkliYIMjRMQfLLrn-f21_-B__OF0Nfzu6hg-OL-nekmj_9ftJbnHhpU6a2Oxeb_nim3A51i9ylOFz-VM5JXbk_0c4u5goAxmo_hFKzdsFYlrnAaZfewK-OaRzyeTBLfpA91eWjRCG3u_MO6DtnL4EakxfNCAt8rg_Y8zwW_pKxu1EVSLVflAw4iv5D2mkE0QTQ6Vc6F_oqy_sRCZEOztfoLw-h_QKAAUKTrnKt52tHG2hI7hUMtJcR2g',
    imageAlt: 'Tranquil minimalist yoga studio interior bathed in warm afternoon sunlight with cork mat',
    excerpt: {
      he: 'איך התרגול על המזרן מתורגם לאופן שבו אנחנו נושאים את עצמנו בעולם, וכיצד יציבה נכונה משפיעה על מצב הרוח והאנרגיה.',
      en: 'Examining the deep connection between spinal alignment, emotional resilience, and daily vitality.',
    },
    content: {
      he: {
        lead: 'היציבה שלנו אינה רק עניין מכני של שלד ושרירים; היא שפת הגוף הבלתי מדוברת שדרכה אנו מתקשרים עם העולם, והאופן שבו מערכת העצבים שלנו מפרשת את המציאות בכל רגע נתון. האופן שבו אנו יושבים, עומדים והולכים הוא למעשה המראה הרגשית של חיינו.',
        sections: [
          {
            heading: 'הדיאלוג הסומטי בין עמוד השדרה למצב הרוח',
            paragraphs: [
              'כולנו מכירים את התחושה של יום קשה שבו הראש צונח מטה, הכתפיים מתעגלות פנימה ובית החזה קורס. זהו אינו רק שינוי אנטומי מקומי, אלא מנגנון הגנה פרימיטיבי שבו הגוף מנסה לגונן על הלב והאיברים הפנימיים מפני איום חיצוני. כאשר היציבה השפופה הזו הופכת להרגל קבוע מול מחשבים ומסכים, מערכת העצבים מקבלת שדר בלתי פוסק של עייפות, מגננה ודחק.',
              'במצב של קריסה גופנית, הסרעפת נדחסת, נפח הנשימה מצטמצם ביותר משלושים אחוזים, והגוף מוזן בפחות חמצן. לעומת זאת, כאשר אנו מזקפים את עמוד השדרה ברכות ומרווחים בין החוליות, הסרעפת נעה בחופשיות, זרימת הדם למוח מתגברת, ורמות האנרגיה עולות באופן מיידי. מחקרים בתחום הפסיכו-ביולוגיה מאשרים כי יציבה פתוחה מעלה את רמות הביטחון העצמי ומפחיתה משמעותית תחושות של חרדה ודכדוך.',
              'אך חשוב לדייק: יציבה מיטיבה אינה עמידה צבאית נוקשה או מאומצת. יציבה נכונה ביוגה היא שילוב עדין בין "סטהירה" (יציבות ומבנה) לבין "סוקהה" (קלות ורכות). זוהי היכולת למצוא את המרכז שבו השלד נושא את משקל הגוף ביעילות, כך שהשרירים יכולים להירגע ולא להישאר דרוכים ללא צורך.',
            ],
          },
          {
            heading: 'ממזרן היוגה אל שולחן העבודה: יציבה כמדיטציה חיה',
            paragraphs: [
              'בתרגול תנוחות העמידה ביוגה (כמו טדאסנה או ויראבהדראסנה), אנו לומדים להרגיש את כפות הרגליים משתרשות באדמה, את קשתות כף הרגל מתרוממות ואת קודקוד הראש צומח מעלה. המיומנות הזו אינה אמורה להישאר בתוך גבולות הסטודיו; היא העוגן המשמעותי ביותר שאנו יכולים לקחת איתנו אל חיי היומיום.',
              'במהלך יום עבודה מול המחשב, שימו לב לרגעים שבהם הראש נמשך קדימה אל המסך והלסת ננעלת. במקום להתאמץ להתיישר בכוח, קחו נשימה עמוקה אחת: הניחו לשתי עצמות הישיבה להיטמן עמוק בכיסא, שחררו את מפרקי הירכיים, גלגלו בעדינות את הכתפיים לאחור ואפשרו לעורף להתארך כחוט משי דק.',
              'כאשר היציבה שלנו מודעת ונינוחה, אנו נוכחים בכל מפגש, שיחה ומשימה מתוך עוצמה שקטה. הגוף אינו נלחם עוד בכוח הכבידה, אלא נתמך על ידו – וזהו הבסיס העמוק ביותר לבריאות גופנית, חיוניות ושלום פנימי.',
            ],
          },
        ],
      },
      en: {
        lead: 'Our physical posture is never merely a biomechanical arrangement of bones and muscles; it is an unspoken somatic language through which our nervous system interprets reality and projects presence into the world. How we sit, stand, and walk is, in truth, the emotional architecture of our daily lives.',
        sections: [
          {
            heading: 'The Somatic Dialogue Between Spine and Psyche',
            paragraphs: [
              'We are all familiar with the physical imprint of a grueling day: the chin juts forward, the shoulders round inward, and the chest cavity softly caves. This is not merely a localized anatomical shift; it is an ancient somatic reflex where the organism curls inward to shield the heart and vulnerable viscera from perceived threats. When this collapsed posture becomes chronic in our screen-centric culture, the autonomic nervous system receives an unending low-grade distress signal.',
              'In this compressed stance, the diaphragm is physically obstructed, reducing vital lung capacity by up to thirty percent and starving brain tissues of oxygen. Conversely, when we gently lengthen the spine with spacious ease, the diaphragm glides effortlessly, cerebral perfusion increases, and cognitive stamina rebounds immediately. Psychobiological studies confirm that an upright, receptive posture downregulates cortisol while cultivating emotional resilience.',
              'Crucially, mindful posture is not about rigid military stiffness or aggressive chest puffing. In classical yoga, true alignment harmonizes "Sthira" (grounded stability) and "Sukha" (spacious ease). It is discovering the sweet vertical axis where the skeletal framework effortlessly bears gravitational load, allowing surrounding muscular layers to soften rather than maintain exhausting hyper-vigilance.',
            ],
          },
          {
            heading: 'From the Mat to the Desk: Posture as Living Mindfulness',
            paragraphs: [
              'In foundational standing postures such as Tadasana (Mountain Pose), we train our feet to root firmly into the earth, our inner arches to rebound upward, and the crown of the head to float toward the sky. This embodied intelligence is designed to travel far beyond the studio floor — it is a portable sanctuary we carry everywhere.',
              'Throughout long working sessions at your desk, notice when your gaze pulls your neck toward the monitor and your jaw clenches under digital urgency. Rather than stiffening into an artificial pose, pause for one conscious breath: feel both sit-bones ground evenly into your chair, soften your hip creases, let your shoulder blades melt down your back, and let the back of your neck lengthen effortlessly.',
              'When our physical posture is anchored in relaxed integrity, we meet every email, conversation, and challenge from a place of unshakable composure. The body stops fighting gravity and begins dancing with it — creating a sustainable foundation for lifelong vitality and deep inner quiet.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'morning-rituals-slow-start',
    slug: 'morning-rituals-slow-start',
    title: {
      he: 'טקסים של בוקר: להתחיל לאט ובכוונה',
      en: 'Morning Rituals: The Art of Starting Slowly',
    },
    subtitle: {
      he: 'הצעה לשגרת בוקר שמזינה את הגוף והנפש, ומאפשרת כניסה רכה ומודעת אל תוך שאון היום.',
      en: 'Nourishing somatic rituals to cultivate ease and centered awareness before the day unfolds.',
    },
    category: 'lifestyle',
    categoryLabel: { he: 'תזונה ולייפסטייל', en: 'Lifestyle & Rituals' },
    readTime: { he: '6 דק׳ קריאה', en: '6 min read' },
    date: { he: '02 ספטמבר, 2023', en: 'Sep 2, 2023' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNyD5215q_y55dI2Brb-ELm7N0_FIJhJH_sfWmHAdfBalnIRZUfQsgG_V5uLsdCx4HNg3VVnysV7CgtKVwKpkSxb09acCZKKLj1DstDnSHW6Z6l257KIzSeSZ3GT4Ds6BbMc4JEwO3siybRsrZ75gi6DDgiGgsanfb8fySk6kxg46uqSvzeK71sDNvkQ35IKaXwmqPu-WxiXL0W4Bsyf7d8Drmwk1Cgvr0EZFejopNWudcBcT_JWSBAw',
    imageAlt: 'Steaming herbal tea cupped in hands in soft morning sunlight',
    excerpt: {
      he: 'הצעה לשגרת בוקר שמזינה את הגוף והנפש, ומאפשרת כניסה רכה ומודעת אל תוך שאון היום.',
      en: 'Simple yet grounding morning habits to foster mental calm and bodily attunement before picking up your phone.',
    },
    content: {
      he: {
        lead: 'האופן שבו אנו פוגשים את שלושים הדקות הראשונות של היום מכתיב את הטון, הקצב והצלילות של כל השעות שיבואו לאחריו. בעולם שבו השעון המעורר בטלפון הופך מיד לזרם אינסופי של התראות וחדשות, הבחירה לפתוח את הבוקר בהאטה ובכוונה היא מעשה של ריבונות פנימית וריפוי.',
        sections: [
          {
            heading: 'לפני המסכים: הנשימה כעוגן ראשוני',
            paragraphs: [
              'הרגעים הראשונים שלאחר היקיצה מאופיינים במצב תודעתי ייחודי הנקרא מצב היפנופומפי (המעבר הרך בין שינה לערות). במרחב ביניים זה, התת-מודע שלנו פתוח ורגיש במיוחד להשפעות סביבתיות. כאשר הפעולה הראשונה שלנו היא הושטת יד אל הסמארטפון, אנו מציפים את המוח באופן מיידי בדופמין מהיר, התראות מלחיצות ודרישות של אחרים – ומזריקים לגוף מנת מתח עוד לפני שהספקנו לפקוח עיניים במלואן.',
              'במקום זאת, נסו להעניק לעצמכם לפחות רבע שעה של מרחב שקט ומוגן ממסכים. שבו על קצה המיטה או על כרית מדיטציה, הניחו יד אחת על הלב ויד שנייה על הבטן, וקחו חמש נשימות עמוקות ואיטיות. הרגישו את מגע האוויר הקריר הנכנס בנחיריים ואת חמימות האוויר הנפלט. הנשימה המודעת הזו מאותתת למערכת העצבים שהיום מתחיל ממקום של ביטחון ושלווה, ולא ממקום של בהילות ומגננה.',
              'לאחר מכן, שתו כוס גדולה של מים פושרים או תה צמחים מרגיע. שטיפת המערכת במים חמימים לאחר שעות הלילה מעוררת בעדינות את מערכת העיכול, מלחלחת את רקמות הגוף ומכינה אותנו לתנועה קלה.',
            ],
          },
          {
            heading: 'תנועה רכה ונוכחות חושית: טקס ההתעוררות',
            paragraphs: [
              'אינכם צריכים להקדיש שעה שלמה לתרגול אינטנסיבי כדי להפיק תועלת משגרת בוקר. לעיתים קרובות, חמש עד עשר דקות של תנועה מתונה – כמו מתיחת חתול-פרה על ארבע, פיתול עדין של עמוד השדרה ופתיחה של מפרקי הירכיים – מספיקות כדי לשחרר את הנוקשות הטבעית שהצטברה בשעות השינה.',
              'במהלך התנועה, העבירו את תשומת הלב לחושים: הקשיבו לצלילי הבוקר מחוץ לחלון, התבוננו בגווני האור המשתנים על הקיר, והרגישו את מגע הבד על העור. הנוכחות החושית הפשוטה הזו מחברת אותנו אל הכאן ועכשיו ומונעת מהתודעה לרוץ קדימה אל מטלות היום.',
              'כאשר תצאו אל יומכם מתוך בוקר שהתחיל בהקשבה ובנשימה, תגלו שאתם פחות נסחפים לסערות חיצוניות ופועלים מתוך מרכז שקט, מאוזן ומלא אנרגיה חיונית.',
            ],
          },
        ],
      },
      en: {
        lead: 'The manner in which we navigate the first thirty minutes of the day establishes the neurochemical cadence, clarity, and nervous system baseline for all the hours that follow. In a culture where the phone alarm instantly cascades into a torrent of notifications and headlines, choosing to open the morning with deliberate slowness is a quiet act of personal sovereignty and profound somatic healing.',
        sections: [
          {
            heading: 'Before the Screens: The Breath as Primary Anchor',
            paragraphs: [
              'The delicate window immediately following awakening is known as the hypnopompic state — a permeable threshold between deep sleep and alert consciousness. In this liminal space, our subconscious mind is exceptionally receptive to sensory impressions. Reaching reflexively for a smartphone floods the newly awakened brain with sudden dopamine surges, urgent emails, and societal anxieties, immediately thrusting the nervous system into chronic reactivity before your feet have even touched the floor.',
              'Instead, gift yourself a sacred buffer of screen-free stillness. Sit comfortably at the edge of your bed or on a floor cushion, rest one hand over the center of your chest and the other across the belly, and take five slow, oceanic breaths. Feel the cool air brush past the nostrils on inhalation and the soothing warmth of release on exhalation. This rhythmic breath informs your autonomic nervous system that the morning begins in safety, not survival.',
              'Follow this with a tall glass of warm water with lemon or a fragrant herbal tea. Hydrating the tissues after hours of nocturnal fasting gently awakens the digestive tract, clears sluggishness, and lubricates the musculoskeletal system for daily movement.',
            ],
          },
          {
            heading: 'Gentle Movement and Sensory Presence: The Awakening Sequence',
            paragraphs: [
              'A transformative morning ritual does not require an hour of exhaustive physical exertion. Often, five to ten minutes of fluid, gentle movement — a few slow rounds of Cat-Cow, a soft seated spinal twist, and an expansive child’s pose — are all that is required to awaken synovial fluid in the joints and release connective tissue stiffness.',
              'While moving, invite your attention to anchor in immediate sensory reality: listen to early morning birdsong outside the window, watch the golden shifting angles of natural light on the floor, and feel the solid ground beneath your body. This sensory attunement roots consciousness in the present, preventing the mind from racing into tomorrow’s deadlines.',
              'When you step into the world from a morning nurtured with intention, you move through daily demands not as a frantic reactor, but anchored in quiet, resilient composure.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'art-of-letting-go-aparigraha',
    slug: 'art-of-letting-go-aparigraha',
    title: {
      he: 'האמנות שבלשחרר: עקרון האפריגרהה',
      en: 'The Art of Letting Go: The Yogic Principle of Aparigraha',
    },
    subtitle: {
      he: 'העיקרון היוגי של אי-היאחזות לא אומר שאיננו יכולים לאהוב, אלא שאנו לומדים לאהוב ללא הפחד מלאבד.',
      en: 'Non-attachment is not apathy; it is the freedom to love deeply without the paralyzing fear of loss.',
    },
    category: 'philosophy',
    categoryLabel: { he: 'פילוסופיה', en: 'Philosophy' },
    readTime: { he: '5 דק׳ קריאה', en: '5 min read' },
    date: { he: '12 אוקטובר, 2023', en: 'Oct 12, 2023' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Crsn76PensoHaks7KxXmeD4krFzG2JyX3Yg4LAXmqlQIAEOL9zulbEH6tKap0zb1vX9wpAvXsjJqE6yD_9mdFBYWCSh-6ftZV88Zfc1ayg4OLXHie3BYD9_gJhmPAzHwxMGGlj_sdf7EJnqokVoOgC2GiS4oQIGhgHhWF44l5J2jpGLUOFJUf_gXuqEux3o8ynKqbkaZbZQH1uv1zTspzP4gqwQpLO-M9NMdGrOn1CW0c5y9d-WLRA',
    imageAlt: 'Yoga journal with handwritten notes and tea on linen cloth',
    excerpt: {
      he: 'העיקרון היוגי של אי-היאחזות לא אומר שאיננו יכולים לאהוב, אלא שאנו לומדים לאהוב ללא הפחד מלאבד. מחשבות על שחרור ביומיום.',
      en: 'Exploring how non-grasping liberates our emotional lives from clinging and unnecessary tension.',
    },
    content: {
      he: {
        lead: 'מתוך חמשת עקרונות היאמה בפילוסופיית היוגה הקלאסית, אפריגרהה (אי-היאחזות או שחרור הרכושנות) הוא אולי העיקרון המאתגר והמשחרר ביותר. אין מדובר בפרישות סגפנית מהעולם או באדישות רגשית, אלא בהבנה עמוקה שהאחיזה הנואשת בדברים, באנשים ובדעות היא המקור העיקרי לסבלנו.',
        sections: [
          {
            heading: 'הפרדוקס של האגרוף הקפוץ',
            paragraphs: [
              'בטבעו של האדם קיים דחף עמוק לאחוז. אנו אוחזים בחפצים מתוך אשליה של ביטחון, אנו אוחזים בדעות שלנו מתוך צורך להגן על הזהות, ואנו אוחזים ברגעים יפים מתוך פחד שהם ייעלמו. אך כפי שאומר המשל היוגי העתיק: כאשר כף היד קפוצה בחוזקה באגרוף, לא רק שאיננו יכולים לקבל שום דבר חדש, אלא שהיד כולה נעשית נוקשה, כואבת ומותשת.',
              'אי-היאחזות (אפריגרהה) אינה פסיביות או חוסר אכפתיות. להפך: זהו האומץ לאהוב באופן מלא, ליצור בעוצמה וליהנות מהעולם, תוך הכרה בעובדה שהכל נמצא בזרימה מתמדת. כשאנו פותחים את כף היד, אנו מאפשרים לרוח החיים לעבור דרכנו בחופשיות. אנו מפסיקים להיאבק בשינויים הטבעיים של המציאות ומוצאים חופש פנימי אמיתי.',
              'ברמה הגופנית, היאחזות מנטלית מתורגמת ישירות למתח שרירי: כתפיים מורמות, לסת נעולה ונשימה עצורה. כאשר אנו מתרגלים שחרור רצוני של האחיזה, הגוף מגיב בהרפיה עמוקה, ומערכת העצבים משתחררת ממצב של מגננה מתמדת.',
            ],
          },
          {
            heading: 'לשחרר על המזרן ובחיים: לזרום עם המציאות',
            paragraphs: [
              'על מזרן היוגה, אפריגרהה מתבטאת בוויתור על הרצון לבצע את "התנוחה המושלמת". מתרגלים רבים נאחזים בדימוי ויזואלי של איך תנוחה אמורה להיראות, ודוחפים את גופם מעבר לגבולות הבריאים שלו מתוך הישגיות ואגו. תרגול אותנטי מזמין אותנו לשחרר את הציפייה, להקשיב לגוף בכנות כפי שהוא ברגע זה, ולמצוא שלמות גם בתוך חוסר השלמות.',
              'בחיי היומיום, אפריגרהה מזמינה אותנו לפנות מקום – לפנות חפצים מיותרים שמעמיסים על הבית, לשחרר טינות ישנות שמעכירות את הלב, ולוותר על הצורך להיות תמיד צודקים בוויכוחים. כל ויתור כזה אינו אובדן, אלא יצירה של חלל פנוי שבו יכולים לצמוח רעיונות חדשים, קשרים כנים ושמחה טבעית.',
              'בפעם הבאה שאתם מרגישים תסכול או חרדה, עצרו לרגע ושאלו את עצמכם: "במה אני אוחז/ת כרגע שאינו משרת אותי עוד?". פתחו את כפות הידיים, נשמו עמוק, והרשו לעצמכם לשחרר – מתוך ידיעה שלמה שמה שבאמת שלכם יישאר, ומה שמשתחרר מפנה מקום לטוב גדול יותר.',
            ],
          },
        ],
      },
      en: {
        lead: 'Among the five Yamas of classical yogic philosophy, Aparigraha (non-grasping, non-possessiveness, or the art of letting go) is perhaps the most demanding yet profoundly liberating discipline. It is neither ascetic denial nor emotional detachment; rather, it is the realization that our compulsive grip on outcomes, possessions, and rigid identities is the true root of internal suffering.',
        sections: [
          {
            heading: 'The Paradox of the Clenched Fist',
            paragraphs: [
              'Deep within the human psyche lies an instinctual reflex to grasp. We accumulate possessions under the illusion of permanent security, we cling stubbornly to opinions to defend fragile egos, and we cling to joyful experiences out of dread that they will dissolve. Yet as the ancient yogic parable teaches: when the hand is clenched tight in a fist, it cannot receive anything new, and the arm quickly becomes rigid, fatigued, and sore.',
              'Aparigraha is not apathy or cold indifference. On the contrary, it is the fierce courage to love wholeheartedly, create passionately, and savor the world’s gifts with open eyes, while honoring the sacred impermanence of all things. When we open our hands, life flows through us unimpeded. We cease exhausting ourselves in futile resistance to natural change and step into authentic freedom.',
              'Somatic physiology demonstrates that mental clutching mirrors directly into muscular holding: tight trapezius muscles, locked temporomandibular jaw joints, and shallow chest breathing. Consciously practicing release triggers immediate neuromuscular decompression, allowing the autonomic nervous system to step down from perpetual vigilance.',
            ],
          },
          {
            heading: 'Surrender on the Mat and in Life: Trusting the Flow',
            paragraphs: [
              'On the yoga mat, Aparigraha manifests as releasing the hunger for the "flawless" posture. Practitioners often grasp onto an idealized external aesthetic, overriding their body’s intuitive boundaries out of competitive striving. Authentic practice invites us to surrender performance anxiety, listen honorably to the body as it is today, and discover grace within imperfection.',
              'Off the mat, Aparigraha invites us to practice intentional decluttering — releasing physical possessions that stagnate our living spaces, forgiving old grievances that burden the heart, and relinquishing the exhausting need to always be right. Every act of letting go is not a deficit; it is the deliberate creation of spaciousness for fresh insights, genuine connections, and quiet joy to blossom.',
              'The next time you encounter rising anxiety or frustration, pause and gently ask yourself: "What am I clinging to right now that no longer serves my highest peace?". Soften your palms, breathe deeply into your belly, and let go — trusting with quiet faith that what is truly aligned with your path will remain, and what departs creates room for greater light.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'sound-of-silence-meditation',
    slug: 'sound-of-silence-meditation',
    title: {
      he: 'קול הדממה: מדיטציה דרך צליל והדהוד',
      en: 'The Resonance of Silence: Meditation Through Sacred Sound',
    },
    subtitle: {
      he: 'לפעמים השקט החיצוני רועש מדי. שימוש בקערות טיבטיות ובצלילים מתמשכים יכול לשמש כעוגן עבור התודעה הנודדת.',
      en: 'Using acoustic resonance as an anchor for active minds seeking tranquility.',
    },
    category: 'mindfulness',
    categoryLabel: { he: 'מיינדפולנס', en: 'Mindfulness' },
    readTime: { he: '3 דק׳ קריאה', en: '3 min read' },
    date: { he: '28 ספטמבר, 2023', en: 'Sep 28, 2023' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUjyLYwVqblg9WWVQx4nF4iLHu6Mg-hNvg0hLuS-3mDdZkwLjOmbgF47k-LSj5I0IEa0QiB5zsySGJGM_Kw9qWYI0GYLU4RY6XCx5q99mWPfc4Y2vkAbmJXTVIZv7uOOpiZaRhixlumNP_5VmcedLIRnAumJ1T6FDEO40MscO_qWw6iEmXbjfX_gcSdt6SPkeJqWkHG3jaa9zacPh-rBwZx6BYccNzYPmK1Ha0hllCs5o-1kj87LuUlw',
    imageAlt: 'Hands adjusting singing bowl with warm afternoon sunlight',
    excerpt: {
      he: 'לפעמים השקט החיצוני רועש מדי. שימוש בקערות טיבטיות ובצלילים מתמשכים יכול לשמש כעוגן עבור התודעה הנודדת.',
      en: 'How sound vibrational frequencies help settle mental static into meditative clarity.',
    },
    content: {
      he: {
        lead: 'הצליל הוא גשר אל תוך הדממה. כאשר התודעה עמוסה במחשבות, רטט אקוסטי מספק מוקד מוחשי להקשבה עמוקה.',
        sections: [
          {
            heading: 'רטט והרפיה',
            paragraphs: [
              'תדרי הקול של קערות טיבטיות מאיטים את גלי המוח ממצב בטא למצב אלפא ותטא, ומאפשרים הרפיה עמוקה ללא מאמץ.',
            ],
          },
        ],
      },
      en: {
        lead: 'Vibrational sound acts as an acoustic bridge into meditative stillness.',
        sections: [
          {
            heading: 'Harmonic Attunement',
            paragraphs: [
              'Acoustic frequencies shift active brain waves toward calming alpha and theta states effortlessly.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'home-practice-morning-routine',
    slug: 'home-practice-morning-routine',
    title: {
      he: 'איך ליצור שגרת בוקר של תנועה ונשימה בבית',
      en: 'Cultivating a Sustainable Home Yoga Practice',
    },
    subtitle: {
      he: 'הצעדים הראשונים לביסוס תרגול יוגה אישי בבית, גם כשאין הרבה זמן. פשוט להתחיל מהמזרן, לנשום, ולתת לגוף להוביל.',
      en: 'Simple steps to build an organic, pressure-free daily practice in the comfort of your home.',
    },
    category: 'home-practice',
    categoryLabel: { he: 'תרגול ביתי', en: 'Home Practice' },
    readTime: { he: '7 דק׳ קריאה', en: '7 min read' },
    date: { he: '15 ספטמבר, 2023', en: 'Sep 15, 2023' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYy5MpLAPdLX0NtIXOnnQTV625Pnz8bpCZdNxAbT46rmYZXZkr6XzAgzZofBiOuhcnwTioiR-PVd0_FnwjFjHq6o0_AeE5aO5x2jz1WKMj5mBwb5eajvNC0N_a0SXg64heLFgBq9HGNEInfLsSmoKV0wAv0iIU6x5g2BIegftNsX3u8xGPpf5GPV9lG3sZqklIfxV_e8J8Tthpk_FV2CQzSB7UeH8GiwW6QnGwH4nTHlkR43ZCFXpD5w',
    imageAlt: 'Authentic lifestyle photo of quiet morning yoga practice at home',
    excerpt: {
      he: 'הצעדים הראשונים לביסוס תרגול יוגה אישי בבית, גם כשאין הרבה זמן. פשוט להתחיל מהמזרן, לנשום, ולתת לגוף להוביל.',
      en: 'Practical tips for creating a dedicated serene nook and maintaining consistent practice rhythm.',
    },
    content: {
      he: {
        lead: 'תרגול בבית לא דורש שעה וחצי של מאמץ מפרך. אפילו 15 דקות של תנועה מודעת ביום מייצרות שינוי עמוק.',
        sections: [
          {
            heading: 'יצירת המרחב',
            paragraphs: [
              'בחרו פינה שקטה, פירסו את המזרן והתחילו עם שלוש שאיפות עמוקות. תנו לצרכי הגוף של אותו יום להכתיב את הקצב.',
            ],
          },
        ],
      },
      en: {
        lead: 'A profound home practice does not require hours of complex choreography; 15 minutes of attentive presence is enough to transform your day.',
        sections: [
          {
            heading: 'Creating Your Sacred Nook',
            paragraphs: [
              'Dedicate a clutter-free corner, unroll your mat, and take three intentional breaths before movement begins.',
            ],
          },
        ],
      },
    },
  },
];
