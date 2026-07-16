/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQSection({ limit }: { limit?: number }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'workflow' | 'security' | 'pricing'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: "What is precharting?",
      answer: "Precharting is the proactive preparation of patient clinical documentation before the patient encounter. DrChart's documentation specialists review upcoming schedules, patient charts, previous notes, referral letters, and lab results, pre-populating standard sections of the electronic health record (such as Chief Complaint, History of Present Illness (HPI) templates, active medication lists, and preventive screening requirements). When the physician steps into the exam room, up to 80% of the administrative note-taking is already completed, leaving them to review, finalize, and sign."
    },
    {
      category: 'workflow',
      question: "How does precharting reduce physician workload?",
      answer: "Precharting shifts the mechanical, time-consuming tasks of gathering and transcribing data from the physician to our highly trained support specialists. By offloading data retrieval, medication reconciliation drafts, and history drafting, physicians can reduce their documentation time by up to 2-3 hours per day. This completely eliminates 'pajama-time' (documenting late at night at home), reduces clinician burnout, and allows practices to either see more patients or spend higher-quality face-to-face time with existing ones."
    },
    {
      category: 'workflow',
      question: "Which specialties do you support?",
      answer: "We support a wide array of outpatient clinical specialties, including Internal Medicine, Family Medicine, Primary Care, Cardiology, Pulmonology, Nephrology, Neurology, Endocrinology, Psychiatry, Pediatrics, and Multi-specialty Clinics. Each specialty is assigned specialists trained in that specific clinical terminology and documentation preference, ensuring highly accurate drafts."
    },
    {
      category: 'workflow',
      question: "Which EHR systems do you work with?",
      answer: "DrChart operates natively across virtually all major cloud-based and server-hosted Electronic Health Record systems, including Athenahealth, eClinicalWorks, Epic, Cerner (Oracle Health), Elation, Practice Fusion, NextGen, and ModMed. Because our team works within your secure environment using dedicated systems, no complex custom API integrations or software modifications are necessary."
    },
    {
      category: 'workflow',
      question: "Do you offer transcription into EHR?",
      answer: "Yes, we offer EHR transcription and EHR charting assistance as part of our core medical documentation support. We can convert physician dictated notes, audio files, or structured templates directly into finished, properly formatted clinical narratives inside the specific fields of your EHR system."
    },
    {
      category: 'workflow',
      question: "Do you provide administrative support?",
      answer: "Yes, alongside medical documentation, we offer comprehensive clinical workflow and administrative support. This includes pre-visit planning, queueing up laboratory and referral orders for physician review, tracking outstanding diagnostic tests, managing clinical messages, and other virtual administrative assistance tailored to your clinic's workflows."
    },
    {
      category: 'general',
      question: "How quickly can services begin?",
      answer: "Our onboarding is streamlined and swift. Following a complimentary consultation to map your current workflows and specialties, we can assign and train your dedicated support team within 3 to 5 business days. Your complimentary one-week trial can commence immediately thereafter."
    },
    {
      category: 'security',
      question: "How secure is patient information?",
      answer: "Data privacy is our highest operational priority. Our workflows are designed strictly around HIPAA-conscious administrative and technical safeguards. All documentation is completed on dedicated, enterprise-grade professional computer stations used exclusively for client work. We utilize full-disk BitLocker encryption, strict strong password policies, multi-factor authentication (2FA), and secure Google Workspace Business email environments. Access is strictly restricted to authorized clinical support teams, with zero data stored locally or printed."
    },
    {
      category: 'pricing',
      question: "Do you provide a free trial?",
      answer: "Yes, we provide a completely complimentary One-Week Precharting Trial. There is no credit card required, zero obligation, and absolutely no hidden charges. This allows you to experience our real-world clinical documentation support and see the impact on your workflow before committing to any professional plan."
    },
    {
      category: 'general',
      question: "How do I book a consultation?",
      answer: "Booking a consultation is quick and easy. You can schedule a 30-minute complimentary call directly via our Calendly calendar at https://calendly.com/dr-sriram-drcharthealthcare/30min, or submit the modern inquiry form on our Contact page. One of our healthcare consultants or medical onboarding specialists will meet with you to review your goals and set up your free trial."
    }
  ];

  const filteredFaqs = faqs
    .filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .slice(0, limit || faqs.length);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General Info', icon: BookOpen },
    { id: 'workflow', label: 'Clinical Workflow', icon: Clock },
    { id: 'security', label: 'Security & HIPAA', icon: ShieldCheck }
  ];

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-full">
      {/* Category Tabs & Search Bar (Only shown if no limit is applied) */}
      {!limit && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-100">
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as any);
                    setExpandedIndex(0);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition ${
                    activeCategory === cat.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
            />
          </div>
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? 'border-teal-500/30 shadow-md shadow-teal-500/5'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-semibold text-slate-950 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-slate-600 shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-teal-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Answer drawer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5 text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="text-slate-500 text-sm">No questions found matching your search. Try another query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
