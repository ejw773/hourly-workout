import React from 'react';
import { connect } from 'react-redux';
import { toggleExercise } from '../redux/actions'

const RenderExercises = (props) => {
    const handleToggle = (event) => {
        let toggleMe = props.exercise;
        props.toggleExercise(toggleMe);
    }
    return (
        props.exercise.time===null ? 
        <div className="form-check">
            <input className="form-check-input" onChange={handleToggle} id={props.exercise.id} type="checkbox" checked={props.toggle[props.exercise.id]} value={props.exercise.id} key={props.exercise.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.exercise.name} (Reps: {props.exercise.reps})</label>
        </div>
        :
        <div className="form-check">
            <input className="form-check-input" onChange={handleToggle} id={props.exercise.id} type="checkbox" checked={props.toggle[props.exercise.id]} value={props.exercise.id} key={props.exercise.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.exercise.name} (Time: {props.exercise.time})</label>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleExercise: (toggleMe) => dispatch(toggleExercise(toggleMe))
})

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderExercises);