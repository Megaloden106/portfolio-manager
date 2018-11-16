import { connect } from 'react-redux';
import Sidebar from '../../components/Portfolio/Sidebar';

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
});

export default connect(mapStateToProps)(Sidebar);
