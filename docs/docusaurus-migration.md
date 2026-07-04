---
id: docusaurus-migration
title: Docusaurus Migration
description: How the Zeza.co.za docs folder has been converted from a static landing page into a Docusaurus documentation system.
sidebar_position: 1
---

# Docusaurus Migration

This document explains the Zeza.co.za documentation migration from a static `/docs/index.html` page to a Docusaurus-powered documentation system.

## What changed

- Added `package.json` with Docusaurus build scripts.
- Added `docusaurus.config.js` for site configuration, branding, navbar, footer, sitemap and docs plugin configuration.
- Added `sidebars.js` with explicit navigation categories for all documentation groups.
- Added `src/css/custom.css` with Zeza-branded Docusaurus styling.
- Added `docs/overview.mdx` as the `/docs/` landing page.
- Removed the old static `docs/index.html` so the Docusaurus docs plugin can own the `/docs/` route.
- Added static Docusaurus assets under `static/assets/`.
- Added a GitHub Actions build workflow for Docusaurus validation.

## Why Docusaurus

Docusaurus gives the documentation area:

- Sidebar navigation.
- Category pages.
- Previous/next pagination.
- Search-ready page structure.
- Better metadata.
- Consistent styling.
- Mobile-friendly docs navigation.
- A scalable way to add new guides, checklists, product docs and implementation notes.

## Documentation groups

The sidebar now groups the Markdown pages into:

- Resource Assets
- Products and Courses
- Tools and Platforms
- Articles and Education
- Community and Skool
- Lead Magnet Operations
- Launch and Automation
- Implementation and QA

## Build commands

```bash
npm install
npm run start
npm run build
```

## Production note

The existing static homepage can remain the public marketing site. The Docusaurus build should be used for the documentation experience under `/docs/`. Confirm the deployment workflow before changing the production publishing target.
