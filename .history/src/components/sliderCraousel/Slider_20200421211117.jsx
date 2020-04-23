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
            <div style={{width: '80px', height: '50px', backgroundColor: 'red'}}>Slide 1</div>
            <div style={{width: '80px', height: '50px', backgroundColor: 'red'}}>Slide 2</div>
            <div style={{width: '80px', height: '50px', backgroundColor: 'red'}}>Slide 3</div>
            <div style={{width: '80px', height: '50px', backgroundColor: 'red'}}>Slide 4</div>
            <div style={{width: '80px', height: '50px', backgroundColor: 'red'}}>Slide 5</div>
        </Swiper>
    )
}
   
export default Slider;