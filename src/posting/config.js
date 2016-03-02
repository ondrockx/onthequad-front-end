'use strict';

var _ = require('underscore');
var globalConfig = require('../shared/config');

module.exports = _.extend(globalConfig, {
	alertSuccess: 'success',
	alertDanger: 'danger',
	successfulPosting: 'Posting Added Successfully',
	error403: 'You must be logged in to make a posting.',
	errorOther: 'There was an issue making your posting.'
});
