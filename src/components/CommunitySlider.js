import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const CommunitySlider = ({testimonials}) => {
  return (
      <Swiper
          slidesPerView = {3}
          spaceBetween = {15}
          centeredSlides = "auto"
          grabCursor = {true}
          className = "communitySlider"
      >
        {testimonials.map((testimonial, id) => {
          const { image, name, message } = testimonial;
          return (
            <SwiperSlide key= {id}>
              <div className = "relative">
                <div>
                  <img className= "rounded-[4px]" src = {image} alt = "SwiperSlider_img"/>
                </div>
                <div className = "absolute bottom-7 p-5 text-pink-400 text-center">
                  <div className = "mb-8 italic text-lg font-thin">{message}></div>
                  <div className = "flex items-center justify-center gap-x-[3px]">
                <span className = "text-3xl text-primary-200 font-bold mr-0.5">~</span>
                  <div className = "text-xl font-bold text-primary-200">{name}</div>
                </div>
                </div>
              </div>
            </SwiperSlide>
        );
      })}
      </Swiper>
  );
};

export default CommunitySlider;