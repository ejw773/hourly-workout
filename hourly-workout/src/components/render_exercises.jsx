import React from 'react';
import { connect } from 'react-redux';
import { toggleExercise } from '../redux/actions'

const RenderExercises = (props) => {
    const handleToggle = (event) => {
        let toggleID = event.target.id;
        props.toggleExercise(toggleID);
    }
    return (
        props.exercise.time===null ? 
        <div className="form-check">
            <input className="form-check-input" onChange={handleToggle} id={props.exercise.id} type="checkbox" checked={props.exercise.isComplete} value={props.exercise.id} key={props.exercise.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.exercise.name} (Reps: {props.exercise.reps})</label>
        </div>
        :
        <div className="form-check">
            <input className="form-check-input" onChange={handleToggle} id={props.exercise.id} type="checkbox" checked={props.exercise.isComplete} value={props.exercise.id} key={props.exercise.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.exercise.name} (Time: {props.exercise.time})</label>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleExercise: (toggleId) => dispatch(toggleExercise(toggleId))
})

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderExercises);