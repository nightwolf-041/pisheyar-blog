import React from 'react';
import { graphql, Link } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';


const PostTemplate = () => {

    const {allRestApiApiPostGetAllAnonymous} = useStaticQuery(
        graphql`
        query posts{
            allRestApiApiPostGetAllAnonymous {
                edges {
                    node {
                        posts {
                            postTitle
                            slug
                            document {
                              options {
                                type
                              }
                              source
                            }
                            postLikeCount
                            postAbstract
                            postCreateDate
                            tags {
                              name
                            }
                            userFullName
                          }
                    }
                }
            }
        }
    `)
    const data = [...allRestApiApiPostGetAllAnonymous.edges]
    let posts = [...data[0].node.posts]

    return (
        <Layout>
            <SEO title={title} description={description} slug={slug} />
            <section className="posts">
                <p className="date">{date}</p>
                {content && documentToReactComponents(content.json, options)}
                <ul>
                    <li className="post-navigation">
                        {previous && (
                            <Link to={previous.slug} rel="prev">
                                ← {previous.postTitle}
                            </Link>
                        )}
                    </li>
                    <li className="post-navigation">
                        {next && (
                            <Link to={next.slug} rel="next">
                                {next.postTitle} →
                            </Link>
                        )}
                    </li>
                </ul>
            </section>
        </Layout>
    );
}

export default PostTemplate;