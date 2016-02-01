'use strict';

var UserStore = require('../../shared/stores/UserStore');
var config = require('../config');

var CategoryActions = module.exports = {
    makePosting(actionContext, payload) {
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
            console.log("Test Posted:");
            console.log({
                title: payload.title,
                cost: payload.cost,
                description: payload.description,
                category: payload.category});
        }
    }
};