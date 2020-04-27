const path = require(`path`)
    // const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/Post.js`)
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

        const data = allRestApiApiPostGetAllAnonymous.edges
        let posts = [...data[0].node.posts]
        console.log(posts)

        posts.forEach((post, index) => {
            const previous = index === 0 ? null : posts[index - 1]
            const next = index === posts.length - 1 ? null : posts[index + 1]
            console.log(posts[index + 1])


        })
        createPage({
            path: `دانشمندان`,
            component: blogPost
        })

        return null
    })
}