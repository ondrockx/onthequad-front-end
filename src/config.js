'use strict';

var _ = require('lodash');

var config = {
	backendURL: 'https://otq.liamd.com',
	loginURL: '/login',
	browseURL: '/browse',
    postingURL: '/posting',
    accountURL: '/account',
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

export const accountURL = '/account';
export const browseURL = '/browse';
export const searchURL = '/search';
export const postingURL = '/posting';
export const getAppURL = (app) => {
    switch (app) {
        case 'BROWSE':
            return browseURL;
        case 'ACCOUNT':
            return accountURL;
        case 'SEARCH':
            return searchURL;
        case 'POSTING':
            return postingURL;
        default:
            return '/';
    }
};
export const decodeText = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};
export const numToCategory = (num) => {
    switch (num) {
        case -1:
            return 'all';
        case 1:
            return 'textbooks';
        case 2:
            return 'tickets';
        case 3:
            return 'lostandfound';
        case 4:
            return 'furniture';
        case 5:
            return 'electronics';
        case 10:
            return 'clothing';
        case 6:
            return 'vehicles';
        case 7:
            return 'supplies';
        case 8:
            return 'media';
        case 9:
            return 'other';
    }
};

export const allFalse = (obj) => {
  for(var o in obj)
    if(obj[o]) return false;
  return true;
};

export const allTrue = (obj) => {
  for(var o in obj)
    if(!obj[o]) return false;
  return true;
};

export default _.extend(config, {
    categories: _.extend({all: "All Posts"}, config.submitCategories),
});
