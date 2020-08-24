import React from 'react';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import GridGallery from '../components/galleryGrid/GalleryGrid';
import Slider from '../components/sliderCraousel/Slider';
import MasonryGallery from '../components/masonryGallery/MasonryGallery';

export default ({ data }) => {
  let metaData = data.allSite.edges;
  let siteData = metaData[0].node.siteMetadata;
  let { title, description } = siteData;

  return (
    <Layout singlePostHeader={false}>
      <SEO title={title} description={description} />
      <div className="homepage-container ">
        <GridGallery />
        <Slider />
        <MasonryGallery />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query index {
    allSite {
      edges {
        node {
          siteMetadata {
            description
            title
            subtitle
          }
        }
      }
    }
  }
`;
