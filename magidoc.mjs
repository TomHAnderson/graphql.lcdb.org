export default {
  introspection: {
    type: 'url',
    url: 'http://localhost:8080',
  },
  website: {
    template: 'carbon-multi-page',
    output: './public/docs',
    options: {
      appTitle: 'LCDB GraphQL',
      siteRoot: '/docs',
      appLogo: 'https://lcdb.org/images/logo.svg',
      appFavicon: 'https://lcdb.org/favicon.ico',
      pages: [
        {
          title: 'Welcome',
          content: `
LCDB GraphQL Database
=====================

This is the graph database for [lcdb.org](https://lcdb.org).

You are free to use this database for your own purposes.

You may explore the GraphQL with [graphiql](https://graphql.lcdb.org/graphiql) or POST to \`https://graphql.lcdb.org\`
          `,
        },
        {
          title: 'Example Queries',
          content: `
Example Queries
===============

Fetch performances with artist name and sources
-----------------------------------------------

\`\`\`graphql
query MyQuery {
  performances {
    edges {
      node {
        artist {
          name
        }
        date
        year
        venue
        city
        state
        sources {
          edges {
            node {
              id
              comments
              createdAt
            }
          }
        }
      }
    }
  }
}
\`\`\`


Fetch a single source
----------------------

\`\`\`graphql
query MyQuery {
  source(id: 211) {
    comments
    textdoc
    id
    archiveIdentifier
    performance {
      date
      year
      artist {
        name
      }
    }
  }
}
\`\`\`


          `,
        }
      ],
    }
  }
}
