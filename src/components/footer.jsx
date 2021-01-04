import React from 'react';
import { connect } from 'react-redux';

const Footer = (props) => {
    const theWorkout = props.workout;
    const dataSet = props.toggle[theWorkout];
    const theArray = Object.values(dataSet);
    let theTotal = theArray.length;
    let totalFinished = 0;
    let i;
    for (i = 0; i < theTotal; i++) {
        if (theArray[i] === true) {
            totalFinished = totalFinished + 1;
        }
    }
    let doneAmount = (totalFinished / theTotal) * 100;
    let undoneAmount = 100 - doneAmount;
    let doneString = doneAmount.toString();
    let undoneString = undoneAmount.toString();
    let donePercent = doneAmount + "%";
    let undonePercent = undoneAmount + "%";
    let doneObject = {
        width: donePercent
    };
    let undoneObject = {
        width: undonePercent
    }
    return (
        <div>
            <div className="fixed-bottom footer progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={doneObject} aria-valuenow={doneString} aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-dark" role="progressbar" style={undoneObject} aria-valuenow={undoneString} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <nav className="navbar fixed-bottom navbar-dark justify-content-center footer">
                <a className="navbar-brand" href="https://www.beachbodyondemand.com/programs/p90/workouts" target="_blank" rel="noreferrer">Workout from P90 by Beachbody.</a>
            </nav>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        workout: state.workout.workout_selection,
        toggle: state.toggle
    }
}

export default connect(mapStateToProps)(Footer)