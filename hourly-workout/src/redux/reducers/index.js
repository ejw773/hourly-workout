const { default: defaultState } = require("../../Data");

function exercise(state=defaultState, action) {    
    switch(action.type) {
        case 'toggle':
            let targetToggle = sculpt_a.warm_up[0].targetToggle;
            return {
                targetToggle = !state.targetToggle
            }
    };
    return state;
}

export default exercise;