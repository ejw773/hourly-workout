import RenderExercises from '../components/render_exercises';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        workout_selection: state.workout_selection
    }
}

export default connect(mapStateToProps)(RenderExercises);
