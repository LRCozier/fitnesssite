export interface Post {
  id: number,
  title: string,
  excerpt: string;
  category: string;
  content: string;
  slug: string;
  publishedAt: string;
}

export interface Testimonials {
  id: string;
  clientName: string;
  location: string;
  testimonialText: string;
  rating: number;
  category: string;
  featured: boolean;
  createdAt: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  duration?: string;
  intensity?: string;
  recommendedFor?: string[];
}

export interface BlogCardProps {
  post: Post;
}

export interface TestimonialCardProps{
  testimonial: Testimonials;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  services?: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'lg';

export interface BaseButtonProps {
  label?: string;
  to?: string; // router
  href?: string; // external URL
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string | string[] | Record<string, boolean>;
}

export interface BaseInputProps {
  modelValue: string;
  id: string;
  label: string;
  type?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
}

export interface BaseTextareaProps {
  modelValue: string;
  id: string;
  label: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  hint?: string;
}

export interface CheckboxOption {
  value: string;
  label: string;
  description?: string;
}

export interface BaseCheckboxGroupProps {
  modelValue: string[];
  name: string;
  legend: string;
  options: CheckboxOption[];
  required?: boolean;
  error?: string;
  hint?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}


