import React from 'react';
import './App.css'
import Checklist from './components/checklist';
import ChecklistComplete from './components/checklist_complete';
import ChecklistIncomplete from './components/checklist_incomplete';
import WorkoutSelection from './components/workout_selection';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import defaultStateData from './Data';


class App extends React.Component {
  //This logic should be removed from App.js, and moved to the various components
  constructor(props) {
    super(props);
    // this.changeSelection = this.changeSelection.bind(this);
    // this.toggleExercise = this.toggleExercise.bind(this);
    // this.state = defaultStateData;
  }

  // changeSelection(event) {
  //   let selectedWorkout = event.target.id;
  //   this.setState(state => {
  //     return {
  //       ...state,
  //       workout_selection: selectedWorkout
  //     }
  //   })
  // }

  // toggleExercise(event) {
  //   console.log(event.target.checked);
  // }

  render() {
  return (
    <Router>
      <div>
        <WorkoutSelection />
      </div>
        <div className="btn-group container" role="group" arial-label="completion-menu">
          <Link type="button" className="btn btn-info" to="/">Today's Workout</Link> <br />
          <Link type="button" className="btn btn-danger" to="/incomplete">Incomplete</Link> <br />
          <Link type="button" className="btn btn-success" to="/complete">Completed</Link>
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
}

export default App;