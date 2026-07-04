# Zeza.co.za

Approval-ready demo website and documentation system for **Zeza.co.za**.

## Purpose

Zeza.co.za is positioned as a beginner-friendly global learning hub for people who want to build digital skills, use AI tools, explore affiliate marketing, join a supportive community, and start online business with honest guidance.

The demo is designed for Maria to review and approve the brand direction, target audience, first offers, revenue model, documentation, community path and compliance-safe messaging before production development.

## Included

- Mobile-first responsive landing page
- Clickable resource, course, product, tool and article cards
- SEO title, meta description, robots directives, canonical URL, Open Graph tags, and Twitter card tags
- JSON-LD structured data for Organization, WebSite, starter offers, and FAQ
- Free resources / lead magnet section
- Training and course cards
- Digital products shop demo
- Skool community CTA and waitlist fallback
- Recommended tools / affiliate disclosure placeholder
- Blog and resource centre topics
- Discovery call form demo
- Privacy Policy, Terms, and Disclaimer placeholders
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `.nojekyll`

## Docusaurus docs

This repository now includes a Docusaurus documentation system for `/docs/`.

### Files

- `package.json` — Docusaurus dependencies and scripts
- `docusaurus.config.js` — Docusaurus site configuration
- `sidebars.js` — explicit sidebar categories for all documentation groups
- `src/css/custom.css` — Zeza-branded Docusaurus styling
- `docs/overview.mdx` — `/docs/` landing page
- `.github/workflows/docusaurus-build.yml` — build validation workflow

### Commands

```bash
npm install
npm run start
npm run build
```

## Compliance notes

This demo deliberately avoids unrealistic income claims. Results vary and depend on effort, skill, consistency, market demand, offer quality, pricing, timing, and implementation.

Before production launch, replace placeholder legal pages with reviewed POPIA/GDPR, refund, payment, course, coaching, affiliate, community and data-processing terms.

## Production next steps

1. Confirm Maria's approval notes.
2. Verify whether Docusaurus will be deployed as the full site or only the `/docs/` experience.
3. Replace placeholder legal pages with reviewed policies.
4. Connect forms to a backend such as Supabase, Netlify Forms, Formspree, HubSpot, or Microsoft Power Automate.
5. Add analytics only after privacy approval.
6. Add production product pages and payment flow.
7. Submit the generated sitemap to Google Search Console.
