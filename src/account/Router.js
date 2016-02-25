'use strict';

var Router = require('ampersand-router');
var AccountStore = require('./stores/AccountStore');
var config = require('./config');

module.exports = Router.extend({
    routes: {
        '(/)' : 'goToUrl'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(AccountStore);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    goToUrl(category) {
        var payload = {};
    }
});
