# SPAIDER Website Design System

The single reference for building **new** pages and components in this repo. Everything here is already implemented — tokens in `app/globals.css`, primitives in `app/components/ui/`. Sources of truth this consolidates: `spaiderwebsite-source-port.md` (history + gotchas) and `page-revamp-playbook.md` (the revamp checklist). The homepage (`app/components/home/` + `app/(PAGES)/page.tsx`) is the fully-revamped reference implementation — when in doubt, copy what a homepage component does.

**The look in one sentence:** near-black "void" background, hairline borders, blocky 2px corners, mono uppercase labels, cyan accent, one gradient phrase per statement heading, generous fluid whitespace.

**Page status (July 2026):** revamped = home, about, careers, our-tech, agents/sagan, ai-foundations, privacy-policy, blog (hub + innospace), invest, request-demo, pricing. Remaining = agents hub (`/agents`) only.

---

## 1. Color tokens

Defined in `:root` and re-exposed as real Tailwind utilities via `@theme inline`, so use `bg-spx-void`, `text-spx-mute`, `border-spx-rule`, etc. directly — never arbitrary `bg-[var(--spx-cyan)]`.

### Core palette (`spx-*`)

| Token | Value | Tailwind | Role |
| --- | --- | --- | --- |
| `--spx-void` | `#07080c` | `spx-void` | Page background |
| `--spx-void-2` | `#0b0d13` | `spx-void-2` | Panel / card background (and card hover) |
| `--spx-ink` | `#f2f5fa` | `spx-ink` | Primary text, solid-button fill |
| `--spx-ink-2` | `#cbd3e1` | `spx-ink-2` | Secondary text (ledes, descriptions) |
| `--spx-mute` | `#939db1` | `spx-mute` | Muted body / label text |
| `--spx-faint` | `#606b7e` | `spx-faint` | Faintest text, index numbers, placeholders |
| `--spx-cyan` | `#59e8f5` | `spx-cyan` | Accent — eyebrow labels, focus, hovers only |
| `--spx-green` | `#6ee7a8` | `spx-green` | Status: live |
| `--spx-amber` | `#eeb95c` | `spx-amber` | Status: in development |
| `--spx-rule` | `rgba(190,198,214,.16)` | `spx-rule` | Standard hairline border |
| `--spx-rule-2` | `rgba(190,198,214,.28)` | `spx-rule-2` | Stronger hairline (hover, emphasized) |
| `--spx-grad` | `linear-gradient(96deg, #8ff7cf 0%, #59e8f5 48%, #7d95ff 100%)` | via `.spx-grad-text` | Gradient statement words |

### Color rules

- **Text ramp, in order:** `spx-ink` (headings) → `spx-ink-2` (ledes/descriptions) → `spx-mute` (body) → `spx-faint` (indexes/idle).
- **Banned in text** (grep for these before calling a page done): `font-montserrat`, `text-white/NN`, `text-neutral-*`, `text-muted` (use `text-spx-mute`).
- Cyan only for accent labels, focus borders, and hovers. Green/amber only for live/dev status.
- Gradient (`.spx-grad-text`) on exactly **one** phrase per heading — usually the emphatic/closing words. Never on short labels ("Powered by"-style).
- One sanctioned exception on record: SAGAN's "RFPs are complex" pain indexes use red `#ff595a` (`spx-index text-[#ff595a]`), by explicit user request.

### Per-page accent scoping (standard, not optional)

`--color-accent` defaults to blue `#1d63e8`. **Every revamped page scopes cyan on its root div:**

```tsx
style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}
```

Do NOT change the global token — unrevamped pages stay blue. Never hardcode blues/cyans inline.

### Semantic tokens

`background`, `foreground`, `muted`, `panel`, `border`, `accent`, `accent-hover`, `destructive`, plus the shadcn set (`primary` = cyan, `secondary`, `ring`, `input`, `card`, `muted-foreground`, …) for admin/legacy surfaces. Status colors: `--color-green #27a644`, `--color-red #eb5757`, `--color-yellow #f0bf00`, `--color-blue #4ea7fc`.

---

## 2. Typography

### Font stack

| Font | Variable / class | Use for |
| --- | --- | --- |
| **Switzer** | body default (`.font-switzer`) | Body copy — the base `font-family` |
| **Outfit** | `--font-outfit` / `font-outfit` | Display headings (`.spx-heading`, `.spx-h3`, hero h1s) |
| **Geist Mono** | `--font-geist-mono` / `font-geist-mono` | All labels, nav links, buttons, indexes, badges, prices |
| **Montserrat** | `--font-montserrat` | Legacy `CeramicButton` / `.glass-btn` only — banned in new text |

Do **not** introduce the source project's Bricolage Grotesque (standing instruction).

### Type classes (stored in `globals.css` — never re-inline these)

| Class | What it is | Spec / notes |
| --- | --- | --- |
| `.spx-heading` | Every top-level section heading (h2) | Outfit, `clamp(1.9rem,4.8vw,3.8rem)`, w600, lh 1, ls −0.015em, max-w 20ch. **Color at call site** (`text-foreground` / `text-white`). |
| `.spx-lede` | Section subtitle under a heading | `clamp(1.08rem,1.4vw,1.22rem)`, lh 1.7, max-w 56ch, `spx-ink-2`. Pair with `mt-3` (tight) or `mt-7` (roomy). |
| `.spx-hero-sub` | Main hero subtitle only | Tighter: lh 1.65. |
| `.spx-eyebrow` | Mono cyan uppercase label | 0.76rem, ls 0.3em, cyan. **Restricted — see eyebrow rule in §7.** |
| `.spx-grad-text` | Gradient statement phrase | `--spx-grad` background-clip. One per heading. |
| `.spx-h3` | Card-level title | Outfit, `clamp(1.45rem,2vw,1.8rem)`, w600, lh 1.15. Color at call site. |
| `.spx-label` | Small mono uppercase meta (roles, dates) | 0.75rem, ls 0.18em, `spx-mute`. Add `text-spx-cyan` for accent labels. |
| `.spx-index` | Faint mono index numbers (`01`, `02`, …) | 0.74rem, ls 0.2em, `spx-faint`. |
| `.spx-body` | Reading copy in cards/lists | 1rem, lh 1.65, `spx-mute`. |

They live in `@layer components`, so a single Tailwind utility overrides a single property (e.g. `spx-label text-spx-cyan`).

### Sizes intentionally NOT in classes

- **Homepage hero h1:** `font-outfit text-[clamp(2.6rem,8.5vw,8rem)] font-semibold leading-[1.08] tracking-[-0.015em]`
- **Page/product hero h1:** `text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight max-w-[15ch]`
- **Product/roster names** (between h3 and h2): `text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold leading-[1.1]` — don't promote to `.spx-heading`.

### Exact micro-typography (don't eyeball new values)

- **Tracking:** desktop nav/dropdown `tracking-[0.14em]` · mobile nav `0.06em` · solid/line buttons `0.12em` · form labels & status tags `0.16em` · "Soon" badges `0.06em` · logo-strip captions `0.08em`.
- **Weights:** 600 for section headings and card h3s; **`font-medium` for small titles** (step titles, accordion titles — user explicitly reverted a semibold bump); 400 (`font-normal`) for all mono/label/button text. Nothing else.
- **Sizes:** nav links / buttons `text-[0.8125rem]` (13px) · status tags `0.7rem` · "Soon" badges `text-[0.5625rem]` (9px) · form labels `text-[0.7rem]` · logo-strip captions `text-[0.65rem]`.
- **Units:** always `rem` for arbitrary type/spacing values. Raw `px` only for genuine 1px hairlines that must stay crisp under zoom.

---

## 3. Layout & spacing

### Fluid gutter, no max-width cap

Sections run edge-to-edge, padded by `--spx-gutter: clamp(20px, 4.5vw, 72px)`. Kill `max-w-7xl`/`max-w-5xl` centered containers. The page-level wrapper (cancels the layout's `px-4`):

```tsx
<div className="w-full min-w-0 overflow-x-clip">
  <div
    className="w-full"
    style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)",
             paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}
  >
```

Full-bleed bands *inside* the gutter: `relative left-1/2 right-1/2 -mx-[50vw] w-screen` + their own `paddingInline: var(--spx-gutter)`.

**Overflow:** `overflow-x-clip`, **never** `overflow-x-hidden` — hidden creates a scroll container and silently breaks `position: sticky` in every descendant.

### Section rhythm — one token drives everything

`--spx-section-gap: clamp(100px, 12vw, 180px)`:

- **Full gap** `mt-[var(--spx-section-gap)]` between distinct sections. This is the floor for regular sections — do not translate source's `.sec-tight` into a reduced gap (0.65× was tried and reads too close).
- **Half gap** `mt-[calc(var(--spx-section-gap)*0.5)]` only when a section truly continues the previous one's narrative, or the previous section ends with large internal bottom padding.
- **Tight coda** (fixed `pt-12`-ish) for something glued to the hero (e.g. logo marquee).
- End the page with `pb-[calc(var(--spx-section-gap)*0.5)]` on the gutter wrapper.
- Every section supplies its **own top margin** — check hidden/responsive variants too (a desktop-only variant missing `mt-*` was a real bug).

### Radius

`rounded-xs` (2px) is **the** radius for every blocky element: buttons, cards, dropdown panels, badges, images, form fields. Circular things (avatars, icon rings, status dots, switch) stay `rounded-full`. No `rounded-lg`/`xl`/`2xl`/`3xl` on spx surfaces — those are in the final grep sweep.

### Borders & surfaces

Hairlines, not shadows: `border-spx-rule` at rest, `border-spx-rule-2` (or `hover:`) for emphasis. Page = `spx-void`; cards/panels = `spx-void-2` (also the hover state for interactive void cells). Shadow tokens exist for legacy shadcn parts; media (video/screenshots) uses `rounded-xs border border-spx-rule-2 shadow-2xl`.

---

## 4. Components

### Button — `ui/button.tsx` (named export `Button`)

- `variant="solid"` — primary CTA. Ink fill, void text, mono uppercase 13px, `tracking-[0.12em]`, `rounded-xs`, hovers to cyan.
- `variant="line"` — secondary CTA. Transparent, inset hairline ring (`--spx-rule-2`), hovers to cyan tint + cyan ring.
- Use via `asChild` + `<Link>`. Never `CeramicButton` (default export = legacy) on revamped pages.
- **No arrow spans in CTA buttons.** The `arrow` prop exists but the user removed arrows everywhere except the homepage hero's "Request a Demo". Plain label only.
- **Two sizes:** big default (`px-[1.625rem] py-4`, hero/page CTAs) vs small nav-cta (`className="h-auto px-5 py-3"`). **`h-auto` is mandatory when overriding sizing** — the `size` prop's default `h-9` silently clips custom padding. (Sizing lives in `compoundVariants` because cva concatenates base → variant → size → compoundVariants; anything in the variant string gets overridden by size's defaults.)
- Inside a row that is itself a `<Link>`, or in a server component: render a styled `<span>` with the solid classes inlined (nested anchors are invalid; `buttonVariants()` can't be imported into server components). Copy from `Fleet.tsx`.

### Badges & status tags

- Status tags: `rounded-xs` hairline pill, mono `0.7rem`/`tracking-[0.16em]` uppercase; green dot + glow = live, amber = "In development" (see `Fleet.tsx` `TAG_STYLES`).
- "Soon" badges: `rounded-xs border-spx-rule-2 text-[0.5625rem] tracking-[0.06em]`.

### Forms — `ui/spx-form.tsx`

Style all spx forms from here, never by copying class strings:

- `SPX_FIELD` — `rounded-xs border-spx-rule bg-spx-void px-4 py-3`, `placeholder:text-spx-faint`, `hover:border-spx-rule-2`, `focus:border-spx-cyan`, `aria-invalid:border-destructive`.
- `SPX_FORM_LABEL` — mono uppercase, `0.7rem` / `tracking-[0.16em]` / `spx-mute`.
- `SpxSelect` — appearance-none native select with a faint `▾`.

Form cards: `bg-spx-void-2 rounded-xs` + hairline. Submit = `solid` Button, alternates = `line`. Deliberately NOT `ui/input`/`ui/textarea` (blue glow + rounded-lg clash).

### Reveal — `ui/reveal.tsx`

Scroll-into-view wrapper for section entries. `<Reveal as="h2" variant="fade-up">` (default) / `fade-down` / `fade-left` / `fade-right` / `scale` / `zoom`. Stagger siblings with `delayMs={i * 55}`-ish. Renders statically under reduced motion.

### Reusable section components (use before building anything new)

| Component | What it is | Used on |
| --- | --- | --- |
| `CtaBand.tsx` | Mini CTA band: bordered void-2 strip, title + copy left, solid button right (NO arrow). `className` overrides the default full-gap margin. | our-tech, sagan, ai-foundations, about, careers |
| `ui/walkthrough.tsx` | Scrollytelling: tall steps left (mono `01` labels, dim→lit), sticky screenshot frame right, crossfade per step. IntersectionObserver center band (`rootMargin: "-45% 0px -45% 0px"`). Sticky offset assumes full-bleed — recompute for capped containers. | sagan, ai-foundations |
| `our-tech/TechStack.tsx` | Exclusive-open layer accordion: hairline-gapped, `+` rotates cyan, grid-rows expand, keyboard accessible | our-tech (pattern reusable) |
| `our-tech/KnowledgeFlow.tsx` | Mono pill chain with `->` separators, green highlight pill | our-tech |
| `ai-foundations/WhatYouGet.tsx` | `.frows` hairline rows `[280px_1fr]`, bold small title + mute body | ai-foundations, privacy-policy pattern |
| `sagan/GenericCopilot.tsx` | Comparison table: ✕ faint vs ✓ green columns, mono header, mobile stacks with cyan labels | sagan |
| `sagan/Metrics.tsx` | Stats grid: big mono value + small mono uppercase label, hairline columns | sagan (pattern reusable) |

**Dead code (do not import; delete when convenient):** `CtaPanel.tsx`, `sagan/KeyFeatures.tsx`, `sagan/SaganCTA.tsx`, `ai-foundations/FinalCTA.tsx`, `our-tech/AnimatedCardText.tsx`, `ui/card.tsx` (consumer-less, kept as generic primitive). The old "Read the brief" PDF links died with SaganCTA/FinalCTA — restore via a CtaBand secondary button only if asked.

### Switch — `ui/switch.tsx`

react-aria switch; selected track uses `bg-primary`. Scope `--color-primary` on a wrapper to recolor per page (pricing does this for cyan).

### Navbar / Footer

Navbar: full-width, transparent → blurred solid on scroll; mono links (`text-[0.8125rem] tracking-[0.14em]`) with sliding underline; `rounded-xs` dropdown panels; mobile = full-screen overlay; nav CTA = small `solid` Button. Nav order: Tech Stack, AI Foundations, Agents▾, Company▾ (About/Blog/Invest), Pricing. Footer: no background, top hairline only, mono text, fluid gutter.

---

## 5. The two hero patterns

- **Page hero** (about, our-tech): left-aligned. H1 `text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight max-w-[15ch]`, gradient on the second line, `spx-lede mt-7`, bottom hairline `border-b border-spx-rule pb-12 sm:pb-16`, top `pt-6 sm:pt-10` (the layout already adds `pt-28` — do NOT stack big paddings).
- **Product hero** (sagan, ai-foundations): centered. `spx-eyebrow` product-tag label (the ONE sanctioned eyebrow use), same h1 scale with gradient on the product word, centered `spx-lede`, ONE solid Button (no arrow), then media at `max-w-5xl` with the breathing glow png behind (`hue-rotate(205deg) saturate(260%) brightness(1.25)`, width 104%, opacity pulse 0.85–1). Media = `<video muted loop playsInline autoPlay={!reduced} poster=…>` with `rounded-xs border border-spx-rule-2 shadow-2xl`. Top padding `pt-8 sm:pt-10 lg:pt-12`, CTA row `mt-7`.
- **Split hero** (invest, request-demo): `lg:grid-cols-[7fr_5fr]` — statement + lede left, form card right, hairline under the whole hero. Stacks under `lg`.

Special cases by user decision: pricing has NO hero at all (opens with toggle + plans at `pt-6 sm:pt-10`; no h1 — flagged, accepted).

---

## 6. Recurring section patterns (copy, don't reinvent)

- **Section head:** `spx-heading` (one `spx-grad-text` phrase) → `spx-lede`. Wrap in `Reveal variant="fade-up"`. (No eyebrow — see §7.)
- **Hairline-gapped card grid** (mission/vision, CTA cards, tenets, pricing): `grid gap-px border border-spx-rule bg-spx-rule` with `bg-spx-void` cells; hover `bg-spx-void-2`. See `NextStep.tsx`.
- **Roster rows** (product/item lists): whole-row `Link`, per-row grid with fixed `11rem` last column so independent row-grids align; hover = cyan wash + `pl` indent + arrow slide. See `Fleet.tsx`.
- **Feature list:** hairline-divided rows with `spx-index` markers — NOT icon-checklists. See `FeatureRow` in `Agents.tsx`.
- **Hairline rows / `.frows`** (legal sections, articles): `[280px_1fr]` grid rows divided by `border-t border-spx-rule`, `spx-index` numbers.
- **Logo strips:** mono faint captions (`font-geist-mono text-[0.65rem] tracking-[0.08em] text-spx-faint`), `spx-label` for the strip title.
- **Pin + scroll-scrub** (`SixGates.tsx`, `GetStarted.tsx`): tall outer container (~N×100vh) + inner `sticky top-0 h-[100svh]`; `useScroll` + `useMotionValueEvent` for continuous values, React state only at discrete thresholds; static reduced-motion fallback. If it won't pin, hunt for an ancestor `overflow-x-hidden` first.
- **Neon/glow utilities** (accent-following, in `globals.css`): `.neon-line-accent`, `.neon-dot-accent`, `.timeline-line`/`.timeline-dot`, `.fade-edges-x`, `.section-wrap` (auto divider), `.hero-illuminated-word`.

---

## 7. Copy voice & content rules

- Sentence case, short declaratives. Statement headings may end with a period ("Fly it or fund it.").
- **No em dashes** (user rule). No spaced hyphens (" - ") as fake dashes. Break into two sentences instead.
- No hype verbs ("Supercharge") — state what it does.
- **Eyebrow rule:** the user removed SECTION eyebrows everywhere they were added (homepage, tech page incl. its hero). Do not add `spx-eyebrow` to sections or page heroes. The one sanctioned use: the small product-tag label at the top of a centered product hero (sagan "RFP & Proposal Assistant", foundations "Enterprise platform").
- Every revamped page ends with a `CtaBand` closer — EXCEPT: careers (user removed it), privacy-policy and blog (never had one; legal/editorial pages read better without a marketing band). Ask before adding a closer to a page that never had one.
- Things tried and removed by the user — **do not re-add:** hero stat strip, pricing hero + "Work with us" closer + "Recommended" plan treatment + `01/02/03` plan indexes, invest "Register interest" section, blog "Upcoming" section.

---

## 8. Motion

- Tokens: `--duration-fast: 0.1s`, `--duration-base: 0.25s`, `--ease-standard: cubic-bezier(0.645,0.045,0.355,1)`.
- Section entries: `Reveal` (`fade-up` default, stagger `delayMs={i * 55}`).
- Hero/section-header stagger (Framer Motion): expo-out ease `[0.16, 1, 0.3, 1]` or `[0.25, 1, 0.5, 1]`.
- Hover transitions ~300–400ms.
- **Always** a `useReducedMotion` / `prefers-reduced-motion` fallback for pinned/animated sections; `Reveal` and the CSS keyframes handle theirs.
- Smooth scroll: Lenis via `SmoothScrollProvider` with `lerp={0.1}` — a deliberate divergence from source's `duration: 1.15` config (duration mode restarts a cold tween per wheel tick and lags on direction reversal under the pinned sections). Don't switch it back.

---

## 9. Process gotchas (when developing)

1. Pulling a *new* value from source CSS (`/media/sohail/Files/spaider-space/spaiderwebsite`): grep **all** definitions of the property — source defines tokens twice and the later "readability pass" block wins the cascade.
2. Any `globals.css` edit ⇒ kill dev server, `rm -rf .next`, `npm run dev`, then verify the compiled `.css` chunk actually contains the change. A `touch` is not enough on this setup.
3. Some `Team.tsx`-era files are CRLF — exact-match Edits fail; use a python replace script.
4. Adding binary media to `public/`? Extend `.git/hooks/pre-commit` and `.git/hooks/format` skip-cases (they already skip `*.mp4`; they mangle other binaries otherwise).
5. After edits: `curl -s -o /dev/null -w "%{http_code}" localhost:3000/<page>` and tail the dev-server log.
6. Final grep sweep per page: `font-montserrat|text-white/|text-muted|text-neutral|rounded-(lg|xl|2xl|3xl)` — each hit is converted or consciously kept.
7. Update `spaiderwebsite-source-port.md` (and the playbook / this doc) when a new convention emerges.

---

## 10. Definition of done (any new/changed page)

- [ ] Fluid gutter layout, no max-width caps, `overflow-x-clip`
- [ ] All headings/ledes/labels on the spx classes; no banned fonts/colors
- [ ] One gradient phrase per major heading; no section eyebrows
- [ ] Buttons are `solid`/`line` (no arrows); radius `rounded-xs`; hairlines `spx-rule`
- [ ] Cyan accent scoped on the page root
- [ ] Section rhythm on `--spx-section-gap` (full/half/coda logic)
- [ ] Copy follows voice rules (no em dashes, sentence case)
- [ ] Reveal/motion on section entries + reduced-motion fallbacks
- [ ] Page compiles, serves 200, no console/dev-log errors
- [ ] Port doc updated
