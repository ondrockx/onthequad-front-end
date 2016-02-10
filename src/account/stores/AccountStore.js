'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var AccountState = require('./AccountState');
var UserStore = require('../../shared/stores/UserStore');
var config = require('../config');

class Store extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new AccountState();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }
    
	set(payload) {
        this.model.set(payload);
    }
}

Store.storeName = 'AccountStore';
Store.handlers = {
    'set' : 'set',
    'setCategory' : 'set',
    'refreshPostings' : 'set'
};

module.exports = Store;
