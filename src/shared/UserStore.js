'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var UserState = require('./UserState');
var config = require('./config');
var _ = require('underscore');

class UserStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new UserState();
        gapi.load('auth2', ()=>{
            var gAuth = gapi.auth2.init({
                client_id: '441857043088-ujkkfjr5f66e1j4qq02iueink9d5fcj8.apps.googleusercontent.com',
                scope: 'profile email'
            });
            gAuth.then(()=>{
                if (gAuth.currentUser.get().isSignedIn()) {
                    this.signIn();
                }
            }, (reason)=>{
                console.error(reason);
            });
        });
        this.model.on('change', this.emitChange, this);
    }

    isSignedIn() {
        return this.model.userID;
    }

    getModel() {
        return this.model;
    }

    gSignIn(callback) {
        gapi.auth2.getAuthInstance().signIn().then(()=>{
            this.signIn(callback);
        });
    }

    gSignOut(callback) {
        gapi.auth2.getAuthInstance().signOut().then(()=>{
            this.signOut(callback);
        });
    }

    signIn(callback) {
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
                this.set({
                    userID: profile.getId(),
                    name: profile.getName(),
                    email: profile.getEmail(),
                });
                if (callback) {
                    callback();
                }
            }
        });
    }

    signOut(callback) {
        $.ajax({
            type: 'GET',
            xhrFields: {
                withCredentials: true
            },
            url: config.backendURL + '/api/logout/',
            success: ()=>{
                this.model.unset(['userID','name','email']);
                if (callback) {
                    callback();
                }
            }
        });
    }
    
	set(payload) {
        this.model.set(payload);
    }
}

UserStore.storeName = 'UserStore';
UserStore.handlers = {
    'signIn' : 'gSignIn',
    'signOut' : 'gSignOut'
};

module.exports = UserStore;
