/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, Globe, Calendar } from 'lucide-react';
import { PageRoute } from '../types';

interface PrivacyProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Privacy({ setCurrentPage }: PrivacyProps) {
  const handleNav = (id: PageRoute) => {
    window.location.hash = `#/${id}`;
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-12 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 font-mono">Last Updated: July 16, 2026</span>
            <h1 className="font-display font-extrabold text-slate-950 text-3xl md:text-4xl tracking-tight mt-2">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              DrChart Healthcare (“we”, “us”, or “our”) is dedicated to guarding your professional clinic data and respecting patient clinical privacy rules.
            </p>
          </div>

          {/* Policy Clauses */}
          <div className="space-y-6 text-slate-600 text-sm leading-relaxed font-sans">
            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">1. Scope of Agreement</h3>
              <p>
                This Privacy Policy applies to the DrChart Healthcare website (https://www.drcharthealthcare.com) and our standard clinical documentation, medical precharting, and administrative support services. This policy details how we collect, safeguard, and process clinic and contact information.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">2. HIPAA Safeguards & Zero-Local-Data Policy</h3>
              <p>
                We do not claim standard commercial 'HIPAA Certification' as no official federal certification mechanism exists for documentation assistants. Instead, <span className="font-semibold text-teal-700">all our workflows are designed from the ground up utilizing strict HIPAA-conscious administrative, physical, and technical safeguards</span>.
              </p>
              <p>
                Our core policy is a <span className="font-semibold text-slate-900">Zero-Local-Data Policy</span>. Our clinical documentation assistants access your cloud EHR system directly. No patient health information (PHI) is ever downloaded, copied, synchronized, exported, or printed onto local hard disks. It remains stored exclusively inside your own secure cloud EHR.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">3. Information We Collect</h3>
              <p>
                When you interact with our website or submit inquiries, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold text-slate-800">Practice Details:</span> Full name, clinic name, specialty, current EHR, and size.</li>
                <li><span className="font-semibold text-slate-800">Contact Details:</span> Email addresses, telephone numbers, and Calendly appointment slots.</li>
                <li><span className="font-semibold text-slate-800">Clerical Metadata:</span> Browser cookies and diagnostic analytic logs to optimize loading speed.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">4. Device & Workstation Security</h3>
              <p>
                To provide absolute security compliance, DrChart employs the following device controls:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Workstations are reserved exclusively for client clinic assistance (no personal software).</li>
                <li>Full-disk BitLocker encryption is enabled across all system storage blocks.</li>
                <li>Strong password rules backed by multi-factor authentication (2FA) controls.</li>
                <li>Google Workspace enterprise email channels backed by strict phishing barriers.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">5. How We Use and Share Information</h3>
              <p>
                We utilize your contact information solely to coordinate onboarding trials and maintain support accounts. <span className="font-semibold text-slate-900">We do not sell, rent, trade, or distribute your contact, clinic, or provider info to third-party marketing services under any circumstances</span>.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">6. NDA & Confidentiality Commitments</h3>
              <p>
                All documentation specialists undergo background verification, exhaustive medical compliance training, and are bound by legal, strict Non-Disclosure Agreements (NDAs). Your custom EHR workflows and charting templates remain strictly confidential.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">7. Policy Modifications</h3>
              <p>
                We may update this Privacy Policy to reflect changing security rules. Changes become active immediately upon posting to this URL.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">8. Contact Information</h3>
              <p>
                If you have questions regarding this Privacy Policy or our security safeguards, please contact our Technical Security Director at:
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 font-mono text-xs text-slate-600 space-y-1">
                <span className="block text-slate-900 font-semibold font-sans">DrChart Healthcare</span>
                <span className="block">Technical Director: Security & Compliance Department</span>
                <span className="block">Email: <a href="mailto:info@drcharthealthcare.com" className="text-teal-600 hover:underline">info@drcharthealthcare.com</a></span>
                <span className="block">Web: <a href="https://www.drcharthealthcare.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.drcharthealthcare.com</a></span>
              </div>
            </section>
          </div>

          {/* Footer Navigation within policy */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center text-xs">
            <button
              onClick={() => handleNav('terms')}
              className="text-teal-600 hover:text-teal-500 font-semibold transition"
            >
              Review Terms & Conditions
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-xl transition"
            >
              Start Free Trial Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
