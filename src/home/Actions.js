'use strict';

module.exports = {
    set(actionContext, payload) {
    	actionContext.dispatch('setCategory', payload);
    }
};
