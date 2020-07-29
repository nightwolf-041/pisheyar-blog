import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useStaticQuery, graphql, Link } from 'gatsby';
// import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faBolt, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
// import Masonry from 'react-masonry-component';
import Pagination from 'rc-pagination';
import Masonry from 'react-masonry-css'

import classes from './masonryGallery.module.css'
import 'rc-pagination/assets/index.css'

const MasonryGallery = () => {

    const {allRestApiPostGetAllAnonymous} = useStaticQuery(
        graphql`
        {
            allRestApiPostGetAllAnonymous {
                edges {
                    node {
                        posts {
                            title
                            slug
                            document {
                              options {
                                type
                              }
                              source
                            }
                            likeCount
                            abstract
                            modifiedDate
                            category {
                                title
                            }
                            userFullName
                          }
                    }
                }
            }
        }
    `)
    const data = [...allRestApiPostGetAllAnonymous.edges]
    let posts = [...data[0].node.posts]
    console.log(posts);


    let [runtimeData, setRuntimeData] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let [jumpValue, setJumpValue] = useState(null)

    useEffect(() => {
        axios.get('http://185.211.59.237/Post/GetAllAnonymous')
        .then(res => {
            console.log(res.data.posts);
            setRuntimeData(posts)
        })
        .catch(err => {

        })
    }, [])

    const paginationChangeHandler = (current, pageIndex) =>{
        setCurrentPage(current)
    }

    const breakpointColumnsObj = {
        default: 3,
        1150: 2,
        760: 1
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
        <div className={classes.masonryGalleryPaginationBox}>
            <Pagination
                className={classes.masonryPagination}
                total={posts.length}
                defaultCurrent={1}
                current={currentPage}
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
                            <span>{post.likeCount}</span>
                        </div>
                    </div>
                    <div className={classes.masonryPostDarkTitle}>
                        <h4 key={index}>{post.category.title}</h4>
                    </div>
                    <Link to={`/${post.slug}`} className={classes.masonryPostTitle}>
                        <h4>
                            {post.title}
                        </h4>
                    </Link>
                    <div className={classes.masonryPostSubtitle}>
                        <h4>
                            {post.abstract}
                        </h4>
                    </div>
                    <div className={classes.masonryPostInfo}>
                        <span className={classes.masonryPostInfoWhriter}>{post.userFullName}</span> __
                        <span className={classes.masonryPostInfoDate}>{runtimeData[index].modifiedDate}</span>
                    </div>
                    <div className={classes.masonryPostSocials}>
                        <FontAwesomeIcon icon={faInstagram} className={classes.masonryPostSocialIcon} />
                        <FontAwesomeIcon icon={faTelegramPlane} className={classes.masonryPostSocialIcon} />
                        <FontAwesomeIcon icon={faWhatsapp} className={classes.masonryPostSocialIcon} />
                    </div>
                </div>
            ))}
       
        </Masonry>

        </>
    )
}

export default MasonryGallery