import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(Portfolio);
