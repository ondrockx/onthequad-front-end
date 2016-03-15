import React from 'react';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';
import LandingPage from './containers/LandingPage';
import Browse from './components/Browse';

const MainRouter = React.createClass({
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={LandingPage}/>
				<Redirect from='/browse' to='/browse/all'/>
				<Route path='/browse/:category' component={Browse}/>
				<Route path='/account' component={Browse}/>
			</Router>
		);
	}
});

export default MainRouter;