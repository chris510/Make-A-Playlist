import React, { createContext, useState } from 'react';

export const MessageContext = createContext({
  phoneNumber: "",
  spinnerLoading: false,
  showSpinner: () => {},
  hideSpinner: () => {},
  changePhoneNumber: (number) => {},
  sendPlaylistMessage: (playlistName, playlistLink) => {}
})

const MessageProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  const showSpinner = () => {
    setSpinnerLoading(true);
  }

  const hideSpinner = () => {
    setSpinnerLoading(false);
  }

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

    const response = await fetch("https://api-make-a-playlist.herokuapp.com/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      response.json().then(data => {
        console.log(data);
        setTimeout(() => {
          hideSpinner();
          alert('Message Sent!')
        }, 2000)
      })
    } else {
      console.log('ERROR HAS OCCURED');
    }
  }

  return (
    <MessageContext.Provider
      value={{
        phoneNumber,
        spinnerLoading,
        showSpinner,
        hideSpinner,
        changePhoneNumber,
        sendPlaylistMessage
      }}
    >
      { children }
    </MessageContext.Provider>
  )
}

export default MessageProvider;