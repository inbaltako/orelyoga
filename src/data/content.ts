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
        lead: 'אחרי שעה של תנועה מאומצת, נשימות עמוקות והזעה, מגיע הרגע שכולם מחכים לו - או מנסים לחמוק ממנו. השוואסנה (תנוחת הגופה) נראית לכאורה פשוטה: פשוט לשכב על הגב. אך מתחת לפני השטח, זהו ככל הנראה החלק החשוב ביותר בתרגול.',
        sections: [
          {
            heading: 'האתגר של אי-העשייה',
            paragraphs: [
              'בעולם המודרני, אנו מורגלים לרוץ. העשייה היא המדד להצלחה, והתנועה המתמדת נתפסת כפרודוקטיביות. כשאנחנו סוף סוף עוצרים, המוח שלנו - הרגיל לקצב מסוים - לרוב לא עוצר יחד איתנו. הוא ממשיך לייצר רשימות, דאגות ותוכניות. כאן טמון האתגר האמיתי של השוואסנה: השהייה ללא עשייה.',
            ],
          },
          {
            heading: 'פיזיולוגיה של מנוחה עמוקה',
            paragraphs: [
              'כשאנו נשכבים בשוואסנה, אנו מאותתים למערכת העצבים המרכזית לעבור ממצב סימפתטי (הילחם או ברח) למצב פאראסימפתטי (נוח ועכל). המעבר הזה חיוני להתאוששות פיזית ומנטלית.',
              'קצב הלב מאט, לחץ הדם יורד, ורמות הקורטיזול (הורמון הלחץ) צונחות. הגוף מנצל את הזמן הזה כדי להטמיע את התועלות של התרגול הפיזי שקדם לו.',
            ],
          },
          {
            heading: 'אמנות אי-ההיאחזות',
            paragraphs: [
              'לעתים קרובות, אנו שופטים את עצמנו כשהמחשבות נודדות במהלך ההרפיה. אנחנו מתעצבנים על עצמנו שאנחנו לא "רגועים מספיק". אבל המטרה היא לא לעצור את המחשבות - המוח נועד לחשוב, בדיוק כפי שהלב נועד לפעום.',
              'המטרה היא לשנות את מערכת היחסים שלנו איתן. להתבונן בהן כמו בעננים החולפים בשמיים, מבלי לנסות לשנות או לעצור אותם.',
              'בפעם הבאה שאתם נשכבים לשוואסנה, נסו להקדיש עוד כמה רגעים כדי להפוך את השהייה לנוחה יותר. השתמשו בכרית מתחת לברכיים כדי לשחרר את הגב התחתון, כסו את העיניים כדי להפחית גירויים ויזואליים, ואפשרו לגוף להפוך כבד, נתמך לחלוטין על ידי האדמה.',
            ],
          },
        ],
        quote: 'הגמישות האמיתית אינה היכולת לגעת בבהונות, אלא היכולת לאפשר למחשבות לחלוף מבלי להיאחז בהן.',
      },
      en: {
        lead: 'After an hour of rhythmic breath, physical heat, and challenging postures, comes the moment we often anticipate or unintentionally resist. Savasana (corpse pose) seems deceptively simple: merely lying on the earth. Yet beneath the surface, it is arguably the most vital phase of whole-body integration.',
        sections: [
          {
            heading: 'The Challenge of Non-Doing',
            paragraphs: [
              'In modern living, we are conditioned for constant motion. Output is perceived as worth, and uninterrupted effort as productivity. When we finally stop, our mind continues racing, producing lists and anxieties. Here lies the genuine art of Savasana: being without doing.',
            ],
          },
          {
            heading: 'The Physiology of Deep Recovery',
            paragraphs: [
              'As we settle into stillness, we signal our central nervous system to shift from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest) dominance.',
              'Heart rate decelerates, blood pressure softens, and cortisol levels descend. The muscular and fascial networks absorb the neuro-motor benefits cultivated during the active practice.',
            ],
          },
          {
            heading: 'The Art of Non-Clinging',
            paragraphs: [
              'Practitioners often feel frustration when thoughts wander during savasana. But the goal was never to forcefully empty the mind — the brain thinks just as the lungs breathe.',
              'The true practice is relating to our thoughts like drifting clouds across an expansive sky, without grasping or pushing away.',
              'Next time you recline into Savasana, place a supportive bolster under your knees, soften your breath, and let the earth fully carry your weight.',
            ],
          },
        ],
        quote: 'True flexibility is not about touching your toes, but learning to let thoughts pass without clinging to them.',
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
        lead: 'היציבה שלנו אינה רק עניין אסתטי או מבני; היא השתקפות ישירה של המצב הרגשי שלנו, והאופן בו אנו תופסים את מקומנו בעולם.',
        sections: [
          {
            heading: 'חיבור בין גוף לרגש',
            paragraphs: [
              'כשאנו מכווצים או שפופים, הנשימה נהיית שטחית ומערכת העצבים מקבלת איתות של דחק. כשאנו מיישרים את עמוד השדרה ברכות, החזה נפתח והנשימה מתרחבת.',
            ],
          },
        ],
      },
      en: {
        lead: 'Our posture is not merely mechanical; it directly shapes our neurobiology, emotional equilibrium, and how we meet everyday experiences.',
        sections: [
          {
            heading: 'The Mind-Spine Link',
            paragraphs: [
              'When the chest collapses, diaphragm movement diminishes. Elevating the crown of the head creates room for breath and mental clarity.',
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
        lead: 'האופן שבו אנו מבלים את 30 הדקות הראשונות של היום קובע את הטון לכל מה שיבוא אחריו.',
        sections: [
          {
            heading: 'נשימה לפני מסכים',
            paragraphs: [
              'הקדשת 5 דקות של נשימה מודעת ושתיית מים חמימים לפני הצצה בטלפון מייצרת עוגן פנימי חזק שמלווה אותנו לאורך היום כולו.',
            ],
          },
        ],
      },
      en: {
        lead: 'The first thirty minutes after waking establish the nervous system baseline for the entire day.',
        sections: [
          {
            heading: 'Breath Before Screens',
            paragraphs: [
              'Five minutes of deep diaphragmatic breathing and warm hydration ground your awareness before outside demands rush in.',
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
        lead: 'אפריגרהה, העיקרון החמישי ביאמה בפילוסופיה היוגית, מלמד אותנו לשחרר אחיזה במה שאינו משרת אותנו עוד.',
        sections: [
          {
            heading: 'לשחרר כדי לקבל',
            paragraphs: [
              'כשכף היד קפוצה באגרוף, דבר אינו יכול להיכנס לתוכה. כשאנו פותחים את היד, המרחב מתחדש.',
            ],
          },
        ],
      },
      en: {
        lead: 'Aparigraha, the fifth Yama in Patanjali’s classical yoga sutras, illuminates the power of letting go of clutter and possessiveness.',
        sections: [
          {
            heading: 'Emptying to Receive',
            paragraphs: [
              'A clenched fist cannot receive anything new. Open hands allow breath, change, and renewed vitality to enter.',
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
