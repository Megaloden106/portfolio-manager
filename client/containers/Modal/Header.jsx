import { connect } from 'react-redux';
import Header from '../../components/Modal/Header';

const mapStateToProps = state => ({
  modalError: state.modalError,
  modalType: state.modalType,
});

export default connect(mapStateToProps)(Header);
