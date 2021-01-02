import { CHANGE_NAME } from "../actionTypes"

const initialState = {
    user: "Anonymous"
};

export default function userName(state = initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default: return state;
    }
}