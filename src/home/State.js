'use strict';

var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
        page: {
            'type': 'string',
            'required': false
        }
    },
    toUrlString() {
		if (this.page) {
			return `/${this.page}/`;
		}
        return `/`;
    }
});
