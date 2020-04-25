import React from 'react';
import './home.styles.scss';

import SearchButton from '../../components/search-button/search-button.component';

const Home = () => {
  return ( 
    <div className="home">
      <h1 className="header-1">Music for Everyone.</h1>
      <h2 className="header-2">Discover and share</h2>
      <h3 className="header-3">your perfect</h3>
      <h4 className="header-4">sound.</h4>
      <SearchButton/>
    </div>
  )
}

export default Home;