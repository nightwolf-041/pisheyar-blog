import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
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
    
    return(
        <div className={classes.gridGallery}>

            <div className={classes.gridGalleryLeft}>
                <div className={classes.gridGalleryLeftTop}>
                    <img src={posts[0].document.source} alt="" className={classes.gridGalleryLeftTopImage} />
                    <div className={classes.gridGalleryOverlay}></div>
                    <div className={classes.gridGalleryLeftTopDesc}>
                        {posts[0].postAbstract}
                    </div>
                </div>
                <div className={classes.gridGalleryLeftBottom}>
                    <img src={posts[1].document.source} alt="" className={classes.gridGalleryLeftBottomImage} />
                    <div className={classes.gridGalleryOverlay}></div>
                    <div className={classes.gridGalleryLeftBottomDesc}>
                        {posts[1].postAbstract}
                    </div>
                </div>
            </div>

            <div className={classes.gridGalleryRight}>
                <img src={posts[2].document.source} alt="" className={classes.gridGalleryRightImg} />
                <div className={classes.gridGalleryOverlay}></div>
                <div className={classes.gridGalleryRightDesc}>
                    {posts[2].postAbstract}
                </div>
                <div className={classes.gridGalleryRightInfo}>
                    <div className={classes.gridGalleryRightInfoDate}>{posts[2].postCreateDate}</div>
                    .
                    <div className={classes.gridGalleryRightInfoSeen}>
                        <FontAwesomeIcon icon={faEye} className={classes.gridGalleryRightInfoSeenIcon} />
                        <span className={classes.gridGalleryRightInfoSeenCount}>
                            {posts[2].postViewCount}
                        </span>
                    </div>
                    .
                    <div className={classes.gridGalleryRightInfoRead}>
                        <FontAwesomeIcon icon={faCommentSlash} className={classes.gridGalleryRightInfoReadIcon} />
                        <span className={classes.gridGalleryRightInfoReadCount}>
                            {posts[2].postLikeCount}
                        </span>
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