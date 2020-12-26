import { combineReducers } from 'redux';
import workout from './workout_reducer';
import toggle from './toggle_reducer';
import exercises from './core_data_reducer'

export default combineReducers( {workout, toggle, exercises} );