'use strict';

module.exports = {
	backendURL: 'http://onthequad-backend.herokuapp.com',
	loginURL: '/login',
	browseURL: '/browse',
	categories: {
		all: "All Posts",
		textbooks: "Textbooks",
		tickets: "UConn Tickets",
		lostandfound: "Lost and Found",
		furniture: "Furniture",
		electronics: "Electronics",
		vehicles: "Vehicles",
		supplies: "School Supplies",
		entertainment: "Entertainment",
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
            case 'vehicles':
                return 6;
            case 'supplies':
                return 7;
            case 'entertainment':
                return 8;
            case 'other':
                return 9;
        }
    }
};
