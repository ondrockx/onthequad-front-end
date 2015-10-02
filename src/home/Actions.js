'use strict';

module.exports = {
    navigate(actionContext, payload) {
        actionContext.dispatch('navigate', payload);
    },
    set(actionContext, payload) {
    	actionContext.dispatch('set', payload);
    }
};
