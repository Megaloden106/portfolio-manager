import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from '../components/Page';
import { handleSessionCheck } from '../actions/account';

const mapStateToProps = state => ({
  modalType: state.modalType,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  checkSession: () => dispatch(handleSessionCheck()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
