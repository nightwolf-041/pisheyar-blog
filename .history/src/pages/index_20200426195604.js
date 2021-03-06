import React from 'react';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import GridGallery from '../components/galleryGrid/GalleryGrid';
import Slider from '../components/sliderCraousel/Slider';
import MasonryGallery from '../components/masonryGallery/MasonryGallery';

export default ({ data }) => {
  let metaData = data.allSite.edges;
  let siteData = [...metaData[0].node];
  console.log(siteData);

  return (
    <Layout singlePostHeader={false}>
      <SEO title="وبلاگ پیشه یار" description={'postAbstract'} />
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
