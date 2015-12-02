'use strict';

module.exports = {
    signIn(actionContext, callback) {
    	actionContext.dispatch('signIn', callback);
    },
    signOut(actionContext, callback) {
    	actionContext.dispatch('signOut', callback);
    }
};
