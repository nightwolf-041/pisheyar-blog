import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';


const Slider = () => {
    const params = {
        infinite: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 30
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