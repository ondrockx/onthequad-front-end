'use strict';

var React = require('react');
var NavFilters = require('./NavFilters');
var MobileBottomNav;

module.exports = MobileBottomNav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-bottom navbar-center hidden-lg" role="navigation">  
		    	<NavFilters mobile {...this.props} />
			</nav>
        );
    }
});
