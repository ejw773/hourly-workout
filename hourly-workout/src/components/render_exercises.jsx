import React from 'react';

const RenderExercises = (props) => {
    console.log(props);
    console.log(props.name);
    console.log(props.id);
    console.log(props.reps);
    function helloWorld(event) {console.log(event.target)};
    return (
        props.time===null ? 
        <div className="form-check">
            <input className="form-check-input" id={props.id} onChange={helloWorld} type="checkbox" value="" key={props.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.name} (Reps: {props.reps})</label>
        </div>
        :
        <div className="form-check">
            <input className="form-check-input" id={props.id} onChange={helloWorld} type="checkbox" value="" key={props.id} />
            <label className="form-check-label" htmlFor="defaultCheck1">{props.name} (Time: {props.time})</label>
        </div>
    )
}

export default RenderExercises;