'use strict';

var React = require('react');
var NavFilters = require('./NavFilters');
var DesktopNavFilters;

module.exports = DesktopNavFilters = React.createClass({
    render: function () {
        return (
            <div className="hidden-md hidden-sm hidden-xs">
                <div className="col-lg-offset-2 col-lg-2">
                    <div className="navbar-brand">
                        <p className="category-title">CATEGORY_FILLER</p>
                    </div>
                </div>
                
                <div className="col-lg-offset-2 col-lg-6">
                    <NavFilters desktop {...this.props} />
                </div>
            </div>
        );
    }
});
