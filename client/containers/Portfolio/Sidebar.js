import { connect } from 'react-redux';
import { changeAddCard } from '../../actions/actionCreators';
import Sidebar from '../../components/Portfolio/Sidebar';

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
});

const mapDispatchToProps = dispatch => ({
  handleEditClick: () => {
    if (!window.location.pathname.includes('edit')) {
      dispatch(changeAddCard(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
