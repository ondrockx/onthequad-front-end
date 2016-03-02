'use strict';

var _ = require('underscore');
var UserStore = require('../../shared/stores/UserStore');
var config = require('../config');

var CategoryActions = module.exports = {
    makePosting(actionContext, payload) {
        actionContext.dispatch('startPosting');
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
                    cost: payload.cost,
                    description: payload.description,
                    category: payload.category
                },
                success: (responseBody)=>{
                    actionContext.dispatch('setPostingMessage',{
                        postingMessageType: config.alertSuccess,
                        postingMessage: config.successfulPosting
                    });
                    actionContext.dispatch('endPosting');
                },
                error: (XMLHttpRequest, textStatus, errorThrown)=>{
                    if (XMLHttpRequest.status === 403) {
                        actionContext.dispatch('setPostingMessage',{
                            postingMessageType: config.alertDanger,
                            postingMessage: config.error403
                        });
                    } else {
                        actionContext.dispatch('setPostingMessage',{
                            postingMessageType: config.alertDanger,
                            postingMessage: config.errorOther
                        });
                    }
                    actionContext.dispatch('endPosting');
                }
            });
        }
    },
    dismissAlert(actionContext) {
        actionContext.dispatch('unsetPostingMessage');
    }
};