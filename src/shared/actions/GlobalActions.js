'use strict';

var UserStore = require('../stores/UserStore');
var GlobalStore = require('../stores/GlobalStore');
var CategoryStore = require('../../home/stores/CategoryStore');
var CategoryActions = require('../../home/actions/CategoryActions');
var config = require('../config');

var GlobalActions = module.exports = {
    setApp(actionContext, payload){
        actionContext.dispatch('setApp', payload);
    },
    userChanged(actionContext) {
    	actionContext.dispatch('userChanged');
        var app = actionContext.getStore(GlobalStore).model.app;
        if (app === "home") {
    	   actionContext.executeAction(CategoryActions.refreshPostings);
        }
    }
};