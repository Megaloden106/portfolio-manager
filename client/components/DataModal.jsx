import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import updateModalDisplay from '../actions/modal';
import styles from '../styles/DataModal';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: 'form',
    };
  }

  render() {
    const { modalError } = this.props;
    const { dataType } = this.state;
    return (
      <div className={styles.modalContainer}>
        <div className={styles.headerContainer}>
          Add Balance
        </div>
        <div className={styles.selector}>
          Hello
        </div>
        {modalError && (
          <p className={styles.errorMsg}>
            {modalError}
          </p>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  modalError: state.modalError,
});

const mapDispatchToProps = dispatch => ({
  // handleLogin: () => dispatch(updateModalDisplay('', 'Login')),
  // handleSingup: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
  modalError: PropTypes.string,
  // handleSingup: PropTypes.func.isRequired,
  // handleLogin: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalError: null,
};
