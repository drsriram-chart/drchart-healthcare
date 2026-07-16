/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute =
  | 'home'
  | 'services'
  | 'how-it-works'
  | 'pricing'
  | 'security'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  whoItHelps: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'security' | 'workflow' | 'pricing';
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  practice: string;
  specialty: string;
}

export interface PracticeSpecialty {
  name: string;
  code: string;
  iconName: string;
  description: string;
}
