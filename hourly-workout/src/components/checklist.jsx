import React from 'react';
import defaultStateData from '../Data.js'
import WorkoutItem from './workout_item'

const Checklist = () => {
    const chosenWorkout = defaultStateData.sculpt_a;
    return (
        <div className="container">
            <h1>Today's Workout</h1>
            <div className="list-container">
                <h2>Warm-Up</h2>
                <div>
                    <WorkoutItem theExercise={chosenWorkout.warm_up} />
                </div>
                <h2>Cycle 1</h2>
                <div>
                    <WorkoutItem theExercise={chosenWorkout.cycle_1} />
                </div>
                <h2>Cycle 2</h2>
                <div>
                    <WorkoutItem theExercise={chosenWorkout.cycle_2} />
                </div>
                <h2>Cycle 3</h2>
                <div>
                    <WorkoutItem theExercise={chosenWorkout.cycle_3} />
                </div>
            </div>
        </div>
    )
};

export default Checklist;