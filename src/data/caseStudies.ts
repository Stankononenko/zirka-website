export interface CaseStudy {
  id: string; // Used as the slug
  client: string;
  industry: string;
  headlineMetric: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  quote: string;
  serviceTags: string[];
  image: string;
  relatedServices?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'dental-revenue-growth',
    client: 'Calgary Dental Group',
    industry: 'Dental',
    headlineMetric: '147% Revenue Growth',
    title: '147% Revenue Growth — Calgary Dental Group',
    summary: 'A multi-location Calgary dental group came to Zirka after hitting a revenue plateau for the third consecutive year.',
    challenge: 'A multi-location Calgary dental group came to Zirka after hitting a revenue plateau for the third consecutive year. Patient volume had stagnated, the practice\'s online visibility was minimal, and operational inefficiencies were eating into margins. The owner was handling marketing decisions personally despite having no marketing background, resulting in scattered spend and no cohesive strategy. Front desk staff were overwhelmed with phone calls, many of which were spam or low-quality inquiries, while actual patient leads went to voicemail and never called back.',
    solution: 'Zirka conducted a full business diagnostic and built an integrated growth plan across five workstreams: (1) Local SEO overhaul — optimized Google Business Profile, built location-specific landing pages, and launched a review generation system. (2) Google Ads restructure — paused all underperforming campaigns, rebuilt from scratch with tight geo-targeting and conversion-optimized landing pages. (3) Social media launch — built Instagram and Facebook presence with educational and community content. (4) Mia AI Voice Agent deployment — installed 24/7 AI receptionist to handle all inbound calls, qualify leads, and book appointments directly to the calendar. (5) Operations optimization — streamlined front desk workflows and built a patient follow-up system.',
    result: '- 147% revenue increase over 6 months\n- 340% increase in social media engagement\n- 38% more patient bookings attributed to AI automation\n- 4.2x return on Google Ads spend\n- Front desk time on phone calls reduced by 60%',
    quote: '"Before Zirka, we were throwing money at marketing with no real plan. They came in, looked at everything — our ads, our website, even how we handled phone calls — and built a system that actually works. Revenue is up 147% in six months and honestly, it doesn\'t feel like we\'re working harder. Just smarter." — M.T., Owner, Calgary Dental Practice',
    serviceTags: ['SEO', 'Google Ads', 'Social Media Marketing', 'AI Automation', 'Operations Optimization'],
    image: '/images/case-study-calgary-dental-clinic.png',
    relatedServices: ['seo', 'google-ads', 'social-media-marketing', 'ai-automation', 'operations-optimization'],
  },
  {
    id: 'property-management-lead-growth',
    client: 'Calgary Property Management',
    industry: 'Real Estate',
    headlineMetric: '3.2x Lead Volume',
    title: '3.2x Lead Volume — Calgary Property Management',
    summary: 'A Calgary property management company managing 200+ units was growing by referral only.',
    challenge: 'A Calgary property management company managing 200+ units was growing by referral only — their website hadn\'t been updated in 5 years, they had no paid acquisition, and their phone was their only lead capture mechanism. As competition in Calgary\'s property management market intensified, the owner knew they needed a systematic approach to growth but didn\'t know where to start.',
    solution: 'Zirka rebuilt their digital infrastructure from the ground up: (1) New conversion-optimized website — built on Next.js with separate landing pages for property owners and tenants. (2) Google Ads for property management — targeted campaigns reaching Calgary landlords actively searching for management services. (3) SEO foundation — local keyword strategy targeting "Calgary property management" and neighbourhood-specific terms. (4) Mia AI Voice Agent — deployed to handle after-hours inquiries, qualifying leads and scheduling consultations 24/7.',
    result: '- 3.2x increase in monthly lead volume\n- 68% of new leads now come from digital channels (vs. 0% previously)\n- 41% of booked consultations scheduled by AI outside business hours\n- Website conversion rate: 4.8% (industry average: 1.2%)',
    quote: '"We went from 100% referral-dependent to having a real marketing engine. The AI agent alone has booked consultations I would have completely missed — calls that came in at 10pm on a Sunday." — Property Management Owner, Calgary NW',
    serviceTags: ['Web Development', 'Google Ads', 'AI Automation', 'SEO'],
    image: '/images/case-study-calgary-property-management.png',
    relatedServices: ['web-development', 'google-ads', 'ai-automation', 'seo'],
  },
  {
    id: 'tech-company-operations',
    client: 'Calgary Tech Company',
    industry: 'Professional Services / Tech',
    headlineMetric: '58% Productivity Boost',
    title: '58% Productivity Boost — Calgary Tech Company',
    summary: 'A 40-person Calgary tech company was growing revenue but hemorrhaging operational efficiency.',
    challenge: 'A 40-person Calgary tech company was growing revenue but hemorrhaging operational efficiency. They had 12 different software tools that didn\'t talk to each other, no documented processes, weekly all-hands meetings that consumed 6+ hours per person, and a management team spending 70% of their time on coordination rather than strategy. Employee satisfaction was declining despite good compensation.',
    solution: 'Zirka ran a full operations audit over 3 weeks, then executed a 90-day transformation: (1) Tech stack consolidation — reduced 12 tools to 5, with full data migration and team training. (2) Process documentation — built SOPs for every core business function, accessible in a centralized knowledge base. (3) Meeting restructure — eliminated 60% of recurring meetings, replaced with async updates and a clear escalation framework. (4) KPI dashboard — custom real-time dashboard giving leadership visibility into every team\'s output. (5) AI automation — automated 3 hours of daily reporting and data entry per person.',
    result: '- 58% increase in measured team productivity\n- 35% reduction in operational costs\n- 4.5 hours saved per employee per week\n- Employee NPS score improved from 32 to 71\n- Management time on coordination reduced from 70% to 25%',
    quote: '"We knew things were inefficient but we didn\'t realize how bad it was until Zirka mapped everything out. The transformation was uncomfortable at first — changing how 40 people work always is — but three months in, the whole team says it\'s the best thing we\'ve ever done." — CEO, Calgary Tech Company',
    serviceTags: ['Operations Optimization', 'Business Growth Consulting', 'AI Automation'],
    image: '/images/case-study-calgary-tech-company.png',
    relatedServices: ['operations-optimization', 'business-growth-consulting', 'ai-automation'],
  },
  {
    id: 'restaurant-social-media-growth',
    client: 'Calgary Restaurant Group',
    industry: 'Restaurant',
    headlineMetric: '280% More Reservations',
    title: '280% More Reservations — Calgary Restaurant Group',
    summary: 'A Calgary restaurant group with two locations had no professional content, no social media presence, and relied entirely on walk-ins.',
    challenge: 'A Calgary restaurant group with two locations had no professional content, no social media presence, and relied entirely on walk-ins and word of mouth. As newer restaurants with strong Instagram presence entered the market, their foot traffic was declining. The owner knew the food and atmosphere were exceptional — the problem was no one could see it online.',
    solution: 'Zirka launched a complete content and social media engine: (1) Monthly photo/video production — professional food photography, atmosphere shots, and short-form video content for Instagram and TikTok. (2) Social media management — launched and managed Instagram and Facebook with a consistent posting cadence and active community management. (3) Google Ads — targeted campaigns for "restaurants Calgary" and cuisine-specific searches driving reservation intent. (4) Google Business optimization — updated profiles, managed reviews, and improved local search visibility.',
    result: '- 280% increase in online reservations within 90 days\n- Instagram grew from 0 to 4,200 followers in 6 months\n- 67% of new customers discovered the restaurant via Instagram or Google\n- 4.7-star Google rating maintained across both locations\n- Content engagement rate: 8.2% (industry average: 1.5%)',
    quote: '"People kept telling me they found us on Instagram and came specifically because of the videos. That never happened before. Now we have people making reservations before they\'ve even eaten here — they\'ve just seen the content." — Restaurant Owner, Calgary SW',
    serviceTags: ['Photo & Video Production', 'Social Media Marketing', 'Google Ads'],
    image: '/images/case-study-calgary-restaurant.png',
    relatedServices: ['photo-video-production', 'social-media-marketing', 'google-ads'],
  },
  {
    id: 'ecommerce-conversion-lift',
    client: 'Calgary E-commerce',
    industry: 'Retail',
    headlineMetric: '195% Conversion Lift',
    title: '195% Conversion Lift — Calgary E-commerce',
    summary: 'A Calgary-based e-commerce brand was driving reasonable traffic to their website but converting at 0.4%.',
    challenge: 'A Calgary-based e-commerce brand was driving reasonable traffic to their website but converting at 0.4% — well below the industry average of 2-3%. The site was slow (6+ second mobile load times), visually dated, and had a checkout process that was confusing on mobile. They were spending $8,000/month on Google Ads into a site that wasn\'t converting.',
    solution: 'Zirka paused ad spend for 30 days and focused entirely on fixing the conversion foundation first: (1) Full website rebuild — new design built mobile-first, with sub-2-second load times, clear product hierarchy, and optimized checkout flow. (2) Conversion rate optimization — rewrote all product descriptions, added social proof, simplified navigation, and A/B tested CTAs. (3) SEO foundation — technical SEO overhaul, schema markup, and content optimization. (4) Ads relaunch — rebuilt Google Shopping and Search campaigns pointed at the new high-converting site.',
    result: '- Conversion rate improved from 0.4% to 1.18% (195% increase)\n- Mobile load time improved from 6.2s to 1.7s\n- 280% increase in form/checkout completions\n- Google Ads ROAS improved from 1.8x to 4.4x after relaunch\n- Organic search traffic increased 89% within 4 months',
    quote: '"We were burning money on ads and blaming the ads. Turns out the problem was the website. Zirka fixed the foundation first, then turned the ads back on — the difference was night and day." — E-commerce Brand Owner, Calgary',
    serviceTags: ['Web Development', 'SEO', 'Google Ads'],
    image: '/images/case-study-calgary-ecommerce.png',
    relatedServices: ['web-development', 'seo', 'google-ads'],
  },
  {
    id: 'tech-startup-recruiting',
    client: 'Calgary Tech Startup',
    industry: 'Tech / Professional Services',
    headlineMetric: '8 Hires in 45 Days',
    title: '8 Hires in 45 Days — Calgary Tech Startup',
    summary: 'A Calgary tech startup had just closed a seed round and needed to scale from 6 to 14 employees in 60 days.',
    challenge: 'A Calgary tech startup had just closed a seed round and needed to scale from 6 to 14 employees in 60 days. They had no HR function, no recruiting process, and the founders were spending 30+ hours per week on hiring — interviewing unqualified candidates sourced from job boards and burning out their team with the distraction. Two key hires had already fallen through after accepting offers.',
    solution: 'Zirka stood up a complete talent acquisition function in 2 weeks: (1) Role definition — worked with founders to define clear job specs, culture fit criteria, and 90-day success metrics for each role. (2) Sourcing strategy — built a multi-channel sourcing pipeline (LinkedIn, referrals, targeted outreach) for each position. (3) Screening system — implemented a structured screening and assessment process that reduced unqualified interviews by 80%. (4) Offer process — created competitive offer packages and a candidate experience process that eliminated drop-off. (5) Onboarding framework — built a 30-60-90 day onboarding plan to set new hires up for success.',
    result: '- 8 qualified hires completed in 45 days (2 roles still in progress at 45-day mark, hired by day 60)\n- Founder time on hiring reduced from 30hrs/week to 4hrs/week\n- 0 offer rejections after the screening process was implemented\n- 87% of new hires still with the company 12 months later\n- Saved estimated $40,000 in recruiter fees vs. traditional agency model',
    quote: '"We were drowning in bad candidates and wasting everyone\'s time. Zirka built a real process in two weeks and then executed it. We got 8 great people without destroying our culture or burning out the team." — Co-Founder, Calgary Tech Startup',
    serviceTags: ['Recruiting & Staffing', 'Operations Optimization'],
    image: '/images/case-study-calgary-recruiting.png',
    relatedServices: ['recruiting-staffing', 'operations-optimization'],
  },
];

export const industries = ['All', 'Dental', 'Restaurant', 'Retail', 'Real Estate', 'Tech / Professional Services', 'Professional Services'];
export const serviceFilters = [
  'All',
  'Social Media Marketing',
  'Photo & Video Production',
  'SEO',
  'Google Ads',
  'AI Automation',
  'Business Growth Consulting',
  'Operations Optimization',
  'Recruiting & Staffing',
  'Web Development',
];
