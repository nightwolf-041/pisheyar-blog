import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import { Scrollbars } from 'react-custom-scrollbars';
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

                    <div className="single-post-right">
                        <div className="single-post-right-container">
                        <div className="single-post-right-sharebox">
                            <div className="single-post-right-sharebox-top">
                                <span className="single-post-right-sharebox-top-value">8</span>
                                <span className="single-post-right-sharebox-top-label">اشتراک</span>
                            </div>
                            <div className="single-post-right-sharebox-bottom">
                                <div className="single-post-right-sharebox-bottom-part">
                                    <FontAwesomeIcon icon={faInstagram} className="single-post-right-sharebox-bottom-part-icon" />
                                </div>
                                <div className="single-post-right-sharebox-bottom-part2">
                                    <FontAwesomeIcon icon={faWhatsapp} className="single-post-right-sharebox-bottom-part-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="single-post-right-content">
                            <div className="single-post-right-content-top">
                                <div className="single-post-right-content-top-divider"></div>
                                <div className="single-post-right-content-top-contentTitle">مطلب</div>
                                <div className="single-post-right-content-top-contentValue">تکنولوژی</div>
                            </div>
                            <div className="single-post-right-content-bottom">
                                <img src={khale} alt="" className="single-post-right-content-bottom-img" />
                                <img src={khale} alt="" className="single-post-right-content-bottom-img" />
                                <img src={khale} alt="" className="single-post-right-content-bottom-img" />
                            </div>
                        </div>
                        </div>
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