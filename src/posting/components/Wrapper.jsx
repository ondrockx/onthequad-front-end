'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var GlobalStore = require('../../shared/stores/GlobalStore');
var UserStore = require('../../shared/stores/UserStore');
var GlobalActions = require('../../shared/actions/GlobalActions');
var Navigation = require('../../shared/components/nav/Navigation');
var LoginMixin = require('../../shared/mixins/LoginMixin');
var PostingBox = require('./PostingBox');
var config = require('../config');

var Wrapper;

Wrapper = React.createClass({
    mixins: [LoginMixin],
    componentWillMount: function () {
        this.props.context.executeAction(GlobalActions.setApp, "posting");
    },
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        window.location = config.browseURL + '/' + id + '/';
    },
    render: function () {
        return (
            <div className="wrapper">
                <Navigation changeCategory={this.changeCategory} {...this.props}>
                    <PostingBox {...this.props} />
                </Navigation>
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [GlobalStore, UserStore], function (stores) {
    return {
        globalModel: context.getStore(GlobalStore).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
