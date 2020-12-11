import React from 'react';
import './App.css'
import Checklist from './components/checklist';
import ChecklistComplete from './components/checklist_complete';
import ChecklistIncomplete from './components/checklist_incomplete';
import defaultState from './Data.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  console.log(defaultState)
  return (
    <Router>
      <div className="left-nav">
        <nav>
          <Link to="/">Checklist</Link> <br />
          <Link to="/incomplete">All Incomplete Items</Link> <br />
          <Link to="/complete">All Completed Items</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Checklist />
        </Route>
        <Route path="/incomplete">
          <ChecklistIncomplete />
        </Route>
        <Route path="/complete">
          <ChecklistComplete />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;