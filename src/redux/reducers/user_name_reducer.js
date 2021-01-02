import { SET_NAME } from "../actionTypes"

const initialState = {
    user: "Anonymous"
};

export default function setName(state = initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default: return state;
    }
}