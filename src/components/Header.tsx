import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/private-sessions', label: t('privateSessions') },
    { to: '/retreats-workshops', label: t('retreatsWorkshops') },
    { to: '/blog', label: t('journal') },
    { to: '/#contact', label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-[0_1px_15px_rgba(0,0,0,0.04)] py-3'
          : 'bg-surface-bright/80 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        
        {/* Left: Language Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors tracking-widest px-2.5 py-1 rounded-full border border-outline/10 hover:border-primary/30"
            aria-label="Switch Language"
          >
            {language === 'he' ? 'עב | EN' : 'EN | עב'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-body-md">
          {navLinks.map((link) => {
            const isHash = link.to.includes('#');
            if (isHash) {
              return (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-on-surface-variant hover:text-primary transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors font-medium relative py-1 ${
                    isActive
                      ? 'text-primary font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-100'
                      : 'text-on-surface-variant hover:text-primary after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: CTA & Brand Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/private-sessions"
            className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-sm hover:shadow active:scale-95"
          >
            {t('bookClass')}
          </Link>

          <Link
            to="/"
            className="flex flex-col items-end group"
          >
            <span
              className="font-display text-xl sm:text-2xl text-primary font-medium tracking-tight leading-none group-hover:text-primary-container transition-colors"
              dir="ltr"
            >
              Orel Tako Yoga
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-surface-bright/95 backdrop-blur-xl border-b border-outline/10 shadow-xl transition-all animate-fade-in px-6 py-8">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => {
              const isHash = link.to.includes('#');
              if (isHash) {
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-on-surface hover:text-primary py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg py-2 transition-colors ${
                      isActive ? 'text-primary font-bold' : 'text-on-surface hover:text-primary font-medium'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}

            <div className="pt-4 border-t border-outline/10 flex flex-col gap-4">
              <Link
                to="/private-sessions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-primary text-on-primary font-label-md text-center tracking-wider uppercase shadow"
              >
                {t('bookClass')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
