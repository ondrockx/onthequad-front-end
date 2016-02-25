'use strict';

var AmpersandState = require('ampersand-state');
var config = require('../config');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
    },
    toUrlString() {
		if (this.category) {
			return `/browse/${this.category}/`;
		}
        return `/`;
    }
});
