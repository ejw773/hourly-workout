const { default: defaultState } = require("../../Data");

const selectSculpA = {
    type: 'sculpt_a'
}

const selectSweatA = {
    type: 'sweat_1'
}

const selectSpecial = {
    type: 'sat_special'
}

function workoutSelector(state=defaultState, action) {
    if (action.type === 'sculpt_a') {
        return {
            
        }
    }
    return state;
}