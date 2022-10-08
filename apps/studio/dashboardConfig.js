export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'BirukMg/sanity-angular-tailwindcss-website'
      }
    },
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
                  buildHookId: '6341d3d000e30a7ffc21add5',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-z6ip9gov',
                  apiId: 'c0fd3f18-ffb9-4431-b15c-2d0499f01462'
                },
                {
                  buildHookId: '6341d3d0a145c40666ad3a8e',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-9u71jny9',
                  apiId: 'bb8c9111-c532-49cb-8f7f-63169dad94f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BirukMg/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-9u71jny9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
