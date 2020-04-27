import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

import khale from '../assets/images/khale.png'


class PostTemplate extends React.Component {
	render() {
        
        const background = this.props.data.background.childImageSharp.fixed
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
                    <div className="single-post-banner-overlay"></div>
                    {/* <img src={khale} alt="" className="single-post-banner-img" /> */}
                    <Img fixed={background}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="" className="single-post-banner-img" />
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
                fixed {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
	}
`;