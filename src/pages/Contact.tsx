/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Mail, Globe, Clock, ShieldCheck, CheckCircle, ExternalLink, HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { PageRoute } from '../types';

interface ContactProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const features = [
    "30-Minute Consultation",
    "Complimentary One-Week Trial",
    "No Credit Card Required",
    "No Obligation or Commitment"
  ];

  return (
    <div className="pt-24 pb-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden h-44 md:h-60 border border-slate-200/80 shadow-md">
          <img
            src="/banner.jpg"
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col justify-center px-6 md:px-16 text-white space-y-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 w-max">
              Get In Touch
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight leading-tight">
              Schedule Your Complimentary Onboarding Session
            </h1>
            <p className="text-slate-300 text-xs max-w-2xl hidden sm:block">
              Begin saving 3 hours daily. Schedule a consultation or submit your medical questionnaire to initiate your complimentary one-week trial.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form and info split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Booking & Calendly trigger details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 text-white rounded-3xl border border-slate-900 p-6 md:p-8 shadow-xl relative overflow-hidden">
              {/* Subtle light leak */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl"></div>

              <div className="space-y-6 relative z-10">
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block font-mono">Option A</span>
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl mt-1">
                    Book Instant Appointment
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1.5 leading-relaxed">
                    Select a convenient time slot on our official Calendly calendar to map out your precharting trial in real-time.
                  </p>
                </div>

                {/* Promotional trial terms checklist */}
                <div className="space-y-3.5 py-4 border-y border-slate-900">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs md:text-sm">
                      <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                      <span className="font-medium text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-2">
                  <a
                    href="https://calendly.com/dr-sriram-drcharthealthcare/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition shadow-lg shadow-teal-500/10 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Calendly Consultation
                    <ExternalLink className="w-3.5 h-3.5 text-teal-200" />
                  </a>
                  <p className="text-[10px] text-slate-500 text-center">
                    Redirects to safe third-party booking gateway at Calendly.com
                  </p>
                </div>
              </div>
            </div>

            {/* Support Desk details */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block font-mono">Directory Info</span>
                <h4 className="font-display font-bold text-slate-950 text-lg mt-1">
                  DrChart Administrative Desk
                </h4>
              </div>

              <ul className="space-y-4 text-xs md:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Inquiry Support</span>
                    <a href="mailto:info@drcharthealthcare.com" className="text-slate-950 font-semibold hover:text-teal-600 transition">
                      info@drcharthealthcare.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Official Domain</span>
                    <a href="https://www.drcharthealthcare.com" target="_blank" rel="noopener noreferrer" className="text-slate-950 font-semibold hover:text-teal-600 transition">
                      www.drcharthealthcare.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Onboarding Operating Hours</span>
                    <span className="text-slate-950 font-semibold">
                      08:00 AM – 06:00 PM EST (Mon – Fri)
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Inquiry questionnaire form (Option B) */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -top-3 -left-3 bg-teal-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-md z-10 shadow-sm shadow-teal-500/10">
                Option B: Online Questionnaire
              </div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Security / HIPAA compliance block */}
        <div className="mt-20 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-50 border border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-900 block">Encrypted Data Collection Protocol</span>
              <span>All form communications are compiled and transmitted securely to avoid information leakage.</span>
            </div>
          </div>
          <button
            onClick={() => {
              window.location.hash = '#/security';
              setCurrentPage('security');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="whitespace-nowrap text-xs text-teal-600 hover:text-teal-500 font-semibold transition"
          >
            Review Trust Policies
          </button>
        </div>
      </div>
    </div>
  );
}
