import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import TrackProvider from './providers/tracks.provider';
import MessageProvider from './providers/message.provider';

ReactDOM.render(
  <MessageProvider>
    <TrackProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TrackProvider>
  </MessageProvider>,
  document.getElementById('root')
);
