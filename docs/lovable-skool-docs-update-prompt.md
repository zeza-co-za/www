---
id: lovable-skool-docs-update-prompt
title: Lovable Skool and Docs Update Prompt
description: Prompt for aligning Lovable with the Zeza.co.za Skool, YouTube, video and docs implementation.
sidebar_position: 2
---

# Lovable Skool and Docs Update Prompt

Use this prompt in Lovable to align the visual demo with the GitHub implementation:

```text
Update the Zeza.co.za demo website with the following:

1. Add a Community section to the homepage.

Community section copy:
A supportive place to learn, ask, build, and celebrate.
The Digital Skills Membership Community is designed for ongoing training, live Q&A sessions, AI tutorials, digital marketing workshops, downloadable resources, networking, and accountability.

2. Add the YouTube training preview video.

Use this YouTube embed URL:
https://www.youtube.com/embed/v95Y2jijYNs?si=I1k07sYvugg7tDgK

Display it as a responsive 16:9 video card titled:
Featured training preview

Use this iframe behaviour:
- lazy loading
- allowfullscreen
- strict-origin-when-cross-origin referrer policy
- no fixed 560px width on mobile

3. Add the Skool group CTA.

URL:
https://www.skool.com/dreamworx-life-3717/about

Button text:
JOIN GROUP

The button must be full-width on mobile, styled as a primary Zeza button, and open the Skool link in a new tab.

4. Add the Mux player video embed using this playback ID:
JNC7COHeYaCv2unnV01dB2GQ5YU00d02WCWZYNfdJCXlLQ

Display it as a responsive 16:9 video card titled:
Community intro video

5. Preserve the waitlist form under the community CTA.
Fields:
- Name
- Email
Button:
Join the waiting list

6. Add a `/docs/` landing page.

The docs page must use a Docusaurus-style experience and navigate through all markdown files in the GitHub docs folder, grouped by:
- Resource Assets
- Products and Courses
- Tools and Platforms
- Articles and Education
- Community and Skool
- Lead Magnet Operations
- Launch and Automation
- Implementation and QA

7. Add a Docs link to the main navigation and footer.

Keep the site mobile-first, accessible, clean, and aligned with Zeza.co.za’s no-hype beginner-friendly positioning.
```
