import React from 'react';
import { connect } from 'react-redux';

// 1. Action Type
const TOGGLE = 'toggle'

// 2. Action Creator
const toggleWorkout = selection => {
    return {
        type: TOGGLE,
        workout_selection: selection
    }
}

// 3. Reducer
const toggleReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE:
            return {
                ...state,
                selected_workout: state.selected_workout
            }
    }
}

const WorkoutSelection = (props) => {
    const selectedButton = 'btn btn-primary btn-lg';
    const unselectedButton = 'btn btn-secondary btn-lg';
    let sculptButton = unselectedButton;
    let sweatButton = unselectedButton;
    props.workout_selection === 'sculpt_b' ? sculptButton = selectedButton : sweatButton = selectedButton ;
    return (
        <div className="selection-bar">
            <h1>Select Today's Workout:</h1>
            <div className="button-group">
                <button type="button" className={sculptButton} id="sculpt_b" onClick={props.changeSelection}>Sculpt</button>
                <button type="button" className={sweatButton} id="sweat_b" onClick={props.changeSelection}>Sweat</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        workout_selection: state.workout_selection
    }
}

export default connect(mapStateToProps)(WorkoutSelection);