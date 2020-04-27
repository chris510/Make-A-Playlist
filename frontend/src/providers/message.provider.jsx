import React, { createContext } from 'react';

export const MessageContext = createContext({
  sendPlaylistMessage: (playlistName, playlistLink) => {}
})

const MessageProvider = ({ children }) => {

  const sendPlaylistMessage = async (playlistName, playlistLink) => {
    const data = { 
      "playlist_name": playlistName,
      "playlist_link": playlistLink
    };

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