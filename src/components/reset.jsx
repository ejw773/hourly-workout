import React from 'react';
import { connect } from 'react-redux';
import { resetWorkout } from '../redux/actions'

const ResetButton = (props) => {
    const resetAll = () => {
        props.resetWorkout();
    };
    return (
        <div className="btn-group container" role="group" arial-label="reset-button" id="footer">
                <button type="button" className="btn btn-danger btn-lg" id="reset-button" onClick={resetAll}>Reset All</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    resetWorkout: () => dispatch(resetWorkout())
})

export default connect(null, mapDispatchToProps)(ResetButton);