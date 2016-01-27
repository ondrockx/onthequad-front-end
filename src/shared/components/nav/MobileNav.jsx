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
	        <Row className="hidden-lg">
	            {/*<Col xs={3} className="navbar-content">  
                    <img className="center-block mascot-sm" src="/images/mascot.png" height="50" />
                </Col>*/}
                <Col xs={9}>
                    <div className="text-center">
                        <p className="category-title-sm">{category}</p>
                    </div>
                </Col>
                {/*<Col xs={3}>
                     <img className="center-block" src="/images/switch.png" height="50" />
                </Col>*/}
	        </Row>
        );
    }
});