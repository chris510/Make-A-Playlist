import React, { createContext, useState } from 'react';

export const MessageContext = createContext({
  phoneNumber: "",
  changePhoneNumber: (number) => {},
  sendPlaylistMessage: (playlistName, playlistLink) => {}
})

const MessageProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const changePhoneNumber = (number) => {
    setPhoneNumber(number);
  }

  const formatNumber = (number) => {
    return number.split('-').join('');
  }

  const sendPlaylistMessage = async (playlistName, playlistLink, phoneNumber) => {
    const data = { 
      "playlist_name": playlistName,
      "playlist_link": playlistLink,
      "phone_number": formatNumber(phoneNumber)
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
        phoneNumber,
        changePhoneNumber,
        sendPlaylistMessage
      }}
    >
      { children }
    </MessageContext.Provider>
  )
}

export default MessageProvider;