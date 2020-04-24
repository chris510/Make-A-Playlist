import React from 'react';
import './playlist.styles.scss';

import SearchBar from '../../components/search-bar/search-bar.component';

const Playlist = () => {
  return (
    <div className="playlist">
      <SearchBar/>
    </div>
  )
}

export default Playlist;