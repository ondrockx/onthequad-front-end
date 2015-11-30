'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var State = require('./State');
var config = require('./config');

class Store extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new State();
        $.ajax({
            type: 'GET',
            url: config.backendURL + '/api/postings/',
            success: (responseBody)=>{
                if (responseBody.data) {
                    this.set({postings: responseBody.data});
                }
            }
        })
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
    'set' : 'set'
};

module.exports = Store;
