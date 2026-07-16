/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types';

interface TermsProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Terms({ setCurrentPage }: TermsProps) {
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
              Terms & Conditions
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              Please review these Terms & Conditions carefully before using DrChart Healthcare services.
            </p>
          </div>

          {/* Terms content */}
          <div className="space-y-6 text-slate-600 text-sm leading-relaxed font-sans">
            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">1. Acceptance of Terms</h3>
              <p>
                By booking a complimentary consultation, registering for our free trial, or subscribing to our professional clinical documentation, precharting, or administrative support services, you agree to be legally bound by these Terms & Conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">2. Service Description</h3>
              <p>
                DrChart Healthcare provides virtual clinical documentation assistance, pre-visit planning (precharting), medical transcription, and related virtual administrative services. Our personnel act as virtual support assistants, entering data directly into your cloud EHR based on your guidelines.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">3. Clinical Responsibility & Physician Sign-Off</h3>
              <p>
                <span className="font-bold text-slate-950">CRITICAL REQUIREMENT:</span> DrChart documentation assistants draft notes and organize patient details solely for the physician's review. <span className="font-semibold text-teal-700">The attending physician maintains sole, absolute, and final clinical responsibility for all medical decisions, diagnoses, plans, and documentation accuracy</span>. 
              </p>
              <p>
                Attending clinicians must review, edit, approve, and sign off on all drafted clinical notes inside their EHR system before finalizing billing or diagnostic plans. DrChart is not liable for errors in final records which have been reviewed and approved by the attending physician.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">4. One-Week Free Trial Terms</h3>
              <p>
                Our complimentary one-week trial is provided to US medical clinics to evaluate our workflow compatibility:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>No credit card or billing details are required to initiate the trial.</li>
                <li>There is zero post-trial obligation or automatic subscription traps.</li>
                <li>The trial may be terminated by either party at any point with immediate effect.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">5. Professional Custom Pricing & Billing</h3>
              <p>
                Following the free trial, clinics may enroll in our monthly professional plans. Pricing is custom-tailored for each clinic, starting from $1,500/month, depending on clinical specialties, volume, and administrative requirements. Payments are processed monthly on a prepay basis unless stated otherwise.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">6. EHR Workspace Security & HIPAA Compliance</h3>
              <p>
                DrChart operates strictly under HIPAA-conscious safeguards, utilizing encrypted devices, multi-factor logins, secure email channels, and robust clean desk protocols. The client clinic is responsible for provisioning secure, restricted EHR user profiles for DrChart assistants and terminating them immediately upon agreement conclusion.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">7. NDA and Non-Solicitation</h3>
              <p>
                We maintain mutual strict non-disclosure commitments. Furthermore, you agree not to directly recruit, hire, or solicit any assigned DrChart documentation specialists or virtual assistants for direct employment outside of our agreement during the term and for 12 months following its termination.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">8. Termination of Service</h3>
              <p>
                Standard professional plans are governed on a month-to-month rolling basis. Either party may terminate services with a standard 30-day written notice to ensure safe, orderly offboarding of EHR workspaces.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">9. Governing Law</h3>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the State where DrChart Healthcare is headquartered, without regard to conflicts of law.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-display font-bold text-slate-950 text-base md:text-lg">10. Contact Us</h3>
              <p>
                For questions regarding these Terms & Conditions or to execute a corporate Business Associate Agreement (BAA), please contact us at:
              </p>
              <p className="font-mono text-xs text-slate-500">
                DrChart Healthcare | info@drcharthealthcare.com
              </p>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center text-xs">
            <button
              onClick={() => handleNav('privacy')}
              className="text-teal-600 hover:text-teal-500 font-semibold transition"
            >
              Review Privacy Policy
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
