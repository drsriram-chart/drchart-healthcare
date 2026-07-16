/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Calendar, ExternalLink, HelpCircle } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import { PageRoute } from '../types';

interface FAQPageProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function FAQPage({ setCurrentPage }: FAQPageProps) {
  const handleContactClick = () => {
    window.location.hash = '#/contact';
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden h-44 md:h-60 border border-slate-200/80 shadow-md">
          <img
            src="/banner.jpg"
            alt="FAQ Banner"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col justify-center px-6 md:px-16 text-white space-y-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 w-max">
              Frequently Asked Questions
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight leading-tight">
              How Precharting & Documentation Support Works
            </h1>
            <p className="text-slate-300 text-xs max-w-2xl hidden sm:block">
              Find immediate, thorough answers regarding our EHR compatibility, HIPAA administrative compliance, onboarding speed, and our complimentary trial setup.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Main FAQ list */}
          <div className="lg:col-span-8">
            <FAQSection />
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Consultation Book */}
            <div className="bg-slate-950 text-white rounded-3xl border border-slate-900 p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-display font-bold text-base md:text-lg">Still Have Questions?</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Book a quick 30-minute consultation with our clinical onboarding coordinators to discuss your specific medical specialty and current clinical workflows.
                </p>
                <a
                  href="https://calendly.com/drcharthealthcare/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition shadow-sm"
                >
                  Book Complimentary Call
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">Email Official Desk</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Send your questions or current EHR template documentation specifications directly to our official inbox.
              </p>
              <a
                href="mailto:info@drcharthealthcare.com"
                className="text-teal-600 hover:text-teal-500 text-xs font-semibold block transition break-all"
              >
                info@drcharthealthcare.com
              </a>
              <button
                onClick={handleContactClick}
                className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                Submit Inquiry Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
