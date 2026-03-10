export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'calgary-seo-guide-2026',
    title: 'The Calgary Business Owner\'s Guide to SEO in 2026',
    excerpt: 'Everything you need to know about ranking your Calgary business on Google — from local SEO fundamentals to advanced strategies that actually drive revenue.',
    category: 'Marketing',
    date: '2026-02-28',
    readTime: '8 min read',
  },
  {
    slug: 'ai-voice-agents-small-business',
    title: 'AI Voice Agents: How Small Businesses Are Capturing 40% More Leads',
    excerpt: 'Discover how Calgary businesses are using AI voice agents to answer every call, qualify leads automatically, and never miss another opportunity.',
    category: 'AI',
    date: '2026-02-21',
    readTime: '6 min read',
  },
  {
    slug: 'operations-scaling-mistakes',
    title: '5 Operations Mistakes That Kill Growing Calgary Businesses',
    excerpt: 'Growth without systems is just chaos with more revenue. Here are the five operational mistakes we see most often and how to fix them before they cost you.',
    category: 'Operations',
    date: '2026-02-14',
    readTime: '7 min read',
  },
  {
    slug: 'social-media-roi-calgary',
    title: 'How to Actually Measure Social Media ROI for Your Calgary Business',
    excerpt: 'Stop guessing whether social media is working. Here\'s the exact framework we use to connect social metrics to real revenue.',
    category: 'Marketing',
    date: '2026-02-07',
    readTime: '5 min read',
  },
  {
    slug: 'fractional-coo-guide',
    title: 'Do You Need a Fractional COO? A Guide for Calgary Business Owners',
    excerpt: 'If your business has outgrown your ability to manage everything yourself, a fractional COO might be the strategic hire you didn\'t know you needed.',
    category: 'Growth',
    date: '2026-01-31',
    readTime: '9 min read',
  },
  {
    slug: 'google-ads-calgary-tips',
    title: '7 Google Ads Tips That Actually Work for Calgary Local Businesses',
    excerpt: 'Calgary\'s competitive PPC landscape requires smart strategies. These seven tips will help you lower costs, increase conversions, and beat local competitors.',
    category: 'Marketing',
    date: '2026-01-24',
    readTime: '6 min read',
  },
  {
    slug: 'website-conversion-optimization',
    title: 'Why Your Calgary Business Website Isn\'t Converting (And How to Fix It)',
    excerpt: 'If your website gets traffic but zero leads, these conversion optimization strategies will help you turn visitors into customers.',
    category: 'Growth',
    date: '2026-01-17',
    readTime: '7 min read',
  },
  {
    slug: 'hiring-calgary-talent-2026',
    title: 'The State of Hiring in Calgary: What Business Owners Need to Know in 2026',
    excerpt: 'The Calgary talent market has shifted. Here\'s what you need to know about attracting and retaining top talent in today\'s competitive landscape.',
    category: 'Calgary Business',
    date: '2026-01-10',
    readTime: '8 min read',
  },
];

export const blogCategories = ['All', 'Marketing', 'Growth', 'Operations', 'AI', 'Calgary Business'];
