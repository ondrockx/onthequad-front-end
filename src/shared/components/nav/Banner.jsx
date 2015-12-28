'use strict';

var React = require('react');
var LoginButton = require('../LoginButton');
var Banner;

module.exports = Banner = React.createClass({
    render: function () {
        return (
            <div className="row navbar-cust1">
				<div className="col-xs-3 navbar-content">
	    			<button type="button" className="btn btn-default navbar-btn hidden-lg pull-left">
						<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
					</button>
	        	</div>

	            <div className="navbar-header col-xs-6">
	            	<a className="navbar-brand navbar-center mybrand">on the quad</a>
	            </div>
	            
	            <div className="col-xs-3 nav-user">
	            	<div className="pull-right">
                        <LoginButton {...this.props} />
	              	</div>
	            </div>
	        </div>
        );
    }
});
