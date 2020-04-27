import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

import khale from '../assets/images/khale.png'

class PostTemplate extends React.Component {
	render() {
        
        const background = this.props.data.background.childImageSharp.fluid
        const data = [...this.props.data.allRestApiApiPostGetAllAnonymous.edges]
        let posts = [...data[0].node.posts]
        const { slug } = this.props.pageContext;
        
        let fPost = posts.filter(post => post.slug === slug)
        const {postTitle, postAbstract, postDescription} = fPost[0]
        // const { previous, next } = this.props.pageContext;
    console.log(postAbstract);
		return (
			<Layout singlePostHeader={true}>
				<SEO title={postTitle} description={postAbstract} />
                <div className="single-post-banner">
                    <div className="single-post-banner-overlay"></div>
                    <Img fluid={background}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="" className="single-post-banner-img" />
                    <h1 className="single-post-title">{postAbstract}</h1>
                    <div className="single-post-top-date">3 روز قبل</div>
                </div>
                <div className="single-post-left">
                    <h4>منتخب ها</h4>
                    <div className="single-post-left-buttons">
                        <button className="single-post-left-btn-right">هفته</button>
                        <button className="single-post-left-btn-left">ماه</button>
                    </div>
                    <div className="single-post-left-topic-top">
                        <img src={khale} alt="" className="single-post-left-topic-top-img" />
                        <p className="single-post-left-topic-top-title">تکنولوژی</p>
                        <p className="single-post-left-topic-top-subtitle">ماشین برقی تسلا در نمایشگاهی برای دیدن گذاشته شد</p>
                    </div>
                    <div className="single-post-left-topic-bottom"></div>
                </div>
                <div className="single-post-main">
                    <div dangerouslySetInnerHTML={{ __html: postDescription }} />
                </div>
                <div className="single-post-right">
                    
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
                    postCreateDate
                    slug
                  }
                }
              }
        }
        background: file(absolutePath: { regex: "/khale.png/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                }
            }
        }
	}
`;