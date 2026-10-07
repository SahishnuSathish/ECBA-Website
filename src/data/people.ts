/**
 * People page content.
 *
 * EVERYTHING IN THIS FILE IS SAMPLE DATA. No real officer or member information has been
 * supplied, and real member data must never be committed to this public repository.
 * Officers: replace with real names, roles and headshots once each officer consents.
 * Directory: a real member and alumni directory needs server-side access control
 * (see docs/PLAN.md, "Later"). Do not ship real records in a static bundle.
 */

export const officers = [
  { sample: true, role: 'President', name: 'Officer name', detail: 'Class year, technical component' },
  { sample: true, role: 'Vice President', name: 'Officer name', detail: 'Class year, technical component' },
  { sample: true, role: 'Corporate Relations', name: 'Officer name', detail: 'Class year, technical component' },
  { sample: true, role: 'Events', name: 'Officer name', detail: 'Class year, technical component' },
  { sample: true, role: 'Finance', name: 'Officer name', detail: 'Class year, technical component' },
  { sample: true, role: 'Communications', name: 'Officer name', detail: 'Class year, technical component' },
];

/** Fictional people, used only to demonstrate the directory layout. */
export const directoryPreview = [
  { name: 'Avery, Jordan', classYear: '20XX', track: 'Computer Architecture and Embedded Systems', status: 'Alumni' },
  { name: 'Castillo, Elena', classYear: '20XX', track: 'Electronics and Integrated Circuits', status: 'Member' },
  { name: 'Dang, Minh', classYear: '20XX', track: 'Software Engineering and Design', status: 'Member' },
  { name: 'Lee, Marcus', classYear: '20XX', track: 'Software Engineering and Design', status: 'Alumni' },
  { name: 'Okafor, Chidi', classYear: '20XX', track: 'Energy Systems and Renewable Energy', status: 'Member' },
  { name: 'Raman, Priya', classYear: '20XX', track: 'Data Science and Information Processing', status: 'Alumni' },
  { name: 'Whitfield, Sam', classYear: '20XX', track: 'Communication, Signal Processing, Networks and Systems', status: 'Member' },
];
