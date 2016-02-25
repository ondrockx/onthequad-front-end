'use strict';

var React = require('react');
var _ = require('underscore');
var {Nav, NavItem} = require('react-bootstrap');
var config = require('../../config');
var MobileNavCategories;

module.exports = MobileNavCategories = React.createClass({
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        window.location = config.browseURL + '/' + id + '/';
    },
    render: function () {
        var category = this.props.categoryModel ? this.props.categoryModel.category : "";
        return (
                <ul className="nav navmenu-nav hamburger-menu">
                    {_.map(config.categories, (itemName, id)=>{
                        return (
                            <li key={id} className={category === id ? "active" : ""}>
                                <a href="#" onClick={_.partial(this.props.changeCategory || this.changeCategory, id)}  data-toggle="offcanvas" data-target=".navmenu">
                                    {itemName}
                                </a>
                            </li>
                        );
                    })}
                </ul>
        );
    }
});