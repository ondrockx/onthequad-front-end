'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var CategoryState = require('./CategoryState');
var UserStore = require('../../shared/stores/UserStore');
var config = require('../config');

class Store extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new CategoryState();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }
    
	set(payload) {
        this.model.set(payload);
    }
}

Store.storeName = 'Store';
Store.handlers = {
    'set' : 'set',
    'setCategory' : 'set',
    'refreshPostings' : 'set'
};

module.exports = Store;
