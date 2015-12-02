'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var Store = require('../Store');
var UserStore = require('../../shared/UserStore');
var config = require ('../config');
var Navigation = require('../../shared/components/nav/Navigation');
var ItemDisplay = require('./ItemDisplay');
var Wrapper;

Wrapper = React.createClass({
    render: function () {
        var body;
		if (this.props.model.page) {
			body = this.props.model.page
		}
        return (
            <div className="wrapper">
                <Navigation {...this.props}>
                    <ItemDisplay {...this.props} />
                </Navigation>
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [Store, UserStore], function (stores) {
    return {
        model: context.getStore(Store).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
