import React from 'react';
import WorkoutSlider from './WorkoutSlider';
import {workouts} from '../data';

const Workouts = () => {
  const {title, icon} = workouts;
  return (
      <section className = "section bg-primary-200">
      {/*  section_bg_color   */}
      <div className = "section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
           data-aos = "fade-up" data-aos-delay = "200">
        <img src={icon} alt = "workout_img_icon"/>
        <h2 className = "h2 section-title">{title}<span className = "ml-0.5">:</span></h2>
      </div>
      <div data-aos = "fade-up" data-aos-delay = "300">
        <WorkoutSlider/>
      </div>
      </section>
  );
};

export default Workouts;
