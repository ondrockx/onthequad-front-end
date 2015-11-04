'use strict';

var React = require('react');
var NavCategories;

module.exports = NavCategories = React.createClass({
    render: function () {
        return (
        <div className="row hidden-md hidden-sm hidden-xs">
            <div className="container">
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">All Posts</a></li>
                <li><a href="#">Textbooks</a></li>
                <li><a href="#">UConn Tickets</a></li>
                <li><a href="#">Lost and Found</a></li>
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Vehicles</a></li>
                <li><a href="#">School Supplies</a></li>
                <li><a href="#">Movies and Games</a></li>
                <li><a href="#">Other</a></li>
            </ul>
            </div>
        </div>
        );
    }
});
