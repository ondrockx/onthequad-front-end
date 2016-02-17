'use strict';

var {Fluxible} = require('fluxible');
var Wrapper = require('./components/Wrapper');
var CategoryStore = require('./stores/CategoryStore');
var GlobalStore = require('../shared/stores/GlobalStore');
var UserStore = require('../shared/stores/UserStore');
var PostingStore = require('../posting/stores/PostingStore');
var app = new Fluxible({
    component: Wrapper
});

app.registerStore(CategoryStore);
app.registerStore(GlobalStore);
app.registerStore(UserStore);
app.registerStore(PostingStore);

module.exports = app;