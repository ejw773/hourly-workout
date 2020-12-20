import {
    SELECT_WORKOUT,
    TOGGLE_EXERCISE
} from './actionTypes';

export const selectWorkout = selection => {
    return {
        type: SELECT_WORKOUT,
        payload: {
            selection
        }
    }
};

export const toggleExercise = toggleID => {
    return {
        type: TOGGLE_EXERCISE,
        payload: {
            toggleID
        }
    }
}