// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zeza.co.za Docs',
  tagline: 'Digital skills, lead magnets, community and launch documentation',
  favicon: 'assets/favicon.svg',
  url: 'https://zeza.co.za',
  baseUrl: '/',
  organizationName: 'zeza-co-za',
  projectName: 'www',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/zeza-co-za/www/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml'
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'assets/og-zeza.svg',
      metadata: [
        {name: 'keywords', content: 'Zeza, Docusaurus, digital marketing, AI for beginners, affiliate marketing, lead magnet, Skool community, online business'},
        {name: 'description', content: 'Structured Zeza.co.za documentation for resources, lead magnets, toolkits, community, launch and implementation.'}
      ],
      navbar: {
        title: 'Zeza.co.za Docs',
        logo: {
          alt: 'Zeza.co.za',
          src: 'assets/favicon.svg'
        },
        items: [
          {to: '/', label: 'Main Site', position: 'left'},
          {type: 'docSidebar', sidebarId: 'zezaDocs', position: 'left', label: 'Docs'},
          {to: '/assets/pages/resource-library.html', label: 'Resource Library', position: 'left'},
          {href: 'https://www.skool.com/dreamworx-life-3717/about', label: 'Join Group', position: 'right'},
          {href: 'https://github.com/zeza-co-za/www/tree/main/docs', label: 'GitHub', position: 'right'}
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Overview', to: '/docs/'},
              {label: 'Resource Library', to: '/assets/pages/resource-library.html'},
              {label: 'Lead Magnet Plan', to: '/docs/lead-magnet-implementation-plan'}
            ]
          },
          {
            title: 'Community',
            items: [
              {label: 'Join Group', href: 'https://www.skool.com/dreamworx-life-3717/about'},
              {label: 'Main Site', to: '/'}
            ]
          },
          {
            title: 'Repository',
            items: [
              {label: 'GitHub Docs Folder', href: 'https://github.com/zeza-co-za/www/tree/main/docs'}
            ]
          }
        ],
        copyright: `© ${new Date().getFullYear()} Zeza.co.za. Built with Docusaurus.`
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false
        }
      },
      prism: {
        additionalLanguages: ['bash', 'json', 'markdown']
      }
    })
};

export default config;
