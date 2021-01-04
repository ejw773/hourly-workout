import React from 'react';
import WorkoutSelection from './workout_selection';
import ResetButton from './reset';
import { connect } from 'react-redux';
import { changeInput } from '../redux/actions';
import { setName } from '../redux/actions';


const Landing = (props) => {
    const handleChange = (event) => {
        let newName = event.target.value;
        props.changeInput(newName)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let newName = props.input;
        props.setName(newName)
        props.changeInput('')
    }
    return (
        <div className="card text-center text-black bg-primary mb-3 mx-auto" style={{maxWidth: '30rem'}}>
            <div className="card-body">
                {/* Select Workout */}
                <div className="preferences-container">
                    <h5 className="card-title">Select Your Workout</h5>
                    <WorkoutSelection />
                </div>

                {/* Enter Name */}
                <form className="preferences-container form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <h5 className="card-title">Enter Your Name</h5>
                    <input value={props.input} onChange={handleChange} className="form-control mr-sm-2" type="search" placeholder="Your Name" aria-label="Search" />
                    <h6 className="current-name">Current Name: {props.user}</h6>
                </form>

                {/* Reset Workout */}
                <div className="preferences-container">
                    <h5 className="card-title">Reset Workout</h5>
                    <ResetButton />
                </div>
                </div>
            {/* About Hourly Workout */}
            <div className="card-footer text-white">"Hourly Workout" is a personal app created by Elijah Wilcott as a way to work some P90 into an hourly routine on those days when setting up a 30-minute video just won't work. It currently only inclues the "B" (second month) workouts.</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    changeInput: (newName) => dispatch(changeInput(newName)),
    setName: (newName) => dispatch(setName(newName))
})

const mapStateToProps = state => {
    return {
        user: state.userName.user,
        input: state.input.input
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);