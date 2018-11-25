import { connect } from 'react-redux';
import CompanyCard from '../../../components/Portfolio/Card/Company';

const mapDispatchToProps = dispatch => ({
  handleShowClick: () => console.log('SHOW'),
  handleHideClick: () => console.log('HIDE'),
});

export default connect(null, mapDispatchToProps)(CompanyCard);
