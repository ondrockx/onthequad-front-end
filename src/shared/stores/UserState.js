'use strict';

var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
        userID: {
            'type': 'string',
            'required': true
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
