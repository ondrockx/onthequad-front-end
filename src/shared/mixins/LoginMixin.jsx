'use strict';

var UserActions = require('../actions/UserActions');

var LoginMixin;

module.exports = LoginMixin = {
    componentWillMount: function () {
		this.props.context.executeAction(UserActions.startGAuth);
    }
};