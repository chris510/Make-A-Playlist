import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import { Transition, TransitionGroup } from 'react-transition-group';
import './App.css';

import { play, exit } from './transitions/timeline';
import Nav from './components/nav/nav.component';
import Background from './components/background/background.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import PlaylistPage from './pages/playlist/playlist.component';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Background/>
      <Route render={({ location }) => {
        const { pathname, key } = location;
        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{enter: 750, exit: 150}}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/playlist" component={PlaylistPage}/>
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }}/>
    </div>
  );
}

export default withRouter(App);

// <Switch>
// <Route exact path="/" component={Home}/>
// <Route exact path="/about" component={About}/>
// <Route exact path="/contact" component={Contact}/>
// <Route exact path="/playlist" component={PlaylistPage}/>
// </Switch>