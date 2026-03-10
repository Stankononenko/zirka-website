export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Alex Kovalenko',
    title: 'Founder & CEO',
    bio: 'Former operations lead at a scaling tech company. Built Zirka to be the growth partner he wished existed — one team, every capability, real results.',
  },
  {
    name: 'Maya Rodriguez',
    title: 'Head of Marketing',
    bio: 'Digital marketing strategist with 10+ years driving growth for Calgary businesses across SEO, paid media, and social channels.',
  },
  {
    name: 'James Park',
    title: 'Director of Operations',
    bio: 'Process optimization specialist who has streamlined operations for 30+ businesses. Obsessed with systems that scale without breaking.',
  },
  {
    name: 'Tara Singh',
    title: 'AI & Automation Lead',
    bio: 'AI engineer and automation architect. Designs intelligent systems that save teams thousands of hours annually.',
  },
  {
    name: 'Elena Vasquez',
    title: 'Creative Director',
    bio: 'Award-winning visual storyteller leading photo, video, and brand creative for clients across industries.',
  },
  {
    name: 'David Okafor',
    title: 'Recruiting Manager',
    bio: 'Talent acquisition expert with a track record of 94% placement retention. Knows the Calgary talent market inside and out.',
  },
];
