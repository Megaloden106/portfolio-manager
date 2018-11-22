import { connect } from 'react-redux';
import updateAddCard from '../../actions/card';
import Edit from '../../components/Portfolio/Edit';

const mapStateToProps = state => ({
  addCard: state.addCard,
});

const mapDispatchToProps = dispatch => ({
  handleAddPortfolioClick: () => dispatch(updateAddCard(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
