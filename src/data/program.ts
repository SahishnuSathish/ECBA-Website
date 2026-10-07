/**
 * Program page content.
 * Course numbers and titles: 2026–2028 ECB flowchart (Texas ECB, linked from ecb.utexas.edu/academics).
 * Technical component descriptions: ece.utexas.edu/academics/undergraduate/techcore.
 * Elective lists: ECE Technical Component Packet (updated 7.6.26).
 * This is a student-organization summary. The official catalog and advisors are authoritative.
 */

export const sources = {
  flowchart: {
    label: '2026–2028 ECB flowchart',
    href: 'https://utexas.box.com/s/bhxeghhxxo0r8nw9gjngwugyizr28f7b',
  },
  techCorePacket: {
    label: 'ECE Technical Component Packet',
    href: 'https://utexas.box.com/s/m75ly671ces3z5mgjwpfyt3f5o8woj25',
  },
  techCores: {
    label: 'Texas ECE technical cores',
    href: 'https://www.ece.utexas.edu/academics/undergraduate/techcore',
  },
};

export const overview = {
  lead: 'Texas ECB Honors is a dual degree: a Bachelor of Science in Electrical and Computer Engineering and a Bachelor of Business Administration, both at the honors level, in four years.',
  paragraphs: [
    'Students start honors coursework in their first semester and take it in cohorts of 30 to 40. On the engineering side that means labs and group projects from day one: circuits, embedded systems, software, signals. On the business side it means the Canfield Business Honors core: accounting, finance, statistics, operations, marketing, management and law.',
    'The program ends with a capstone design project that draws on both degrees, completed alongside industry partners.',
  ],
  skills:
    'What comes out is a particular kind of range. ECB students can design a circuit and read a balance sheet, write firmware and write a memo, debug a system and price a decision. They learn to move between a lab bench and a boardroom without changing who they are in either.',
};

export type Course = { code: string; title: string };
export type CourseGroup = { heading: string; note?: string; courses: Course[] };

export const engineeringCourses: CourseGroup[] = [
  {
    heading: 'First-year foundations',
    courses: [
      { code: 'ECE 402H', title: 'Introduction to Electrical Engineering Honors' },
      { code: 'ECE 406H', title: 'Introduction to Computing Honors' },
      { code: 'ECE 412H', title: 'Software Design and Implementation I' },
      { code: 'ECE 419H', title: 'Introduction to Embedded Systems' },
    ],
  },
  {
    heading: 'Core theory',
    courses: [
      { code: 'ECE 411H', title: 'Circuit Theory' },
      { code: 'ECE 351H', title: 'Probability and Random Processes' },
      { code: 'ECE 313H', title: 'Linear Systems and Signals' },
    ],
  },
  {
    heading: 'Design',
    courses: [
      { code: 'ECE 364D', title: 'Introduction to Engineering Design' },
      { code: 'ECE 464H', title: 'Senior Design Project' },
    ],
  },
  {
    heading: 'Specialization',
    note: 'Seven courses in one technical component for ECB students, including an advanced math course and an advanced lab, plus one advanced technical elective.',
    courses: [
      { code: '7 courses', title: 'Advanced technical component' },
      { code: '3 hours', title: 'Advanced technical elective' },
    ],
  },
];

export const businessCourses: CourseGroup[] = [
  {
    heading: 'Leadership and communication',
    courses: [
      { code: 'BA 110G', title: 'Professional Development and Career Planning Honors' },
      { code: 'BA 111G', title: 'Leadership and Innovation Honors' },
      { code: 'BAH 151H', title: 'Honors Lyceum' },
      { code: 'BA 324H', title: 'Business Communication' },
    ],
  },
  {
    heading: 'Data and decisions',
    courses: [
      { code: 'STA 301H', title: 'Introduction to Data Science Honors' },
      { code: 'STA 235H', title: 'Data Science for Business Applications Honors' },
      { code: 'DS 235H', title: 'Introduction to Decision Science Honors' },
      { code: 'MIS 301H', title: 'Introduction to Information Technology Management Honors' },
    ],
  },
  {
    heading: 'Accounting and finance',
    courses: [
      { code: 'ACC 311H', title: 'Financial Accounting Honors' },
      { code: 'ACC 312H', title: 'Managerial Accounting Honors' },
      { code: 'FIN 357H', title: 'Business Finance Honors' },
    ],
  },
  {
    heading: 'Markets and management',
    courses: [
      { code: 'O M 235H', title: 'Operations Management Honors' },
      { code: 'MKT 337H', title: 'Principles of Marketing Honors' },
      { code: 'MAN 336H', title: 'Organizational Behavior Honors' },
      { code: 'MAN 327H', title: 'Entrepreneurship and Innovation Honors' },
      { code: 'MAN 374H', title: 'General Management and Strategy Honors' },
      { code: 'LEB 323H', title: 'Business Law and Ethics Honors' },
    ],
  },
];

/** From the "Honors Requirements" panel of the 2026–2028 flowchart. */
export const honorsRequirements = [
  { value: '16 hours', label: 'of ECE Honors coursework (courses ending in “H”)' },
  { value: '3.3', label: 'engineering GPA' },
  { value: '3.25', label: 'business GPA' },
];

export type TechCore = {
  id: string;
  area: 'Electrical engineering' | 'Computer engineering';
  name: string;
  short: string;
  description: string;
  /** A selection of pre-approved electives from the Technical Component Packet. */
  electives: string[];
};

export const techCores: TechCore[] = [
  {
    id: 'comms',
    area: 'Electrical engineering',
    name: 'Communication, Signal Processing, Networks and Systems',
    short: 'Signals and networks',
    description:
      'Broadly encompasses the principles underlying the design and implementation of systems for information transmission: how information is represented, compressed and transmitted on wired and wireless links, and how communication networks are designed and operated.',
    electives: [
      'ECE 351M Digital Signal Processing',
      'ECE 360K Introduction to Digital Communications',
      'ECE 372N Telecommunication Networks',
      'ECE 445S Real-Time Digital Signal Processing Laboratory',
      'ECE 471C Wireless Communications Laboratory',
    ],
  },
  {
    id: 'circuits',
    area: 'Electrical engineering',
    name: 'Electronics and Integrated Circuits',
    short: 'Chips and circuits',
    description:
      'Involves the design and analysis of the circuits that provide the functionality of a system, including analog and digital integrated circuits, radio frequency circuits, mixed-signal circuits, power electronics and biomedical electronics. A fit for students who want to design chips for computing, telecommunications and signal processing.',
    electives: [
      'ECE 438K Analog Electronics',
      'ECE 460R Introduction to VLSI Design',
      'ECE 460M Digital Systems Design Using HDL',
      'ECE 379K ASIC Design Lab I',
      'ECE 363M Microwave and Radio Frequency Engineering',
    ],
  },
  {
    id: 'energy',
    area: 'Electrical engineering',
    name: 'Energy Systems and Renewable Energy',
    short: 'Power and the grid',
    description:
      'Provides the foundation for a career in electric power systems, generation, grid operation, motors and drives, and renewable energy sources. Involves the study and design of reliable and economic electric power systems, including both traditional and renewable resources.',
    electives: [
      'ECE 369 Power Systems Engineering',
      'ECE 462L Power Electronics Laboratory',
      'ECE 339S Solar Energy Conversion Devices',
      'ECE 362Q Power Quality and Harmonics',
      'ECE 379K Connected Autonomous Electric Vehicles',
    ],
  },
  {
    id: 'fields',
    area: 'Electrical engineering',
    name: 'Fields, Waves and Electromagnetic Systems',
    short: 'Antennas, optics, RF',
    description:
      'Studies different aspects of applied electromagnetics, including antennas, radio wave propagation, microwave and radio frequency circuits, optical components and lasers, and engineering acoustics. For students interested in the physical layer of modern communication and radar systems.',
    electives: [
      'ECE 325K Antennas and Wireless Propagation',
      'ECE 363M Microwave and Radio Frequency Engineering',
      'ECE 348 Laser and Optical Engineering',
      'ECE 361R Radio Frequency Circuit Design',
      'ECE 363N Engineering Acoustics',
    ],
  },
  {
    id: 'nano',
    area: 'Electrical engineering',
    name: 'Nanoelectronics and Nanotechnology',
    short: 'Materials and devices',
    description:
      'Teaches the materials and devices used in modern electronic and optoelectronic systems, with a heavy emphasis on semiconductors. Courses run from p-n junctions and transistors to lasers, nanofabrication, and new directions in computing such as quantum and neuromorphic hardware.',
    electives: [
      'ECE 334K Quantum Theory of Engineering Materials',
      'ECE 340P High-Throughput Nanopatterning',
      'ECE 347 Modern Optics',
      'ECE 339S Solar Energy Conversion Devices',
      'ECE 460R Introduction to VLSI Design',
    ],
  },
  {
    id: 'architecture',
    area: 'Computer engineering',
    name: 'Computer Architecture and Embedded Systems',
    short: 'Processors and devices',
    description:
      'Involves understanding the operation and design of computers on many levels, including the instruction set, microarchitecture and logic design, and the combined hardware and software of embedded systems built to perform specific functions.',
    electives: [
      'ECE 445M Embedded and Real-Time Systems Laboratory',
      'ECE 460M Digital Systems Design Using HDL',
      'ECE 461S Operating Systems',
      'ECE 361C Multicore Computing',
      'ECE 460R Introduction to VLSI Design',
    ],
  },
  {
    id: 'data',
    area: 'Computer engineering',
    name: 'Data Science and Information Processing',
    short: 'Learning from data',
    description:
      'Trains students in information and signal processing, data mining, and decision and control algorithms. Applications include data analytics, machine learning, sound and image processing, and knowledge extraction and actuation.',
    electives: [
      'ECE 361E Machine Learning and Data Analytics for Edge AI',
      'ECE 445S Real-Time Digital Signal Processing Laboratory',
      'ECE 362K Introduction to Automatic Control',
      'ECE 422C Software Design and Implementation II',
      'ECE 361N Information Security and Privacy',
    ],
  },
  {
    id: 'software',
    area: 'Computer engineering',
    name: 'Software Engineering and Design',
    short: 'Software at scale',
    description:
      'Covers the engineering life cycle of software systems: requirement analysis and specification, design, construction, testing, deployment, maintenance and evolution. Courses teach theory, practical methods and tools for building software that meets stakeholder requirements.',
    electives: [
      'ECE 360T Software Testing',
      'ECE 361M Software Architectures',
      'ECE 461S Operating Systems',
      'ECE 360P Concurrent and Distributed Systems',
      'ECE 361Q Requirements Engineering',
    ],
  },
];

/**
 * No student testimonials have been supplied yet.
 * Add entries as { quote, name, classYear, track } and the section renders them.
 */
export const testimonials: { quote: string; name: string; classYear: string; track: string }[] = [];
