import React from 'react';
import RenderSections from './render_sections';
import { connect } from 'react-redux';

const Landing = (props) => {
    return (
        <div className="container exercise-container landing">
            <h2>Landing Page</h2>
        </div>
    )
};

// function mapStateToProps(state) {
//     return {
//         currentSelection: state[state.workout.workout_selection]
//     }
// }

export default Landing;
