export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  relatedServices?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'calgary-seo-guide-2026',
    title: 'The Calgary Business Owner\'s Guide to SEO in 2026',
    excerpt: 'Everything you need to know about ranking your Calgary business on Google — from local SEO fundamentals to advanced strategies that actually drive revenue.',
    category: 'Marketing',
    date: '2026-02-27',
    readTime: '8 min read',
    image: '/images/service-calgary-seo.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['seo'],
  },
  {
    slug: 'ai-voice-agents-small-business',
    title: 'Mia: How Calgary Businesses Are Capturing 40% More Leads with AI',
    excerpt: 'Discover how Mia, our custom AI voice agent, answers every call, qualifies leads automatically, and ensures you never miss another opportunity.',
    category: 'AI',
    date: '2026-02-20',
    readTime: '6 min read',
    image: '/images/service-calgary-ai-automation.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['ai-automation'],
  },
  {
    slug: 'operations-mistakes-calgary-businesses',
    title: '5 Operations Mistakes That Kill Growing Calgary Businesses',
    excerpt: 'Everything lives in someone\'s head, tool sprawl, and meetings as work. Here are the 5 operations mistakes we see most often.',
    category: 'Operations',
    date: '2026-02-13',
    readTime: '7 min read',
    image: '/images/service-calgary-operations-optimization.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['operations-optimization', 'business-growth-consulting'],
  },
  {
    slug: 'social-media-roi-calgary',
    title: 'How to Actually Measure Social Media ROI for Your Calgary Business',
    excerpt: 'Stop guessing whether social media is working. Here\'s the exact framework we use to connect social metrics to real revenue.',
    category: 'Marketing',
    date: '2026-02-06',
    readTime: '5 min read',
    image: '/images/service-calgary-social-media-marketing.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['social-media-marketing'],
  },
  {
    slug: 'fractional-coo-guide',
    title: 'Do You Need a Fractional COO? A Guide for Calgary Business Owners',
    excerpt: 'If your business has outgrown your ability to manage everything yourself, a fractional COO might be the strategic hire you didn\'t know you needed.',
    category: 'Growth',
    date: '2026-01-30',
    readTime: '9 min read',
    image: '/images/service-calgary-growth-consulting.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['business-growth-consulting', 'operations-optimization'],
  },
  {
    slug: 'google-ads-calgary-tips',
    title: '7 Google Ads Tips That Actually Work for Calgary Local Businesses',
    excerpt: 'Calgary\'s competitive PPC landscape requires smart strategies. These seven tips will help you lower costs, increase conversions, and beat local competitors.',
    category: 'Marketing',
    date: '2026-01-23',
    readTime: '6 min read',
    image: '/images/service-calgary-google-ads.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['google-ads'],
  },
  {
    slug: 'website-not-converting',
    title: 'Why Your Calgary Business Website Isn\'t Converting (And How to Fix It)',
    excerpt: 'If your website gets traffic but zero leads, these conversion optimization strategies will help you turn visitors into customers.',
    category: 'Growth',
    date: '2026-01-16',
    readTime: '7 min read',
    image: '/images/service-calgary-web-development.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['web-development', 'seo'],
  },
  {
    slug: 'calgary-hiring-2026',
    title: 'The State of Hiring in Calgary: What Business Owners Need to Know in 2026',
    excerpt: 'The Calgary talent market has shifted. Here\'s what you need to know about attracting and retaining top talent in today\'s competitive landscape.',
    category: 'Calgary Business',
    date: '2026-01-09',
    readTime: '8 min read',
    image: '/images/service-calgary-recruiting-staffing.png',
    author: 'Anastasiia Sukhostavets',
    relatedServices: ['recruiting-staffing'],
  },
];

export const blogCategories = ['All', 'Marketing', 'Growth', 'Operations', 'AI', 'Calgary Business'];
