// TYPES
import type { Testimonials, Service } from '../types';

// SITE CONFIGURATION
export const SITE_CONFIG = {
  name: 'LAC Fitness',
  title: 'Luke Cozier - Strength & Conditioning | Richmond Upon Thames',
  description:
    'Professional strength and conditioning training focused on skill progression, confidence, and functional strength. Based in Richmond Upon Thames.',
  url: 'https://lacfitness.com',
  author: 'Luke Cozier',
  location: 'Richmond Upon Thames, London',
  email: 'lrcozier@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/lacfitnessuk',
    tiktok: 'https://www.tiktok.com/@lacozierfitness',
    linkedin: 'https://www.linkedin.com/in/luke-rudderham-cozier-30205343/',
  },
} as const;

// NAVIGATION LINKS
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const;

// FALLBACK TESTIMONIALS
export const fallbackTestimonials: Testimonials[] = [
  {
    id: '1',
    clientName: 'James P.',
    location: 'Richmond',
    testimonialText:
      "Luke's coaching rebuilt my confidence. I'm stronger at 35 than I was at 25.",
    rating: 5,
    category: 'Strength',
    featured: true,
    createdAt: new Date('2024-01-10').toISOString(),
  },
  {
    id: '2',
    clientName: 'Tom H.',
    location: 'Twickenham',
    testimonialText:
      'My rugby performance improved massively — and so did my belief in myself.',
    rating: 5,
    category: 'Conditioning',
    featured: true,
    createdAt: new Date('2024-01-05').toISOString(),
  },
  {
    id: '3',
    clientName: 'David R.',
    location: 'Kew',
    testimonialText:
      'Programming is smart, efficient, and tailored. I finally feel progress.',
    rating: 5,
    category: 'Programming',
    featured: true,
    createdAt: new Date('2024-01-02').toISOString(),
  },
  {
    id: '4',
    clientName: 'Michael S.',
    location: 'Richmond',
    testimonialText:
      'Consistency, accountability, and structure — exactly what I needed.',
    rating: 4,
    category: 'Consistency',
    featured: false,
    createdAt: new Date('2023-12-28').toISOString(),
  },
];

// FALLBACK SERVICES
export const fallbackServices: Service[] = [
  {
    id: '1',
    title: '1-on-1 Personal Training',
    price: 'Enquire for Pricing',
    description:
      'Personalised strength coaching, tailored to your goals and movement pattern.',
    features: [
      'Individualised programming',
      'Technique correction & video feedback',
      'Nutritional guidance',
      'Flexible scheduling',
    ],
    ctaText: 'Book Consultation',
    duration: '60 minutes',
    intensity: 'High',
    recommendedFor: ['Serious athletes', 'Technique focus', 'Personal progress'],
  },
  {
    id: '2',
    title: 'Partner (2-on-1) Training',
    price: 'Enquire for Pricing',
    description:
      'Train with a partner for shared motivation and cost-effective personal coaching.',
    features: ['Shared programme', 'Individual review', 'Supportive environment'],
    ctaText: 'Learn More',
    duration: '60 minutes',
    intensity: 'Medium-High',
    recommendedFor: ['Couples', 'Friends', 'Training partners'],
  },
  {
    id: '3',
    title: 'Online Coaching & Programming',
    price: 'From £200/month',
    description:
      'Remote coaching, weekly check-ins, video feedback, and long-term progression.',
    features: ['Custom app access', 'Video review', 'Messaging support'],
    ctaText: 'Apply Now',
    duration: 'Flexible',
    intensity: 'Custom',
    recommendedFor: ['Busy professionals', 'Remote training'],
  },
];

// BUSINESS INFO + CONTACT
export const BUSINESS_INFO = {
  specialties: [
    'Strength Training',
    'Conditioning',
    'Movement Skills',
    'Performance Enhancement',
  ],
  trainingApproach: [
    'Evidence-based methods',
    'Individualized programming',
    'Progressive overload',
    'Technical mastery',
    'Long-term sustainability',
  ],
  areasServed: [
    'Richmond Upon Thames',
    'Twickenham',
    'Kew',
    'Mortlake',
    'Barnes',
    'East Sheen',
  ],
} as const;

export const CONTACT_INFO = {
  email: 'lrcozier@gmail.com',
  consultationHours: [
    'Mon–Fri: 5 PM - 8 PM',
    'Saturday: 9 AM - 2 PM',
    'Sunday: 9 AM - 2 PM',
  ],
} as const;
