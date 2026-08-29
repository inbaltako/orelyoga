import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ARTICLES_DATA } from '../data/content';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';

export const Blog: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = [
    { id: 'all', label: t('filterAll') },
    { id: 'philosophy', label: t('filterPhilosophy') },
    { id: 'anatomy', label: t('filterAnatomy') },
    { id: 'mindfulness', label: t('filterMindfulness') },
    { id: 'lifestyle', label: t('filterLifestyle') },
    { id: 'home-practice', label: t('filterHomePractice') },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((art) => art.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full pt-32 pb-12 lg:pt-40 lg:pb-16 text-center animate-fade-in-up">
        <span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase font-semibold mb-3 block">
          {t('blogHeroTag')}
        </span>
        <h1 className="font-display text-display-lg text-primary mb-5">
          {t('blogHeroTitle')}
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('blogHeroSubtitle')}
        </p>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full mb-14">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setVisibleCount(6);
                }}
                className={`px-6 py-2.5 rounded-full font-label-md text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-md scale-105 font-semibold'
                    : 'border border-outline/20 text-on-surface hover:border-primary hover:text-primary bg-surface/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full pb-section-gap">
        {displayedArticles.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low/40 rounded-3xl p-8">
            <p className="text-on-surface-variant text-lg">
              {language === 'he' ? 'אין מאמרים בקטגוריה זו כרגע.' : 'No articles found in this category yet.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {displayedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="flex flex-col group cursor-pointer bg-surface rounded-2xl p-6 shadow-soft hover:shadow-xl transition-all duration-300 border border-outline/5 hover:border-primary/20 text-start"
              >
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-6 bg-surface-container">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 end-3 bg-surface/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
                    {article.categoryLabel[language]}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2.5 text-xs text-on-surface-variant/70 tracking-wider uppercase font-medium">
                  <span>{article.date[language]}</span>
                  <span className="w-1 h-1 rounded-full bg-secondary/60"></span>
                  <span>{article.readTime[language]}</span>
                </div>

                <h2 className="font-display text-xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title[language]}
                </h2>

                <p className="text-body-md text-on-surface-variant line-clamp-2 mb-6 leading-relaxed flex-1">
                  {article.excerpt[language]}
                </p>

                <div className="mt-auto flex items-center text-primary font-label-md text-xs uppercase tracking-wider group-hover:gap-2 transition-all font-semibold">
                  <span>{t('readMore')}</span>
                  <ArrowIcon size={16} className="ms-1" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredArticles.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="border border-outline/20 text-on-surface px-8 py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all hover:border-primary hover:text-primary hover:bg-surface-container flex items-center gap-2 bg-surface shadow-sm"
            >
              <RefreshCw size={16} />
              <span>{t('loadMoreArticles')}</span>
            </button>
          </div>
        )}
      </section>

    </div>
  );
};
