/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, Clock, AlertCircle, FileText, ChevronRight } from 'lucide-react';

export default function EhrSimulator() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'drchart' | 'manual'>('drchart');
  const [progress, setProgress] = useState(0);

  // Simulated data for EHR
  const patientData = {
    name: "Robert M. Chen",
    dob: "08/14/1972 (Age 53)",
    mrn: "MRN-849204-A",
    insurance: "Blue Shield PPO",
    visitReason: "Follow-up Hypertension & Type 2 Diabetes"
  };

  const prechartData = [
    { field: "Chief Complaint", value: "Patient returns for 3-month follow-up of HTN and T2DM. Reporting mild fatigue." },
    { field: "Interval History", value: "Patient has been compliant with Lisinopril 20mg and Metformin 1000mg BID. No polyuria, polydipsia, or chest pain. Checked home logs: BP average 128/82, fasting blood glucose averages 115 mg/dL." },
    { field: "Active Medications", value: "1. Lisinopril 20mg daily\n2. Metformin 1000mg BID\n3. Atorvastatin 20mg daily" },
    { field: "Vitals (Synced)", value: "Temp: 98.6°F | BP: 126/80 mmHg | HR: 72 bpm | SpO2: 98% | BMI: 28.4" },
    { field: "Recent Labs (Imported)", value: "A1c (07/10/2026): 6.8% (Down from 7.2%)\nCreatinine: 0.95 mg/dL\neGFR: >90 mL/min/1.73m²" },
    { field: "Assessment & Plan", value: "1. Essential Hypertension: Well-controlled. Continue Lisinopril 20mg. Log BP 3x weekly.\n2. Type 2 Diabetes: Improved control. Continue Metformin 1000mg BID. Labs in 3 months." }
  ];

  const manualTypingSteps = [
    "Physician opens EHR at 6:45 PM...",
    "Searching lab portals for Robert Chen's A1c result...",
    "Found PDF from external lab. Manually transcribing A1c: 6.8%...",
    "Opening home blood pressure log attachment from patient portal...",
    "Calculating home BP average manually: 128/82...",
    "Drafting History of Present Illness from scratch...",
    "Entering current active medication list (double-checking pharmacy fills)...",
    "Writing assessment and planning goals...",
    "Formatting note and signing off at 7:02 PM. Total time: 17 minutes."
  ];

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0; // loop
          }
          return prev + 1;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentStepIndex = Math.floor((progress / 100) * manualTypingSteps.length);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800" id="ehr-simulator">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/50 px-3 py-1.5 rounded-full border border-teal-900/40">
            Interactive Workflow Demonstration
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-3">
            EHR Documentation Race
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            See how precharting eliminates 80% of click-and-type documentation burden.
          </p>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
          >
            {isPlaying ? (
              <>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                Pause Demo
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-teal-400" />
                Resume Demo
              </>
            )}
          </button>
          <button
            onClick={() => setProgress(0)}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 bg-slate-950 p-1.5 rounded-2xl mb-8 border border-slate-800/60">
        <button
          onClick={() => setActiveTab('drchart')}
          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-medium transition ${
            activeTab === 'drchart'
              ? 'bg-teal-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          DrChart Workflow (Precharted)
        </button>
        <button
          onClick={() => setActiveTab('manual')}
          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-medium transition ${
            activeTab === 'manual'
              ? 'bg-rose-600/90 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          Traditional Manual Workflow
        </button>
      </div>

      {/* Active screen content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Simulated EHR Interface */}
        <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner flex flex-col min-h-[440px]">
          {/* EHR Browser Topbar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs text-slate-400 font-mono ml-4 select-none bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                EHR-v10.4 // Charting Portal
              </span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded-md border border-slate-800 text-[10px] font-mono text-teal-400">
              <Clock className="w-3 h-3" />
              {activeTab === 'drchart' ? '08:45 AM (Pre-visit)' : '07:12 PM (After-hours)'}
            </div>
          </div>

          {/* Patient Banner */}
          <div className="bg-slate-900/40 p-4 border-b border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block">PATIENT:</span>
              <span className="text-white font-medium">{patientData.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block">DOB:</span>
              <span className="text-slate-300">{patientData.dob}</span>
            </div>
            <div>
              <span className="text-slate-500 block">MRN ID:</span>
              <span className="text-slate-300">{patientData.mrn}</span>
            </div>
            <div>
              <span className="text-slate-500 block">REASON:</span>
              <span className="text-teal-400 font-medium">{patientData.visitReason}</span>
            </div>
          </div>

          {/* Simulated Workspace */}
          <div className="p-5 flex-1 font-mono text-xs overflow-y-auto space-y-4 max-h-[320px]">
            {activeTab === 'drchart' ? (
              <>
                {/* Precharted View */}
                <div className="bg-teal-950/20 border border-teal-900/50 p-4 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-teal-900/40 pb-2">
                    <span className="text-teal-400 font-bold flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      PRE-VISIT CHART READY FOR REVIEW
                    </span>
                    <span className="bg-teal-500 text-slate-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase animate-pulse">
                      Completed
                    </span>
                  </div>

                  {prechartData.map((item, index) => {
                    const isVisible = progress > (index / prechartData.length) * 100;
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-500 space-y-1 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}
                      >
                        <span className="text-teal-400 block font-semibold">{item.field}:</span>
                        <p className="text-slate-200 whitespace-pre-line leading-relaxed pl-3 border-l-2 border-teal-800/40 bg-teal-950/5 p-2 rounded">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                {/* Manual Charting Steps View */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-rose-950 pb-2">
                    <span className="text-rose-400 font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      MANUAL CLINICAL DOCUMENTATION IN PROGRESS
                    </span>
                    <span className="bg-rose-500 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      Physician Working
                    </span>
                  </div>

                  <div className="space-y-2 bg-slate-900/20 p-3 rounded-xl border border-slate-800/50">
                    {manualTypingSteps.map((step, idx) => {
                      const isActive = idx === currentStepIndex;
                      const isPassed = idx < currentStepIndex;

                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-2.5 py-1 px-2 rounded transition-all duration-300 ${
                            isActive
                              ? 'bg-rose-950/30 text-rose-300 border-l-2 border-rose-500'
                              : isPassed
                              ? 'text-slate-500 line-through'
                              : 'text-slate-600'
                          }`}
                        >
                          <span className="mt-1">
                            {isPassed ? (
                              <span className="text-slate-600">✓</span>
                            ) : isActive ? (
                              <span className="text-rose-400 animate-pulse">●</span>
                            ) : (
                              <span className="text-slate-700">○</span>
                            )}
                          </span>
                          <span className="leading-normal">{step}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Manual Typing text area */}
                  <div className="border border-slate-800 bg-slate-950 p-3 rounded-lg min-h-[80px] text-slate-400 relative">
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-rose-950 text-rose-400 px-2 py-0.5 rounded text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                      Manual Keyboard input
                    </div>
                    <span className="text-slate-500 font-bold block mb-1">Active Field: Subjective History</span>
                    <p className="text-slate-200">
                      {currentStepIndex >= 0 && currentStepIndex < manualTypingSteps.length
                        ? `Physician is currently: "${manualTypingSteps[currentStepIndex].replace('...', '')}"`
                        : "Physician typing complete notes..."}
                      <span className="w-1.5 h-4 bg-teal-400 inline-block animate-pulse ml-1 align-middle"></span>
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Bottom EHR Actions */}
          <div className="bg-slate-900 p-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">
              {activeTab === 'drchart' ? 'Precharted by DrChart Assistant' : 'Physician fatigue level: High'}
            </span>
            <div className="flex gap-2">
              {activeTab === 'drchart' ? (
                <button className="bg-teal-600 hover:bg-teal-500 text-slate-950 px-4 py-2 rounded font-bold transition flex items-center gap-1">
                  Approve & Sign Note <ChevronRight className="w-3 h-3" />
                </button>
              ) : (
                <button className="bg-rose-900 text-rose-200 px-4 py-2 rounded font-semibold cursor-not-allowed">
                  Still Writing (12m left)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Metrics */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          {/* Key Metric Card */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-1/2">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-teal-400 font-bold">
                Time Spent Per Patient
              </h4>
              <p className="text-xs text-slate-500 mt-1">Documentation time spent inside the EHR</p>
            </div>
            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-display font-extrabold text-white">
                  {activeTab === 'drchart' ? '2.5' : '17'}
                </span>
                <span className="text-lg font-medium text-slate-400">minutes</span>
              </div>
              <div className="mt-4 bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    activeTab === 'drchart' ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-rose-600'
                  }`}
                  style={{ width: activeTab === 'drchart' ? '15%' : '100%' }}
                ></div>
              </div>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              {activeTab === 'drchart' ? (
                <span className="text-teal-400 font-bold">✓ Save 85% of EHR desk time</span>
              ) : (
                <span className="text-rose-400">▲ Causes pajama-time charting burnout</span>
              )}
            </div>
          </div>

          {/* Efficiency Breakdown */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-1/2">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-teal-400 font-bold">
                DrChart Advantage
              </h4>
              <p className="text-xs text-slate-500 mt-1">Impact on US Clinical Operations</p>
            </div>
            <div className="space-y-3.5 my-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">In-visit Keyboard Clicks</span>
                <span className={activeTab === 'drchart' ? 'text-teal-400 font-bold' : 'text-slate-200'}>
                  {activeTab === 'drchart' ? '-90% clicks' : 'Full Manual'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">After-hours Charting</span>
                <span className={activeTab === 'drchart' ? 'text-teal-400 font-bold' : 'text-slate-200'}>
                  {activeTab === 'drchart' ? 'Eliminated' : '2-3 hours daily'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">EHR System Compatibility</span>
                <span className="text-slate-200 font-medium">All US Cloud EHRs</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Free Trial Experience</span>
                <span className="text-teal-400 font-bold">1-Week Complimentary</span>
              </div>
            </div>
            <button
              onClick={() => {
                window.location.hash = '#/contact';
              }}
              className="w-full text-center bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-900 text-teal-400 py-2 rounded-xl text-xs font-semibold transition"
            >
              Experience This Flow Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
