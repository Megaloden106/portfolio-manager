import { connect } from 'react-redux';
import BlurLayer from '../components/BlurLayer';
import updateModalDisplay from '../actions/modal';

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleBlurLayerClick: () => dispatch(updateModalDisplay('', '')),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlurLayer);
