/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Layers, PenTool, Flame, ShieldAlert, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HowItWorksProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function HowItWorks({ setCurrentPage }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      title: "Book Complimentary Consultation",
      icon: Calendar,
      desc: "Schedule a quick 30-minute consultation directly on our calendar. During this initial discovery, we discuss your practice's physical structure, daily patient volume, administrative pain points, and current electronic records setup.",
      ctaText: "Book 30-Min Call",
      ctaLink: "https://calendly.com/drcharthealthcare/30min",
      isExternal: true
    },
    {
      num: "02",
      title: "Understand Current Workflow",
      icon: Layers,
      desc: "Our onboarding team shadows your clinical documentation style, reviewing your preferred note templates, medication charting methods, referral formats, and specific EHR navigation paths. We learn how you write notes so we can mimic your voice perfectly.",
      ctaText: "Review Our Services",
      ctaLink: "#/services",
      isExternal: false
    },
    {
      num: "03",
      title: "Design Customized Documentation Process",
      icon: PenTool,
      desc: "We engineer a customized precharting and clinical support workflow. This specifies the timeline of chart preparation, standard template triggers, custom medical jargon preferences, and order queueing guidelines optimized for your specialty.",
      ctaText: "Explore Security Safekeeping",
      ctaLink: "#/security",
      isExternal: false
    },
    {
      num: "04",
      title: "Begin Complimentary One-Week Precharting Trial",
      icon: Flame,
      desc: "Experience our documentation assistance in your active clinic without any financial risk. Your assigned precharting team begins preparing complete draft charts and clinical workflows for one full week. Zero credit cards, zero obligation, zero charges.",
      ctaText: "Activate Free Trial",
      ctaLink: "#/contact",
      isExternal: false
    },
    {
      num: "05",
      title: "Full Documentation Support",
      icon: CheckCircle2,
      desc: "Following a successful trial, we transition you into full clinical production support. Your dedicated documentation assistants work in tandem with your clinic schedules, preparing records daily so you can consistently leave on time.",
      ctaText: "Contact Sales Plan",
      ctaLink: "#/contact",
      isExternal: false
    }
  ];

  const handleNav = (link: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      const pageId = link.replace('#/', '');
      window.location.hash = link;
      setCurrentPage(pageId as PageRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden h-44 md:h-60 border border-slate-200/80 shadow-md">
          <img
            src="/banner.jpg"
            alt="Onboarding Banner"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col justify-center px-6 md:px-16 text-white space-y-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 w-max">
              Onboarding Timeline
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight leading-tight">
              Our Seamless 5-Step Clinical Integration Pipeline
            </h1>
            <p className="text-slate-300 text-xs max-w-2xl hidden sm:block">
              We make integrating precharting into your practice simple, secure, and stress-free. See how we guide you from our initial discovery call to complete documentation freedom.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chronological Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line through timeline (Desktop only) */}
          <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block"></div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start" id={`step-${idx + 1}`}>
                  {/* Timeline Node Badge */}
                  <div className="z-10 flex items-center justify-center shrink-0 w-20 h-20 bg-white rounded-2xl border-2 border-slate-200/80 shadow-md md:shadow-lg text-teal-600">
                    <IconComp className="w-8 h-8 text-teal-600" />
                  </div>

                  {/* Step Description Card */}
                  <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 hover:border-teal-500/20 hover:shadow-lg transition duration-300 relative">
                    {/* Step Count Badge */}
                    <span className="absolute top-6 right-8 font-display font-black text-slate-100 text-4xl md:text-5xl tracking-tight pointer-events-none select-none">
                      {step.num}
                    </span>

                    <span className="text-[10px] uppercase tracking-widest text-teal-600 font-bold block mb-1">
                      Step {idx + 1} of 5
                    </span>
                    <h3 className="font-display font-bold text-slate-950 text-lg md:text-xl mb-3 pr-10">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    {/* Timeline inner action button */}
                    <button
                      onClick={() => handleNav(step.ctaLink, step.isExternal)}
                      className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-xl text-xs transition cursor-pointer"
                    >
                      {step.ctaText}
                      <ChevronRight className="w-3.5 h-3.5 text-teal-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing trust block */}
        <div className="mt-24 max-w-3xl mx-auto bg-slate-950 text-white rounded-3xl p-8 md:p-12 text-center border border-slate-900 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="space-y-4 relative z-10">
            <h3 className="font-display text-xl md:text-2xl font-bold">No Credit Cards. No Commitment. No Traps.</h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              We believe in our clinical results. That is why we provide a 100% complimentary one-week precharting trial. Witness your clinical chart preparation in action before deciding to work with us.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  window.location.hash = '#/contact';
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold py-3 px-6 rounded-xl transition shadow-md shadow-teal-500/10 cursor-pointer"
              >
                Launch Complimentary One-Week Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
