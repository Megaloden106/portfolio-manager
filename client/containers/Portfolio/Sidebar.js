import { connect } from 'react-redux';
import updateAddCard from '../../actions/card';
import Sidebar from '../../components/Portfolio/Sidebar';

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
});

const mapDispatchToProps = dispatch => ({
  handleEditClick: () => {
    if (!window.location.pathname.includes('edit')) {
      dispatch(updateAddCard(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
