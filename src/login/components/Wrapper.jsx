'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var $ = require('jquery');
var {Well} = require('react-bootstrap');
var Store = require('../Store');
var UserStore = require('../../shared/stores/UserStore');
var GlobalStore = require('../../shared/stores/GlobalStore');
var GlobalActions = require('../../shared/actions/GlobalActions');
var Navigation = require('../../shared/components/nav/Navigation');
var config = require('../config');
var Wrapper;

Wrapper = React.createClass({
    componentWillMount: function () {
        this.props.context.executeAction(GlobalActions.setApp, "login");
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
                    <Well style={{marginTop: "158px"}}>
                        <div id="google-signin"></div>
                    </Well>
                </Navigation>
            </div>
        );
    },
    componentDidMount: function () {
        gapi.signin2.render('google-signin', {
            'width': 200,
            'height': 50,
            'theme': 'dark'
        });
    }
});

Wrapper = connectToStores(Wrapper, [Store, UserStore, GlobalStore], function (stores) {
    return {
        globalModel: context.getStore(GlobalStore).getModel(),
        model: context.getStore(Store).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
