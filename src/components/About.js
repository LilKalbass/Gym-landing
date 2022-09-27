import React from 'react';
import {about} from '../data';

import {IoIosArrowDroprightCircle} from 'react-icons/io';

const About = () => {
  const {title, subtitle1, subtitle2, icon, link} = about;
  return (
      <section className = "bg-pink-200 py-20 md:py-28 lg:py-36">
        {/* section_bg_color */}
        <div className = "container mx-auto px-5 lg:px-32">
          <div className = "section-title-group justify-start"
               data-aos = "fade-up" data-aos-delay = "100">
            <img src={icon} alt= "about_img_icon"/>
            <h2 className = "h2 section-title">{title}<span className = "text-primary-200 ml-0.5">:</span></h2>
          </div>
          <p className= "md:text-body-md mb-9"
             data-aos = "fade-up" data-aos-delay = "200">{subtitle1}
          </p>
          <p className = "md:text-body-md mb-6"
             data-aos = "fade-up" data-aos-delay = "300">{subtitle2}
          </p>
          <div data-aos = "fade-up" data-aos-delay = "400">
            <a className = "link flex items-center transition-all gap-x-0.5 hover:gap-x-2 hover:text-primary-200" href = "#">{link}<IoIosArrowDroprightCircle className = "text-lg"/></a>
          </div>

        </div>
      </section>
  );
};

export default About;
