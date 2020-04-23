import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';


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
        },
        // breakpoints: {
        //     1024: {
        //       slidesPerView: 5,
        //       spaceBetween: 40
        //     },
        //     768: {
        //       slidesPerView: 3,
        //       spaceBetween: 30
        //     },
        //     640: {
        //       slidesPerView: 3,
        //       spaceBetween: 20
        //     },
        //     376: {
        //       slidesPerView: 2,
        //       spaceBetween: 20
        //     },
        //     300: {
        //       slidesPerView: 1,
        //       spaceBetween: 10
        //     }
        //   }
      }

    return(
        <Swiper {...params}>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 1</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 2</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 3</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 4</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
            <div style={{width: '300px', height: '250px', backgroundColor: 'red'}}>Slide 5</div>
        </Swiper>
    )
}
   
export default Slider;