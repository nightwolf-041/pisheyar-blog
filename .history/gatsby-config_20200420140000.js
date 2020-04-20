/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `pisheyar`,
        subtitle: `وبلاگ پیشه یار`,
        author: `StartDone`,
        siteUrl: `https://localhost:9000`
    },

    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: `https://localhost:9000`,
                sitemap: `https://localhost:9000/sitemap.xml`,
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
    ],
}