import React from 'react';
import defaultState from '../Data.js'

const ChecklistComplete = () => {
    return (
        <div>
            <h1>Checklist of Completed Items Goes Here</h1>
            <p>{defaultState.sculpt_a.warm_up[0].name}</p>
            <p>{defaultState.sculpt_a.warm_up[0].time}</p>
        </div>
    )
};

export default ChecklistComplete;