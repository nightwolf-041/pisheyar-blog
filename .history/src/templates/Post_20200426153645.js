import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import PostLeftside from '../components/postLeftside/PostLeftside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import khale from '../assets/images/khale.png'

class PostTemplate extends React.Component {
	render() {
        
        const background = this.props.data.background.childImageSharp.fluid
        const data = [...this.props.data.allRestApiApiPostGetAllAnonymous.edges]
        let posts = [...data[0].node.posts]
        const { slug } = this.props.pageContext;
        
        let fPost = posts.filter(post => post.slug === slug)
        const {postTitle, postAbstract, postDescription, userFullName} = fPost[0]
        // const { previous, next } = this.props.pageContext;

        
		return (
			<Layout singlePostHeader={true}>
				<SEO title={postTitle} description={postAbstract} />
                <div className="single-post-banner">
                    <div className="single-post-banner-overlay"></div>
                    <Img fluid={background}
                    objectFit="cover"
                    objectPosition="50% 0"
                    alt="" className="single-post-banner-img" />
                    <h1 className="single-post-title">{postAbstract}</h1>
                    <div className="single-post-top-date">3 روز قبل</div>
                </div>
                <div className="single-post-shadow"></div>
                <div className="single-post-main">

                    <PostLeftside />

                    <div className="single-post-main-center">
                        <div dangerouslySetInnerHTML={{ __html: postDescription }} />
                        <p className="single-post-main-center-userName">
                            مطلب از: {userFullName}
                        </p>
                    </div>

                    
                </div>
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
                    postDescription
                    userFullName
                    postCreateDate
                    slug
                  }
                }
              }
        }
        background: file(absolutePath: { regex: "/post-background.jpg/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
	}
`;