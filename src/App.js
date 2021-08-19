import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Animals from './Pages/Animals';
import Teams from './Pages/Teams';
import Adopter from './Pages/Adopter';
import Directory from './Pages/Directory';
import Events from './Pages/Events';
import Forum from './Pages/Forum';
import Stats from './Pages/Stats';
import Resources from './Pages/Resources';
import Settings from './Pages/Settings';
import SignOut from './Pages/SignOut';

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/animals'>
            <Animals />
          </Route>
          <Route path='/team'>
            <Teams />
          </Route>
          <Route path='/adopter'>
            <Adopter />
          </Route>
          <Route path='/directory'>
            <Directory />
          </Route>
          <Route path='/events'>
            <Events />
          </Route>
          <Route path='/forum'>
            <Forum />
          </Route>
          <Route path='/stats'>
            <Stats />
          </Route>
          <Route path='/resources'>
            <Resources />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/signOut'>
            <SignOut />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
