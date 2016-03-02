'use strict';

var React = require('react');
var config = require('../../config');
var {Row, Col} = require('react-bootstrap');
var MobileNav;

module.exports = MobileNav = React.createClass({
    render: function () {
    	var category = this.props.categoryModel ?
    		config.categories[this.props.categoryModel.category] : "";
        return (
	        <div className="mobile-nav hidden-lg hidden-md">
	        	<Row>
		        	<Col xs={12}>
	                	<div className="navbar-brand navbar-category">
                            <p className="category-title">{category}</p>
                        </div>
	                </Col>
	        	</Row>
	        </div>
        );
    }
});