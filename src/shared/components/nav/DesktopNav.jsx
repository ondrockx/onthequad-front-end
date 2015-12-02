'use strict';

var React = require('react');
var actions = require('../../GlobalActions');
var NavCategories = require('./NavCategories');
var DesktopNavFilters = require('./DesktopNavFilters');
var DesktopNav;

module.exports = DesktopNav = React.createClass({
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.setCategory, {category: id});
    },
    render: function () {
        return (
            <div className="hidden-md hidden-sm hidden-xs">
            	<NavCategories changeCategory={this.changeCategory} {...this.props} />
                <DesktopNavFilters {...this.props} />
            </div>
        );
    }
});
