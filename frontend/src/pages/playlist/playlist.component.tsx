import React from 'react';
import './playlist.styles.scss';

import SearchBar from '../../components/search-bar/search-bar.component';

const Playlist = () => {
  return (
    <div className="playlist">
      <div className="content">
        <h1>APP NAME HERE</h1>
        <div className="content--inner">
          <SearchBar/>
        </div>
      </div>
    </div>
  )
}

export default Playlist;