'use strict';

var React = require('react');
var {Button} = require('react-bootstrap');
var NavBanner;

module.exports = NavBanner = React.createClass({
    render: function () {
        return (
            <div className="row navbar-cust1">
	            <div className="navbar-header col-xs-offset-3 col-xs-6">
	            	<a className="navbar-brand navbar-center mybrand">on the quad</a>
	            </div>
	            
	            <div className="col-xs-3 nav-user">
	            	<div className="pull-right">
                        <Button className="navbar-btn btn-user">
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Button>
	              	</div>
	            </div>
	        </div>
        );
    }
});
