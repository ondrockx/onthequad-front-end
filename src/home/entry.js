'use strict';

var Router = require('./Router');
var App = require('./App');
var React = require('react');

var router;

var context = window.context = App.createContext();

router = new Router({context: context.getComponentContext()});
router.history.start({pushState: true});

React.render(
    require('fluxible-addons-react').createElementWithContext(context),
    document.getElementById('main')
);