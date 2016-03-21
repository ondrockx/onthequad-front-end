import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import { startGAuth } from './actions';
import LandingPage from './containers/LandingPage';
import Browse from './containers/Browse';
import Account from './containers/Account';
import Posting from './containers/Posting';
import App from './containers/App';

const mapDispatchToProps = (dispatch) => {
  return {
    startGAuth: () => {
      dispatch(startGAuth());
    }
  };
};

class MainRouter extends Component {
  componentWillMount() {
  	// Start Google Authentication at the Router level of the app so
  	// it only loads when the page is refreshed
    this.props.startGAuth();
  }

	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={LandingPage}/>
				<Redirect from='/browse' to='/browse/all'/>
				<Route path='/browse/:category' component={App}>
					<IndexRoute component={Browse}/>
				</Route>
				<Route path='/account' component={App}>
					<IndexRoute component={Account}/>
				</Route>
				<Route path='/posting' component={App}>
					<IndexRoute component={Posting}/>
				</Route>
			</Router>
		);
	}
};

export default connect(()=>({}), mapDispatchToProps)(MainRouter);