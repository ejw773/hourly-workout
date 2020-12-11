import React from 'react';
import './App.css'
import Checklist from './components/checklist';
import ChecklistComplete from './components/checklist_complete';
import ChecklistIncomplete from './components/checklist_incomplete';
import WorkoutSelection from './components/workout_selection';
import defaultState from './Data.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  console.log(defaultState)
  return (
    <Router>
        <div className="btn-group container" role="group" arial-label="completion-menu">
          <Link type="button" className="btn btn-info" to="/today">Today's Workout</Link> <br />
          <Link type="button" className="btn btn-danger" to="/incomplete">Incomplete</Link> <br />
          <Link type="button" className="btn btn-success" to="/complete">Completed</Link>
        </div>
      <Switch>
        <Route exact path="/">
          <WorkoutSelection />
        </Route>
        <Route path="/today">
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