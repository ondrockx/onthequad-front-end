import React from 'react';
import { connect } from 'react-redux';
import NavFilters from '../../components/nav/NavFilters';
import { sortBy } from '../../actions';

const mapStateToProps = (state) => {
	return {
		sort: state.ui.filter.sort
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sortBy: (sort) => dispatch(sortBy(sort))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavFilters);