/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Laptop, Lock, Mail, Users, FileLock, UserCheck, Shield, ChevronRight } from 'lucide-react';
import HIPAABadge from '../components/HIPAABadge';
import { PageRoute } from '../types';

interface SecurityProps {
  setCurrentPage: (page: PageRoute) => void;
}

export default function Security({ setCurrentPage }: SecurityProps) {
  const securitySections = [
    {
      title: "Technical Safeguards",
      desc: "Our engineering guidelines require robust technical barriers to prevent unauthorized data exposure.",
      items: [
        {
          label: "Full-Disk Encryption",
          desc: "BitLocker full-disk encryption is enabled on all workstation volumes, safeguarding hard drives against offline physical extractions."
        },
        {
          label: "Multi-Factor Authentication (2FA)",
          desc: "Strict multi-factor authentication triggers are mandatory for all user directory logins and EHR systems."
        },
        {
          label: "Enterprise Google Workspace",
          desc: "Corporate communications are channeled strictly through secure enterprise Google Workspace business domains with active spam, Trojan, and phishing defenses."
        },
        {
          label: "Zero Local Copying",
          desc: "Documentation assistants operate strictly inside your secure cloud EHR portal. Saving files locally, screenshotting, or exporting clinical records is strictly blocked by hardware profiles."
        }
      ]
    },
    {
      title: "Administrative Safeguards",
      desc: "Administrative procedures govern security management, training, and operational workflows.",
      items: [
        {
          label: "Workflows Designed Around HIPAA",
          desc: "While standard third-party 'HIPAA Certification' is a commercial myth (as no federal agency issues certification), all DrChart workflows are engineered using rigorous HIPAA-conscious safeguards."
        },
        {
          label: "Authorized Access Only",
          desc: "Clinic access is restricted purely to designated clinical documentation specialists assigned to your specific practice, supervised under our clinical coordinator."
        },
        {
          label: "Strict Non-Disclosure Protocols",
          desc: "Every single documentation assistant is subject to background verification, comprehensive medical privacy training, and binding NDA agreements."
        },
        {
          label: "Incident Response Drills",
          desc: "Standard protocols are maintained under supervision of our technical directors to identify, mitigate, and record any security event immediately."
        }
      ]
    },
    {
      title: "Physical Safeguards",
      desc: "Physical barriers guard our workstations and facilities against unauthorized access.",
      items: [
        {
          label: "Dedicated Computer Stations",
          desc: "Documentation assistants use enterprise-grade clinical workstations used exclusively for client documentation support without personal accounts."
        },
        {
          label: "Clean Desk Policy",
          desc: "Workspaces maintain strict clean desk rules: printing clinical records, paper charting, or cell phone presence in active work areas is prohibited."
        },
        {
          label: "Secure Facilities",
          desc: "Workspaces are housed in access-controlled facilities with video logging and active security details."
        },
        {
          label: "Hardware Token Keys",
          desc: "Physical authentication keys are utilized to authorize active workstations to limit cross-machine exposures."
        }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden h-44 md:h-60 border border-slate-200/80 shadow-md">
          <img
            src="/banner.jpg"
            alt="Security & Trust Center Banner"
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col justify-center px-6 md:px-16 text-white space-y-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 w-max">
              Security & Trust Center
            </span>
            <h1 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl tracking-tight leading-tight">
              HIPAA-Conscious Safeguards Guarding Patient Privacy
            </h1>
            <p className="text-slate-300 text-xs max-w-2xl hidden sm:block">
              At DrChart Healthcare, data privacy is not an afterthought. We build technical, physical, and administrative safeguards directly into our daily precharting workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HIPAA statement card badge */}
        <div className="mb-20 max-w-5xl mx-auto">
          <HIPAABadge />
        </div>

        {/* Safeguards expanded section list */}
        <div className="space-y-20 max-w-5xl mx-auto">
          {securitySections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-display font-extrabold text-slate-950 text-xl md:text-2xl">
                  {sec.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  {sec.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sec.items.map((item, iIdx) => (
                  <div key={iIdx} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4 hover:border-teal-500/10 transition">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0 mt-2"></div>
                    <div className="space-y-1">
                      <span className="font-display font-bold text-slate-950 text-sm md:text-base block">
                        {item.label}
                      </span>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking callout */}
        <div className="mt-24 max-w-4xl mx-auto bg-slate-950 text-white rounded-3xl p-8 md:p-12 text-center border border-slate-900 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="space-y-6 relative z-10">
            <h3 className="font-display text-xl md:text-3xl font-bold">Have Specific IT or Security Questions?</h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              We frequently work with practice security officers, administrators, and EHR IT managers. Schedule a 30-minute direct call with our security compliance team to review our security workflows.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/dr-sriram-drcharthealthcare/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold py-3 px-6 rounded-xl transition shadow-md shadow-teal-500/10 cursor-pointer"
              >
                Schedule Security Review Call
              </a>
              <button
                onClick={() => {
                  window.location.hash = '#/contact';
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 py-3 px-6 rounded-xl text-xs font-semibold transition"
              >
                Request Security PDF Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
