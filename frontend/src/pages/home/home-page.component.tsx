import React from 'react';
import './home-page.styles.scss';
import Background2 from '../../images/background2.jpg'

const HomePage = () => {
  return (
    <div className="home">
      <section className="main-section">
        <div className="headers">
          <h1 className="header-1">Music for Everyone.</h1>
          <h2 className="header-2">Discover and share</h2>
          <h2 className="header-3">your perfect sound</h2>
          <div className="button">
            <button className="search-btn">Make Playlist Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;