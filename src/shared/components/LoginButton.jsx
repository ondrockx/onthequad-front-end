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
                <span>
                    <p className="navbar-text nav-usertext hidden-xs">Welcome back<br />{this.props.userModel.name}</p>
                    <Button onClick={this.goToLogout} className="navbar-btn btn-user">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </Button>
                </span>
            );
        } else {
            return (
                <Button onClick={this.goToLogin} className="navbar-btn btn-user pull-right">
                    <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                </Button>
            );
        }
    }
});
