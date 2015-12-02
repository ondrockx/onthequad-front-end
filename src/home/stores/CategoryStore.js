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

    refreshPostings() {
        this.dispatcher.waitFor([UserStore], ()=>{
            var userStore = this.dispatcher.getStore(UserStore);
            if (userStore.isSignedIn()) {
                var catNum = config.categoryToNum(this.model.category);
                var category = catNum > 0 ? "?category=" + catNum : "";
                $.ajax({
                    type: 'GET',
                    xhrFields: {
                        withCredentials: true
                    },
                    url: config.backendURL + '/api/postings/' + category,
                    success: (responseBody)=>{
                        if (responseBody.data) {
                            this.set({postings: responseBody.data});
                        }
                    },
                    error: (XMLHttpRequest, textStatus, errorThrown)=>{
                        if (XMLHttpRequest.status === 403) {
                            //Error action
                        }
                    }
                });
            }
        });
    }
}

Store.storeName = 'Store';
Store.handlers = {
    'set' : 'set',
    'setCategory' : 'set',
    'refreshPostings' : 'set'
};

module.exports = Store;
