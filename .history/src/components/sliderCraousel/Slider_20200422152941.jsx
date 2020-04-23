import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import classes from './slider.module.css'

import ruby from '../../assets/images/'


const Slider = () => {
    const params = {
        loop: true,
        freeMode: true,
        grabCursor: true,
        lazy: true,
        centeredSlides: true,
        // slidesPerView: 5,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
            400: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 20
            },
        }
      }

    return(
        <Swiper {...params}>
          <div className={classes.carouselCell}>
                <div className={classes.carouselCellImagebox}>
                    <img src="./img/khale.png" alt="" className={classes.carouselCellImage} />
                </div>
                <div className="carousel-cell-title">
                    <h4>شرکت خاله اسکارلت در جشمواره فجر امسال</h4>
                </div>
                <div className="carousel-cell-info">
                    <div className="carousel-cell-info-date">
                        <span className="carousel-cell-info-date-count">1394/5/4</span>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="carousel-cell-info-sender">
                        <span>ممد میرزایی</span>
                        <div className="carousel-cell-info-sender-image">
                            <img src="./img/rovina.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Swiper>
    )
}
   
export default Slider;