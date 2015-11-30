'use strict';

var React = require('react');
var connectToStores = require('fluxible-addons-react/connectToStores');
var $ = require('jquery');
var Store = require('../Store');
var UserStore = require('../../shared/UserStore');
var actions = require('../Actions');
var Banner = require('../../shared/components/nav/Banner');
var {Well} = require('react-bootstrap');
var NavCategories = require('../../shared/components/nav/NavCategories');
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
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="container-fluid">
                        <Banner {...this.props} />
                        <NavCategories {...this.props} changeCategory={this.changeCategory} />
                    </div>
                </nav>
                <Well>
                    <div id="google-signin"></div>
                </Well>
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

Wrapper = connectToStores(Wrapper, [Store, UserStore], function (stores) {
    return {
        model: context.getStore(Store).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
