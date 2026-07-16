/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, ArrowLeft, Home, HelpCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface NotFoundProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function NotFound({ setCurrentPage }: NotFoundProps) {
  const handleGoHome = () => {
    window.location.hash = '#/home';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <div className="max-w-md w-full px-4 text-center space-y-6">
        {/* Visual Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 animate-bounce mb-2">
          <ShieldAlert className="w-8 h-8" />
        </div>

        {/* Error Code */}
        <span className="block text-xs font-mono text-slate-400 uppercase tracking-[0.2em]">Error Code: 404 - Chart Not Found</span>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="font-display font-extrabold text-slate-950 text-3xl">
            Requested Record Missing
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page or record you are attempting to access is either archived, restricted, or does not exist. Let us return you back to safe, secure clinical territory.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={handleGoHome}
            className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-4 rounded-xl text-xs transition shadow-md shadow-teal-500/5 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Return Home
          </button>
          <button
            onClick={() => {
              window.location.hash = '#/faq';
              setCurrentPage('faq');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl text-xs transition cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            Support FAQs
          </button>
        </div>
      </div>
    </div>
  );
}
