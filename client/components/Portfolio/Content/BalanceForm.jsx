import React from 'react';
import moment from 'moment';

class BalanceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-M-D'),
      balance: '',
      deposit: '',
      withdrawal: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const target = event.target.className;
    const value = event.target.type === 'text'
      ? Number(event.target.value.replace(/,/g, '')).toLocaleString('en-US')
      : event.target.value;
    this.setState({ [target]: value });
  }

  render() {
    const {
      date,
      balance,
      deposit,
      withdrawal,
    } = this.state;
    return (
      <React.Fragment>
        <label htmlFor="balanceForm">
          Date:&nbsp;
          <input
            type="date"
            className="date"
            value={date}
            onChange={this.handleFormChange}
          />
        </label>
        <label htmlFor="balanceForm">
          Balance:&nbsp;
          <input
            type="text"
            className="balance"
            value={balance}
            onChange={this.handleFormChange}
            placeholder="0"
          />
        </label>
        <label htmlFor="balanceForm">
          Deposit:&nbsp;
          <input
            type="text"
            className="deposit"
            value={deposit}
            onChange={this.handleFormChange}
            placeholder="0"
          />
        </label>
        <label htmlFor="balanceForm">
          Withdrawal:&nbsp;
          <input
            type="text"
            className="withdrawal"
            value={withdrawal}
            onChange={this.handleFormChange}
            placeholder="0"
          />
        </label>
      </React.Fragment>
    );
  }
}

export default BalanceForm;
