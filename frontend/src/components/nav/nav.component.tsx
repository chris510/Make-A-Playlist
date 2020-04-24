import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.styles.scss';

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Nav;