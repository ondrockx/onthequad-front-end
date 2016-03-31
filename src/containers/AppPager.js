import React, { PropTypes } from 'react';
import { Pager, PageItem, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { navigate } from '../actions';
import config, { getAppURL } from '../config';

var AppPager = ({page, num_pages, app, navigate}, context) => (
	<div>
		<Pager>
	    <PageItem previous
	    	disabled={page <= 1}
	    	href={"?page="+(page-1)}
	    	onClick={page <= 1 ? () => ({}) : (e) => {
		    		e.preventDefault();
    				navigate(context.router, {app, page: page-1});
		    	}
	    	}>
	    	&larr; Previous
	    </PageItem>
		  <Pagination
				className="hidden-sm hidden-xs clearfix top-pagination"
	      ellipsis
	      boundaryLinks
	      items={num_pages}
	      maxButtons={5}
	      activePage={page}
	      onSelect={(e, selectedEvent) => {
	      	e.preventDefault();
  				navigate(context.router, {app, page: selectedEvent.eventKey});
	      }} />
	    <PageItem next
	    	disabled={page >= num_pages}
	    	href={"?page="+(page+1)}
	    	onClick={page >= num_pages ? () => ({}) : (e) => {
	    			e.preventDefault();
  					navigate(context.router, {app, page: page+1});
		    	}
		    }>
	    	Next &rarr;
	    </PageItem>
	  </Pager>
  </div>
);

AppPager.contextTypes = {
  router: PropTypes.object.isRequired
};

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

AppPager = connect(mapStateToProps, mapDispatchToProps)(AppPager);

const PagerWrapper = ({children}) => (
	<div>
		<AppPager/>
			{children}
		<AppPager/>
	</div>
);

export default PagerWrapper;