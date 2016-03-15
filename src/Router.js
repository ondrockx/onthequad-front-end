import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import LandingPage from './containers/LandingPage';
import App from './components/App';
import Browse from './components/Browse';

const MainRouter = React.createClass({
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={LandingPage}/>
				<Route path='/browse(/:category)' component={App}>
					<IndexRoute component={Browse}/>
				</Route>
			</Router>
		);
	}
});

export default MainRouter;