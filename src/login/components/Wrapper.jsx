'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var Store = require('../Store');
var actions = require('../Actions');
var Banner = require('../../shared/nav/Banner');
var NavCategories = require('../../shared/nav/NavCategories');
var config = require('../config');
var Wrapper;

Wrapper = React.createClass({
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        window.location = config.browseURL + '/' + id;
    },
    render: function () {
        return (
            <div className="wrapper">
            	<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
	                <div className="container-fluid">
	            		<Banner {...this.props} />
                        <NavCategories {...this.props} changeCategory={this.changeCategory} />
	            	</div>
            	</nav>
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [Store], function (stores) {
    return {
        model: context.getStore(Store).getModel()
    };
});

module.exports = Wrapper;
