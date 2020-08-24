/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const autoprefixer = require(`postcss-prefixer`);
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssBrowserReporter = require(`postcss-browser-reporter`);
const postcssReporter = require(`postcss-reporter`);

const siteUrl = `http://mag.pusheplus.com/`;

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `وبلاگ پیشه یار`,
    description: `وبلاگ رسمی سایت پیشه یار`,
    author: `StartDone`,
    siteUrl: siteUrl,
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
        name: `images`,
      },
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
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: ``,
        includeInDevelopment: true,
      },
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
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'http://185.211.59.237/Post/GetMostViewedAnonymous',
          'http://185.211.59.237/Post/GetIndexesAnonymous',
          'http://185.211.59.237/Post/GetAllAnonymous',
          'http://185.211.59.237/Post/GetMonthlyMostViewed',
          'http://185.211.59.237/Post/GetWeeklyMostViewed',
        ],
      },
    },
    // {
    //     resolve: 'gatsby-source-multi-api',
    //     options: {
    //         apis: [{
    //             prefix: "Posts",
    //             baseUrl: "http://185.211.59.237/Post/",
    //             endpoints: ["GetAllAnonymous", "GetMostViewedAnonymous", "GetMonthlyMostViewed", "GetWeeklyMostViewed", "GetIndexesAnonymous"],
    //         }, ],
    //     },
    // },
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
        feeds: [
          {
            serialize: ({
              query: { site, allRestApiApiPostGetAllAnonymous },
            }) => {
              return allRestApiApiPostGetAllAnonymous.edges.map((edge) => {
                return Object.assign({}, edge.node.posts, {
                  description: edge.node.posts.postAbstract,
                  date: edge.node.posts.postCreateDate,
                  url: site.siteMetadata.siteUrl + edge.node.posts.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.posts.slug,
                  custom_elements: [
                    { 'content:encoded': edge.node.posts.postDescription },
                  ],
                });
              });
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
            output: '/rss.xml',
            name: `PisheyarBlog`,
            title: 'pisheyar blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postcssPresetEnv({
            browsers: ['> 2%', 'last 2 versions', 'Firefox ESR'],
            stage: 3,
          }),
          autoprefixer({
            browsers: ['> 2%', 'last 2 versions', 'Firefox ESR'],
            grid: true,
          }),
        ],
        precision: 3,
      },
    },
  ],
};
