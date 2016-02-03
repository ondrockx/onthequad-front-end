'use strict';

var {Fluxible} = require('fluxible');
var Wrapper = require('./components/Wrapper');
var Store = require('./Store');
var GlobalStore = require('../shared/stores/GlobalStore');
var UserStore = require('../shared/stores/UserStore');
var PostingStore = require('../posting/stores/PostingStore');

var app = new Fluxible({
    component: Wrapper
});

app.registerStore(Store);
app.registerStore(GlobalStore);
app.registerStore(UserStore);
app.registerStore(PostingStore);

module.exports = app;