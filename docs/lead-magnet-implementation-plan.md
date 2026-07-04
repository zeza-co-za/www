# Lead Magnet Implementation Plan

## Goal

Turn the Zeza.co.za lead magnet form into a working download funnel for the **Digital Marketing Made Easy Starter Guide**.

## Recommended user flow

1. Visitor lands on the Free Resources section.
2. Visitor enters email address.
3. Form submission stores the lead in the selected backend or mailing list.
4. Visitor is redirected to the PDF download URL:

```text
/downloads/digital-marketing-made-easy-starter-guide.pdf
```

5. A follow-up welcome email sends the same download link and invites the visitor to the community or discovery call.

## Backend options

- Netlify Forms for quick static capture.
- Formspree for simple email-based lead capture.
- Supabase for structured leads and future dashboard reporting.
- HubSpot or Mailchimp for CRM/newsletter automation.
- Microsoft Power Automate for Outlook, Teams, SharePoint or Dynamics routing.

## Compliance requirements

- Add consent language near the email field.
- Link to Privacy Policy.
- Explain what the subscriber will receive.
- Avoid guaranteed income claims.
- Include affiliate disclosures where recommended tools are monetised.

## Production tasks

- Upload the generated PDF as a binary file.
- Connect the email form.
- Add analytics after privacy approval.
- Test mobile form submission.
- Submit sitemap to Google Search Console.
