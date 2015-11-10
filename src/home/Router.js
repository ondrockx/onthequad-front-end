'use strict';

var Router = require('ampersand-router');
var Store = require('./Store');
var actions = require('./Actions');

module.exports = Router.extend({
    routes: {
        '(:page)(/)' : 'goToUrl'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(Store);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    goToUrl(page) {
        var payload = {};
		payload.page = page;
        this.context.executeAction(actions.navigate, payload);
    }
});
