/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageRoute } from './types';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isUnknownRoute, setIsUnknownRoute] = useState(false);

  // Parse URL hash route on mount and change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#/' || hash === '#/home') {
        setCurrentPage('home');
        setIsUnknownRoute(false);
      } else {
        const route = hash.replace('#/', '');
        const validRoutes: PageRoute[] = [
          'home',
          'services',
          'how-it-works',
          'pricing',
          'security',
          'faq',
          'contact',
          'privacy',
          'terms',
        ];

        if (validRoutes.includes(route as PageRoute)) {
          setCurrentPage(route as PageRoute);
          setIsUnknownRoute(false);
        } else {
          setIsUnknownRoute(true);
        }
      }
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Map route to page component
  const renderPage = () => {
    if (isUnknownRoute) {
      return <NotFound setCurrentPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <Pricing setCurrentPage={setCurrentPage} />;
      case 'security':
        return <Security setCurrentPage={setCurrentPage} />;
      case 'faq':
        return <FAQPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <Privacy setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <Terms setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-teal-500/20 selection:text-teal-900 font-sans" id="app-root-container">
      {/* Navigation Header */}
      <Header currentPage={isUnknownRoute ? ('home' as any) : currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page Layout Wrapper with motion transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={isUnknownRoute ? '404' : currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
