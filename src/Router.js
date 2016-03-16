import React from 'react';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';
import LandingPage from './containers/LandingPage';
import ItemsContainer from './containers/ItemsContainer';
import PostingForm from './components/PostingForm';
import Browse from './containers/Browse';

const MainRouter = React.createClass({
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={LandingPage}/>
				<Redirect from='/browse' to='/browse/all'/>
				<Route path='/browse/:category' component={Browse}>
					<IndexRoute component={ItemsContainer}/>
				</Route>
				<Route path='/account' component={Browse}/>
				<Route path='/posting' component={Browse}>
					<IndexRoute component={PostingForm}/>
				</Route>
			</Router>
		);
	}
});

export default MainRouter;