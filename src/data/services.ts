export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTagline: string;
  icon: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  deliverables: { name: string; description: string }[];
  metrics: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  caseStudy: {
    headline: string;
    challenge: string;
    solution: string;
    result: string;
  };
  cluster: 'marketing' | 'technology' | 'operations';
}

export const services: ServiceData[] = [
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    shortDescription: 'Build your brand presence and engage your audience across every platform.',
    metaTitle: 'Calgary Social Media Marketing | SMM Agency | Zirka Solutions',
    metaDescription: 'Expert social media marketing in Calgary. Build brand awareness, engage audiences, and drive leads across Instagram, LinkedIn, Facebook & more.',
    keywords: ['Calgary social media marketing', 'social media management Calgary', 'Instagram marketing Calgary'],
    heroTagline: 'Turn followers into customers with data-driven social strategies that actually move the needle for Calgary businesses.',
    icon: 'MessageCircle',
    challenges: [
      { title: 'Inconsistent Posting', description: 'Your social feeds go dark for weeks, then flood with random content that doesn\'t connect.' },
      { title: 'Zero Engagement', description: 'You\'re posting into the void — no comments, no shares, no real community building.' },
      { title: 'No Clear ROI', description: 'You can\'t connect social media effort to actual revenue or lead generation.' },
      { title: 'Platform Overwhelm', description: 'Instagram, LinkedIn, TikTok, Facebook — you can\'t keep up with every platform\'s demands.' },
    ],
    solutions: [
      { title: 'Strategic Content Calendar', description: 'We plan and schedule 30 days of content aligned with your business goals and audience interests.' },
      { title: 'Community Management', description: 'Active engagement, response management, and community building that turns followers into advocates.' },
      { title: 'Performance Analytics', description: 'Monthly reports connecting social metrics to leads, website traffic, and revenue impact.' },
      { title: 'Platform-Specific Strategy', description: 'Tailored content and tactics for each platform where your audience actually spends time.' },
    ],
    deliverables: [
      { name: 'Content Strategy & Calendar', description: 'Monthly content plan with themes, post types, and optimal timing.' },
      { name: 'Creative Content Production', description: 'Designed graphics, carousels, reels, and copy for all platforms.' },
      { name: 'Community Management', description: 'Daily engagement, comment responses, and DM management.' },
      { name: 'Monthly Analytics Reports', description: 'Detailed performance breakdowns with actionable insights.' },
      { name: 'Paid Social Campaigns', description: 'Targeted ad campaigns to amplify reach and drive conversions.' },
    ],
    metrics: [
      { value: '+340%', label: 'Average Engagement Increase' },
      { value: '2.8x', label: 'Lead Generation Improvement' },
      { value: '89%', label: 'Client Retention Rate' },
    ],
    faqs: [
      { question: 'Which social media platforms do you manage?', answer: 'We manage Instagram, LinkedIn, Facebook, TikTok, X (Twitter), and YouTube. We\'ll recommend the best platforms based on where your target audience is most active.' },
      { question: 'How quickly will I see results from social media marketing?', answer: 'Most clients see meaningful engagement improvements within 30-60 days. Lead generation results typically ramp up over 90 days as we optimize content and audience targeting.' },
      { question: 'Do you create all the content?', answer: 'Yes — we handle strategy, copywriting, graphic design, and scheduling. We collaborate with you for brand voice and approvals, but we do the heavy lifting.' },
      { question: 'Can you manage social media for B2B businesses in Calgary?', answer: 'Absolutely. We specialize in B2B social strategies, particularly on LinkedIn, helping Calgary businesses connect with decision-makers and drive qualified leads.' },
      { question: 'What\'s included in your monthly reporting?', answer: 'Our reports cover reach, engagement, follower growth, website traffic from social, lead attribution, and ROI analysis with strategic recommendations for the next month.' },
    ],
    relatedSlugs: ['photo-video-production', 'seo', 'google-ads'],
    caseStudy: {
      headline: '340% Engagement Growth in 90 Days',
      challenge: 'A Calgary dental clinic had zero social media presence and was losing patients to competitors with active online profiles.',
      solution: 'We launched a comprehensive social strategy with educational content, patient testimonials, and community engagement across Instagram and Facebook.',
      result: '340% increase in engagement, 156 new patient inquiries attributed to social media, and a 4.3x return on marketing investment.',
    },
    cluster: 'marketing',
  },
  {
    slug: 'photo-video-production',
    name: 'Photo & Video Production',
    shortDescription: 'Professional content that tells your story and drives real engagement.',
    metaTitle: 'Photo & Video Production Calgary | Content Creation | Zirka Solutions',
    metaDescription: 'Professional photo and video production in Calgary. Commercial photography, brand videos, and content creation that drives engagement and conversions.',
    keywords: ['video production Calgary', 'commercial photography Calgary', 'content creation Calgary'],
    heroTagline: 'Professional visual content that captures attention, tells your story, and converts viewers into customers.',
    icon: 'Camera',
    challenges: [
      { title: 'Amateur Visuals', description: 'Low-quality photos and videos are hurting your brand perception and turning away potential customers.' },
      { title: 'No Content Pipeline', description: 'You run out of fresh content within weeks and scramble to fill your feeds and website.' },
      { title: 'High Production Costs', description: 'One-off shoots are expensive and don\'t yield enough variety for ongoing marketing needs.' },
      { title: 'Disconnected Content', description: 'Your visual content doesn\'t align with your marketing strategy or brand message.' },
    ],
    solutions: [
      { title: 'Strategic Shoot Planning', description: 'We plan shoots around your content calendar, maximizing every session for months of usable content.' },
      { title: 'Full Production Team', description: 'Director, cinematographer, photographer, editor — a complete team without the agency overhead.' },
      { title: 'Content Packages', description: 'Monthly content packages that keep your pipeline full with consistent, on-brand visuals.' },
      { title: 'Multi-Platform Optimization', description: 'Every piece is formatted and optimized for its destination — social, web, ads, or print.' },
    ],
    deliverables: [
      { name: 'Brand Photography', description: 'Professional team photos, headshots, product shots, and lifestyle imagery.' },
      { name: 'Video Production', description: 'Brand videos, testimonials, social reels, and promotional content.' },
      { name: 'Drone & Aerial Content', description: 'Stunning aerial photography and videography for unique perspectives.' },
      { name: 'Post-Production', description: 'Professional editing, color grading, sound design, and graphics.' },
    ],
    metrics: [
      { value: '+185%', label: 'Content Engagement Increase' },
      { value: '3.2x', label: 'Social Media Reach' },
      { value: '60+', label: 'Content Pieces Per Shoot' },
    ],
    faqs: [
      { question: 'What types of video do you produce?', answer: 'We produce brand story videos, customer testimonials, social media reels, product demos, event coverage, drone footage, and animated explainer videos.' },
      { question: 'How long does a typical production take?', answer: 'Pre-production takes 1-2 weeks, shooting is typically 1-2 days, and post-production runs 1-3 weeks depending on complexity. Rush projects are available.' },
      { question: 'Do you handle all the editing?', answer: 'Yes — we manage the entire process from concept to final delivery, including color grading, sound design, motion graphics, and platform-specific formatting.' },
      { question: 'Can you film at our Calgary business location?', answer: 'Absolutely. We shoot on-location anywhere in Calgary and surrounding areas. We also have access to studio spaces for controlled environments.' },
    ],
    relatedSlugs: ['social-media-marketing', 'web-development', 'google-ads'],
    caseStudy: {
      headline: '3.2x Social Reach with Professional Content',
      challenge: 'A Calgary restaurant group was using phone photos for all marketing and seeing minimal engagement across their social channels.',
      solution: 'We produced a library of professional food photography, behind-the-scenes videos, and chef spotlight reels optimized for Instagram and TikTok.',
      result: '3.2x increase in social media reach, 185% engagement boost, and a measurable uptick in reservations from social media referrals.',
    },
    cluster: 'marketing',
  },
  {
    slug: 'seo',
    name: 'SEO',
    shortDescription: 'Dominate Calgary search results and attract high-intent organic traffic.',
    metaTitle: 'Calgary SEO Services | Rank Higher on Google | Zirka Solutions',
    metaDescription: 'Dominate Calgary search results with proven SEO strategies. Technical SEO, local SEO, and content optimization that drives organic traffic and leads.',
    keywords: ['Calgary SEO services', 'SEO agency Calgary', 'local SEO Calgary'],
    heroTagline: 'Get found by Calgary customers actively searching for what you offer — and convert that traffic into revenue.',
    icon: 'Search',
    challenges: [
      { title: 'Invisible Online', description: 'Your competitors own page one of Google while your business is buried on page three or beyond.' },
      { title: 'Wasted Ad Spend', description: 'You\'re paying for every click because organic search brings almost zero traffic.' },
      { title: 'Technical Problems', description: 'Slow load times, broken links, and poor mobile experience are tanking your rankings.' },
      { title: 'No Local Presence', description: 'Your Google Business Profile is incomplete and you\'re missing local map pack results.' },
    ],
    solutions: [
      { title: 'Comprehensive SEO Audit', description: 'We uncover every technical issue, content gap, and ranking opportunity with a 100+ point audit.' },
      { title: 'Local SEO Domination', description: 'Optimize your Google Business Profile, build local citations, and own the Calgary map pack.' },
      { title: 'Content Strategy', description: 'Keyword-targeted content that answers your customers\' questions and builds topical authority.' },
      { title: 'Technical Optimization', description: 'Site speed, Core Web Vitals, schema markup, and mobile optimization for ranking excellence.' },
    ],
    deliverables: [
      { name: 'Technical SEO Audit & Fixes', description: 'Comprehensive site audit with prioritized fix implementation.' },
      { name: 'Local SEO Optimization', description: 'Google Business Profile optimization and local citation building.' },
      { name: 'Keyword Strategy', description: 'Target keyword identification, mapping, and content planning.' },
      { name: 'Monthly SEO Content', description: 'SEO-optimized blog posts, landing pages, and content updates.' },
      { name: 'Backlink Building', description: 'Strategic outreach for high-quality, relevant backlinks.' },
      { name: 'Monthly Ranking Reports', description: 'Detailed keyword tracking, traffic analysis, and ROI reporting.' },
    ],
    metrics: [
      { value: '+147%', label: 'Organic Traffic Growth' },
      { value: 'Top 3', label: 'Avg. Local Pack Position' },
      { value: '85%', label: 'Keywords on Page One' },
    ],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'SEO is a long-term strategy. Most clients see initial improvements in 3-4 months, with significant results in 6-12 months. Local SEO can show faster results, often within 2-3 months.' },
      { question: 'Do you guarantee first page rankings?', answer: 'No ethical SEO agency can guarantee specific rankings because Google controls the algorithm. What we guarantee is a proven process, transparent reporting, and consistent improvement in your organic visibility.' },
      { question: 'What\'s the difference between local SEO and regular SEO?', answer: 'Local SEO focuses on ranking in Google Maps and location-based searches (like "dentist near me"). Regular SEO targets broader organic search results. For Calgary businesses, we typically do both.' },
      { question: 'Do I need to write blog content for SEO?', answer: 'Content is critical for SEO, but you don\'t have to write it. We handle content strategy, writing, and optimization — we just need your industry expertise for accuracy reviews.' },
      { question: 'How do you measure SEO success?', answer: 'We track keyword rankings, organic traffic, conversion rates, leads generated, and revenue attributed to organic search. Monthly reports show exactly how SEO is impacting your bottom line.' },
    ],
    relatedSlugs: ['google-ads', 'web-development', 'social-media-marketing'],
    caseStudy: {
      headline: '147% Organic Traffic Growth in 6 Months',
      challenge: 'A Calgary law firm had virtually no organic presence, relying entirely on expensive Google Ads for client acquisition.',
      solution: 'We implemented technical fixes, launched a local SEO campaign, and published targeted legal content addressing common Calgary-area legal questions.',
      result: '147% increase in organic traffic, 85% of target keywords ranking on page one, and a 60% reduction in paid advertising dependency.',
    },
    cluster: 'marketing',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads & Paid Media',
    shortDescription: 'Targeted campaigns that deliver measurable ROI from day one.',
    metaTitle: 'Calgary Google Ads Management | PPC Agency | Zirka Solutions',
    metaDescription: 'Expert Google Ads management in Calgary. Targeted PPC campaigns that deliver measurable ROI, lower cost-per-lead, and maximize your ad spend.',
    keywords: ['Google Ads management Calgary', 'PPC agency Calgary', 'Calgary paid advertising'],
    heroTagline: 'Stop burning ad budget. Start generating qualified leads with campaigns built by certified Google Ads professionals.',
    icon: 'Target',
    challenges: [
      { title: 'Wasted Ad Spend', description: 'You\'re spending thousands monthly but can\'t tell which clicks actually turn into customers.' },
      { title: 'High Cost Per Lead', description: 'Your cost per acquisition keeps climbing while conversion rates stay flat.' },
      { title: 'Poor Targeting', description: 'Your ads reach the wrong people — too broad, wrong locations, irrelevant search terms.' },
      { title: 'DIY Limitations', description: 'Managing campaigns yourself means missed optimizations and falling behind competitors.' },
    ],
    solutions: [
      { title: 'Strategic Campaign Architecture', description: 'We build campaigns with tight ad groups, precise keyword targeting, and conversion-focused landing pages.' },
      { title: 'Continuous Optimization', description: 'Daily bid management, A/B testing, negative keyword pruning, and quality score improvement.' },
      { title: 'Full-Funnel Tracking', description: 'Complete conversion tracking from click to customer, so every dollar is accounted for.' },
      { title: 'Calgary Market Expertise', description: 'We know Calgary\'s competitive landscape and build strategies that win in this market.' },
    ],
    deliverables: [
      { name: 'Campaign Strategy & Setup', description: 'Complete campaign architecture with ad groups, keywords, and targeting.' },
      { name: 'Ad Copywriting & Design', description: 'Compelling ad copy and display creative that drives clicks and conversions.' },
      { name: 'Landing Page Optimization', description: 'Conversion-optimized landing pages aligned with ad messaging.' },
      { name: 'Weekly Optimization', description: 'Bid adjustments, keyword refinement, and performance tuning.' },
      { name: 'Monthly ROI Reports', description: 'Clear reporting on spend, leads, cost-per-lead, and return on ad spend.' },
    ],
    metrics: [
      { value: '-42%', label: 'Average Cost Per Lead Reduction' },
      { value: '4.2x', label: 'Return on Ad Spend' },
      { value: '+210%', label: 'Conversion Rate Improvement' },
    ],
    faqs: [
      { question: 'How much should I spend on Google Ads?', answer: 'Budgets vary by industry and competition. Most Calgary businesses see good results starting at $2,000-5,000/month in ad spend plus management fees. We\'ll recommend a budget based on your goals and market.' },
      { question: 'How quickly will I see results from Google Ads?', answer: 'You can start getting clicks and leads within days of launch. However, campaigns typically need 2-4 weeks of data to optimize effectively. Full optimization usually takes 60-90 days.' },
      { question: 'Do you manage Facebook and Instagram Ads too?', answer: 'Yes — we manage paid media across Google, Facebook, Instagram, LinkedIn, and YouTube. We recommend the best platforms based on your audience and goals.' },
      { question: 'What\'s your management fee structure?', answer: 'We offer transparent, flat-rate management fees based on campaign complexity and ad spend level. No percentage-of-spend model, so our incentives align with your results.' },
    ],
    relatedSlugs: ['seo', 'social-media-marketing', 'web-development'],
    caseStudy: {
      headline: '4.2x Return on Ad Spend',
      challenge: 'A Calgary HVAC company was spending $5,000/month on Google Ads with a 0.8x return — essentially losing money on every campaign.',
      solution: 'We rebuilt their campaign structure, implemented proper conversion tracking, created dedicated landing pages, and optimized bidding strategies.',
      result: '4.2x ROAS, 42% lower cost per lead, and 210% more conversions within 90 days of management takeover.',
    },
    cluster: 'marketing',
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation & Voice Agents',
    shortDescription: 'Automate repetitive tasks and deploy intelligent voice agents that work 24/7.',
    metaTitle: 'AI Automation & Voice Agents Calgary | Zirka Solutions',
    metaDescription: 'AI automation and voice agents for Calgary businesses. Automate tasks, deploy 24/7 voice agents, and streamline operations with intelligent automation.',
    keywords: ['AI automation Calgary', 'voice agent Calgary business', 'business automation Alberta'],
    heroTagline: 'Deploy intelligent automation that handles repetitive work while your team focuses on what actually grows revenue.',
    icon: 'Bot',
    challenges: [
      { title: 'Manual Repetitive Tasks', description: 'Your team spends hours on data entry, follow-ups, and administrative tasks that could be automated.' },
      { title: 'Missed Calls & Leads', description: 'After-hours calls go to voicemail, and potential customers move on to competitors who answer.' },
      { title: 'Scaling Bottlenecks', description: 'Growth means hiring more people for tasks that technology could handle faster and cheaper.' },
      { title: 'Disconnected Systems', description: 'Your tools don\'t talk to each other, creating data silos and manual workarounds.' },
    ],
    solutions: [
      { title: 'AI Voice Agents', description: 'Deploy conversational AI agents that answer calls, qualify leads, and book appointments 24/7.' },
      { title: 'Workflow Automation', description: 'Automate repetitive processes — lead follow-ups, data sync, reporting, and customer communications.' },
      { title: 'System Integration', description: 'Connect your CRM, marketing tools, and business systems for seamless data flow.' },
      { title: 'Custom AI Solutions', description: 'Purpose-built AI tools for your specific business challenges, from chatbots to predictive analytics.' },
    ],
    deliverables: [
      { name: 'AI Voice Agent Setup', description: 'Custom-trained voice agent for calls, bookings, and lead qualification.' },
      { name: 'Workflow Automation', description: 'Automated processes for lead nurturing, follow-ups, and internal operations.' },
      { name: 'System Integration', description: 'Connect CRM, email, calendar, and business tools into unified workflows.' },
      { name: 'Chatbot Development', description: 'AI-powered website chatbots for 24/7 customer engagement and support.' },
      { name: 'Training & Documentation', description: 'Team training and documentation for managing automated systems.' },
    ],
    metrics: [
      { value: '24/7', label: 'Lead Capture Coverage' },
      { value: '-65%', label: 'Reduction in Manual Tasks' },
      { value: '+38%', label: 'Lead Response Rate' },
    ],
    faqs: [
      { question: 'What is an AI voice agent?', answer: 'An AI voice agent is a conversational AI that answers phone calls, understands natural language, qualifies leads, books appointments, and routes calls — it sounds natural and works 24/7 without breaks.' },
      { question: 'Will AI replace my staff?', answer: 'No — AI handles repetitive, low-value tasks so your team can focus on high-value work. Think of it as adding capacity without adding headcount. Your team becomes more efficient, not replaced.' },
      { question: 'How long does AI implementation take?', answer: 'Basic automations can be set up in 1-2 weeks. Voice agents typically take 2-4 weeks for training and testing. Complex system integrations may take 4-8 weeks.' },
      { question: 'What systems can you integrate with?', answer: 'We integrate with most major platforms including Salesforce, HubSpot, Google Workspace, Microsoft 365, Slack, Zapier, and hundreds of other tools via API connections.' },
      { question: 'Is AI automation expensive to maintain?', answer: 'Most AI tools have low ongoing costs compared to hiring staff for the same tasks. We design solutions with cost-efficiency in mind and provide full cost breakdowns before implementation.' },
    ],
    relatedSlugs: ['operations-optimization', 'web-development', 'growth-consulting'],
    caseStudy: {
      headline: '24/7 Lead Capture with AI Voice Agents',
      challenge: 'A Calgary property management company was missing 40% of incoming calls during evenings and weekends, losing potential tenant inquiries.',
      solution: 'We deployed an AI voice agent trained on their property listings, qualification criteria, and booking system to handle all after-hours calls.',
      result: '38% increase in captured leads, 65% reduction in manual follow-up tasks, and an estimated $180K in additional annual revenue from previously missed inquiries.',
    },
    cluster: 'technology',
  },
  {
    slug: 'growth-consulting',
    name: 'Business Growth Consulting',
    shortDescription: 'Strategic guidance to identify revenue opportunities and scale faster.',
    metaTitle: 'Business Growth Consulting Calgary | Fractional COO | Zirka Solutions',
    metaDescription: 'Strategic growth consulting for Calgary businesses. Fractional COO services, revenue optimization, and scaling strategies. Book a free growth audit.',
    keywords: ['business consultant Calgary', 'growth consulting Calgary', 'fractional COO Calgary'],
    heroTagline: 'Get the strategic leadership of a seasoned COO without the full-time salary — we find the opportunities you\'re leaving on the table.',
    icon: 'TrendingUp',
    challenges: [
      { title: 'Revenue Plateaus', description: 'Your business has stalled at a revenue ceiling and you can\'t figure out what\'s blocking growth.' },
      { title: 'No Clear Strategy', description: 'You\'re busy every day but not sure if the work is actually moving the business forward.' },
      { title: 'Scaling Pain', description: 'What got you here won\'t get you there — your systems, team, and processes need to level up.' },
      { title: 'Decision Overload', description: 'Too many options, not enough data — you need an objective perspective on priorities.' },
    ],
    solutions: [
      { title: 'Growth Audit', description: 'Deep-dive analysis of your revenue streams, operations, team, and market position to identify opportunities.' },
      { title: 'Strategic Roadmap', description: 'A prioritized growth plan with specific initiatives, timelines, KPIs, and expected outcomes.' },
      { title: 'Fractional COO Services', description: 'Ongoing strategic leadership — we embed with your team to drive execution and accountability.' },
      { title: 'Revenue Optimization', description: 'Find and fix revenue leaks, optimize pricing, and build predictable revenue systems.' },
    ],
    deliverables: [
      { name: 'Comprehensive Growth Audit', description: 'Full business analysis with scored opportunities and priority recommendations.' },
      { name: 'Strategic Growth Roadmap', description: '90-day and 12-month plans with clear milestones and KPIs.' },
      { name: 'Financial Modeling', description: 'Revenue projections and scenario planning for growth initiatives.' },
      { name: 'Executive Advisory', description: 'Regular strategy sessions with experienced operators and consultants.' },
    ],
    metrics: [
      { value: '+147%', label: 'Average Revenue Growth' },
      { value: '$2.3M', label: 'Revenue Unlocked for Clients' },
      { value: '92%', label: 'Client Satisfaction Score' },
    ],
    faqs: [
      { question: 'What is a fractional COO?', answer: 'A fractional COO provides Chief Operating Officer-level strategic leadership on a part-time or project basis. You get experienced executive guidance without the $200K+ salary of a full-time hire.' },
      { question: 'What does a growth audit include?', answer: 'Our growth audit analyzes your revenue streams, customer acquisition, operations, team structure, technology stack, and competitive positioning. You receive a scored report with prioritized opportunities.' },
      { question: 'How is Zirka different from other consultants?', answer: 'We don\'t just advise — we execute. Our team includes specialists across marketing, technology, and operations, so we can implement the strategies we recommend.' },
      { question: 'What size businesses do you work with?', answer: 'We primarily work with businesses doing $500K-$20M in annual revenue. Our sweet spot is companies that have product-market fit but need help scaling operations and revenue.' },
    ],
    relatedSlugs: ['operations-optimization', 'ai-automation', 'recruiting-staffing'],
    caseStudy: {
      headline: '147% Revenue Growth in 6 Months',
      challenge: 'A Calgary professional services firm had plateaued at $1.8M revenue with no clear path to growth despite a strong client base.',
      solution: 'We conducted a comprehensive growth audit, identified three untapped revenue streams, and built a 90-day execution plan with weekly accountability.',
      result: '147% revenue growth to $4.4M within 6 months, plus operational improvements that increased profit margins by 12 percentage points.',
    },
    cluster: 'operations',
  },
  {
    slug: 'operations-optimization',
    name: 'Operations Optimization',
    shortDescription: 'Streamline workflows, reduce waste, and build systems that scale.',
    metaTitle: 'Operations Optimization Calgary | Business Systems | Zirka Solutions',
    metaDescription: 'Streamline your Calgary business operations. Process optimization, workflow automation, and systems design that scale. Reduce waste and boost efficiency.',
    keywords: ['operations consulting Calgary', 'business operations optimization', 'process improvement Calgary'],
    heroTagline: 'Turn operational chaos into scalable systems that run smoothly, even when you\'re not watching.',
    icon: 'Settings',
    challenges: [
      { title: 'Process Chaos', description: 'Everything depends on specific people, nothing is documented, and things fall through the cracks daily.' },
      { title: 'Scaling Failures', description: 'Every time you grow, things break — more revenue just means more chaos.' },
      { title: 'Team Inefficiency', description: 'Your team is busy but not productive — too many meetings, unclear priorities, duplicated work.' },
      { title: 'No Visibility', description: 'You don\'t have clear metrics or dashboards to see what\'s working and what isn\'t.' },
    ],
    solutions: [
      { title: 'Process Mapping & Design', description: 'Document, analyze, and redesign your core workflows for maximum efficiency and clarity.' },
      { title: 'Systems Implementation', description: 'Deploy the right tools and systems to support your optimized processes.' },
      { title: 'KPI Dashboards', description: 'Build real-time dashboards that give you visibility into every part of your operations.' },
      { title: 'Team Alignment', description: 'Implement communication frameworks, meeting cadences, and accountability structures.' },
    ],
    deliverables: [
      { name: 'Operations Audit', description: 'Comprehensive review of current processes, systems, and team structure.' },
      { name: 'Process Documentation', description: 'SOPs, workflow maps, and playbooks for all critical processes.' },
      { name: 'System Setup & Migration', description: 'Implementation of project management, CRM, and communication tools.' },
      { name: 'KPI Dashboard', description: 'Custom dashboards tracking operational efficiency and business health.' },
      { name: 'Team Training', description: 'Training sessions for new processes and systems adoption.' },
    ],
    metrics: [
      { value: '-35%', label: 'Operational Cost Reduction' },
      { value: '+58%', label: 'Team Productivity Increase' },
      { value: '4.5h', label: 'Weekly Time Saved Per Employee' },
    ],
    faqs: [
      { question: 'What does operations optimization involve?', answer: 'We analyze your current workflows, identify bottlenecks and inefficiencies, redesign processes for scalability, implement supporting systems, and train your team on the new ways of working.' },
      { question: 'How long does an operations overhaul take?', answer: 'A typical engagement runs 8-12 weeks for assessment, design, and implementation. Quick wins are often implemented within the first 2 weeks.' },
      { question: 'Do you work with specific project management tools?', answer: 'We\'re tool-agnostic and recommend the best fit for your business — whether that\'s Monday.com, Asana, ClickUp, Notion, or custom solutions. We handle full setup and migration.' },
      { question: 'Can you help with remote team operations?', answer: 'Absolutely. Many of our clients have hybrid or fully remote teams. We specialize in communication frameworks, async workflows, and tools that keep distributed teams aligned.' },
    ],
    relatedSlugs: ['growth-consulting', 'ai-automation', 'recruiting-staffing'],
    caseStudy: {
      headline: '35% Cost Reduction, 58% Productivity Boost',
      challenge: 'A 40-person Calgary company was drowning in operational inefficiency — unclear processes, redundant tools, and team burnout.',
      solution: 'We mapped all core processes, eliminated redundancies, consolidated their tech stack from 12 tools to 5, and implemented a clear meeting and reporting cadence.',
      result: '35% reduction in operational costs, 58% increase in measured productivity, and employee satisfaction scores improved significantly.',
    },
    cluster: 'operations',
  },
  {
    slug: 'recruiting-staffing',
    name: 'Recruiting & Staffing',
    shortDescription: 'Find and retain top talent with our proven screening process.',
    metaTitle: 'Recruiting & Staffing Agency Calgary | Zirka Solutions',
    metaDescription: 'Find top talent in Calgary with our proven recruiting process. Executive search, staff augmentation, and retention strategies for growing businesses.',
    keywords: ['recruiting agency Calgary', 'staffing solutions Calgary', 'Calgary headhunter'],
    heroTagline: 'Stop settling for "good enough" hires. Our proven process finds the talent that actually moves your business forward.',
    icon: 'Users',
    challenges: [
      { title: 'Bad Hires', description: 'You\'ve wasted time and money on candidates who looked great on paper but couldn\'t perform.' },
      { title: 'Slow Hiring', description: 'Positions stay open for months, putting strain on your existing team and slowing growth.' },
      { title: 'High Turnover', description: 'New hires keep leaving within the first year, creating a costly revolving door.' },
      { title: 'Limited Talent Pool', description: 'You\'re only reaching active job seekers and missing the best passive candidates.' },
    ],
    solutions: [
      { title: 'Strategic Sourcing', description: 'We tap into active and passive candidate networks to find the best talent in Calgary and beyond.' },
      { title: 'Rigorous Screening', description: 'Multi-stage vetting including skills assessment, culture fit evaluation, and reference verification.' },
      { title: 'Retention Planning', description: 'Onboarding support, compensation benchmarking, and retention strategies to keep your best people.' },
      { title: 'Flexible Models', description: 'Full-time placement, contract staffing, or temp-to-perm — whatever your growth stage requires.' },
    ],
    deliverables: [
      { name: 'Talent Strategy', description: 'Hiring plan aligned with growth goals, including role prioritization and timeline.' },
      { name: 'Candidate Sourcing', description: 'Active outreach across job boards, LinkedIn, industry networks, and our talent database.' },
      { name: 'Screening & Assessment', description: 'Skills testing, behavioral interviews, and culture fit evaluation.' },
      { name: 'Onboarding Support', description: '90-day onboarding plan to ensure new hire success and retention.' },
    ],
    metrics: [
      { value: '94%', label: 'Placement Retention at 12 Months' },
      { value: '21 days', label: 'Average Time to Fill' },
      { value: '3.5x', label: 'Quality of Hire Improvement' },
    ],
    faqs: [
      { question: 'What types of roles do you recruit for?', answer: 'We recruit across marketing, sales, operations, technology, and executive roles. Our sweet spot is mid-level to senior positions for growing Calgary businesses.' },
      { question: 'How does your screening process work?', answer: 'Our process includes resume screening, skills assessment, behavioral interviews, culture alignment evaluation, reference checks, and client-specific criteria matching.' },
      { question: 'What if the hire doesn\'t work out?', answer: 'We offer a replacement guarantee — if a placement doesn\'t work within the guarantee period, we\'ll find a replacement at no additional cost.' },
      { question: 'Do you offer temporary staffing?', answer: 'Yes — we offer full-time placements, contract positions, temp-to-perm arrangements, and project-based staffing. We\'ll recommend the best model for your situation.' },
    ],
    relatedSlugs: ['growth-consulting', 'operations-optimization', 'ai-automation'],
    caseStudy: {
      headline: '94% Retention Rate, 21-Day Average Fill Time',
      challenge: 'A rapidly growing Calgary tech startup needed to hire 8 key positions in 60 days but couldn\'t attract quality candidates through job postings alone.',
      solution: 'We activated our talent network, ran targeted outreach campaigns, and implemented a rigorous 4-stage screening process tailored to their culture.',
      result: 'All 8 positions filled within 45 days, 94% retention at 12 months, and an estimated $340K saved compared to the cost of bad hires.',
    },
    cluster: 'operations',
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    shortDescription: 'High-converting websites built for speed, SEO, and lead generation.',
    metaTitle: 'Web Development Calgary | SEO-Optimized Websites | Zirka Solutions',
    metaDescription: 'Custom web development in Calgary. Fast, SEO-optimized, mobile-first websites designed to convert visitors into customers. Built for speed and results.',
    keywords: ['web development Calgary', 'website design Calgary', 'Calgary web developer'],
    heroTagline: 'Your website should be your hardest-working salesperson — fast, optimized, and built to convert visitors into customers.',
    icon: 'Code',
    challenges: [
      { title: 'Slow Website', description: 'Your site takes forever to load, driving visitors away before they see what you offer.' },
      { title: 'No Conversions', description: 'You get traffic but nobody fills out forms, calls, or buys — your site doesn\'t drive action.' },
      { title: 'Outdated Design', description: 'Your website looks like it\'s from 2015 and doesn\'t reflect the quality of your business.' },
      { title: 'Not Mobile-Friendly', description: 'Over 60% of your visitors are on mobile but your site is barely functional on phones.' },
    ],
    solutions: [
      { title: 'Conversion-First Design', description: 'Every page is designed with clear CTAs, trust signals, and user flows that guide visitors to action.' },
      { title: 'Performance Engineering', description: 'Sub-2-second load times with optimized code, images, and hosting infrastructure.' },
      { title: 'SEO-Native Architecture', description: 'Built from the ground up with semantic HTML, schema markup, and on-page optimization.' },
      { title: 'Mobile-First Development', description: 'Responsive design that works beautifully on every device and screen size.' },
    ],
    deliverables: [
      { name: 'Custom Website Design', description: 'Unique design tailored to your brand, audience, and conversion goals.' },
      { name: 'Responsive Development', description: 'Mobile-first build with flawless cross-device and cross-browser compatibility.' },
      { name: 'SEO Foundation', description: 'Technical SEO setup, schema markup, and on-page optimization built in.' },
      { name: 'CMS Integration', description: 'Easy-to-use content management so you can update your site without developers.' },
      { name: 'Analytics Setup', description: 'Google Analytics 4, conversion tracking, and goal configuration.' },
    ],
    metrics: [
      { value: '+195%', label: 'Average Conversion Rate Increase' },
      { value: '<2s', label: 'Page Load Time' },
      { value: '100%', label: 'Mobile Responsive' },
    ],
    faqs: [
      { question: 'How long does it take to build a website?', answer: 'A typical business website takes 4-8 weeks from kickoff to launch. Complex web applications or e-commerce sites may take 8-12 weeks. We provide a detailed timeline at project start.' },
      { question: 'What platforms do you build on?', answer: 'We build custom sites using Next.js, WordPress, Webflow, and Shopify depending on your needs. We\'ll recommend the best platform based on your goals, budget, and technical requirements.' },
      { question: 'Do you provide ongoing maintenance?', answer: 'Yes — we offer monthly maintenance plans that include security updates, performance monitoring, content updates, and technical support.' },
      { question: 'Will my new website rank on Google?', answer: 'We build every site with SEO best practices baked in — semantic HTML, fast load times, schema markup, and on-page optimization. For competitive rankings, we recommend pairing with our SEO service.' },
      { question: 'Can you redesign my existing website?', answer: 'Absolutely. We frequently redesign existing sites while preserving SEO equity and improving conversion rates. We handle content migration, URL redirects, and launch coordination.' },
    ],
    relatedSlugs: ['seo', 'google-ads', 'ai-automation'],
    caseStudy: {
      headline: '195% Conversion Rate Increase After Redesign',
      challenge: 'A Calgary accounting firm\'s outdated website had a 0.4% conversion rate and loaded in over 6 seconds on mobile.',
      solution: 'We designed and built a conversion-optimized website with sub-2-second load times, clear service pages, and strategic CTA placement.',
      result: '195% increase in conversion rate, 3.2-second improvement in mobile load time, and a 280% increase in form submissions within the first month.',
    },
    cluster: 'technology',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return services.filter((s) => slugs.includes(s.slug));
}
