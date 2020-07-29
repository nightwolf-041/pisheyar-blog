import React from 'react';
import Swiper from 'react-id-swiper';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css/swiper.min.css';
import classes from './slider.module.css'

import rovina from '../../assets/images/rovina.png'


const Slider = () => {

    const { GetMonthlyMostViewed } = useStaticQuery(
		graphql`
        {
            GetMonthlyMostViewed {
                edges {
                    node {
                        posts {
                            postAbstract
                            postViewCount
                            postCreateDate
                            postLikeCount
                            userFullName
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
    const data = [...GetMonthlyMostViewed.edges]
    let posts = [...data[0].node.posts]

    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
        loop: true,
        freeMode: true,
        grabCursor: true,
        lazy: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            420: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30
            },
            300: {
              effect: 'fade',
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 0,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
            },
        }
      }

    return(
      <>
      <h4 className="gallery-slider-divider">
          منتخب سر دبیر
      </h4>
     
        <Swiper {...params}>
            {posts.map(post => (
                <Link to={`/${post.slug}`} className={classes.carouselCell}>
                    <div className={classes.carouselCellImagebox}>
                        <img src={post.document.source} alt="" className={classes.carouselCellImage} />
                    </div>
                    <div className={classes.carouselCellTitle}>
                        <h4>{post.postAbstract}</h4>
                    </div>
                    <div className={classes.carouselCellInfo}>
                        <div className={classes.carouselCellInfoDate}>
                            <span className={classes.carouselCellInfoDateCount}>{post.postCreateDate}</span>
                            <FontAwesomeIcon icon={faClock} className={classes.carouselCellInfoDateIcon} />
                        </div>
                        <div className={classes.carouselCellInfoSender}>
                            <span>{post.userFullName}</span>
                            <div className={classes.carouselCellInfoSenderImage}>
                                <img src={post.document.source} alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </Swiper>
        </>
    )
}
   
export default Slider;