export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Zirka transformed our entire marketing approach. We went from scattered efforts to a cohesive strategy that actually drives leads. Our revenue is up 147% in six months and the team feels like an extension of our own.",
    name: 'Sarah Chen',
    title: 'CEO',
    company: 'Meridian Dental Group',
    rating: 5,
  },
  {
    id: 2,
    quote: "We hired Zirka to fix our operations and ended up getting so much more. They streamlined our workflows, automated our reporting, and even helped us hire two key team members. Best investment we\'ve made.",
    name: 'Marcus Thompson',
    title: 'Founder',
    company: 'PeakView Properties',
    rating: 5,
  },
  {
    id: 3,
    quote: "The AI voice agent alone has captured over $180K in revenue from calls we used to miss. Zirka doesn\'t just consult — they build real systems that keep working long after the engagement ends.",
    name: 'Priya Sharma',
    title: 'Marketing Director',
    company: 'Alpine Tech Solutions',
    rating: 5,
  },
];
