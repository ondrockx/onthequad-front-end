'use strict';

module.exports = {
    signIn(actionContext, payload) {
    	actionContext.dispatch('signIn', payload);
    },
    signOut(actionContext) {
    	actionContext.dispatch('signOut');
    }
};
