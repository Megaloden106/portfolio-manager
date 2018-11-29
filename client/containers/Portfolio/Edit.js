import { connect } from 'react-redux';
import { changeAddCard } from '../../actions/actionCreators';
import Edit from '../../components/Portfolio/Edit';

const mapStateToProps = state => ({
  addCard: state.addCard,
  portfolioList: state.portfolioList,
});

const mapDispatchToProps = dispatch => ({
  handleAddPortfolioClick: bool => dispatch(changeAddCard(!bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
