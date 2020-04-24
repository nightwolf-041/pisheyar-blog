import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faBolt, faArrowRight, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
// import Masonry from 'react-masonry-component';
import Pagination from 'rc-pagination';
import Masonry from 'react-masonry-css'

import mamad from '../../assets/images/mamad.png'
import rovina from '../../assets/images/rovina.png'
import arya from '../../assets/images/arya.png'
import khale from '../../assets/images/khale.png'

import classes from './masonryGallery.module.css'
import 'rc-pagination/assets/index.css'

const MasonryGallery = () => {

    const {allRestApiApiPostGetAllAnonymous} = useStaticQuery(
        graphql`
        {
            allRestApiApiPostGetAllAnonymous {
                edges {
                    node {
                        posts {
                            postTitle
                            slug
                            document {
                              options {
                                type
                              }
                              source
                            }
                            postLikeCount
                            postAbstract
                            postCreateDate
                            tags {
                              name
                            }
                            userFullName
                          }
                    }
                }
            }
        }
    `)
    const data = [...allRestApiApiPostGetAllAnonymous.edges]
    let posts = [...data[0].node.posts]
    // let currentPosts = posts.slice((currentPage - 1) * pagesIndex, currentPage * pagesIndex);


    let [currentPage, setCurrentPage] = useState(1)
    let [jumpValue, setJumpValue] = useState(null)

    // useEffect(() => {
    //     currentPosts = posts.slice((currentPage - 1) * pagesIndex, currentPage * pagesIndex);
    // }, currentPage)
    let slicedPosts = []

    const paginationChangeHandler = (current, pageIndex) =>{
        console.log(`current is ${current}`);
        setCurrentPage(current)
        // slicedPosts = posts.slice((current - 1) * pageIndex, current * pageIndex);
    }

    const breakpointColumnsObj = {
        default: 3,
        1200: 3,
        980: 2,
        630: 1
    };

    const paginationJumpChange = (e) => {
        setJumpValue(e.target.value)
    }

    const paginationJumpHandler = () => {
        setCurrentPage(jumpValue)
    }

    return(
        <>
        <div className={classes.masonryGalleryDivider}></div>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
            {posts.slice((currentPage - 1) * 24, currentPage * 24).map((post, index) => (
                 <div className={classes.masonryPostKeeper} key={index}>
                 <div className={classes.masonryPostImagebox}>
                     <div className={classes.masonryPostImageboxInstant}>
                         <FontAwesomeIcon icon={faBolt} className={classes.masonryPostImageboxInstantIcon} />
                         <span>آگهی</span>
                     </div>
                     <div className={classes.masonryPostImageOverlay}></div>
                     <img src={post.document.source} alt="" className={classes.masonryPostImage} />
                     <div className={classes.masonryPostLikeBox}>
                         <FontAwesomeIcon icon={faHeart} className={classes.masonryPostLikeIcon} />
                         <span>{post.postLikeCount}</span>
                     </div>
                 </div>
                 <div className={classes.masonryPostDarkTitle}>
                     {post.tags.map((tag, index) => (
                         <h4 key={index}>{tag.name}</h4>
                     ))}
                 </div>
                 <div className={classes.masonryPostTitle}>
                     <h4>
                         {post.postTitle}
                     </h4>
                 </div>
                 <div className={classes.masonryPostSubtitle}>
                     <h4>
                         {post.postAbstract}
                     </h4>
                 </div>
                 <div className={classes.masonryPostInfo}>
                     <span className={classes.masonryPostInfoWhriter}>{post.userFullName}</span> __
                     <span className={classes.masonryPostInfoDate}>{post.postCreateDate}</span>
                 </div>
                 <div className={classes.masonryPostSocials}>
                     <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                     <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                     <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
                 </div>
             </div>
            ))}
       
        </Masonry>
        <div className={classes.masonryGalleryPaginationBox}>
            <Pagination
                className={classes.masonryPagination}
                total={posts.length}
                defaultCurrent={1}
                current={currentPage || jumpValue}
                defaultPageSize={24}
                showTitle={false}
                showLessItems={true}
                onChange={(current, pageIndex) => paginationChangeHandler(current, pageIndex)}
            />
            <div className={classes.masonryPaginationJumpBox}>
                <input type="text" className={classes.masonryPaginationJumpInput}
                placeholder="برو به" onChange={(e) => paginationJumpChange(e)} />
                <div className={classes.masonryPaginationJumpIconBox}
                onClick={paginationJumpHandler}>
                    <FontAwesomeIcon icon={faCaretSquareRight} className={classes.masonryPaginationJumpIcon} />
                </div>
            </div>
        </div>

        </>
    )
}

export default MasonryGallery