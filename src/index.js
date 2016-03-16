import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { compose, applyMiddleware, createStore } from 'redux';
import app from './reducers';
import Router from './Router'; 

let store = createStore(app, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

render((
	<Provider store={store}>
		<Router />
	</Provider>
), document.getElementById('main'));