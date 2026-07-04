---
id: skool-community-integration
title: Skool Community Integration
description: Skool group CTA, YouTube training preview, Mux video embed and community waitlist implementation notes.
sidebar_position: 1
---

# Skool Community Integration

## Community URL

```text
https://www.skool.com/dreamworx-life-3717/about
```

## Purpose

The Zeza.co.za community section should direct visitors into the Dreamworx Life Skool group while keeping the Zeza site as the public learning, resource and lead-magnet front door.

## Homepage implementation

The homepage community section includes:

- A supportive community positioning block.
- A responsive YouTube training preview embed.
- A Mux player embed using Skool video playback.
- A visible `JOIN GROUP` CTA that opens the Skool group in a new tab.
- A fallback waiting-list form for visitors who are not ready to join immediately.

## CTA markup direction

Use a full-width button styled consistently with the Zeza brand:

```html
<a class="join-group-btn" href="https://www.skool.com/dreamworx-life-3717/about" target="_blank" rel="noopener">
  <span>JOIN GROUP</span>
</a>
```

## YouTube training preview embed

The YouTube video supplied for the community section is documented in [YouTube Training Video Embed](./youtube-training-video-embed.md).

```html
<div class="responsive-embed">
  <iframe
    src="https://www.youtube.com/embed/v95Y2jijYNs?si=I1k07sYvugg7tDgK"
    title="Zeza.co.za featured YouTube training video"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
```

## Skool / Mux video embed

```html
<mux-player
  default-hidden-captions
  autoplay
  muted
  custom-domain="video.skool.com"
  start-time="0"
  prefer-playback="mse"
  theme="media-theme-skool-desktop"
  style="width:100%;height:auto;aspect-ratio:16/9;"
  playback-id="JNC7COHeYaCv2unnV01dB2GQ5YU00d02WCWZYNfdJCXlLQ">
</mux-player>
```

## Production notes

- Keep the Skool link external and open it in a new tab.
- Use `rel="noopener"` for security.
- Keep the waitlist form as fallback capture.
- Confirm that the Skool video playback policy allows embedding on the production domain.
- Keep YouTube embeds responsive and avoid fixed-width iframe layouts.
