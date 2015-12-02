'use strict';

var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
        userID: {
            'type': 'string',
            'required': false
        },
        name: {
        	'type': 'string',
        	'required': false
        },
        email: {
        	'type': 'string',
        	'required': false
        }
    }
});
