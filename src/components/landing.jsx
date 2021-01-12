import React from 'react';
import WorkoutSelection from './workout_selection';
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
        <div>
        <div className="card text-center text-black bg-primary mb-3 mx-auto preferences-card" style={{maxWidth: '30rem'}}>
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
                    <button className="btn btn-success btn-lg set-name">Set Name</button>
                    <h6 className="current-name">Current Name: {props.user}</h6>
                </form>
                </div>

            {/* About Hourly Workout */}
            <div className="card-footer text-white bg-secondary">"Hourly Workout" is a personal app created by <a target="_blank" rel="noreferrer" href="https://www.elijahwilcott.com" id="elijah-link">Elijah Wilcott</a> as a way to work some P90 into an hourly routine on those days when setting up a 30-minute video just won't work. It currently only inclues the "B" (second month) workouts.</div>
        </div>
        <div className="empty-div"></div>

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