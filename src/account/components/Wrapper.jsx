'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var GlobalStore = require('../../shared/stores/GlobalStore');
var AccountStore = require('../stores/AccountStore');
var UserStore = require('../../shared/stores/UserStore');
var GlobalActions = require('../../shared/actions/GlobalActions');
var Navigation = require('../../shared/components/nav/Navigation');
var LoginMixin = require('../../shared/mixins/LoginMixin');
var Wrapper;

Wrapper = React.createClass({
    mixins: [LoginMixin],
    componentWillMount: function () {
        this.props.context.executeAction(GlobalActions.setApp, "account");
    },
    render: function () {
        return (
            <div className="wrapper">
                <Navigation {...this.props}>
                </Navigation>
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [GlobalStore, AccountStore, UserStore], function (stores) {
    return {
        globalModel: context.getStore(GlobalStore).getModel(),
        accountModel: context.getStore(AccountStore).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;