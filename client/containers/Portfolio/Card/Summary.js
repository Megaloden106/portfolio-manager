import { connect } from 'react-redux';
import { handleSessionCheck } from '../../../actions/auth';
import Summary from '../../../components/Portfolio/Card/Summary';
import { updatePortfolio } from '../../../lib/portfolio';

const mapDispatchToProps = dispatch => ({
  handleUpdate: (data, id, history) => updatePortfolio(data, id)
    .then(() => dispatch(handleSessionCheck(history)))
    .catch(error => console.error(error)),
});

export default connect(null, mapDispatchToProps)(Summary);
