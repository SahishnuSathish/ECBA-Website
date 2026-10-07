/**
 * Events page content. Event names come from the brief; descriptions are draft copy
 * for officers to confirm. No dates are listed because none have been verified.
 */

export const intro = {
  title: 'Events and community',
  lead: 'Each year ECBA hosts a set of events that members count on, from the first week of the fall semester to company visits in the spring.',
};

export const recurringEvents = [
  {
    id: 'back2school',
    title: 'Back2School Social',
    when: 'Start of the fall semester',
    body: 'The first gathering of the year. New students meet the cohorts ahead of them, and everyone else catches up after a summer of internships.',
    photoLabel: 'Back2School Social',
  },
  {
    id: 'freshman-panel',
    title: 'Freshman panel',
    when: 'Fall semester',
    body: 'Upperclassmen take first-year questions on coursework, recruiting and balancing two honors programs. Nothing is off the table.',
    photoLabel: 'Freshman panel',
  },
  {
    id: 'company-events',
    title: 'Company events',
    when: 'Throughout the year',
    body: 'Information sessions, workshops and coffee chats hosted with partner companies. Formats are described on the Partners page.',
    photoLabel: 'Partner company visit',
    link: { label: 'See partner event formats', href: '/partners#formats' },
  },
];

/** Photo slots for the gallery. Add `src` (and keep `label` as alt text) when photos arrive. */
export const gallery = [
  { label: 'Back2School Social: the whole group', ratio: '3 / 2', tone: 'deep' },
  { label: 'Freshman panel: speakers', ratio: '4 / 5', tone: 'mist' },
  { label: 'Workshop: members at work', ratio: '1 / 1', tone: 'olive' },
  { label: 'Information session: Q&A', ratio: '4 / 5', tone: 'olive' },
  { label: 'Coffee chat', ratio: '1 / 1', tone: 'mist' },
  { label: 'Back2School Social: candid', ratio: '3 / 2', tone: 'mist' },
  { label: 'Cohort photo', ratio: '3 / 2', tone: 'deep' },
  { label: 'Freshman panel: audience', ratio: '1 / 1', tone: 'olive' },
] as const;
