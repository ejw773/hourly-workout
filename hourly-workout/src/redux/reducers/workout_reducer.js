import { SELECT_WORKOUT } from "../actionTypes"

const initialState = {
    workout_selection: "sculpt_b"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_WORKOUT: {
            return {
                ...state,
                workout_selection: action.payload.selection
            }
        }
        default: return state;
    }
}