import { connect } from 'react-redux';
import Page from '../components/Page';

const mapStateToProps = state => ({
  page: state.page,
  user: state.user,
  portfolios: state.portfolios,
});

export default connect(mapStateToProps)(Page);
