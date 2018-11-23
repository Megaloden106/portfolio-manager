import { connect } from 'react-redux';
import updateAddCard from '../../actions/card';
import AddCard from '../../components/Portfolio/AddCard';

const mapDispatchToProps = dispatch => ({
  handleAddPortfolioClick: () => dispatch(updateAddCard(false)),
});

export default connect(null, mapDispatchToProps)(AddCard);
