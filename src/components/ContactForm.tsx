/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle2, User, Building, HeartPulse, HardDrive, Users2, DollarSign, Send, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    practiceName: '',
    email: '',
    phone: '',
    specialty: '',
    currentEhr: '',
    numProviders: '',
    monthlyBudget: '$1,000–$2,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const budgetOptions = [
    '$1,000–$2,000',
    '$2,000–$3,000',
    'More than $3,000'
  ];

  const specialtyOptions = [
    'Primary Care / Family Medicine',
    'Internal Medicine',
    'Cardiology',
    'Pulmonology',
    'Nephrology',
    'Neurology',
    'Endocrinology',
    'Psychiatry',
    'Pediatrics',
    'Other Outpatient Specialty'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Send data to FormSubmit via AJAX fetch
      const response = await fetch('https://formsubmit.co/ajax/info@drcharthealthcare.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Inquiry: ${formData.practiceName} (${formData.fullName})`,
          "Full Name": formData.fullName,
          "Practice Name": formData.practiceName,
          "Email": formData.email,
          "Phone": formData.phone,
          "Specialty": formData.specialty,
          "Current EHR": formData.currentEhr,
          "Providers": formData.numProviders,
          "Estimated Budget": formData.monthlyBudget,
          "Message/Workflow Notes": formData.message,
          _honey: '' // Anti-spam honey pot
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          fullName: '',
          practiceName: '',
          email: '',
          phone: '',
          specialty: '',
          currentEhr: '',
          numProviders: '',
          monthlyBudget: '$1,000–$2,000',
          message: ''
        });
      } else {
        throw new Error('Server returned error response. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Could not submit the form. Please schedule directly via Calendly or email us at info@drcharthealthcare.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-200/80 shadow-xl relative overflow-hidden" id="contact-form-card">
      {/* Visual background gradient */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-2xl"></div>

      {isSuccess ? (
        <div className="text-center py-12 px-4 flex flex-col items-center justify-center min-h-[500px]">
          <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display text-2xl font-bold text-slate-900 mb-3">
            Inquiry Successfully Submitted!
          </h4>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-8">
            Thank you for contacting DrChart Healthcare. Our onboarding coordinator will review your practice's requirements and reach out to you within 24 business hours.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-sm w-full">
            <p className="text-xs text-slate-500 mb-4 font-sans font-medium">Want to speed up your setup? Book a consultation directly on our calendar:</p>
            <a
              href="https://calendly.com/drcharthealthcare/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-4 rounded-xl text-xs transition shadow-md shadow-teal-500/10"
            >
              <Calendar className="w-4 h-4" />
              Book 30-Min Call
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h4 className="font-display text-lg md:text-xl font-bold text-slate-900">
              Request Your Free Onboarding Plan
            </h4>
            <p className="text-slate-500 text-xs mt-1.5">
              Fill out this medical questionnaire to receive a customized precharting proposal and trigger your complimentary one-week trial.
            </p>
          </div>

          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-4 rounded-xl flex items-start gap-2">
              <span className="font-bold">Error:</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700">
                Full Name <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Dr. Jane Smith, MD"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                />
              </div>
            </div>

            {/* Practice Name */}
            <div className="space-y-1.5">
              <label htmlFor="practiceName" className="block text-xs font-semibold text-slate-700">
                Practice / Clinic Name <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="practiceName"
                  name="practiceName"
                  required
                  value={formData.practiceName}
                  onChange={handleChange}
                  placeholder="Apex Family Medicine"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                Email Address <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="dr.smith@apexfamily.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                Phone Number <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 019-2834"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                />
              </div>
            </div>

            {/* Medical Specialty */}
            <div className="space-y-1.5">
              <label htmlFor="specialty" className="block text-xs font-semibold text-slate-700">
                Medical Specialty <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <HeartPulse className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  id="specialty"
                  name="specialty"
                  required
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none"
                >
                  <option value="" disabled>Select Specialty</option>
                  {specialtyOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Current EHR */}
            <div className="space-y-1.5">
              <label htmlFor="currentEhr" className="block text-xs font-semibold text-slate-700">
                Current EHR System <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <HardDrive className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="currentEhr"
                  name="currentEhr"
                  required
                  value={formData.currentEhr}
                  onChange={handleChange}
                  placeholder="Athena / eClinicalWorks / Epic..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                />
              </div>
            </div>

            {/* Number of Providers */}
            <div className="space-y-1.5">
              <label htmlFor="numProviders" className="block text-xs font-semibold text-slate-700">
                Number of Providers <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <Users2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  id="numProviders"
                  name="numProviders"
                  required
                  min="1"
                  value={formData.numProviders}
                  onChange={handleChange}
                  placeholder="e.g. 3"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                />
              </div>
            </div>

            {/* Estimated Monthly Budget */}
            <div className="space-y-1.5">
              <label htmlFor="monthlyBudget" className="block text-xs font-semibold text-slate-700">
                Estimated Monthly Budget <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  id="monthlyBudget"
                  name="monthlyBudget"
                  required
                  value={formData.monthlyBudget}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs text-slate-900 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none"
                >
                  {budgetOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
              Briefly Describe Your Current EHR Pain Points or Workflow
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Spent 3 hours on charting after clinic, interest in trial starting Monday..."
              className="w-full p-4 rounded-xl text-xs text-slate-900 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 disabled:bg-teal-700 text-white font-semibold py-3.5 px-6 rounded-xl text-xs transition duration-300 shadow-lg shadow-teal-500/10 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Submitting Questionnaire...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Inquiry & Activate Trial
                </>
              )}
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-3">
              We respect HIPAA privacy guidelines. Information submitted is kept confidential and is covered by our non-disclosure policy.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
