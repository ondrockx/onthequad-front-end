'use strict';

var React = require('react');
var NavBanner = require('./NavBanner');
var NavCategories = require('./NavCategories');
var NavFilters = require('./NavFilters');
var DesktopNav;

module.exports = DesktopNav = React.createClass({
    render: function () {
        return (
            <div>
                <NavBanner {...this.props} />
                <NavCategories {...this.props} />
                <NavFilters {...this.props} />
            </div>
        );
    }
});
