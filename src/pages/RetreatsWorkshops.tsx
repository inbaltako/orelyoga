import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Send } from 'lucide-react';

export const RetreatsWorkshops: React.FC = () => {
  const { t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  return (
    <div className="flex flex-col w-full min-h-[85vh] justify-between">
      
      {/* 1. HERO HEADER */}
      <section className="bg-surface-container-low pt-32 pb-16 lg:pt-40 lg:pb-20 px-margin-mobile lg:px-margin-desktop border-b border-outline/10">
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

      {/* 2. COMING SOON SECTION (STITCH DESIGN SPEC) */}
      <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-24 sm:py-32 w-full">
        <div className="flex flex-col items-center justify-center text-center animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-8 text-primary">
            <span className="material-symbols-outlined text-primary/70 text-[48px]">spa</span>
          </div>
          <h2 className="font-display text-display-lg text-on-surface mb-4">
            {t('comingSoon')}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
            {t('comingSoonText')}
          </p>
          <div className="mt-12 w-16 h-px bg-outline-variant mx-auto"></div>
        </div>
      </section>

      {/* 3. NEWSLETTER SUBSCRIPTION */}
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
            <div className="flex items-center gap-2 text-primary font-medium p-4 rounded-xl bg-surface shadow-soft animate-fade-in">
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
