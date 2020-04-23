import React from "react"
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout'
import GridGallery from "../components/galleryGrid/GalleryGrid";
import Slider from "../components/sliderCraousel/Slider";

export default () => (
    <Layout title="وبلاگ">
        <SEO title="وبلاگ پیشه یار" />
        <GridGallery />
        <Slider />
    </Layout>
) 
