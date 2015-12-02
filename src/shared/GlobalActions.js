'use strict';

module.exports = {
    setCategory(actionContext, payload) {
    	actionContext.dispatch('setCategory', payload);
    },
    userChanged(actionContext) {
    	actionContext.dispatch('userChanged');
    }
};