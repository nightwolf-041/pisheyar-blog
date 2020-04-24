import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCommentSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import khalee from '../../assets/images/khale.png'

import classes from './galleryGrid.module.css'

const GridGallery = () => {

    const { allRestApiApiPostGetIndexesAnonymous } = useStaticQuery(
		graphql`
        {
            allRestApiApiPostGetIndexesAnonymous {
                edges {
                    node {
                        posts {
                            postAbstract
                            postViewCount
                            postCreateDate
                            postLikeCount
                            document {
                                source
                            }
                            slug
                        }
                    }
                }
            }                
        }
    `);
    const data = [...allRestApiApiPostGetIndexesAnonymous.edges]
    let posts = [...data[0].node.posts]
    console.log(posts);
    
    return(
        <div className={classes.gridGallery}>

            <div className={classes.gridGalleryLeft}>
                <div className={classes.gridGalleryLeftTop}>
                    <img src={posts[0].document.source} alt="" className={classes.gridGalleryLeftTopImage} />
                    <div className={classes.gridGalleryOverlay}></div>
                    <div className={classes.gridGalleryLeftTopDesc}>
                        ایشونم که داری میبینی خاله اسکارلت جنگ آور مایه
                    </div>
                </div>
                <div className={classes.gridGalleryLeftBottom}>
                    <img src={posts[1].document.source} alt="" className={classes.gridGalleryLeftBottomImage} />
                    <div className={classes.gridGalleryOverlay}></div>
                    <div className={classes.gridGalleryLeftBottomDesc}>
                        اینم به شوماربط نداره به خودمون مربوطه حرف اضافیم نزن میزنما
                    </div>
                </div>
            </div>

            <div className={classes.gridGalleryRight}>
                <img src={posts[2].document.source} alt="" className={classes.gridGalleryRightImg} />
                <div className={classes.gridGalleryOverlay}></div>
                <div className={classes.gridGalleryRightDesc}>
                    این دوست عزیزی که میبینید شما در حال بغل کردن اونیکی دوست عزیز ما میباشه
                </div>
                <div className={classes.gridGalleryRightInfo}>
                    <div className={classes.gridGalleryRightInfoDate}>30 دی 98</div>
                    .
                    <div className={classes.gridGalleryRightInfoSeen}>
                        <FontAwesomeIcon icon={faEye} className={classes.gridGalleryRightInfoSeenIcon} />
                        <span className={classes.gridGalleryRightInfoSeenCount}>3671</span>
                    </div>
                    .
                    <div className={classes.gridGalleryRightInfoRead}>
                        <FontAwesomeIcon icon={faCommentSlash} className={classes.gridGalleryRightInfoReadIcon} />
                        <span className={classes.gridGalleryRightInfoReadCount}>6</span>
                    </div>
                </div>
                <div className={classes.gridGalleryRightSocials}>
                    <a className={classes.gridGalleryRightSocialsLink}>
                        <FontAwesomeIcon icon={faInstagram} className={classes.gridGalleryRightSocialsIcon} />
                    </a>
                    <a className={classes.gridGalleryRightSocialsLink}>
                        <FontAwesomeIcon icon={faTelegramPlane} className={classes.gridGalleryRightSocialsIcon} />
                    </a>
                    <a className={classes.gridGalleryRightSocialsLink}>
                        <FontAwesomeIcon icon={faWhatsapp} className={classes.gridGalleryRightSocialsIcon} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default GridGallery