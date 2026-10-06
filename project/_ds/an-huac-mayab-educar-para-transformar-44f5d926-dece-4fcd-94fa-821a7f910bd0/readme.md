# Anáhuac Mayab · Educar para Transformar by Fonatón — Design System

**Context.** Educar para Transformar by Fonatón® is the fundraising and scholarship program of the Universidad Anáhuac Mayab (Mérida, Yucatán, Mexico; part of the Red de Universidades Anáhuac). It funds 100% scholarships for talented young people. The site (HubSpot-built) invites donors ("Quiero donar"), lists beneficiary stories, partner organizations, benefit events and an FAQ.

**Sources.**
- https://merida.anahuac.mx/educar-para-transformar (copy and structure; its CSS was not accessible)
- Anáhuac Online brand guide: https://forlife.anahuac.mx/colores/ and /tipografia-2/ (hex values, Manrope, orange usage rules)
- Anáhuac institutional manual (orange = sun/divine, brown = earth/human)

## Caveats
- **No logo files.** The SVG logos (Fonatón, Anáhuac Mayab) could not be downloaded; the brand name is set in type instead. Upload the logos into `assets/`.
- **Fonts.** Manrope is loaded from Google Fonts (`tokens/typography.css`), not shipped as files. The institutional logotype uses Optima Bold (not included).
- Radii, spacing, shadows and section colors are **inferred** from the brand guide and page structure, not read from the site CSS. "Brown" is approximate.
- UI-kit images are hotlinked from merida.anahuac.mx.

## CONTENT FUNDAMENTALS
- Spanish (Mexico), warm and aspirational; addresses the reader as **tú** ("tu apoyo", "Súmate") and uses **nosotros** for the program ("entregamos becas", "nuestro compromiso").
- Short imperative CTAs: "Quiero donar", "Quiero ser parte del cambio", "Comprar boletos", "Saber más".
- Headlines in sentence case, emotional and concrete: "Tu apoyo transforma vidas", "Conoce a quienes ya transformaron su futuro", "Haz que más sueños se conviertan en historias reales."
- Body copy is institutional but friendly; the program name keeps ® and bold: **Educar para Transformar by Fonatón®**.
- FAQ headings are literal questions with ¿…?; answers are one or two plain sentences.
- Eyebrow labels sit above headings ("Historias de éxito"). Key words may be highlighted in orange.
- No emoji in marketing copy (only 📧 📞 in the FAQ contact line). Exclamations used sparingly ("¡Súmate…!").

## VISUAL FOUNDATIONS
- **Color.** Orange #FF5900 is the single accent for buttons, titles and keywords; Rich Black #040404 and Raisin Black #262626 for dark sections and text; Spanish Gray #9C9C9C for muted text; white backgrounds.
- **Type.** Manrope throughout: ExtraBold (800) headlines with tight tracking, 400–500 body, 700 uppercase eyebrows at .12em.
- **Backgrounds.** Flat color bands: black hero, orange-tint feature section, solid orange CTA band, light-gray FAQ. Real event/portrait photography; no gradients, textures or illustrations.
- **Spacing.** 4px base; sections use 80–96px vertical padding; 1200px container, 24px gutters.
- **Corners.** Pill buttons (999px), large soft cards (20–28px), inputs 12px, photos 20px.
- **Borders and shadows.** Hairline #E6E6E6 dividers (FAQ); light cards use a soft low-opacity black shadow; dark and tinted cards are flat.
- **Hover/press.** Primary button darkens to Orange 600 (active 700); outline buttons fill with orange; ghost text turns orange. Transitions 150ms ease-out. No shrink on press.
- **Transparency/blur.** Not used. Header is solid white and sticky.
- **Imagery.** Warm, candid event photography (gala, golf, fishing, wine & art), people-focused.
- **Layout.** Sticky top nav; centered 1200px content; 3-up card grids; 2-column feature rows.

## ICONOGRAPHY
- Small single-color **orange line SVGs** for calendar, clock and location (hosted on merida.anahuac.mx under `ANAHUAC - Globals/images/`); gray social glyphs (facebook, instagram, linkedin, twitter) in the footer; circular partner icons (PNG).
- No icon font; no emoji as icons. Icons are hotlinked in the UI kit and not copied into `assets/` (downloads were unavailable). If more are needed, use a stroke set such as Lucide in orange (flagged substitution).

## INDEX
- `styles.css` imports `tokens/colors.css`, `typography.css`, `spacing.css`, `base.css`
- `guidelines/` foundation specimen cards
- **Components** (`components/core/`): Button, Input, Badge, Card, Accordion. A standard set was authored because the source defines no component library (intentional addition).
- `ui_kits/fonaton/` click-through home page (Header, Hero, Stories, Orgs, Event, Gallery, FAQ, Contact, Footer)
- `SKILL.md` Agent Skills entry
