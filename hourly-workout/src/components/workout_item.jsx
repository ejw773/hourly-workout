import React from 'react';
import RenderExercises from './render_exercises'

const WorkoutItem = (props) => {
    return (
        <div>
            {props.theExercise.map((exercise) => (
                <RenderExercises toggleExercise={props.toggleExercise} key={exercise.id} id={exercise.id} name={exercise.name} time={exercise.time} reps={exercise.reps} />
            ))}
        </div>
    )
}

export default WorkoutItem