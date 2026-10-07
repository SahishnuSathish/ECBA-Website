/** Home page content. Sources and verification status: docs/CONTENT.md. */

export const hero = {
  kicker: 'ECB at UT Austin',
  headlineEngineering: 'Built on circuits.',
  headlineBusiness: 'Fluent in business.',
  intro:
    'ECBA is the student community of Texas ECB Honors: a highly selective group of UT’s top technical and business talent, earning degrees in both Electrical and Computer Engineering Honors and Canfield Business Honors.',
};

/** Verified facts only. Each row names its source so it can be re-checked. */
export const datasheet = [
  {
    parameter: 'Members',
    value: 'About 110',
    note: 'students across all cohorts',
    source: 'ECBA sponsorship packet, 2026–27',
  },
  {
    parameter: 'Cohort size',
    value: '30–40',
    note: 'students admitted per class',
    source: 'ecb.utexas.edu',
  },
  {
    parameter: 'Degrees',
    value: 'Two in four years',
    note: 'ECE Honors and Business Honors',
    source: 'ecb.utexas.edu',
  },
];

/** The three things ECBA does. Symbols are schematic parts drawn in Schematic.astro. */
export const pillars = [
  {
    id: 'build',
    title: 'Build',
    symbol: 'ic',
    body: 'Members team up in the Innovation Collective to develop early-stage projects and product ideas outside the classroom. It is a low-stakes proving ground for the initiative and ownership that product, strategy and technical roles ask for.',
  },
  {
    id: 'connect',
    title: 'Connect',
    symbol: 'junction',
    body: 'A dual degree is easier with people who are doing it too. Socials, panels and class-to-class mentoring link every cohort, and company events put members in the room with engineers, operators and recruiters.',
  },
  {
    id: 'develop',
    title: 'Develop',
    symbol: 'amp',
    body: 'Workshops, information sessions and coffee chats sharpen the skills two honors curricula start: explaining technical work plainly, reading a business, and choosing where to take both.',
  },
] as const;

/**
 * Employers and programs shown on ECBA's "Where is ECB" board (Canva, linked from the brief).
 * Plain-text names only: logo permission has not been obtained.
 */
export const destinations = [
  'Amazon',
  'AMD',
  'Apple',
  'Atlassian',
  'Bain & Company',
  'BlackRock',
  'Blackstone',
  'Boston Consulting Group',
  'Capital One',
  'Chegg',
  'D. E. Shaw & Co.',
  'Ericsson',
  'Etched',
  'ExxonMobil',
  'Google',
  'Guggenheim',
  'IBM',
  'IMC',
  'J.P. Morgan',
  'Jane Street',
  'Marvell',
  'McKinsey & Company',
  'Meta',
  'NVIDIA',
  'Oliver Wyman',
  'Raytheon Technologies',
  'SpaceX',
  'Tesla',
  'Texas Instruments',
];

export const partnerInvite = {
  title: 'Recruit tomorrow’s technical leaders',
  body: 'UT ECB students are among the top technical and business talents in the nation. Our partnership pipeline gives companies a direct way to recruit, sponsor and help develop a group of driven members.',
};

/** Photo slots for the home gallery. Replace `src` when real photos are supplied. */
export const homePhotos = [
  { label: 'Members at a company information session', ratio: '4 / 5', tone: 'deep' },
  { label: 'Back2School Social', ratio: '4 / 3', tone: 'mist' },
  { label: 'Freshman panel', ratio: '1 / 1', tone: 'olive' },
  { label: 'Cohort photo on campus', ratio: '16 / 10', tone: 'mist' },
  { label: 'Workshop in progress', ratio: '4 / 5', tone: 'olive' },
] as const;

/**
 * SAMPLE CONTENT. These are fictional people used to show the alumni spotlight layout.
 * Replace with real alumni (with their permission) before launch.
 */
export const alumniSpotlights = [
  {
    sample: true,
    name: 'Jordan Avery',
    classYear: 'Class of 20XX',
    track: 'Computer Architecture and Embedded Systems',
    role: 'Hardware Engineer',
    employer: 'Semiconductor company',
  },
  {
    sample: true,
    name: 'Priya Raman',
    classYear: 'Class of 20XX',
    track: 'Data Science and Information Processing',
    role: 'Product Manager',
    employer: 'Technology company',
  },
  {
    sample: true,
    name: 'Marcus Lee',
    classYear: 'Class of 20XX',
    track: 'Software Engineering and Design',
    role: 'Analyst',
    employer: 'Consulting firm',
  },
];
