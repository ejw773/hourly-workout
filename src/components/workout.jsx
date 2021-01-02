import React from 'react';
import RenderSections from './render_sections';
import { connect } from 'react-redux';

const Workout = (props) => {
    return (
        <div className="container exercise-container">
            <h1 id="welcome-note">Welcome, {props.userName}</h1>
            <RenderSections />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        userName: state.userName.user
    }
}

export default connect(mapStateToProps, null)(Workout);
