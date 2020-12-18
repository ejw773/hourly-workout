import React from 'react';
import { connect } from 'react-redux';

const RenderExercises = (props) => {
    return (
        props.exercise.time===null ? 
        <div className="form-check">
            <input className="form-check-input" id={props.exercise.id} type="checkbox" value="" key={props.exercise.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.exercise.name} (Reps: {props.exercise.reps})</label>
        </div>
        :
        <div className="form-check">
            <input className="form-check-input" id={props.exercise.id} type="checkbox" value="" key={props.exercise.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.exercise.name} (Time: {props.exercise.time})</label>
        </div>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(RenderExercises);