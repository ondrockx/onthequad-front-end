'use strict';

var React = require('react');
var DesktopNav = require('./Nav/DesktopNav');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <DesktopNav {...this.props} />
                </div>
            </nav>
        );
    }
});
