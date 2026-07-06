# Zeza.co.za

Approval-ready demo website and documentation system for **Zeza.co.za**.

## Purpose

Zeza.co.za is positioned as a beginner-friendly global learning hub for people who want to build digital skills, use AI tools, explore affiliate marketing, join a supportive community, and start online business with honest guidance.

The demo is designed for Maria to review and approve the brand direction, target audience, first offers, revenue model, documentation, community path and compliance-safe messaging before production development.

## Included

- Mobile-first responsive landing page
- Clickable resource, course, product, tool and article cards
- SEO and social metadata
- Free resources and lead magnet section
- Skool community CTA and waitlist fallback
- Recommended tools and affiliate disclosure placeholder
- Blog and resource centre topics
- Discovery call form demo
- Privacy Policy, Terms and Disclaimer placeholders
- Branded `404.html` fallback page
- Static `/docs/index.html` fallback page
- Docusaurus documentation under `/docs/`

## Docusaurus docs

This repository includes a Docusaurus documentation system that is deployed under `/docs/` while preserving the existing static homepage.

### Files

- `package.json` — Docusaurus dependencies and scripts
- `docusaurus.config.js` — Docusaurus configuration mounted at `/docs/`
- `sidebars.js` — explicit sidebar categories for all documentation groups
- `src/css/custom.css` — Zeza-branded Docusaurus styling
- `docs/overview.mdx` — Docusaurus documentation landing page
- `docs/index.html` — static fallback page if GitHub Pages serves source files directly
- `docs/github-pages-docusaurus-deployment.md` — deployment architecture notes
- `.github/workflows/docusaurus-build.yml` — GitHub Pages build and deploy workflow

### Commands

```bash
npm install
npm run start
npm run build
```

### Deployment model

The workflow builds Docusaurus, copies the existing static site into a `public/` artifact, then copies the Docusaurus build into `public/docs/`. This allows:

- `/` to serve the Zeza.co.za static homepage.
- `/docs/` to serve Docusaurus documentation.
- `/docs/<document>/` to serve individual documentation pages.

GitHub Pages should be configured to deploy from **GitHub Actions**.

## Compliance notes

This demo deliberately avoids unrealistic income claims. Results vary and depend on effort, skill, consistency, market demand, offer quality, pricing, timing, and implementation.

Before production launch, replace placeholder legal pages with reviewed POPIA/GDPR, refund, payment, course, coaching, affiliate, community and data-processing terms.

## Production next steps

1. Confirm Maria's approval notes.
2. Set GitHub Pages deployment source to GitHub Actions.
3. Confirm the Docusaurus `/docs/` deployment works after merging.
4. Replace placeholder legal pages with reviewed policies.
5. Connect forms to a backend such as Supabase, Netlify Forms, Formspree, HubSpot, or Microsoft Power Automate.
6. Add analytics only after privacy approval.
7. Add production product pages and payment flow.
8. Submit the generated sitemap to Google Search Console.
