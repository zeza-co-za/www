# Download Funnel Architecture

## Static assets

- PDF path: `/downloads/digital-marketing-made-easy-starter-guide.pdf`
- Lead magnet metadata: `lead-magnets/digital-marketing-made-easy-starter-guide-outline.json`
- Download helper: `assets/lead-magnet-download.js`

## Recommended data flow

1. User enters email address.
2. Frontend validates email and consent.
3. Form sends lead to backend or mailing platform.
4. Backend returns success.
5. Frontend redirects user to the PDF download path.
6. Welcome email sends the same PDF link.

## Recommended tracking events

- `lead_magnet_form_view`
- `lead_magnet_submit`
- `lead_magnet_download`
- `lead_magnet_email_confirmed`
