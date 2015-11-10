'use strict';

var React = require('react');
var config = require('../../config');
var MobileNavCategories;

module.exports = MobileNavCategories = React.createClass({
	toggleHamburger: function () {
		
	},
    render: function () {
        return (
        <div className="row hidden-lg">
        	<div className="col-xs-2 navbar-content">
    			<button onClick={this.toggleHamburger} type="button" className="btn btn-default navbar-btn">
					<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
				</button>
        	</div>
            <div className="col-xs-8 navbar-content">
                <div className="category-title navbar-brand">{config.categories[this.props.model.category]}</div>
            </div>
        </div>
        );
    }
});
