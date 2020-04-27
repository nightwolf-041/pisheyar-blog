import React from "react"
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout'
import GridGallery from "../components/galleryGrid/GalleryGrid";
import Slider from "../components/sliderCraousel/Slider";
import MasonryGallery from '../components/masonryGallery/MasonryGallery'

export default () => (
    <Layout title="وبلاگ" singlePostHeader={false}>
        <SEO title="وبلاگ پیشه یار" />
        <div className="homePagecontainer">
            <GridGallery />
            <Slider />
            <MasonryGallery />
        </div>
    </Layout>
) 
