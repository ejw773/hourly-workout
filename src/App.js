import React from 'react';
import './App.css'
import Landing from './components/landing';
import Workout from './components/workout';
import Preferences from './components/preferences';
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
      <Router>
          <div className="selection-bar btn-group container d-flex p-2" role="group" arial-label="completion-menu">
            <Link type="button" className="btn btn-primary" to="/">Home</Link> <br />
            <Link type="button" className="btn btn-success" to="/workout">Workout</Link> <br />
            <Link type="button" className="btn btn-warning" to="/preferences">Preferences</Link>
          </div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
        <Footer />
      </Router>
  )
}
}

export default App;