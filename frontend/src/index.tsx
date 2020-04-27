import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import TrackProvider from './providers/tracks.provider';

ReactDOM.render(
  <TrackProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TrackProvider>,
  document.getElementById('root')
);
