import React from 'react';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css/swiper.min.css';
import classes from './slider.module.css'

import rovina from '../../assets/images/rovina.png'


const Slider = () => {
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
          <div className={classes.carouselCell}>
                <div className={classes.carouselCellImagebox}>
                    <img src={rovina} alt="" className={classes.carouselCellImage} />
                </div>
                <div className={classes.carouselCellTitle}>
                    <h4>شرکت خاله اسکارلت در جشمواره فجر امسال</h4>
                </div>
                <div className={classes.carouselCellInfo}>
                    <div className={classes.carouselCellInfoDate}>
                        <span className={classes.carouselCellInfoDateCount}>30 دی 1398</span>
                        <FontAwesomeIcon icon={faClock} className={classes.carouselCellInfoDateIcon} />
                    </div>
                    <div className={classes.carouselCellInfoSender}>
                        <span>ممد میرزایی</span>
                        <div className={classes.carouselCellInfoSenderImage}>
                            <img src={rovina} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Swiper>
        </>
    )
}
   
export default Slider;