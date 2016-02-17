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
                <div>
                    <div className="hidden-xs col-sm-2 col-md-2 col-lg-2 nopads">
                        <div className="pull-right nopads">
                            <p className="navbar-text nav-usertext hidden-xs">Welcome back<br />{this.props.userModel.name}</p>
                        </div>
                    </div>
                    <div className="hidden-xs col-sm-1 col-md-1 col-lg-1 nopads">
                        <div className="pull-left">
                            <Button onClick={this.goToLogout} className="desktop-user pull-right">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </Button>
                        </div>
                    </div>
                    <div className="col-xs-3 hidden-sm hidden-md hidden-lg">
                        <div className="pull-right">
                            <Button onClick={this.goToLogout} className="navbar-toggle pull-right">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </Button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Button onClick={this.goToLogin} className="navbar-toggle pull-right navbar-togglefix">
                        <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                    </Button>
                </div>
            );
        }
    }
});
