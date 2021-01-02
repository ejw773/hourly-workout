import React from 'react';
import RenderSections from './render_sections';
import { connect } from 'react-redux';

const Workout = (props) => {
    return (
        <div className="container exercise-container">
            <RenderSections />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentSelection: state[state.workout.workout_selection]
    }
}

export default connect(mapStateToProps, null)(Workout);
