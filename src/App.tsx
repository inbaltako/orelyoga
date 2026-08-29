import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PrivateSessions } from './pages/PrivateSessions';
import { RetreatsWorkshops } from './pages/RetreatsWorkshops';
import { Blog } from './pages/Blog';
import { ArticleDetail } from './pages/ArticleDetail';

// Helper to scroll to top on route change or handle hash links
const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollHandler />
        <div className="min-h-screen flex flex-col bg-background text-on-surface">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/private-sessions" element={<PrivateSessions />} />
              <Route path="/retreats-workshops" element={<RetreatsWorkshops />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticleDetail />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
