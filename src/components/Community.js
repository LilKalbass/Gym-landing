import React from 'react';
import CommunitySlider from './CommunitySlider';
import {community} from '../data';

const Community = () => {
  const { icon, title, testimonials } = community;
  return (
      <section id = "_community" className = "section  bg-white relative">
        <div className = "container mx-auto">
          <div className = "flex">
            <div className = "section-title-group mx-auto max-w-[240px] px-4 lg:px-0 lg:ml-0"
                 data-aos = "fade-up" data-aos-offset = "200" data-aos-delay= "200">
              <img src = {icon} alt = "community_img"/>
              <h2 className = "h2 section-title">{title}<span className = "ml-0.5 text-primary-200">:</span></h2>
            </div>
            <div className = "absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0"
                 data-aos = "fade-left" data-aos-offset = "200" data-aos-delay= "300">
              <CommunitySlider testimonials = {testimonials}/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Community;