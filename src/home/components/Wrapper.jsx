'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var GlobalStore = require('../../shared/stores/GlobalStore');
var CategoryStore = require('../stores/CategoryStore');
var UserStore = require('../../shared/stores/UserStore');
var GlobalActions = require('../../shared/actions/GlobalActions');
var CategoryActions = require('../actions/CategoryActions');
var Navigation = require('../../shared/components/nav/Navigation');
var LandingPage = require('./LandingPage');
var Loading = require('../../shared/components/Loading');
var LoginMixin = require('../../shared/mixins/LoginMixin');
var ItemDisplay = require('./ItemDisplay');
var config = require('../config');
var Wrapper;

Wrapper = React.createClass({
    mixins: [LoginMixin],
    componentWillMount: function () {
        this.props.context.executeAction(GlobalActions.setApp, "home");
    },
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        this.props.context.executeAction(CategoryActions.setCategory, {category: id});
    },
    render: function () {
        var content = (
            <Navigation changeCategory={this.changeCategory} {...this.props}>
                <Loading {...this.props} />
            </Navigation>);
        if (!this.props.globalModel.loading) {
            if (this.props.userModel.userID && (this.props.userModel.userID === config.userIDDefault)) {
                content = <LandingPage {...this.props} />;
            } else {
                content = (
                    <Navigation changeCategory={this.changeCategory} {...this.props}>
                        <ItemDisplay {...this.props} />
                    </Navigation>);
            }
        }
        return (
            <div className="wrapper">
                {content}
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [GlobalStore, CategoryStore, UserStore], function (stores) {
    return {
        globalModel: context.getStore(GlobalStore).getModel(),
        categoryModel: context.getStore(CategoryStore).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
