import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ARTICLES_DATA } from '../data/content';
import { Clock, ArrowLeft, ArrowRight, CheckCircle2, Send } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language, isRtl } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const article = ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0];

  if (!article && slug) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = ARTICLES_DATA.filter((a) => a.id !== article.id).slice(0, 2);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const contentLang = article.content[language];

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <div className="relative w-full min-h-[55vh] md:min-h-[65vh] lg:min-h-[75vh] bg-surface-container-low flex flex-col justify-end overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover opacity-85"
          />
        </div>

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

        {/* Header Content */}
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-margin-mobile lg:px-margin-desktop pb-8 flex flex-col items-center text-center animate-fade-in-up">
          
          <div className="flex items-center gap-3 mb-5">
            <span className="text-label-md font-label-md text-secondary tracking-[0.1em] uppercase font-semibold">
              {article.categoryLabel[language]}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="text-label-md font-label-md text-on-surface-variant flex items-center gap-1.5">
              <Clock size={15} className="text-primary" />
              <span>{article.readTime[language]}</span>
            </span>
          </div>

          <h1 className="font-display text-display-lg text-on-surface mb-6 max-w-[800px] leading-[1.15]">
            {article.title[language]}
          </h1>

          {article.subtitle && (
            <p className="text-body-lg text-on-surface-variant max-w-[650px] leading-relaxed">
              {article.subtitle[language]}
            </p>
          )}
        </div>
      </div>

      {/* 2. ARTICLE EDITORIAL BODY */}
      <div className="w-full max-w-[820px] mx-auto px-margin-mobile lg:px-margin-desktop py-14 md:py-20 relative text-start">
        
        {/* Soft background aura */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <article className="prose prose-lg max-w-none text-on-surface leading-relaxed">
          
          {/* Lead Paragraph */}
          <p className="text-xl md:text-2xl font-display text-on-surface leading-[1.65] mb-10 pb-6 border-b border-outline/10">
            {contentLang.lead}
          </p>

          {/* Dynamic Sections */}
          {contentLang.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              {section.heading && (
                <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold mt-10 mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-body-lg text-on-surface-variant mb-6 leading-[1.8]">
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Pull Quote */}
          {contentLang.quote && (
            <div className="my-12 p-8 bg-surface-container-low rounded-3xl border-s-4 border-primary shadow-soft">
              <blockquote className="font-display text-xl md:text-2xl text-on-surface italic leading-relaxed">
                "{contentLang.quote}"
              </blockquote>
            </div>
          )}
        </article>

        {/* Share & Return Links */}
        <div className="mt-14 pt-8 border-t border-outline/10 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-label-md font-semibold text-primary hover:text-primary-container uppercase tracking-wider transition-colors"
          >
            <ArrowIcon size={16} className={isRtl ? 'rotate-180' : 'rotate-180'} />
            <span>{t('allArticles')}</span>
          </Link>
        </div>
      </div>

      {/* 3. RELATED READING SECTION ("קריאה נוספת") */}
      <section className="w-full bg-surface-container-low py-section-gap border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          
          <div className="flex justify-between items-end mb-12">
            <div className="text-start">
              <h3 className="font-display text-headline-md text-on-surface mb-2">
                {t('relatedReading')}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {t('relatedArticlesSub')}
              </p>
            </div>

            <Link
              to="/blog"
              className="hidden md:flex items-center gap-2 text-label-md font-semibold text-primary hover:text-primary-container transition-colors group uppercase tracking-wider"
            >
              <span>{t('allArticles')}</span>
              <ArrowIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((relArt) => (
              <Link
                key={relArt.id}
                to={`/blog/${relArt.slug}`}
                className="flex flex-col group bg-surface rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-outline/5 hover:border-primary/20 text-start"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-surface-container">
                  <img
                    src={relArt.image}
                    alt={relArt.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-3 mb-3 text-xs text-on-surface-variant/70 tracking-widest uppercase font-medium">
                  <span className="text-secondary font-semibold">{relArt.categoryLabel[language]}</span>
                  <span className="w-1 h-1 rounded-full bg-secondary/50"></span>
                  <span>{relArt.readTime[language]}</span>
                </div>

                <h4 className="font-display text-xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
                  {relArt.title[language]}
                </h4>

                <p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed">
                  {relArt.excerpt[language]}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. NEWSLETTER CALLOUT */}
      <section className="bg-surface-container-low py-20 px-margin-mobile lg:px-margin-desktop text-center border-t border-outline/10">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-[36px] mb-4">mail</span>
          <h3 className="font-display text-headline-sm text-on-surface mb-3 font-semibold">
            {t('stayInTouch')}
          </h3>
          <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
            {t('stayInTouchSub')}
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
