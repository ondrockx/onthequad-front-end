import React, { PropTypes } from 'react';
import { Pager, PageItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import config, { getAppURL } from '../config';

var AppPager = ({page, num_pages, appURL}, context) => (
	<Pager>
    <PageItem previous
    	disabled={page <= 1}
    	href={"?page="+(page-1)}
    	onClick={page <= 1 ? () => ({}) : (e) => {
	    		e.preventDefault();
	    		context.router.push(appURL + '?page='+(page-1));
	    	}
    	}>
    	&larr; Previous Page
    </PageItem>
    <PageItem next
    	disabled={page >= num_pages}
    	href={"?page="+(page+1)}
    	onClick={page >= num_pages ? () => ({}) : (e) => {
    			e.preventDefault();
	    		context.router.push(appURL + '?page='+(page+1));
	    	}
	    }>
    	Next Page &rarr;
    </PageItem>
  </Pager>
);

AppPager.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		page: state.pages.page,
		num_pages: state.pages.num_pages,
		appURL: getAppURL(state.app.name)
	};
};

AppPager = connect(mapStateToProps)(AppPager);

const PagerWrapper = ({children}) => (
	<div>
		<AppPager/>
			{children}
		<AppPager/>
	</div>
);

export default PagerWrapper;