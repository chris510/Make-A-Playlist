import React, { useContext, useState } from 'react';
import './phone-input.styles.scss';

import { ModalContext } from '../../providers/modal.provider';
import { MessageContext } from '../../providers/message.provider';
import { TrackContext } from '../../providers/tracks.provider';

const PhoneInput = () => {
  const { hideModal } = useContext(ModalContext);
  const { phoneNumber, sendPlaylistMessage, changePhoneNumber } = useContext(MessageContext);
  const { playlistName, playlistLink } = useContext(TrackContext);

  const onSend = (event) => {
    event.preventDefault();
    sendPlaylistMessage(playlistName, playlistLink, phoneNumber);
    console.log(playlistName);
    console.log(playlistLink);
    console.log(phoneNumber);
    console.log('------')
  }

  const handleNumberChange = (event) => {
    let number = event.target.value;
    changePhoneNumber(number);
  }

  return (
    <div className="phone-input">
      <div className="backdrop" onClick={hideModal}></div>
      <form onSubmit={onSend}>
        <div className="alert-box">
          <span>Please enter your phone number</span>
          <input 
            className="phone-number"
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="999-999-999"
            onChange={handleNumberChange}
          />
          <div className="alert-box-actions">
            <button type="submit">Send</button>
          </div>
       </div>
      </form>
    </div>
  )
}


export default PhoneInput