'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var State = require('./State');
var config = require('./config');

class Store extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new State();
        this.refreshCategory();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }
    
	set(payload) {
        this.model.set(payload);
    }

    setCategory(payload) {
        this.model.set(payload);
        this.refreshCategory();
    }

    refreshCategory() {
        var catNum = config.categoryToNum(this.model.category);
        var category = catNum > 0 ? "?category=" + catNum : "";
        $.ajax({
            type: 'GET',
            url: config.backendURL + '/api/postings/' + category,
            success: (responseBody)=>{
                if (responseBody.data) {
                    this.set({postings: responseBody.data});
                }
            }
        })
    }
}

Store.storeName = 'Store';
Store.handlers = {
    'set' : 'set',
    'setCategory' : 'setCategory'
};

module.exports = Store;
