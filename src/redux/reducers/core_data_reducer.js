const initialState = {
    sculpt_b: {
        name: 'Sculpt Workout',
        cycles: 4,
        warm_up: [
            {
                name: 'Run in Place',
                id: 10,
                time: '0:30',
                reps: null
            },
            {
                name: 'Jumping Jacks',
                id: 11,
                time: '0:30',
                reps: null
            },
            {
                name: 'Twist and Pivot',
                id: 12,
                time: '0:30',
                reps: null
            },
            {
                name: 'Arm Circles (Forward)',
                id: 13,
                time: '0:30',
                reps: null
            },
            {
                name: 'Arm Circles (Back)',
                id: 14,
                time: '0:30',
                reps: null
            },
            {
                name: 'Sun Salutations',
                id: 15,
                time: null,
                reps: 2
            },
        ],
        cycle_1: [
            {
                name: 'Push-ups',
                id: 16,
                time: '0:30',
                reps: null
            },
            {
                name: 'Rocket Row',
                id: 17,
                time: '0:30',
                reps: null
            },
            {
                name: 'Fighter Stance Squats',
                id: 18,
                time: null,
                reps: '16'
            },
            {
                name: 'Thumbs-up Flys',
                id: 19,
                time: null,
                reps: 16
            },
            {
                name: 'Curl Hammer Combo',
                id: 20,
                time: null,
                reps: 16
            },
            {
                name: 'Launcher Kickbacks',
                id: 21,
                time: null,
                reps: 16
            },
            {
                name: 'Side Lunge Squats',
                id: 22,
                time: null,
                reps: 16
            }
        ],
        cycle_2: [
            {
                name: 'Sand Crab Push-Up',
                id: 23,
                time: '0:30',
                reps: null
            },
            {
                name: 'Iso Rocket Row',
                id: 24,
                time: null,
                reps: 16
            },
            {
                name: 'Fighter Hoppers',
                id: 25,
                time: null,
                reps: 16
            },
            {
                name: 'Scarecrow Press',
                id: 26,
                time: null,
                reps: 16
            },
            {
                name: 'Seven / Seven / Seven',
                id: 27,
                time: null,
                reps: 21
            },
            {
                name: 'Chair Dips',
                id: 28,
                time: '0:30',
                reps: null
            },
            {
                name: 'Side Back Lunges',
                id: 29,
                time: null,
                reps: 16
            }
        ],
        cycle_3: [
            {
                name: 'The Crab Special',
                id: 30,
                time: '0:30',
                reps: null
            },
            {
                name: 'Renegade Rows',
                id: 31,
                time: null,
                reps: 16
            },
            {
                name: 'Pogo Fighters',
                id: 32,
                time: null,
                reps: 16
            },
            {
                name: 'Batman Flys',
                id: 33,
                time: null,
                reps: 16
            },
            {
                name: 'Balance Curls',
                id: 34,
                time: null,
                reps: 16
            },
            {
                name: 'Leg-Up Dips',
                id: 35,
                time: '0:30',
                reps: null
            },
            {
                name: 'Runner Lunges',
                id: 36,
                time: '0:40',
                reps: null
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
                reps: null
            },
            {
                name: 'Run in Place',
                id: 38,
                time: '0:30',
                reps: null
            },
            {
                name: 'Sun Salutations',
                id: 39,
                time: null,
                reps: 2
            }
        ],
        cycle_1: [
            {
                name: 'Lateral Run Squats',
                id: 40,
                time: '1:00',
                reps: null
            },
            {
                name: 'Elbow, Uppercut, Pull (Right)',
                id: 41,
                time: '0:30',
                reps: null
            },
            {
                name: 'Elbow, Uppercut, Pull (Left)',
                id: 42,
                time: '0:30',
                reps: null
            },
            {
                name: 'Front to Side Jacks',
                id: 43,
                time: '1:00',
                reps: null
            },
            {
                name: 'Jab, Upper Elbow, Kick (Right)',
                id: 44,
                time: '0:30',
                reps: null
            },
            {
                name: 'Jab, Upper Elbow, Kick (Left)',
                id: 45,
                time: '0:30',
                reps: null
            },
            {
                name: 'Side Lunge Row',
                id: 46,
                time: '1:00',
                reps: null
            },
            {
                name: 'Hook, Cross, Push (Right)',
                id: 47,
                time: '0:30',
                reps: null
            },
            {
                name: 'Hook, Cross, Push (Left)',
                id: 48,
                time: '0:30',
                reps: null
            },
            {
                name: '2 Speed Tires',
                id: 49,
                time: '1:00',
                reps: null
            },
            {
                name: 'Down, Strike, Sprawl (Right)',
                id: 50,
                time: '0:30',
                reps: null
            },
            {
                name: 'Down, Strike, Sprawl (Left)',
                id: 51,
                time: '0:30',
                reps: null
            },
            {
                name: 'Climbers Combo',
                id: 52,
                time: '1:00',
                reps: null
            },
            {
                name: 'Jump Front Kicks (Right)',
                id: 53,
                time: '0:30',
                reps: null
            },
            {
                name: 'Jump Front Kicks (Left)',
                id: 54,
                time: '0:30',
                reps: null
            }
        ],
        cycle_2: [
            {
                name: 'Lateral Run Squats',
                id: 55,
                time: '1:00',
                reps: null
            },
            {
                name: 'Elbow, Uppercut, Pull (Right)',
                id: 56,
                time: '0:30',
                reps: null
            },
            {
                name: 'Elbow, Uppercut, Pull (Left)',
                id: 57,
                time: '0:30',
                reps: null
            },
            {
                name: 'Front to Side Jacks',
                id: 58,
                time: '1:00',
                reps: null
            },
            {
                name: 'Jab, Upper Elbow, Kick (Right)',
                id: 59,
                time: '0:30',
                reps: null
            },
            {
                name: 'Jab, Upper Elbow, Kick (Left)',
                id: 60,
                time: '0:30',
                reps: null
            },
            {
                name: 'Side Lunge Row',
                id: 61,
                time: '1:00',
                reps: null
            },
            {
                name: 'Hook, Cross, Push (Right)',
                id: 62,
                time: '0:30',
                reps: null
            },
            {
                name: 'Hook, Cross, Push (Left)',
                id: 63,
                time: '0:30',
                reps: null
            },
            {
                name: '2 Speed Tires',
                id: 64,
                time: '1:00',
                reps: null
            },
            {
                name: 'Down, Strike, Sprawl (Right)',
                id: 65,
                time: '0:30',
                reps: null
            },
            {
                name: 'Down, Strike, Sprawl (Left)',
                id: 66,
                time: '0:30',
                reps: null
            },
            {
                name: 'Climbers Combo',
                id: 67,
                time: '1:00',
                reps: null
            },
            {
                name: 'Jump Front Kicks (Right)',
                id: 68,
                time: '0:30',
                reps: null
            },
            {
                name: 'Jump Front Kicks (Left)',
                id: 69,
                time: '0:30',
                reps: null
            }
        ]
    },
};

export default function exercises(state = initialState, action) {
    return state;
}
