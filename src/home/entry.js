'use strict';

var Router = require('./Router');
var App = require('./App');
var ReactDOM = require('react-dom');

var router;

var context = window.context = App.createContext();

router = new Router({context: context.getComponentContext()});
router.history.start({pushState: true});

ReactDOM.render(
    require('fluxible-addons-react').createElementWithContext(context),
    document.getElementById('main')
);