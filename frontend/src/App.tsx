import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import './App.css';

import Home from './pages/home/home-page.component';
import PlaylistPage from './pages/playlist/playlist-page.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlist" component={PlaylistPage}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
