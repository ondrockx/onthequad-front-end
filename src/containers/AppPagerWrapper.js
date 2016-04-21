import React from 'react';
import AppPager from '../components/AppPager';
import { connect } from 'react-redux';
import { navigate } from '../actions';

const AppPagerWrapper = ({children, page, num_pages, app, navigate}) => (
	<div>
		<AppPager page={page} num_pages={num_pages} app={app} navigate={navigate} />
			{children}
		<AppPager/>
	</div>
);

const mapStateToProps = (state) => {
	return {
		page: state.pages.page,
		num_pages: state.pages.num_pages,
		app: state.app.name
	};
};

const mapDispatchToProps = (dispatch) => ({
	navigate: (router, props) => dispatch(navigate(router, props))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppPagerWrapper);