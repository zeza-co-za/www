/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  zezaDocs: [
    'overview',
    {
      type: 'category',
      label: 'Resource Assets',
      link: {type: 'generated-index', title: 'Resource Assets', description: 'Downloadable checklists, planners, starter packs and templates for Zeza.co.za.'},
      collapsed: false,
      items: [
        'digital-marketing-made-easy-guide',
        'beginner-digital-marketing-checklist',
        'ai-prompt-starter-pack',
        'content-calendar-template',
        'affiliate-marketing-checklist',
        'online-business-starter-planner',
        'productivity-toolkit'
      ]
    },
    {
      type: 'category',
      label: 'Products and Courses',
      link: {type: 'generated-index', title: 'Products and Courses', description: 'Course, coaching and digital product documentation for Zeza.co.za.'},
      collapsed: true,
      items: [
        'ai-for-beginners-mini-course',
        'online-business-starter-toolkit',
        'beginners-coaching-program',
        'beginner-ebook-bundle',
        'ai-prompt-pack',
        'content-planner',
        'affiliate-starter-kit'
      ]
    },
    {
      type: 'category',
      label: 'Tools and Platforms',
      link: {type: 'generated-index', title: 'Tools and Platforms', description: 'Recommended tool categories and platform implementation guidance.'},
      collapsed: true,
      items: [
        'ai-tools',
        'email-marketing',
        'website-builders',
        'design-tools',
        'productivity-tools',
        'learning-platforms'
      ]
    },
    {
      type: 'category',
      label: 'Articles and Education',
      link: {type: 'generated-index', title: 'Articles and Education', description: 'Beginner-friendly educational article content for the resource centre.'},
      collapsed: true,
      items: [
        'how-to-start-online',
        'ai-tools-every-beginner-should-understand',
        'what-affiliate-marketing-is-and-is-not',
        'how-to-avoid-online-income-scams',
        'building-your-first-digital-product',
        'simple-content-planning-for-beginners'
      ]
    },
    {
      type: 'category',
      label: 'Community and Skool',
      link: {type: 'generated-index', title: 'Community and Skool', description: 'Community integration, Skool group CTA and video embed implementation notes.'},
      collapsed: true,
      items: [
        'skool-community-integration',
        'youtube-training-video-embed',
        'lovable-skool-docs-update-prompt'
      ]
    },
    {
      type: 'category',
      label: 'Lead Magnet Operations',
      link: {type: 'generated-index', title: 'Lead Magnet Operations', description: 'Implementation, release, measurement, governance and handoff documentation.'},
      collapsed: true,
      items: [
        'lead-magnet-release-summary',
        'lead-magnet-implementation-plan',
        'lead-magnet-form-fields',
        'lead-magnet-qa-checklist',
        'lead-magnet-risk-register',
        'lead-magnet-owner-handoff',
        'lead-magnet-approval-notes',
        'lead-magnet-readme-index'
      ]
    },
    {
      type: 'category',
      label: 'Launch and Automation',
      link: {type: 'generated-index', title: 'Launch and Automation', description: 'Launch copy, welcome emails, funnel architecture, production backlog and post-merge steps.'},
      collapsed: true,
      items: [
        'download-funnel-architecture',
        'email-automation-copy',
        'social-launch-copy',
        'production-backlog',
        'next-steps-after-merge',
        'guide-landing-page-copy',
        'guide-table-of-contents'
      ]
    },
    {
      type: 'category',
      label: 'Implementation and QA',
      link: {type: 'generated-index', title: 'Implementation and QA', description: 'Routing, build, PDF, QA and deployment documentation.'},
      collapsed: true,
      items: [
        'github-pages-docusaurus-deployment',
        'docusaurus-migration',
        'docusaurus-docs-checklist',
        'docusaurus-frontmatter-standard',
        'lovable-docusaurus-docs-prompt',
        'clickable-card-asset-system',
        'merge-notes',
        'pdf-upload-note',
        'pdf-quality-check',
        'pdf-reference-notes',
        'content-governance',
        'measurement-plan',
        'runway-cover-note',
        'lovable-clickable-card-update-prompt',
        'lovable-lead-magnet-prompt'
      ]
    }
  ]
};

export default sidebars;
