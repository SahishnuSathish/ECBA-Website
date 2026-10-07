# ECBA website

A design prototype for the public website of ECBA, the Electrical Computer Engineering and Business Association at The University of Texas at Austin. ECBA is the student organization for students in the Texas ECB Honors dual-degree program.

This is a static, front-end-only site built from the planning brief (`ECBA Website Plan.pdf`, kept out of the repository). It is **not** the official Texas ECB Honors admissions site, and it has not been reviewed or approved by the University.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero with the scroll-turned chip, at-a-glance facts, where members work, Build / Connect / Develop, photos, partner invitation, alumni spotlights, apply band |
| `/program` | The dual degree, ECE Honors and Canfield Business Honors coursework side by side, the eight technical cores with a detail dialog |
| `/partners` | Why partner, ways to support, sponsorship packages, example events, event-hosting inquiry |
| `/events` | Recurring events, photo gallery with lightbox, Instagram link |
| `/people` | Officers (placeholders) and a preview of the planned member and alumni directory |
| `/apply` | How applying to Texas ECB works, with links to the official admissions page |

## Run it

Requires Node 22.12 or newer (built and tested on Node 24.16).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks with astro check, then builds to dist/
npm run preview   # serves the built site
npm run check     # type check only
```

## Edit content

All copy and data live in `src/data/`:

| File | Holds |
| --- | --- |
| `site.ts` | Name, contact details, navigation, UT footer links |
| `home.ts` | Hero copy, facts, employer names, photo slots, sample alumni |
| `program.ts` | Course lists, honors requirements, technical cores, testimonials |
| `partners.ts` | Partner copy, sponsorship packages, event formats |
| `events.ts` | Recurring events, gallery slots |
| `people.ts` | Sample officers and directory rows |
| `apply.ts` | Application steps and FAQ |

Photos: every photo slot accepts a `src`. Add images under `public/photos/`, set `src` on the matching entry, and the placeholder is replaced. See `docs/CONTENT.md` for what is real, what is sample and what must be checked before launch.

## Stack

[Astro](https://astro.build) 7, plain CSS with design tokens, self-hosted variable fonts (Archivo, Newsreader) and a few small inline scripts. No UI framework, no backend, no third-party requests at runtime. Astro was chosen because the site is mostly content: it renders to static HTML, keeps components and content separate, and ships almost no JavaScript.

```
src/
  data/         content (edit here)
  components/   UTBrandBar, SiteHeader, Chip, Marquee, CoreGallery, PhotoGallery, InquiryForm, ...
  layouts/      Base.astro: head, UT brand bar, header, footer
  pages/        one file per route
  styles/       tokens.css (design tokens), global.css
public/         UT logo, favicon
docs/           plan, design notes, content sources, QA record, screenshots
```

## Deploying

The build output in `dist/` is static and can be served from any host.

- **Sub-path hosting** (for example GitHub Pages at `/ECBA-Website`): build with `BASE_PATH=/ECBA-Website npm run build`. Internal links use a base-aware helper (`src/lib/url.ts`).
- **UT Web hosting**: ECBA's current site is on the University Blog Service (`sites.utexas.edu/ecba`), a managed WordPress platform that strips JavaScript, inline SVG and iframes. This prototype cannot be uploaded there as is. See "Path to the UT platform" in `docs/PLAN.md`.
- Before any public launch, work through the checklist in `docs/CONTENT.md`, including confirmation that ECBA may display the UT logo.

## Documentation

- `docs/PLAN.md`: scope, page map, checklist and status
- `docs/DESIGN.md`: visual direction, UT header treatment, tokens, interaction and responsive behavior
- `docs/CONTENT.md`: sources, assumptions, sample content, missing assets
- `docs/QA.md`: checks performed and known limitations
- `docs/screenshots/`: desktop and mobile captures of every page
