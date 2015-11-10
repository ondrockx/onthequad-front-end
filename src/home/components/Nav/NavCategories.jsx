'use strict';

var React = require('react');
var _ = require('underscore');
var {Nav, NavItem} = require('react-bootstrap');
var config = require('../../config');
var actions = require('../../Actions');
var NavCategories;

module.exports = NavCategories = React.createClass({
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.set, {category: id});
    },
    render: function () {
        return (
            <div className="container">
                <ul className="nav navbar-nav">
                    {_.map(config.categories, (itemName, id)=>{
                        return (
                            <li key={id} className={this.props.model.category == id ? "active" : ""}>
                                <a href="#" onClick={_.partial(this.changeCategory, id)}>
                                    {itemName}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
});