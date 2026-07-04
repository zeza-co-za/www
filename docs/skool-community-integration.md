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

## Video embed

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
