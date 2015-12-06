'use strict';

var React = require('react');
var _ = require('underscore');
var {Nav, NavItem} = require('react-bootstrap');
var config = require('../../config');
var NavCategories;

module.exports = NavCategories = React.createClass({
    propTypes: {
        changeCategory: React.PropTypes.func.isRequired
    },
    render: function () {
        var category = this.props.categoryModel ? this.props.categoryModel.category : "";
        return (
            <div className="container">
                <ul className="nav navbar-nav">
                    {_.map(config.categories, (itemName, id)=>{
                        return (
                            <li key={id} className={category === id ? "active" : ""}>
                                <a href="#" onClick={_.partial(this.props.changeCategory, id)}>
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