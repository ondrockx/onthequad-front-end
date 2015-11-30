'use strict';

var React = require('react');
var {Button} = require('react-bootstrap');
var config = require('../config');
var userActions = require('../UserActions');
var LoginButton;

module.exports = LoginButton = React.createClass({
    goToLogin: function () {
        if (this.props.userModel.gAuth) {
            this.props.userModel.gAuth.signIn();
        } else {
            window.location = config.loginURL;
        }
    },
    goToLogout: function () {
        this.props.userModel.gAuth.signOut();
    },
    render: function () {
        if(this.props.userModel.userID == null) {
            return (
                <Button onClick={this.goToLogin} className="navbar-btn btn-user">
                    <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                </Button>
            );
        } else {
            return (
                <Button onClick={this.goToLogout} className="navbar-btn btn-user">
                    <span className="glyphicon glyphicon-log-out" aria-hidden="true">
                        &nbsp;{this.props.userModel.name}
                    </span>
                </Button>
            );
        }
    }
});
