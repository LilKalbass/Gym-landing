import React from 'react';
import {nav} from '../data'
const Nav = () => {
  return (
      <nav className = "hidden lg:flex">
        <ul className = "flex gap-x-8 text-white">
          {nav.map((item, id) => {
            return (
                <li key = {id}>
                  <a href = "#" className = "transition hover:text-primary-200">{item.name}</a>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Nav;