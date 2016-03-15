import { connect } from 'react-redux';
import MobileTitle from '../../components/nav/MobileTitle';
import config from '../../config';

const mapStateToProps = (state) => {
  return {
    category: config.submitCategories[state.category]
  };
};

const MobileCategory = connect(
  mapStateToProps
)(MobileTitle);

export default MobileCategory;