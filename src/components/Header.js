import React, {useState, useEffect} from 'react';
import {header} from '../data';
import Nav from './Nav';
import NavMobile from './NavMobile';

import {RiMenu4Fill, RiCloseFill} from "react-icons/ri";

const Header = () => {
  const {logo, btnLoginText, btnSignupText} = header;
  return (
      <header className = "bg-neutral-500">
      {/* Logo  */}
        <a href = "">
          <img src={logo} alt = "logo_img"/>
        </a>
        <Nav/>
        <div>
          <button>{btnLoginText}</button>
          <button>{btnSignupText}</button>
        </div>
        <div className = "lg:hidden absolute right-4 top-0">
          <RiMenu4Fill/>
        </div>
        {/*<NavMobile/>*/}
      </header>
  );
};

export default Header;
