import React from 'react';
import WorkoutSelection from './workout_selection';
import { connect } from 'react-redux';
import ResetButton from './reset.jsx'


const Checklist = (props) => {
    return (
        <div className="card text-center text-black bg-warning mb-3 mx-auto" style={{maxWidth: '30rem'}}>
            <h1>Change Workout</h1>
            <WorkoutSelection />
            <h1>Reset Exercises</h1>
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
