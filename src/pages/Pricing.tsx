/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, CheckCircle2, ChevronRight, Check, HelpCircle, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface PricingProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Pricing({ setCurrentPage }: PricingProps) {
  const trialFeatures = [
    "1 Full Week of Precharting",
    "No Credit Card Required",
    "No Obligation / Post-Trial Trap",
    "No Hidden Setup Charges",
    "Real EHR Integration & Notes Drafts",
    "Specialty-aligned Specialist Assigned",
    "Complete Administrative Workflow Audit"
  ];

  const planDrivers = [
    { label: "Medical Specialty", desc: "Specialized clinical terminologies (e.g., Cardiology vs. Pediatrics)" },
    { label: "Number of Providers", desc: "Volume discounts apply for clinical groups with multiple providers" },
    { label: "Documentation Volume", desc: "Estimated average patient visits per provider per week" },
    { label: "Workflow Complexity", desc: "Inclusion of administrative messages, orders, or inbox triaging" },
    { label: "Administrative Support Requirements", desc: "Additional non-charting virtual clinic support items" }
  ];

  const handleFreeTrialClick = () => {
    window.location.hash = '#/contact';
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultationClick = () => {
    window.open('https://calendly.com/dr-sriram-drcharthealthcare/30min', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 pb-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden h-44 md:h-60 border border-slate-200/80 shadow-md">
          <img
            src="/banner.jpg"
            alt="Pricing Banner"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col justify-center px-6 md:px-16 text-white space-y-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 w-max">
              Pricing & Plans
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight leading-tight">
              Transparent, Custom Pricing Built for Clinical Needs
            </h1>
            <p className="text-slate-300 text-xs max-w-2xl hidden sm:block">
              Begin with our complimentary one-week trial. No traps, no hidden charges. Transition to customized professional plans built specifically to match your clinic size and volume.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Free Trial Plan (Section One) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-lg p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient accent background badge */}
            <div className="absolute top-0 right-0 bg-teal-600 text-white text-[10px] uppercase font-bold py-1.5 px-6 rounded-bl-2xl">
              Highly Recommended
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Section One</span>
                <h3 className="font-display font-bold text-slate-950 text-xl md:text-2xl mt-1">
                  Complimentary Trial
                </h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5">
                  Experience our actual precharting workflow inside your active EHR environment for one full week, risk-free.
                </p>
              </div>

              {/* Price Banner */}
              <div className="py-4 border-y border-slate-100 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-display font-extrabold text-slate-950">$0</span>
                <span className="text-sm text-slate-500 font-medium">/ 1-week experience</span>
              </div>

              {/* Features check list */}
              <div className="space-y-3">
                {trialFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleFreeTrialClick}
              className="mt-8 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition shadow-lg shadow-teal-500/10 cursor-pointer"
            >
              Start Free Trial
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Custom Pricing Plan (Section Two) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl border border-slate-900 shadow-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Accent light circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl"></div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">Section Two</span>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mt-1">
                  Professional Plans
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mt-1.5">
                  Our professional solutions are custom-tailored to provide elastic capacity and specialty precharting.
                </p>
              </div>

              {/* Pricing banner starting from */}
              <div className="py-4 border-y border-slate-800/80">
                <span className="text-slate-400 text-[10px] block uppercase font-mono tracking-widest">Custom Quotation</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-xs text-slate-400">Starting from</span>
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-white">$1,500</span>
                  <span className="text-sm text-slate-400 font-medium">/ month</span>
                </div>
              </div>

              {/* Price Dependency Parameters */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest text-teal-400 font-bold">Pricing depends specifically on:</h4>
                <div className="space-y-3">
                  {planDrivers.map((driver, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs md:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-2"></div>
                      <div>
                        <span className="font-semibold text-slate-100 block">{driver.label}</span>
                        <span className="text-slate-400 text-xs leading-normal">{driver.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note on customized quotation */}
            <div className="pt-6 border-t border-slate-900 mt-8">
              <p className="text-[11px] text-slate-400 leading-relaxed italic mb-5">
                *Every practice receives a custom quotation tailored specifically to their provider count and administrative requirements during our workflow design step.
              </p>
              <button
                onClick={handleConsultationClick}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-xs transition cursor-pointer"
              >
                Book Complimentary Consultation
                <Calendar className="w-4 h-4 text-teal-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Security & HIPAA Trust badge */}
        <div className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/50">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-900 block">No Credit Cards or Billing Info Saved during Trials</span>
              <span>All workflows run inside secure environments with professional confidentiality.</span>
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
            Review Security & Privacy
          </button>
        </div>
      </div>
    </div>
  );
}
