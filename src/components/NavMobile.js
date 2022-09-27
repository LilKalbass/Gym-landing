import React from 'react';
import {header, nav} from '../data'

const NavMobile = ({navMobile}) => {
  const {btnLoginText, btnSignupText} = header;
  return (
      <nav
          className = {`${navMobile ? "min-h-screen" : "min-h-0"} 
          w-full h-0 fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all`}
      >
        <ul className = "flex flex-col justify-center items-center w-full top-0 left-0 h-full gap-y-8 pb-20">
          {nav.map((item, idx) => {
            return (
                <li key = {idx}>
                  <a className = "text-white text-body-md hover:text-primary-200" href={item.href}>
                    {item.name}
                  </a>
                </li>
            );
          })}
        </ul>
        {/* buttons */}
        <div className = "flex justify-center gap-x-8 -mt-44">
            <button className = "btn-nav hover:text-pink-400">{btnLoginText}</button>
            <button className = "btn-nav">{btnSignupText}</button>
        </div>
      </nav>
  );
};

export default NavMobile;
