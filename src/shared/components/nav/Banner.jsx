'use strict';

var React = require('react');
var LoginButton = require('../LoginButton');
var Banner;

module.exports = Banner = React.createClass({
    render: function () {
        return (
            <div className="row navbar-cust1">
				<div className="col-xs-3 col-sm-3 col-md-3 navbar-content">
					<div className="pull-left">
	    			  <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
      				  </button>
      				  </div>
	        	</div>

	            <div className="navbar-header col-xs-6 col-sm-6 col-md-6">
	            	<a className="navbar-brand navbar-center mybrand-sm">on the quad</a>
	            </div>
	            
				<LoginButton {...this.props} />

	        </div>
        );
    }
});




