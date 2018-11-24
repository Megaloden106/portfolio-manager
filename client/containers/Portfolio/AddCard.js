import { connect } from 'react-redux';
import { handleSessionCheck } from '../../actions/account';
import updateAddCard from '../../actions/card';
import AddCard from '../../components/Portfolio/AddCard';
import { registerPortfolio } from '../../lib/portfolio';

const mapDispatchToProps = dispatch => ({
  handleAddClick: (data) => {
    dispatch(updateAddCard(false));
    registerPortfolio(data)
      .then(() => dispatch(handleSessionCheck()))
      .catch(error => console.error(error));
  },
  handleCancelClick: () => dispatch(updateAddCard(false)),
});

export default connect(null, mapDispatchToProps)(AddCard);
