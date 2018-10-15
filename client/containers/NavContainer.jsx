import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  portfolios: state.portfolios,
});

export default connect(mapStateToProps)(Nav);
