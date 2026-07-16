/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Mail, Globe, Calendar, ShieldCheck, HeartPulse, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { PageRoute } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (id: PageRoute) => {
    window.location.hash = `#/${id}`;
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-slate-900">
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="cursor-pointer inline-block" onClick={() => handleNavClick('home')}>
              <Logo height={50} variant="white" className="transition-transform duration-300 hover:scale-[1.02]" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping US physicians reclaim clinical efficiency. We offload documentation burdens so doctors can focus strictly on what matters most: patient wellness.
            </p>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800/80 p-3 rounded-2xl w-fit">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <div className="text-[10px] font-mono leading-tight">
                <span className="text-white font-semibold block">HIPAA-Conscious Safeguards</span>
                <span className="text-slate-500">NIST Security Standards Aligned</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-display font-semibold text-white text-xs tracking-wider uppercase">
              Corporate Links
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition duration-200 cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('how-it-works')}
                  className="hover:text-white transition duration-200 cursor-pointer text-left"
                >
                  Clinical Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('pricing')}
                  className="hover:text-white transition duration-200 cursor-pointer text-left"
                >
                  Pricing & Trial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('security')}
                  className="hover:text-white transition duration-200 cursor-pointer text-left"
                >
                  HIPAA Security
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-display font-semibold text-white text-xs tracking-wider uppercase">
              Inquiries & Bookings
            </h5>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] block text-slate-500 font-mono uppercase">Official Email</span>
                  <a href="mailto:info@drcharthealthcare.com" className="text-white hover:text-teal-400 transition break-all">
                    info@drcharthealthcare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] block text-slate-500 font-mono uppercase">Website</span>
                  <a href="https://www.drcharthealthcare.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition">
                    www.drcharthealthcare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] block text-slate-500 font-mono uppercase">Direct Appointment</span>
                  <a
                    href="https://calendly.com/dr-sriram-drcharthealthcare/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 transition flex items-center gap-1"
                  >
                    calendly.com/dr-sriram-drcharthealthcare/30min <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} DrChart Healthcare. All rights reserved.</p>
            <p className="mt-1 font-mono text-[10px]">Supervised by Clinical Operations Board</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <button
              onClick={() => handleNavClick('privacy')}
              className="hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavClick('terms')}
              className="hover:text-white transition cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-white transition cursor-pointer"
            >
              Support FAQs
            </button>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 bg-slate-900 border border-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl transition text-xs font-mono select-none"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
