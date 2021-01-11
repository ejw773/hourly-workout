import React from 'react';

const Footer = (props) => {
    const theWorkout = props.workout;
    const dataSet = props.toggle[theWorkout];
    console.log(dataSet);
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
    let barColor = "progress-bar progress-bar-striped"
    if (doneAmount === 100) {
        barColor = 'progress-bar bg-success'
    }
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-primary justify-content-center">
            <a className="navbar-brand" href="https://www.beachbodyondemand.com/programs/p90/workouts" target="_blank" rel="noreferrer">Workout from P90 by Beachbody.</a>
        </nav>
    )
}

export default Footer