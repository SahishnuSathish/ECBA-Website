# Content: sources, samples and what to verify

Everything on the site is either sourced, clearly marked as sample, or a placeholder. Sources were read on 2026-10-07.

## Sources

| Source | Used for |
| --- | --- |
| `ECBA Website Plan.pdf` (planning brief, not committed) | Page list, draft copy, course lists, contact details |
| Site brief artifact linked from the PDF | Audience split, homepage order, platform constraints |
| `sites.utexas.edu/ecba` | Organization name, UT brand bar format and logo file |
| `ecb.utexas.edu`, `/admissions`, `/academics` | Program description, cohort size, application steps, related links, footer bar format |
| 2026–2028 ECB flowchart (Box, linked from the program's academics page) | Course numbers and titles, honors requirements |
| `ece.utexas.edu/academics/undergraduate/techcore` | Names and descriptions of the eight technical components |
| ECE Technical Component Packet, updated 7.6.26 (Box) | Elective lists, the seven-course requirement for ECB students |
| ECB Sponsorship Packet 2026–2027 (Google Doc linked from the PDF) | Member count, partner reasons, Innovation Collective, packages and prices |
| ECBA Canva board "color palette + logo" | Green palette, draft ECBA wordmark |
| ECBA Canva board "Where is ECB" | Employer and program names |
| UT website guidelines (`umac.utexas.edu/brand-center/visual-identity/website-guidelines/`) | Required footer links, copyright statement |

`brand.utexas.edu/application/web-guidelines/` now redirects to the UMAC brand center, so the UMAC page was used.

## Naming

- The organization's UT-hosted site is titled **Electrical Computer Engineering and Business Association**. That exact wording is used. Its sponsorship packet calls it the **ECB Association**. Confirm the preferred formal name, including whether "Electrical **and** Computer" is intended.
- The academic program is **Texas ECB Honors** (Texas Honors Electrical and Computer Engineering and Business). The site keeps the two apart: the footer, the Apply page and every apply call to action say that ECBA is a student organization and that admission runs through UT.

## Verified facts shown

| Fact | Source |
| --- | --- |
| About 110 members across all cohorts | Sponsorship packet |
| Cohorts of 30 to 40 | `ecb.utexas.edu` |
| Two bachelor's degrees in four years | `ecb.utexas.edu` |
| 16 hours of ECE Honors coursework; 3.3 engineering GPA; 3.25 business GPA | 2026–2028 flowchart |
| Seven upper-division courses in a technical component for ECB students | Technical Component Packet |
| Platinum $2,500 and Gold $1,500, with the listed benefits | Sponsorship packet |
| Application steps and eligibility notes | `ecb.utexas.edu/admissions` |

## Assumptions and draft copy

Written for this prototype and to be confirmed by officers:

- Hero headline, section intros, and the Build / Connect / Develop paragraphs (Build draws on the packet's description of the Innovation Collective).
- Descriptions and timing of the Back2School Social, freshman panel and company events.
- Descriptions of the information session, workshop and coffee chat formats.
- "Ways to support" paragraphs (based on the packet).
- Course titles follow the official flowchart where it differs from the brief (for example "Introduction to Computing Honors", and `BA 110G` / `BA 111G` rather than `BAH`). Senior Design Project (ECE 464H) was added from the flowchart.
- Sponsorship prices are published on the Partners page because the brief asks for a breakdown of the packet. Confirm ECBA wants prices public.
- The packet is a Google Doc titled "Copy of ECB Sponsorship Packet", so it is not linked. The page offers "Request the sponsorship packet" by email instead.

## Sample content (replace before launch)

| Where | What | File |
| --- | --- | --- |
| Home, alumni spotlights | Three fictional people, tagged "Sample" | `src/data/home.ts` |
| People, officers | Six placeholder roles with "Officer name", tagged "Sample" | `src/data/people.ts` |
| People, directory | Seven fictional rows, labeled "Sample data" | `src/data/people.ts` |

Officer role titles are placeholders, not ECBA's actual positions.

## Missing assets

| Asset | Current stand-in | Needed |
| --- | --- | --- |
| Event and community photos | "Photo to come" frames with the intended subject | Real photos, with permission from the people in them |
| Officer headshots | Silhouettes | Headshots and consent |
| Technical core photos | Drawn plates (`CoreArt.astro`) | Optional: photos ECBA has rights to. The Box link in the brief leads to the packet PDF, not photos |
| ECBA logo | SVG redraw of the Canva draft (`EcbaLogo.astro`) | The exported original |
| Company logos | Text names | Written permission per company, or keep text |
| Student testimonials | An honest "collecting stories" state | Quotes with name, class and track; add to `testimonials` in `program.ts` |
| Sponsorship packet file | Email request | Final public PDF or URL in `packages.packetUrl` |

One name on the "Where is ECB" board ("BASE") could not be identified with confidence and was left out, as was Penn Carey Law pending confirmation of how to describe graduate programs.

## Not shown, on purpose

- Application deadlines. The official page lists dates without a year; the site links there instead.
- Upcoming event dates.
- Internship rates, placement counts or events-per-year figures.
- Current partner or sponsor names.

## Before launch

1. Confirm ECBA's registration status and that it may display the UT logo and the University copyright line outside UT's own platform.
2. Confirm the formal name.
3. Replace all sample content and placeholders listed above.
4. Have officers review all draft copy and the published sponsorship prices.
5. Re-check course lists against the current catalog and flowchart.
6. Re-verify every external link. `utexas.edu/web-privacy-policy` redirects to a page that refused automated requests (HTTP 403) during testing; open it in a browser to confirm.
7. Request an accessibility scan from UT if the site will be hosted by the University.
