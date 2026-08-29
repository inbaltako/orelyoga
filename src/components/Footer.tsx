import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { WHATSAPP_PHONE } from '../data/content';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-surface-container-low py-16 md:py-24 border-t border-outline/10 text-on-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4 text-right items-start rtl:items-start">
            <Link
              to="/"
              className="font-brand text-4xl sm:text-5xl text-primary font-normal tracking-wide text-right w-full block hover:text-primary-container transition-colors"
            >
              Orel Tako Yoga
            </Link>
            <p className="text-body-md text-on-surface-variant max-w-sm leading-relaxed text-right">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-start">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest font-semibold">
              {t('quickLinks')}
            </h4>
            <nav className="flex flex-col gap-2.5 text-body-md">
              <Link to="/#about" className="text-on-surface-variant hover:text-primary transition-colors">
                {t('about')}
              </Link>
              <Link to="/private-sessions" className="text-on-surface-variant hover:text-primary transition-colors">
                {t('privateSessions')}
              </Link>
              <Link to="/retreats-workshops" className="text-on-surface-variant hover:text-primary transition-colors">
                {t('retreatsWorkshops')}
              </Link>
              <Link to="/blog" className="text-on-surface-variant hover:text-primary transition-colors">
                {t('journal')}
              </Link>
              <a href="/#contact" className="text-on-surface-variant hover:text-primary transition-colors">
                {t('contact')}
              </a>
            </nav>
          </div>

          {/* Social & Connect */}
          <div className="flex flex-col gap-4 text-start">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest font-semibold">
              {t('stayConnected')}
            </h4>
            <p className="text-body-md text-on-surface-variant">
              {language === 'he'
                ? 'מוזמנים ליצור קשר, להצטרף לקהילה ולעקוב אחר עדכונים.'
                : 'Connect with our mindful community and stay updated on retreats.'}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-surface border border-outline/15 hover:border-primary flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-105 shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-surface border border-outline/15 hover:border-primary flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-105 shadow-sm"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[22px]">photo_camera</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-surface border border-outline/15 hover:border-primary flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-105 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@orelyoga.com"
                className="w-11 h-11 rounded-full bg-surface border border-outline/15 hover:border-primary flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-105 shadow-sm"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-outline/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-label-md text-on-surface-variant/60 uppercase tracking-widest font-label-md">
            © {new Date().getFullYear()} Orel Tako Yoga. {t('rights')}
          </p>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant/50">
            <span>Earth &amp; Breath Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
