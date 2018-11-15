import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Sidebar from '../../components/Portfolio/Sidebar';

const mapStateToProps = state => ({
  porfolioList: state.porfolioList,
});

export default connect(mapStateToProps)(Sidebar);
