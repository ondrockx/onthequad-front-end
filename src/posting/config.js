'use strict';

var _ = require('underscore');
var globalConfig = require('../shared/config');

module.exports = _.extend(globalConfig, {
	submitCategories: _.filter(globalConfig.categories, function (obj, id) {
		return !(id === "all");
	})
});
