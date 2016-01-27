'use strict';

var UserStore = require('../../shared/stores/UserStore');
var config = require('../config');

var CategoryActions = module.exports = {
    makePosting(actionContext, payload) {
    	var userStore = actionContext.getStore(UserStore);
        if (userStore.isSignedIn()) {
            $.ajax({
                type: 'POST',
                xhrFields: {
                    withCredentials: true
                },
                url: config.backendURL + '/api/postings/',
                data: {
                    title: payload.title,
                    cost: parseFloat(payload.cost),
                    description: payload.description,
                    category: parseInt(payload.category)
                },
                success: (responseBody)=>{
                	console.log("COMPLETE");
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