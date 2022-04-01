const sidebarUserGuide = [
  ['/guide', 'Introduction'],
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      {
        title: 'Use cases',
        path: '/use-cases',
        collapsable: false,
        children: ['/node-operators', '/merchants', '/payments', '/savings']
      },
      ['/onboarding', 'Onboarding']
    ]
  },
  {
    title: 'Using Zeus',
    collapsable: false,
    children: ['/overview', '/home', '/accounts', '/profiles', '/settings', '/channels', '/requesting', '/activity', '/contacts', '/sending',
    '/routing', '/coins' ]
  },
  {
    title: 'Support and Community',
    collapsable: false,
    children: ['/support', '/troubleshooting', '/community', '/supporters']
  },
]

const sidebarDevelopment = [
  {
    title: 'Development',
    collapsable: false,
    children: ['/Development/']
  }
]

const sidebarContribute = [
  {
    title: 'Contribute',
    path: '/Contribute/',
    collapsable: false,
    children: [
      {
        title: 'Code',
        path: '/Contribute/Dev',
        collapsable: false,
        children: ['/Contribute/DevCode','/Contribute/DevTest']
      },
      {
        title: 'Write',
        path: '/Contribute/Write',
        collapsable: false,
        children: [
          ['/Contribute/WriteSoftware', 'Software Stack'],
          ['/Contribute/WriteDocs', 'Documentation']
        ]
      },
      ['/Contribute/Design', 'Design'],
      ['/Contribute/Translate', 'Translate'],
      ['/Contribute/Misc', 'Miscellaneous']
    ]
  },
]

const sidebarFAQ = [
  {
    title: 'FAQ and common issues',
    path: '/FAQ/',
    collapsable: false,
    children: ['General']
  }
]

module.exports = {
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' }],
  ],
  description: 'Zeus official documentation',
  themeConfig: {
    logo: '/img/zeus-logo-nav.svg',
    docsDir: 'docs',
    sidebarDepth: 0,
    nav: [
      {
        text: 'User Guide',
        link: '/Guide'
      },
      {
        text: 'Developers',
        link: '/Development/'
      },
      {
        text: 'Contribute',
        link: '/Contribute/'
      },
      {
        text: 'FAQ',
        link: '/FAQ/'
      }
    ],
    sidebar: {
      '/Development': sidebarDevelopment,
      '/Contribute': sidebarContribute,
      '/FAQ/': sidebarFAQ,
      '/': sidebarUserGuide
    }
  }
}
