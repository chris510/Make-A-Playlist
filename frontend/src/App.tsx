import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import './App.css';

import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Nav from './components/nav/nav.component';
import PlaylistPage from './pages/playlist/playlis.component';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
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
