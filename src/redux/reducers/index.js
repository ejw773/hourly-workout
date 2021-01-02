import { combineReducers } from 'redux';
import userName from './user_name_reducer';
import workout from './workout_reducer';
import toggle from './toggle_reducer';
import exercises from './core_data_reducer'

export default combineReducers( {userName, workout, toggle, exercises} );