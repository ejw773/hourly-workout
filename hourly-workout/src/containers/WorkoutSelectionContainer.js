import WorkoutSelection from '../components/workout_selection'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        workout_selection: state.workout_selection
    }
}

export default connect(mapStateToProps)(WorkoutSelection);
