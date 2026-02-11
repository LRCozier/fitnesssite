// TYPES
import type { Testimonials, Service, FooterLink,} from '../types';

// SITE CONFIGURATION
export const SITE_CONFIG = {
  name: 'L.A.C. Fitness',
  title: 'Luke Cozier - Strength & Conditioning | Kingston Upon Thames',
  description:
    'Professional strength and conditioning training focused on skill progression, confidence, and functional strength. Based in Kingston Upon Thames.',
  url: 'https://lacfitness.com',
  author: 'Luke Cozier',
  location: 'Kingston Upon Thames, London',
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
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' }
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
    title: '1-to-1 Personal Training',
    price: 'From £40 per session',
    description:
      'Private coaching built around your goals, current ability, and confidence under the bar.',
    features: [
      'Movement preparation and warm-up specific to your needs',
      'Technique-led lifting with clear, simple cues',
      'Progressive strength work tailored to your level',
      'Review, reflection, and clear next steps each session',
    ],
    ctaText: 'Book Consultation',
    duration: '60 minutes',
    intensity: 'Varies by individual',
    recommendedFor: [
      'Beginners who want to learn lifting safely',
      'Returners rebuilding strength and confidence',
      'Anyone wanting clear structure and 1-to-1 attention',
    ],
  },
  {
    id: '2',
    title: '2-to-1 Group Personal Training',
    price: 'From £50 per session',
    description:
      'Shared coaching for two people who want to train together while still receiving individual guidance.',
    features: [
      'Shared session with programming tailored to each person',
      'Technique coaching and feedback for both lifters',
      'Pacing and loading adjusted to each individual',
      'Supportive environment with built-in accountability',
    ],
    ctaText: 'Enquire About Availability',
    duration: '60 minutes',
    intensity: 'Medium–High (adjusted per person)',
    recommendedFor: [
      'Partners or friends who want to train together',
      'People who feel more comfortable starting with someone they know',
      'Anyone wanting a cost-effective way to access coaching',
    ],
  },
  {
    id: '3',
    title: 'Online Consultations & Tailored Programming',
    price: 'From £40 per hour',
    description:
      'Guidance and structure for people training independently, with programmes built around your time, equipment, and ability.',
    features: [
      'Initial video consultation to understand goals and context',
      'Training plan built around your schedule and equipment',
      'Option for video form checks and progression updates',
      'Ongoing guidance via agreed communication channels',
    ],
    ctaText: 'Apply for Tailored Programming',
    duration: 'Flexible',
    intensity: 'Custom to you',
    recommendedFor: [
      'Busy professionals training in commercial or home gyms',
      'Lifters who want structure and accountability without in-person sessions',
      'People comfortable training alone but wanting expert programming',
    ],
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
    'Kingston Upon Thames',
    'Richmond Upon Thames',
    'Twickenham',
    'Kew',
    'Mortlake',
    'Barnes',
    'East Sheen',
  ],
} as const;

export const CONTACT_INFO = {
  email: 'lacfitnessuk@gmail.com',
  consultationHours: [
    'Mon–Fri: 5 PM - 8 PM',
    'Saturday: 9 AM - 2 PM',
    'Sunday: 9 AM - 2 PM',
  ],
} as const;

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Frequently Asked Questions', path: '/faq' },
  { label: 'Terms and Conditions', path: '/terms' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LOCATIONS: string[] = [
  'Training clients at: My Fit Pod, Unit 5, the factory, 2 Acre Rd, Kingston upon Thames KT2 6EF',
  'Correspondence to: lacfitnessuk@gmail.com',
];

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/lacfitnessuk',
    icon: 'instagram',
  },
  {
    label: 'TikTok',
    url: 'https://tiktok.com/@lacfitnessuk',
    icon: 'tiktok',
  },
];
