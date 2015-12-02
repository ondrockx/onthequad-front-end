'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var UserState = require('./UserState');
var config = require('./config');

class UserStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new UserState();
        gapi.load('auth2', ()=>{
            this.gAuth = gapi.auth2.init({
                client_id: '441857043088-ujkkfjr5f66e1j4qq02iueink9d5fcj8.apps.googleusercontent.com',
                scope: 'profile email'
            });
            this.gAuth.isSignedIn.listen((bool)=>{
                if (bool) {
                    this.signIn();
                } else {
                    this.signOut();
                }
            });
        });
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }

    gSignIn() {
        this.gAuth.signIn();
    }

    gSignOut() {
        this.gAuth.signOut();
    }

    signIn() {
        var gUser = this.gAuth.currentUser.get();
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
            }
        });
    }

    signOut() {
        $.ajax({
            type: 'GET',
            xhrFields: {
                withCredentials: true
            },
            url: config.backendURL + '/api/logout/',
            success: ()=>{
                this.model.unset(['userID','name','email']);
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
