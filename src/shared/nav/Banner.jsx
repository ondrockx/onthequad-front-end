'use strict';

var React = require('react');
var {Button} = require('react-bootstrap');
var config = require('../config');
var Banner;

module.exports = Banner = React.createClass({
	goToLogin: function () {
		window.location = config.loginURL;
	},
    render: function () {
        return (
            <div className="row navbar-cust1">
	            <div className="navbar-header col-xs-offset-2 col-xs-8">
	            	<a className="navbar-brand navbar-center mybrand">on the quad</a>
	            </div>
	            
	            <div className="col-xs-2 nav-user">
	            	<div className="pull-right">
                        <Button onClick={this.goToLogin} className="navbar-btn btn-user">
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Button>
	              	</div>
	            </div>
	        </div>
        );
    }
});
