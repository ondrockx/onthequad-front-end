'use strict';

var React = require('react');
var NavBanner = require('./Nav/NavBanner');
var DesktopNav = require('./Nav/DesktopNav');
var MobileNav = require('./Nav/MobileNav');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <NavBanner {...this.props} />
                    <DesktopNav {...this.props} />
                    <MobileNav {...this.props} />
                </div>
            </nav>
        );
    }
});
