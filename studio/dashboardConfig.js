export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3193c7e5dc6cfeb1d74646',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-keby7oym',
                  apiId: '0e49afdc-cc4b-4f93-af47-705b149a0636'
                },
                {
                  buildHookId: '5e3193c7b9c259b4c83a3cef',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bdyfz3hw',
                  apiId: '9abd1d24-520c-45e3-9dbc-a254851a6142'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahmadsabani18/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bdyfz3hw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
