'use strict';

module.exports = {
    setCategory(actionContext, payload) {
    	actionContext.dispatch('setCategory', payload);
    },
    refreshPostings(actionContext) {
    	actionContext.dispatch('refreshPostings');
    }
};