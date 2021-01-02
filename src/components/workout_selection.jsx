import React from 'react';
import { connect } from 'react-redux';
import { selectWorkout } from '../redux/actions';

const WorkoutSelection = (props) => {
    const selectedButton = 'btn btn-primary btn-lg';
    const unselectedButton = 'btn btn-secondary btn-lg';
    let sculptButton = unselectedButton;
    let sweatButton = unselectedButton;
    const changeSelection = event => {
        let selection = event.target.id;
        props.selectWorkout(selection);
    }
    

    props.workout_selection === 'sculpt_b' ? sculptButton = selectedButton : sweatButton = selectedButton ;
    return (
        <div className="selection-bar">
        <div className="btn-group container" role="group" arial-label="completion-menu">
                <button type="button" className={sculptButton} id="sculpt_b" onClick={changeSelection}>Sculpt</button>
                <button type="button" className={sweatButton} id="sweat_b" onClick={changeSelection}>Sweat</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    selectWorkout: (selection) => dispatch(selectWorkout(selection))
})

const mapStateToProps = state => {
    return {
        workout_selection: state.workout.workout_selection
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSelection);