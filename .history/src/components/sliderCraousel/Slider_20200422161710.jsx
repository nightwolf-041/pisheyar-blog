import React from 'react';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css/swiper.min.css';
import classes from './slider.module.css'

import rovina from '../../assets/images/rovina.png'


const Slider = () => {
    const params = {
        loop: true,
        freeMode: true,
        grabCursor: true,
        lazy: true,
        centeredSlides: true,
        // slidesPerView: 5,
        // slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        breakpoints: {
            500: {
                slidesPerView: 'auto',
                centeredSlides: true,
                // spaceBetween: 20
            },
            300: {
              centeredSlides: true,
              slidesPerView: 'auto',
              spaceBetween: 10
            },
        }
      }

    return(
      <div className={classes.mainCarousel}>
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
        </div>
    )
}
   
export default Slider;