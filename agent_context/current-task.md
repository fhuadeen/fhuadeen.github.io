# Current Task

<!-- Task Name (DON'T DELETE THIS COMMENT) -->
Portfolio revamp: resume content, minimal UI, calendar booking, animated SVG logo

# Task Type

<!-- feature|fix|improvement (DON'T DELETE THIS COMMENT) -->
feature

## Status

<!-- Not Started|In Progress|Completed (DON'T DELETE THIS COMMENT) -->
Completed

## Background

<!-- What the task entails. You can also add thoughts and planning (DON'T DELETE THIS COMMENT) -->

The site is a single `index.html` built on the "Steller" Bootstrap 4 theme (jQuery, Bootstrap, themify-icons, custom carousels in `assets/js/{certs,tech,blogs}.js`). The content is out of date compared to `fhuad_balogun_swe_cv_fs.md`: the hero says "Backend | AI/ML | Cloud", there is no experience section, and the portfolio grid uses placeholder images and titles (`folio-*.jpg`, "Project Title", `javascript:void(0)` links).

Inspiration is https://helloabdullah.com. What to borrow: a simple, single-column, card-based layout; a hero with greeting, name, title, short tagline, and a "Book a Free Meeting" CTA; an experience list with filter tabs, where each role shows a logo, title, company link, location, dates, and a description with bolded key phrases; "How I Work" steps; "Ways to Work Together" service cards; and a footer CTA with "Let's Connect" plus a "Copy Email" button.
What not to borrow: the click sounds. There will be no audio anywhere on the site.

### Proposed page structure (top to bottom)

1. **Nav** (sticky, minimal): logo · Experience · Projects · Writing · Resume · **Book a Session** (primary button).
2. **Hero**
   - Left: short greeting, "Fhuad Balogun", title "Senior Software Engineer", sub-line "API · Web · AI/ML · Cloud", a 1–2 sentence tagline taken from the resume summary ("7+ years building scalable, secure systems across AgTech, FinTech, Hospitality, EdTech and multi-tenant ERP").
   - CTAs: **Book a Session** → `https://calendar.app.google/GQVRkgUR2ZghJVWY6` (new tab), secondary **View Experience** (scrolls to the section).
   - Socials row (GitHub, LinkedIn, X, Bluesky, Medium, email).
   - Right: **animated SVG logo** (see below), replacing the 500px PNG.
   - Stats strip: 7+ Years · 2 AWS Certs · N Articles · Industries served.
3. **What I Do / Expertise**: 5 cards taken from the resume summary pillars: Backend Architecture, Cloud & Infra, AI & Data Engineering, Full-Stack & Mobile, Leadership. Each card gets a one-line description and key tech chips.
4. **Experience** (new): timeline/cards for CulturaFI, Foslah Technologies, Medium Biosciences, Determinas, with filter tabs (All · AI/ML · Backend · Cloud/DevOps · Data). Each card shows the role, company link, location, dates, and 3–4 condensed bullets with bolded metrics (87% cloud cost cut, 70% inference cost cut, 99.9% uptime, 40% faster integrations, 5,000+ req/min, 35% engagement). A "Show more" toggle reveals the full bullet list.
5. **Selected Projects** (replaces the placeholder grid): case-study cards built from the resume's client links: LodgeRev hotel booking engine, Asher Bookworm auction/lending, Mitigrit verification pipeline, Nakise skills SaaS + RAG, AlignBio protein engineering tournament (with preprint link), VEC app microservices, CulturaFI behavioural intelligence platform. Each card has a title, a 1-line outcome, stack chips, and a link.
6. **Tech Stack**: keep the existing logos. Show them as a static wrapping grid or a CSS marquee instead of the arrow carousel, which is simpler and needs no JS.
7. **Certifications**: the 2 AWS badges as simple cards (no carousel needed for 2 items).
8. **Testimonials**: keep the existing two.
9. **Writing**: keep the 3 Medium articles as cards, plus a "View all on Medium" link.
10. **Footer CTA**: "Have a project or role in mind?" with **Book a Session**, **Copy Email** (clipboard + small toast, no sound), socials, and copyright.

### Animated SVG logo plan

- Trace `assets/imgs/logo_transparent.png` into a clean vector `assets/imgs/logo.svg` with 2 black slanted bars and the orange "F" shape (2 horizontal bars + slanted stem). These are simple polygons, so hand-written `<polygon>` points will be exact and tiny.
- Hero version is inline SVG, animated with CSS only (no library):
  1. The black slanted bars draw in (stroke-dashoffset), then fill.
  2. The orange F bars slide in from the left with a slight stagger and settle with a gentle overshoot.
  3. Idle state: a slow, subtle float/tilt loop (or a one-shot with a replay on hover).
- Respect `prefers-reduced-motion` by showing the static final state.
- Keep the PNG for the favicon and nav, and also add `logo.svg` as an SVG favicon.

### Technical approach

- **Recommended:** rewrite `index.html` with semantic HTML + one hand-written CSS file (CSS variables, flex/grid) + a small vanilla JS file (nav, filter tabs, copy email, scroll-reveal). Drop jQuery, Bootstrap, and the 3 carousel scripts. The result is lighter, closer to the minimal inspiration, and has no build step, which suits GitHub Pages. The current `gulpfile.js` points to a non-existent `public_html/` folder, so it isn't used today anyway.
- **Alternative:** keep Bootstrap/Steller and restyle on top of it. Less churn, but the result will look less like the reference.
- Brand colours from README: `#ff7a57` (orange) and `#213161` (navy) as accents on a light, neutral background. Font: one clean sans (e.g. Inter via Google Fonts).
- Fully responsive; accessible (alt text, focus states, contrast).
- Keep Google Analytics (`G-7VKP6R44QD`).
- Add basic SEO/social meta: description from the summary, Open Graph/Twitter card, and `Person` JSON-LD with sameAs links.

### Existing bugs to fix along the way

- Email is misspelled `fhuadbalgoun@gmail.com` in the hero socials and the commented contact section. It should be `fhuadbalogun@gmail.com`.
- "Broken Access Control" blog card "Read More" links to the OWASP Top 5 article.
- Duplicate ids (`id="home"` twice, `id="skills"` twice, `id="nothing"` x3 as spacer sections).
- Stray `</a>` tags in the tech stack slides; blog prev arrow is empty.
- Nav label typo "Testmonial".
- Resume content typos to avoid copying: "mult-tenant", "https://github.com/fbalo-mediu".

### Implementation steps

1. Branch `feature/portfolio-revamp` off `dev`.
2. Build `assets/imgs/logo.svg` + the inline animated hero version, and check it against the PNG side by side.
3. Write the new CSS (tokens, layout, components) and JS (nav, filter tabs, copy-email toast, reveal-on-scroll with reduced-motion guard).
4. Rewrite `index.html` section by section with resume content.
5. Swap every "Request a Session" Google Form link for the calendar link.
6. Remove assets that are no longer used (only after you confirm; nothing is deleted without approval).
7. Test locally (`python3 -m http.server`) at mobile, tablet, and desktop widths, and check for console errors, broken links, and Lighthouse scores.
8. Ask for review → commit (conventional message) → merge to `dev` → delete branch → update this file's History.

## Goals

<!-- Goals & requirements (DON'T DELETE THIS COMMENT) -->

- [ ] Site content reflects `fhuad_balogun_swe_cv_fs.md` (title, summary, experience, projects, certifications).
- [ ] Simple, minimal UI inspired by helloabdullah.com, with **no sound effects**.
- [ ] "Book a Session" button(s) linking to `https://calendar.app.google/GQVRkgUR2ZghJVWY6` in the nav, hero, and footer.
- [ ] Animated SVG version of the existing logo in the hero; the original logo is otherwise unchanged.
- [ ] Responsive, accessible, respects reduced motion, and has no console errors.
- [ ] Existing bugs listed above fixed.

## Notes

<!-- Any extra notes (DON'T DELETE THIS COMMENT) -->

**Decisions (answered 2026-10-29):**

1. Rewrite: yes. The page is now plain HTML + `assets/css/main.css` + `assets/js/main.js`, with no Bootstrap, jQuery or carousels.
2. Logo colour: navy `#213161`. Both the new `assets/imgs/logo.svg` and `assets/imgs/logo_transparent.png` (black recoloured to navy) use it.
3. The Google Form is replaced entirely by the calendar link (site + README).
4. No resume/CV link on the site.
5. Light theme only.
6. Projects come from the resume with **no client names or client links**. "AI Recommends the Best Restaurant Deals Around You" is kept.
7. Stat reads "Over 36 / Projects Completed".
8. Stack Overflow is replaced with Substack (`https://substack.com/@fhuadeen`).

**Implementation notes / deviations from the plan:**

- Filter tabs are on **Projects** (All · AI & ML · Backend · Cloud & DevOps · Data), not Experience. With only 4 roles, filtering experience added little.
- Experience names employers (CulturaFI, Foslah, Medium Biosciences, Determinas) but drops the resume's per-client links. The Medium Biosciences role keeps the arXiv preprint link.
- The Auction & Lending project is included, giving 9 project cards for an even 3×3 grid.
- The restaurant project's one-line description ("Location-aware recommendations…") and chips are placeholders. Please confirm or provide real details.
- Icons are an inline SVG sprite, so themify-icons is no longer needed.
- Animated hero logo: navy bars drop in → orange stem grows → orange arms slide in with overshoot → gentle float loop. Turned off under `prefers-reduced-motion`.
- Verified locally with headless Chrome at 1366px and 375px: no missing assets and no horizontal overflow.

**Deleted (approved 2026-10-29):** old Steller theme CSS/SCSS/JS, `assets/vendors/`, `gulpfile.js`, `package.json`, `folio-*`/`blog-*`/`fhuad*` images, and `x`/`bluesky`/`medium` SVGs. Many small icons in `assets/imgs/logos/` are still unused; they were left in place.

**Projects from Foslah's own products** (fosbiz.foslah.com, lodgerev.foslah.com): these are named and linked because they're Foslah products, not third-party clients. The cards are LodgeRev (hotel & shortlet management), LodgeRev Revenue Intelligence, FosBiz Business Platform, Restaurant & Retail POS with AI Ordering, and FosBiz AI Assistant. That makes 12 project cards (4 × 3 grid). The old "AI Recommends the Best Restaurant Deals Around You" card was replaced by the FosBiz restaurant content. Some stack chips on these cards are inferred and need confirming (LLM Agents, Forecasting, Tool Calling, Python/PostgreSQL on FosBiz).

## History

<!-- Keep this updated. Earliest to latest (DON'T DELETE THIS COMMENT) -->

- 2026-10-29: Plan drafted for review.
- 2026-10-29: Answers received; created branch `feature/portfolio-revamp`; implemented rewrite, SVG logo (static + animated), navy PNG logo, calendar booking, README update.
- 2026-10-29: Removed the Experience section (nav link, section, CSS, JS); it lives in the CV only. Hero secondary button now "View Projects". Substack link changed to `https://substack.com/@fhuadeen`.
- 2026-10-29: Deleted unused theme files/assets. Added FosBiz/LodgeRev project cards from the live product sites (12 projects total).
- 2026-10-29: Added "Visit site" links: Behavioural Intelligence Platform + Self-Hosted Cloud Migration → culturafi.com, Identity Verification Pipeline → mitigrit.com, Auction & Lending Platform → asherbookworm.com, Distributed ML Pipeline → medium.bio. Card text still names no clients. Only the Real-Time & Batch Data Platform and Skills Platform with RAG cards have no link.
- 2026-10-29: Committed (62e3eaa), merged to `dev` (d53429c), deleted `feature/portfolio-revamp`. Task completed.
