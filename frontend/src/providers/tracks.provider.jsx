import React, { createContext , useState} from 'react';

export const TrackContext = createContext({
  playListIframe: '',
  trackArtistNames: [],
  playListMade: false,
  createPlayListIframe: (artistName) => {}
});

const TrackProvider = ({ children }) => {
  const [playListIframe, setPlayListIframe] = useState('');
  const [trackArtistNames, setTrackArtistNames] = useState([]);
  const [playListMade, setplayListMade] = useState(false);

  const createPlayListIframe = async (artistName) => {
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
        setPlayListIframe(data.playlist_iframe_href);
        setTrackArtistNames(data.track_artist_list);
        setplayListMade(true);
      })
    } else {
      console.log('ERROR HAS OCCURED')
    }
  }

  return (
    <TrackContext.Provider
      value={{
        playListIframe,
        trackArtistNames,
        playListMade,
        createPlayListIframe
      }}
    >
      {children}
    </TrackContext.Provider>
  )
}

export default TrackProvider;