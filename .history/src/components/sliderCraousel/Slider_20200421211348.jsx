import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';


const Slider = () => {
    const params = {
        infinite: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        },
        spaceBetween: 30
      }

    return(
        <Swiper {...params}>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 1</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 2</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 3</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 4</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '150px', height: '150px', backgroundColor: 'red'}}>Slide 5</div>
        </Swiper>
    )
}
   
export default Slider;