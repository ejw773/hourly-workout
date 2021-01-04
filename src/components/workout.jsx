import React from 'react';
import RenderSections from './render_sections';
import Quote from './quote'
import { connect } from 'react-redux';

const Workout = (props) => {
    return (
        <div>
            <div className="container exercise-container">
                <h1 className="note-to-user">Keep at it, {props.userName}!</h1>
                <RenderSections />
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        userName: state.userName.user
    }
}

export default connect(mapStateToProps, null)(Workout);
