'use strict';

var React = require('react');
var DesktopNavFilters = require('./DesktopNavFilters');
var DesktopNav;

module.exports = DesktopNav = React.createClass({
    render: function () {
        return (
            <div className="">
                <DesktopNavFilters {...this.props} />
            </div>
        );
    }
});
