'use strict';

var config = require('../config');
var GlobalActions = require('./GlobalActions');

var UserActions = module.exports = {
	startGAuth(actionContext) {
        gapi.load('auth2', ()=>{
            var gAuth = gapi.auth2.init({
                client_id: '441857043088-ujkkfjr5f66e1j4qq02iueink9d5fcj8.apps.googleusercontent.com',
                scope: 'profile email'
            });
            gAuth.then(()=>{
                if (gAuth.currentUser.get().isSignedIn()) {
                    actionContext.executeAction(UserActions.auth);
                }
            }, (reason)=>{
                console.error(reason);
            });
        });
	},
    signIn(actionContext) {
    	gapi.auth2.getAuthInstance().signIn().then(()=>{
	    	actionContext.executeAction(UserActions.auth);
    	});
    },
    auth(actionContext){
		var gUser = gapi.auth2.getAuthInstance().currentUser.get();
        var profile = gUser.getBasicProfile();
        var id_token = gUser.getAuthResponse().id_token;
        $.ajax({
            type: 'POST',
            xhrFields: {
                withCredentials: true
            },
            url: config.backendURL + '/api/auth/',
            data: {id_token},
            success: ()=>{
            	actionContext.dispatch('signIn',{
                    userID: profile.getId(),
                    name: profile.getName(),
                    email: profile.getEmail(),
                });
                actionContext.executeAction(GlobalActions.userChanged);
            }
        });
    },
    signOut(actionContext) {
    	gapi.auth2.getAuthInstance().signOut().then(()=>{
            $.ajax({
	            type: 'GET',
	            xhrFields: {
	                withCredentials: true
	            },
	            url: config.backendURL + '/api/logout/',
	            success: ()=>{
	                actionContext.dispatch('signOut');
                	actionContext.executeAction(GlobalActions.userChanged);
	            }
	        });
        });
    }
};
