---
id: github-pages-docusaurus-deployment
title: GitHub Pages Docusaurus Deployment
description: Deployment architecture for serving the existing Zeza.co.za static homepage and Docusaurus documentation under /docs/.
sidebar_position: 5
---

# GitHub Pages Docusaurus Deployment

This document explains how Zeza.co.za serves the existing static marketing site and the Docusaurus documentation experience together.

## Problem

The public `/docs/` URL was showing the default GitHub Pages 404 page because GitHub Pages was serving the repository source files directly instead of a built Docusaurus artifact.

Docusaurus source files such as `docusaurus.config.js`, `sidebars.js`, and `docs/overview.mdx` do not automatically become a browsable documentation site until the Docusaurus build runs.

## Target behaviour

- `/` serves the existing Zeza.co.za static homepage.
- `/assets/pages/resource-library.html` serves the existing resource library.
- `/docs/` serves the Docusaurus documentation landing page.
- `/docs/<document>` serves individual Docusaurus documentation pages.
- `/404.html` provides a branded fallback page instead of the default GitHub Pages 404.

## Docusaurus mount strategy

Docusaurus is configured as a mounted documentation app:

```js
baseUrl: '/docs/'
```

The docs plugin is configured to treat the docs overview page as the Docusaurus root:

```js
docs: {
  path: 'docs',
  routeBasePath: '/',
  sidebarPath: './sidebars.js'
}
```

This means the Docusaurus build produces an app that expects to be hosted under `/docs/`.

## Deployment workflow

The GitHub Actions workflow now:

1. Checks out the repository.
2. Installs dependencies using Node 24.
3. Builds Docusaurus with `npm run build`.
4. Creates a `public/` artifact folder.
5. Copies the existing static site files into `public/`.
6. Copies the Docusaurus build output into `public/docs/`.
7. Uploads the combined artifact to GitHub Pages.
8. Deploys it on pushes to `main`.

## GitHub Pages setting required

In the repository settings, GitHub Pages should be configured to deploy from **GitHub Actions**, not directly from the `main` branch source folder.

## Fallback pages

The repository also contains:

- `docs/index.html` — a static fallback docs landing page if the source folder is served directly.
- `404.html` — a branded fallback page for missing routes.

These are safeguards. The intended production experience is the generated Docusaurus app under `/docs/`.

## Validation

After deployment, verify:

- `https://zeza.co.za/`
- `https://zeza.co.za/docs/`
- `https://zeza.co.za/docs/skool-community-integration/`
- `https://zeza.co.za/docs/youtube-training-video-embed/`
- `https://zeza.co.za/assets/pages/resource-library.html`
