'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var PostingState = require('./PostingState');
var config = require('../config');

class PostingStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new PostingState();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }
    
	set(payload) {
        this.model.set(payload);
    }

    setLoadingTrue() {
        this.model.set({isLoading: true});
    }

    setLoadingFalse() {
        this.model.set({isLoading: false})
    }

    unsetPostingMessage(payload) {
        this.model.unset(['postingMessage', 'postingMessageType']);
    }
}

PostingStore.storeName = 'PostingStore';
PostingStore.handlers = {
    'startPosting': 'setLoadingTrue',
    'endPosting' : 'setLoadingFalse',
    'setPostingMessage' : 'set',
    'unsetPostingMessage' : 'unsetPostingMessage'
};

module.exports = PostingStore;
