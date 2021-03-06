import { TOGGLE_EXERCISE } from "../actionTypes"
import { RESET } from "../actionTypes"

const initialState = {
    sculpt_b: {
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false
    },
    sweat_b: {
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
    45: false,
    46: false,
    47: false,
    48: false,
    49: false,
    50: false,
    51: false,
    52: false,
    53: false,
    54: false,
    55: false,
    56: false,
    57: false,
    58: false,
    59: false,
    60: false,
    61: false,
    62: false,
    63: false,
    64: false,
    65: false,
    66: false,
    67: false,
    68: false,
    69: false
    }
};

export default function toggle(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EXERCISE: {
            return {
                ...state,
                [action.payload.workoutSelection]: {
                    ...state[action.payload.workoutSelection],
                    [action.payload.id]: action.payload.toggleDirection
                    }
                }
            }
        case RESET: {
            return initialState;
        }
        default: return state;
    }
}
