import { TOGGLE_EXERCISE } from '../actionTypes';

const initialState = {
    sculpt_b: {
        name: 'Sculpt Workout',
        cycles: 4,
        warm_up: [
            {
                name: 'Run in Place',
                id: 10,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jumping Jacks',
                id: 11,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Twist and Pivot',
                id: 12,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Arm Circles (Forward)',
                id: 13,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Arm Circles (Back)',
                id: 14,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Sun Salutations',
                id: 15,
                time: '1:30',
                reps: 2,
                isComplete: false
            },
        ],
        cycle_1: [
            {
                name: 'Push-ups',
                id: 16,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Rocket Row',
                id: 17,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Fighter Stance Squats',
                id: 18,
                time: null,
                reps: '16',
                isComplete: false
            },
            {
                name: 'Thumbs-up Flys',
                id: 19,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Curl Hammer Combo',
                id: 20,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Launcher Kickbacks',
                id: 21,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Side Lunge Squats',
                id: 22,
                time: null,
                reps: 16,
                isComplete: false
            }
        ],
        cycle_2: [
            {
                name: 'Sand Crab Push-Up',
                id: 23,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Iso Rocket Row',
                id: 24,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Fighter Hoppers',
                id: 25,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Scarecrow Press',
                id: 26,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Seven / Seven / Seven',
                id: 27,
                time: null,
                reps: 21,
                isComplete: false
            },
            {
                name: 'Chair Dips',
                id: 28,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Side Back Lunges',
                id: 29,
                time: null,
                reps: 16,
                isComplete: false
            }
        ],
        cycle_3: [
            {
                name: 'The Crab Special',
                id: 30,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Renegade Rows',
                id: 31,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Pogo Fighters',
                id: 32,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Batman Flys',
                id: 33,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Balance Curls',
                id: 34,
                time: null,
                reps: 16,
                isComplete: false
            },
            {
                name: 'Leg-Up Dips',
                id: 35,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Runner Lunges',
                id: 36,
                time: '0:40',
                reps: null,
                isComplete: false
            }
        ]
    },
    sweat_b: {
        name: 'Sweat Workout',
        cycles: 3,
        warm_up: [
            {
                name: 'Kayak Knee Lift',
                id: 37,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Run in Place',
                id: 38,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Sun Salutations',
                id: 39,
                time: null,
                reps: 2,
                isComplete: false
            }
        ],
        cycle_1: [
            {
                name: 'Lateral Run Squats',
                id: 40,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Elbow, Uppercut, Pull (Right)',
                id: 41,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Elbow, Uppercut, Pull (Left)',
                id: 42,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Front to Side Jacks',
                id: 43,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jab, Upper Elbow, Kick (Right)',
                id: 44,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jab, Upper Elbow, Kick (Left)',
                id: 45,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Side Lunge Row',
                id: 46,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Hook, Cross, Push (Right)',
                id: 47,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Hook, Cross, Push (Left)',
                id: 48,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: '2 Speed Tires',
                id: 49,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Down, Strike, Sprawl (Right)',
                id: 50,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Down, Strike, Sprawl (Left)',
                id: 51,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Climbers Combo',
                id: 52,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jump Front Kicks (Right)',
                id: 53,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jump Front Kicks (Left)',
                id: 54,
                time: '0:30',
                reps: null,
                isComplete: false
            }
        ],
        cycle_2: [
            {
                name: 'Lateral Run Squats',
                id: 55,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Elbow, Uppercut, Pull (Right)',
                id: 56,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Elbow, Uppercut, Pull (Left)',
                id: 57,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Front to Side Jacks',
                id: 58,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jab, Upper Elbow, Kick (Right)',
                id: 59,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jab, Upper Elbow, Kick (Left)',
                id: 60,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Side Lunge Row',
                id: 61,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Hook, Cross, Push (Right)',
                id: 62,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Hook, Cross, Push (Left)',
                id: 63,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: '2 Speed Tires',
                id: 64,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Down, Strike, Sprawl (Right)',
                id: 65,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Down, Strike, Sprawl (Left)',
                id: 66,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Climbers Combo',
                id: 67,
                time: '1:00',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jump Front Kicks (Right)',
                id: 68,
                time: '0:30',
                reps: null,
                isComplete: false
            },
            {
                name: 'Jump Front Kicks (Left)',
                id: 69,
                time: '0:30',
                reps: null,
                isComplete: false
            }
        ]
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EXERCISE: {
            return state;
        }
        default: return state;
    }
}