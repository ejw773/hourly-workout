import RenderSections from '../components/render_sections';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        workout_selection: state.workout_selection
    }
}

export default connect(mapStateToProps)(RenderSections);
