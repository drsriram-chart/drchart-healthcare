/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap, Heart, Calendar, Clock, Smile, Stethoscope, ChevronRight, MessageSquare } from 'lucide-react';
import EhrSimulator from '../components/EhrSimulator';
import { PageRoute } from '../types';

interface HomeProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const stats = [
    { value: "3 Hours", label: "Physician Time Saved Daily", desc: "Completely eliminating after-hours charting" },
    { value: "-90%", label: "Fewer Keyboard Clicks", desc: "No more repetitive mouse/keyboard input" },
    { value: "<2 Min", label: "Note Approval Time", desc: "Simply review, approve, and sign note" },
    { value: "100%", label: "US Cloud EHR Compatible", desc: "Epic, Athena, eCW, Cerner, and more" }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Eliminate 'Pajama-Time' Charting",
      desc: "Stop taking clinical charts home. Finish your charting *during* the clinic day, allowing you to go home on time."
    },
    {
      icon: Smile,
      title: "Focus Directly on Patients",
      desc: "Restore high-quality, face-to-face physician eye contact. Let your patient feel heard while we handle the EHR data entry."
    },
    {
      icon: Zap,
      title: "Prevent Physician Burnout",
      desc: "Drastic administrative burden reduction increases clinical satisfaction, retention, and reduces mental fatigue."
    },
    {
      icon: Shield,
      title: "Enhance Billing Accuracy",
      desc: "Thorough documentation drafted in exact detail leads to better quality metrics, optimized billing codes, and simpler audits."
    }
  ];

  const whoWeHelp = [
    "Internal Medicine", "Family Medicine", "Primary Care",
    "Cardiology", "Pulmonology", "Nephrology",
    "Neurology", "Endocrinology", "Psychiatry",
    "Pediatrics", "Multi-specialty Clinics", "Private Practices"
  ];



  const handleNavClick = (id: PageRoute) => {
    window.location.hash = `#/${id}`;
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left text block */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold select-none">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Medical Precharting & Workflow Support
              </div>

              <h1 className="font-display font-black text-slate-950 text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] md:leading-[1.05]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600 block mb-2 font-black tracking-tighter">
                  Dr. Chart Healthcare
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl text-slate-700 block font-medium tracking-tight mt-4 leading-normal">
                  Reduce Documentation Burden. <br className="hidden sm:inline" />
                  Focus More on Patient Care.
                </span>
              </h1>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                DrChart Healthcare provides US physicians with dedicated precharting, EHR clinical documentation, and virtual administrative support. Reclaim 2-3 hours of your day and eliminate pajama-time charting forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/dr-sriram-drcharthealthcare/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold py-4 px-6 rounded-2xl text-sm transition-all duration-300 shadow-lg shadow-teal-500/15 hover:shadow-teal-500/25 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Calendar className="w-4.5 h-4.5" />
                  Schedule 30-Min Consultation
                </a>
                <button
                  onClick={() => handleNavClick('pricing')}
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-2xl text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer border border-slate-800"
                >
                  <span>Start 1-Week Free Trial</span>
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span>HIPAA-Conscious Safeguards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span>1-Week Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-teal-600" />
                  <span>Designed by Clinicians</span>
                </div>
              </div>
            </div>

            {/* Right illustration / EHR race container */}
            <div className="lg:col-span-6 w-full max-w-2xl mx-auto">
              <div className="p-1 rounded-3xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-slate-100 shadow-xl">
                <div className="bg-slate-950 rounded-2xl overflow-hidden p-1">
                  <div className="bg-slate-900/50 p-3 flex justify-between items-center text-[10px] font-mono text-slate-400 border-b border-slate-800">
                    <span>EHR_WORKFLOW_STUDY.EXE</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Interactive Demo
                    </span>
                  </div>
                  <EhrSimulator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Banner Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[3/1] border border-slate-200/80 shadow-lg">
          <img
            src="/banner.jpg"
            alt="DrChart Healthcare Clinical Analytics Banner"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Elegant overlay to make text highly legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-xl space-y-4 text-white">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                Next-Gen Clinical Workspace
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl leading-tight">
                Empowering Clinicians with Precision Workflows
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed hidden sm:block">
                Our custom precharting pipelines are meticulously engineered to optimize EHR data entry, enhance coding specificity, and restore valuable face-to-face patient time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl text-white p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((item, index) => (
              <div key={index} className={`pt-6 sm:pt-0 ${index > 0 ? 'sm:pl-8' : ''}`}>
                <span className="font-display font-extrabold text-4xl md:text-5xl tracking-tight block text-white">
                  {item.value}
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider block text-teal-100 mt-2">
                  {item.label}
                </span>
                <span className="font-sans text-xs text-teal-50/80 mt-1 block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Core Benefits
          </span>
          <h2 className="font-display font-bold text-slate-950 text-3xl md:text-4xl tracking-tight leading-tight">
            Designed to Restore Physician Focus
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            By shifting electronic records burdens away from providers, practices experience elevated morale, smoother administrative workflows, and a healthier bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-teal-50 border border-teal-100/50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-slate-950 text-base md:text-lg mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clinician Joy & Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[4/3]">
                <img
                  src="/happy_clinical_team.jpg"
                  alt="Happy clinical team of healthcare professionals working with Dr. Chart Solutions"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating stat chip for high clinical fidelity */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-800">Direct Physician Well-being</span>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-md">98% Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100/80">
                Documentation Freedom
              </span>
              <h2 className="font-display font-black text-slate-950 text-3xl md:text-4xl tracking-tight leading-tight">
                Restoring the Joy of Patient-Centered Medicine
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Our support team is not just a typing service. We train all our healthcare specialists extensively in clinical documentation guidelines, specific EHR templates, and medical vocabulary. 
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                By taking over the administrative burden, we empower you to walk into every patient encounter with your full attention focused on the person in front of you—not the monitor.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 py-2 px-3.5 rounded-xl">
                  <Smile className="w-4 h-4 text-teal-600" />
                  <span>Happier Clinicians</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 py-2 px-3.5 rounded-xl">
                  <Heart className="w-4 h-4 text-teal-600" />
                  <span>Better Patient Interactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Supported */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
                Specialty Expertise
              </span>
              <h2 className="font-display font-bold text-slate-950 text-3xl md:text-4xl tracking-tight leading-tight">
                Tailored Across Multiple Specialties
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Whether you run a private primary care practice, a specialized cardiology clinic, or a sprawling multi-specialty clinical group, we assign dedicated support staff trained in your exact specialty terminology and workflow guidelines.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('services')}
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 text-sm font-semibold transition"
                >
                  Learn about custom charting solutions
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Specialties grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {whoWeHelp.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-4.5 rounded-2xl border border-slate-200/50 hover:border-teal-500/20 text-center flex flex-col items-center justify-center gap-3 group transition shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 text-slate-500 group-hover:text-teal-600 flex items-center justify-center transition">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-semibold text-slate-800 text-xs md:text-sm group-hover:text-slate-950 transition">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-slate-950 rounded-3xl text-white p-8 md:p-16 border border-slate-900 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              Ready to Save 3 Hours Every Single Day?
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Start your complimentary one-week trial today. Experience how we process charts inside your electronic records system, without any credit cards, commitments, or setup charges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="https://calendly.com/dr-sriram-drcharthealthcare/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3.5 px-6 rounded-xl text-xs transition shadow-md shadow-teal-500/10 cursor-pointer"
              >
                Book Complimentary Consultation
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl text-xs transition cursor-pointer"
              >
                Activate Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
