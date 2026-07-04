---
id: youtube-training-video-embed
title: YouTube Training Video Embed
description: Responsive YouTube video embed used in the Zeza.co.za community section.
sidebar_position: 3
---

# YouTube Training Video Embed

This page documents the YouTube training video added to the Zeza.co.za community section.

## Video URL

```text
https://www.youtube.com/embed/v95Y2jijYNs?si=I1k07sYvugg7tDgK
```

## Production embed

Use a responsive wrapper rather than a fixed-width iframe.

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

## CSS

```css
.responsive-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 18px;
  overflow: hidden;
  background: #000;
}

.responsive-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
```

## Placement

The video appears inside the homepage Community section as **Featured training preview**. The existing Skool/Mux community video remains available as **Community intro video**.

## Notes

- The iframe uses lazy loading for better page performance.
- The video keeps the strict-origin referrer policy supplied in the original embed.
- The YouTube embed is responsive and mobile-safe.
