'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var UserState = require('./UserState');
var config = require('./config');

class UserStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new State();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }
    
	set(payload) {
        this.model.set(payload);
    }
}

UserStore.storeName = 'UserStore';
UserStore.handlers = {
    'set' : 'set'
};

module.exports = UserStore;
