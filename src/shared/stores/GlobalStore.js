'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var GlobalState = require('./GlobalState');
var config = require('../config');
var _ = require('underscore');

class GlobalStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new GlobalState();
        this.model.on('change', this.emitChange, this);
    }
    getModel() {
        return this.model;
    }
    
	set(payload) {
        this.model.set(payload);
    }

    setApp(payload) {
        this.set({app: payload});
    }
}

GlobalStore.storeName = 'GlobalStore';
GlobalStore.handlers = {
    'set' : 'set',
    'setApp' : 'setApp'
};

module.exports = GlobalStore;
