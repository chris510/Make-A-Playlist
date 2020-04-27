import React, { createContext , useState} from 'react';

export const TrackContext = createContext({
  playlistIframe: '',
  // trackArtistNames: [],
  playlistName: '',
  playlistLink: '',
  playlistMade: false,
  isLoading: false,
  setLoading: (boolean) => {},
  createPlaylistIframe: (artistName) => {}
});

const TrackProvider = ({ children }) => {
  const [playlistIframe, setPlaylistIframe] = useState('');
  // const [trackArtistNames, setTrackArtistNames] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistLink, setPlaylistLink] = useState('');
  const [playlistMade, setplaylistMade] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        setTimeout(() => {
          setplaylistMade(true);
        }, 1000)
      })
    } else {
      console.log('ERROR HAS OCCURED')
    }
  }

  const setLoading = (boolean) => {
    setIsLoading(boolean);
  }

  return (
    <TrackContext.Provider
      value={{
        playlistIframe,
        // trackArtistNames,
        playlistName,
        playlistLink,
        playlistMade,
        isLoading,
        setLoading,
        createPlaylistIframe
      }}
    >
      {children}
    </TrackContext.Provider>
  )
}

export default TrackProvider;