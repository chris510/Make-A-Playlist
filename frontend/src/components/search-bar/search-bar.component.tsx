import React, { useState, useEffect, useContext } from 'react';
import './search-bar.styles.scss';

import { TrackContext } from '../../providers/tracks.provider';

const SearchBar = () => {
  const { createPlayListIframe } = useContext(TrackContext);
  const [artistName, setArtistName] = useState('Frank Ocean');

  const handleClickCreatePlaylist = (event: any) => {
    event.preventDefault()
    createPlayListIframe(artistName);
  }

  return (
    <div className="search">
      <input 
        className="search-bar"
        placeholder="Ex: Bruno Mars"
        // value={artistName}
        required
      />
      <button className="search-btn" onClick={handleClickCreatePlaylist}>&#9658;</button>
    </div>
  )
}

export default SearchBar;

// const SearchBar = () => {
//   const [openSearchBar, setOpenSearchBar] = useState(false);
//   const handleClick = () => {
//     setOpenSearchBar(!openSearchBar);
//   }

//   const setOpenClassIcon = () => {
//     return openSearchBar ? 'search-icon open' : 'search-icon';
//   }

//   const setOpenClass = () => {
//     return openSearchBar ? 'search open' : 'search';
//   }

//   return (
//     <div className={setOpenClass()}>
//       <input type="search" className="search-box" />
//       <span className="search-button" onClick={handleClick}>
//         <span className={setOpenClassIcon()}></span>
//       </span>
//     </div>
//   )
// }

// export default SearchBar;