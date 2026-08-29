import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TEACHING_STYLES, WHATSAPP_PHONE } from '../data/content';
import { MessageCircle, Calendar, Sparkles, ShieldCheck, User } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO HEADER */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-32 pb-12 lg:pt-40 lg:pb-16 flex flex-col items-center text-center animate-fade-in-up">
        <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold mb-3">
          {t('aboutHeroTag')}
        </span>
        
        <h1 className="font-display text-display-lg text-primary tracking-tight max-w-3xl mb-6">
          {t('aboutHeroTitle')}
        </h1>
        
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('aboutHeroSubtitle')}
        </p>

        <div className="mt-8 w-px h-12 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
      </section>

      {/* 2. MAIN STORY & IMAGE SECTION */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Placeholder & Credentials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            
            {/* Orel's Image Placeholder */}
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-high border border-outline/15 shadow-soft relative flex flex-col items-center justify-center p-8 text-center group">
              
              {/* Soft decorative background circles */}
              <div className="w-40 h-40 rounded-full bg-secondary/10 absolute -top-10 -right-10 blur-2xl pointer-events-none"></div>
              <div className="w-40 h-40 rounded-full bg-primary/10 absolute -bottom-10 -left-10 blur-2xl pointer-events-none"></div>

              {/* Icon & Label Placeholder Container */}
              <div className="w-24 h-24 rounded-full bg-surface shadow-md border border-outline/10 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform duration-300">
                <User size={44} className="text-primary/70" />
              </div>

              <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                {language === 'he' ? 'אוראל טקו' : 'Orel Tako'}
              </h3>
              
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                {language === 'he' ? 'מורה מוסמכת ליוגה' : 'Certified Yoga Teacher'}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-outline/10 text-xs text-on-surface-variant font-medium">
                <Sparkles size={14} className="text-secondary" />
                <span>{t('aboutImagePlaceholder')}</span>
              </div>
            </div>

            {/* Teaching Pillars Badge */}
            <div className="bg-surface rounded-2xl p-6 border border-outline/10 shadow-sm flex flex-col gap-3 text-start">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <ShieldCheck size={18} className="text-secondary" />
                <span>{language === 'he' ? 'דגשי ההוראה של אוראל' : 'Core Teaching Pillars'}</span>
              </div>
              <ul className="text-xs sm:text-sm text-on-surface-variant space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>{language === 'he' ? 'שיקום סומטי ומניעת פציעות' : 'Somatic recovery & injury prevention'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>{language === 'he' ? 'התאמה אנטומית אישית לכל גוף' : 'Individualized anatomical alignment'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>{language === 'he' ? 'העמקה בנשימה והשקטת מערכת העצבים' : 'Breathwork & nervous system regulation'}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Narrative Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10 text-start">
            
            {/* Story Chapter */}
            <div className="flex flex-col gap-5">
              <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
                {language === 'he' ? 'המסע האישי' : 'The Personal Journey'}
              </span>
              <h2 className="font-display text-headline-lg text-primary">
                {t('storyHeading')}
              </h2>
              <p className="text-body-lg text-on-surface leading-[1.85]">
                {t('storyP1')}
              </p>
              <p className="text-body-lg text-on-surface leading-[1.85]">
                {t('storyP2')}
              </p>
              <p className="text-body-lg text-on-surface leading-[1.85]">
                {t('storyP3')}
              </p>
            </div>

            {/* Highlight Quote Box */}
            <div className="p-8 rounded-3xl bg-surface-container-low border border-outline/10 shadow-soft">
              <blockquote className="font-display text-xl sm:text-2xl text-on-surface italic leading-relaxed">
                {language === 'he'
                  ? '״היוגה לימדה אותי שכאשר אנחנו מפסיקים להילחם בגוף ומקשיבים לו בחמלה, הוא מסוגל לחולל ניסים של ריפוי והתחדשות.״'
                  : '“Yoga taught me that when we stop fighting our bodies and listen with gentle compassion, the body possesses an innate capacity to heal and regenerate.”'}
              </blockquote>
            </div>

            {/* Philosophy Chapter */}
            <div className="flex flex-col gap-5 pt-4">
              <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
                {t('aboutSubtitle')}
              </span>
              <h2 className="font-display text-headline-lg text-primary">
                {t('philosophyHeading')}
              </h2>
              <p className="text-body-lg text-on-surface leading-[1.85]">
                {t('philosophyP1')}
              </p>
              <p className="text-body-lg text-on-surface leading-[1.85]">
                {t('philosophyP2')}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-outline/10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/private-sessions"
                className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md flex items-center justify-center gap-2 text-center"
              >
                <Calendar size={18} />
                <span>{t('bookPrivateSession')}</span>
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  language === 'he'
                    ? 'היי אוראל, קראתי את הסיפור שלך באתר ואשמח להתייעץ לגבי תרגול שמתאים לי.'
                    : 'Hi Orel, I read your story on the website and would love to consult about a practice tailored to my needs.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-surface-container font-label-md text-label-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle size={18} />
                <span>{t('whatsappQuestions')}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TEACHING STYLES OVERVIEW */}
      <section className="w-full bg-surface-container-low py-section-gap border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-start">
          <div className="max-w-xl mb-12">
            <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold mb-2 block">
              {language === 'he' ? 'עולמות התרגול' : 'Practice Modalities'}
            </span>
            <h2 className="font-display text-headline-md text-on-surface">
              {language === 'he' ? 'סגנונות הוראה וגישות תנועה' : 'Teaching Approaches & Traditions'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHING_STYLES.map((style) => (
              <div
                key={style.id}
                className="bg-surface rounded-2xl p-6 border border-outline/5 shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">{style.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-on-surface mb-2">
                    {style.name[language]}
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {style.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
