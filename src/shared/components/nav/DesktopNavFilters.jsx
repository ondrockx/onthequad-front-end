'use strict';

var React = require('react');
var NavFilters = require('./NavFilters');
var {Row, Col} = require('react-bootstrap');
var config = require('../../config');
var DesktopNavFilters;

module.exports = DesktopNavFilters = React.createClass({
    render: function () {
    	var category = this.props.categoryModel ?
    		config.categories[this.props.categoryModel.category] : "";
        return (
        	<div className="container">
                <Row className="hidden-md hidden-sm hidden-xs">
                    <Col lg={1} className="navbar-content">  
                        <img className="pull-right" src="/images/mascot.png" height="50" />
                    </Col>
                    <Col lg={3}>
                        <div className="navbar-brand navbar-category">
                            <p className="category-title">{category}</p>
                        </div>
                    </Col>
                    <Col lg={1}>
                        <img className="pull-left" src="/images/switch.png" height="50" />
                    </Col>
                    <Col lg={1}>
                        <img className="pull-left" src="/images/switch.png" height="50" />
                    </Col>
                    <Col lg={6} className="pull-left">
                        <NavFilters desktop {...this.props} />
                    </Col>
                </Row>
            </div>
        );
    }
});