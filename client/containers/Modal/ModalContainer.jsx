import { connect } from 'react-redux';
import Modal from '../../components/Modal';

const mapStateToProps = state => ({
  modalType: state.modalType,
});

export default connect(mapStateToProps)(Modal);
