'use strict';

var Router = require('ampersand-router');
var Store = require('./Store');
var actions = require('../shared/GlobalActions');
var config = require('./config');

module.exports = Router.extend({
    routes: {
        'browse/(:category)(/)' : 'goToUrl',
        '(/)' : 'goToUrl'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(Store);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    goToUrl(category) {
        var payload = {};
		payload.category = category || config.primaryCategory;
        this.context.executeAction(actions.setCategory, payload);
    }
});
