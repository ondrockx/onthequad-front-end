import { connect } from 'react-redux';
import DesktopFilters from '../../components/nav/DesktopFilters';
import config from '../../config';

const mapStateToProps = (state) => {
  return {
    category: config.submitCategories[state.category]
  };
};

const DesktopCategory = connect(
  mapStateToProps
)(DesktopFilters);

export default DesktopCategory;