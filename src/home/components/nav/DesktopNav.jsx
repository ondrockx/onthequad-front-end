'use strict';

var React = require('react');
var actions = require('../../Actions');
var NavCategories = require('../../../shared/nav/NavCategories');
var DesktopNavFilters = require('./DesktopNavFilters');
var DesktopNav;

module.exports = DesktopNav = React.createClass({
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.set, {category: id});
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
