'use strict';

var _ = require('underscore');

var config = {
	backendURL: 'http://onthequad-backend.herokuapp.com',
	loginURL: '/login',
	browseURL: '/browse',
    postingURL: '/posting',
    submitCategories: {
        textbooks: "Textbooks",
        tickets: "UConn Tickets",
        lostandfound: "Lost and Found",
        furniture: "Furniture",
        electronics: "Electronics",
        clothing: "Clothing",
        vehicles: "Vehicles",
        supplies: "School Supplies",
        media: "Movies and Games",
        other: "Other"
    },
	primaryCategory: 'all',
    categoryToNum: function (category) {
        switch (category) {
            case 'all':
                return -1;
            case 'textbooks':
                return 1;
            case 'tickets':
                return 2;
            case 'lostandfound':
                return 3;
            case 'furniture':
                return 4;
            case 'electronics':
                return 5;
            case 'clothing':
                return 10;
            case 'vehicles':
                return 6;
            case 'supplies':
                return 7;
            case 'media':
                return 8;
            case 'other':
                return 9;
        }
    }
};

module.exports = _.extend(config, {
    categories: _.extend({all: "All Posts"}, config.submitCategories),
})