import React, { createContext , useState} from 'react';

export const TrackContext = createContext({
  playlistIframe: '',
  // trackArtistNames: [],
  playlistName: '',
  playlistLink: '',
  playlistMade: false,
  createPlaylistIframe: (artistName) => {}
});

const TrackProvider = ({ children }) => {
  const [playlistIframe, setPlaylistIframe] = useState('');
  // const [trackArtistNames, setTrackArtistNames] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistLink, setPlaylistLink] = useState('');
  const [playlistMade, setplaylistMade] = useState(false);

  const createPlaylistIframe = async (artistName) => {
    const data = {"desired_artist": artistName}
    const response = await fetch("/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      response.json().then(data => {
        console.log(data);
        setPlaylistIframe(data.playlist_iframe_href);
        // setTrackArtistNames(data.track_artist_list);
        setPlaylistName(data.playlist_name);
        setPlaylistLink(data.playlist_link);
        setplaylistMade(true);
      })
    } else {
      console.log('ERROR HAS OCCURED')
    }
  }

  return (
    <TrackContext.Provider
      value={{
        playlistIframe,
        // trackArtistNames,
        playlistName,
        playlistLink,
        playlistMade,
        createPlaylistIframe
      }}
    >
      {children}
    </TrackContext.Provider>
  )
}

export default TrackProvider;