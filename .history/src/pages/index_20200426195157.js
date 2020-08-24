import React from 'react';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import GridGallery from '../components/galleryGrid/GalleryGrid';
import Slider from '../components/sliderCraousel/Slider';
import MasonryGallery from '../components/masonryGallery/MasonryGallery';

export default () => (
  <Layout singlePostHeader={false}>
    <SEO title="وبلاگ پیشه یار" description={'postAbstract'} />
    <div className="homepage-container ">
      <GridGallery />
      <Slider />
      <MasonryGallery />
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query Posts($slug: String!) {
    allRestApiApiPostGetAllAnonymous(
      filter: { posts: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
