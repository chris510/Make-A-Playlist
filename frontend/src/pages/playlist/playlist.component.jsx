import React, { useContext } from 'react';
import './playlist.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../../components/search-bar/search-bar.component';
import Spinner from '../../components/spinner/spinner.component';
import PhoneInput from '../../components/phone-input/phone-input.component';
import { TrackContext } from '../../providers/tracks.provider';
import { ModalContext } from '../../providers/modal.provider';

const Playlist = () => {
  const { 
    playlistIframe, 
    playlistMade, 
    isLoading,
  } = useContext(TrackContext);
  const { modal, showModal } = useContext(ModalContext);

  const onClickMessage = (event) => {
    event.preventDefault();
    showModal();
  }

  return (
    <div className="playlist">
      {modal ? <PhoneInput/> : null}
      <div className="content">
        <div className="header">
          <h1 className="title">Search Artist</h1>
          <FontAwesomeIcon 
            onClick={onClickMessage}
            icon={faComment} 
            className={playlistMade ? 'icon' : 'icon hidden'}
          />
        </div>
        <div className="content-inner">
          <SearchBar/>
          <div className="track-box">
            {isLoading ? null : <Spinner/>}
            <iframe 
              className={playlistMade ? "track-playlist" : " track-playlist hidden"}
              src={playlistIframe} 
              width="100%" 
              height="300" 
              title="Your Playlist"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist;