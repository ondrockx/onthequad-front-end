'use strict';

var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
        app: {
            'type': 'string',
            'required': false
        },
        loading: {
			'type': 'number',
			'required': true,
			'default': 0
		}
    }
});
