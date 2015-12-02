'use strict';

module.exports = {
    signIn(actionContext) {
    	actionContext.dispatch('signIn');
    },
    signOut(actionContext) {
    	actionContext.dispatch('signOut');
    }
};
