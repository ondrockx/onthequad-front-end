'use strict';

var UserStore = require('../../shared/stores/UserStore');
var CategoryStore = require ('../stores/CategoryStore');
var config = require('../config');

var CategoryActions = module.exports = {
    setCategory(actionContext, payload) {
    	actionContext.dispatch('setCategory', payload);
    	actionContext.executeAction(CategoryActions.refreshPostings);
    },
    refreshPostings(actionContext) {
    	var userStore = actionContext.getStore(UserStore);
    	var categoryStore = actionContext.getStore(CategoryStore);
        if (userStore.isSignedIn()) {
            var catNum = config.categoryToNum(categoryStore.model.category);
            var category = catNum > 0 ? "?category=" + catNum : "";
            $.ajax({
                type: 'GET',
                xhrFields: {
                    withCredentials: true
                },
                url: config.backendURL + '/api/postings/' + category,
                success: (responseBody)=>{
                    if (responseBody.data) {
                    	actionContext.dispatch('refreshPostings', {postings: responseBody.data});
                    }
                },
                error: (XMLHttpRequest, textStatus, errorThrown)=>{
                    if (XMLHttpRequest.status === 403) {
                        //Error action
                    }
                }
            });
        }
    }
};