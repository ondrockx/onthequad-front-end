'use strict';

var Router = require('ampersand-router');
var Store = require('./Store');
var actions = require('./Actions');

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
