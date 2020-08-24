import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import PostLeftside from '../components/postLeftside/PostLeftside';
import PostRightside from '../components/postRightside/PostRightside';

const PostTemplate = (props) => {
  const background = props.data.background.childImageSharp.fluid;
  const data = [...props.data.allRestApiPostGetAllAnonymous.edges];
  let posts = [...data[0].node.posts];
  const { slug } = props.pageContext;

  // let fPost = posts.filter(post => post.slug === slug)
  const { post } = props.pageContext;
  const { previous, next } = props.pageContext;
  console.log(previous);

  return (
    <Layout singlePostHeader={true}>
      <SEO title={title} description={abstract} />

      <div className="single-post-banner">
        <div className="single-post-banner-overlay"></div>
        <Img
          fluid={background}
          objectFit="cover"
          objectPosition="50% 0"
          alt=""
          className="single-post-banner-img"
        />
        <h1 className="single-post-title">{abstract}</h1>
        <div className="single-post-top-date">3 روز قبل</div>
      </div>

      <div className="single-post-shadow"></div>
      <div className="single-post-main">
        <PostLeftside />
        <div className="single-post-main-center">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <p className="single-post-main-center-userName">
            مطلب از: {userFullName}
          </p>
          <div className="single-post-main-buttons-box">
            <Link
              to={`/${previous.slug}`}
              className="single-post-main-prev-button"
            >
              پست قبلی
            </Link>
            <Link to={`/${next.slug}`} className="single-post-main-next-button">
              پست بعدی
            </Link>
          </div>
        </div>
        <PostRightside />
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query Posts($slug: String!) {
    allRestApiPostGetAllAnonymous(
      filter: { posts: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          posts {
            title
            abstract
            description
            userFullName
            modifiedDate
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
