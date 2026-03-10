export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headlineMetric: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  serviceTags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'meridian-dental',
    client: 'Meridian Dental Group',
    industry: 'Dental',
    headlineMetric: '147% Revenue Growth',
    title: '147% Revenue Growth in 6 Months',
    summary: 'Full-service growth partnership transforming a Calgary dental group from stagnant to scaling.',
    challenge: 'Meridian Dental had hit a revenue plateau at $1.8M. Marketing was inconsistent, operations were chaotic, and they were losing patients to more visible competitors.',
    solution: 'We implemented a comprehensive strategy: SEO and Google Ads for patient acquisition, social media for brand building, operational streamlining, and AI voice agents for after-hours calls.',
    result: '147% revenue growth in 6 months, 340% increase in social engagement, and 38% more leads captured through AI automation.',
    serviceTags: ['SEO', 'Google Ads & Paid Media', 'Social Media Marketing', 'AI Automation & Voice Agents', 'Operations Optimization'],
  },
  {
    id: 'peakview-properties',
    client: 'PeakView Properties',
    industry: 'Professional Services',
    headlineMetric: '3.2x Lead Volume',
    title: '3.2x Lead Volume with Multi-Channel Strategy',
    summary: 'Scaling a Calgary property management company through integrated marketing and automation.',
    challenge: 'PeakView was relying solely on referrals for new clients. Growth was slow and unpredictable, and they were missing after-hours inquiries.',
    solution: 'We built a high-converting website, launched targeted Google Ads, deployed AI voice agents for 24/7 call handling, and created a content strategy for SEO.',
    result: '3.2x increase in qualified leads, 24/7 lead capture, and a 4.2x return on marketing investment within the first quarter.',
    serviceTags: ['Web Development', 'Google Ads & Paid Media', 'AI Automation & Voice Agents', 'SEO'],
  },
  {
    id: 'alpine-tech',
    client: 'Alpine Tech Solutions',
    industry: 'Professional Services',
    headlineMetric: '58% Productivity Boost',
    title: '58% Productivity Boost Through Operations Overhaul',
    summary: 'Transforming a chaotic tech company into a well-oiled machine through process optimization.',
    challenge: 'Alpine Tech had grown to 40 employees but their operations hadn\'t scaled. Twelve different tools, no documented processes, and constant team burnout.',
    solution: 'Comprehensive operations audit, process documentation, tech stack consolidation (12 tools to 5), and implementation of clear communication cadences.',
    result: '58% productivity increase, 35% reduction in operational costs, and significant improvement in employee satisfaction.',
    serviceTags: ['Operations Optimization', 'Business Growth Consulting', 'AI Automation & Voice Agents'],
  },
  {
    id: 'rustic-table',
    client: 'The Rustic Table',
    industry: 'Restaurant',
    headlineMetric: '280% More Reservations',
    title: '280% More Reservations from Social Media',
    summary: 'Building a restaurant brand through professional content and social media management.',
    challenge: 'The Rustic Table had amazing food but minimal online presence. Phone-quality photos and sporadic posting yielded zero social media impact.',
    solution: 'Professional food photography and video production, consistent social media management across Instagram and TikTok, and targeted local campaigns.',
    result: '280% increase in social media-driven reservations, 185% engagement boost, and became a top-10 trending restaurant in Calgary on Instagram.',
    serviceTags: ['Photo & Video Production', 'Social Media Marketing', 'Google Ads & Paid Media'],
  },
  {
    id: 'summit-retail',
    client: 'Summit Retail Co.',
    industry: 'Retail',
    headlineMetric: '195% Conversion Lift',
    title: '195% Website Conversion Lift After Redesign',
    summary: 'Transforming an outdated e-commerce experience into a conversion machine.',
    challenge: 'Summit\'s website was slow, outdated, and had a 0.4% conversion rate. They were losing online sales to competitors with better digital experiences.',
    solution: 'Complete website redesign with conversion-first architecture, performance optimization, SEO foundation, and ongoing paid media campaigns.',
    result: '195% conversion rate increase, sub-2-second load times, and 280% more form submissions within the first month.',
    serviceTags: ['Web Development', 'SEO', 'Google Ads & Paid Media'],
  },
  {
    id: 'brightco-staffing',
    client: 'BrightCo Services',
    industry: 'Professional Services',
    headlineMetric: '8 Hires in 45 Days',
    title: '8 Key Hires in 45 Days for a Scaling Startup',
    summary: 'Rapid talent acquisition for a Calgary tech startup entering its growth phase.',
    challenge: 'BrightCo needed to hire 8 critical positions in 60 days to meet growth targets. Traditional job postings weren\'t attracting quality candidates.',
    solution: 'Activated our talent network, ran targeted outreach campaigns on LinkedIn, and implemented a 4-stage screening process tailored to their culture.',
    result: 'All 8 positions filled in 45 days, 94% retention at 12 months, and $340K saved compared to estimated cost of bad hires.',
    serviceTags: ['Recruiting & Staffing', 'Operations Optimization'],
  },
];

export const industries = ['All', 'Dental', 'Restaurant', 'Retail', 'Professional Services'];
export const serviceFilters = [
  'All',
  'Social Media Marketing',
  'Photo & Video Production',
  'SEO',
  'Google Ads & Paid Media',
  'AI Automation & Voice Agents',
  'Business Growth Consulting',
  'Operations Optimization',
  'Recruiting & Staffing',
  'Web Development',
];
