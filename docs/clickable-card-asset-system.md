# Clickable Card Asset System

## Purpose

This update turns the Zeza.co.za homepage cards into clickable routes that take visitors to the correlated card content.

## Implemented routing

The homepage now routes into:

```text
/assets/pages/resource-library.html
```

Each homepage card links to a matching section anchor inside the resource library page.

## Resource card anchors

- `/assets/pages/resource-library.html#beginner-digital-marketing-checklist`
- `/assets/pages/resource-library.html#ai-prompt-starter-pack`
- `/assets/pages/resource-library.html#content-calendar-template`
- `/assets/pages/resource-library.html#affiliate-marketing-checklist`
- `/assets/pages/resource-library.html#online-business-starter-planner`
- `/assets/pages/resource-library.html#productivity-toolkit`

## Course and product anchors

- `/assets/pages/resource-library.html#courses-products`

## Tool anchors

- `/assets/pages/resource-library.html#tools`

## Article anchors

- `/assets/pages/resource-library.html#articles`

## Download paths reserved

- `/downloads/beginner-digital-marketing-checklist.pdf`
- `/downloads/ai-prompt-starter-pack.pdf`
- `/downloads/content-calendar-template.pdf`
- `/downloads/affiliate-marketing-checklist.pdf`
- `/downloads/online-business-starter-planner.pdf`
- `/downloads/productivity-toolkit.pdf`

## Production note

The PDF assets have been generated locally and should be uploaded as binary files through a binary-capable deployment workflow. The GitHub connector can create/update text files reliably, but binary PDF upload should be done through GitHub web upload, local git push, hosting file manager, or CI deployment.
