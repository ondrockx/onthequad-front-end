'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var State = require('./State');
var UserStore = require('../shared/UserStore');
var config = require('./config');

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

    setCategory(payload) {
        this.set(payload);
        this.refreshPostings();
    }

    refreshPostings() {
        var userStore = this.dispatcher.getStore(UserStore);
        if (userStore.isSignedIn()) {
            this.dispatcher.waitFor([UserStore], ()=>{
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
            })
        }
    }
}

Store.storeName = 'Store';
Store.handlers = {
    'set' : 'set',
    'setCategory' : 'setCategory',
    'userChanged' : 'refreshPostings'
};

module.exports = Store;
