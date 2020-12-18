import Checklist from '../components/checklist';
import { connect } from 'react-redux';
import { actionIncrement } from '../redux/actions';

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () =>{
            dispatch(actionIncrement());
        }
    }
}

export default connect(null, mapDispatchToProps)(Checklist);
