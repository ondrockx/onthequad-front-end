'use strict';

var React = require('react');
var _ = require('underscore');
var {Button} = require('react-bootstrap');
var config = require('../config');
var UserActions = require('../actions/UserActions');
var LoginButton;

module.exports = LoginButton = React.createClass({
    goToLogin: function () {
        this.props.context.executeAction(UserActions.signIn);
    },
    goToLogout: function () {
        this.props.context.executeAction(UserActions.signOut);
    },
    render: function () {
        if(this.props.userModel.name) {
            return (
                <Button onClick={this.goToLogout} className="navbar-btn btn-user">
                    <span className="glyphicon glyphicon-log-out" aria-hidden="true">
                        &nbsp;{this.props.userModel.name}
                    </span>
                </Button>
            );
        } else {
            return (
                <Button onClick={this.goToLogin} className="navbar-btn btn-user">
                    <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                </Button>
            );
        }
    }
});
