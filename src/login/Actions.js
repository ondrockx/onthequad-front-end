'use strict';

module.exports = {
    set(actionContext, payload) {
    	actionContext.dispatch('set', payload);
    }
};
