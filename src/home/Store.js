'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var State = require('./State');
var config = require('./config');
var _ = require('underscore');

class Store extends BaseStore {
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

Store.storeName = 'Store';
Store.handlers = {
    'navigate' : 'set',
    'set' : 'set'
};

module.exports = Store;
