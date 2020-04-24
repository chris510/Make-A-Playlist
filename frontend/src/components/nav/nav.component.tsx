import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.styles.scss';

const Nav = () => {
  return (
    <div className="nav">
      <NavLink exact strict to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/playlist">Playlist</NavLink>
    </div>
  )
}

export default Nav;