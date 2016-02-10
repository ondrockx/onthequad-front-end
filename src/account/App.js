'use strict';

var {Fluxible} = require('fluxible');
var Wrapper = require('./components/Wrapper');
var GlobalStore = require('../shared/stores/GlobalStore');
var AccountStore = require('./stores/AccountStore');
var UserStore = require('../shared/stores/UserStore');
var PostingStore = require('../posting/stores/PostingStore');
var app = new Fluxible({
    component: Wrapper
});

app.registerStore(AccountStore);
app.registerStore(GlobalStore);
app.registerStore(UserStore);
app.registerStore(PostingStore);

module.exports = app;