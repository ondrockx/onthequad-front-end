'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var GlobalStore = require('../../shared/stores/GlobalStore');
var CategoryStore = require('../stores/CategoryStore');
var UserStore = require('../../shared/stores/UserStore');
var GlobalActions = require('../../shared/actions/GlobalActions');
var CategoryActions = require('../actions/CategoryActions');
var Navigation = require('../../shared/components/nav/Navigation');
var LoginMixin = require('../../shared/mixins/LoginMixin');
var ItemDisplay = require('./ItemDisplay');
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
        return (
            <div className="wrapper">
                <Navigation changeCategory={this.changeCategory} {...this.props}>
                    <ItemDisplay {...this.props} />
                </Navigation>
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [CategoryStore, UserStore], function (stores) {
    return {
        globalModel: context.getStore(GlobalStore).getModel(),
        categoryModel: context.getStore(CategoryStore).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
