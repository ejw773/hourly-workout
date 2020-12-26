import React from 'react';
import RenderExercises from './render_exercises'
import { connect } from 'react-redux';

const RenderSections = (props) => {
    const workoutName = props.workout.workout_selection;
    const thisWorkout = props.exercises[workoutName];
    return (
        <div className="list-container">

        {
            thisWorkout.warm_up
            ?
            <div>
            <h2>Warm-Up</h2>
                <div>
                    {thisWorkout.warm_up.map((exercise, idx) => (
                        <RenderExercises exercise={exercise} key={idx} section='warm_up'/>
                    ))}
                </div>
            </div>
            :
            <div></div>
        }
        {
            thisWorkout.cycle_1 ?
            <div>
            <h2>Cycle 1</h2>
                <div>
                    {thisWorkout.cycle_1.map((exercise, idx) => (
                        <RenderExercises exercise={exercise} key={idx} section='cycle_1' />
                    ))}
                </div>
            </div>
            : <div></div>
        }
        {
            thisWorkout.cycle_2 ?
            <div>
            <h2>Cycle 2</h2>
                <div>
                    {thisWorkout.cycle_2.map((exercise, idx) => (
                        <RenderExercises exercise={exercise} key={idx} section='cycle_2' />
                    ))}
                </div>
            </div>
            : <div></div>
        }
        {
            thisWorkout.cycle_3 ?
            <div>
            <h2>Cycle 3</h2>
                <div>
                    {thisWorkout.cycle_3.map((exercise, idx) => (
                        <RenderExercises exercise={exercise} key={idx} section='cycle_3' />
                    ))}
                </div>
            </div>
            : <div></div>
        }
    </div>
        )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(RenderSections);