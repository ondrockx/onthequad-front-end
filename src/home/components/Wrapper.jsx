'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var _ = require('underscore');
var {Well} = require('react-bootstrap');
var Store = require('../Store');
var config = require ('../config');
var actions = require('../Actions');
var Navigation = require('./Navigation');
var MobileBottomNav = require('./Nav/MobileBottomNav');
var Wrapper;

Wrapper = React.createClass({
    render: function () {
        var body;
		if (this.props.model.page) {
			body = this.props.model.page
		}
        return (
            <div className="wrapper">
                <Navigation {...this.props} />
                <MobileBottomNav {...this.props} />
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
