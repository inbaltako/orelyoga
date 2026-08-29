import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RETREATS_DATA, WHATSAPP_PHONE } from '../data/content';
import { Calendar, MapPin, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const RetreatsWorkshops: React.FC = () => {
  const { t, language } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO HEADER */}
      <section className="bg-surface-container-low pt-32 pb-16 lg:pt-40 lg:pb-24 px-margin-mobile lg:px-margin-desktop border-b border-outline/10">
        <div className="max-w-container-max mx-auto text-center flex flex-col items-center animate-fade-in-up">
          <span className="text-label-md text-secondary font-label-md tracking-widest uppercase font-semibold mb-3">
            {t('retreatsTag')}
          </span>
          <h1 className="font-display text-display-lg text-on-surface mb-5 max-w-2xl">
            {t('retreatsTitle')}
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            {t('retreatsSubtitle')}
          </p>
        </div>
      </section>

      {/* 2. RETREATS & WORKSHOPS CARDS */}
      <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {RETREATS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-surface rounded-3xl overflow-hidden shadow-soft border border-outline/10 hover:shadow-xl transition-all duration-300 group text-start"
            >
              {/* Image with Tag & Spots Left badge */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {item.tag && (
                  <div className="absolute top-4 start-4 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm text-xs font-semibold text-secondary">
                    {item.tag[language]}
                  </div>
                )}

                {item.price && (
                  <div className="absolute bottom-4 end-4 bg-primary/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm text-xs font-semibold text-on-primary">
                    {item.price[language]}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-on-surface-variant/80 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-secondary" />
                    <span>{item.date[language]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} className="text-secondary" />
                    <span>{item.location[language]}</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
                  {item.title[language]}
                </h2>

                <p className="text-body-md text-on-surface-variant leading-relaxed mb-6 flex-1">
                  {item.description[language]}
                </p>

                <div className="pt-5 border-t border-outline/10 flex items-center justify-between gap-4">
                  {item.spotsLeft ? (
                    <span className="text-xs text-secondary font-medium flex items-center gap-1">
                      <Sparkles size={14} />
                      {language === 'he'
                        ? `נותרו ${item.spotsLeft} מקומות אחרונים`
                        : `Only ${item.spotsLeft} spots available`}
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                      language === 'he'
                        ? `היי אוראל, אשמח לפרטים ולהרשמה עבור ${item.title.he} (${item.date.he}).`
                        : `Hi Orel, I'd like info and registration details for ${item.title.en} (${item.date.en}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-xs uppercase tracking-wider hover:bg-primary-container transition-all shadow-sm"
                  >
                    {language === 'he' ? 'שריין מקום' : 'Reserve Spot'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMING SOON TEASER */}
      <section className="bg-surface-container-low/60 py-20 px-margin-mobile lg:px-margin-desktop border-t border-outline/10 text-center">
        <div className="max-w-container-max mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-primary/40 text-[48px] mb-6">spa</span>
          <h2 className="font-display text-headline-md text-on-surface mb-3">
            {t('comingSoon')}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
            {t('comingSoonText')}
          </p>
          <div className="mt-8 w-16 h-px bg-outline-variant mx-auto"></div>
        </div>
      </section>

      {/* 4. NEWSLETTER SUBSCRIPTION */}
      <section className="bg-surface-container-highest/80 py-20 px-margin-mobile lg:px-margin-desktop text-center border-t border-outline/10">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-[36px] mb-4">mail</span>
          <h3 className="font-display text-headline-sm text-on-surface mb-3 font-semibold">
            {t('newsletterTitle')}
          </h3>
          <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
            {t('newsletterSubtitle')}
          </p>

          {newsletterSuccess ? (
            <div className="flex items-center gap-2 text-primary font-medium p-4 rounded-xl bg-surface/80 shadow-soft animate-fade-in">
              <CheckCircle2 size={20} />
              <span>{t('newsletterThanks')}</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="w-full flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <input
                  type="email"
                  required
                  placeholder={t('newsletterPlaceholder')}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-outline py-3 px-3 text-body-md font-body text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all whitespace-nowrap shadow-sm flex items-center justify-center gap-2"
              >
                <span>{t('subscribe')}</span>
                <Send size={15} />
              </button>
            </form>
          )}

          <p className="text-xs text-on-surface-variant/60 mt-6 font-body">
            {t('privacyNotice')}
          </p>
        </div>
      </section>

    </div>
  );
};
