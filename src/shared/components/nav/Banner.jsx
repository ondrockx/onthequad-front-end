'use strict';

var React = require('react');
var LoginButton = require('../LoginButton');
var Banner;

module.exports = Banner = React.createClass({
    render: function () {
        return (
            <div className="row navbar-cust1">
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 navbar-content">
					<div className="pull-left">
	    			  <button type="button" className="navbar-toggle navbar-btn" data-toggle="offcanvas" data-target=".navmenu">
				        <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
      				  </button>
      				 </div>
	        	</div>

	            <div className="navbar-header col-xs-6 col-sm-6 col-md-6 col-lg-6">
	            	<a className="navbar-brand navbar-center mybrand-sm">on the quad</a>
	            </div>
	            
				<LoginButton {...this.props} />

	        </div>
        );
    }
});




