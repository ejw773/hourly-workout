import React from 'react';
import WorkoutSelection from './workout_selection';
import ResetButton from './reset.jsx'
import Quote from './quote'
import { connect } from 'react-redux';


const Preferences = (props) => {
    return (
        <div>
            <div id="preferences" className="card text-center text-black bg-warning mb-3 mx-auto" style={{maxWidth: '30rem'}}>
                <h1>Change Workout</h1>
                <WorkoutSelection />
                <h1>Reset Exercises</h1>
                <ResetButton />
            </div>
            <Quote />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentSelection: state[state.workout.workout_selection]
    }
}

export default connect(mapStateToProps, null)(Preferences);
