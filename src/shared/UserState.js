'use strict';

var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
        gAuth: {
            'type': 'object',
            'required': false
        },
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
        },
        id_token: {
            'type': 'string',
            'required': false
        }
    }
});
