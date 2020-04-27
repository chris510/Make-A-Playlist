import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import TrackProvider from './providers/tracks.provider';
import MessageProvider from './providers/message.provider';
import ModalProvider from './providers/modal.provider';

ReactDOM.render(
  <ModalProvider>
    <MessageProvider>
      <TrackProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TrackProvider>
    </MessageProvider>
  </ModalProvider>,
  document.getElementById('root')
);
