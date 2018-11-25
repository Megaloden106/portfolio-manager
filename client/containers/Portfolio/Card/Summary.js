import { connect } from 'react-redux';
import { handleSessionCheck } from '../../../actions/account';
import Summary from '../../../components/Portfolio/Card/Summary';
import { updatePortfolio } from '../../../lib/portfolio';

const mapDispatchToProps = dispatch => ({
  handleUpdate: (data, id) => updatePortfolio(data, id)
    .then(() => dispatch(handleSessionCheck()))
    .catch(error => console.error(error)),
});

export default connect(null, mapDispatchToProps)(Summary);
