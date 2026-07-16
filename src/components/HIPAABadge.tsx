/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Laptop, KeyRound, Lock, Mail, Users, FileLock, UserCheck, Shield } from 'lucide-react';

export default function HIPAABadge() {
  const safeguards = [
    {
      icon: Laptop,
      title: "Dedicated Client Workstations",
      desc: "Workstations are reserved strictly for documentation assistance, containing zero third-party software or personal accounts."
    },
    {
      icon: FileLock,
      title: "BitLocker Full-Disk Encryption",
      desc: "All system hard drives utilize state-of-the-art cryptographic volume encryption to prevent physical theft exposure."
    },
    {
      icon: KeyRound,
      title: "Strong Password Protocols",
      desc: "Complex, non-reusable credentials managed via secure corporate vaults with scheduled updates."
    },
    {
      icon: Lock,
      title: "Two-Factor Authentication",
      desc: "Multi-factor verification required for all logins, systems, and patient databases without exception."
    },
    {
      icon: Mail,
      title: "Google Workspace Enterprise",
      desc: "Secure, business-grade electronic mail environments backed by rigorous spam and phishing guards."
    },
    {
      icon: Users,
      title: "Strict Access Controls",
      desc: "Only designated clinical assistants assigned specifically to your practice are permitted system access."
    },
    {
      icon: UserCheck,
      title: "Confidentiality Practices",
      desc: "All specialists undergo extensive medical privacy training and operate under binding, strict NDA agreements."
    },
    {
      icon: Shield,
      title: "Zero-Local-Data Policy",
      desc: "No patient documents are ever stored on individual hard disks, printed, or exported outside your EHR."
    }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8" id="hipaa-safeguards">
      {/* Title */}
      <div className="flex items-start gap-4 mb-8">
        <div className="p-3 bg-teal-50 border border-teal-100 rounded-xl text-teal-600 shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Administrative & Technical Safeguards</span>
          <h4 className="font-display text-lg md:text-xl font-bold text-slate-900 mt-1">
            HIPAA-Conscious Workflow Protocols
          </h4>
          <p className="text-slate-500 text-xs md:text-sm mt-1.5 max-w-2xl">
            <span className="font-semibold text-slate-800">Important Note:</span> We do not claim standard third-party 'HIPAA Certification' as no official federal certification exists for individuals or support agencies. Instead, <span className="font-semibold text-teal-700">our complete workflows are rigorously designed from the ground up using HIPAA-conscious administrative and technical safeguards</span>.
          </p>
        </div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safeguards.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/50 hover:border-teal-500/20 hover:shadow-lg hover:shadow-teal-500/5 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5 text-teal-600" />
                </div>
                <h5 className="font-semibold text-slate-900 text-sm mb-2">{item.title}</h5>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secure statement bar */}
      <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Compliant with NIST security standards</span>
        </div>
        <div>
          <span>Security Officer: Chief Compliance Officer</span>
        </div>
      </div>
    </div>
  );
}
