'use strict';

var _ = require('underscore');
var UserStore = require('../../shared/stores/UserStore');
var config = require('../config');

var CategoryActions = module.exports = {
    makePosting(actionContext, payload) {
        actionContext.dispatch('startPosting');
    	var userStore = actionContext.getStore(UserStore);
        if (userStore.isSignedIn()) {
            // $.ajax({
            //     type: 'POST',
            //     xhrFields: {
            //         withCredentials: true
            //     },
            //     url: config.backendURL + '/api/postings/',
            //     data: {
            //         title: payload.title,
            //         cost: payload.cost,
            //         description: payload.description,
            //         category: payload.category
            //     },
            //     success: (responseBody)=>{
            //      console.log("COMPLETE");
            //     },
            //     error: (XMLHttpRequest, textStatus, errorThrown)=>{
            //         if (XMLHttpRequest.status === 403) {
            //             //Error action
            //         }
            //     }
            // });
            _.delay(function () {
                console.log("Test Posted:");
                console.log({
                    title: payload.title,
                    cost: payload.cost,
                    description: payload.description,
                    category: payload.category});
                    actionContext.dispatch('endPosting');
            }, 5000)
        }
    }
};