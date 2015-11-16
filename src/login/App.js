'use strict';

var {Fluxible} = require('fluxible');
var Wrapper = require('./components/Wrapper');
var Store = require('./Store');

var app = new Fluxible({
    component: Wrapper
});

app.registerStore(Store);

module.exports = app;