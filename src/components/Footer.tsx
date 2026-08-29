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
          <div className="flex flex-col gap-4 text-start">
            <Link
              to="/"
              className="font-display text-2xl text-primary font-medium tracking-tight"
              dir="ltr"
            >
              Orel Tako Yoga
            </Link>
            <p className="text-body-md text-on-surface-variant max-w-sm leading-relaxed">
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
