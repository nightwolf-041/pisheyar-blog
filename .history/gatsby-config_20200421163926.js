/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteUrl = `http://localhost:9000`

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `pisheyar`,
        subtitle: `وبلاگ پیشه یار`,
        description: `foo`,
        author: `StartDone`,
        siteUrl: siteUrl
    },

    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/assets/images`,
                name: `images`
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: siteUrl,
                sitemap: `${siteUrl}/sitemap.xml`,
                policy: [{ userAgent: '*', disallow: '' }],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: ``,
                head: true
            }
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: ``,
                includeInDevelopment: true
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `pisheyar blog`,
                short_name: `pisheyar`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `./src/assets/images/solar-logo.png`,
                cache_busting_mode: 'none'
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        },
        {
            resolve: 'gatsby-source-rest-api',
            options: {
                endpoints: [
                    // 'https://jsonplaceholder.typicode.com/posts',
                    'http://185.94.97.164/api/Post/GetAllAnonymous'
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [{
                    serialize: ({ query: { site, allRestApiApiPostPosts } }) => {
                        return allRestApiApiPostPosts.edges.map(edge => {
                            return Object.assign({}, edge.node.frontmatter, {
                                description: edge.node.excerpt,
                                date: edge.node.frontmatter.date,
                                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                custom_elements: [{ "content:encoded": edge.node.html }],
                            })
                        })
                    },
                    query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            fields { slug }
                            frontmatter {
                              title
                              date
                            }
                          }
                        }
                      }
                    }
                  `,
                    output: "/rss.xml",
                    title: "Your Site's RSS Feed",
                }, ],
            },
        },
    ],
}