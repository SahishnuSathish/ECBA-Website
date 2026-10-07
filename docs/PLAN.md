# Plan

## Goal

Turn the ECBA planning brief into a working, responsive site that represents the proposed design: a public front end only, with honest placeholders where content does not exist yet.

## Audiences and their tasks

From the brief ("What each reader needs in 60 seconds") and the linked site brief:

| Recruiters and sponsors (primary) | Students (secondary) |
| --- | --- |
| Who are these students, how many, which years? | What is this? Can I join? |
| Where have they worked? | What do I get? |
| How do we engage, and what does it cost? | When and how do I apply? |
| Who do I email? | Who is in it? |

The home page is ordered for the reader who skims (recruiters). The Apply button is in the navigation on every page for the reader who hunts (students).

## Page map

| Page | Job | Core content |
| --- | --- | --- |
| Home | The 60-second pitch | Hero and chip, verified facts, where members work, Build / Connect / Develop, photos, partner invitation, alumni spotlights, apply band |
| Program | Explain the degree | Overview, skills, ECE and business coursework side by side, honors requirements, technical cores with detail dialog, student voices |
| Partners | Turn interest into an email | Who you meet, ways to support, sponsorship packages, example events, inquiry |
| Events | Show momentum | Recurring events, gallery, Instagram |
| People | Show who runs it | Officers, directory preview |
| Apply | Send applicants to the right place | Steps, things to know, FAQ, official links |

Navigation: Program, Partners, Events, People, and an Apply button. A UT brand bar sits above the site header on every page; UT required links sit in the footer.

## Departures from the brief

- **Stack.** The linked site brief recommends building inside UT's WordPress platform and advises against a custom site. This task asked for an implemented prototype in this repository, so it is a standalone Astro site. The trade-off is recorded under "Path to the UT platform".
- **Hero line.** The brief's draft line, "ECB at UT Austin", became the kicker. The headline is "Built on circuits. Fluent in business." so the page says what makes the group different.
- **Proof numbers.** The brief wants four numbers. Only three facts could be verified, so three are shown, each with its source. Internship rate, placement count and events per year are not shown.
- **Company marquee.** Names are text, not logos. Logo permission has not been obtained.
- **Coursework display.** The brief points to an accordion reference. Course descriptions were not available, so courses are grouped lists with official course numbers instead of accordions that would open onto nothing.
- **Tech cores.** "One photo per core" became one drawn plate per core. "Most popular electives" became "approved electives include", because popularity could not be verified.
- **Apply.** No deadline is displayed. The page explains the steps and links to the official admissions page.
- **Directory.** No password box. The directory is shown as a labeled preview with fictional rows.
- **Join vs Apply.** Membership comes with admission to Texas ECB, so the student call to action is "Apply to Texas ECB", and every instance says admission runs through UT.

## Implementation checklist

- [x] Inspect repository, brief, linked resources and UT guidelines
- [x] Astro project, tokens, base layout, self-hosted fonts
- [x] UT brand bar, site header with mobile menu, footer with required UT links
- [x] Home: hero chip (scroll-driven, reduced-motion fallback), facts, marquee with pause, schematic, photos, partner band, alumni, apply band
- [x] Program: overview, coursework layers, honors requirements, technical cores strip and dialogs, student voices state
- [x] Partners: reasons, ways to support, packages table, formats, mailto inquiry form
- [x] Events: recurring events, gallery with lightbox, Instagram link
- [x] People: officer placeholders, directory preview
- [x] Apply: steps, things to know, FAQ
- [x] 404 page, favicon, titles and descriptions
- [x] Type check, build, browser review at desktop, tablet and mobile widths, interaction and keyboard tests, reduced motion
- [x] Documentation and screenshots

## Status

Complete as a design prototype. All routes, menus, dialogs, galleries and calls to action work. Real photography, officer details, alumni spotlights and testimonials are still to be supplied (see `CONTENT.md`).

## Later

Recorded here so they do not hold up the core site:

- **Featured projects**: three cards (problem, build, result). Marked "maybe later" in the brief.
- **Embedded Instagram feed**: needs a third-party widget or Meta API token. A link is used for now.
- **Google Calendar** restricted to UT sign-in: marked "maybe later" in the brief.
- **Live member and alumni directory**: needs real authentication (for example UT EID sign-in through an approved platform) and a private data store. Never ship real member data in this static bundle or its Git history.
- **Sponsorship packet download**: set `packages.packetUrl` in `src/data/partners.ts` once a final public PDF exists.
- **Real form endpoint** for event inquiries, if ECBA wants submissions stored rather than emailed.

## Path to the UT platform

ECBA's site lives on the University Blog Service, which (per the linked brief) allows custom CSS but strips JavaScript, inline SVG and iframes. To move this design there:

- The hero chip, the marquee and the signal node are CSS only and can be pasted into Additional CSS. Inline SVG artwork (board traces, core plates, schematic symbols, logo) must be exported as image files.
- Dialogs, the lightbox, the mobile menu and the inquiry form use small scripts. On UBS they need native equivalents: the theme's own menu, a details/accordion block for core details, a gallery block, and a plain mailto link.
- The UT brand bar and footer links are supplied by the UT theme there and should be left alone.
