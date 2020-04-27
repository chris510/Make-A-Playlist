import React, { createContext } from 'react';

export const MessageContext = createContext({
  sendPlaylistMessage: (trackArtistNames) => {}
})

const MessageProvider = ({ children }) => {

  const sendPlaylistMessage = async (trackArtistNames) => {
    const data = { "track_artist_names": trackArtistNames };
    console.log(trackArtistNames)
    const response = await fetch("/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      response.json().then(data => {
        console.log(data);
        console.log('Message Sent!');
      })
    } else {
      console.log('ERROR HAS OCCURED');
    }
  }

  return (
    <MessageContext.Provider
      value={{
        sendPlaylistMessage
      }}
    >
      { children }
    </MessageContext.Provider>
  )
}

export default MessageProvider;