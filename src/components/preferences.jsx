import React from 'react';
import WorkoutSelection from './workout_selection';
import { connect } from 'react-redux';
import { resetWorkout } from '../redux/actions'
import ResetButton from './reset.jsx'


const Checklist = (props) => {
    return (
        <div>
            <h1>Preferences</h1>
            <h3>Select Workout</h3>
            <WorkoutSelection />
            <h3>Select Background</h3>
            {/* <SelectBackground /> */}
            <h3>Reset</h3>
            <ResetButton />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentSelection: state[state.workout.workout_selection]
    }
}

export default connect(mapStateToProps, null)(Checklist);
