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

    setLoading(bool) {
        if (bool) {
            this.model.set({loading: this.model.loading + 1});
        } else {
            if (this.model.loading - 1 >= 0) {
                this.model.set({loading: this.model.loading - 1});
            } else {
                this.model.set({loading: 0});
            }
        }
    }
}

GlobalStore.storeName = 'GlobalStore';
GlobalStore.handlers = {
    'set' : 'set',
    'setApp' : 'setApp',
    'setLoading' : 'setLoading'
};

module.exports = GlobalStore;
