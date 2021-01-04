import React from 'react';
import RenderSections from './render_sections';
import ResetButton from './reset'
import { connect } from 'react-redux';

const Workout = (props) => {
    return (
        <div>
            <div className="container exercise-container">
                <h1 className="note-to-user">Keep at it, {props.userName}!</h1>
                <RenderSections />
            </div>
            <div className="card text-center text-black bg-primary mb-3 mx-auto" style={{maxWidth: '30rem'}}>
                <div className="card-body reset-container">
                    <h5 className="card-title">Reset Workout</h5>
                    <ResetButton />
                </div>
            </div>
            <div className="empty-div"></div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        userName: state.userName.user
    }
}

export default connect(mapStateToProps, null)(Workout);
