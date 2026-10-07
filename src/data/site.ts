/**
 * Site-wide facts: identity, contact details, navigation and external links.
 * Edit here; every page reads from this file. Sources are listed in docs/CONTENT.md.
 */

export const org = {
  short: 'ECBA',
  /** Name as published on the organization's UT-hosted site (sites.utexas.edu/ecba). */
  name: 'Electrical Computer Engineering and Business Association',
  /** Short form used in ECBA's own sponsorship packet. */
  informal: 'ECB Association',
  university: 'The University of Texas at Austin',
  tagline: 'The student association of Texas ECB Honors at UT Austin.',
};

export const contact = {
  email: 'utexasecba@gmail.com',
  instagramHandle: '@utexasecba',
  instagramUrl: 'https://www.instagram.com/utexasecba/',
};

/** The official academic program. ECBA is the student organization, not the program. */
export const program = {
  name: 'Texas ECB Honors',
  fullName: 'Texas Honors Electrical and Computer Engineering and Business',
  homeUrl: 'https://ecb.utexas.edu/',
  admissionsUrl: 'https://ecb.utexas.edu/admissions',
  academicsUrl: 'https://ecb.utexas.edu/academics',
  email: 'TexasECB@ece.utexas.edu',
};

export const nav = [
  { label: 'Program', href: '/program' },
  { label: 'Partners', href: '/partners' },
  { label: 'Events', href: '/events' },
  { label: 'People', href: '/people' },
];

export const relatedLinks = [
  { label: 'Texas ECB Honors', href: program.homeUrl },
  { label: 'ECB admissions', href: program.admissionsUrl },
  { label: 'Texas ECE', href: 'https://www.ece.utexas.edu' },
  { label: 'Canfield BHP', href: 'https://www.mccombs.utexas.edu/CBHP' },
];

/** Required on University websites (UT website guidelines, "Standard Footer"). */
export const utFooterLinks = [
  { label: 'Emergency Information', href: 'https://emergency.utexas.edu/' },
  { label: 'Site Policies', href: 'https://www.utexas.edu/site-policies' },
  { label: 'Web Accessibility Policy', href: 'https://www.utexas.edu/web-accessibility-policy' },
  { label: 'Web Privacy Policy', href: 'https://www.utexas.edu/web-privacy-policy' },
];

export const ut = {
  homeUrl: 'https://www.utexas.edu',
  copyrightYear: 2026,
};
