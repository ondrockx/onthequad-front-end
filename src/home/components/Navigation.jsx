'use strict';

var React = require('react');
var Banner = require('../../shared/nav/Banner');
var DesktopNav = require('./nav/DesktopNav');
var MobileNav = require('./nav/MobileNav');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <Banner {...this.props} />
                    <DesktopNav {...this.props} />
                    <MobileNav {...this.props} />
                </div>
            </nav>
        );
    }
});
