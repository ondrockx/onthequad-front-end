'use strict';

var AmpersandState = require('ampersand-state');
var config = require('../config');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
        isLoading: {
            'type': 'boolean',
            'default': false
        },
        postingMessage: {
            'type': 'string',
            'default': ''
        },
        postingMessageType: {
            'type': 'string',
            'default': 'success'
        }
    }
});
