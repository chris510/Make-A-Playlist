import React, { createContext , useState, useEffect, useCallback } from 'react';

export const TrackContext = createContext({
  playListIframe: '',
  getPlayListIframe: () => {}
});

const TrackProvider = ({ children }) => {
  const [playListIframe, setPlayListIframe] = useState('');

  const getPlayListIframe = async (artistName) => {
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
      })
    } else {
      console.log('ERROR HAS OCCURED')
    }
  }

  return (
    <TrackContext.Provider
      value={{
        playListIframe,
        getPlayListIframe
      }}
    >
      {children}
    </TrackContext.Provider>
  )
}

export default TrackProvider;