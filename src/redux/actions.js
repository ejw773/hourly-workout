import {
    SELECT_WORKOUT,
    TOGGLE_EXERCISE,
    RESET
} from './actionTypes';

export const selectWorkout = selection => {
    return {
        type: SELECT_WORKOUT,
        payload: {
            selection
        }
    }
};

export const toggleExercise = (toggleMe) => {
    return {
        type: TOGGLE_EXERCISE,
        payload: {
            name: toggleMe.name,
            id: toggleMe.id,
            isComplete: toggleMe.isComplete
        }
    }
}

export const resetWorkout = () => {
    return {
        type: RESET
    }
}