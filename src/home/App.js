'use strict';

var {Fluxible} = require('fluxible');
var Wrapper = require('./components/Wrapper');
var Store = require('./Store');
var UserStore = require('../shared/UserStore');
var app = new Fluxible({
    component: Wrapper
});

app.registerStore(Store);
app.registerStore(UserStore);

module.exports = app;