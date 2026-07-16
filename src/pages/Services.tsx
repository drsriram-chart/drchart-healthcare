/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Check, ShieldCheck, Heart, Stethoscope, ChevronRight, Layout, Sparkles, Database, FileSpreadsheet, Settings2, HelpCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface ServicesProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const services = [
    {
      title: "Precharting Solutions",
      desc: "Our specialists review your upcoming medical schedule, map patient chart histories, synthesize external lab results, and prepare complete chart outlines inside your EHR prior to patient check-in.",
      benefits: [
        "Saves 2-3 hours of administrative desk-work daily",
        "Reduces active in-exam keyboard and click counts by 90%",
        "Identifies outstanding screenings and quality metric measures proactively"
      ],
      who: "Primary Care, Internal Medicine, Pediatrics, Multi-specialty Clinics",
      icon: Layout
    },
    {
      title: "Clinical Documentation Support",
      desc: "High-fidelity draft creation of SOAP notes, HPIs, review of systems (ROS), physical exams, assessment and treatment plans customized to your unique clinical voice and template choices.",
      benefits: [
        "Fully personalized narrative formatting matches your specific tone",
        "Ensures consistent, thorough clinical records compliance",
        "Avoids cookie-cutter, robotic auto-generated text templates"
      ],
      who: "Physicians, Specialists, Private Practices, Clinic Networks",
      icon: Stethoscope
    },
    {
      title: "Medical Documentation Support",
      desc: "Comprehensive support mapping patient encounter timelines, recording clinical instructions, synthesizing specialty-specific diagnostic logs, and keeping active lists current.",
      benefits: [
        "Keeps problem and medication lists completely clean and up-to-date",
        "Reduces backlogs of unfinished clinical notes",
        "Ensures complete documentation compliance for medical billing audits"
      ],
      who: "Complex Sub-Specialties, Private Clinics, Practice Managers",
      icon: Sparkles
    },
    {
      title: "Transcription to EHR Charting",
      desc: "Secure conversion of audio dictations, structured verbal notes, or custom audio attachments directly into finished clinical charts inside the specific fields of your electronic records.",
      benefits: [
        "Rapid turnaround matching your practice schedule",
        "Direct EHR field mapping (no copy-pasting required)",
        "Accurate terminology indexing across complex clinical subjects"
      ],
      who: "Dictating Physicians, Surgical Specialists, On-call Providers",
      icon: Database
    },
    {
      title: "Clinical Workflow Assistance",
      desc: "Preparation and queueing of laboratory work orders, imaging requests, standard referral letters, and prescription renewals inside the EHR for swift physician review and sign-off.",
      benefits: [
        "Drastically shortens prescription refill and laboratory order loops",
        "Reduces physical EHR click workload for physicians",
        "Increases workflow throughput of clinical nursing teams"
      ],
      who: "Busy Medical Practices, Clinicians with high daily volume",
      icon: FileSpreadsheet
    },
    {
      title: "Administrative Support Services",
      desc: "Assisting practices with patient registration preparation, inbox and patient portal message triaging, clinic schedule planning, and miscellaneous clerical clinic tasks.",
      benefits: [
        "Minimizes manual clerical overhead for front-desk clinical staff",
        "Ensures rapid response rates on patient portal messages",
        "Keeps clinic schedules organized and avoids overlap conflicts"
      ],
      who: "Practice Managers, Clinic Directors, Multi-provider Clinics",
      icon: Settings2
    },
    {
      title: "Workflow Optimization",
      desc: "In-depth review and engineering of your clinic's existing EHR documentation templates, macros, and clinical workflows to locate and remove systematic efficiency bottlenecks.",
      benefits: [
        "Establishes highly optimized, custom clinical templates",
        "Reduces clicks-per-chart systematic overhead",
        "Aligns documentation practices with optimal clinical billing codes"
      ],
      who: "Medical Groups, Healthcare Administrators, Struggling Clinics",
      icon: Settings2
    },
    {
      title: "Custom Documentation Solutions",
      desc: "Fully bespoke clinical documentation design tailored specifically to unique specialty requirements, multi-state clinic rules, or custom digital health platform structures.",
      benefits: [
        "Built-to-suit workflow fits your unique EHR and practice format",
        "Scalable documentation teams matching your clinic growth patterns",
        "Consultative design from our Medical Director and Advisory Board"
      ],
      who: "Boutique Medical Practices, Telehealth Startups, Multi-state groups",
      icon: Sparkles
    },
    {
      title: "Additional Admin Support as Needed",
      desc: "On-demand support for specialty tasks, clinical coordination, tracking long-term referral loops, and custom healthcare administrative projects tailored to your practice's needs.",
      benefits: [
        "Highly elastic clerical capacity adapts to seasonal patient surges",
        "Eliminates the cost and overhead of recruiting in-house virtual assistants",
        "Dedicated, trained healthcare professionals manage your tasks"
      ],
      who: "Private Practices, Individual Doctors, Growing clinics",
      icon: HelpCircle
    }
  ];

  const handleCTA = () => {
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
            alt="Services Banner"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col justify-center px-6 md:px-16 text-white space-y-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 w-max">
              Professional Services
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight leading-tight">
              Comprehensive Clinical Documentation Solutions
            </h1>
            <p className="text-slate-300 text-xs max-w-2xl hidden sm:block">
              From meticulous medical precharting to workflow template optimization, our healthcare-trained specialists integrate seamlessly into your EHR to offload administrative fatigue.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition duration-300 flex flex-col justify-between"
                id={`service-card-${index}`}
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 bg-teal-50 border border-teal-100/50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <IconComp className="w-6 h-6 animate-pulse" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-slate-950 text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest text-teal-600 font-bold">Key Benefits:</h4>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer section inside card */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <div className="text-[11px] text-slate-500 mb-4 font-sans leading-relaxed">
                    <span className="font-semibold text-slate-800">Ideal For: </span>
                    {service.who}
                  </div>
                  <button
                    onClick={handleCTA}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
                  >
                    Select & Start Free Trial
                    <ChevronRight className="w-4 h-4 text-teal-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Trust callout */}
        <div className="mt-20 bg-slate-50 border border-slate-200/50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-teal-100/50 text-teal-600 rounded-2xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-950 text-base md:text-lg">
                Secure, HIPAA-Conscious Workflow Delivery
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-1 max-w-xl">
                Every service we execute is governed by our strict technical and administrative safeguards. We operate exclusively on encrypted workstations via secure connections inside your cloud environment.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              window.location.hash = '#/security';
              setCurrentPage('security');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="whitespace-nowrap bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-xl text-xs transition"
          >
            Review Security Protocols
          </button>
        </div>
      </div>
    </div>
  );
}
