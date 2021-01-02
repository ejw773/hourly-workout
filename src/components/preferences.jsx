import React from 'react';
import WorkoutSelection from './workout_selection';
import { connect } from 'react-redux';
import ResetButton from './reset.jsx'


const Checklist = (props) => {
    return (
        <div>
            <h2>Change Workout</h2>
            <WorkoutSelection />
            <h2>Reset Exercises</h2>
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
