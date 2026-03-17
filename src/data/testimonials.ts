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
    quote: "Before Zirka, we were throwing money at marketing with no real plan. They came in, looked at everything — our ads, our website, even how we handled phone calls — and built a system that actually works. Revenue is up 147% in six months and honestly, it doesn't feel like we're working harder. Just smarter.",
    name: 'M.T.',
    title: 'Owner',
    company: 'Calgary Dental Practice',
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
    quote: "Mia alone has captured over $180K in revenue from calls we used to miss. Zirka doesn't just consult — they build real systems that keep working long after the engagement ends.",
    name: 'Priya Sharma',
    title: 'Marketing Director',
    company: 'Alpine Tech Solutions',
    rating: 5,
  },
];
