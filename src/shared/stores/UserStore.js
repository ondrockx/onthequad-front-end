'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var UserState = require('./UserState');
var config = require('../config');
var _ = require('underscore');

class UserStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new UserState();
        this.model.on('change', this.emitChange, this);
    }

    isSignedIn() {
        return this.model.userID;
    }

    getModel() {
        return this.model;
    }

    signOut(payload) {
        this.model.set({
            userID: config.userIDDefault,
            name: config.nameDefault,
            email: config.emailDefault
        });
    }
    
	set(payload) {
        this.model.set(payload);
    }
}

UserStore.storeName = 'UserStore';
UserStore.handlers = {
    'signIn' : 'set',
    'signOut' : 'signOut'
};

module.exports = UserStore;
