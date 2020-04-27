import React, { useContext } from 'react';
import './playlist.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../../components/search-bar/search-bar.component';
import { TrackContext } from '../../providers/tracks.provider';

const Playlist = () => {
  const { playListIframe, playListMade } = useContext(TrackContext);

  return (
    <div className="playlist">
      <div className="content">
        <div className="header">
          <h1 className="title">Search Artist</h1>
          <FontAwesomeIcon 
            icon={faComment} 
            className={playListMade ? 'icon' : 'icon hidden'}
            />
        </div>
        <div className="content-inner">
          <SearchBar/>
          <div className={playListMade ? "" : "hidden"}>
            <div className="track-box">
              <iframe className="track-playlist" src={playListIframe} width="100%" height="300" title="Your Playlist"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist;