# Design

## Direction

**A board with two layers.** ECBA's subject is the printed circuit board, and its identity is the pairing of engineering and business. The design takes both literally.

- **Material.** Solder-mask greens from ECBA's own palette board, off-white paper, and small gold marks for pads and vias. Lines turn on 45° chamfers the way traces do. Lists and the current navigation item are marked with vias.
- **Two voices.** Engineering speaks in Archivo, set wide and heavy. Business speaks in Newsreader italic. Every page title pairs one line of each, and the coursework comparison sets ECE courses in the sans and business courses in the serif, so the typography carries the duality instead of a color code.
- **One showpiece.** The hero chip is the only elaborate effect. Everything else is quiet: rules, lists, tables.

What was deliberately avoided: neon green on black, a grid of identical rounded cards, monospace labels, all-caps eyebrows, and fade-in animations on every section.

## The UT header

The top of every page is the University brand bar, followed by the site identity and navigation.

| Property | Value | Source |
| --- | --- | --- |
| Background | Burnt orange `#BF5700` | UT WordPress theme `.ut-header` |
| Height | 39px | Measured on `sites.utexas.edu/ecba` |
| Logo | Official knockout informal horizontal logo, 28px tall, proportions untouched | `knockout_university_informal_horizontal_padded.svg` from the UT WordPress theme |
| Placement | Right edge of the page content | Same theme; UT guidelines place a parent link on the left to mirror the signature |
| Link | `https://www.utexas.edu` | UT theme |

The bar is modeled on the one UT already serves on ECBA's own University-hosted site, rather than the Drupal Kit variant on `ecb.utexas.edu`, because that is the bar ECBA's site will sit under. UT's published website guidelines specify the optional parent link and the footer links but give no bar dimensions, so the live UT theme was used as the reference.

Rules followed: the logo file is used as supplied (no redrawing, recoloring or text imitation), nothing else is placed in the bar, and it has no motion or custom styling. The component is `src/components/UTBrandBar.astro`.

**The transition.** Below the bar the site header is paper-colored with the ECBA trace wordmark and the organization's full name. Its bottom edge is a single dark trace; the current page is marked by a gold via seated on that trace. The institutional orange stops at the bar, and the board begins under the header. Orange is used only in the brand bar and the required-links bar at the very bottom, so it always reads as the University's, never as decoration.

**Footer.** The required links (Emergency Information, Site Policies, Web Accessibility Policy, Web Privacy Policy) and the copyright line sit in a burnt-orange bar, as on UT Drupal Kit sites. Above it, the ECBA footer states that this is a student organization and not the official program site.

**Open point.** Whether a student organization may show the UT logo depends on its registration status. It appears on ECBA's UT-hosted site because the University's theme puts it there. Confirm before publishing anywhere else.

## Tokens

Defined in `src/styles/tokens.css`.

| Group | Tokens |
| --- | --- |
| Greens (from ECBA's palette) | `--pcb-deep #324A20`, `--pcb-dark #485531`, `--pcb-olive #566D2F`, `--pcb-moss #6D9553`, `--pcb-sage #799959`, `--pcb-fresh #71A349`, `--pcb-lime #B5CA76`, `--pcb-mist #CEDDBC`, `--paper #FDFCF6` |
| Derived | `--pcb-ink #18220F` (text), `--pcb-board #263A18` (hero), `--pcb-wash #EEF3E4` (quiet sections) |
| Accent | `--pad-gold #D9AE3C`, marks only, never text on paper |
| UT | `--ut-burnt-orange #BF5700`, `--ut-white` |
| Type | `--font-sans` Archivo Variable (weight and width axes), `--font-serif` Newsreader Variable (optical size) |
| Scale | `--text-xs` to `--text-3xl`, fluid from `--text-lg` up |
| Space | 4px base, `--space-1` to `--space-9`, `--space-section` fluid |
| Shape | `--radius-sm 3px`, `--radius-md 6px`, `--trace 2px`, `--chamfer 14px` |
| Motion | `--dur-fast 140ms`, `--dur-base 240ms`, `--ease-out` |

Classes `.voice-eng` and `.voice-biz` apply the two voices.

## Interaction decisions

- **Hero chip.** A QFP package on a board tile, built from elements and CSS 3D transforms. It turns as the page scrolls using a scroll-driven animation (`animation-timeline: scroll()`), no JavaScript. Browsers without support, and visitors who prefer reduced motion, see it in its resting pose. It is hidden from assistive technology.
- **Signal node.** On Build / Connect / Develop, a gold node rides the wire through the three schematic symbols as the section scrolls. Same technique, same fallback.
- **Marquee.** Runs slowly, pauses on hover and focus, and has a visible pause button (WCAG 2.2.2). With reduced motion it becomes a static wrapping list.
- **Technical cores.** A horizontal scroll-snap strip with previous and next buttons. Each plate is a button that opens a native `<dialog>`: focus moves in, Escape closes, focus returns to the plate, backdrop click closes.
- **Gallery.** Tiles are buttons that open a lightbox dialog with Previous, Next and Close; arrow keys also step.
- **Inquiry form.** No backend exists, so it composes an email draft in the visitor's mail app and says exactly that. Empty required fields get inline errors and focus. It never shows a "sent" message.
- **FAQ.** Native `<details>`.
- **Mobile menu.** A labeled Menu / Close button toggles the navigation; Escape closes it. Without JavaScript the navigation is simply shown.

## Responsive behavior

| Width | Behavior |
| --- | --- |
| 992px and up | Full header with the organization name, two-column sections, hero text beside the chip |
| 896 to 991px | Organization name hidden, navigation inline |
| Below 896px | Menu button, single-column sections, chip below the hero text |
| Below 704px | Facts table and directory table restack as labeled rows, photo grids go to two columns |
| Below 576px | Sponsorship table tightens to fit, footer stacks, UT links stack |

Content width is capped at 75rem with a fluid gutter. No page scrolls horizontally at 320, 390, 820 or 1440px.

## Accessibility

Semantic landmarks, one `h1` per page, ordered headings, a skip link, visible 3px focus outlines (light on dark surfaces), native controls, labeled form fields with described errors, text alternatives for the UT logo and photos, and decorative art hidden from assistive technology. Text color pairs were measured and meet WCAG AA (see `QA.md`).
