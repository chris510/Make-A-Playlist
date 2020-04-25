import React, { useContext } from 'react';
import './playlist.styles.scss';

import SearchBar from '../../components/search-bar/search-bar.component';
import { TrackContext } from '../../providers/tracks.provider';

const Playlist = () => {
  const { playListIframe } = useContext(TrackContext);

  return (
    <div className="playlist">
      <div className="content">
        <h1>APP NAME HERE</h1>
        <div className="content-inner">
          <SearchBar/>
          <div className="track-box">
            <iframe className="track-playlist" src={playListIframe} width="100%" height="300" title="Your Playlist"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist;