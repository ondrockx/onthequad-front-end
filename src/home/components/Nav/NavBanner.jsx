'use strict';

var React = require('react');
var NavBanner;

module.exports = NavBanner = React.createClass({
    render: function () {
        return (
            <div className="row hidden-md hidden-sm hidden-xs navbar-cust1">
	        	<div className="col-lg-3">
	            	<div className="navbar-content">
	                	<p>Location</p>
	                </div>
	            </div>
	            
	            <div className="navbar-header col-lg-6">
	            	<a className="navbar-brand navbar-center mybrand">on the quad</a>
	            </div>
	            
	            <div className="col-lg-3 nav-user">
	            	<div className="pull-right">
	                    <span>
	                    	<p className="navbar-text nav-usertext">Welcome Back USER</p>    
	                        <button type="button" className="btn btn-inverse navbar-btn btn-user">
	                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
	                        </button>
	                    </span>
	              	</div>
	            </div>
	        </div>
        );
    }
});
