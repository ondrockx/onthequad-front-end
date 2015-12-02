'use strict';

var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
    extraProperties: 'reject',
    props: {
    },
    toUrlString() {
        return `/`;
    }
});
