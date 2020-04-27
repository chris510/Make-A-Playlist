import React, { useState, createContext } from 'react';

export const ModalContext = createContext({
  modal: true,
  showModal: () => {},
  hideModal: () => {}
});

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        showModal,
        hideModal
      }}
    >
      { children }
    </ModalContext.Provider>
  )
}

export default ModalProvider