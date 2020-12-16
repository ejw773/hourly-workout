import React from 'react';
import RenderExercises from './render_exercises'

const WorkoutItem = (props) => {
    console.log(props);
    return (
        <div>
            {props.theExercise.map((exercise) => (
                <RenderExercises key={exercise.id} id={exercise.id} name={exercise.name} time={exercise.time} reps={exercise.reps} />
            ))}
            <h1></h1>
        </div>
    )
}

export default WorkoutItem