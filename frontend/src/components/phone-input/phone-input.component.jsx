import React, { useContext } from 'react';
import './phone-input.styles.scss';

import { ModalContext } from '../../providers/modal.provider';

const PhoneInput = () => {
  const { hideModal } = useContext(ModalContext);
  return (
    <div className="phone-input">
      <div className="backdrop" onClick={hideModal}></div>
      <div className="alert-box">
        <span>Please enter your phone number</span>
        <input 
          
          type="tel"
          placeholder="9999999"
        />
        <div className="alert-box-actions">
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}


export default PhoneInput