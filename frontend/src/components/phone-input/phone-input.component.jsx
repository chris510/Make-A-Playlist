import React, { useContext, useState } from 'react';
import './phone-input.styles.scss';

import { ModalContext } from '../../providers/modal.provider';
import { MessageContext } from '../../providers/message.provider';
import { TrackContext } from '../../providers/tracks.provider';

import Spinner from '../../components/spinner/spinner.component';

const PhoneInput = () => {
  const { modal, hideModal } = useContext(ModalContext);
  const { phoneNumber, sendPlaylistMessage, changePhoneNumber, spinnerLoading, showSpinner } = useContext(MessageContext);
  const { playlistName, playlistLink } = useContext(TrackContext);


  const onSend = (event) => {
    event.preventDefault();
    sendPlaylistMessage(playlistName, playlistLink, phoneNumber);
    showSpinner(true);
  }

  const handleNumberChange = (event) => {
    let number = event.target.value;
    changePhoneNumber(number);
  }

  return (
    <div className="phone-input">
      <div className="backdrop" onClick={hideModal}></div>
        {spinnerLoading ?   
          <div className="spinner-box">
            <div className="spinner"><Spinner/></div>
          </div> 
        : null}
        {!spinnerLoading ? 
        <div className="alert-box">
          <form onSubmit={onSend}>
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
          </form>
         </div>
        : null}
    </div>
  )
}


export default PhoneInput