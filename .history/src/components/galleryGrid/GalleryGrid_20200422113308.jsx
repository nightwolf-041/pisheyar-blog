import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCommentSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import classes from './galleryGrid.module.css'

const gridGallery = () => {

    const { khale } = useStaticQuery(
		graphql`
			query {
				khale: file(absolutePath: { regex: "/khale.png/" }) {
					childImageSharp {
						fixed(width: 60) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`
    );
    const khaleImage = khale.childImageSharp.fixed;
    
    return(
        <div className={classes.gallery}>
            <div className={[classes.gridItem1, classes.gridItem].join(' ')}>

            </div>
            <div className={[classes.gridItem2, classes.gridItem].join(' ')}>

            </div>
            <div className={[classes.gridItem3, classes.gridItem].join(' ')}>

            <Img src={khaleImage} alt="" className={classes.galleryGridImg} />
                <div className={classes.galleryGridOverlay}></div>
                <div className={classes.galleryGridRightDesc}>
                    این دوست عزیزی که میبینید شما در حال بغل کردن اونیکی دوست عزیز ما میباشه
                </div>
                <div className={classes.galleryGridRightInfo}>
                    <div className={classes.galleryGridRightInfoDate}>30 دی 98</div>
                    .
                    <div className={classes.galleryGridRightInfoSeen}>
                        <FontAwesomeIcon icon={faEye} className={classes.galleryGridRightInfoSeenIcon} />
                        <span className={classes.galleryGridRightInfoSeenCount}>345</span>
                    </div>
                    .
                    <div className={classes.galleryGridRightInfoRead}>
                        <FontAwesomeIcon icon={faCommentSlash} className={classes.galleryGridRightInfoReadIcon} />
                        {/* <i className="fab fa-readme top-gallery-right-info-read-icon"></i> */}
                        <span className={classes.galleryGridRightInfoReadCount}>345</span>
                    </div>
                </div>
                <div className="top-gallery-right-socials">
                    <a className="top-gallery-right-socials-link">
                        <i className="fab fa-instagram top-gallery-right-socials-icon"></i>
                    </a>
                    <a className="top-gallery-right-socials-link">
                        <i className="fab fa-telegram-plane top-gallery-right-socials-icon"></i>
                    </a>
                    <a className="top-gallery-right-socials-link">
                        <i className="fab fa-twitter top-gallery-right-socials-icon"></i>
                    </a>
                    <a className="top-gallery-right-socials-link">
                        <i className="fab fa-google top-gallery-right-socials-icon"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default gridGallery