const path = require(`path`)
    // const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/post.js`)
    return graphql(
        `
        {
            allRestApiApiPostGetAllAnonymous {
              edges {
                node {
                  posts {
                    postGuid
                    userFullName
                    postViewCount
                    postLikeCount
                    postTitle
                    postAbstract
                    postDescription
                    postCreateDate
                    postModifyDate
                    postIsShow
                    slug
                  }
                }
              }
            }
          }
          
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const posts = result.data.allRestApiApiPostGetAllAnonymous.edges

        posts.forEach((post, index) => {
            const previous = index === 0 ? null : posts[index - 1].node
            const next = index === posts.length - 1 ? null : posts[index + 1].node

            createPage({
                path: post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next,
                },
            })
        })

        return null
    })
}