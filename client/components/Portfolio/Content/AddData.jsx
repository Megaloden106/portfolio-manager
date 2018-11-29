import React from 'react';
import styles from '../../../styles/Portfolio/Content/AddData';

class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false,
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleAddClick() {
    this.setState({ showAddForm: true });
  }

  handleCancelClick() {
    this.setState({ showAddForm: false });
  }

  render() {
    const { showAddForm } = this.state;
    return (
      <React.Fragment>
        {showAddForm ? (
          <div className={styles.addContainer}>
            <input
              type="button"
              value="Cancel"
              className={styles.addButton}
              onClick={this.handleCancelClick}
            />
          </div>
        ) : (
          <div className={styles.addContainer}>
            <input
              type="button"
              value="+ ADD DATA"
              className={styles.addButton}
              onClick={this.handleAddClick}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default AddData;
