import React from 'react';
import RenderSections from './render_sections';
import { connect } from 'react-redux';

const Checklist = (props) => {
    return (
        <div className="container">
            <h1>Today's Selection: {props.currentSelection}</h1>
            <RenderSections />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        currentSelection: state[state.workout.workout_selection]
    }
}

export default connect(mapStateToProps, null)(Checklist);
