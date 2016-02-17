'use strict';

var Router = require('ampersand-router');
var config = require('./config');

module.exports = Router.extend({
    routes: {
        'posting(/)' : 'goToUrl'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
    },
    goToUrl(category) {
        var payload = {};
    }
});
