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
    title: `وبلاگ پیشه پلاس`,
    description: `وبلاگ رسمی سایت پیشه پلاس`,
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
        name: `pisheplus blog`,
        short_name: `pisheplus-mag`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/assets/images/tab-logo.png`,
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
            serialize: ({ query: { site, allRestApiPostGetAllAnonymous } }) => {
              const configEdges = allRestApiPostGetAllAnonymous.edges;
              let configPosts = [...configEdges[0].node.posts];
              return configPosts.map((post) => {
                return Object.assign({}, post, {
                  description: post.abstract,
                  date: post.modifiedDate,
                  url: site.siteMetadata.siteUrl + post.slug,
                  guid: site.siteMetadata.siteUrl + post.slug,
                  custom_elements: [{ 'content:encoded': post.description }],
                });
              });
            },
            query: `
                    {
                        allRestApiPostGetAllAnonymous(sort: { order: DESC, fields: posts___modifiedDate }) {
                        edges {
                          node {
                            posts {
                              abstract
                              description
                              modifiedDate
                              slug
                            }
                          }
                        }
                      }
                    }
                  `,
            output: '/rss.xml',
            name: `pisheplusBlog`,
            title: 'pisheplus blog RSS Feed',
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
