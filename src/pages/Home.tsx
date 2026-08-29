import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TEACHING_STYLES, ARTICLES_DATA, WHATSAPP_PHONE } from '../data/content';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const Home: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-28 pb-16 lg:pt-36 lg:pb-section-gap flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col items-start gap-6 z-10 text-start animate-fade-in-up">
          
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1.5px] bg-secondary"></span>
            <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
              {t('brandSubtitle')}
            </span>
          </div>

          <h1 className="font-display text-display-lg text-on-surface leading-[1.15]">
            {language === 'he' ? (
              <>
                מרחב לתנועה,<br />
                <span className="text-primary italic font-normal">נשימה ונוכחות</span>
              </>
            ) : (
              <>
                A Sanctuary for<br />
                <span className="text-primary italic font-normal">Breath &amp; Presence</span>
              </>
            )}
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            {t('heroDescription')}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4">
            <Link
              to="/private-sessions"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>{t('bookPrivateSession')}</span>
              <ArrowIcon size={18} />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                language === 'he'
                  ? 'היי אוראל, אשמח לקבל פרטים נוספים על השיעורים שלך.'
                  : 'Hello Orel, I would love to learn more about your yoga classes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all border border-outline/15 hover:border-primary/40 bg-surface/50"
            >
              <MessageCircle size={18} className="text-secondary" />
              <span>{t('whatsappQuestions')}</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Arch */}
        <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-[4/5] max-w-[480px] lg:max-w-none">
          <div className="absolute inset-0 bg-surface-container rounded-t-full rounded-b-[4rem] overflow-hidden shadow-2xl shadow-primary/10 border border-outline/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Fx3IshWa7b361OlLHhfZjvJZUNUAHR1G0tP35rMNHNbAjDboXBlw4T6Ohtr2J3drZp0Ye9Agr98FzYeH_8bqOioFb8V64Sbp2tHrjW-lBXq_F63mV69gvbk73eNgc1iFvfn0G6FlxEwCuwSEk3KHEMrGHxy6MB582pLuHqZ6jxFU5xMgTLY0hQrLXA2S-Eibhxc9UiIT0QcV0k4oPrfyl1MG2Qp76y_l5xPv7l-ndfKF1A6KUuLCtw"
              alt="Serene minimalist sunlit yoga studio interior"
              className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
          </div>

          {/* Decorative Rotating Motif */}
          <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-28 h-28 lg:w-36 lg:h-36 rounded-full border border-secondary/20 bg-surface-bright/80 backdrop-blur-sm flex items-center justify-center animate-[spin_25s_linear_infinite] shadow-soft">
            <svg className="w-20 h-20 text-secondary/40" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE TEACHER SECTION */}
      <section id="about" className="w-full bg-surface-container-low py-section-gap scroll-mt-20">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Teacher Image */}
          <div className="flex-1 w-full relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-surface-variant shadow-xl relative border border-outline/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU1qWHcgwslqEy4v9V8Pt6fNS5k0Rk2nTtOysL0qqNtW08jvxL81sWujgrR5PjJH5aDHXiyXdWOz7yyiQL50CsfAx1_JAU5ZHCzzYyI3yB3Rbm_sBy5h9GLwkEKJXPmKY-julDavXP6lCqUqAncJ0CxoHs0DnP-6LjqiL-oNmnQ40svxE1B7lVkc0csdk6aO3KWLFr_LyA0o_tENSlPsCcPcsaKcfpvybTgafStjDkJkNsCcKMmZ3gcQ"
                alt="Textured yoga mat in peaceful morning studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Subtle floating quote badge */}
            <div className="absolute -bottom-6 start-6 bg-surface p-5 rounded-2xl shadow-soft border border-outline/10 max-w-xs">
              <p className="font-display text-sm italic text-primary leading-snug">
                {language === 'he'
                  ? '״היוגה היא חזרה הביתה אל הגוף והשקט הפנימי.״'
                  : '“Yoga is returning home to your bodily center and inner silence.”'}
              </p>
            </div>
          </div>

          {/* About Text & Teaching Styles */}
          <div className="flex-1 flex flex-col gap-6 text-start">
            <div className="flex flex-col gap-4">
              <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
                {t('aboutSubtitle')}
              </span>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {t('aboutText')}
              </p>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-label-md uppercase tracking-wider hover:text-primary-container group transition-colors pt-1"
              >
                <span>{t('aboutStoryLink')}</span>
                <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>

            {/* Styles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              {TEACHING_STYLES.map((style) => (
                <div key={style.id} className="flex items-start gap-4 p-3.5 rounded-xl bg-surface/70 border border-outline/5 hover:border-primary/20 transition-all hover:bg-surface">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[22px]">{style.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-base font-semibold text-on-surface">
                      {style.name[language]}
                    </h3>
                    <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                      {style.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRIVATE SESSIONS PREVIEW */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col gap-8 text-start order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
                {t('privateSectionTag')}
              </span>
              <h2 className="font-display text-headline-lg text-on-surface">
                {t('privateSectionTitle')}
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {t('privateSectionDesc')}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline/10 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-on-surface">
                    {language === 'he' ? 'התאמה אישית מלאה' : 'Personalized Assessment'}
                  </h4>
                  <p className="text-sm text-on-surface-variant/80">
                    {language === 'he'
                      ? 'מפגש שבו נכיר את היכולות והצרכים שלך ונבנה את הבסיס לתרגול.'
                      : 'An initial session clarifying goals, spinal posture, and practice roadmap.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline/10 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined">self_improvement</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-on-surface">
                    {language === 'he' ? 'תרגול 1-על-1 מעמיק' : '1-on-1 Deep Practice'}
                  </h4>
                  <p className="text-sm text-on-surface-variant/80">
                    {language === 'he'
                      ? 'מפגש אישי ממוקד המאפשר צלילה עמוקה לטכניקה, נשימה ונוכחות.'
                      : 'Focused session tailoring breath, biomechanics, and restoration.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                to="/private-sessions"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md active:scale-95"
              >
                {t('bookSessionNow')}
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-outline/10">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UFIYA-Q_KcHYxBsjxlIsFmLjVEQoAd8xksTv6Y70PwYphVbkTjwgj3eqLrhz6MvJQomI4VPb43Pi3XDOSOI-BbiJJ8nvNVhaL9i0x88Qql3EVGU8beMogWn_cHFwj6WMTLR8_ULbc7P-LJHNf5KIcAq_wlRco5BAyrWl88IFURXdchavor1TjoLzpHf176Ffs4oNKJtUFvJr3sYbhQr9u5MlamA1nNptL7DsAiUmnUbKzW0pZJYha6U77D"
                alt="Peaceful yoga practice space with mat and block"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </section>

      {/* 4. JOURNAL / BLOG PREVIEW */}
      <section className="w-full bg-surface-container-low pt-24 pb-section-gap border-t border-outline/10 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-[28px]">auto_stories</span>
            <h2 className="font-display text-headline-md text-on-surface">
              {t('journalTitle')}
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
              {t('journalSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES_DATA.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="flex flex-col group bg-surface rounded-2xl p-6 shadow-soft hover:shadow-md transition-all duration-300 border border-outline/5 hover:border-primary/20 text-start"
              >
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-6 bg-surface-container">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 end-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {article.categoryLabel[language]}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2.5 text-xs text-on-surface-variant/70 tracking-wider uppercase">
                  <span>{article.date[language]}</span>
                  <span className="w-1 h-1 rounded-full bg-secondary/60"></span>
                  <span>{article.readTime[language]}</span>
                </div>

                <h3 className="font-display text-lg font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title[language]}
                </h3>

                <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                  {article.excerpt[language]}
                </p>

                <div className="mt-auto flex items-center text-primary font-label-md text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                  <span>{t('readMore')}</span>
                  <ArrowIcon size={14} className="ms-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-label-md text-label-md text-on-surface-variant uppercase tracking-wider border border-outline-variant hover:border-primary hover:text-primary transition-all hover:scale-105 bg-surface"
            >
              <span>{t('allArticles')}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="w-full bg-surface py-section-gap relative overflow-hidden scroll-mt-20">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Text & WhatsApp Button */}
            <div className="flex flex-col gap-8 text-start">
              <div className="flex flex-col gap-4">
                <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
                  {language === 'he' ? 'דלת פתוחה' : 'Open Sanctuary'}
                </span>
                <h2 className="font-display text-headline-lg text-on-surface">
                  {t('contactTitle')}
                </h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  {t('contactDesc')}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                    language === 'he'
                      ? 'היי אוראל, אשמח ליצור קשר בנוגע לשיעורי יוגה.'
                      : 'Hi Orel, I would love to connect regarding yoga sessions.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-primary-container text-on-primary-container hover:shadow-lg transition-all duration-300 border border-primary/20"
                >
                  <div className="w-14 h-14 rounded-full bg-on-primary-container/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">chat</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-xl font-medium leading-none">
                      {t('whatsappChat')}
                    </span>
                    <span className="text-sm opacity-85">
                      {t('whatsappAvailable')}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Form Card */}
            <div className="bg-surface-container-low p-8 lg:p-12 rounded-3xl border border-outline/10 shadow-soft text-start">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl text-on-surface font-medium">
                      {t('messageSentSuccess')}
                    </h3>
                    <p className="text-body-md text-on-surface-variant max-w-sm">
                      {t('messageSentDesc')}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 text-sm font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4"
                  >
                    {t('sendAnotherMessage')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="home-name" className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                      {t('fullName')} *
                    </label>
                    <input
                      id="home-name"
                      type="text"
                      required
                      placeholder={t('fullNamePlaceholder')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface border border-outline/15 rounded-xl px-4 py-3.5 text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="home-email" className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                      {t('email')} *
                    </label>
                    <input
                      id="home-email"
                      type="email"
                      required
                      placeholder={t('emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface border border-outline/15 rounded-xl px-4 py-3.5 text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      dir="ltr"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="home-message" className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                      {t('message')} *
                    </label>
                    <textarea
                      id="home-message"
                      rows={4}
                      required
                      placeholder={t('messagePlaceholder')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface border border-outline/15 rounded-xl px-4 py-3.5 text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-sm hover:shadow active:scale-95 self-start"
                  >
                    {t('send')}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
