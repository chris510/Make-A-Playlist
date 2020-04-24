import React from 'react';
import './home.styles.scss';

const home = () => {
  return ( 
    <div className="home">
      <section className="main-section">
        <div className="headers">
          <h1 className="header-1">Music for Everyone.</h1>
          <h2 className="header-2">Discover and share</h2>
          <h3 className="header-3">your perfect</h3>
          <h4 className="header-4">sound.</h4>
          <button className="search-btn">&#9658;</button>
        </div>
      </section>
    </div>
  )
}

export default home;