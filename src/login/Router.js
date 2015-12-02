'use strict';

var Router = require('ampersand-router');
var Store = require('./Store');

module.exports = Router.extend({
    routes: {
        'login(/)' : 'loadLogin'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(Store);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    loadLogin() {
    }
});
