import { hygraphClient } from '../lib/hygraph-client';
import {
  fallbackServices,
  fallbackTestimonials,
} from '../lib/constants';
import type {Testimonials, Service } from '../types';

const sanitizeQuery = (query: string): string => {
  return query.replace(/[^\w\s\n{}\[\]():.,@$]/g, '');
};

export const fetchGraphQL = async <T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> => {
  if (!hygraphClient) {
    throw new Error('GraphQL client not configured');
  }

  try {
    const sanitizedQuery = sanitizeQuery(query);
    return await hygraphClient.request<T>(sanitizedQuery, variables);
  } catch (error) {
    const message =
      import.meta.env.DEV && error instanceof Error
        ? `[GraphQL] ${error.message}`
        : 'Failed to fetch data from CMS';

    throw new Error(message);
  }
};

export const getFeaturedTestimonials = async (): Promise<Testimonials[]> => {
  try {
    const data = await fetchGraphQL<{ testimonials: Testimonials[] }>(`
      query GetFeaturedTestimonials {
        testimonials(
          where: { featured: true }
          orderBy: createdAt_DESC
          first: 3
        ) {
          id
          clientName
          location
          testimonialText
          rating
          category
          featured
          createdAt
        }
      }
    `);

    return data.testimonials;
  } catch (error) {
    console.warn(
      '[Hygraph] Using fallback featured testimonials due to CMS error:',
      error
    );

    return fallbackTestimonials.filter((t) => t.featured).slice(0, 3);
  }
};

export const getAllTestimonials = async (): Promise<Testimonials[]> => {
  try {
    const data = await fetchGraphQL<{ testimonials: Testimonials[] }>(`
      query GetAllTestimonials {
        testimonials(orderBy: createdAt_DESC) {
          id
          clientName
          location
          testimonialText
          rating
          category
          featured
          createdAt
        }
      }
    `);

    return data.testimonials;
  } catch (error) {
    console.warn(
      '[Hygraph] Using full fallback testimonial list due to CMS error:',
      error
    );

    return fallbackTestimonials;
  }
};

export const getServices = async (): Promise<Service[]> => {
  try {
    const data = await fetchGraphQL<{ services: Service[] }>(`
      query GetServices {
        services {
          id
          title
          price
          description
          features
          ctaText
          duration
          intensity
          recommendedFor
        }
      }
    `);

    return data.services;
  } catch (error) {
    console.warn('[Hygraph] Using fallback services due to CMS error:', error);
    return fallbackServices;
  }
};
