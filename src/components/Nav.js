import React from 'react';
import {Link} from 'react-scroll'
import {nav} from '../data';

const Nav = () => {
  return (
      <nav className = "hidden lg:flex">
        <ul className = "flex gap-x-8 text-white">
          {nav.map((item, id) => {
            return (
                <li key = {id}>
                  <Link to = {item.idTO} className = "transition hover:text-primary-200 cursor-pointer">{item.name}</Link>
                </li>
            );
          })}
        </ul>
      </nav>
  );
};

export default Nav;