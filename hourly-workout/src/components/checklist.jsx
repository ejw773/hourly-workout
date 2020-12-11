import React from 'react';
import defaultState from '../Data.js'
import WorkoutItem from './workout_item'

const Checklist = () => {
    const theStuff = ['a', 'b', 'c', 'd'];
    console.log(theStuff);
    return (
        <div className="container">
            <h1>Today's Workout</h1>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">{defaultState.sculpt_a.warm_up[0].name} Time: {defaultState.sculpt_a.warm_up[0].time}</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label className="form-check-label" htmlFor="defaultCheck2">{defaultState.sculpt_a.warm_up[1].name} Time: {defaultState.sculpt_a.warm_up[1].time}</label>
            </div>
            <div>
                <WorkoutItem theExercise={theStuff.map} />
            </div>
        </div>
    )
};

export default Checklist;