exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allRestApiPostGetAllAnonymous {
            edges {
                node {
                    posts {
                        postGuid
                        userFullName
                        viewCount
                        likeCount
                        title
                        abstract
                        description
                        modifiedDate
                        isShow
                        slug
                        category {
                            title
                        }
                    }
                }
            }
        }
      }
    `)
    const graphPosts = data.allRestApiPostGetAllAnonymous.edges
    let posts = [...graphPosts[0].node.posts]
    console.log(posts)

    posts.forEach((post, index) => {

        const previous = index === 0 ? null : posts[index - 1]
        const next = index === posts.length - 1 ? null : posts[index + 1]

        actions.createPage({
            path: post.slug,
            component: require.resolve(`./src/templates/Post.js`),
            context: {
                slug: post.slug,
                post: post,
                previous,
                next,
            },
        })
    })
}