import React from 'react';
import WorkoutItem from './workout_item';

class RenderExercises extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="exercises-container">
                {this.props.sculpt_a}
            </div>
        )
    }
}