import React from 'react';
import {footer} from '../data';

const Footer = () => {
  const {logo, copyrightText} = footer;
  return (
      <footer className = "bg-neutral-500 h-[125px] md:h-[195px] px-5">
        <div className = "max-w-[1300px] mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]"
             data-aos = "fade-up" data-aos-delay = "200">
          <a href = "#">
            <img src = {logo} alt = "footer_img" />
          </a>
          <p className = "text-pink-400 text-sm">{copyrightText}</p>
        </div>
      </footer>
  );
};

export default Footer;