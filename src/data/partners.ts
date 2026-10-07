/**
 * Partners page content.
 * Source: "ECB Sponsorship Packet, 2026–2027 Corporate Sponsorships" (Google Doc linked from the brief).
 * Confirm packages and prices with ECBA officers before launch.
 */

export const intro = {
  title: 'Partner with us',
  lead: 'UT ECB students are among the top technical and business talents in the nation. Our partnership pipeline gives companies a direct way to recruit, sponsor and help develop a group of driven members.',
  context:
    'Members are pursuing a dual degree: Electrical and Computer Engineering Honors at the Cockrell School of Engineering and Business Administration Honors through the Canfield Business Honors Program at the McCombs School of Business. They pair deep technical coursework in hardware, software, embedded systems and data with the analytical and leadership training of a top-ranked business program.',
};

export const reasons = [
  {
    title: 'A profile companies compete for',
    body: 'Dual-degree students recruit for software and hardware engineering, product management, quantitative finance and technical consulting.',
  },
  {
    title: 'A small, curated cohort',
    body: 'About 110 members across all classes, admitted 30 to 40 at a time.',
  },
  {
    title: 'Early, direct access',
    body: 'Focused events and referrals put you in front of members ahead of school-wide career fairs.',
  },
  {
    title: 'An opt-in resume book',
    body: 'Engaged members who choose to share their resumes with partner companies.',
  },
];

export const waysToSupport = [
  {
    id: 'recruit',
    title: 'Recruit',
    body: 'Meet members through a hosted event, request the opt-in resume book, and reach students before the general career-fair cycle.',
  },
  {
    id: 'sponsor',
    title: 'Sponsor',
    body: 'Sponsorships fund the events, workshops and community programming that keep members engaged, with your company recognized at each one.',
  },
  {
    id: 'develop',
    title: 'Develop',
    body: 'Mentor a project team in the Innovation Collective, run a feedback session, or teach a skill your new hires wish they had learned sooner.',
  },
];

export const packages = {
  season: '2026–2027',
  tiers: [
    { id: 'platinum', name: 'Platinum', price: '$2,500' },
    { id: 'gold', name: 'Gold', price: '$1,500' },
  ],
  benefits: [
    {
      label: 'Recognition as a sponsor at events, in communications, on the website and in additional materials',
      platinum: true,
      gold: true,
    },
    { label: 'Access to student information', platinum: true, gold: true },
    { label: 'Host one technical or social event per academic year', platinum: true, gold: true },
    { label: 'Host an additional technical or social event per academic year', platinum: true, gold: false },
  ],
  footnote: 'Catering for hosted events is the responsibility of the industry partner.',
  /** Set to a public PDF/URL when the final packet is published; the page then shows a download link. */
  packetUrl: '' as string,
};

export const eventFormats = [
  {
    id: 'info-session',
    title: 'Information session',
    length: 'About an hour, on campus',
    body: 'Introduce your company, teams and roles to the whole membership, then take questions. The simplest way to start.',
  },
  {
    id: 'workshop',
    title: 'Workshop',
    length: 'Hands-on, small group',
    body: 'Teach something your engineers or analysts do every day: a design review, a case, a system teardown. Members learn how your people think.',
  },
  {
    id: 'coffee-chat',
    title: 'Coffee chat',
    length: 'Informal, one to a few',
    body: 'Short conversations between your team and members who are curious about a specific role or path.',
  },
];

export const inquiryFormats = ['Information session', 'Workshop', 'Coffee chat', 'Sponsorship', 'Something else'];
