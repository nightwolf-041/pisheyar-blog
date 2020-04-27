import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';


class PostTemplate extends React.Component {
	render() {
        const background = this.props.data.background.childImageSharp.fluid
        const data = [...this.props.data.allRestApiApiPostGetAllAnonymous.edges]
        let posts = [...data[0].node.posts]
        const { slug } = this.props.pageContext;
        
        let fPost = posts.filter(post => post.slug === slug)
        const {postTitle, postAbstract} = fPost[0]
        // const { previous, next } = this.props.pageContext;

		return (
			<Layout singlePostHeader={true}>
				<SEO title={postTitle} description={postAbstract} />
                <div className="single-post-banner">
                    <Img fluid={background} alt="" />
                </div>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts($slug: String!) {
		allRestApiApiPostGetAllAnonymous(filter: {posts: {elemMatch: {slug: {eq: $slug}}}}) {
            edges {
                node {
                  posts {
                    postTitle
                    postAbstract
                    postCreateDate
                    slug
                  }
                }
              }
        }
        background: file(absolutePath: { regex: "/khale.png/" }) {
            childImageSharp {
                fluid(maxWidth: 1800, maxHeight: 550) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
	}
`;