import React from 'react';
import {banner} from '../data';


const Banner = () => {
  const {titlePart1, titlePart2, subtitle, textBtn} = banner;
  return (
      <section id= "_home" className = "bg-neutral-500 h-[690px]">
          <div className="pink4"></div>
          <div className = "container mx-auto h-full">
              <div className = "flex items-center h-full relative -space-x-64 ph:left-5 lg:-space-x-24 ">
              {/*   text    */}
                  <div className = "flex-1 text-pink-400 z-10">
                      <h1 className = "h1 text-pink-400 font-medium py-3 lg:py-6"
                          data-aos = "fade-down" data-aos-delay = "500">
                          {titlePart1} <br/>
                          <span className = "flex text-primary-200 mt-2">{titlePart2}</span>
                      </h1>
                      <p className = "max-w-[365px] text-body-md lg:text-body-lg mb-3 lg:mb-6"
                         data-aos = "fade-down" data-aos-delay = "600">
                          {subtitle}
                      </p>
                      <button className = "btn btn-sm lg:btn-lg btn-secondary hover:bg-pink-400/80 lg:hover:bg-pink-400/70"
                              data-aos = "fade-down" data-aos-delay = "700">{textBtn}
                      </button>
                  </div>
              {/*    img    */}
                  <div className = "flex-1 w-full h-full bg-banner bg-cover bg-right bg-no-repeat lg:bg-center"
                       data-aos = "fade-left" data-aos-delay = "900">
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Banner;