import React from 'react';
import { connect } from 'react-redux';
import { toggleExercise } from '../redux/actions'

const RenderExercises = (props) => {
    let workoutSelection = props.workout.workout_selection;
    let theToggle = props.toggle[workoutSelection];
    let thisToggle = theToggle[props.exercise.id];
    const handleToggle = () => {
        let toggleMe = props.exercise;
        let toggleDirection = !thisToggle;
        props.toggleExercise(workoutSelection, toggleMe, toggleDirection);
    }
    return (
        props.exercise.time===null ? 
        <div className="form-check">
            <input className="form-check-input" onChange={handleToggle} id={props.exercise.id} type="checkbox" checked={thisToggle} value={props.exercise.id} key={props.exercise.id} />
            <label className="form-check-label" htmlFor={props.exercise.id}>{props.exercise.name} (Reps: {props.exercise.reps})</label>
        </div>
        :
        <div className="form-check">
            <input className="form-check-input" onChange={handleToggle} id={props.exercise.id} type="checkbox" checked={thisToggle} value={props.exercise.id} key={props.exercise.id} />
            <label className="form-check-label" htmlFor={props.exercise.id}>{props.exercise.name} (Time: {props.exercise.time})</label>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleExercise: (workoutSelection, toggleMe, toggleDirection) => dispatch(toggleExercise(workoutSelection, toggleMe, toggleDirection))
})

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderExercises);