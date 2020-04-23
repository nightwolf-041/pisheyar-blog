import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faBolt } from "@fortawesome/free-solid-svg-icons";
// import Masonry from 'react-masonry-component';
import Masonry from 'react-masonry-css'

import mamad from '../../assets/images/mamad.png'
import rovina from '../../assets/images/rovina.png'
import arya from '../../assets/images/arya.png'
import khale from '../../assets/images/khale.png'

import classes from './masonryGallery.module.css'

const MasonryGallery = () => {

    const breakpointColumnsObj = {
        default: 3,
        1200: 3,
        980: 2,
        630: 1
    };

    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    const masonryOptions = {
        transitionDuration: 0
    };

    return(
        <>
        <div className={classes.masonryGalleryDivider}></div>
        <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            imagesLoadedOptions={imagesLoadedOptions}
        >
        <div className={classes.masonryPostKeeper}>
            <div className={classes.masonryPostImagebox}>
                <div className={classes.masonryPostImageboxInstant}>
                    <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                    <span>آگهی</span>
                </div>
                <div className={classes.masonryPostImageOverlay}></div>
                <img src={khale} alt="" className={classes.masonryPostImage} />
                <div className={classes.masonryPostLikeBox}>
                    <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                    <span>120</span>
                </div>
            </div>

            <div className={classes.masonryPostDarkTitle}>
                <h4>تکنولوژی</h4>
            </div>
            <div className={classes.masonryPostTitle}>
                <h4>
                    گوشی های سامسونگ مرز های خفنی را جابجا کرده اند
                </h4>
            </div>
            <div className={classes.masonryPostSubtitle}>
                <h4>
                    این گوشی ها که به تازگی منتشر شده اند توانستند در جشنواره فجر امسال در مقابل چشمان رهبری دهن همه را باز...
                </h4>
            </div>
            <div className={classes.masonryPostInfo}>
                <span className={classes.masonryPostInfoWhriter}>احمد بنا</span> __
                <span className={classes.masonryPostInfoDate}>25 دی 1397</span>
            </div>
            <div className={classes.masonryPostSocials}>
                <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
            </div>
        </div>

        <div className={classes.masonryPostKeeper}>
            <div className={classes.masonryPostImagebox}>
                <div className={classes.masonryPostImageboxInstant}>
                    <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                    <span>آگهی</span>
                </div>
                <div className={classes.masonryPostImageOverlay}></div>
                <img src={mamad} alt="" className={classes.masonryPostImage} />
                <div className={classes.masonryPostLikeBox}>
                    <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                    <span>120</span>
                </div>
            </div>

            <div className={classes.masonryPostDarkTitle}>
                <h4>تکنولوژی</h4>
            </div>
            <div className={classes.masonryPostTitle}>
                <h4>
                    گوشی های سامسونگ مرز های خفنی را جابجا کرده اند
                </h4>
            </div>
            <div className={classes.masonryPostSubtitle}>
                <h4>
                    این گوشی ها که به تازگی منتشر شده اند توانستند در جشنواره فجر امسال در مقابل چشمان رهبری دهن همه را باز...
                </h4>
            </div>
            <div className={classes.masonryPostInfo}>
                <span className={classes.masonryPostInfoWhriter}>احمد بنا</span> __
                <span className={classes.masonryPostInfoDate}>25 دی 1397</span>
            </div>
            <div className={classes.masonryPostSocials}>
                <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
            </div>
        </div>

        <div className={classes.masonryPostKeeper}>
            <div className={classes.masonryPostImagebox}>
                <div className={classes.masonryPostImageboxInstant}>
                    <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                    <span>آگهی</span>
                </div>
                <div className={classes.masonryPostImageOverlay}></div>
                <img src={arya} alt="" className={classes.masonryPostImage} />
                <div className={classes.masonryPostLikeBox}>
                    <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                    <span>120</span>
                </div>
            </div>

            <div className={classes.masonryPostDarkTitle}>
                <h4>تکنولوژی</h4>
            </div>
            <div className={classes.masonryPostTitle}>
                <h4>
                    گوشی های سامسونگ مرز های خفنی را جابجا کرده اند
                </h4>
            </div>
            <div className={classes.masonryPostSubtitle}>
                <h4>
                    این گوشی ها که به تازگی منتشر شده اند توانستند در جشنواره فجر امسال در مقابل چشمان رهبری دهن همه را باز...
                </h4>
            </div>
            <div className={classes.masonryPostInfo}>
                <span className={classes.masonryPostInfoWhriter}>احمد بنا</span> __
                <span className={classes.masonryPostInfoDate}>25 دی 1397</span>
            </div>
            <div className={classes.masonryPostSocials}>
                <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
            </div>
        </div>

        <div className={classes.masonryPostKeeper}>
            <div className={classes.masonryPostImagebox}>
                <div className={classes.masonryPostImageboxInstant}>
                    <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                    <span>آگهی</span>
                </div>
                <div className={classes.masonryPostImageOverlay}></div>
                <img src={mamad} alt="" className={classes.masonryPostImage} />
                <div className={classes.masonryPostLikeBox}>
                    <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                    <span>120</span>
                </div>
            </div>

            <div className={classes.masonryPostDarkTitle}>
                <h4>تکنولوژی</h4>
            </div>
            <div className={classes.masonryPostTitle}>
                <h4>
                    گوشی های سامسونگ مرز های خفنی را جابجا کرده اند
                </h4>
            </div>
            <div className={classes.masonryPostSubtitle}>
                <h4>
                    این گوشی ها که به تازگی منتشر شده اند توانستند در جشنواره فجر امسال در مقابل چشمان رهبری دهن همه را باز...
                </h4>
            </div>
            <div className={classes.masonryPostInfo}>
                <span className={classes.masonryPostInfoWhriter}>احمد بنا</span> __
                <span className={classes.masonryPostInfoDate}>25 دی 1397</span>
            </div>
            <div className={classes.masonryPostSocials}>
                <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
            </div>
        </div>

        <div className={classes.masonryPostKeeper}>
            <div className={classes.masonryPostImagebox}>
                <div className={classes.masonryPostImageboxInstant}>
                    <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                    <span>آگهی</span>
                </div>
                <div className={classes.masonryPostImageOverlay}></div>
                <img src={rovina} alt="" className={classes.masonryPostImage} />
                <div className={classes.masonryPostLikeBox}>
                    <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                    <span>120</span>
                </div>
            </div>

            <div className={classes.masonryPostDarkTitle}>
                <h4>تکنولوژی</h4>
            </div>
            <div className={classes.masonryPostTitle}>
                <h4>
                    گوشی های سامسونگ مرز های خفنی را جابجا کرده اند
                </h4>
            </div>
            <div className={classes.masonryPostSubtitle}>
                <h4>
                    این گوشی ها که به تازگی منتشر شده اند توانستند در جشنواره فجر امسال در مقابل چشمان رهبری دهن همه را باز...
                </h4>
            </div>
            <div className={classes.masonryPostInfo}>
                <span className={classes.masonryPostInfoWhriter}>احمد بنا</span> __
                <span className={classes.masonryPostInfoDate}>25 دی 1397</span>
            </div>
            <div className={classes.masonryPostSocials}>
                <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
            </div>
        </div>

        <div className={classes.masonryPostKeeper}>
            <div className={classes.masonryPostImagebox}>
                <div className={classes.masonryPostImageboxInstant}>
                    <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                    <span>آگهی</span>
                </div>
                <div className={classes.masonryPostImageOverlay}></div>
                <img src={mamad} alt="" className={classes.masonryPostImage} />
                <div className={classes.masonryPostLikeBox}>
                    <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                    <span>120</span>
                </div>
            </div>

            <div className={classes.masonryPostDarkTitle}>
                <h4>تکنولوژی</h4>
            </div>
            <div className={classes.masonryPostTitle}>
                <h4>
                    گوشی های سامسونگ مرز های خفنی را جابجا کرده اند
                </h4>
            </div>
            <div className={classes.masonryPostSubtitle}>
                <h4>
                    این گوشی ها که به تازگی منتشر شده اند توانستند در جشنواره فجر امسال در مقابل چشمان رهبری دهن همه را باز...
                </h4>
            </div>
            <div className={classes.masonryPostInfo}>
                <span className={classes.masonryPostInfoWhriter}>احمد بنا</span> __
                <span className={classes.masonryPostInfoDate}>25 دی 1397</span>
            </div>
            <div className={classes.masonryPostSocials}>
                <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
            </div>
        </div>

        </Masonry>
        </>
    )
}

export default MasonryGallery