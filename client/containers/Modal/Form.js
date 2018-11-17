import { connect } from 'react-redux';
import updateModalDisplay from '../../actions/modal';
import Form from '../../components/Modal/Form';

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
