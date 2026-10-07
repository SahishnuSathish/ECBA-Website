# QA record

Checks run on 2026-10-07 on Windows 11, Node 24.16, Astro 7.3.6. Browser checks used headless Chrome driven by a Puppeteer script, against both the dev server and the production build (`npm run build` then `npm run preview`). Only checks that were actually run are listed.

## Build

| Check | Result |
| --- | --- |
| `npm run build` (`astro check` + `astro build`) | Pass: 0 errors, 0 warnings, 0 hints; 7 pages built |
| Build with `BASE_PATH=/ECBA-Website` | Pass: internal links and assets carry the prefix |
| Output size | `dist/` is about 1.1 MB, most of it self-hosted font files |

There is no linter or unit-test suite in this project. The site has no application logic beyond a few small scripts, which are covered by the browser checks below.

## Pages

Every route (`/`, `/program`, `/partners`, `/events`, `/people`, `/apply`, `/404`) was loaded and checked.

| Check | Result |
| --- | --- |
| HTTP 200, no console errors, no failed requests, no broken images | Pass on all pages |
| Horizontal overflow at 1440, 820, 390 and 320px | None (320px checked on Home, Program, Partners) |
| One `h1`, no skipped heading levels, one `main`, `lang="en"` | Pass on all pages |
| Unique title and a meta description | Pass on all pages |
| Images have alt text; links and buttons have accessible names | Pass on all pages |
| All internal links and `#anchors` resolve | Pass |

## Interaction

| Check | Result |
| --- | --- |
| Mobile menu is collapsed by default, opens on tap, marks the current page | Pass |
| Mobile menu: Escape closes and returns focus to the button; links navigate | Pass |
| Without JavaScript the navigation is visible | Pass |
| Skip link is the first tab stop and becomes visible; UT brand bar link is second | Pass |
| Technical core dialog opens from the keyboard, focus moves inside, shows five electives | Pass |
| Dialog closes with Escape (focus returns to the card), the close button and a backdrop click | Pass |
| Dialog fits a 390 × 844 viewport | Pass |
| Cores strip scrolls with the next arrow | Pass |
| Gallery lightbox opens, steps with arrow keys and buttons, wraps, closes with Escape | Pass |
| Marquee runs; pause button pauses it and updates its label and pressed state | Pass |
| Hero chip turns as the page scrolls | Pass (see finding below) |
| Reduced motion: chip, marquee and signal node are static; all 29 names are listed | Pass |
| Inquiry form: empty submit shows field errors, focuses the first one, shows no success message | Pass |
| Inquiry form: valid submit creates a `mailto:` draft to utexasecba@gmail.com with the entered details | Pass |

## Findings fixed during review

- **Scroll animation broke in the production build.** The CSS minifier merged `animation-timeline` into the `animation` shorthand, which browsers reject, so the chip stayed still in the built site while working in development. The timeline now lives in a separate rule. Verified against the preview build.
- **Horizontal overflow** on Program (desktop) and Partners (mobile), caused by visually hidden text escaping scroll containers. Fixed.
- Astro dropped spaces between text and inline links in several sentences. Fixed.
- Hero headline wrapped to four lines; the sponsorship table did not fit a phone; two photo grids left gaps. Fixed.
- Dialog focus now lands on the Close button first.

## Color contrast

Computed with the WCAG formula from the token values.

| Pair | Ratio |
| --- | --- |
| Body text on paper | 16.0 |
| Soft text on paper / on wash | 8.1 / 7.4 |
| Links on paper / on wash | 7.6 / 6.9 |
| Olive labels on wash | 5.1 |
| Paper / lime / mist on the hero board | 12.0 / 6.9 / 8.6 |
| Paper / lime / mist on deep green | 9.6 / 5.5 / 6.9 |
| Paper on the olive apply band | 5.6 |
| Ink on the lime button | 9.2 |
| White on UT burnt orange | 4.6 |
| Placeholder captions on sage / mist | 5.1 / 5.6 |
| Error text on paper | 8.7 |

All text pairs meet AA (4.5:1). Step numerals on the Apply page are 3.1:1; they are large, decorative and hidden from assistive technology, and each step has a text heading.

## External links

Requested from a script on 2026-10-07.

| Link | Result |
| --- | --- |
| `utexas.edu`, `ecb.utexas.edu` (home, admissions, academics), `ece.utexas.edu`, McCombs CBHP | 200 |
| Emergency Information | 200 (redirects to `longhornalert.utexas.edu`) |
| Site Policies | 200 |
| Web Accessibility Policy | 200 (redirects to UT's digital accessibility page) |
| Web Privacy Policy | **403 to the script** after redirecting to `tech.utexas.edu`. This is the URL UT's own sites use; confirm in a browser |
| Flowchart and Technical Component Packet (Box) | 200 |
| Instagram `@utexasecba` | 200, but Instagram redirects signed-out requests to its login page, so the profile itself was not confirmed |

## Visual review

Full-page captures of every page were reviewed at 1440px and 390px, plus the open mobile menu, a core dialog at both sizes, the lightbox and the reduced-motion state. They are in `docs/screenshots/`.

## Not tested

- Firefox and Safari. The scroll-driven chip and node are expected to stay static where `animation-timeline` is unsupported; this fallback was confirmed by reading the `@supports` rule, not in those browsers.
- Screen readers (NVDA, JAWS, VoiceOver). Structure and names were checked programmatically only.
- Real phones and tablets; mobile checks used emulated viewports.
- A real mail client receiving the inquiry draft. The generated `mailto:` link was inspected, not opened.
- Automated accessibility scanners (axe, WAVE, Acquia Optimize) and Lighthouse were not run.
- Browser zoom at 200% and forced-colors mode.
- The Claude-in-Chrome extension was used for source research and the first look at the hero; its screenshots stopped working when the tab went to the background, so the review moved to headless Chrome.

## Known limitations

- Photography, officer details, alumni spotlights and testimonials are placeholders or samples (see `CONTENT.md`).
- The inquiry form depends on the visitor having a mail app configured. A direct email link sits beside it.
- The technical core dialogs, lightbox and mobile menu need JavaScript. Without it the menu stays open and all page content is readable, but core details and the lightbox are unavailable.
- The site cannot be uploaded to UT's WordPress platform as built (see `PLAN.md`).
