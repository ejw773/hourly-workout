import { CHANGE_INPUT } from "../actionTypes"

const initialState = {
    input: ""
};

export default function changeInput(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT: {
            return {
                ...state,
                input: action.payload.input
            }
        }
        default: return state;
    }
}