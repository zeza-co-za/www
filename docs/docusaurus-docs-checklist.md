---
id: docusaurus-docs-checklist
title: Docusaurus Docs QA Checklist
description: Checklist for reviewing the Zeza.co.za Docusaurus documentation implementation before production deployment.
sidebar_position: 3
---

# Docusaurus Docs QA Checklist

Use this checklist before merging or deploying the Docusaurus documentation system.

## Structure

- Docusaurus config exists at `docusaurus.config.js`.
- Sidebar configuration exists at `sidebars.js`.
- Docs overview exists at `docs/overview.mdx`.
- Static HTML docs index has been removed from the Docusaurus docs route.
- All major Markdown files are represented in the sidebar.

## Styling

- Zeza brand colours are applied.
- Cards are rounded and mobile friendly.
- Sidebar is hideable.
- Dark mode remains readable.
- Tables and code blocks are legible.

## Navigation

- `/docs/` opens the overview page.
- Sidebar categories are grouped logically.
- Navbar links work.
- Footer links work.
- GitHub edit links point to the repository.

## Content

- Each doc has a clear title.
- Each doc has a clear purpose.
- No unrealistic income claims are present.
- Affiliate disclosure requirements remain visible where relevant.
- Skool community links open in a new tab.

## Build

- `npm install` completes successfully.
- `npm run build` completes successfully.
- GitHub Actions build workflow passes.

## Production

- Confirm whether Docusaurus will be deployed as the full site or only for `/docs/`.
- Confirm hosting platform rewrite rules if needed.
- Confirm that existing static marketing pages are not unintentionally replaced.
