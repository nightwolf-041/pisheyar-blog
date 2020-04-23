/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const autoprefixer = require(`postcss-prefixer`)
const postcssPresetEnv = require(`postcss-preset-env`)

const siteUrl = `http://localhost:9000/`

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
            resolve: "gatsby-plugin-no-sourcemaps",
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
                    serialize: ({ query: { site, allRestApiApiPostGetAllAnonymous } }) => {
                        return allRestApiApiPostGetAllAnonymous.edges.map(edge => {
                            return Object.assign({}, edge.node.posts, {
                                description: edge.node.posts.postAbstract,
                                date: edge.node.posts.postCreateDate,
                                url: site.siteMetadata.siteUrl + edge.node.posts.slug,
                                guid: site.siteMetadata.siteUrl + edge.node.posts.slug,
                                custom_elements: [{ "content:encoded": edge.node.posts.postDescription }],
                            })
                        })
                    },
                    query: `
                    {
                        allRestApiApiPostGetAllAnonymous(sort: { order: DESC, fields: posts___postCreateDate }) {
                        edges {
                          node {
                            posts {
                              postAbstract
                              postDescription
                              postCreateDate
                              slug
                            }
                          }
                        }
                      }
                    }
                  `,
                    output: "/rss.xml",
                    name: `PisheyarBlog`,
                    title: "pisheyar blog RSS Feed",
                }, ],
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    autoprefixer({
                        browsers: ['>0.2%', 'not dead'],
                        grid: true,
                    }),
                    postcssPresetEnv({
                        browsers: ['>0.2%', 'not dead'],
                        stage: 3,
                    }),
                ],
                precision: 3
            }
        },
    ],
}