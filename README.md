# Hourly Working

Doing [P90](https://www.beachbodyondemand.com/programs/p90/workouts)? Don't have time for the video today? Do it bit by bit. Use this tool to track yourself.

## About This Project

I successfully did the first month of P90 before starting coding bootcamp. Month 2 completely fell by the wayside. Then I realized: If I broke the workout into bits and pieces throughout the day, it becomes much more manageable. I created this React project to keep track.

## Status

I've hard coded the exercises for the second month ("B") workouts. Nothing beyond that at this point.

## :hammer_and_wrench: Technologies Used

- HTML
- CSS
- Javascript
- Bootstrap
- React
- Redux
- react-router-dom

## 🖥 Screenshots

- **Landing Page - Enter Your Name**  
  
![image](https://raw.githubusercontent.com/ejw773/hourly-workout/main/docs/img/IMG_7255.PNG)

- **Workout Page - Check Them off One by One**  
  
![image](https://raw.githubusercontent.com/ejw773/hourly-workout/main/docs/img/IMG_7257.PNG)

- **Progress Bar at Bottom of Screen**  
  
![image](https://raw.githubusercontent.com/ejw773/hourly-workout/main/docs/img/IMG_7258.PNG)

- **Progress Bar Complete**  
  
![image](https://raw.githubusercontent.com/ejw773/hourly-workout/main/docs/img/IMG_7259.PNG)

- **Inspirational Quote (Yes, I confess, just to get an API call into the project)**  
  
![image](https://raw.githubusercontent.com/ejw773/hourly-workout/main/docs/img/IMG_7260.PNG)

## Demo Video

## Code Snippet (Reset Button Component)

```
import React from 'react';
import { connect } from 'react-redux';
import { resetWorkout } from '../redux/actions'

const ResetButton = (props) => {
    const resetAll = () => {
        props.resetWorkout();
    };
    return (
        <div className="btn-group container text-center d-flex justify-content-center reset-button" role="group" arial-label="reset-button" id="footer">
                <button type="button" className="btn btn-danger btn-lg" id="reset-button" onClick={resetAll}>Reset All</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    resetWorkout: () => dispatch(resetWorkout())
})

export default connect(null, mapDispatchToProps)(ResetButton);
```

MIT © Elijah Wilcott
