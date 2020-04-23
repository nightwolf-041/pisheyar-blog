import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';


const Slider = () => {
    const params = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }

    return(
        <Swiper {...params}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
        </Swiper>
    )
}
   
export default Slider;