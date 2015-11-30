'use strict';

var React = require('react');
var LoginButton = require('../LoginButton');
var Banner;

module.exports = Banner = React.createClass({
    render: function () {
        return (
            <div className="row navbar-cust1">
	            <div className="navbar-header col-xs-offset-2 col-xs-8">
	            	<a className="navbar-brand navbar-center mybrand">on the quad</a>
	            </div>
	            
	            <div className="col-xs-2 nav-user">
	            	<div className="pull-right">
                        <LoginButton {...this.props} />
	              	</div>
	            </div>
	        </div>
        );
    }
});
