# Swift Fit Communication Insights
## Key Takeaways for Web Redesign

*Extracted from Aug-Dec 2025 communication logs with Swift Fit team*

---

## 1. Official Business Split (Critical)

The company is formally splitting into **two distinct entities**:

| Entity | Focus | Audience |
|--------|-------|----------|
| **Swift Fit** (Core) | Premium B2B corporate wellness | Enterprise HR managers, event planners |
| **Swift Fit Social** | Community events, lifestyle activations | Austin locals, wellness enthusiasts |

**Impact on Redesign:**
- Validates the "Dual-Entry" hero split approach
- Each entity needs distinct visual treatment while sharing brand DNA
- Instagram handle `@swiftfitevents` will be taken over by Swift Fit Social

---

## 2. Target Audience: The HR Manager

> "The typical decision-maker on the corporate side is an HR manager who has been assigned event planning as an additional, often unwanted, responsibility."

**Value Proposition:**
- Provide a "silver platter" solution
- Make the HR manager look good to leadership
- Alleviate stress, not add to it

**Design Implications:**
- Messaging should speak to busy professionals, not fitness enthusiasts
- Emphasize ease, reliability, and ROI
- Progressive disclosure form reduces friction
- Trust signals (client logos) are essential

---

## 3. Current Marketing Problems

Lee described the current state as:
- "Disjointed" and not aligned with premium B2B positioning
- Looks like it's run by a "Gen Z girl"
- "Generic" and failing to connect with target audience
- Requires a "complete rebuild from the ground up"

**What This Means:**
- The dark/industrial aesthetic actively hurts the brand
- Need sophisticated, editorial, high-trust design
- Every element must reinforce "premium corporate sanctuary"

---

## 4. SEO is a Critical Gap

> "The company's website SEO is performing poorly, ranking around 20th for key terms like 'team building' and 'corporate events.'"

**Redesign Must Include:**
- LocalBusiness Schema (Congress Ave address)
- Blog infrastructure for content marketing
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions, Open Graph tags
- Fast page load times (Next.js SSG/SSR)

---

## 5. Video Content is Non-Negotiable

> "High-quality visuals, such as videos on the website, are critical for effectively communicating the company's value to potential corporate clients."

**Video Placement Needs:**
- Hero section (background or embedded)
- Service pages (package previews)
- Testimonial sections
- Case study pages

**Technical Requirements:**
- Videos must work across: Website, LinkedIn, YouTube, Instagram, Email
- Need thumbnails and multiple aspect ratios
- Consider lazy loading for performance

---

## 6. Sales Enablement Focus

The sales team needs the website to support their "Challenger Sale" approach:

**Two Key Pitches:**
1. **Marketing ROI** - Events create shareable content for client's LinkedIn
2. **Budget Reallocation** - Shift existing event spend toward wellness

**Website Must Provide:**
- Downloadable Corporate Brochure (PDF)
- Case studies with measurable outcomes
- Testimonial videos for credibility
- Easy "Request Proposal" flow

---

## 7. Client Logos = Trust Currency

Current enterprise clients include:
- Bumble
- IBM
- Goldman Sachs
- Visa
- TikTok
- Accenture
- Fidelity
- CoinDesk
- Google
- Meta
- JP Morgan

**Implementation:**
- Grayscale logos → color on hover (as specified)
- Infinite scroll marquee on homepage
- Potentially separate "Clients" section on corporate pages

---

## 8. Platform Migration Context

**Current State:** Squarespace
**Planned Migration:** HubSpot (2026)

> "Long-term plan: Migrate from Squarespace to HubSpot in 2026 to centralize reporting, lead tracking, and marketing tools."

**Question for Stakeholders:**
- Is the Next.js build intended as an interim solution?
- Or has the strategy shifted away from HubSpot for the marketing site?
- Consider: Next.js can integrate with HubSpot CRM via API

---

## 9. Future Feature: Client Dashboard

Vision for a "Domino's-style" event progress tracker:
- Event status visibility for clients
- Deposit reminders
- Event checklists
- Post-event feedback loops
- 2026 Client Planning Tool

**Note:** This is a potential Phase 2 feature, not MVP.

---

## 10. Content Strategy Alignment

Videos and photos from events should be repurposed across:
- Website hero/resource sections
- LinkedIn (dedicated corporate handle)
- YouTube
- Instagram (Swift Fit Social)
- Email newsletters
- Pitch decks

**Design Consideration:**
- Build flexible media components that can display various formats
- Consider a "Media Library" or "Gallery" component pattern

---

## Key Quotes to Remember

On brand confusion:
> "To resolve brand confusion and avoid competing in the wrong arena, the company will be split into two separate business lines."

On the new direction:
> "Swift Fit is transitioning from an industrial/fitness aesthetic to 'Austin Organic Luxury.'"

On the target feeling:
> "The goal is to feel like a high-end 'Corporate Sanctuary'—blending the professional reliability of a boutique hotel with the restorative energy of an Austin wellness retreat."

---

## Decisions Made

| Question | Decision |
|----------|----------|
| **Framework** | Next.js 15 (best UX, performance, SEO) |
| **Swift Fit Social** | Lives on swiftfitevents.com (same domain, `/swift-fit-social` route) |
| **Video assets** | Placeholder videos for now |
| **Logo** | Will be added manually to `/public/assets/` |

## Remaining Open Questions

1. **Client logos** - Do we have SVG versions of enterprise client logos?
2. **Threshold360 tour embed** - Is the virtual tour code ready?
3. **HubSpot CRM** - Will forms integrate with HubSpot, or use another system?
