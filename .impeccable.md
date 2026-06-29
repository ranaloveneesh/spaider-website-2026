## Design Context

### Users
CTO or senior program manager at an aerospace or defense company. Evaluating vendors during a procurement cycle on a **desktop browser**. High-stakes, deliberate context - they are comparing platforms, reading between the lines for credibility signals. They have deep domain expertise and zero tolerance for marketing fluff or startup posturing. They've seen a hundred AI product sites and they're not impressed by glowing spheres.

### Brand Personality
**Mission-ready. Authoritative. Frictionless.**

Think: a classified technical briefing document that loads instantly and gets out of the way. Precision over decoration. Every element earns its place. Nothing begs for attention. The product speaks through what it *doesn't* include as much as what it does.

### Aesthetic Direction

**References**: Linear (precise, dark, fast-feeling, purposeful micro-interactions), Resend (clean, editorial, developer-grade, confident), 0.email (minimal, noise-free, radical restraint), giga.ai (focused, purposeful, no-nonsense)

**Anti-references**: Generic AI startup (cyan-on-dark gradients, floating particles, "Powered by AI" badges, orbital ring animations). University research pages (dense academic text walls, institutional beige). Defense contractor websites from 2015 (heavy drop shadows, patriotic stock photography).

**Theme**: Dark - evokes aerospace instrument panels, mission control rooms, the desktop procurement environment where decisions happen. Not dark as a style default. Dark with intent.

**Differentiator the interface must communicate**: Built *specifically* for aerospace, not adapted for it. The interface itself should signal deep domain fluency - through specificity of language, precision of layout, and the absence of anything generic. A visiting CTO should not recognize a single pattern from the last AI startup they evaluated.

### Typography

**Display / Headlines**: Barlow Semi Condensed - geometric condensed grotesque. Evokes aerospace engineering documentation, mission briefs, instrument labeling. Condensed = efficient = frictionless. Use at large scale with wide tracking for hero contexts; tighten tracking at smaller sizes.

**Body / UI text**: Switzer - a refined, clean grotesque that reads well at small product-UI sizes without the ubiquity of Inter. Precise without being cold.

**Rules**:
- No monospace used as a "technical vibes" decoration
- No Playfair Display, Montserrat, Inter, or Manrope (current stack) in future work - evolve toward this new pairing
- Type hierarchy must be decisive: at least 1.4× ratio between adjacent heading levels
- Body text capped at 68ch line length
- All-caps reserved for short labels and section markers only

### Color Direction

**Dominant**: Very dark near-black with the faintest warm undertone - `oklch(8% 0.008 250)`. Not pure cold black, not warm charcoal. Instrument-panel depth.

**Primary accent**: Refined electric blue shifted slightly toward violet - `oklch(62% 0.20 248)`. More distinctive than the current generic enterprise blue (#0070c0), still authoritative and blue-family. Conveys precision, not playfulness.

**Neutrals**: Tinted at low chroma toward the accent hue. Surfaces, borders, and secondary text should all carry a ghost of the brand blue - `oklch(85% 0.012 248)` for light text, `oklch(20% 0.010 248)` for card surfaces.

**Secondary / alert accent**: Understated amber - `oklch(76% 0.13 58)`. Used *only* for mission-critical callouts, warnings, status indicators. Evokes cockpit instrument panels. Never used decoratively.

**Forbidden colors**: Cyan (#00ffff adjacents), purple-to-blue gradients, neon green. These are the AI color tells.

### Design Principles

1. **Precision over decoration** - Every visual element must serve a structural purpose. Glows, particles, and gradients applied as "tech vibes" are disqualifying. If a decorative element can't be justified functionally, cut it.

2. **Frictionless hierarchy** - Information must scan like a technical brief. Clear priority ordering, no visual noise competing for attention. A procurement professional should be able to parse the page in 8 seconds and know exactly what SPAIDER does, for whom, and why it's different.

3. **Earned credibility** - The design signals domain expertise through restraint and specificity, not through claims. Avoid generic "trusted by Fortune 500" patterns. Show aerospace-specific language, metrics, and workflows front and center.

4. **Specificity over generality** - No pattern in the UI should be recognizable from another AI SaaS product. Aerospace-specific contexts (RFP cycles, mission operations, sovereign compliance) should be visually prominent, not buried.

5. **Controlled light sources** - In the dark theme, light comes from *within* the interface elements (accent colors, focus rings, interactive states) - not from ambient halos, background glows, or radial gradients applied to sections. A single well-placed glow carries 10× the weight of glow pollution.
