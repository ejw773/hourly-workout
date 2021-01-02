import React from 'react';
import WorkoutSelection from './workout_selection';
import { connect } from 'react-redux';
import { userName } from '../redux/actions';


const Landing = (props) => {
    const handleChange = (event) => {
        let newName = event.target.value;
        props.userName(newName)
    }
    const handleSubmit = (event) => {
        console.log(event.target);
    }
    return (
        <div className="card text-center text-black bg-primary mb-3 mx-auto" style={{maxWidth: '30rem'}}>
            <div className="card-header">P90</div>
            <div className="card-body">
                <h5 className="card-title">Select Your Workout</h5>
                <WorkoutSelection />

                {/* Form Here */}
                <h5 className="card-title">Enter Your Name</h5>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control" placeholder="Your Name" value={props.user} onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>

            </div>
            <div className="card-body">
                <button type="button" onClick={handleSubmit} className="btn-lg btn-success">Go!</button>
            </div>
            <div className="card-footer text-white">"Hourly Workout" is a personal app created by Elijah Wilcott as a way to work some P90 into an hourly routine on those days when setting up a 30-minute video just won't work. It currently only inclues the "B" (second month) workouts.</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    userName: (newName) => dispatch(userName(newName))
})

const mapStateToProps = state => {
    return {
        user: state.userName.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);