import React from 'react';
import Quote from './quote'
import { connect } from 'react-redux';


const QuotePage = (props) => {
    return (
        <div>
            {/* <div id="preferences" className="card text-center text-black bg-warning mb-3 mx-auto" style={{maxWidth: '30rem'}}>
                <h1>Change Workout</h1>
                <WorkoutSelection />
                <h1>Reset Exercises</h1>
                <ResetButton />
            </div> */}
            <h1 className="note-to-user">Remember, {props.name}:</h1>
            <Quote />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentSelection: state[state.workout.workout_selection],
        name: state.userName.user
    }
}

export default connect(mapStateToProps, null)(QuotePage);
