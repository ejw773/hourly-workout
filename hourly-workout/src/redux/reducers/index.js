import { combineReducers } from 'redux';
import workout from './workout_reducer';
import exercises from './exercise_reducer';

export default combineReducers( {workout, exercises} );