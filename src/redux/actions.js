import {
    SELECT_WORKOUT,
    TOGGLE_EXERCISE,
    RESET,
    CHANGE_INPUT,
    SET_NAME
} from './actionTypes';

export const selectWorkout = selection => {
    return {
        type: SELECT_WORKOUT,
        payload: {
            selection
        }
    }
};

export const toggleExercise = (workoutSelection, toggleMe, thisToggle) => {
    console.log(thisToggle);
    console.log(!thisToggle);
    let toggleDirection = thisToggle;
    return {
        type: TOGGLE_EXERCISE,
        payload: {
            // name: toggleMe.name,
            id: toggleMe.id,
            workoutSelection: workoutSelection,
            toggleDirection: toggleDirection
            // isComplete: toggleMe.isComplete
        }
    }
}

export const resetWorkout = () => {
    return {
        type: RESET
    }
}

export const changeInput = (newInput) => {
    return {
        type: CHANGE_INPUT,
        payload: {
            input: newInput
        }
    }
}

export const setName = (userName) => {
    return {
        type: SET_NAME,
        payload: {
            user: userName
        }
    }
}

