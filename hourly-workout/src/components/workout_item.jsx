import React from 'react';
import defaultState from '../Data.js'

const WorkoutItem = (item) => {
    console.log(item.item[3].name);
    return (
        <div>
            <p>Item Goes Here</p>
        </div>
    )
}

export default WorkoutItem