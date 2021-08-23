module.exports = {
  SiteTitle: 'Livia Carneiro',
  Sitelogo: '#',
  SiteLogoText: 'Livia Carneiro',
  SiteAuthor: 'Livia Carneiro',
  SiteDescription: 'Ph.D. Student in Applied Economics and Management',
  defaultDescription: 'Ph.D. Student', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/liviamcarneiro',
    github: 'https://github.com/liviamcarneiro',
    linkedin: 'https://www.linkedin.com/in/livia-mendes-carneiro-a2911b37/',
    university: 'https://sites.google.com/unipv.it/phd-aem/home-page',
  },
  SiteAddress: {
    city: 'Milano',
    region: 'MI',
    country: 'Italy',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'livia.mendescarneiro01@universitadipavia.it',
    phone: 'phone number',
  },
  SiteCopyright: '2021',
};
