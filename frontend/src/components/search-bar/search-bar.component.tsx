import React, { useState, useContext } from 'react';
import './search-bar.styles.scss';

import { TrackContext } from '../../providers/tracks.provider';

const SearchBar = () => {
  const { createPlaylistIframe, setLoading } = useContext(TrackContext);
  const [artistName, setArtistName] = useState('');

  const handleClickCreatePlaylist = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('clicked');
    setLoading(false);
    console.log('api call')
    createPlaylistIframe(artistName);
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setArtistName(value);
  }

  return (
    <div className="search">
      <input 
        className="search-bar"
        type="text"
        placeholder="Ex: Bruno Mars"
        value={artistName}
        onChange={handleSearchChange}
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