import React from 'react';
import {workouts} from '../data';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';

const WorkoutSlider = () => {
  const {programs} = workouts;
  return (
      <Swiper slidesPerView = {2} spaceBetween = {40} navigation = {true} breakpoints={{
          300: {
              slidesPerView: 2
          },
          760: {
              slidesPerView: 3
          },
          1024: {
              slidesPerView: 4
          }
      }}
      modules = {[Navigation]}
      className = "workoutSlider">
        {programs.map((program, id) => {
          const {image, name} = program;
          return (
            <SwiperSlide className = "ml-[5%] max-w-[320px] min-w-[200px] max-h-[320px] relative" key = {id}>
              <img className = "w-full h-full object-cover" src = {image} alt = "SwiperSlide_img"/>
              <div className = "flex items-center bg-white left-5 bottom-5 h-[26px] px-4 rounded-[10px] absolute">
                <div className = "font-primary font-bold text-sm text-neutral-500">{name}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default WorkoutSlider;
