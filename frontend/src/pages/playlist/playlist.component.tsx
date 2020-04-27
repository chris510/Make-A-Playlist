import React, { useContext } from 'react';
import './playlist.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../../components/search-bar/search-bar.component';
import { TrackContext } from '../../providers/tracks.provider';
import { MessageContext } from '../../providers/message.provider';

const Playlist = () => {
  const { playlistIframe, playlistMade, playlistLink, playlistName } = useContext(TrackContext);
  const { sendPlaylistMessage } = useContext(MessageContext);

  const onClickMessage = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('clicked!')
    sendPlaylistMessage(playlistName, playlistLink);
  }

  return (
    <div className="playlist">
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
          <div className={playlistMade ? "" : "hidden"}>
            <div className="track-box">
              <iframe className="track-playlist" src={playlistIframe} width="100%" height="300" title="Your Playlist"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist;