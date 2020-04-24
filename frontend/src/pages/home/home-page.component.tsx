import React from 'react';
import './home-page.styles.scss';

import Nav from '../../components/nav/nav.component';

const HomePage = () => {
  return (
    <div className="home">
      <section className="main-section">
        <Nav/>
        <div className="headers">
          <h1 className="header-1">Music for Everyone.</h1>
          <h2 className="header-2">Discover and share</h2>
          <h3 className="header-3">your perfect</h3>
          <h4 className="header-4">sound.</h4>
          <div className="button">
            <button className="search-btn">&#9658;</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;